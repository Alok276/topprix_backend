// src/Controllers/coupons/CreateCoupon.ts
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
            categoryIds,
            isPremium = false,
            price = null
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

        // Check if user is a retailer or admin (this assumes req.user is set by middleware)
        if (req.user?.role !== UserRole.RETAILER && req.user?.role !== UserRole.ADMIN) {
            res.status(403).json({ message: "Only retailers or admins can create coupons" });
            return;
        }

        // Additional validation for premium coupons
        if (isPremium && price === null) {
            res.status(400).json({
                message: "Price is required for premium coupons"
            });
            return;
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
                isPremium,
                price: isPremium ? price : null,
                categories: categoryConnections
            },
            include: {
                store: true,
                categories: true
            }
        });

        // Return response with premium information if applicable
        res.status(201).json({
            message: "Coupon created successfully",
            coupon,
            isPremium,
            premiumInstructions: isPremium
                ? "This is a premium coupon. Users will need to purchase it to use it."
                : null
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