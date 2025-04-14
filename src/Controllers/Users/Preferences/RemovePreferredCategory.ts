// src/Controllers/Users/Preferences/RemovePreferredCategory.ts
import { Request, Response } from "express";
import { prisma } from "../../../Db/prismaDb";

const RemovePreferredCategory = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const { categoryId } = req.body;

        if (!email) {
            res.status(400).json({ message: "Email parameter is required" });
            return;
        }

        if (!categoryId) {
            res.status(400).json({ message: "Category ID is required" });
            return;
        }

        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Remove the category from user's preferred categories
        const updatedUser = await prisma.user.update({
            where: { email },
            data: {
                preferredCategories: {
                    disconnect: { id: categoryId }
                }
            },
            include: {
                preferredCategories: true
            }
        });

        res.status(200).json({
            message: "Category removed from preferred categories",
            preferredCategories: updatedUser.preferredCategories
        });
        return;
    } catch (error) {
        console.error("Error removing preferred category:", error);
        res.status(500).json({
            message: "An error occurred while removing preferred category",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default RemovePreferredCategory;