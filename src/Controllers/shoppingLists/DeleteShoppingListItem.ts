// src/Controllers/ShoppingLists/DeleteShoppingListItem.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const DeleteShoppingListItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Shopping list item ID is required" });
            return;
        }

        // Check if shopping list item exists
        const itemExists = await prisma.shoppingListItem.findUnique({
            where: { id }
        });

        if (!itemExists) {
            res.status(404).json({ message: "Shopping list item not found" });
            return;
        }

        // Delete the shopping list item
        await prisma.shoppingListItem.delete({
            where: { id }
        });

        res.status(200).json({
            message: "Shopping list item deleted successfully"
        });
        return;
    } catch (error) {
        console.error("Error deleting shopping list item:", error);
        res.status(500).json({
            message: "An error occurred while deleting the shopping list item",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default DeleteShoppingListItem;