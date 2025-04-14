// src/Controllers/Flyers/AddFlyerItem.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const AddFlyerItem = async (req: Request, res: Response) => {
    try {
        const {
            flyerId,
            name,
            price,
            oldPrice,
            imageUrl,
            description
        } = req.body;

        // Basic validation
        if (!flyerId || !name || price === undefined) {
            res.status(400).json({
                message: "Missing required fields: flyerId, name, and price are required"
            });
            return;
        }

        // Validate flyer exists
        const flyerExists = await prisma.flyer.findUnique({
            where: { id: flyerId }
        });

        if (!flyerExists) {
            res.status(404).json({ message: "Flyer not found" });
            return;
        }

        // Create flyer item
        const flyerItem = await prisma.flyerItem.create({
            data: {
                flyerId,
                name,
                price,
                oldPrice,
                imageUrl,
                description
            }
        });

        res.status(201).json({
            message: "Flyer item added successfully",
            flyerItem
        });
        return;
    } catch (error) {
        console.error("Error adding flyer item:", error);
        res.status(500).json({
            message: "An error occurred while adding the flyer item",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default AddFlyerItem;