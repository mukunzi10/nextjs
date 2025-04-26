'use client';
import { useState } from 'react';

export default function AdminSignInModal({ isOpen, onClose, onLogin }) {
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic check (replace with real auth logic)
        if (form.username === 'admin' && form.password === 'password123') {
            onLogin();
            onClose();
        } else {
            setError('Invalid credentials');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✖
                </button>

                <h2 className="text-xl font-semibold text-center mb-4">Admin Sign In</h2>

                {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
