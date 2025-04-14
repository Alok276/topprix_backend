// src/Controllers/Flyers/CreateFlyer.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const CreateFlyer = async (req: Request, res: Response) => {
    try {
        const {
            title,
            storeId,
            imageUrl,
            startDate,
            endDate,
            isSponsored,
            categoryIds
        } = req.body;

        // Basic validation
        if (!title || !storeId || !imageUrl || !startDate || !endDate) {
            res.status(400).json({
                message: "Missing required fields: title, storeId, imageUrl, startDate, and endDate are required"
            });
            return;
        }

        // Validate store exists
        const storeExists = await prisma.store.findUnique({
            where: { id: storeId }
        });

        if (!storeExists) {
            res.status(404).json({ message: "Store not found" });
            return;
        }

        // Prepare data object
        const data: any = {
            title,
            storeId,
            imageUrl,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            isSponsored: isSponsored || false,
        };

        // Connect categories if provided
        if (categoryIds && categoryIds.length > 0) {
            data.categories = {
                connect: categoryIds.map((id: string) => ({ id }))
            };
        }

        // Create flyer
        const flyer = await prisma.flyer.create({
            data,
            include: {
                store: true,
                categories: true
            }
        });

        res.status(201).json({
            message: "Flyer created successfully",
            flyer
        });
        return;
    } catch (error) {
        console.error("Error creating flyer:", error);
        res.status(500).json({
            message: "An error occurred while creating the flyer",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default CreateFlyer;