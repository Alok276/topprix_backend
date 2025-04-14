// src/Controllers/Flyers/SaveFlyer.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const SaveFlyer = async (req: Request, res: Response) => {
    try {
        const { userId, flyerId } = req.body;

        if (!userId || !flyerId) {
            res.status(400).json({
                message: "Both userId and flyerId are required"
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

        // Check if flyer exists
        const flyerExists = await prisma.flyer.findUnique({
            where: { id: flyerId }
        });

        if (!flyerExists) {
            res.status(404).json({ message: "Flyer not found" });
            return;
        }

        // Check if already saved
        const alreadySaved = await prisma.user.findFirst({
            where: {
                id: userId,
                savedFlyers: {
                    some: {
                        id: flyerId
                    }
                }
            }
        });

        if (alreadySaved) {
            res.status(400).json({
                message: "This flyer is already saved by the user"
            });
            return;
        }

        // Save the flyer to the user
        await prisma.user.update({
            where: { id: userId },
            data: {
                savedFlyers: {
                    connect: { id: flyerId }
                }
            }
        });

        res.status(200).json({
            message: "Flyer saved successfully"
        });
        return;
    } catch (error) {
        console.error("Error saving flyer:", error);
        res.status(500).json({
            message: "An error occurred while saving the flyer",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default SaveFlyer;