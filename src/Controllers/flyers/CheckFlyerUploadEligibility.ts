// src/Controllers/flyers/CheckFlyerUploadEligibility.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { UserRole } from "../../../prisma/generated/prisma";

const CheckFlyerUploadEligibility = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            res.status(400).json({ message: "User ID is required" });
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

        // Only retailers can upload flyers
        if (user.role !== UserRole.RETAILER) {
            res.status(403).json({
                message: "Only retailers can upload flyers",
                requiresPayment: false,
                canUpload: false
            });
            return;
        }

        // Check if the user has an active subscription
        const hasActiveSubscription = user.hasActiveSubscription &&
            user.subscriptionStatus === 'ACTIVE' &&
            user.currentPeriodEnd &&
            user.currentPeriodEnd > new Date();

        // Default flyer upload price if no subscription
        const defaultPrice = 9.99; // You might want to store this in a config or db setting

        // Determine if payment is required
        const requiresPayment = !hasActiveSubscription;

        res.status(200).json({
            userId,
            hasActiveSubscription,
            requiresPayment,
            canUpload: true, // They can upload, but might need to pay
            paymentAmount: requiresPayment ? defaultPrice : 0,
            currency: "eur"
        });
        return;

    } catch (error) {
        console.error("Error checking flyer upload eligibility:", error);
        res.status(500).json({
            message: "An error occurred while checking flyer upload eligibility",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default CheckFlyerUploadEligibility;