import { NextResponse } from "next/server";

// GET
// POST
// DELETE
// PUT

export async function GET(){

    return NextResponse.json({
        message: 'users fetched successfully',
        users: ['user1', 'user2']
    })
}


export async function POST(request){
    const data = await request.json();


    // set data in mongodb

    return NextResponse.json({
        message: 'users added successfully',
        users: ['user1', 'user2', 'user3']
    })
}


// api/users/delete?id=userId?a=
export async function DELETE(request){
    let  {searchParams} = new URL(request.nextUrl)
    
    const id = searchParams.get('id')

    // find by id

    return NextResponse.json({
        message: 'user deleted successfully',
        users: ['user1', 'user2']
    })
}
/// api/users/123
export async function PUT(request){
    

    // find by id

    return NextResponse.json({
        message: 'user deleted successfully',
        users: ['user1', 'user2']
    })
}

