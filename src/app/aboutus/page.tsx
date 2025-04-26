'use client';

import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { motion } from "framer-motion";

export default function Aboutus() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">About Us</h1>
                </div>
            </section>

            {/* About Text */}
            <main className="bg-gray-100 py-14">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                        <p className="text-gray-700 mb-4">
                            Welcome to our website! We're passionate about building beautiful, responsive, and modern web experiences using tools like React and Tailwind CSS.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Whether you're here to learn, explore our work, or get in touch, we’re happy to have you. This section is customizable — feel free to drop in images, cards, or call-to-action buttons.
                        </p>
                        <p className="text-gray-700">
                            Check out the other sections above to explore more. Thanks for visiting!
                        </p>
                    </motion.div>
                </div>
            </main>

            {/* Team Section */}
            <section className="bg-white py-14">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Alice Johnson', role: 'Frontend Developer', img: '/images/course_2.jpg' },
                            { name: 'Bob Smith', role: 'Backend Developer', img: '/images/course_5.jpg' },
                            { name: 'Clara Lee', role: 'UI/UX Designer', img: '/images/slide3.jpg' },
                        ].map((member, i) => (
                            <motion.div 
                                key={i}
                                className="bg-gray-100 rounded-xl p-6 text-center shadow"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
                                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
