// src/Controllers/ShoppingLists/UpdateShoppingListItem.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const UpdateShoppingListItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, quantity, isChecked } = req.body;

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

        // Prepare update data
        const updateData: any = {};

        if (name !== undefined) updateData.name = name;
        if (quantity !== undefined) updateData.quantity = parseInt(quantity);
        if (isChecked !== undefined) updateData.isChecked = isChecked;

        // Update shopping list item
        const updatedItem = await prisma.shoppingListItem.update({
            where: { id },
            data: updateData,
            include: {
                flyerItem: true
            }
        });

        res.status(200).json({
            message: "Shopping list item updated successfully",
            item: updatedItem
        });
        return;
    } catch (error) {
        console.error("Error updating shopping list item:", error);
        res.status(500).json({
            message: "An error occurred while updating the shopping list item",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default UpdateShoppingListItem;