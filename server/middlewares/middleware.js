import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI);

async function getUserFromToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await client.connect();
    const user = await client.db().collection('users').findOne({ _id: decoded.id });
    return user;
}

export async function middleware(req) {
    let token;

    // Retrieve token from cookies or headers
    if (req.cookies.has('authToken')) {
        token = req.cookies.get('authToken');
    } else if (req.headers.get('Authorization')?.startsWith('Bearer')) {
        token = req.headers.get('Authorization').split(' ')[1];
    }

    if (token) {
        try {
            const user = await getUserFromToken(token);

            if (!user) {
                return NextResponse.redirect(new URL('/login', req.url));
            }

            // Attach user to request (you can customize this as per your app's needs)
            req.user = user;

            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    return NextResponse.redirect(new URL('/login', req.url)); // Redirect if no token
}

export const config = {
    matcher: ['/dashboard', '/profile'], // Protected routes
};
