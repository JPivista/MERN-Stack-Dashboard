// app/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = request.cookies.get('authToken'); // Get token from cookies
    const isAuth = Boolean(token);

    // If the user is not authenticated and trying to access protected routes, redirect to login
    if (!isAuth && request.nextUrl.pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow access if authenticated or visiting login page
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/', '/profile', '/settings'], // Add '/' to block access to home until logged in
};
