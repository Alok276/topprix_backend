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
    latest_invoice?: any; // Using any to handle both string ID and expanded object
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

        // Check if user is a retailer - ENFORCE RETAILER ONLY SUBSCRIPTION
        if (user.role !== UserRole.RETAILER) {
            res.status(403).json({
                message: "Subscriptions are only available for retailers. Regular users cannot subscribe."
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
            expand: ['latest_invoice'], // Expand invoice to get the hosted invoice URL
            metadata: {
                userId: user.id,
                pricingPlanId: pricingPlan.id
            }
        });

        // Type assertion to ensure we have the fields we need
        const subscription = stripeResponse as unknown as StripeSubscriptionWithInvoice;

        // Extract the hosted invoice URL from the invoice
        let hostedInvoiceUrl = null;
        let invoicePdfUrl = null;

        if (subscription.latest_invoice && typeof subscription.latest_invoice !== 'string') {
            const invoice = subscription.latest_invoice;
            hostedInvoiceUrl = invoice.hosted_invoice_url || null;
            invoicePdfUrl = invoice.invoice_pdf || null;
        }

        // Map Stripe subscription status to our enum
        const subscriptionStatus = mapStripeStatusToEnum(subscription.status);

        // Calculate dates safely with default values
        const currentPeriodStart = subscription.current_period_start
            ? new Date(subscription.current_period_start * 1000)
            : new Date();

        let currentPeriodEnd = new Date(currentPeriodStart);

        // Set end date based on plan interval
        switch (pricingPlan.interval.toLowerCase()) {
            case 'day':
                currentPeriodEnd.setDate(currentPeriodEnd.getDate() + 1);
                break;
            case 'week':
                currentPeriodEnd.setDate(currentPeriodEnd.getDate() + 7);
                break;
            case 'month':
                currentPeriodEnd.setMonth(currentPeriodEnd.getMonth() + 1);
                break;
            case 'year':
                currentPeriodEnd.setFullYear(currentPeriodEnd.getFullYear() + 1);
                break;
            default:
                // Default to 30 days if interval is unrecognized
                currentPeriodEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        }

        console.log('Creating subscription with interval:', pricingPlan.interval);
        console.log('Start date:', currentPeriodStart);
        console.log('Calculated end date:', currentPeriodEnd);
        // In CreateSubscription.ts where you're setting the initial dates

        // Create subscription record in database
        const dbSubscription = await prisma.subscription.create({
            data: {
                userId: user.id,
                pricingPlanId: pricingPlan.id,
                stripeSubscriptionId: subscription.id,
                status: subscriptionStatus,
                currentPeriodStart,
                currentPeriodEnd,
                cancelAtPeriodEnd: subscription.cancel_at_period_end || false
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
            message: "Subscription created successfully. Please complete payment to activate.",
            subscriptionId: subscription.id,
            hostedInvoiceUrl: hostedInvoiceUrl, // Frontend can redirect to this for payment
            invoicePdfUrl: invoicePdfUrl,
            subscription: dbSubscription,
            paymentInstructions: "Click on the payment link to complete your subscription payment."
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