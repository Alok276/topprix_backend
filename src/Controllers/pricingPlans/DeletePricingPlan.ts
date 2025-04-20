// src/Controllers/pricingPlans/DeletePricingPlan.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";

const DeletePricingPlan = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Pricing plan ID is required" });
            return;
        }

        // Find the pricing plan
        const pricingPlan = await prisma.pricingPlan.findUnique({
            where: { id },
            include: {
                subscriptions: {
                    where: {
                        status: { in: ['ACTIVE', 'TRIALING'] }
                    }
                }
            }
        });

        if (!pricingPlan) {
            res.status(404).json({ message: "Pricing plan not found" });
            return;
        }

        // Check if there are active subscriptions using this plan
        if (pricingPlan.subscriptions.length > 0) {
            res.status(409).json({
                message: "Cannot delete pricing plan because it has active subscriptions",
                activeSubscriptionsCount: pricingPlan.subscriptions.length
            });
            return;
        }

        // Archive the price in Stripe
        await stripe.prices.update(pricingPlan.stripePriceId, {
            active: false
        });

        // Get the product ID from the price
        const stripePrice = await stripe.prices.retrieve(pricingPlan.stripePriceId);
        const productId = stripePrice.product as string;

        // Archive the product in Stripe
        await stripe.products.update(productId, {
            active: false
        });

        // Instead of deleting, we mark it as inactive
        // This preserves history and prevents issues with existing records
        await prisma.pricingPlan.update({
            where: { id },
            data: {
                isActive: false
            }
        });

        res.status(200).json({
            message: "Pricing plan successfully deactivated"
        });
        return;

    } catch (error) {
        console.error("Error deleting pricing plan:", error);
        res.status(500).json({
            message: "An error occurred while deleting the pricing plan",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default DeletePricingPlan;