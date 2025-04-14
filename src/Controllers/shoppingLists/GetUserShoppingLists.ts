// src/Controllers/ShoppingLists/GetUserShoppingLists.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetUserShoppingLists = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { includeItems } = req.query;

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

        // Fetch shopping lists with or without items
        const shoppingLists = await prisma.shoppingList.findMany({
            where: { userId },
            orderBy: { updatedAt: 'desc' },
            include: {
                items: includeItems === 'true' ? {
                    include: {
                        flyerItem: true
                    }
                } : false
            }
        });

        res.status(200).json({
            shoppingLists
        });
        return;
    } catch (error) {
        console.error("Error fetching user's shopping lists:", error);
        res.status(500).json({
            message: "An error occurred while fetching user's shopping lists",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetUserShoppingLists;