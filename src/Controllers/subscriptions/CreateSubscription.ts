// src/Controllers/subscriptions/CreateSubscription.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";
import { SubscriptionStatus, UserRole } from "../../../prisma/generated/prisma";

const CreateSubscription = async (req: Request, res: Response) => {
    try {
        const { userId, pricingPlanId, successUrl, cancelUrl } = req.body;

        // Validate required fields
        if (!userId || !pricingPlanId) {
            res.status(400).json({
                message: "Missing required fields: userId and pricingPlanId are required"
            });
            return;
        }

        // Default return URLs if not provided
        const defaultBaseUrl = process.env.FRONTEND_URL || 'https://topprix.re';
        const defaultSuccessUrl = `${defaultBaseUrl}/subscription/success?session_id={CHECKOUT_SESSION_ID}`;
        const defaultCancelUrl = `${defaultBaseUrl}/subscription/canceled`;

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

        // Create a temporary database entry for the subscription
        const tempSubscription = await prisma.subscription.create({
            data: {
                userId: user.id,
                pricingPlanId: pricingPlan.id,
                stripeSubscriptionId: 'pending_checkout',
                status: 'INCOMPLETE',
                currentPeriodStart: new Date(),
                currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Default to 30 days
                cancelAtPeriodEnd: false
            }
        });

        // Create a checkout session for the subscription
        const session = await stripe.checkout.sessions.create({
            customer: stripeCustomerId,
            payment_method_types: ['card'],
            line_items: [
                {
                    price: pricingPlan.stripePriceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: successUrl || defaultSuccessUrl,
            cancel_url: cancelUrl || defaultCancelUrl,
            metadata: {
                userId: user.id,
                pricingPlanId: pricingPlan.id,
                tempSubscriptionId: tempSubscription.id
            },
            subscription_data: {
                metadata: {
                    userId: user.id,
                    pricingPlanId: pricingPlan.id,
                    tempSubscriptionId: tempSubscription.id
                }
            }
        });

        // Return the checkout session URL and ID
        res.status(200).json({
            message: "Subscription checkout session created",
            checkoutUrl: session.url,
            sessionId: session.id,
            tempSubscriptionId: tempSubscription.id
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

export default CreateSubscription;