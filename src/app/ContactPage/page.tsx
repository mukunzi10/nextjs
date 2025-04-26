'use client';
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { useState, useEffect } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
        if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                    <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">Contact Us</h1>

                    {submitted && (
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-6 text-center">
                            ✅ Thank you! Your message has been sent.
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full p-3 mt-1 rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-300`}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full p-3 mt-1 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-300`}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full p-3 mt-1 rounded border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-300`}
                                />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                            >
                                📤 Send Message
                            </button>
                        </form>

                        {/* Contact Info + Map */}
                        <div className="space-y-6 text-gray-700 text-sm">
                            <div>
                                <h2 className="text-lg font-semibold text-blue-600 mb-2">Reach Us At</h2>
                                <p>📍 123 Main Street, Country</p>
                                <p>📧 support@yourdomain.com</p>
                                <p>📞 +250788883316</p>
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-blue-600 mb-2">Follow Us</h2>
                                <div className="flex space-x-4">
                                    <a href="#" className="hover:text-blue-500">🌐 Website</a>
                                    <a href="#" className="hover:text-blue-500">📘 Facebook</a>
                                    <a href="#" className="hover:text-blue-500">🐦 Twitter</a>
                                </div>
                            </div>

                            <div className="rounded overflow-hidden shadow-lg">
                                <iframe
                                    src="https://maps.google.com/maps?q=Matare+tss&output=embed"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
