"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [projectType, setProjectType] = useState("Web Application / Full-Stack");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      `[Portfolio Inquiry - ${projectType}] ${subject || "New Project Discussion"}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Tanu,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}\n\nSent from your portfolio website.`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-violet-600/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start A Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let&apos;s Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
              Something Great.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Whether you have a full-time opening, freelance project, or custom CMS requirement, I&apos;m ready to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Reach-out Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0e18]/85 hover:border-violet-500/40 backdrop-blur-xl p-5 sm:p-6 shadow-xl transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0e18]/85 hover:border-violet-500/40 backdrop-blur-xl p-5 sm:p-6 shadow-xl transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {PORTFOLIO_DATA.profile.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e18]/85 backdrop-blur-xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Location
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {PORTFOLIO_DATA.profile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-violet-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-violet-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-violet-400" />
                  <span className="text-xs font-semibold">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Mailto Interactive Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.1] bg-[#0c0e18]/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/[0.08]">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-semibold text-white">
                  Send A Direct Message
                </h3>
                <span className="ml-auto text-[11px] font-mono text-slate-400">
                  Direct Mailto Dispatch
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Project Nature
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f111e] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-sm text-white transition-colors"
                    >
                      <option value="Full-Time Hiring Opportunity">Full-Time Hiring</option>
                      <option value="Next.js Web Application">Next.js Web App</option>
                      <option value="Laravel CMS / Admin Dashboard">Laravel CMS / Admin</option>
                      <option value="React.js Frontend Integration">React.js Frontend</option>
                      <option value="Freelance / Consultation">Freelance Project</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Discussing Full-Stack Role"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project requirements, scope, or job opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Clicking will open your pre-filled email client directly addressed to{" "}
                  <span className="text-slate-300 font-mono">tanukashyap889@gmail.com</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
