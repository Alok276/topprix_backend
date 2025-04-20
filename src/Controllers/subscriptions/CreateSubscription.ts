// src/Controllers/subscriptions/CreateSubscription.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";
import { SubscriptionStatus, UserRole } from "../../../prisma/generated/prisma";

// Define a type that includes the fields we need from Stripe
interface StripeSubscriptionWithInvoice {
    id: string;
    current_period_start: number;
    current_period_end: number;
    status: string;
    cancel_at_period_end: boolean;
    latest_invoice?: {
        payment_intent?: {
            client_secret?: string;
        }
    };
}

const CreateSubscription = async (req: Request, res: Response) => {
    try {
        const { userId, pricingPlanId } = req.body;

        if (!userId || !pricingPlanId) {
            res.status(400).json({
                message: "Missing required fields: userId and pricingPlanId are required"
            });
            return;
        }

        // Find the user
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Check if user is a retailer
        if (user.role !== UserRole.RETAILER) {
            res.status(400).json({
                message: "Subscriptions are only available for retailers"
            });
            return;
        }

        // Find the pricing plan
        const pricingPlan = await prisma.pricingPlan.findUnique({
            where: { id: pricingPlanId }
        });

        if (!pricingPlan) {
            res.status(404).json({ message: "Pricing plan not found" });
            return;
        }

        if (!pricingPlan.isActive) {
            res.status(400).json({ message: "Selected pricing plan is not active" });
            return;
        }

        // Check if the user already has a Stripe customer ID
        let stripeCustomerId = user.stripeCustomerId;

        // If not, create a Stripe customer
        if (!stripeCustomerId) {
            const customer = await stripe.customers.create({
                email: user.email,
                name: user.name || undefined,
                phone: user.phone || undefined,
                metadata: {
                    userId: user.id
                }
            });

            stripeCustomerId = customer.id;

            // Update user with Stripe customer ID
            await prisma.user.update({
                where: { id: user.id },
                data: { stripeCustomerId }
            });
        }

        // Create Stripe subscription
        const stripeResponse = await stripe.subscriptions.create({
            customer: stripeCustomerId,
            items: [
                {
                    price: pricingPlan.stripePriceId
                }
            ],
            payment_behavior: 'default_incomplete',
            expand: ['latest_invoice.payment_intent'],
            metadata: {
                userId: user.id,
                pricingPlanId: pricingPlan.id
            }
        });

        // Type assertion to ensure we have the fields we need
        const subscription = stripeResponse as unknown as StripeSubscriptionWithInvoice;

        // Extract client secret for payment confirmation
        const clientSecret = subscription?.latest_invoice?.payment_intent?.client_secret;

        // Map Stripe subscription status to our enum
        const subscriptionStatus = mapStripeStatusToEnum(subscription.status);

        // Calculate dates safely
        const currentPeriodStart = new Date(subscription.current_period_start * 1000);
        const currentPeriodEnd = new Date(subscription.current_period_end * 1000);

        // Create subscription record in database
        const dbSubscription = await prisma.subscription.create({
            data: {
                userId: user.id,
                pricingPlanId: pricingPlan.id,
                stripeSubscriptionId: subscription.id,
                status: subscriptionStatus,
                currentPeriodStart,
                currentPeriodEnd,
                cancelAtPeriodEnd: subscription.cancel_at_period_end
            }
        });

        // Update user subscription status
        await prisma.user.update({
            where: { id: user.id },
            data: {
                subscriptionId: dbSubscription.id,
                subscriptionStatus: subscriptionStatus,
                pricingPlanId: pricingPlan.id,
                currentPeriodEnd,
                hasActiveSubscription: subscriptionStatus === 'ACTIVE' || subscriptionStatus === 'TRIALING'
            }
        });

        res.status(200).json({
            message: "Subscription created successfully",
            subscriptionId: subscription.id,
            clientSecret: clientSecret,
            subscription: dbSubscription
        });
        return;

    } catch (error) {
        console.error("Error creating subscription:", error);
        res.status(500).json({
            message: "An error occurred while creating the subscription",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

// Helper function to map Stripe status to our enum
const mapStripeStatusToEnum = (stripeStatus: string): SubscriptionStatus => {
    switch (stripeStatus) {
        case 'active':
            return 'ACTIVE';
        case 'past_due':
            return 'PAST_DUE';
        case 'canceled':
            return 'CANCELED';
        case 'unpaid':
            return 'UNPAID';
        case 'trialing':
            return 'TRIALING';
        case 'incomplete':
            return 'INCOMPLETE';
        case 'incomplete_expired':
            return 'INCOMPLETE_EXPIRED';
        default:
            return 'INCOMPLETE';
    }
};

export default CreateSubscription;