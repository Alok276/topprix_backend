// src/Controllers/ShoppingLists/AddShoppingListItem.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const AddShoppingListItem = async (req: Request, res: Response) => {
    try {
        const { shoppingListId } = req.params;
        const { name, quantity = 1, flyerItemId } = req.body;

        // Validate required fields
        if (!shoppingListId || !name) {
            res.status(400).json({
                message: "Missing required fields: shopping list ID and item name are required"
            });
            return;
        }

        // Check if shopping list exists
        const shoppingListExists = await prisma.shoppingList.findUnique({
            where: { id: shoppingListId }
        });

        if (!shoppingListExists) {
            res.status(404).json({ message: "Shopping list not found" });
            return;
        }

        // Check if flyerItem exists if provided
        if (flyerItemId) {
            const flyerItemExists = await prisma.flyerItem.findUnique({
                where: { id: flyerItemId }
            });

            if (!flyerItemExists) {
                res.status(404).json({ message: "Flyer item not found" });
                return;
            }
        }

        // Create shopping list item
        const shoppingListItem = await prisma.shoppingListItem.create({
            data: {
                name,
                quantity,
                flyerItemId,
                shoppingListId
            },
            include: {
                flyerItem: true
            }
        });

        res.status(201).json({
            message: "Item added to shopping list successfully",
            item: shoppingListItem
        });
        return;
    } catch (error) {
        console.error("Error adding item to shopping list:", error);
        res.status(500).json({
            message: "An error occurred while adding the item to the shopping list",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default AddShoppingListItem;