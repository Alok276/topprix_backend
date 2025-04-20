// src/Controllers/pricingPlans/GetPricingPlans.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetPricingPlans = async (req: Request, res: Response) => {
    try {
        const { active } = req.query;

        // Build the where clause
        const where: any = {};

        // Filter by active status if provided
        if (active !== undefined) {
            where.isActive = active === 'true';
        }

        // Get pricing plans
        const pricingPlans = await prisma.pricingPlan.findMany({
            where,
            orderBy: {
                amount: 'asc'
            }
        });

        res.status(200).json({
            pricingPlans
        });
        return;

    } catch (error) {
        console.error("Error fetching pricing plans:", error);
        res.status(500).json({
            message: "An error occurred while fetching pricing plans",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetPricingPlans;