"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  FileText,
  MapPin,
  Sparkles,
  Terminal,
  Code2,
  CheckCircle2,
  Layers,
  Cpu,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface HeroSectionProps {
  onOpenResume?: () => void;
}

const ROLES = [
  "Full-Stack Developer",
  "Laravel & PHP Specialist",
  "Next.js & React Engineer",
  "Admin Dashboard Architect",
  "REST API & Database Modeler",
];

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<"config" | "laravel" | "nextjs">("config");
  const [copiedCode, setCopiedCode] = useState(false);

  // Typewriter effect for animated role titles
  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedRole.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      }, 70);
    } else if (!isDeleting && displayedRole.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedRole.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
      }, 35);
    } else if (isDeleting && displayedRole.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, currentRoleIndex]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const codeSnippets = {
    config: `// TanuKashyap.config.ts
export const developer: FullStackDeveloper = {
  name: "Tanu Kashyap",
  location: "Lucknow, UP, India",
  experience: "Trafico Analytica (Digital Nawab)",
  education: "MCA (CGPA: 8.13 / 10)",
  specialties: [
    "Laravel Custom Admin Panels",
    "Next.js App Router & SSR",
    "React.js High-Conversion Frontends",
    "Relational MySQL Schema Design"
  ],
  status: "Available for Full-Time & Contract Roles"
};`,
    laravel: `// app/Http/Controllers/CMS/AdminController.php
namespace App\\Http\\Controllers\\CMS;

class HospitalAdminController extends Controller {
    public function updateDepartment(Request $request, $id) {
        $department = Department::findOrFail($id);
        $department->update($request->validated());
        
        Cache::tags(['cms_content'])->flush();
        return response()->json([
            'status'  => 'success',
            'message' => 'Department updated dynamically',
            'data'    => $department
        ], 200);
    }
}`,
    nextjs: `// app/admin/dashboard/page.tsx
import { Suspense } from 'react';
import { MetricsGrid, LiveOrdersTable } from '@/components/admin';

export default async function AdminDashboard() {
  const analytics = await getRealtimeAnalytics();
  
  return (
    <div className="space-y-6 p-8">
      <DashboardHeader title="Live Platform Metrics" />
      <Suspense fallback={<MetricsSkeleton />}>
        <MetricsGrid data={analytics.summary} />
      </Suspense>
      <LiveOrdersTable records={analytics.recent} />
    </div>
  );
}`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-violet-600/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status & Location Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>{PORTFOLIO_DATA.profile.availability}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PORTFOLIO_DATA.profile.location}</span>
              </div>
            </div>

            {/* Dynamic Role Sub-heading */}
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider uppercase text-cyan-400/90 font-semibold">
              <span className="text-violet-400">&gt;</span>
              <span>{displayedRole}</span>
              <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-0.5" />
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.1]">
                Building Digital{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
                  Experiences
                </span>{" "}
                That Work.
              </h1>
            </div>

            {/* Profile Intro / Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal">
              {PORTFOLIO_DATA.profile.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.12] hover:border-violet-500/40 hover:text-white transition-all w-full sm:w-auto"
              >
                <span>Let&apos;s Connect</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.15] transition-all w-full sm:w-auto"
                  title="View & Download Tanu's Resume"
                >
                  <FileText className="w-4 h-4 text-violet-400" />
                  <span>Download Resume</span>
                </button>
              )}
            </div>

            {/* Tech Stack Highlights Strip */}
            <div className="pt-4 border-t border-white/[0.06] w-full">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-400">
                <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider">
                  Core Stack:
                </span>
                {["Laravel", "Next.js", "React.js", "PHP", "MySQL", "Tailwind CSS", "TypeScript"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300 font-mono text-[11px] hover:border-violet-500/30 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Code Architecture Console */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Background ambient halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600/30 to-cyan-500/30 opacity-75 blur-xl group-hover:opacity-100 transition duration-1000 -z-10" />

              {/* Terminal Card */}
              <div className="relative rounded-2xl border border-white/[0.1] bg-[#0c0e17]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#111422]/90 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-violet-400" />
                      tanu-workspace
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-white/[0.06] transition-colors"
                      title="Copy code snippet"
                      aria-label="Copy code snippet"
                    >
                      {copiedCode ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      v2.4
                    </span>
                  </div>
                </div>

                {/* Editor Tabs */}
                <div className="flex items-center border-b border-white/[0.06] bg-[#0e101b] px-2 overflow-x-auto scrollbar-none">
                  <button
                    onClick={() => setActiveTab("config")}
                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono border-b-2 transition-all whitespace-nowrap ${
                      activeTab === "config"
                        ? "border-violet-500 text-white bg-white/[0.03]"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Profile.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("laravel")}
                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono border-b-2 transition-all whitespace-nowrap ${
                      activeTab === "laravel"
                        ? "border-violet-500 text-white bg-white/[0.03]"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5 text-rose-400" />
                    <span>AdminController.php</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("nextjs")}
                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono border-b-2 transition-all whitespace-nowrap ${
                      activeTab === "nextjs"
                        ? "border-violet-500 text-white bg-white/[0.03]"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>page.tsx</span>
                  </button>
                </div>

                {/* Editor Code Content */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto max-h-[340px] text-slate-300 bg-[#08090f]/90">
                  <pre className="text-slate-300 whitespace-pre">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>

                {/* Terminal Status Footer */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#0e101c] border-t border-white/[0.06] text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    <span className="text-slate-300">Ready</span>
                    <span className="text-slate-600">|</span>
                    <span>UTF-8</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span>git:(main)</span>
                    <span className="text-cyan-400">✓ clean</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badges */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-[#121524]/90 backdrop-blur-md border border-white/[0.1] rounded-xl px-3.5 py-2.5 items-center gap-3 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">Education</div>
                  <div className="text-xs font-semibold text-white">MCA · 8.13 CGPA</div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#121524]/90 backdrop-blur-md border border-white/[0.1] rounded-xl px-3.5 py-2.5 items-center gap-3 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">Role</div>
                  <div className="text-xs font-semibold text-white">Full-Stack Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
