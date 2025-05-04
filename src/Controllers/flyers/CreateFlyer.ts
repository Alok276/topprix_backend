// src/Controllers/flyers/CreateFlyer.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { UserRole } from "../../../prisma/generated/prisma";

/**
 * Controller for creating flyers with subscription status checking
 * Handles both subscription-based uploads and pay-per-upload
 */
const CreateFlyer = async (req: Request, res: Response) => {
    try {
        console.log("CreateFlyer: Starting flyer creation process");
        console.log("Request user:", req.user);

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

        // Basic validation of required fields
        if (!title || !storeId || !imageUrl || !startDate || !endDate) {
            console.log("CreateFlyer: Missing required fields");
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
            console.log("CreateFlyer: Store not found");
            res.status(404).json({ message: "Store not found" });
            return;
        }

        // IMPORTANT: Authentication check - make sure the user object exists
        // This validates that the getUserFromEmail middleware has run successfully
        if (!req.user) {
            console.log("CreateFlyer: Authentication required - req.user is missing");
            res.status(401).json({ message: "Authentication required" });
            return;
        }

        // IMPORTANT: Role check - only retailers can create flyers
        if (req.user.role !== UserRole.RETAILER) {
            console.log(`CreateFlyer: User role check failed - role is ${req.user.role}`);
            res.status(403).json({ message: "Only retailers can create flyers" });
            return;
        }

        console.log("CreateFlyer: User passed role validation:", req.user.email);

        // Get user with subscription information
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                hasActiveSubscription: true,
                subscriptionStatus: true,
                currentPeriodEnd: true
            }
        });

        if (!user) {
            console.log("CreateFlyer: User not found in database");
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Check if the retailer has an active subscription
        const hasActiveSubscription = user.hasActiveSubscription === true &&
            (user.subscriptionStatus === 'ACTIVE' || user.subscriptionStatus === 'TRIALING') &&
            user.currentPeriodEnd && user.currentPeriodEnd > new Date();

        console.log("CreateFlyer: Subscription status check:", {
            hasActiveSubscription,
            status: user.subscriptionStatus,
            periodEnd: user.currentPeriodEnd
        });

        // Default price for pay-per-upload if no subscription
        const defaultFlyerPrice = 9.99;

        // Determine if payment is required
        const requiresPayment = !hasActiveSubscription && !isPaid;

        // Prepare data object for flyer creation
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

        console.log("CreateFlyer: Flyer created successfully:", flyer.id);

        // Return response with payment information if needed
        res.status(201).json({
            message: requiresPayment
                ? "Flyer created, but payment is required before it becomes active"
                : "Flyer created successfully",
            flyer,
            requiresPayment,
            paymentAmount: requiresPayment ? defaultFlyerPrice : 0,
            currency: "eur",
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