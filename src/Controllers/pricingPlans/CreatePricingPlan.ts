// src/Controllers/pricingPlans/CreatePricingPlan.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";

const CreatePricingPlan = async (req: Request, res: Response) => {
    try {
        const {
            name,
            description,
            amount,
            currency = "usd",
            interval = "month",
            features
        } = req.body;

        // Validate required fields
        if (!name || !description || !amount || !features) {
            res.status(400).json({
                message: "Missing required fields: name, description, amount, and features are required"
            });
            return;
        }

        // Create the product in Stripe
        const product = await stripe.products.create({
            name,
            description,
            metadata: {
                type: "RETAILER" // All subscription plans are for retailers
            }
        });

        // Create the price in Stripe
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: Math.round(amount * 100), // Stripe uses cents
            currency,
            recurring: {
                interval: interval as 'day' | 'week' | 'month' | 'year',
            },
            metadata: {
                type: "RETAILER"
            }
        });

        // Create the pricing plan in the database
        const pricingPlan = await prisma.pricingPlan.create({
            data: {
                name,
                description,
                stripePriceId: price.id,
                amount,
                currency,
                interval,
                features,
                isActive: true
            }
        });

        res.status(201).json({
            message: "Pricing plan created successfully",
            pricingPlan
        });
        return;

    } catch (error) {
        console.error("Error creating pricing plan:", error);
        res.status(500).json({
            message: "An error occurred while creating the pricing plan",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default CreatePricingPlan;