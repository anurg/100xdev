import { NextResponse } from "next/server";

export  function GET() {
    return NextResponse.json({
        name:"Anurag",
        email:"anurg@yahoo.com"
    })
}

export function POST() {
    return NextResponse.json({
        name:"Anurag",
        email:"anurg@yahoo.com"
    })
}