import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function POST(request) {
    const body = await request.body;

    // verify that existing email


    // create user


    // jwt
    let token = 'abc'


    cookies().set('token',token)

    return NextResponse.json({
        message: 'success on register'
    })

}