// src/Controllers/flyers/CreateFlyer.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { UserRole } from "../../../prisma/generated/prisma";

const CreateFlyer = async (req: Request, res: Response) => {
    try {
        const {
            title,
            storeId,
            imageUrl,
            startDate,
            endDate,
            isSponsored,
            categoryIds,
            isPremium = false,
            isPaid = false
        } = req.body;

        // Basic validation
        if (!title || !storeId || !imageUrl || !startDate || !endDate) {
            res.status(400).json({
                message: "Missing required fields: title, storeId, imageUrl, startDate, and endDate are required"
            });
            return;
        }

        // Validate store exists
        const storeExists = await prisma.store.findUnique({
            where: { id: storeId }
        });

        if (!storeExists) {
            res.status(404).json({ message: "Store not found" });
            return;
        }

        // Check if user is a retailer (this assumes req.user is set by middleware)
        if (req.user?.role !== UserRole.RETAILER) {
            res.status(403).json({ message: "Only retailers can create flyers" });
            return;
        }

        // Check if the retailer has an active subscription
        const hasActiveSubscription = req.user.hasActiveSubscription === true &&
            (req.user.subscriptionStatus === 'ACTIVE' ||
                req.user.subscriptionStatus === 'TRIALING');

        // Get default flyer price for pay-per-upload (this could be stored in a settings table)
        const defaultFlyerPrice = 9.99; // Default price for flyer uploads

        // Determine if payment is required
        const requiresPayment = !hasActiveSubscription && !isPaid;

        // Prepare data object
        const data: any = {
            title,
            storeId,
            imageUrl,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            isSponsored: isSponsored || false,
            isPremium,
            isPaid, // If they've already paid, mark as paid
            price: requiresPayment ? defaultFlyerPrice : null
        };

        // Connect categories if provided
        if (categoryIds && categoryIds.length > 0) {
            data.categories = {
                connect: categoryIds.map((id: string) => ({ id }))
            };
        }

        // Create flyer
        const flyer = await prisma.flyer.create({
            data,
            include: {
                store: true,
                categories: true
            }
        });

        // Return response with payment information if needed
        res.status(201).json({
            message: requiresPayment
                ? "Flyer created, but payment is required before it becomes active"
                : "Flyer created successfully",
            flyer,
            requiresPayment,
            paymentAmount: requiresPayment ? defaultFlyerPrice : 0,
            currency: "usd",
            paymentType: "FLYER_UPLOAD",
            paymentInstructions: requiresPayment
                ? "Please complete the payment to activate this flyer. Use the payment endpoint with the flyerId."
                : null
        });
        return;
    } catch (error) {
        console.error("Error creating flyer:", error);
        res.status(500).json({
            message: "An error occurred while creating the flyer",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default CreateFlyer;