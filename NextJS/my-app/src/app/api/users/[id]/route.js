import { NextResponse } from "next/server";

export async function PUT(request, { params }){
    const body = await request.json();
    const { id } = await params;

    console.log("body:", body)
    console.log("params:", id)
    // find by id

    return NextResponse.json({
        message: 'user updated successfully',
        users: ['user1', 'user2']
    })
}
