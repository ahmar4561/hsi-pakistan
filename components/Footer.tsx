import React from "react";
import Link from "next/link";
import { Mail, MapPin, Globe, Share2, Info, Heart, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 md:pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto border-b border-white/5 pb-12 md:pb-16">
        {/* Grid setup: 1 column on mobile, 2 on tablets, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-black tracking-tighter italic">
              HSI <span className="text-blue-500">PAKISTAN</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-xs mx-auto md:mx-0">
              Working for dignity, safety, and equality for a secure and resilient Pakistan. 
              A people-centered initiative focused on sustainable development.
            </p>
            <div className="flex justify-center md:justify-start gap-5">
              <Globe size={20} className="text-slate-400 hover:text-blue-500 cursor-pointer transition" />
              <Share2 size={20} className="text-slate-400 hover:text-blue-400 cursor-pointer transition" />
              <Info size={20} className="text-slate-400 hover:text-slate-200 cursor-pointer transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-6 text-blue-400 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold italic">
              <li><Link href="/" className="hover:text-white transition block md:inline">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition block md:inline">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-white transition block md:inline">Our Initiatives</Link></li>
              <li><Link href="/membership" className="hover:text-white transition block md:inline">Community</Link></li>
              <li><Link href="/contact" className="hover:text-white transition block md:inline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-6 text-blue-400 uppercase text-xs tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span className="max-w-[200px] md:max-w-none">Dokri Taluka, Larkana District, <br className="hidden md:block" />Sindh, Pakistan</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>info@hsipakistan.org</span>
              </li>
            </ul>
          </div>

          {/* Support Us */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="font-bold text-blue-400 uppercase text-xs tracking-widest">Support Our Mission</h4>
            <p className="text-slate-400 text-xs italic font-medium leading-relaxed max-w-xs mx-auto md:mx-0">
              "Be part of the change you want to see in society."
            </p>
            <Link href="/donate" className="block w-full">
              <button className="w-full bg-blue-600 hover:bg-white hover:text-blue-600 py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 group">
                DONATE NOW <Heart size={16} className="fill-current group-hover:animate-pulse" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center pt-10 text-slate-600 text-[9px] md:text-[10px] font-black tracking-[0.15em] md:tracking-[0.2em] uppercase px-4">
        © {new Date().getFullYear()} Human Security Initiative Pakistan. <br className="md:hidden" /> All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;