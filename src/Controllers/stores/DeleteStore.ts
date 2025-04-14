import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const DeleteStore = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Store ID is required" });
            return;
        }
        ;

        // Check if the store exists
        const storeExists = await prisma.store.findUnique({
            where: { id }
        });

        if (!storeExists) {
            res.status(404).json({ message: "Store not found" });
            return;
        }

        // Check if store has related flyers or coupons
        const relatedItems = await prisma.$transaction([
            prisma.flyer.count({ where: { storeId: id } }),
            prisma.coupon.count({ where: { storeId: id } })
        ]);

        const [flyerCount, couponCount] = relatedItems;
        const hasRelatedItems = flyerCount > 0 || couponCount > 0;

        if (hasRelatedItems) {
            res.status(409).json({
                message: "Cannot delete store because it has related flyers or coupons",
                details: {
                    flyerCount,
                    couponCount
                }
            });
            return;
        }

        // Delete the store
        await prisma.store.delete({
            where: { id }
        });

        res.status(200).json({
            message: "Store deleted successfully"
        });
        return;
    } catch (error) {
        console.error("Error deleting store:", error);

        // Check if error is related to foreign key constraints
        if (error instanceof Error && error.message.includes("Foreign key constraint failed")) {
            res.status(409).json({
                message: "Cannot delete store because it has related records",
                error: error.message
            });
            return;
        }

        res.status(500).json({
            message: "An error occurred while deleting the store",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default DeleteStore;