"use client";

import { ArrowUp, Heart, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#06070b] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#0d0f18] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono text-sm font-bold text-white">TK</span>
                </div>
              </div>
              <div>
                <div className="font-semibold text-base text-white">
                  {PORTFOLIO_DATA.profile.name}
                </div>
                <div className="text-xs font-mono text-cyan-400">
                  Full-Stack Developer
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Crafting responsive interfaces, dynamic web applications, custom Laravel admin panels, and API-driven digital experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-colors"
                aria-label="Email Tanu"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About &amp; Overview
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills &amp; Architecture
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects (6)
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  MCA Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Connect
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Projects Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Live Showcase
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="https://knk-awadh-admin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>KNK Awadh (Next.js)</span>
                  <span className="text-[10px] font-mono text-slate-500">Live ↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://sunrisehospitals.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>Sunrise Hospital (Laravel)</span>
                  <span className="text-[10px] font-mono text-slate-500">Live ↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://parvatias.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>Parvatias Jewellery (React)</span>
                  <span className="text-[10px] font-mono text-slate-500">Live ↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://rthreesalon.digitalnawab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>RThree Salon (Laravel)</span>
                  <span className="text-[10px] font-mono text-slate-500">Live ↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Next.js &amp; Tailwind CSS</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}