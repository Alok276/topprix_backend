// src/Controllers/Flyers/GetFlyer.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const GetFlyerByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Flyer ID is required" });
            return;
        }

        const flyer = await prisma.flyer.findUnique({
            where: { id },
            include: {
                store: true,
                categories: true,
                items: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            }
        });

        if (!flyer) {
            res.status(404).json({ message: "Flyer not found" });
            return;
        }

        res.status(200).json(flyer);
        return;
    } catch (error) {
        console.error("Error fetching flyer:", error);
        res.status(500).json({
            message: "An error occurred while fetching the flyer",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetFlyerByID;