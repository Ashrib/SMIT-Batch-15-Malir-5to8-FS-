import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

export const runtime = 'nodejs';

export async function middleware(request) {
    const token = request.cookies.get('token');
    console.log("Middleware Token:", token);

    if(!token) {
        console.log("No token found in cookies");
        // if(request.nextUrl.pathname.startsWith('/landing')) {

        //     return NextResponse.next();
        // }

        console.log("Redirecting to",new URL('/auth/login', request.url));
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    const verified = verifyToken(token?.value);

    if(!verified) {
        console.log("Token verification failed");
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - auth (auth pages)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|auth).*)',
    ],
};