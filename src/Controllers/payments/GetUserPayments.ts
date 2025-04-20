// src/Controllers/payments/GetUserPayments.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { PaymentType } from "../../../prisma/generated/prisma";

const GetUserPayments = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { type, limit = 10, page = 1, status } = req.query;

        if (!userId) {
            res.status(400).json({
                message: "Missing required parameter: userId is required"
            });
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
        const where: any = { userId };

        // Filter by payment type if provided
        if (type && Object.values(PaymentType).includes(type as PaymentType)) {
            where.paymentType = type as PaymentType;
        }

        // Filter by payment status if provided
        if (status) {
            where.status = status as string;
        }

        // Parse pagination parameters
        const limitNum = parseInt(limit as string) || 10;
        const pageNum = parseInt(page as string) || 1;
        const skip = (pageNum - 1) * limitNum;

        // Get payments with pagination
        const payments = await prisma.payment.findMany({
            where,
            orderBy: {
                createdAt: 'desc'
            },
            skip,
            take: limitNum,
            include: {
                subscription: {
                    include: {
                        pricingPlan: true
                    }
                },
                flyer: {
                    select: {
                        id: true,
                        title: true,
                        imageUrl: true
                    }
                },
                coupon: {
                    select: {
                        id: true,
                        title: true,
                        discount: true
                    }
                }
            }
        });

        // Get total count for pagination
        const totalCount = await prisma.payment.count({ where });

        // Get summary statistics
        const subscriptionTotal = await prisma.payment.aggregate({
            where: {
                ...where,
                paymentType: 'SUBSCRIPTION',
                status: 'succeeded'
            },
            _sum: {
                amount: true
            }
        });

        const couponTotal = await prisma.payment.aggregate({
            where: {
                ...where,
                paymentType: 'COUPON_PURCHASE',
                status: 'succeeded'
            },
            _sum: {
                amount: true
            }
        });

        const flyerTotal = await prisma.payment.aggregate({
            where: {
                ...where,
                paymentType: 'FLYER_UPLOAD',
                status: 'succeeded'
            },
            _sum: {
                amount: true
            }
        });

        // Format payment data for response
        const formattedPayments = payments.map(payment => {
            // Base payment information
            const formattedPayment = {
                id: payment.id,
                amount: payment.amount,
                currency: payment.currency,
                paymentType: payment.paymentType,
                status: payment.status,
                createdAt: payment.createdAt,
                stripePaymentId: payment.stripePaymentId
            };

            // Add specific details based on payment type
            if (payment.paymentType === 'SUBSCRIPTION' && payment.subscription) {
                return {
                    ...formattedPayment,
                    details: {
                        subscriptionId: payment.subscription.id,
                        planName: payment.subscription.pricingPlan?.name || 'Unknown Plan',
                        period: {
                            start: payment.subscription.currentPeriodStart,
                            end: payment.subscription.currentPeriodEnd
                        }
                    }
                };
            } else if (payment.paymentType === 'FLYER_UPLOAD' && payment.flyer) {
                return {
                    ...formattedPayment,
                    details: {
                        flyerId: payment.flyer.id,
                        flyerTitle: payment.flyer.title,
                        flyerImage: payment.flyer.imageUrl
                    }
                };
            } else if (payment.paymentType === 'COUPON_PURCHASE' && payment.coupon) {
                return {
                    ...formattedPayment,
                    details: {
                        couponId: payment.coupon.id,
                        couponTitle: payment.coupon.title,
                        discount: payment.coupon.discount
                    }
                };
            }

            // Return base payment if no additional details are available
            return formattedPayment;
        });

        res.status(200).json({
            payments: formattedPayments,
            pagination: {
                total: totalCount,
                page: pageNum,
                limit: limitNum,
                totalPages: Math.ceil(totalCount / limitNum)
            },
            summary: {
                totalSpent: (subscriptionTotal._sum.amount || 0) +
                    (couponTotal._sum.amount || 0) +
                    (flyerTotal._sum.amount || 0),
                subscriptionPayments: subscriptionTotal._sum.amount || 0,
                couponPurchases: couponTotal._sum.amount || 0,
                flyerUploads: flyerTotal._sum.amount || 0
            }
        });
        return;

    } catch (error) {
        console.error("Error fetching user payments:", error);
        res.status(500).json({
            message: "An error occurred while fetching the user payments",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetUserPayments;