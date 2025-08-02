"use client";
import Link from 'next/link';
import { useState } from 'react';
import LocaleSelector from "@/components/LocaleSelector";
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white fixed top-0 left-0 w-full z-10 py-0">
      <nav className="relative max-w-7xl mx-auto px-4 py-3 backdrop-blur-md shadow-md w-full flex items-center justify-between">
        {/* Left-side Menu Icon */}
        <div className="z-20">
          <button
            className="text-gray-300 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-16 left-4 bg-white/10 backdrop-blur-lg px-6 py-4 space-y-3 text-left rounded-md z-10">
              <Link href="/" className="block text-white hover:text-cyan-400">Home</Link>
              <Link href="#about" className="block text-white hover:text-cyan-400">About</Link>
              <Link href="#services" className="block text-white hover:text-cyan-400">Services</Link>
              <Link href="/Projects" className="block text-white hover:text-cyan-400">Projects</Link>
              <Link href="#client-review" className="block text-white hover:text-cyan-400">Client Reviews</Link>
              <Link href="#contact" className="block text-white hover:text-cyan-400">Contact</Link>
              <a href="/Resume.png" className="block text-white hover:text-cyan-400">Download CV</a>
              <Link href="#" className="block text-white hover:text-cyan-400">Talk to Me</Link>
              <a href="/CreateOrderPage" className="block text-white hover:text-cyan-400">Create Order</a>
              <Link href="/HireMe" className="block text-white hover:text-cyan-400">Hire Me</Link>
            </div>
          )}
        </div>

        {/* Centered Header Nav (Desktop Only) */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10">
          <li><Link href="/" className="text-gray-300 hover:text-cyan-400 transition">Home</Link></li>
          <li><Link href="#about" className="text-gray-300 hover:text-cyan-400 transition">About</Link></li>
          <li><Link href="/Projects" className="text-gray-300 hover:text-cyan-400 transition">Projects</Link></li>
          <li><Link href="#services" className="text-gray-300 hover:text-cyan-400 transition">Services</Link></li>
          <li><Link href="#contact" className="text-gray-300 hover:text-cyan-400 transition">Contact</Link></li>
        </ul>

        {/* Right side Locale Selector */}
        <div className="z-20">
          <LocaleSelector />
        </div>
      </nav>
    </header>
  );
};

export default Header;
