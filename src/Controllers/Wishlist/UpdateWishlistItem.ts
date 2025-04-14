// src/Controllers/Wishlist/UpdateWishlistItem.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const UpdateWishlistItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, targetPrice } = req.body;

        if (!id) {
            res.status(400).json({ message: "Wishlist item ID is required" });
            return;
        }

        // Check if wishlist item exists
        const itemExists = await prisma.wishlistItem.findUnique({
            where: { id }
        });

        if (!itemExists) {
            res.status(404).json({ message: "Wishlist item not found" });
            return;
        }

        // Prepare update data
        const updateData: any = {};

        if (name !== undefined) updateData.name = name;
        if (targetPrice !== undefined) updateData.targetPrice = targetPrice ? parseFloat(targetPrice) : null;

        // Update wishlist item
        const updatedItem = await prisma.wishlistItem.update({
            where: { id },
            data: updateData,
            include: {
                flyerItem: true
            }
        });

        res.status(200).json({
            message: "Wishlist item updated successfully",
            item: updatedItem
        });
        return;
    } catch (error) {
        console.error("Error updating wishlist item:", error);
        res.status(500).json({
            message: "An error occurred while updating the wishlist item",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default UpdateWishlistItem;