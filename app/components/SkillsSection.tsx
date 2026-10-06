"use client";

import {
  Layout,
  Server,
  Database,
  Wrench,
  ShieldCheck,
  CheckCircle,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function SkillsSection() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-violet-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-fuchsia-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Core Skills &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
              Stack Architecture
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized technical stack focused on scalable backend logic, responsive web interfaces, and production reliability.
          </p>
        </div>

        {/* 5-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.skills.map((cat, idx) => (
            <div
              key={cat.category}
              className={`group relative rounded-2xl border border-white/[0.08] bg-[#0c0e18]/85 hover:border-violet-500/40 backdrop-blur-xl p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-105 transition-transform">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {cat.skills.length} core proficiencies
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {cat.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      skill.highlight
                        ? "bg-violet-500/10 text-violet-200 border border-violet-500/30 font-medium hover:bg-violet-500/20"
                        : "bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
