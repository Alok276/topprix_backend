import { Request, Response, NextFunction } from "express";
import { UserRole } from "../../prisma/generated/prisma";
import { prisma } from "../Db/prismaDb";

// Custom interface to extend Express Request
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: UserRole;
            };
        }
    }
}

// Middleware to check if user exists and extract user info
export const getUserFromEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Get email from request (could be from session, token, or query param)
        const email = req.headers['user-email'] as string || req.query.userEmail as string;

        if (!email) {
            res.status(401).json({ message: "Authentication required" });
            return;
        }

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Attach user to request object
        req.user = {
            id: user.id,
            email: user.email,
            role: user.role as UserRole
        };

        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(500).json({
            message: "Authentication error",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};



// Middleware to check if user is an admin or retailer
export const isAdminOrRetailer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // First get the user
        await getUserFromEmail(req, res, () => {
            // Check if user has admin or retailer role
            if (req.user?.role !== UserRole.ADMIN && req.user?.role !== UserRole.RETAILER) {
                res.status(403).json({ message: "Admin or retailer permissions required" });
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