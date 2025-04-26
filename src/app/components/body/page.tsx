'use client';
import { useState, useEffect } from "react";

const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg"
];

export default function Body() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-3 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={images[current]}
                        alt={`Slide ${current + 1}`}
                        className="w-full h-64 object-cover transition-all duration-700"
                    />
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-gree-600'} opacity-0.5`}
                            ></div>
                        ))}
                    </div>

                </div>
            </div>
            <section className="bg-gray-100 py-10">
            <div className="flex w-full">
            <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
                <p><b>Mission</b></p>
            <p>Layout, sizing, grids, spacing, etc. all will be handled</p><p> by Tailwind  utility classes.
            Read more at Tailwind CSS documentation</p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
            <p><b>Vission</b></p>
            <p>Layout, sizing, grids, spacing, etc. all will be handled</p>
            <p> by Tailwind  utility classes.Read more at Tailwind CSS documentation</p>
            </div>
            </div>
        </section>
        </div>
    );
}
