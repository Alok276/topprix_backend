// src/Controllers/ShoppingLists/DeleteShoppingList.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const DeleteShoppingList = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Shopping list ID is required" });
            return;
        }

        // Check if shopping list exists
        const shoppingListExists = await prisma.shoppingList.findUnique({
            where: { id }
        });

        if (!shoppingListExists) {
            res.status(404).json({ message: "Shopping list not found" });
            return;
        }

        // First delete all items in the shopping list
        await prisma.shoppingListItem.deleteMany({
            where: { shoppingListId: id }
        });

        // Then delete the shopping list
        await prisma.shoppingList.delete({
            where: { id }
        });

        res.status(200).json({
            message: "Shopping list deleted successfully"
        });
        return;
    } catch (error) {
        console.error("Error deleting shopping list:", error);
        res.status(500).json({
            message: "An error occurred while deleting the shopping list",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default DeleteShoppingList;