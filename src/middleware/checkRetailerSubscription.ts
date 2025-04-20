// src/middleware/checkRetailerSubscription.ts
import { Request, Response, NextFunction } from "express";
import { UserRole } from "../../prisma/generated/prisma";
import { prisma } from "../Db/prismaDb";

/**
 * Middleware to check if a retailer has an active subscription
 * Must be used after the getUserFromEmail middleware
 */
export const checkRetailerSubscription = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // Check if user exists in the request
        if (!req.user) {
            res.status(401).json({ message: "Authentication required" });
            return;
        }

        // Only check subscription for retailers
        if (req.user.role !== UserRole.RETAILER) {
            next();
            return;
        }

        // Get the full user record with subscription details
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                hasActiveSubscription: true,
                subscriptionStatus: true,
                currentPeriodEnd: true
            }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Check if subscription is active
        const hasActiveSubscription = !!(
            user.hasActiveSubscription &&
            user.subscriptionStatus === 'ACTIVE' &&
            user.currentPeriodEnd &&
            user.currentPeriodEnd > new Date()
        );

        // Attach subscription status to request
        req.retailerHasActiveSubscription = hasActiveSubscription;

        // Continue with the request
        next();
    } catch (error) {
        console.error("Error checking retailer subscription:", error);
        res.status(500).json({
            message: "An error occurred while checking subscription status",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

/**
 * Middleware to require an active subscription for retailers
 * Must be used after checkRetailerSubscription middleware
 */
export const requireRetailerSubscription = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Non-retailers can proceed
    if (req.user?.role !== UserRole.RETAILER) {
        next();
        return;
    }

    // Check if retailer has active subscription
    if (!req.retailerHasActiveSubscription) {
        res.status(403).json({
            message: "This action requires an active retailer subscription",
            subscriptionRequired: true
        });
        return;
    }

    // Retailer has an active subscription, proceed
    next();
};

// Add the property to the Express Request interface
declare global {
    namespace Express {
        interface Request {
            retailerHasActiveSubscription?: boolean;
        }
    }
}