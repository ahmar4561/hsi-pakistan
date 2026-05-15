"use client";
import React from "react";
import { Mail, MapPin, Send, Phone, MessageSquare, Globe, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header Section */}
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-blue-100">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight italic uppercase">Contact Us</h1>
          <p className="text-slate-500 text-base md:text-xl max-w-3xl mx-auto leading-relaxed italic">
            "Let’s work together to build a safer and stronger Pakistan." Reach out to HSI Pakistan for inquiries, partnerships, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* 2. Left Side: Contact Information */}
          <div className="flex">
            <div className="bg-blue-900 text-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl w-full relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10 space-y-10 md:space-y-12">
                <h3 className="text-2xl md:text-4xl font-black italic tracking-tight uppercase">Connect With Us</h3>
                
                <div className="space-y-8 md:space-y-10">
                  <div className="flex gap-4 md:gap-6 items-start group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-lg md:text-xl italic uppercase tracking-wider text-blue-200">Head Office</h4>
                      <p className="text-white mt-1 text-base md:text-lg leading-relaxed">
                        Dokri Taluka, Larkana District, <br />Sindh, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 md:gap-6 items-start group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-black text-lg md:text-xl italic uppercase tracking-wider text-blue-200">Email Us</h4>
                      <p className="text-white mt-1 text-base md:text-xl font-bold break-words">info@hsipakistan.org</p>
                    </div>
                  </div>

                  <div className="flex gap-4 md:gap-6 items-start group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-lg md:text-xl italic uppercase tracking-wider text-blue-200">Phone & WhatsApp</h4>
                      <p className="text-white mt-1 text-base md:text-xl font-bold italic">+92 3XX XXXXXXX</p>
                      <p className="text-blue-300 text-xs mt-1">Available Monday — Saturday</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 md:pt-12 border-t border-white/10 mt-10 md:mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Globe size={20} />
                  </div>
                  <p className="text-blue-100 font-bold italic uppercase tracking-tighter text-xs md:text-sm">
                    Human Security Initiative Pakistan
                  </p>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
          </div>

          {/* 3. Right Side: Contact Form */}
          <div className="bg-slate-50 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-slate-200 shadow-sm">
            <form 
              action="https://formspree.io/f/xlgzyyvg" 
              method="POST" 
              className="space-y-6 md:space-y-8"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Full Name</label>
                    <input 
                      name="full_name" 
                      type="text" 
                      className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-slate-900 text-sm md:text-base" 
                      placeholder="e.g. Ali Ahmed" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Email Address</label>
                    <input 
                      name="email" 
                      type="email" 
                      className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-slate-900 text-sm md:text-base" 
                      placeholder="name@email.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">How can we help?</label>
                  <div className="relative">
                    <select 
                      name="inquiry_type" 
                      className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-slate-500 appearance-none text-sm md:text-base"
                    >
                      <option>General Inquiry</option>
                      <option>Volunteer Opportunity</option>
                      <option>Partnership & Collaboration</option>
                      <option>Media Inquiry</option>
                      <option>Donation Information</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ArrowRight size={16} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Message Details</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    className="w-full bg-white border border-slate-200 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-slate-900 text-sm md:text-base" 
                    placeholder="Write your message here..." 
                    required
                  ></textarea>
                </div>
              </div>

              <input type="hidden" name="_subject" value="New Contact Form Submission - HSI Pakistan" />

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-lg md:text-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-4 shadow-xl shadow-blue-200 group"
              >
                Submit Message <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}