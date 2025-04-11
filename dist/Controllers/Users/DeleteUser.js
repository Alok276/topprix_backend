"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaDb_1 = require("../../Db/prismaDb");
const DeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        if (!email) {
            res.status(400).json({ message: "Email parameter is required" });
            return;
        }
        // Check if the user exists
        const userExists = yield prismaDb_1.prisma.user.findUnique({
            where: { email }
        });
        if (!userExists) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        // Delete user
        // Note: You may need to adjust this depending on your deletion strategy
        // (soft delete vs hard delete) and how you handle related records
        yield prismaDb_1.prisma.user.delete({
            where: { email }
        });
        res.status(200).json({
            message: "User deleted successfully"
        });
        return;
    }
    catch (error) {
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
});
exports.default = DeleteUser;
//# sourceMappingURL=DeleteUser.js.map