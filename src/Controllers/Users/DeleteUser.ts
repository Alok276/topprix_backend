import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";

const DeleteUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;

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

        // Delete user
        // Note: You may need to adjust this depending on your deletion strategy
        // (soft delete vs hard delete) and how you handle related records
        await prisma.user.delete({
            where: { email }
        });

        res.status(200).json({
            message: "User deleted successfully"
        });
        return;
    } catch (error) {
        console.error("Error deleting user:", error);

        // Check if error is related to foreign key constraints
        if (error instanceof Error && error.message.includes("Foreign key constraint failed")) {
            res.status(409).json({
                message: "Cannot delete user because they have related records",
                error: error.message
            });
            return;
        }

        res.status(500).json({
            message: "An error occurred while deleting the user",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
};

export default DeleteUser;