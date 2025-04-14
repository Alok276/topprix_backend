// src/Controllers/Users/Preferences/GetPreferredStores.ts
import { Request, Response } from "express";
import { prisma } from "../../../Db/prismaDb";

const GetPreferredStores = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;

        if (!email) {
            res.status(400).json({ message: "Email parameter is required" });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                preferredStores: true
            }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json({
            preferredStores: user.preferredStores
        });
        return;
    } catch (error) {
        console.error("Error getting preferred stores:", error);
        res.status(500).json({
            message: "An error occurred while getting preferred stores",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default GetPreferredStores;