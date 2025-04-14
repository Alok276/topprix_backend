// src/Controllers/Wishlist/AddToWishlist.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const AddToWishlist = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { name, flyerItemId, targetPrice } = req.body;

        // Validate required fields
        if (!userId || !name) {
            res.status(400).json({
                message: "Missing required fields: userId and item name are required"
            });
            return;
        }

        // Check if user exists
        const userExists = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!userExists) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // If flyerItemId is provided, check if it exists
        if (flyerItemId) {
            const flyerItemExists = await prisma.flyerItem.findUnique({
                where: { id: flyerItemId }
            });

            if (!flyerItemExists) {
                res.status(404).json({ message: "Flyer item not found" });
                return;
            }
        }

        // Create wishlist item
        const wishlistItem = await prisma.wishlistItem.create({
            data: {
                name,
                userId,
                flyerItemId,
                targetPrice: targetPrice ? parseFloat(targetPrice) : null
            },
            include: {
                flyerItem: true
            }
        });

        res.status(201).json({
            message: "Item added to wishlist successfully",
            wishlistItem
        });
        return;
    } catch (error) {
        console.error("Error adding item to wishlist:", error);
        res.status(500).json({
            message: "An error occurred while adding the item to the wishlist",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default AddToWishlist;