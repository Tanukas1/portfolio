"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Globe,
  Maximize2,
  Sparkles,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import ProjectModal from "./ProjectModal";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Next.js & React" | "Laravel & PHP">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.filterCategory === activeFilter;
  });

  const featuredProject = PORTFOLIO_DATA.projects.find((p) => p.isFeatured) || PORTFOLIO_DATA.projects[0];
  const standardProjects = filteredProjects.filter((p) => activeFilter !== "All" || !p.isFeatured);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-b from-violet-600/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Production Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
                Projects
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Authentic screenshots from live deployed applications, custom Laravel CMS systems, and Next.js digital platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#0f111d] border border-white/[0.08] backdrop-blur-md self-start md:self-auto">
            {(["All", "Next.js & React", "Laravel & PHP"] as const).map((filter) => {
              const count =
                filter === "All"
                  ? PORTFOLIO_DATA.projects.length
                  : PORTFOLIO_DATA.projects.filter((p) => p.filterCategory === filter).length;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30 font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {filter} <span className="opacity-70 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED SPOTLIGHT CARD (When 'All' or 'Next.js & React' is selected) */}
        {(activeFilter === "All" || activeFilter === "Next.js & React") && (
          <div className="mb-16">
            <div className="group relative rounded-2xl md:rounded-3xl border border-white/[0.12] bg-[#0c0e18]/90 hover:border-violet-500/40 backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Info & Specs */}
                <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between order-2 lg:order-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                        ★ Featured Spotlight
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {featuredProject.typeBadge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {featuredProject.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {featuredProject.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Key Capabilities:
                      </div>
                      <div className="grid grid-cols-1 gap-2 text-xs text-slate-300">
                        {featuredProject.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:shadow-lg hover:shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => setSelectedProject(featuredProject)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-all"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-violet-400" />
                        <span>Inspect Interface</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Real Browser Mockup Preview */}
                <div className="lg:col-span-7 bg-[#08090f] p-4 sm:p-6 lg:p-8 flex items-center justify-center order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/[0.08]">
                  <div
                    onClick={() => setSelectedProject(featuredProject)}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#111422] shadow-2xl overflow-hidden cursor-pointer group/browser transition-transform hover:scale-[1.01]"
                  >
                    {/* Browser top chrome */}
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#141829] border-b border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0a0c14] border border-white/[0.06] text-[11px] font-mono text-slate-400 max-w-xs truncate">
                        <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{featuredProject.liveUrl}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* High-res Image Preview */}
                    <div className="relative aspect-[16/10] w-full bg-[#0d0f19] overflow-hidden">
                      <Image
                        src={featuredProject.screenshot}
                        alt={`${featuredProject.title} verified live preview`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover/browser:scale-105"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090f]/70 via-transparent to-transparent opacity-0 group-hover/browser:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-xs font-medium text-white flex items-center gap-1.5 border border-white/20">
                          <Maximize2 className="w-3 h-3 text-cyan-400" />
                          Click for Full Screenshot
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GRID OF REMAINING / ALL PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {standardProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c0e18]/85 hover:border-violet-500/40 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 overflow-hidden"
            >
              {/* Browser Window Chrome */}
              <div className="border-b border-white/[0.08] bg-[#111424]">
                <div className="flex items-center justify-between px-3.5 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
                    {project.liveUrl.replace("https://", "").replace("/", "")}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-slate-400 hover:text-white p-0.5"
                    title="Zoom screenshot"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>

                {/* Screenshot image container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/10] w-full bg-[#08090f] overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} live interface preview`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-xs font-medium text-white flex items-center gap-1.5 border border-white/20">
                      <Maximize2 className="w-3 h-3 text-cyan-400" />
                      View Screenshot
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Action Buttons */}
                <div className="space-y-4 pt-3 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-violet-400" />
                      <span>Details</span>
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:brightness-110 shadow-sm transition-all"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Full Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
