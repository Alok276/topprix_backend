// src/Controllers/pricingPlans/UpdatePricingPlan.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";

const UpdatePricingPlan = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {
            name,
            description,
            amount,
            features,
            isActive
        } = req.body;

        if (!id) {
            res.status(400).json({ message: "Pricing plan ID is required" });
            return;
        }

        // Find the pricing plan
        const pricingPlan = await prisma.pricingPlan.findUnique({
            where: { id }
        });

        if (!pricingPlan) {
            res.status(404).json({ message: "Pricing plan not found" });
            return;
        }

        // Update data object
        const updateData: any = {};

        // Only update fields that were provided
        if (name !== undefined) updateData.name = name;
        if (description !== undefined) updateData.description = description;
        if (features !== undefined) updateData.features = features;
        if (isActive !== undefined) updateData.isActive = isActive;

        // If amount is being updated, we need to create a new price in Stripe
        // Note: Stripe doesn't allow updating existing prices
        if (amount !== undefined && amount !== pricingPlan.amount) {
            // Get the product ID from Stripe using the price ID
            const stripePrice = await stripe.prices.retrieve(pricingPlan.stripePriceId);

            // Create a new price in Stripe
            const newPrice = await stripe.prices.create({
                product: stripePrice.product as string,
                unit_amount: Math.round(amount * 100), // Stripe uses cents
                currency: pricingPlan.currency,
                recurring: {
                    interval: pricingPlan.interval as 'day' | 'week' | 'month' | 'year'
                },
                metadata: {
                    type: "RETAILER"
                }
            });

            // Update the price ID in our database
            updateData.stripePriceId = newPrice.id;
            updateData.amount = amount;

            // Archive the old price in Stripe
            await stripe.prices.update(pricingPlan.stripePriceId, {
                active: false
            });
        }

        // Check if we need to update the product as well
        if (name !== undefined || description !== undefined) {
            // Get the product ID from the current price
            const stripePrice = await stripe.prices.retrieve(pricingPlan.stripePriceId);
            const productId = stripePrice.product as string;

            // Prepare product update data
            const productUpdateData: any = {};
            if (name !== undefined) productUpdateData.name = name;
            if (description !== undefined) productUpdateData.description = description;

            // Update the product in Stripe
            await stripe.products.update(productId, productUpdateData);
        }

        // Update the pricing plan in the database
        const updatedPricingPlan = await prisma.pricingPlan.update({
            where: { id },
            data: updateData
        });

        // Important note: Existing subscriptions will continue to use the old price
        // New subscriptions will use the new price
        res.status(200).json({
            message: "Pricing plan updated successfully",
            pricingPlan: updatedPricingPlan,
            note: amount !== undefined ?
                "Price changes will only apply to new subscriptions. Existing subscriptions will continue with their current pricing until they are explicitly changed."
                : undefined
        });
        return;

    } catch (error) {
        console.error("Error updating pricing plan:", error);
        res.status(500).json({
            message: "An error occurred while updating the pricing plan",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default UpdatePricingPlan;