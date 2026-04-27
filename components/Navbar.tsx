"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Science', href: '/science' },
    { name: 'Products', href: '/products' },
    { name: 'Insights', href: '/insights' },
  ];

  return (
    <nav className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div>
          <Link href="/">
            <img src="/images/Frame 1100.png" alt="Logo" className="object-fit h-[50px] w-auto md:h-[60px]" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link href={link.href} className="navlink hover:text-emerald-700 transition-colors text-lg font-medium">
                {link.name}
              </Link>
              {index < navLinks.length - 1 && <span className="text-gray-300">•</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link href="/partner" className="px-6 py-2.5 border-2 border-gray-800 text-gray-800 font-semibold rounded hover:bg-gray-800 hover:text-white transition-all duration-300">
            Partner with us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-medium text-gray-800 hover:text-emerald-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/partner"
            className="w-full max-w-xs text-center px-6 py-4 border-2 border-gray-800 text-gray-800 font-bold rounded text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Partner with us
          </Link>
        </div>
      </div>
    </nav>
  );
}

