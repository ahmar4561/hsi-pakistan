"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // In icons ke liye 'lucide-react' install hona chahiye

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Partners", href: "/partners" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-[100] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Logo Section */}
          <Link href="/" className="text-xl md:text-2xl font-black text-blue-800 tracking-tighter italic shrink-0">
            HSI PAKISTAN
          </Link>

          {/* 2. Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 font-bold text-slate-600">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-blue-600 transition-colors uppercase text-[12px] lg:text-sm tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/donate" className="hidden sm:block">
              <button className="bg-blue-600 text-white px-5 md:px-8 py-2.5 rounded-full font-black text-[10px] md:text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-blue-100">
                Donate
              </button>
            </Link>

            {/* Mobile Menu Button (Only shows on small screens) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay (Smooth Dropdown) */}
      <div className={`md:hidden bg-white border-t absolute w-full left-0 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible h-auto p-6" : "opacity-0 invisible h-0"}`}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // Menu close on click
              className="text-base font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wide border-b border-slate-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/donate" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-md">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}