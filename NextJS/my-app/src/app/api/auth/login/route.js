import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken } from "@/lib/jwt";


export async function POST(playload) {
    const {email, password} = await playload.json();
    console.log({email, password});

    if(!email || !password) {
        return NextResponse.json({
            message: 'email and Password are required'
        }, {status: 400})
    }

    dbConnect();

    const existingUser = await User.findOne({email: email});

    if(!existingUser) {
        return NextResponse.json({
            message: 'User does not exist'
        }, {status: 400})
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    
    if(!isPasswordValid) {
        return NextResponse.json({
            message: 'Invalid password'
        }, {status: 400})
    }

    const token = generateToken(existingUser._id);
    console.log("Generated Token:", token);

    return NextResponse.json({
        message: 'success on login',
        user: {
            _id: existingUser._id,
            email: existingUser.email,
            name: existingUser.name,
            age: existingUser.age,
            token: token,
        },
    }, {
        headers:{
            'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=7200`
        }
    })

}