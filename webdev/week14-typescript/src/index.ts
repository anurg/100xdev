import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface User {
    id:number;
    email:string;
    name:string;
}
async function insertUser(user:User) {
    await prisma.user.create({
        data:{
            id:user.id,
            email:user.email,
            name:user.name
        }
    })
}
const u1:User = {
    id:1,
    email:"anurg@yahoo.com",
    name:"Anurag"
}
const u2:User = {
    id:2,
    email:"test@yahoo.com",
    name:"Test"
}
// insertUser(u1)
// insertUser(u2)

async function updateUser(user:User, newEmail:string) {
    const res = await prisma.user.update({
        where:{
            id:user.id
        },
        data:{
            email:newEmail
        }
    })
    console.log(res)
}
// updateUser(u1,"anurg@yahoo.com")

async function getUser(userId:number) {
    const res = await prisma.user.findUnique({
        where:{
            id:userId
        }
    })
    console.log(res?.email)
}
getUser(1)
getUser(2)