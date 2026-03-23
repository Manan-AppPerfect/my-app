import { matchesMiddleware } from "next/dist/shared/lib/router/router";
import { Tiro_Kannada } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest){ 

    const token = request.cookies.get('token')?.value;

    if(!token){
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/cart'],
}