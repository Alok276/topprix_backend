// src/Controllers/Wishlist/DeleteFromWishlist.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const DeleteFromWishlist = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Wishlist item ID is required" });
            return;
        }

        // Check if wishlist item exists
        const wishlistItemExists = await prisma.wishlistItem.findUnique({
            where: { id }
        });

        if (!wishlistItemExists) {
            res.status(404).json({ message: "Wishlist item not found" });
            return;
        }

        // Delete the wishlist item
        await prisma.wishlistItem.delete({
            where: { id }
        });

        res.status(200).json({
            message: "Wishlist item deleted successfully"
        });
        return;
    } catch (error) {
        console.error("Error deleting wishlist item:", error);
        res.status(500).json({
            message: "An error occurred while deleting the wishlist item",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default DeleteFromWishlist;