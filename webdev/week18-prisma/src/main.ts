import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createPost(title:string,content:string,published:boolean,authorId:number) {
    await prisma.post.create({
        data:{
            title,
            content,
            published,
            authorId
        }
    })
}

// createPost("New Post","New Post, Prisma Here", true,1)

async function getPosts(authorId:number) {
   const posts = await prisma.post.findMany({
        where:{
            authorId
        }
    })
    console.log(posts)
}
//  getPosts(1);

 async function getPostsWithAuthor(authorId:number) {
   const posts= await prisma.post.findMany({
        where:{
            authorId:authorId
        },
        select: {
            author:{
                select:{
                    name:true
                }
            },
            title:true,
            content:true,
            published:true,
            id:true
        },
        orderBy:{
            id:'desc'
        }
    })
    console.log(posts)
 }

 console.log(getPostsWithAuthor(1))