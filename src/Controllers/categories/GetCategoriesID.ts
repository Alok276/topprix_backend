import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetCategoryID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Category ID is required" });
            return;
        }

        // Find category by ID
        const category = await prisma.category.findUnique({
            where: { id },
            include: {
                stores: {
                    take: 10 // Limit the number of stores returned
                },
                _count: {
                    select: {
                        stores: true,
                        flyers: true,
                        coupons: true
                    }
                }
            }
        });

        if (!category) {
            res.status(404).json({ message: "Category not found" });
            return;
        }

        res.status(200).json(category);
        return;
    } catch (error) {
        console.error("Error retrieving category:", error);
        res.status(500).json({
            message: "An error occurred while retrieving the category",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetCategoryID;