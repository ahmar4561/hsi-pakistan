import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo Section */}
      <Link href="/" className="text-xl font-black text-blue-800 tracking-tighter italic">
        HSI PAKISTAN
      </Link>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex space-x-8 font-bold text-slate-600">
        <Link href="/" className="hover:text-blue-600 transition-colors uppercase text-sm tracking-wide">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors uppercase text-sm tracking-wide">
          About
        </Link>
        <Link href="/programs" className="hover:text-blue-600 transition-colors uppercase text-sm tracking-wide">
          Programs
        </Link>
        {/* Naye Links jo pehle missing thay */}
        <Link href="/partners" className="hover:text-blue-600 transition-colors uppercase text-sm tracking-wide">
          Partners
        </Link>
        <Link href="/membership" className="hover:text-blue-600 transition-colors uppercase text-sm tracking-wide">
          Membership
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors uppercase text-sm tracking-wide">
          Contact
        </Link>
      </div>

      {/* Donate Button - Isko ab sahi se link kiya hai */}
      <div className="flex items-center gap-4">
        <Link href="/donate">
          <button className="bg-blue-600 text-white px-8 py-2.5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-blue-100">
            Donate
          </button>
        </Link>
      </div>
    </nav>
  );
}