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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.create({
            data: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
    });
}
const u1 = {
    id: 1,
    email: "anurg@yahoo.com",
    name: "Anurag"
};
const u2 = {
    id: 2,
    email: "test@yahoo.com",
    name: "Test"
};
// insertUser(u1)
// insertUser(u2)
function updateUser(user, newEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                email: newEmail
            }
        });
        console.log(res);
    });
}
// updateUser(u1,"anurg@yahoo.com")
function getUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        console.log(res === null || res === void 0 ? void 0 : res.email);
    });
}
getUser(1);
getUser(2);
