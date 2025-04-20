// src/Controllers/subscriptions/CancelSubscription.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";

const CancelSubscription = async (req: Request, res: Response) => {
    try {
        const { userId, atPeriodEnd = true } = req.body;

        if (!userId) {
            res.status(400).json({
                message: "Missing required field: userId is required"
            });
            return;
        }

        // Find the user
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                subscriptions: {
                    where: {
                        status: { in: ['ACTIVE', 'TRIALING'] }
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 1
                }
            }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        if (user.subscriptions.length === 0) {
            res.status(404).json({ message: "No active subscription found for user" });
            return;
        }

        const subscription = user.subscriptions[0];

        // Cancel the subscription in Stripe
        await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
            cancel_at_period_end: atPeriodEnd
        });

        // Update the subscription in the database
        await prisma.subscription.update({
            where: { id: subscription.id },
            data: {
                cancelAtPeriodEnd: atPeriodEnd,
                status: atPeriodEnd ? subscription.status : 'CANCELED'
            }
        });

        // If cancelling immediately, update user's subscription status
        if (!atPeriodEnd) {
            await prisma.user.update({
                where: { id: userId },
                data: {
                    hasActiveSubscription: false,
                    subscriptionStatus: 'CANCELED'
                }
            });
        }

        res.status(200).json({
            message: atPeriodEnd
                ? "Subscription will be canceled at the end of the billing period"
                : "Subscription has been canceled immediately",
            subscription: {
                id: subscription.id,
                cancelAtPeriodEnd: atPeriodEnd
            }
        });
        return;

    } catch (error) {
        console.error("Error cancelling subscription:", error);
        res.status(500).json({
            message: "An error occurred while cancelling the subscription",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default CancelSubscription;