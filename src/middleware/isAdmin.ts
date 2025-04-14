import { Request, Response, NextFunction } from "express";
import { UserRole } from "../../prisma/generated/prisma";
import { getUserFromEmail } from "./checkRole";

// Middleware to check if user is an admin
export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // First get the user
        await getUserFromEmail(req, res, () => {
            // Check if user has admin role
            if (req.user?.role !== UserRole.ADMIN) {
                res.status(403).json({ message: "Admin permissions required" });
                return;
            }

            next();
        });
    } catch (error) {
        console.error("Authorization error:", error);
        res.status(500).json({
            message: "Authorization error",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};