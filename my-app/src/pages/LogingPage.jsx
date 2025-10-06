

import React from 'react'
import { useState } from 'react'


const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Sign in with email
                </h2>

                {error && (
                    <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-red-600 cursor-pointer text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        Log In
                    </button>

                    <p className="text-sm text-gray-600 text-center mt-3">
                        Don’t have an account?{" "}
                        <a href="/signup" className="text-red-500 hover:underline">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LogIn
