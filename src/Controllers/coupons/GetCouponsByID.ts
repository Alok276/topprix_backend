import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetCouponByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Coupon ID is required" });
            return;
        }

        const coupon = await prisma.coupon.findUnique({
            where: { id },
            include: {
                store: true,
                categories: true,
                savedBy: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        });

        if (!coupon) {
            res.status(404).json({ message: "Coupon not found" });
            return;
        }

        // Check if coupon is active
        const now = new Date();
        const isActive = coupon.startDate <= now && coupon.endDate >= now;

        res.status(200).json({
            coupon,
            isActive
        });
        return;
    } catch (error) {
        console.error("Error fetching coupon:", error);
        res.status(500).json({
            message: "An error occurred while fetching the coupon",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetCouponByID;