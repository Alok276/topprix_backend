// src/Controllers/Users/Preferences/RemovePreferredStore.ts
import { Request, Response } from "express";
import { prisma } from "../../../Db/prismaDb";

const RemovePreferredStore = async (req: Request, res: Response) => {
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

        // Remove the store from user's preferred stores
        const updatedUser = await prisma.user.update({
            where: { email },
            data: {
                preferredStores: {
                    disconnect: { id: storeId }
                }
            },
            include: {
                preferredStores: true
            }
        });

        res.status(200).json({
            message: "Store removed from preferred stores",
            preferredStores: updatedUser.preferredStores
        });
        return;
    } catch (error) {
        console.error("Error removing preferred store:", error);
        res.status(500).json({
            message: "An error occurred while removing preferred store",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default RemovePreferredStore;