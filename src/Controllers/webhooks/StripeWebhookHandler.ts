// src/Controllers/StripeWebhookHandler.ts
import { Request, Response } from "express";
import { stripe, STRIPE_WEBHOOK_SECRET } from "../../config/stripe";
import { SubscriptionStatus } from "../../../prisma/generated/prisma";
import { prisma } from "../../Db/prismaDb";


const StripeWebhookHandler = async (req: Request, res: Response) => {
    try {
        const signature = req.headers['stripe-signature'] as string;

        if (!signature) {
            console.error('Webhook error: No signature provided');
            res.status(400).send('Webhook Error: No signature provided');
            return;
        }

        // Verify the event came from Stripe
        let event;
        try {
            // Use raw body for signature verification
            event = stripe.webhooks.constructEvent(
                req.body, // This must be raw Buffer
                signature,
                STRIPE_WEBHOOK_SECRET
            );
        } catch (err) {
            console.error('Webhook signature verification failed:', err);
            res.status(400).send(`Webhook Error`);
            return;
        }

        console.log(`Webhook event received: ${event.type}`);

        // Handle the event
        switch (event.type) {
            case 'payment_intent.succeeded': {
                const paymentIntent = event.data.object;
                await handlePaymentIntentSucceeded(paymentIntent);
                break;
            }

            case 'payment_intent.payment_failed': {
                const paymentIntent = event.data.object;
                await handlePaymentIntentFailed(paymentIntent);
                break;
            }

            case 'customer.subscription.created':
            case 'customer.subscription.updated': {
                const subscription = event.data.object;
                await handleSubscriptionUpdated(subscription);
                break;
            }

            case 'customer.subscription.deleted': {
                const subscription = event.data.object;
                await handleSubscriptionDeleted(subscription);
                break;
            }

            case 'invoice.payment_succeeded': {
                const invoice = event.data.object;
                await handleInvoicePaymentSucceeded(invoice);
                break;
            }

            case 'invoice.payment_failed': {
                const invoice = event.data.object;
                await handleInvoicePaymentFailed(invoice);
                break;
            }

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        // Return success response
        res.status(200).json({ received: true });
        return;
    } catch (error) {
        console.error("Error handling Stripe webhook:", error);
        res.status(500).json({
            message: "An error occurred while handling the Stripe webhook",
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
            return 'INCOMPLETE'
    }
};

// Helper function for safe date conversion
const safeTimestampToDate = (timestamp: number | undefined | null): Date => {
    if (!timestamp) return new Date();
    return new Date(timestamp * 1000);
};

// Handler for payment_intent.succeeded event
const handlePaymentIntentSucceeded = async (paymentIntent: any) => {
    try {
        console.log('Processing payment intent success:', paymentIntent.id);

        // Extract metadata
        const metadata = paymentIntent.metadata || {};
        const userId = metadata.userId;
        const paymentType = metadata.paymentType;
        const flyerId = metadata.flyerId;
        const couponId = metadata.couponId;

        if (!userId) {
            console.log('No user ID in payment intent metadata, skipping');
            return;
        }

        // Record payment in our database
        const payment = await prisma.payment.create({
            data: {
                userId,
                amount: paymentIntent.amount / 100, // Convert back from cents
                currency: paymentIntent.currency,
                stripePaymentId: paymentIntent.id,
                paymentType: paymentType || 'SUBSCRIPTION',
                status: paymentIntent.status,
                metadata: metadata as any,
                flyerId: flyerId || undefined,
                couponId: couponId || undefined
            }
        });

        console.log('Payment recorded:', payment.id);

        // Handle specific payment types
        if (paymentType === 'FLYER_UPLOAD' && flyerId) {
            await prisma.flyer.update({
                where: { id: flyerId },
                data: { isPaid: true }
            });
            console.log('Flyer marked as paid:', flyerId);
        }

        if (paymentType === 'COUPON_PURCHASE' && couponId) {
            await prisma.purchasedCoupon.create({
                data: {
                    userId,
                    couponId,
                    amount: paymentIntent.amount / 100,
                    currency: paymentIntent.currency,
                    stripePaymentId: paymentIntent.id
                }
            });
            console.log('Coupon purchase recorded for coupon:', couponId);
        }
    } catch (error) {
        console.error('Error handling payment intent success:', error);
    }
};

// Handler for payment_intent.payment_failed event
const handlePaymentIntentFailed = async (paymentIntent: any) => {
    try {
        console.log('Processing payment intent failure:', paymentIntent.id);

        // Extract metadata
        const metadata = paymentIntent.metadata || {};
        const userId = metadata.userId;

        if (!userId) {
            console.log('No user ID in payment intent metadata, skipping');
            return;
        }

        // Record failed payment
        await prisma.payment.create({
            data: {
                userId,
                amount: paymentIntent.amount / 100,
                currency: paymentIntent.currency,
                stripePaymentId: paymentIntent.id,
                paymentType: metadata.paymentType || 'SUBSCRIPTION',
                status: 'failed',
                metadata: metadata as any,
                flyerId: metadata.flyerId || undefined,
                couponId: metadata.couponId || undefined
            }
        });

        console.log('Failed payment recorded for user:', userId);
    } catch (error) {
        console.error('Error handling payment intent failure:', error);
    }
};

// Handler for customer.subscription events
const handleSubscriptionUpdated = async (subscription: any) => {
    try {
        console.log('Processing subscription update:', subscription.id);

        // Get the subscription from our database
        const dbSubscription = await prisma.subscription.findFirst({
            where: {
                stripeSubscriptionId: subscription.id
            }
        });

        if (!dbSubscription) {
            console.log('Subscription not found in database:', subscription.id);
            return;
        }

        // Map Stripe status to our enum
        const status = mapStripeStatusToEnum(subscription.status);

        // Safely convert timestamps to dates
        const currentPeriodStart = safeTimestampToDate(subscription.current_period_start);
        const currentPeriodEnd = safeTimestampToDate(subscription.current_period_end);

        // Update the subscription in our database
        await prisma.subscription.update({
            where: {
                id: dbSubscription.id
            },
            data: {
                status,
                currentPeriodStart,
                currentPeriodEnd,
                cancelAtPeriodEnd: subscription.cancel_at_period_end
            }
        });

        // Update the user's subscription status
        await prisma.user.update({
            where: {
                id: dbSubscription.userId
            },
            data: {
                hasActiveSubscription: status === 'ACTIVE' || status === 'TRIALING',
                subscriptionStatus: status,
                currentPeriodEnd
            }
        });

        console.log('Subscription and user updated with status:', status);
    } catch (error) {
        console.error('Error handling subscription update:', error);
    }
};

// Handler for customer.subscription.deleted event
const handleSubscriptionDeleted = async (subscription: any) => {
    try {
        console.log('Processing subscription deletion:', subscription.id);

        // Get the subscription from our database
        const dbSubscription = await prisma.subscription.findFirst({
            where: {
                stripeSubscriptionId: subscription.id
            }
        });

        if (!dbSubscription) {
            console.log('Subscription not found in database:', subscription.id);
            return;
        }

        // Update the subscription in our database
        await prisma.subscription.update({
            where: {
                id: dbSubscription.id
            },
            data: {
                status: 'CANCELED',
                cancelAtPeriodEnd: false
            }
        });

        // Update the user's subscription status
        await prisma.user.update({
            where: {
                id: dbSubscription.userId
            },
            data: {
                hasActiveSubscription: false,
                subscriptionStatus: 'CANCELED'
            }
        });

        console.log('Subscription marked as canceled for user:', dbSubscription.userId);
    } catch (error) {
        console.error('Error handling subscription deletion:', error);
    }
};

// Handler for invoice events
const handleInvoicePaymentSucceeded = async (invoice: any) => {
    try {
        console.log('Processing invoice payment success:', invoice.id);

        // Check if this is a subscription invoice
        if (!invoice.subscription) {
            console.log('Not a subscription invoice, skipping');
            return;
        }

        // Get the subscription from our database
        const dbSubscription = await prisma.subscription.findFirst({
            where: {
                stripeSubscriptionId: invoice.subscription
            }
        });

        if (!dbSubscription) {
            console.log('Subscription not found in database:', invoice.subscription);
            return;
        }

        // Update the subscription status to active
        await prisma.subscription.update({
            where: {
                id: dbSubscription.id
            },
            data: {
                status: 'ACTIVE'
            }
        });

        // Update the user's subscription status
        await prisma.user.update({
            where: {
                id: dbSubscription.userId
            },
            data: {
                hasActiveSubscription: true,
                subscriptionStatus: 'ACTIVE'
            }
        });

        console.log('Subscription activated for user:', dbSubscription.userId);

        // Record the payment
        await prisma.payment.create({
            data: {
                userId: dbSubscription.userId,
                amount: invoice.amount_paid / 100,
                currency: invoice.currency,
                stripePaymentId: invoice.payment_intent || invoice.id,
                paymentType: 'SUBSCRIPTION',
                status: 'succeeded',
                subscriptionId: dbSubscription.id
            }
        });

        console.log('Payment recorded for subscription:', dbSubscription.id);
    } catch (error) {
        console.error('Error handling invoice payment success:', error);
    }
};

const handleInvoicePaymentFailed = async (invoice: any) => {
    try {
        console.log('Processing invoice payment failure:', invoice.id);

        // Check if this is a subscription invoice
        if (!invoice.subscription) {
            console.log('Not a subscription invoice, skipping');
            return;
        }

        // Get the subscription from our database
        const dbSubscription = await prisma.subscription.findFirst({
            where: {
                stripeSubscriptionId: invoice.subscription
            }
        });

        if (!dbSubscription) {
            console.log('Subscription not found in database:', invoice.subscription);
            return;
        }

        // Update the subscription status
        await prisma.subscription.update({
            where: {
                id: dbSubscription.id
            },
            data: {
                status: 'PAST_DUE'
            }
        });

        // Update the user's subscription status
        await prisma.user.update({
            where: {
                id: dbSubscription.userId
            },
            data: {
                hasActiveSubscription: false,
                subscriptionStatus: 'PAST_DUE'
            }
        });

        console.log('Subscription marked as past due for user:', dbSubscription.userId);

        // Record the failed payment
        await prisma.payment.create({
            data: {
                userId: dbSubscription.userId,
                amount: invoice.amount_due / 100,
                currency: invoice.currency,
                stripePaymentId: invoice.payment_intent || invoice.id,
                paymentType: 'SUBSCRIPTION',
                status: 'failed',
                subscriptionId: dbSubscription.id
            }
        });

        console.log('Failed payment recorded for subscription:', dbSubscription.id);
    } catch (error) {
        console.error('Error handling invoice payment failure:', error);
    }
};

export default StripeWebhookHandler;