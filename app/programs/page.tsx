import React from "react";
import { 
  BookOpen, Heart, Sprout, Home, Scale, 
  ShieldCheck, ArrowRight, Laptop, Activity,
  Users, Briefcase, GraduationCap, Gavel
} from "lucide-react";
import Link from "next/link";

export default function ProgramsPage() {
  // Document ke mutabiq 7 Mukammal Initiatives
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
    <main className="min-h-screen bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest">
            Our Mission in Action
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight italic">Our Programs</h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Human Security Initiative Pakistan (HSI) focuses on community-first planning and long-term sustainable impact across these core areas.
          </p>
        </div>

        {/* Programs Grid - Now with all 7 Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mainPrograms.map((p, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {p.icon}
              </div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{p.id}</span>
              <h3 className="text-2xl font-black text-slate-900 mt-2 mb-4 italic">{p.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">{p.desc}</p>
              <ul className="space-y-3">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <ShieldCheck size={16} className="text-blue-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action Section (Refined from Document) */}
        <div className="bg-blue-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <Briefcase size={300} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black italic leading-tight">Partner With Our Initiatives</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                We believe in the power of collaboration. Whether you are an individual, an organization, or a donor, your support can help scale these programs across Pakistan.
              </p>
              <div className="flex flex-wrap gap-4 font-black">
                 <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-xl border border-blue-700">
                   <ShieldCheck size={18} className="text-blue-400" /> Sustainable Impact
                 </div>
                 <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-xl border border-blue-700">
                   <ShieldCheck size={18} className="text-blue-400" /> Transparent Reporting
                 </div>
              </div>
            </div>
            
            <div className="bg-white p-12 rounded-[3rem] space-y-8 text-slate-900 shadow-2xl">
              <h3 className="text-3xl font-black italic text-blue-900">Get Involved</h3>
              <p className="text-slate-500 font-medium">Collaborate with us to create lasting change in Pakistan through community-centered sustainable development.</p>
              <div className="flex flex-col gap-4">
                <Link href="/contact" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-5 rounded-2xl font-black hover:bg-blue-700 transition-all text-lg shadow-lg shadow-blue-600/20">
                  Collaborate With Us <ArrowRight size={20} />
                </Link>
                <Link href="/membership" className="text-center text-blue-600 font-black hover:underline">
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