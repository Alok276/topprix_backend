// src/Controllers/ShoppingLists/GetShoppingList.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetShoppingList = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Shopping list ID is required" });
            return;
        }

        // Fetch shopping list with items
        const shoppingList = await prisma.shoppingList.findUnique({
            where: { id },
            include: {
                items: {
                    include: {
                        flyerItem: true
                    },
                    orderBy: {
                        isChecked: 'asc' // Unchecked items first
                    }
                },
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        });

        if (!shoppingList) {
            res.status(404).json({ message: "Shopping list not found" });
            return;
        }

        res.status(200).json({
            shoppingList
        });
        return;
    } catch (error) {
        console.error("Error fetching shopping list:", error);
        res.status(500).json({
            message: "An error occurred while fetching the shopping list",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetShoppingList;