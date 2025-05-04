// src/Controllers/payments/CreatePaymentIntent.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";
import { PaymentType } from "../../../prisma/generated/prisma";

const CreatePaymentIntent = async (req: Request, res: Response) => {
    try {
        const {
            userId,
            amount,
            currency = "eur",
            paymentType,
            flyerId,
            couponId
        } = req.body;

        // Validate required fields
        if (!userId || !amount || !paymentType) {
            res.status(400).json({
                message: "Missing required fields: userId, amount, and paymentType are required"
            });
            return;
        }

        // Find the user
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Check if this is a valid payment type
        if (!Object.values(PaymentType).includes(paymentType)) {
            res.status(400).json({
                message: "Invalid payment type. Type must be one of: SUBSCRIPTION, FLYER_UPLOAD, COUPON_PURCHASE"
            });
            return;
        }

        // For flyer uploads, verify the flyer exists
        if (paymentType === 'FLYER_UPLOAD' && flyerId) {
            const flyer = await prisma.flyer.findUnique({
                where: { id: flyerId }
            });

            if (!flyer) {
                res.status(404).json({ message: "Flyer not found" });
                return;
            }

            if (flyer.isPaid) {
                res.status(400).json({ message: "Flyer has already been paid for" });
                return;
            }
        }

        // For coupon purchases, verify the coupon exists
        if (paymentType === 'COUPON_PURCHASE' && couponId) {
            const coupon = await prisma.coupon.findUnique({
                where: { id: couponId }
            });

            if (!coupon) {
                res.status(404).json({ message: "Coupon not found" });
                return;
            }

            // Check if user has already purchased this coupon
            const existingPurchase = await prisma.purchasedCoupon.findFirst({
                where: {
                    userId,
                    couponId
                }
            });

            if (existingPurchase) {
                res.status(400).json({ message: "User has already purchased this coupon" });
                return;
            }
        }

        // Check if the user already has a Stripe customer ID
        let stripeCustomerId = user.stripeCustomerId;

        // If not, create a Stripe customer
        if (!stripeCustomerId) {
            const customer = await stripe.customers.create({
                email: user.email,
                name: user.name || undefined,
                phone: user.phone || undefined,
                metadata: {
                    userId: user.id
                }
            });

            stripeCustomerId = customer.id;

            // Update user with Stripe customer ID
            await prisma.user.update({
                where: { id: user.id },
                data: { stripeCustomerId }
            });
        }

        // Create a payment intent in Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Stripe uses cents
            currency,
            customer: stripeCustomerId,
            metadata: {
                userId,
                paymentType,
                flyerId: flyerId || null,
                couponId: couponId || null
            }
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id
        });
        return;

    } catch (error) {
        console.error("Error creating payment intent:", error);
        res.status(500).json({
            message: "An error occurred while creating the payment intent",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default CreatePaymentIntent;