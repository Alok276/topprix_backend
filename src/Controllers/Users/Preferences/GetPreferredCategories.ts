// src/Controllers/Users/Preferences/GetPreferredCategories.ts
import { Request, Response } from "express";
import { prisma } from "../../../Db/prismaDb";

const GetPreferredCategories = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;

        if (!email) {
            res.status(400).json({ message: "Email parameter is required" });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                preferredCategories: true
            }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json({
            preferredCategories: user.preferredCategories
        });
        return;;
    } catch (error) {
        console.error("Error getting preferred categories:", error);
        res.status(500).json({
            message: "An error occurred while getting preferred categories",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;;
    }
};

export default GetPreferredCategories;