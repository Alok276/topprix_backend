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
const GetUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    if (!email) {
        res.status(400).send({ message: "Email parameter is required" });
        return;
    }
    const user = yield prismaDb_1.prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (!user) {
        res.status(404).send({ message: "User not found" });
        return;
    }
    res.status(200).send(user);
});
exports.default = GetUser;
//# sourceMappingURL=GetUser.js.map