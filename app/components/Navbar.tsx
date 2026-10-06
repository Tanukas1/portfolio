"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface NavbarProps {
  onOpenResume?: () => void;
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ["hero", "about", "skills", "projects", "experience", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090e]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Tanu Kashyap - Return to top"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0d0f18] rounded-[11px] flex items-center justify-center">
                <span className="font-mono text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  TK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
                {PORTFOLIO_DATA.profile.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121524]/70 border border-white/[0.06] rounded-full p-1.5 backdrop-blur-lg">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-violet-500/40 hover:text-white transition-all"
                title="View & Download Resume"
              >
                <FileText className="w-3.5 h-3.5 text-violet-400" />
                <span>Resume</span>
              </button>
            )}

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-md shadow-violet-600/25 hover:shadow-lg hover:shadow-violet-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="p-2 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08]"
                aria-label="View Resume"
              >
                <FileText className="w-4 h-4 text-violet-400" />
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-white/[0.08] bg-[#0c0e17]/95 backdrop-blur-xl rounded-2xl px-4 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-violet-600/20 text-violet-300 font-semibold border border-violet-500/30"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-3 mt-1 border-t border-white/[0.06] flex flex-col gap-2">
                {onOpenResume && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.05] border border-white/[0.1]"
                  >
                    <FileText className="w-4 h-4 text-violet-400" />
                    <span>View & Download Resume</span>
                  </button>
                )}

                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-lg shadow-violet-600/30"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
