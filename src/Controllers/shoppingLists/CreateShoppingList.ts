import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const CreateShoppingList = async (req: Request, res: Response) => {
    try {
        const { userId, title } = req.body;

        // Validate required fields
        if (!userId || !title) {
            res.status(400).json({
                message: "Missing required fields: userId and title are required"
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

        // Create shopping list
        const shoppingList = await prisma.shoppingList.create({
            data: {
                title,
                userId
            }
        });

        res.status(201).json({
            message: "Shopping list created successfully",
            shoppingList
        });
        return;
    } catch (error) {
        console.error("Error creating shopping list:", error);
        res.status(500).json({
            message: "An error occurred while creating the shopping list",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default CreateShoppingList;