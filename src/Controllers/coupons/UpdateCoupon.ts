import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const UpdateCoupon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
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

        if (!id) {
            res.status(400).json({ message: "Coupon ID is required" });
            return;
        }

        // Check if coupon exists
        const couponExists = await prisma.coupon.findUnique({
            where: { id },
            include: {
                categories: true
            }
        });

        if (!couponExists) {
            res.status(404).json({ message: "Coupon not found" });
            return;
        }

        // If storeId is provided, verify store exists
        if (storeId) {
            const storeExists = await prisma.store.findUnique({
                where: { id: storeId }
            });

            if (!storeExists) {
                res.status(404).json({ message: "Store not found" });
                return;
            }
        }

        // Prepare update data
        const updateData: any = {};

        // Add fields to update data if they are provided
        if (title !== undefined) updateData.title = title;
        if (storeId !== undefined) updateData.storeId = storeId;
        if (code !== undefined) updateData.code = code;
        if (barcodeUrl !== undefined) updateData.barcodeUrl = barcodeUrl;
        if (qrCodeUrl !== undefined) updateData.qrCodeUrl = qrCodeUrl;
        if (discount !== undefined) updateData.discount = discount;
        if (description !== undefined) updateData.description = description;
        if (startDate !== undefined) updateData.startDate = new Date(startDate);
        if (endDate !== undefined) updateData.endDate = new Date(endDate);
        if (isOnline !== undefined) updateData.isOnline = isOnline;
        if (isInStore !== undefined) updateData.isInStore = isInStore;

        // Handle category updates if provided
        if (categoryIds) {
            // Disconnect all existing categories first
            updateData.categories = {
                disconnect: couponExists.categories.map(cat => ({ id: cat.id }))
            };

            // Then connect the new categories
            if (categoryIds.length > 0) {
                updateData.categories = {
                    ...updateData.categories,
                    connect: categoryIds.map((id: string) => ({ id }))
                };
            }
        }

        // Update coupon
        const updatedCoupon = await prisma.coupon.update({
            where: { id },
            data: updateData,
            include: {
                store: true,
                categories: true
            }
        });

        res.status(200).json({
            message: "Coupon updated successfully",
            coupon: updatedCoupon
        });
        return;
    } catch (error) {
        console.error("Error updating coupon:", error);
        res.status(500).json({
            message: "An error occurred while updating the coupon",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default UpdateCoupon;