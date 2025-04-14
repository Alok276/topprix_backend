import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const UpdateStore = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {
            name,
            logo,
            description,
            address,
            latitude,
            longitude,
            categoryIds,
            connectCategories,
            disconnectCategories
        } = req.body;

        if (!id) {
            res.status(400).json({ message: "Store ID is required" });
            return;
        }

        // Check if the store exists
        const storeExists = await prisma.store.findUnique({
            where: { id }
        });

        if (!storeExists) {
            res.status(404).json({ message: "Store not found" });
            return;
        }

        // Prepare update data
        const updateData: any = {};

        // Add basic fields if provided
        if (name !== undefined) updateData.name = name;
        if (logo !== undefined) updateData.logo = logo;
        if (description !== undefined) updateData.description = description;
        if (address !== undefined) updateData.address = address;
        if (latitude !== undefined) updateData.latitude = parseFloat(latitude);
        if (longitude !== undefined) updateData.longitude = parseFloat(longitude);

        // Handle categories - replace all categories if categoryIds is provided
        if (categoryIds && Array.isArray(categoryIds)) {
            updateData.categories = {
                set: [], // Clear existing connections
                connect: categoryIds.map((id: string) => ({ id }))
            };
        }
        // Or handle individual category connections/disconnections
        else {
            if (connectCategories && Array.isArray(connectCategories) && connectCategories.length > 0) {
                updateData.categories = {
                    ...(updateData.categories || {}),
                    connect: connectCategories.map((id: string) => ({ id }))
                };
            }

            if (disconnectCategories && Array.isArray(disconnectCategories) && disconnectCategories.length > 0) {
                updateData.categories = {
                    ...(updateData.categories || {}),
                    disconnect: disconnectCategories.map((id: string) => ({ id }))
                };
            }
        }

        // Update the store
        const updatedStore = await prisma.store.update({
            where: { id },
            data: updateData,
            include: {
                categories: true
            }
        });

        res.status(200).json({
            message: "Store updated successfully",
            store: updatedStore
        });
        return;
    } catch (error) {
        console.error("Error updating store:", error);
        res.status(500).json({
            message: "An error occurred while updating the store",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default UpdateStore;