import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken } from "@/lib/jwt";


export async function POST(playload) {
    const {email, password, name, age} = await playload.json();
    console.log({email, password, name, age});

    if(!email || !password || !name || !age) {
        return NextResponse.json({
            message: 'email, Password, Name and Age are required'
        }, {status: 400})
    }

    dbConnect();

    const existingUser = await User.findOne({email: email});

    if(existingUser) {
        return NextResponse.json({
            message: 'User already exists'
        }, {status: 400})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        email: email,
        password: hashedPassword,
        name: name,
        age: age,
    });

    await newUser.save();

    const token = generateToken(newUser._id);
    console.log("Generated Token:", token);

    return NextResponse.json({
        message: 'success on register',
        user: {
            _id: newUser._id,
            email: newUser.email,
            name: newUser.name,
            age: newUser.age,
            token: token,
        },
    }, {
        headers:{
            'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=7200`
        }
    })

}