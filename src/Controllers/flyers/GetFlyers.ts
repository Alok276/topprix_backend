// src/Controllers/Flyers/GetFlyers.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetFlyers = async (req: Request, res: Response) => {
    try {
        const {
            storeId,
            categoryId,
            isActive,
            isSponsored,
            limit,
            offset
        } = req.query;

        // Build where conditions
        const where: any = {};

        if (storeId) {
            where.storeId = storeId as string;
        }

        if (categoryId) {
            where.categories = {
                some: {
                    id: categoryId as string
                }
            };
        }

        if (isActive === 'true') {
            const today = new Date();
            where.startDate = {
                lte: today
            };
            where.endDate = {
                gte: today
            };
        }

        if (isSponsored === 'true') {
            where.isSponsored = true;
        }

        // Get total count for pagination
        const totalCount = await prisma.flyer.count({
            where
        });

        // Get flyers with pagination
        const flyers = await prisma.flyer.findMany({
            where,
            include: {
                store: true,
                categories: true,
                items: true
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: limit ? parseInt(limit as string) : 20,
            skip: offset ? parseInt(offset as string) : 0
        });

        res.status(200).json({
            flyers,
            pagination: {
                total: totalCount,
                limit: limit ? parseInt(limit as string) : 20,
                offset: offset ? parseInt(offset as string) : 0
            }
        });
        return;
    } catch (error) {
        console.error("Error fetching flyers:", error);
        res.status(500).json({
            message: "An error occurred while fetching flyers",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetFlyers;