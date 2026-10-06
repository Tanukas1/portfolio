"use client";

import { useEffect } from "react";
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-[#0d0f1a] border border-white/[0.12] rounded-2xl shadow-2xl z-10 overflow-hidden">
        {/* Modal Action Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121525] border-b border-white/[0.08] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">
              Curriculum Vitae — {PORTFOLIO_DATA.profile.name}
            </span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090b12] text-slate-200 print:bg-white print:text-black">
          {/* Header block */}
          <div className="border-b border-white/[0.1] pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {PORTFOLIO_DATA.profile.name}
                </h1>
                <p className="text-sm font-mono text-cyan-400 font-semibold mt-1">
                  {PORTFOLIO_DATA.profile.title}
                </p>
              </div>

              <div className="flex flex-col text-xs font-mono text-slate-300 space-y-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-violet-400" />
                  {PORTFOLIO_DATA.profile.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {PORTFOLIO_DATA.profile.phoneFormatted}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {PORTFOLIO_DATA.profile.location}
                </span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Full-Stack Developer with hands-on experience in architecting robust Laravel backend platforms, developing dynamic CMS administrative dashboards, and engineering responsive web applications using React.js, Next.js, and Tailwind CSS. Proven track record delivering client-facing production applications, database modeling, and frontend-backend API integration.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-6">
              {PORTFOLIO_DATA.experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white">{exp.role}</h3>
                      <div className="text-xs text-cyan-300 font-medium">
                        {exp.company} — {exp.location}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
              <span>Education</span>
            </h2>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-sm font-bold text-white">
                  {PORTFOLIO_DATA.education.degree}
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  {PORTFOLIO_DATA.education.score}
                </span>
              </div>
              <div className="text-xs text-slate-400">
                {PORTFOLIO_DATA.education.institution} · {PORTFOLIO_DATA.education.duration}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Technical Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 font-semibold">Frontend:</span>
                <p className="text-slate-300 font-mono">React.js, Next.js, JavaScript ES6+, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap</p>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 font-semibold">Backend:</span>
                <p className="text-slate-300 font-mono">Laravel, PHP, REST APIs, MVC Architecture, Admin Panels, Authentication</p>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 font-semibold">Databases:</span>
                <p className="text-slate-300 font-mono">MySQL, MongoDB, Relational Schema Design, Eloquent ORM</p>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 font-semibold">Tools &amp; DevOps:</span>
                <p className="text-slate-300 font-mono">Git, GitHub, VS Code, Postman, Vercel, Firebase, Composer, Hostinger</p>
              </div>
            </div>
          </div>

          {/* Key Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Key Production Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="font-semibold text-white flex items-center justify-between">
                    <span>{proj.title}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{proj.filterCategory}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{proj.description}</p>
                  <div className="text-[10px] font-mono text-slate-400 pt-1">
                    {proj.technologies.slice(0, 3).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
