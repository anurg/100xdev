import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({log:['info','query']});

async function main() {
    // ... you will write your Prisma Client queries here
    // await prisma.user.create({
    //         data: {
    //           name: 'Alice',
    //           email: 'alice@prisma.io',
    //           posts: {
    //             create: { title: 'Hello World' },
    //           }

    // }})

    const allUsers = await prisma.user.findMany({
        include: {
            posts:true,
        }
    });
    console.dir(allUsers,{depth:null})
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    });


