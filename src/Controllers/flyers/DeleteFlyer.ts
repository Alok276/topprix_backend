// src/Controllers/Flyers/DeleteFlyer.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const DeleteFlyer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Flyer ID is required" });
            return;
        }

        // Check if the flyer exists
        const flyerExists = await prisma.flyer.findUnique({
            where: { id }
        });

        if (!flyerExists) {
            res.status(404).json({ message: "Flyer not found" });
            return;
        }

        // First, delete all flyer items associated with this flyer
        await prisma.flyerItem.deleteMany({
            where: { flyerId: id }
        });

        // Then, delete the flyer itself
        await prisma.flyer.delete({
            where: { id }
        });

        res.status(200).json({
            message: "Flyer and all its items deleted successfully"
        });
        return;
    } catch (error) {
        console.error("Error deleting flyer:", error);

        // Handle potential foreign key constraint issues
        if (error instanceof Error &&
            error.message.includes("Foreign key constraint failed")) {
            res.status(409).json({
                message: "Cannot delete flyer because it has related records in shopping lists or wishlists",
                error: error.message
            });
            return;
        }

        res.status(500).json({
            message: "An error occurred while deleting the flyer",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default DeleteFlyer;