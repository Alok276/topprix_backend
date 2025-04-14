import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const DeleteCoupon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Coupon ID is required" });
            return;
        }

        // Check if coupon exists
        const couponExists = await prisma.coupon.findUnique({
            where: { id }
        });

        if (!couponExists) {
            res.status(404).json({ message: "Coupon not found" });
            return;
        }

        // Delete coupon
        // Note: This will automatically handle the many-to-many relationships
        await prisma.coupon.delete({
            where: { id }
        });

        res.status(200).json({
            message: "Coupon deleted successfully"
        });
        return;
    } catch (error) {
        console.error("Error deleting coupon:", error);

        // Handle specific errors
        if (error instanceof Error && error.message.includes("Foreign key constraint failed")) {
            res.status(409).json({
                message: "Cannot delete coupon because it is referenced by other records",
                error: error.message
            });
            return;
        }

        res.status(500).json({
            message: "An error occurred while deleting the coupon",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default DeleteCoupon;