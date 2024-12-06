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
function createPost(title, content, published, authorId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.post.create({
            data: {
                title,
                content,
                published,
                authorId
            }
        });
    });
}
// createPost("New Post","New Post, Prisma Here", true,2)
// createPost("New Post","New Post, Prisma Here", true,2)
// createPost("New Post","New Post, Prisma Here", true,2)
function getPosts(authorId) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield prisma.post.findMany({
            where: {
                authorId
            }
        });
        console.log(posts);
    });
}
//  getPosts(1);
function getPostsWithAuthor(authorId) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield prisma.post.findMany({
            where: {
                authorId: authorId
            },
            select: {
                author: {
                    select: {
                        name: true
                    }
                },
                title: true,
                content: true,
                published: true,
                id: true
            },
            orderBy: {
                id: 'desc'
            }
        });
        console.log(posts);
    });
}
console.log(getPostsWithAuthor(1));
console.log(getPostsWithAuthor(2));
console.log(getPostsWithAuthor(3));
