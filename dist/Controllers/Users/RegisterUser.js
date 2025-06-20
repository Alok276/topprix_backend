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
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, location, role } = req.body;
    const user = yield prismaDb_1.prisma.user.create({
        data: {
            name: username,
            email: email,
            role: role,
            createdAt: new Date(),
            location: location,
        },
    });
    res.status(201).json({ message: "User registered successfully", user });
});
exports.default = RegisterUser;
//# sourceMappingURL=RegisterUser.js.map