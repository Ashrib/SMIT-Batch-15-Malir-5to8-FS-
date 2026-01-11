import { NextResponse } from "next/server";

export async function GET() {
    return new NextResponse.json({message: "Logged out successfully"}, {
        status: 200,
        headers: {
            "Set-Cookie": "token=; Path=/; HttpOnly; Max-Age=0"
        }
    });
}