import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetCoupons = async (req: Request, res: Response) => {
    try {
        const {
            storeId,
            categoryId,
            isOnline,
            isInStore,
            active,
            search,
            limit = 20,
            page = 1
        } = req.query;

        // Build filter conditions
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

        if (isOnline !== undefined) {
            where.isOnline = isOnline === 'true';
        }

        if (isInStore !== undefined) {
            where.isInStore = isInStore === 'true';
        }

        if (search) {
            where.OR = [
                { title: { contains: search as string, mode: 'insensitive' } },
                { description: { contains: search as string, mode: 'insensitive' } }
            ];
        }

        // Filter for active/inactive coupons
        if (active !== undefined) {
            const now = new Date();
            if (active === 'true') {
                where.startDate = { lte: now };
                where.endDate = { gte: now };
            } else {
                where.OR = [
                    { startDate: { gt: now } },
                    { endDate: { lt: now } }
                ];
            }
        }

        // Calculate pagination
        const skip = (Number(page) - 1) * Number(limit);
        const take = Number(limit);

        // Get total count for pagination
        const totalCount = await prisma.coupon.count({ where });

        // Query coupons with pagination
        const coupons = await prisma.coupon.findMany({
            where,
            include: {
                store: true,
                categories: true
            },
            orderBy: {
                createdAt: 'desc'
            },
            skip,
            take
        });

        // Calculate pagination metadata
        const totalPages = Math.ceil(totalCount / take);
        const hasNextPage = Number(page) < totalPages;
        const hasPreviousPage = Number(page) > 1;

        res.status(200).json({
            coupons,
            pagination: {
                total: totalCount,
                page: Number(page),
                limit: Number(limit),
                totalPages,
                hasNextPage,
                hasPreviousPage
            }
        });
        return;
    } catch (error) {
        console.error("Error fetching coupons:", error);
        res.status(500).json({
            message: "An error occurred while fetching coupons",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetCoupons;