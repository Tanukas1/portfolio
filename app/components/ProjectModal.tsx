"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Globe, CheckCircle2, ShieldCheck, Tag } from "lucide-react";
import { Project } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Backdrop overlay click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0d0f19] border border-white/[0.12] rounded-2xl shadow-2xl z-10 flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#111424]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:brightness-110 shadow-sm transition-all"
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Browser Window Mockup Frame */}
          <div className="rounded-xl border border-white/[0.1] bg-[#08090f] overflow-hidden shadow-2xl">
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#121524] border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#08090f] border border-white/[0.06] text-xs font-mono text-slate-400 max-w-sm truncate">
                <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
                <span className="truncate">{project.liveUrl}</span>
              </div>
              <div className="w-12 text-right">
                <span className="text-[10px] font-mono text-emerald-400">SSL</span>
              </div>
            </div>

            {/* Screenshot preview */}
            <div className="relative w-full aspect-[16/10] bg-[#0c0e18]">
              <Image
                src={project.screenshot}
                alt={`${project.title} live interface preview`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </div>

          {/* Description & Technical Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  About This Project
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Implemented Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Role
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">{project.role}</div>
              </div>

              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Live Deployment
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:underline break-all mt-0.5 block"
                >
                  {project.liveUrl}
                </a>
              </div>

              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] border border-white/[0.08] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
