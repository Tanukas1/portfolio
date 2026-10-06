"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden bg-[#090b12]/50 border-y border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on full-stack development, custom CMS engineering, and high-performance client delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central spine line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 sm:space-y-16">
            {PORTFOLIO_DATA.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Point (centered on desktop) */}
                  <div className="hidden sm:flex absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0d101d] border-2 border-violet-500 items-center justify-center shadow-lg shadow-violet-500/30 z-10">
                    <div className={`w-3 h-3 rounded-full ${exp.current ? "bg-emerald-400 animate-pulse" : "bg-cyan-400"}`} />
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0e18]/85 hover:border-violet-500/40 backdrop-blur-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300">
                      {/* Card Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                            <Building className="w-4 h-4" />
                          </span>
                          <div>
                            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                              {exp.type}
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                              {exp.role}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-cyan-300">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Company & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 mb-4 pb-4 border-b border-white/[0.06]">
                        <span className="font-semibold text-white">{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-2.5 mb-6">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty side for symmetry on desktop */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
