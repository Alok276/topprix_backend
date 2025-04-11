import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const UpdateUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const { name, phone, location, preferredStoreIds, preferredCategoryIds } = req.body;

        if (!email) {
            res.status(400).json({ message: "Email parameter is required" });
            return;
        }

        // Check if the user exists
        const userExists = await prisma.user.findUnique({
            where: { email }
        });

        if (!userExists) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Prepare update data
        const updateData: any = {};

        if (name !== undefined) updateData.name = name;
        if (phone !== undefined) updateData.phone = phone;
        if (location !== undefined) updateData.location = location;

        // Connect preferred stores if provided
        if (preferredStoreIds && preferredStoreIds.length > 0) {
            updateData.preferredStores = {
                connect: preferredStoreIds.map((id: string) => ({ id }))
            };
        }

        // Connect preferred categories if provided
        if (preferredCategoryIds && preferredCategoryIds.length > 0) {
            updateData.preferredCategories = {
                connect: preferredCategoryIds.map((id: string) => ({ id }))
            };
        }

        // Update the user
        const updatedUser = await prisma.user.update({
            where: { email },
            data: updateData,
            include: {
                preferredStores: true,
                preferredCategories: true
            }
        });

        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        });
        return;
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({
            message: "An error occurred while updating the user",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default UpdateUser;