// src/Controllers/coupons/PurchaseCoupon.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";

/**
 * Controller for handling premium coupon purchases
 * This creates a payment intent for coupon purchase
 */
const PurchaseCoupon = async (req: Request, res: Response) => {
    try {
        const { userId, couponId } = req.body;

        if (!userId || !couponId) {
            res.status(400).json({
                message: "Missing required fields: userId and couponId are required"
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

        // Find the coupon
        const coupon = await prisma.coupon.findUnique({
            where: { id: couponId }
        });

        if (!coupon) {
            res.status(404).json({ message: "Coupon not found" });
            return;
        }

        // Check if coupon is premium and has a price
        if (!coupon.isPremium || coupon.price === null) {
            res.status(400).json({
                message: "This coupon is not available for purchase"
            });
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
            res.status(400).json({
                message: "You have already purchased this coupon",
                purchasedCoupon: existingPurchase
            });
            return;
        }

        // Check if the coupon is still valid (not expired)
        const now = new Date();
        if (coupon.endDate < now) {
            res.status(400).json({
                message: "This coupon has expired and is no longer available for purchase"
            });
            return;
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
            amount: Math.round((coupon.price || 0) * 100), // Stripe uses cents
            currency: "eur", // You might want to make this configurable
            customer: stripeCustomerId,
            metadata: {
                userId,
                paymentType: "COUPON_PURCHASE",
                couponId
            }
        });

        res.status(200).json({
            coupon: {
                id: coupon.id,
                title: coupon.title,
                price: coupon.price,
                discount: coupon.discount
            },
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id
        });
        return;

    } catch (error) {
        console.error("Error purchasing coupon:", error);
        res.status(500).json({
            message: "An error occurred while purchasing the coupon",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default PurchaseCoupon;