import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Ek bar piche jane ke liye ../ use karein
import Footer from "../components/Footer"; // Ek bar piche jane ke liye ../ use karein
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// HSI Pakistan ki SEO details [cite: 42, 45, 53]
export const metadata: Metadata = {
  title: "HSI Pakistan | Human Security Initiative",
  description: "A non-profit, people-centered initiative focused on human security and sustainable development in Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white">
        {/* Navbar top par rahega [cite: 2] */}
        <Navbar />
        
        {/* Saare pages (Home, About, Programs, Membership, Contact) yahan load honge */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer bottom par rahega [cite: 37] */}
        <Footer />
      </body>
    </html>
  );
}