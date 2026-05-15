import { Target, Eye, Heart, ShieldCheck, Globe, Quote, UserCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe size={400} className="absolute -right-20 -bottom-20" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic">About HSI Pakistan</h1>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            "A people-centered initiative focused on human security and sustainable development to ensure dignity, safety, and equality for all."
          </p>
        </div>
      </section>

      {/* 2. HSI Meaning Section (New - From Document) */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 italic">What does HSI stand for?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { letter: "H", word: "Human", desc: "Dignity, rights, and well-being at the center of our work." },
              { letter: "S", word: "Security", desc: "Freedom from fear, poverty, and systemic inequality." },
              { letter: "I", word: "Initiative", desc: "Proactive change through action-oriented projects." },
              { letter: "P", word: "Pakistan", desc: "Dedicated to national and grassroots community development." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                <span className="text-5xl font-black text-blue-600/20">{item.letter}</span>
                <h3 className="text-xl font-black text-slate-900 mt-2">— {item.word}</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[3rem] border border-slate-200 shadow-xl space-y-6 relative overflow-hidden group">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <Eye size={35} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 italic">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We envision a secure, inclusive, and resilient Pakistan where every individual has equal opportunities to lead a life with dignity and freedom from deprivation.
            </p>
          </div>

          <div className="bg-blue-900 p-12 rounded-[3rem] text-white space-y-6 shadow-xl relative overflow-hidden group">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <Target size={35} />
            </div>
            <h2 className="text-4xl font-black italic">Our Mission</h2>
            <ul className="space-y-4 text-blue-100 text-lg font-medium">
              <li className="flex items-center gap-3"><ShieldCheck className="text-blue-400 shrink-0" size={24} /> Reduce poverty through empowerment.</li>
              <li className="flex items-center gap-3"><ShieldCheck className="text-blue-400 shrink-0" size={24} /> Improve access to education & healthcare.</li>
              <li className="flex items-center gap-3"><ShieldCheck className="text-blue-400 shrink-0" size={24} /> Promote climate action & sustainability.</li>
              <li className="flex items-center gap-3"><ShieldCheck className="text-blue-400 shrink-0" size={24} /> Support peace, justice & strong institutions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Founder's Message (New - From Document) */}
      <section className="py-24 bg-blue-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl relative">
            <Quote size={80} className="absolute top-10 right-10 text-blue-100" />
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 bg-slate-100 rounded-full flex items-center justify-center shrink-0 border-4 border-blue-100 overflow-hidden">
                 <UserCircle2 size={150} className="text-slate-300" />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl font-black text-slate-900 italic">Message from the Founder</h2>
                <p className="text-slate-600 text-xl leading-relaxed italic">
                  "Human security is not just about weapons; it is about dignity, safety, and a life free from poverty. Through HSI Pakistan, we aim to build a resilient nation where every individual has the opportunity to thrive."
                </p>
                <div>
                  <h4 className="text-xl font-black text-blue-600">Founder & Chairperson</h4>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">HSI Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-24 bg-slate-950 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black italic">Our Core Values</h2>
            <p className="text-slate-400">The principles that guide our impact across Pakistan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { icon: <ShieldCheck size={40} />, title: "Accountability", desc: "Absolute transparency in every project and donation." },
              { icon: <Heart size={40} />, title: "Compassion", desc: "Human dignity and empathy are at the heart of our initiative." },
              { icon: <Globe size={40} />, title: "Sustainability", desc: "Focusing on long-term impact rather than short-term aid." }
            ].map((value, i) => (
              <div key={i} className="space-y-6 group">
                <div className="mx-auto w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black italic">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Alignment Section */}
      <section className="py-32 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-3 p-4 bg-blue-50 rounded-2xl mb-8">
            <Globe className="text-blue-600" />
            <span className="font-black text-blue-900 uppercase tracking-tighter">SDG Aligned Initiative</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 italic tracking-tight">Global Vision, Local Action.</h2>
        <p className="text-slate-600 text-xl md:text-2xl leading-relaxed">
          Our work is strictly aligned with the **United Nations Sustainable Development Goals (SDGs)**. We believe that by localizing these global goals, we can create a secure, resilient, and prosperous Pakistan.
        </p>
      </section>
    </main>
  );
}