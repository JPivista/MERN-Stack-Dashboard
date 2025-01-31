// components/Dashboard.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { withProtectedRoute } from '../Authentication/withProtectedRoute'; // Named import
import SignOutButton from '../Authentication/SignOutButton';

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        if (!withProtectedRoute()) {
            router.push("/login"); // Redirect to login if not authenticated
        }
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Dashboard</h2>
                <p className="text-center text-gray-700 mb-4">Welcome to your dashboard!</p>
                <SignOutButton />
            </div>
        </div>
    );
};

export default Dashboard;
