// src/Controllers/Flyers/DeleteFlyerItem.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const DeleteFlyerItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Flyer item ID is required" });
            return;
        }

        // Check if the flyer item exists
        const itemExists = await prisma.flyerItem.findUnique({
            where: { id }
        });

        if (!itemExists) {
            res.status(404).json({ message: "Flyer item not found" });
            return;
        }

        // Check if the item is referenced in shopping lists or wishlists
        const shoppingListReferences = await prisma.shoppingListItem.findFirst({
            where: { flyerItemId: id }
        });

        const wishlistReferences = await prisma.wishlistItem.findFirst({
            where: { flyerItemId: id }
        });

        if (shoppingListReferences || wishlistReferences) {
            res.status(409).json({
                message: "Cannot delete flyer item because it's referenced in shopping lists or wishlists"
            });
            return;
        }

        // Delete the flyer item
        await prisma.flyerItem.delete({
            where: { id }
        });

        res.status(200).json({
            message: "Flyer item deleted successfully"
        });
        return;
    } catch (error) {
        console.error("Error deleting flyer item:", error);
        res.status(500).json({
            message: "An error occurred while deleting the flyer item",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default DeleteFlyerItem;