// SignOutButton.js
'use client';

import { useRouter } from 'next/navigation';

const SignOutButton = () => {
    const router = useRouter();

    const handleSignOut = () => {
        localStorage.removeItem('authToken');
        router.push('/');
    };

    return (
        <button
            onClick={handleSignOut}
            className="w-full py-3 mt-4 rounded-lg bg-red-600 hover:bg-red-700 text-white focus:outline-none"
        >
            Sign Out
        </button>
    );
};

export default SignOutButton;
