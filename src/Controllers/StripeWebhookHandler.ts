// src/Controllers/webhooks/StripeWebhookHandler.ts
import { Request, Response } from "express";
import { stripe, STRIPE_WEBHOOK_SECRET } from "../config/stripe";
import { SubscriptionStatus } from "../../prisma/generated/prisma";

const StripeWebhookHandler = async (req: Request, res: Response) => {
    try {
        const signature = req.headers['stripe-signature'] as string;

        if (!signature) {
            res.status(400).json({ message: "Stripe signature is missing" });
            return;
        }

        // Verify the event came from Stripe
        let event;
        try {
            event = stripe.webhooks.constructEvent(
                req.body,
                signature,
                STRIPE_WEBHOOK_SECRET
            );
        } catch (err) {
            console.error('Webhook signature verification failed:', err);
            res.status(400).json({ message: "Webhook signature verification failed" });
            return;
        }

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
            return 'INCOMPLETE';
    }
};

// Handler for payment_intent.succeeded event
const handlePaymentIntentSucceeded = async (paymentIntent: any) => {
    // Implementation similar to HandlePaymentSuccess controller
    // Check metadata, process payments for flyers and coupons
};

// Handler for payment_intent.payment_failed event
const handlePaymentIntentFailed = async (paymentIntent: any) => {
    // Record failed payment
};

// Handler for customer.subscription events
const handleSubscriptionUpdated = async (subscription: any) => {
    // Update subscription record
};

// Handler for customer.subscription.deleted event
const handleSubscriptionDeleted = async (subscription: any) => {
    // Cancel subscription
};

// Handler for invoice events
const handleInvoicePaymentSucceeded = async (invoice: any) => {
    // Process subscription payment
};

const handleInvoicePaymentFailed = async (invoice: any) => {
    // Handle failed subscription payment
};

export default StripeWebhookHandler;