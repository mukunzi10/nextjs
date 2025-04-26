import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <>
    <nav className="flex  space-x-3">
                <Link href="/" className="hover:text-gray-400">Home</Link>
                <Link href="/aboutus" className="hover:text-gray-400">About</Link>
                <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </nav>
            </>
  )
}

export default Navigation