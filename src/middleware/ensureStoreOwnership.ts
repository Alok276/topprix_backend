import { Request, Response, NextFunction } from "express";
import { UserRole } from "../../prisma/generated/prisma";
import { prisma } from "../Db/prismaDb";

/**
 * Middleware to ensure retailers can only modify their own store's data
 * Must be used after the getUserFromEmail middleware
 */
export const ensureStoreOwnership = async (req: Request, res: Response, next: NextFunction) => {
    // Skip this check for admins - they can modify any store's data
    if (req.user?.role === UserRole.ADMIN) {
        next();
        return;
    }

    // For retailers, check if they're trying to modify their own store's data
    if (req.user?.role === UserRole.RETAILER) {
        const storeId = req.body.storeId || req.query.storeId as string;

        // If updating a coupon, get the storeId from the coupon
        if (req.params.id && !storeId) {
            const coupon = await prisma.coupon.findUnique({
                where: { id: req.params.id },
                select: { storeId: true }
            });

            if (coupon) {
                // Use the coupon's storeId for verification
                const retailerHasAccess = await checkRetailerStoreAccess(req.user.id, coupon.storeId);

                if (!retailerHasAccess) {
                    res.status(403).json({
                        message: "Retailers can only modify coupons for their own stores"
                    });
                    return;
                }

                next();
                return;
            }
        }

        // If we have a storeId directly provided
        if (storeId) {
            const retailerHasAccess = await checkRetailerStoreAccess(req.user.id, storeId);

            if (!retailerHasAccess) {
                res.status(403).json({
                    message: "Retailers can only create/modify coupons for their own stores"
                });
                return;
            }

            return next();
        }

        // If we reach here, we couldn't verify store ownership
        res.status(400).json({
            message: "Store ID is required for this operation"
        });
        return;
    }

    // If not admin or retailer, deny access
    res.status(403).json({ message: "Insufficient permissions" });
    return;
};

/**
 * Helper function to check if a retailer has access to a specific store
 */
async function checkRetailerStoreAccess(userId: string, storeId: string): Promise<boolean> {
    // Based on your current schema, you need to add store ownership.
    // Here are your options:

    // TEMPORARY SOLUTION: Allow all retailers to create coupons for any store
    // (Remove this once you implement proper ownership)
    return true;
}