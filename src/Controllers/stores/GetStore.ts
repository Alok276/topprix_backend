import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetStore = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Store ID is required" });
            return;
        }

        // Find store by ID
        const store = await prisma.store.findUnique({
            where: { id },
            include: {
                categories: true,
                flyers: {
                    where: {
                        endDate: {
                            gte: new Date() // Only include active flyers
                        }
                    },
                    orderBy: {
                        startDate: 'desc'
                    },
                    take: 10 // Limit the number of flyers returned
                },
                coupons: {
                    where: {
                        endDate: {
                            gte: new Date() // Only include active coupons
                        }
                    },
                    orderBy: {
                        startDate: 'desc'
                    },
                    take: 10 // Limit the number of coupons returned
                }
            }
        });

        if (!store) {
            res.status(404).json({ message: "Store not found" });
            return;
        }

        res.status(200).json(store);
        return;
    } catch (error) {
        console.error("Error retrieving store:", error);
        res.status(500).json({
            message: "An error occurred while retrieving the store",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetStore;