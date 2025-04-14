import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetCategories = async (req: Request, res: Response) => {
    try {
        const { search, limit = 20, page = 1 } = req.query;

        // Parse pagination parameters
        const pageNumber = parseInt(page as string) || 1;
        const limitNumber = parseInt(limit as string) || 20;
        const skip = (pageNumber - 1) * limitNumber;

        // Build filter conditions
        const whereConditions: any = {};

        // Text search on name or description
        if (search) {
            whereConditions.OR = [
                { name: { contains: search as string, mode: 'insensitive' } },
                { description: { contains: search as string, mode: 'insensitive' } }
            ];
        }

        // Get categories
        const categories = await prisma.category.findMany({
            where: whereConditions,
            skip,
            take: limitNumber,
            orderBy: {
                name: 'asc'
            },
            include: {
                _count: {
                    select: {
                        stores: true,
                        flyers: true,
                        coupons: true
                    }
                }
            }
        });

        // Get total count for pagination
        const totalCount = await prisma.category.count({
            where: whereConditions
        });

        res.status(200).json({
            totalCount,
            currentPage: pageNumber,
            totalPages: Math.ceil(totalCount / limitNumber),
            categories
        });
        return;
    } catch (error) {
        console.error("Error retrieving categories:", error);
        res.status(500).json({
            message: "An error occurred while retrieving categories",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetCategories;