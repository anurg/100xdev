import { NextRequest, NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
            name: "Harkirat",
            email: "harkirat@gmail.com",
            address: {
            city: "Delhi",
            state: "Delhi",
            houseNumber: "21"
            }
            
    })
}

export function POST(req:NextRequest) {
    const data = req.json();
    console.log(data)
    return NextResponse.json({
        message:"User Signed up!"
    })
}