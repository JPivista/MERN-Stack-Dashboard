// TokenValidation.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const TokenValidation = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (!token) {
            // Token is not present, redirect to login page
            router.push('/login');
        } else {
            // Optionally, validate the token's expiration here
            // If the token is expired, remove it and redirect to login
            const tokenExpiration = JSON.parse(atob(token.split('.')[1])).exp;
            if (Date.now() >= tokenExpiration * 1000) {
                localStorage.removeItem('authToken');
                router.push('/login');
            }
        }
    }, [router]);

    return null; // This component doesn't render anything
};

export default TokenValidation;
