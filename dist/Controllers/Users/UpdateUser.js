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
const UpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const { name, phone, location, preferredStoreIds, preferredCategoryIds } = req.body;
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
        // Prepare update data
        const updateData = {};
        if (name !== undefined)
            updateData.name = name;
        if (phone !== undefined)
            updateData.phone = phone;
        if (location !== undefined)
            updateData.location = location;
        // Connect preferred stores if provided
        if (preferredStoreIds && preferredStoreIds.length > 0) {
            updateData.preferredStores = {
                connect: preferredStoreIds.map((id) => ({ id }))
            };
        }
        // Connect preferred categories if provided
        if (preferredCategoryIds && preferredCategoryIds.length > 0) {
            updateData.preferredCategories = {
                connect: preferredCategoryIds.map((id) => ({ id }))
            };
        }
        // Update the user
        const updatedUser = yield prismaDb_1.prisma.user.update({
            where: { email },
            data: updateData,
            include: {
                preferredStores: true,
                preferredCategories: true
            }
        });
        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        });
        return;
    }
    catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({
            message: "An error occurred while updating the user",
            error: error instanceof Error ? error.message : "Unknown error"
        });
        return;
    }
});
exports.default = UpdateUser;
//# sourceMappingURL=UpdateUser.js.map