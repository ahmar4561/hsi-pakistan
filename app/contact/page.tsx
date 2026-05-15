"use client";
import React from "react";
import { Mail, MapPin, Send, Phone, MessageSquare, Globe, ArrowRight } from "lucide-react";

export default function ContactPage() {
  // Note: Formspree handling ke liye hum direct 'action' use kar rahe hain
  // Isse reliability badh jati hai aur backend ki zaroorat nahi rehti

  return (
    <main className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header Section */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight italic uppercase">Contact Us</h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic">
            "Let’s work together to build a safer and stronger Pakistan." Reach out to HSI Pakistan for inquiries, partnerships, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* 2. Left Side: Contact Information */}
          <div className="space-y-8">
            <div className="bg-blue-900 text-white p-12 md:p-16 rounded-[4rem] shadow-2xl h-full relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10 space-y-12">
                <h3 className="text-4xl font-black italic tracking-tight uppercase">Connect With Us</h3>
                
                <div className="space-y-10">
                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl italic uppercase tracking-wider text-blue-200">Head Office</h4>
                      <p className="text-white mt-1 text-lg leading-relaxed">
                        Dokri Taluka, Larkana District, <br />Sindh, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl italic uppercase tracking-wider text-blue-200">Email Us</h4>
                      <p className="text-white mt-1 text-xl font-bold">info@hsipakistan.org</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl italic uppercase tracking-wider text-blue-200">Phone & WhatsApp</h4>
                      <p className="text-white mt-1 text-xl font-bold italic">+92 3XX XXXXXXX</p>
                      <p className="text-blue-300 text-sm">Available Monday — Saturday</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-12 border-t border-white/10 mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <p className="text-blue-100 font-bold italic uppercase tracking-tighter">
                    Human Security Initiative Pakistan
                  </p>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/30 rounded-full blur-[100px]"></div>
            </div>
          </div>

          {/* 3. Right Side: Contact Form (Formspree Integrated) */}
          <div className="bg-slate-50 p-10 md:p-16 rounded-[4rem] border border-slate-200 shadow-sm">
            <form 
              action="https://formspree.io/f/xlgzyyvg" 
              method="POST" 
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-2 tracking-widest">Full Name</label>
                    <input 
                      name="full_name" 
                      type="text" 
                      className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-slate-900" 
                      placeholder="e.g. Ali Ahmed" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-2 tracking-widest">Email Address</label>
                    <input 
                      name="email" 
                      type="email" 
                      className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-slate-900" 
                      placeholder="name@email.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase ml-2 tracking-widest">How can we help?</label>
                  <select 
                    name="inquiry_type" 
                    className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-slate-500 appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Volunteer Opportunity</option>
                    <option>Partnership & Collaboration</option>
                    <option>Media Inquiry</option>
                    <option>Donation Information</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase ml-2 tracking-widest">Message Details</label>
                  <textarea 
                    name="message" 
                    rows={6} 
                    className="w-full bg-white border border-slate-200 rounded-[2.5rem] p-8 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-slate-900" 
                    placeholder="Write your message here..." 
                    required
                  ></textarea>
                </div>
              </div>

              {/* Honeypot field for spam protection (optional but recommended by Formspree) */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - HSI Pakistan" />

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-6 rounded-[2rem] font-black text-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-blue-200 group"
              >
                Submit Message <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}