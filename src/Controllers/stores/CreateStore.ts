import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const CreateStore = async (req: Request, res: Response) => {
    try {
        const { name, logo, description, address, latitude, longitude, categoryIds } = req.body;

        // Basic validation
        if (!name) {
            res.status(400).json({ message: "Store name is required" });
            return;
        }

        // Validate that all category IDs exist if provided
        if (categoryIds && categoryIds.length > 0) {
            try {
                // Check if all categories exist
                const foundCategories = await prisma.category.findMany({
                    where: {
                        id: {
                            in: categoryIds
                        }
                    },
                    select: { id: true }
                });

                // If not all categories were found
                if (foundCategories.length !== categoryIds.length) {
                    const foundIds = foundCategories.map(cat => cat.id);
                    const missingIds = categoryIds.filter((id: string) => !foundIds.includes(id));

                    res.status(400).json({
                        message: "Some category IDs do not exist",
                        missingIds
                    });
                    return;
                }
            } catch (error) {
                console.error("Error validating categories:", error);
                res.status(400).json({
                    message: "Error validating categories",
                    error: error instanceof Error ? error.message : "Unknown error"
                });
                return;
            }
        }

        // Prepare data object for store creation
        const storeData: any = {
            name,
            logo,
            description,
            address,
            latitude: latitude ? parseFloat(latitude) : undefined,
            longitude: longitude ? parseFloat(longitude) : undefined,
        };

        // Only add categories connection if valid IDs were provided
        if (categoryIds && categoryIds.length > 0) {
            storeData.categories = {
                connect: categoryIds.map((id: string) => ({ id }))
            };
        }

        // Create store with validated data
        const store = await prisma.store.create({
            data: storeData,
            include: {
                categories: true
            }
        });

        res.status(201).json({
            message: "Store created successfully",
            store
        });
        return;
    } catch (error) {
        console.error("Error creating store:", error);

        // Check for Prisma-specific errors
        if (error instanceof Error && error.message.includes("records that were required but not found")) {
            res.status(400).json({
                message: "Failed to create store: One or more category IDs are invalid",
                error: error.message
            });
            return;
        }

        res.status(500).json({
            message: "An error occurred while creating the store",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default CreateStore;