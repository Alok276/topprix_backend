// src/Controllers/subscriptions/GetUserSubscription.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetUserSubscription = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            res.status(400).json({
                message: "Missing required field: userId is required"
            });
            return;
        }

        // Find the user's subscription
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                hasActiveSubscription: true,
                subscriptionStatus: true,
                currentPeriodEnd: true,
                subscriptions: {
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 1,
                    include: {
                        pricingPlan: true
                    }
                }
            }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const subscription = user.subscriptions.length > 0 ? user.subscriptions[0] : null;

        res.status(200).json({
            subscription,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                hasActiveSubscription: user.hasActiveSubscription,
                subscriptionStatus: user.subscriptionStatus,
                currentPeriodEnd: user.currentPeriodEnd
            }
        });
        return;

    } catch (error) {
        console.error("Error getting user subscription:", error);
        res.status(500).json({
            message: "An error occurred while getting the user subscription",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetUserSubscription;