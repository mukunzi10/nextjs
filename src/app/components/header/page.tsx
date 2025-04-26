'use client';
import { useState } from 'react';
import AdminSignInModal from '@/app/components/AdminSignInModal';

import Link from 'next/link';
export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    return(
        //header container with logo title 
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <h1 className="text-xl font-bold">Matare TSS</h1>
            </div>
            <nav className="flex  space-x-7">
                <Link href="/" className="hover:text-gray-400">Home</Link>
                <Link href="/aboutus" className="hover:text-gray-500">About</Link>
                <Link href="/ContactPage" className="hover:text-gray-400">Content</Link>
                <Link href='/location' className='hover:text-gray-400'>Location</Link>
                <Link href='' className='hover:text-gray-400'>
                <button
                onClick={() => setShowModal(true)}
            >
            Login
            </button>

            {isAdmin && <p className="mt-4 text-green-600">✅ Welcome, Admin!</p>}

            <AdminSignInModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onLogin={() => setIsAdmin(true)}
            />
                
                </Link>
            </nav>
        </div>
    )

}
