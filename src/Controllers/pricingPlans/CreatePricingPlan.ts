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
            currency, // Use the currency provided in the request
            interval, // Use the interval provided in the request
            features
        } = req.body;

        // Validate required fields
        if (!name || !description || !amount || !features) {
            res.status(400).json({
                message: "Missing required fields: name, description, amount, and features are required"
            });
            return;
        }

        // Set default values if not provided
        const planCurrency = currency || "eur"; // Default to EUR instead of eur
        const planInterval = interval || "month"; // Default to monthly if not specified

        // Validate interval is a valid value
        const validIntervals = ['day', 'week', 'month', 'year'];
        if (!validIntervals.includes(planInterval)) {
            res.status(400).json({
                message: "Invalid interval. Must be one of: day, week, month, year"
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
            currency: planCurrency, // Use the currency from the request or default
            recurring: {
                interval: planInterval as 'day' | 'week' | 'month' | 'year', // Use the interval from the request or default
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
                currency: planCurrency,
                interval: planInterval,
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