import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const SaveCoupon = async (req: Request, res: Response) => {
    try {
        const { couponId } = req.body;
        const userId = req.user?.id;

        // Validate required fields
        if (!couponId) {
            res.status(400).json({
                message: "Missing required field: couponId is required"
            });
            return;
        }

        if (!userId) {
            res.status(401).json({
                message: "Authentication required"
            });
            return;
        }

        // Check if coupon exists
        const couponExists = await prisma.coupon.findUnique({
            where: { id: couponId }
        });

        if (!couponExists) {
            res.status(404).json({ message: "Coupon not found" });
            return;
        }

        // Check if coupon is already saved by user
        const existingSave = await prisma.user.findFirst({
            where: {
                id: userId,
                savedCoupons: {
                    some: {
                        id: couponId
                    }
                }
            }
        });

        if (existingSave) {
            res.status(409).json({
                message: "Coupon is already saved by this user"
            });
            return;
        }

        // Save coupon for user
        await prisma.user.update({
            where: { id: userId },
            data: {
                savedCoupons: {
                    connect: { id: couponId }
                }
            }
        });

        res.status(200).json({
            message: "Coupon saved successfully"
        });
        return;
    } catch (error) {
        console.error("Error saving coupon:", error);
        res.status(500).json({
            message: "An error occurred while saving the coupon",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default SaveCoupon;