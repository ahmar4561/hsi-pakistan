import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HSI Pakistan | Human Security Initiative",
  description: "A non-profit, people-centered initiative focused on human security and sustainable development in Pakistan.",
  // Mobile responsive meta tag Next.js khud handle karta hai, lekin hum width define kar sakte hain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {/* Is div ko maine add kiya hai taake horizontal scroll ka masla hamesha ke liye khatam ho jaye */}
        <div className="flex flex-col min-h-screen overflow-x-hidden relative">
          
          <Navbar />
          
          {/* Main area hamesha screen ki poori width lega lekin overflow nahi karega */}
          <main className="flex-grow w-full relative">
            {children}
          </main>

          <Footer />
          
        </div>
      </body>
    </html>
  );
}