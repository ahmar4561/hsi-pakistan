"use client";
import React from "react";
import { 
  Sprout, Home, ShieldCheck, ArrowRight, Laptop, Activity,
  Users, Briefcase, GraduationCap, Gavel
} from "lucide-react";
import Link from "next/link";

export default function ProgramsPage() {
  const mainPrograms = [
    {
      title: "Education Initiatives",
      id: "SDG 4",
      desc: "Providing scholarships for deserving students and re-enrolling school dropouts into the system.",
      icon: <GraduationCap size={32} />,
      features: ["Scholarships", "Dropout Re-enrollment", "Educational Supplies"],
      color: "blue"
    },
    {
      title: "Skill Development",
      id: "SDG 8",
      desc: "Empowering youth through digital literacy, vocational training, and technical workshops.",
      icon: <Laptop size={32} />,
      features: ["Digital Literacy", "Vocational Training", "Career Counseling"],
      color: "indigo"
    },
    {
      title: "Health & Wellbeing",
      id: "SDG 3",
      desc: "Organizing free medical camps, mental health awareness, and hygiene sessions in rural areas.",
      icon: <Activity size={32} />,
      features: ["Medical Camps", "Mental Health", "Mother & Child Support"],
      color: "red"
    },
    {
      title: "Climate & Environment",
      id: "SDG 13",
      desc: "Tree plantation drives, waste management education, and building climate resilience.",
      icon: <Sprout size={32} />,
      features: ["Tree Plantation", "Climate Resilience", "Waste Management"],
      color: "emerald"
    },
    {
      title: "Community Development",
      id: "SDG 11",
      desc: "Improving local infrastructure and supporting community-based social welfare projects.",
      icon: <Home size={32} />,
      features: ["Local Infrastructure", "Social Welfare", "Basic Services"],
      color: "orange"
    },
    {
      title: "Peace & Justice",
      id: "SDG 16",
      desc: "Advocating for human rights, community justice, and building strong local institutions.",
      icon: <Gavel size={32} />,
      features: ["Human Rights", "Justice Advocacy", "Strong Institutions"],
      color: "slate"
    },
    {
      title: "Capacity Building",
      id: "SDG 17",
      desc: "Developing leadership skills and training volunteers for effective community impact.",
      icon: <Users size={32} />,
      features: ["Leadership Training", "Volunteer Management", "NGO Workshops"],
      color: "cyan"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest">
            Our Mission in Action
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight italic uppercase leading-tight">Our Programs</h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed px-2">
            Human Security Initiative Pakistan (HSI) focuses on community-first planning and long-term sustainable impact across these core areas.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {mainPrograms.map((p, i) => (
            <div key={i} className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {React.cloneElement(p.icon as React.ReactElement, { size: 28 })}
              </div>
              <span className="text-[10px] md:text-xs font-bold text-blue-500 uppercase tracking-widest">{p.id}</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-2 mb-4 italic uppercase">{p.title}</h3>
              <p className="text-slate-500 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">{p.desc}</p>
              <ul className="space-y-3">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700">
                    <ShieldCheck size={16} className="text-blue-500 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-blue-900 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none hidden lg:block">
            <Briefcase size={300} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black italic leading-tight uppercase">Partner With Our Initiatives</h2>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                We believe in the power of collaboration. Whether you are an individual, an organization, or a donor, your support can help scale these programs across Pakistan.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 font-black text-[10px] md:text-sm">
                 <div className="flex items-center gap-2 bg-blue-800/50 px-3 py-2 rounded-xl border border-blue-700">
                   <ShieldCheck size={16} className="text-blue-400" /> Sustainable Impact
                 </div>
                 <div className="flex items-center gap-2 bg-blue-800/50 px-3 py-2 rounded-xl border border-blue-700">
                   <ShieldCheck size={16} className="text-blue-400" /> Transparent Reporting
                 </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] space-y-6 md:space-y-8 text-slate-900 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-black italic text-blue-900 text-center lg:text-left">Get Involved</h3>
              <p className="text-slate-500 text-sm md:text-base font-medium text-center lg:text-left">Collaborate with us to create lasting change in Pakistan through community-centered sustainable development.</p>
              <div className="flex flex-col gap-4">
                <Link href="/contact" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 md:px-8 md:py-5 rounded-2xl font-black hover:bg-blue-700 transition-all text-base md:text-lg shadow-lg shadow-blue-600/20">
                  Collaborate With Us <ArrowRight size={20} />
                </Link>
                <Link href="/membership" className="text-center text-blue-600 font-black hover:underline text-sm md:text-base">
                  Join as a Member
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}