"use client";
import React, { useState } from "react";
import { 
  Users, Star, Lightbulb, TrendingUp, CheckCircle2, 
  User, Mail, Phone, BookOpen, Send, ShieldCheck, 
  Target, Rocket, HeartHandshake, MapPin, Briefcase, 
  Award, FileText, Globe, Calendar, Flag
} from "lucide-react";

export default function MembershipPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // Formspree automatically handle karega
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl text-center space-y-6 border border-slate-100">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-100">
            <CheckCircle2 size={36} />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">Application Submitted!</h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Thank you for joining HSI Pakistan. Our coordination team will review your application and contact you within 48 hours.
          </p>
          <button onClick={() => setSubmitted(false)} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-all shadow-md">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="bg-slate-950 text-white py-20 md:py-32 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter italic leading-tight uppercase">
            Join Our <span className="text-blue-500">Community</span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto px-2">
            HSI Pakistan is powered by a growing network of dedicated members who are the backbone of every initiative and project.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Users size={300} className="absolute -top-20 -left-20 md:size-[400px]" />
        </div>
      </section>

      {/* 2. Membership Structure & Values */}
      <section className="py-12 md:py-20 bg-slate-50 border-b border-slate-100 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-8">
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic uppercase">Membership Structure</h2>
               <div className="grid grid-cols-1 gap-4">
                 {[
                   { t: "Volunteer Members", d: "Core support for local projects" },
                   { t: "Program Coordinators", d: "Managing specific HSI initiatives" },
                   { t: "Specialized Teams", d: "Education, Health, & Climate specialists" }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 items-center bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border border-slate-200">
                     <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0"><ShieldCheck size={20} /></div>
                     <div>
                       <h4 className="font-black text-slate-900 text-sm md:text-base">{item.t}</h4>
                       <p className="text-slate-500 text-xs md:text-sm">{item.d}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="bg-blue-600 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] text-white space-y-6 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-black italic">Member Values</h3>
              <p className="opacity-90 text-sm md:text-base font-medium">Every member of HSI Pakistan commits to:</p>
              <ul className="space-y-4 font-bold text-sm md:text-base">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-200 shrink-0" size={20} /> Commitment to social change</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-200 shrink-0" size={20} /> Respect for community needs</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-200 shrink-0" size={20} /> Teamwork and collaboration</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-200 shrink-0" size={20} /> Accountability and responsibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Membership Form Section */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:bit-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight italic uppercase">Membership Application</h2>
            <p className="text-slate-500 text-base md:text-lg font-medium italic">"Be part of the change you want to see in society."</p>
          </div>

          <form 
            action="https://formspree.io/f/xlgzyyvg" 
            method="POST" 
            className="space-y-10 md:space-y-12 bg-slate-50 p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-slate-100 shadow-sm"
          >
            
            {/* Section 1: Personal Details */}
            <div className="space-y-8">
              <h3 className="text-lg md:text-xl font-black text-blue-600 flex items-center gap-3">
                <User size={24} /> 1. Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Full Name</label>
                  <input name="full_name" type="text" placeholder="Full Name" className="w-full bg-white border-none rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-blue-600 outline-none font-medium text-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1 tracking-widest"><Calendar size={12}/> Date of Birth</label>
                  <input name="dob" type="date" className="w-full bg-white border-none rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-blue-600 outline-none font-medium text-slate-500 text-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">CNIC Number</label>
                  <input name="cnic" type="text" placeholder="00000-0000000-0" className="w-full bg-white border-none rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-blue-600 outline-none font-medium text-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1 tracking-widest"><Flag size={12}/> Nationality</label>
                  <input name="nationality" type="text" defaultValue="Pakistani" className="w-full bg-white border-none rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-blue-600 outline-none font-medium text-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">WhatsApp Number</label>
                  <input name="whatsapp" type="tel" placeholder="+92 3XX XXXXXXX" className="w-full bg-white border-none rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-blue-600 outline-none font-medium text-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Email Address</label>
                  <input name="email" type="email" placeholder="name@example.com" className="w-full bg-white border-none rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-blue-600 outline-none font-medium text-sm" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Current Address</label>
                <textarea name="address" rows={2} className="w-full bg-white border-none rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-blue-600 outline-none font-medium text-sm" placeholder="Complete street address, city, and district" required></textarea>
              </div>
            </div>

            {/* Section 2: Roles */}
            <div className="space-y-8 pt-8 border-t border-slate-200">
              <h3 className="text-lg md:text-xl font-black text-blue-600 flex items-center gap-3">
                <Briefcase size={24} /> 2. Preferred Roles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Volunteer Member", "Field Coordination", "Education Support Team", 
                  "Health Campaign Volunteers", "Climate & Environment Team", 
                  "Media & Communication Team", "Fundraising Support", "Data Collection"
                ].map((role) => (
                  <label key={role} className="flex items-center gap-3 p-4 bg-white rounded-xl cursor-pointer hover:border-blue-500 border border-transparent transition-all shadow-sm">
                    <input name="roles[]" value={role} type="checkbox" className="w-5 h-5 accent-blue-600 shrink-0" />
                    <span className="text-[13px] md:text-sm font-bold text-slate-700 leading-tight">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <input type="hidden" name="_subject" value="New Membership Request - HSI Pakistan" />
              
              <button type="submit" className="w-full bg-blue-600 text-white py-5 md:py-6 rounded-2xl md:rounded-[2rem] font-black text-lg md:text-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-4 shadow-xl shadow-blue-200">
                Submit Request <Send size={20} />
              </button>
              <p className="text-center text-slate-400 text-[10px] md:text-xs mt-6 font-medium px-4 md:px-8">
                By joining, you agree to promote HSI Pakistan’s mission at the grassroots level and maintain accountability in all assigned projects.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* 4. Opportunities Section (Bottom) */}
      <section className="py-16 md:py-24 bg-slate-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 italic uppercase">Growth & Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "Certification", d: "Official certificates for field projects", i: <Award className="text-blue-600" /> },
              { t: "Leadership", d: "Lead community-based initiatives", i: <Rocket className="text-blue-600" /> },
              { t: "Networking", d: "Connect with professionals & NGOs", i: <Globe className="text-blue-600" /> },
              { t: "Training", d: "Skill development sessions", i: <Lightbulb className="text-blue-600" /> }
            ].map((op, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 text-center space-y-3">
                <div className="flex justify-center">{op.i}</div>
                <h4 className="font-black text-slate-900 text-sm md:text-base">{op.t}</h4>
                <p className="text-slate-500 text-xs md:text-sm font-medium">{op.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}