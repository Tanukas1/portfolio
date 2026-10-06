"use client";

import {
  GraduationCap,
  Award,
  CheckCircle2,
  Sparkles,
  Code,
  Shield,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function AboutEducationSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-[#090b12]/40 border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[350px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: About Tanu */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Background</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
                  Tanu Kashyap
                </span>
              </h2>
              <p className="text-sm font-mono text-cyan-400">
                Full-Stack Developer · Lucknow, Uttar Pradesh, India
              </p>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {PORTFOLIO_DATA.profile.bio.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-2">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                  Full Lifecycle
                </h4>
                <p className="text-xs text-slate-400">
                  From architecture and database design to frontend polish and cloud deployment.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
                  <Code className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                  Production-Ready
                </h4>
                <p className="text-xs text-slate-400">
                  Writing clean, modular code with strict typing and maintainable patterns.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                  Client Aligned
                </h4>
                <p className="text-xs text-slate-400">
                  Direct client collaboration ensuring software maps accurately to real operational needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Academic Credentials */}
          <div id="education" className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/[0.1] bg-[#0c0e18]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-violet-500/40 transition-all">
              {/* Background gradient decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-600/20 to-cyan-500/20 blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-tr from-violet-600/20 to-cyan-500/20 text-cyan-300 border border-violet-500/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Higher Education
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Master of Computer Applications
                    </h3>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                  8.13 CGPA
                </div>
              </div>

              {/* Institution */}
              <div className="space-y-1 mb-6 pb-6 border-b border-white/[0.08]">
                <div className="text-sm font-semibold text-slate-200">
                  {PORTFOLIO_DATA.education.institution}
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Lucknow, Uttar Pradesh</span>
                  <span>{PORTFOLIO_DATA.education.duration}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Academic Highlights
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {PORTFOLIO_DATA.education.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Distinction footer */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-2.5 text-xs text-slate-400">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Graduated with 8.13/10 distinction across full coursework.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
