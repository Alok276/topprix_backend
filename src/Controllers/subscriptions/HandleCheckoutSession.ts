// src/Controllers/subscriptions/HandleCheckoutSession.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";
import { SubscriptionStatus } from "../../../prisma/generated/prisma";

/**
 * Create a more complete interface for the Stripe Subscription
 * This defines exactly the properties we need from the Stripe API response
 */
interface StripeSubscriptionResponse {
    id: string;
    status: string;
    current_period_start: number;
    current_period_end: number;
    cancel_at_period_end: boolean;
}

/**
 * Safely converts a Stripe timestamp to a JavaScript Date object
 * Handles undefined, null, or invalid timestamps by returning current date
 */
const safeTimestampToDate = (timestamp: number | undefined | null): Date => {
    if (timestamp === undefined || timestamp === null) {
        console.log('Warning: Missing timestamp, using current date as fallback');
        return new Date();
    }

    try {
        return new Date(timestamp * 1000);
    } catch (error) {
        console.error('Error converting timestamp to date:', error, 'timestamp:', timestamp);
        return new Date();
    }
};

const HandleCheckoutSession = async (req: Request, res: Response) => {
    try {
        const { sessionId } = req.body;

        if (!sessionId) {
            res.status(400).json({
                message: "Missing required field: sessionId is required"
            });
            return;
        }

        // Retrieve the session from Stripe
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ['subscription']
        });

        // Check if the session was completed
        if (session.status !== 'complete') {
            res.status(400).json({
                message: `Checkout session is not complete. Current status: ${session.status}`
            });
            return;
        }

        // Get the subscription ID from the session
        const stripeSubscriptionId = typeof session.subscription === 'string'
            ? session.subscription
            : session.subscription?.id;

        if (!stripeSubscriptionId) {
            res.status(400).json({
                message: "No subscription was created from this checkout session"
            });
            return;
        }

        // Get subscription details and force the type
        const stripeSubscriptionData = await stripe.subscriptions.retrieve(stripeSubscriptionId);

        // Use a type assertion to treat the response as our custom interface
        const stripeSubscription = stripeSubscriptionData as unknown as StripeSubscriptionResponse;

        // Extract user ID and pricing plan ID from metadata
        const userId = session.metadata?.userId;
        const pricingPlanId = session.metadata?.pricingPlanId;
        const tempSubscriptionId = session.metadata?.tempSubscriptionId;

        if (!userId || !pricingPlanId) {
            res.status(400).json({
                message: "Missing metadata in checkout session"
            });
            return;
        }

        // Map Stripe status to our enum
        const subscriptionStatus = mapStripeStatusToEnum(stripeSubscription.status);

        // Calculate dates from the subscription using our safe function
        const currentPeriodStart = safeTimestampToDate(stripeSubscription.current_period_start);
        const currentPeriodEnd = safeTimestampToDate(stripeSubscription.current_period_end);

        // Update the temporary subscription if it exists, or create a new one
        let dbSubscription;

        if (tempSubscriptionId) {
            const tempSubExists = await prisma.subscription.findUnique({
                where: { id: tempSubscriptionId }
            });

            if (tempSubExists) {
                dbSubscription = await prisma.subscription.update({
                    where: { id: tempSubscriptionId },
                    data: {
                        stripeSubscriptionId,
                        status: subscriptionStatus,
                        currentPeriodStart,
                        currentPeriodEnd,
                        cancelAtPeriodEnd: stripeSubscription.cancel_at_period_end
                    }
                });
            } else {
                // Create new subscription if temp one not found
                dbSubscription = await prisma.subscription.create({
                    data: {
                        userId,
                        pricingPlanId,
                        stripeSubscriptionId,
                        status: subscriptionStatus,
                        currentPeriodStart,
                        currentPeriodEnd,
                        cancelAtPeriodEnd: stripeSubscription.cancel_at_period_end
                    }
                });
            }
        } else {
            // Check if a subscription with this Stripe ID already exists
            const existingSub = await prisma.subscription.findFirst({
                where: { stripeSubscriptionId }
            });

            if (existingSub) {
                dbSubscription = await prisma.subscription.update({
                    where: { id: existingSub.id },
                    data: {
                        status: subscriptionStatus,
                        currentPeriodStart,
                        currentPeriodEnd,
                        cancelAtPeriodEnd: stripeSubscription.cancel_at_period_end
                    }
                });
            } else {
                // Create new subscription if none found
                dbSubscription = await prisma.subscription.create({
                    data: {
                        userId,
                        pricingPlanId,
                        stripeSubscriptionId,
                        status: subscriptionStatus,
                        currentPeriodStart,
                        currentPeriodEnd,
                        cancelAtPeriodEnd: stripeSubscription.cancel_at_period_end
                    }
                });
            }
        }

        // Update the user's subscription status
        await prisma.user.update({
            where: { id: userId },
            data: {
                subscriptionId: dbSubscription.id,
                subscriptionStatus: subscriptionStatus,
                pricingPlanId,
                currentPeriodEnd,
                hasActiveSubscription: subscriptionStatus === 'ACTIVE' || subscriptionStatus === 'TRIALING'
            }
        });

        // Create a record of the payment
        await prisma.payment.create({
            data: {
                userId,
                amount: session.amount_total ? session.amount_total / 100 : 0,
                currency: session.currency || 'eur',
                stripePaymentId: typeof session.payment_intent === 'string'
                    ? session.payment_intent
                    : `session_${session.id}`,
                paymentType: 'SUBSCRIPTION',
                status: 'succeeded',
                subscriptionId: dbSubscription.id,
                metadata: {
                    checkoutSessionId: session.id,
                    subscriptionStart: currentPeriodStart,
                    subscriptionEnd: currentPeriodEnd
                }
            }
        });

        res.status(200).json({
            message: "Subscription activated successfully",
            subscription: {
                id: dbSubscription.id,
                status: dbSubscription.status,
                currentPeriodEnd: dbSubscription.currentPeriodEnd
            }
        });
        return;
    } catch (error) {
        console.error("Error handling checkout session:", error);
        res.status(500).json({
            message: "An error occurred while handling the checkout session",
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

export default HandleCheckoutSession;