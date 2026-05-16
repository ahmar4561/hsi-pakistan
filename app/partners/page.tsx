"use client";
import React from "react";
import { 
  Handshake, Globe, GraduationCap, HeartPulse, 
  Building2, Users2, Briefcase, ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function PartnersPage() {
  const partnerCategories = [
    {
      title: "Strategic Partners",
      icon: <Building2 className="text-blue-600" />,
      items: [
        "Government departments (social welfare)", 
        "Local community organizations", 
        "Development sector stakeholders"
      ]
    },
    {
      title: "Education Partners",
      icon: <GraduationCap className="text-emerald-600" />,
      items: [
        "Schools and colleges for outreach", 
        "Vocational training institutes", 
        "Digital learning platforms"
      ]
    },
    {
      title: "Health Partners",
      icon: <HeartPulse className="text-red-600" />,
      items: [
        "Local hospitals and clinics", 
        "Volunteer doctors", 
        "Mental health support groups"
      ]
    },
    {
      title: "Development & Climate",
      icon: <Globe className="text-green-600" />,
      items: [
        "Environmental NGOs", 
        "Tree plantation groups", 
        "Waste management initiatives"
      ]
    },
    {
      title: "Corporate & Donor",
      icon: <Briefcase className="text-indigo-600" />,
      items: [
        "CSR partners", 
        "Private donors and foundations", 
        "Philanthropic organizations"
      ]
    },
    {
      title: "Community Partners",
      icon: <Users2 className="text-orange-600" />,
      items: [
        "Local community leaders", 
        "Youth groups and networks", 
        "Grassroots initiatives"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32 px-4 md:px-6 text-center relative">
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter italic uppercase leading-tight">
            Our <span className="text-blue-500">Partners</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Partner with us to create lasting change in Pakistan through sustainable impact and shared responsibility.
          </p>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-12 md:py-20 bg-blue-600 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { t: "Collaboration", d: "Joint initiatives for sustainable impact.", i: <Handshake size={24} /> },
              { t: "Transparency", d: "Clear execution in all joint initiatives.", i: <ShieldCheck size={24} /> },
              { t: "Long-term Focus", d: "Building relationships, not one-time support.", i: <Globe size={24} /> }
            ].map((p, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/10 text-white space-y-4 hover:bg-white/20 transition-all">
                <div className="bg-white text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                  {p.i}
                </div>
                <h3 className="text-2xl font-black italic uppercase">{p.t}</h3>
                <p className="text-blue-100 font-medium text-sm md:text-base leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {partnerCategories.map((cat, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {React.cloneElement(cat.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 italic uppercase">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 font-bold text-xs md:text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0"></div>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter italic uppercase leading-tight">Ready to Collaborate?</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
              Partner with us to create lasting change in Pakistan. We welcome your collaboration requests.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 md:px-12 md:py-5 rounded-2xl md:rounded-[2rem] font-black text-lg md:text-xl transition-all shadow-xl flex items-center gap-3">
                Become a Partner
              </Link>
            </div>
          </div>
          {/* Background Decorative Icon - Desktop Only */}
          <div className="absolute -bottom-20 -right-20 text-white/5 opacity-50 hidden md:block pointer-events-none">
            <Building2 size={300} />
          </div>
        </div>
      </section>
    </main>
  );
}