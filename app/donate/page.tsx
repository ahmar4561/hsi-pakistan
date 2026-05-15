"use client";
import React from "react";
import { 
  Heart, Landmark, Smartphone, ShieldCheck, GraduationCap, 
  HeartPulse, Globe, Zap, Users, BarChart3, ArrowRight 
} from "lucide-react";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
        
        {/* 1. Hero Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-red-100">
            <Heart size={14} fill="currentColor" /> Make an Impact
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 italic tracking-tighter uppercase leading-tight">
            Support <span className="text-blue-600">HSI Pakistan</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 font-medium italic leading-relaxed px-2">
            "Be part of the change you want to see in society." Your contribution fuels our mission for human security.
          </p>
        </div>

        {/* 2. Why Support Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              t: "Transparency", 
              d: "Every rupee you donate is tracked and used directly for community-centered projects.", 
              i: <ShieldCheck className="text-blue-600" /> 
            },
            { 
              t: "Sustainability", 
              d: "We focus on long-term impact through education and skill development, not just temporary relief.", 
              i: <Zap className="text-blue-600" /> 
            },
            { 
              t: "Empowerment", 
              d: "Our programs empower local individuals to lead change in their own communities.", 
              i: <Users className="text-blue-600" /> 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 space-y-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                {item.i}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 italic">{item.t}</h3>
              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        {/* 3. Donation Channels Section */}
        <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black italic leading-tight uppercase">Payment Methods</h2>
              <p className="text-slate-400 text-base md:text-lg">
                Directly support our initiatives via bank transfer or mobile wallets. 100% of your donation reaches those in need.
              </p>
              
              <div className="space-y-6">
                {/* Bank Info */}
                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] space-y-4 text-left">
                  <div className="flex items-center gap-3 text-blue-400 font-black uppercase tracking-widest text-[10px] md:text-xs">
                    <Landmark size={18} /> Bank Transfer (UBL)
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black">Account Title</p>
                      <p className="text-lg md:text-xl font-black uppercase">Ahmar Ali</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black">Account Number (PKR)</p>
                      <p className="text-xl md:text-2xl font-mono text-blue-100 font-black tracking-tighter break-all">0628282607098</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Wallets */}
            <div className="space-y-6">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] text-slate-900 space-y-8 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-black italic flex items-center justify-center lg:justify-start gap-2">
                  <Smartphone className="text-blue-600" /> Mobile Wallets
                </h3>
                
                <div className="space-y-6">
                  {/* EasyPaisa */}
                  <div className="flex flex-col sm:flex-row justify-between items-center border-b border-slate-100 pb-4 gap-2">
                    <div className="text-center sm:text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">EasyPaisa</p>
                      <p className="text-lg md:text-xl font-black">0345-6187264</p>
                    </div>
                    <div className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-[10px] font-black uppercase">Title: Ahmar Ali</div>
                  </div>

                  {/* JazzCash */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="text-center sm:text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">JazzCash</p>
                      <p className="text-lg md:text-xl font-black">0301-0252187</p>
                    </div>
                    <div className="bg-yellow-50 text-yellow-700 px-4 py-1 rounded-full text-[10px] font-black uppercase">Title: Ahmar Ali</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 font-black text-blue-900 italic text-sm">
                    <BarChart3 size={18} /> Impact Note
                  </div>
                  <p className="text-[13px] text-blue-700 leading-relaxed font-medium">
                    Please share a screenshot of your transaction on our WhatsApp for tracking and acknowledgement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Background Icon */}
          <Heart size={300} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 hidden md:block" />
        </div>

        {/* 4. Impact Verification CTA */}
        <div className="text-center space-y-6 pb-12">
          <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Verified & Registered NGO</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <div className="px-4 py-2 md:px-6 md:py-3 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl text-slate-700 font-bold text-xs md:text-sm">
              SDG Aligned
            </div>
            <div className="px-4 py-2 md:px-6 md:py-3 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl text-slate-700 font-bold text-xs md:text-sm">
              Community Centered
            </div>
            <div className="px-4 py-2 md:px-6 md:py-3 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl text-slate-700 font-bold text-xs md:text-sm">
              Audit Ready
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}