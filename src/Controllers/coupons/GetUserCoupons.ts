import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetUserCoupons = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { active, limit = 20, page = 1 } = req.query;

        if (!userId) {
            res.status(400).json({ message: "User ID is required" });
            return;
        }

        // Check if user exists
        const userExists = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!userExists) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Build the where clause
        let where: any = {
            savedBy: {
                some: {
                    id: userId
                }
            }
        };

        // Filter for active/inactive coupons if requested
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

        // Get saved coupons
        const coupons = await prisma.coupon.findMany({
            where,
            include: {
                store: true,
                categories: true
            },
            orderBy: {
                endDate: 'asc' // Show expiring soon first
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
        console.error("Error fetching user's saved coupons:", error);
        res.status(500).json({
            message: "An error occurred while fetching user's saved coupons",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetUserCoupons;