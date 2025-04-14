// src/Controllers/Users/Preferences/AddPreferredStore.ts
import { Request, Response } from "express";
import { prisma } from "../../../Db/prismaDb";

const AddPreferredStore = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const { storeId } = req.body;

        if (!email) {
            res.status(400).json({ message: "Email parameter is required" });
            return;
        }

        if (!storeId) {
            res.status(400).json({ message: "Store ID is required" });
            return;
        }

        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Check if store exists
        const store = await prisma.store.findUnique({
            where: { id: storeId }
        });

        if (!store) {
            res.status(404).json({ message: "Store not found" });
            return;
        }

        // Add the store to user's preferred stores
        const updatedUser = await prisma.user.update({
            where: { email },
            data: {
                preferredStores: {
                    connect: { id: storeId }
                }
            },
            include: {
                preferredStores: true
            }
        });

        res.status(200).json({
            message: "Store added to preferred stores",
            preferredStores: updatedUser.preferredStores
        });
        return;
    } catch (error) {
        console.error("Error adding preferred store:", error);
        res.status(500).json({
            message: "An error occurred while adding preferred store",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default AddPreferredStore;