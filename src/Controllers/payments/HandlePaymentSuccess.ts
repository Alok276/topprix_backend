// src/Controllers/payments/HandlePaymentSuccess.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";
import { PaymentType } from "../../../prisma/generated/prisma";

const HandlePaymentSuccess = async (req: Request, res: Response) => {
    try {
        const { paymentIntentId } = req.body;

        if (!paymentIntentId) {
            res.status(400).json({
                message: "Missing required field: paymentIntentId is required"
            });
            return;
        }

        // Retrieve payment intent from Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status !== 'succeeded') {
            res.status(400).json({
                message: `Payment has not succeeded yet. Current status: ${paymentIntent.status}`
            });
            return;
        }

        // Extract metadata
        const userId = paymentIntent.metadata.userId;
        const paymentType = paymentIntent.metadata.paymentType as PaymentType;
        const flyerId = paymentIntent.metadata.flyerId;
        const couponId = paymentIntent.metadata.couponId;

        // Record payment in our database
        const payment = await prisma.payment.create({
            data: {
                userId,
                amount: paymentIntent.amount / 100, // Convert back from cents
                currency: paymentIntent.currency,
                stripePaymentId: paymentIntent.id,
                paymentType,
                status: paymentIntent.status,
                metadata: paymentIntent.metadata as any,
                flyerId: flyerId || undefined,
                couponId: couponId || undefined
            }
        });

        // Handle specific payment types
        if (paymentType === 'FLYER_UPLOAD' && flyerId) {
            // Mark the flyer as paid
            await prisma.flyer.update({
                where: { id: flyerId },
                data: { isPaid: true }
            });
        }

        if (paymentType === 'COUPON_PURCHASE' && couponId) {
            // Record the coupon purchase
            await prisma.purchasedCoupon.create({
                data: {
                    userId,
                    couponId,
                    amount: paymentIntent.amount / 100,
                    currency: paymentIntent.currency,
                    stripePaymentId: paymentIntent.id
                }
            });
        }

        res.status(200).json({
            message: "Payment processed successfully",
            payment
        });
        return;

    } catch (error) {
        console.error("Error processing payment success:", error);
        res.status(500).json({
            message: "An error occurred while processing the payment",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default HandlePaymentSuccess;