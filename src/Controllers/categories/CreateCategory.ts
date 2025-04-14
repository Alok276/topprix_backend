import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const CreateCategory = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;

        // Basic validation
        if (!name) {
            res.status(400).json({ message: "Category name is required" });
            return;
        }

        // Check if category with the same name already exists
        const existingCategory = await prisma.category.findUnique({
            where: { name }
        });

        if (existingCategory) {
            res.status(409).json({
                message: "A category with this name already exists",
                category: existingCategory
            });
            return;
        }

        // Create category
        const category = await prisma.category.create({
            data: {
                name,
                description
            }
        });

        res.status(201).json({
            message: "Category created successfully",
            category
        });
        return;
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({
            message: "An error occurred while creating the category",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default CreateCategory;