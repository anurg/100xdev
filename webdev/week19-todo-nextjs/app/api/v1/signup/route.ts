import { NextRequest, NextResponse } from "next/server";

// import { PrismaClient  } from "@prisma/client";
// const client = new PrismaClient();
import prisma from "../db"

export async function POST(req:NextRequest) {
    
    const body = await req.json();
    const user = await prisma.user.create({
        data: {
            username:body.username,
            password:body.password
        }
    })
    console.log(user.id)
    return NextResponse.json({
        message:"Data Updated."
    })
}

export async function GET() {
    const users = await prisma.user.findMany({})
    // return NextResponse.json({
    //     username:user?.username,
    //     email:user?.password
    // })
    
    return NextResponse.json({users})

}