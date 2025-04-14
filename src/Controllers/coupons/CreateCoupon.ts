import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { UserRole } from "../../../prisma/generated/prisma";

const CreateCoupon = async (req: Request, res: Response) => {
    try {
        const {
            title,
            storeId,
            code,
            barcodeUrl,
            qrCodeUrl,
            discount,
            description,
            startDate,
            endDate,
            isOnline,
            isInStore,
            categoryIds
        } = req.body;

        // Validate required fields
        if (!title || !storeId || !discount || !startDate || !endDate) {
            res.status(400).json({
                message: "Missing required fields: title, storeId, discount, startDate, and endDate are required"
            });
            return;
        }

        // Check if store exists
        const storeExists = await prisma.store.findUnique({
            where: { id: storeId }
        });

        if (!storeExists) {
            res.status(404).json({ message: "Store not found" });
            return;
        }

        // Additional check for retailer permissions (backup to middleware check)
        // This ensures that even if the middleware is bypassed somehow, we still validate permissions
        if (req.user?.role === UserRole.RETAILER) {
            // Retailers should only create coupons for stores they manage
            const hasAccess = await prisma.store.findFirst({
                where: {
                    id: storeId,
                    // This association may need to be adjusted based on your data model
                    favoredBy: {
                        some: {
                            id: req.user.id
                        }
                    }
                }
            });

            if (!hasAccess) {
                res.status(403).json({
                    message: "Retailers can only create coupons for their own stores"
                });
                return;
            }
        }

        // Prepare category connections if provided
        const categoryConnections = categoryIds && categoryIds.length > 0
            ? {
                connect: categoryIds.map((id: string) => ({ id }))
            }
            : undefined;

        // Create coupon
        const coupon = await prisma.coupon.create({
            data: {
                title,
                storeId,
                code,
                barcodeUrl,
                qrCodeUrl,
                discount,
                description,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                isOnline: isOnline ?? true,
                isInStore: isInStore ?? true,
                categories: categoryConnections
            },
            include: {
                store: true,
                categories: true
            }
        });

        res.status(201).json({
            message: "Coupon created successfully",
            coupon
        });
        return;
    } catch (error) {
        console.error("Error creating coupon:", error);
        res.status(500).json({
            message: "An error occurred while creating the coupon",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default CreateCoupon;