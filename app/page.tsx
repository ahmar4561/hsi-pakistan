import { 
  Heart, ShieldCheck, Globe, Users, BookOpen, Sprout, 
  Scale, HomeIcon, ChevronRight, CheckCircle2, 
  HandshakeIcon, ArrowRight, Star, Target, Zap, 
  Coins // Coins icon Sponsor ke liye
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 text-white py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 py-2 px-4 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest italic">Registered NGO | SDG Aligned</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter italic">
              Securing <span className="text-blue-500">Human</span> Dignity In Pakistan.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
              Working for dignity, safety, and equality through proactive change and sustainable development across Pakistan.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <Link href="/donate" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-blue-700 transition shadow-xl flex items-center gap-2">
                Donate Now <ArrowRight size={18} />
              </Link>
              <Link href="/programs" className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-2xl font-black hover:bg-white/20 transition">
                Our Programs
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full h-[450px] relative">
            <div className="relative w-full h-full rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl">
              <Image 
                src="/social-work.jpg.png" 
                alt="HSI Pakistan Social Work"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-slate-100 text-slate-900 z-20">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl font-black italic">HSI</div>
              <p className="text-sm font-bold">Empowering Communities <br/><span className="text-slate-400 font-medium">Since 2024</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: HSI Meaning Section (As per Document) */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { letter: "H", word: "Human", desc: "Dignity, rights, well-being" },
              { letter: "S", word: "Security", desc: "Freedom from fear & poverty" },
              { letter: "I", word: "Initiative", desc: "Proactive change & action" },
              { letter: "P", word: "Pakistan", desc: "National development" },
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left space-y-2">
                <span className="text-4xl font-black text-blue-600 opacity-20">{item.letter}</span>
                <h4 className="text-xl font-black text-slate-900 italic"> — {item.word}</h4>
                <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Impact Stats */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "500+", l: "Students Supported", i: <BookOpen className="text-blue-600" /> },
            { n: "1000+", l: "Beneficiaries", i: <Users className="text-blue-600" /> },
            { n: "10+", l: "Active Projects", i: <Zap className="text-blue-600" /> },
            { n: "50+", l: "Dedicated Volunteers", i: <Heart className="text-blue-600" /> }
          ].map((stat, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 text-center space-y-3 hover:bg-blue-50 transition-colors group">
              <div className="flex justify-center group-hover:scale-110 transition-transform">{stat.i}</div>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">{stat.n}</h3>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">{stat.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Focus Areas (SDGs) */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 italic">Our Core Focus Areas</h2>
            <p className="text-slate-500 text-lg">Work aligned with United Nations Sustainable Development Goals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "No Poverty", icon: <Target className="text-red-500" />, desc: "Empowering low-income families through sustainable support." },
              { title: "Quality Education", icon: <BookOpen className="text-blue-500" />, desc: "Providing scholarships and re-enrolling dropouts." },
              { title: "Good Health", icon: <ShieldCheck className="text-green-500" />, desc: "Organizing free medical camps and awareness sessions." },
              { title: "Climate Action", icon: <Sprout className="text-emerald-500" />, desc: "Tree plantation drives and climate resilience training." },
              { title: "Peace & Justice", icon: <Scale className="text-indigo-500" />, desc: "Supporting human rights and community justice." },
              { title: "Sustainable Cities", icon: <HomeIcon className="text-orange-500" />, desc: "Improving local community infrastructure." }
            ].map((area, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{area.title}</h3>
                <p className="text-slate-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Support Us */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 italic leading-tight">Why Support HSI Pakistan?</h2>
            <div className="space-y-6">
              {[
                { t: "Transparency", d: "Every donation is tracked and reported clearly.", i: <CheckCircle2 className="text-blue-600" /> },
                { t: "Sustainability", d: "We focus on long-term solutions, not just quick fixes.", i: <CheckCircle2 className="text-blue-600" /> },
                { t: "Empowerment", d: "Helping people become self-reliant and confident.", i: <CheckCircle2 className="text-blue-600" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="bg-blue-50 p-3 rounded-xl">{item.i}</div>
                  <div>
                    <h4 className="font-black text-xl text-slate-900">{item.t}</h4>
                    <p className="text-slate-500 mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-600 rounded-[4rem] p-16 text-white space-y-8 shadow-2xl">
            <h3 className="text-3xl font-black italic">Get Involved Today</h3>
            <div className="grid grid-cols-1 gap-4">
              <Link href="/membership" className="block bg-white text-blue-600 p-6 rounded-2xl font-black text-center hover:bg-slate-100 transition-colors">Become a Volunteer</Link>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/contact" className="block bg-blue-500 text-white p-6 rounded-2xl font-black text-center hover:bg-blue-400 transition-colors border border-blue-400 flex items-center justify-center gap-2">
                  <HandshakeIcon size={20} /> Partner
                </Link>
                <Link href="/donate" className="block bg-blue-500 text-white p-6 rounded-2xl font-black text-center hover:bg-blue-400 transition-colors border border-blue-400 flex items-center justify-center gap-2">
                  <Coins size={20} /> Sponsor
                </Link>
              </div>
            </div>
            <p className="text-center text-blue-100 italic opacity-80">"Be part of the change you want to see."</p>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-24 bg-slate-950 px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">
            Let’s work together to build a safer and stronger Pakistan.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/membership" className="bg-blue-600 text-white px-12 py-5 rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
              Join HSI Pakistan
            </Link>
          </div>
        </div>
        <HandshakeIcon size={400} className="absolute -bottom-20 -right-20 text-white/5" />
      </section>
    </main>
  );
}