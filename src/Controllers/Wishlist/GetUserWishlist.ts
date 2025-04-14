// src/Controllers/Wishlist/GetUserWishlist.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetUserWishlist = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { sort = 'createdAt' } = req.query;

        if (!userId) {
            res.status(400).json({ message: "User ID is required" });
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

        // Determine sort order
        let orderBy: any = {};

        switch (sort) {
            case 'name':
                orderBy = { name: 'asc' };
                break;
            case 'price':
                orderBy = { targetPrice: 'asc' };
                break;
            case 'dateAdded':
            default:
                orderBy = { createdAt: 'desc' };
                break;
        }

        // Fetch wishlist items
        const wishlistItems = await prisma.wishlistItem.findMany({
            where: { userId },
            orderBy,
            include: {
                flyerItem: true
            }
        });

        res.status(200).json({
            wishlistItems
        });
        return;
    } catch (error) {
        console.error("Error fetching user's wishlist:", error);
        res.status(500).json({
            message: "An error occurred while fetching user's wishlist",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetUserWishlist;