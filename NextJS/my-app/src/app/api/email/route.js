import { emailQueue } from "@/lib/queues/emailQueue";
import { NextResponse } from "next/server";


export async function POST(params) {

    let body = await params.json()
    
    /// email sent request...
    await emailQueue.add('email-send', {...body}, {attempts: 3})


    return NextResponse.json({
        message:"email successfully sent."
    })
}