"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutEducationSection from "./components/AboutEducationSection";
import SkillsSection from "./components/SkillsSection";
import ProjectShowcase from "./components/ProjectShowcase";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  // Structured Data Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PORTFOLIO_DATA.profile.name,
    jobTitle: "Full-Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "India",
    },
    email: PORTFOLIO_DATA.profile.email,
    telephone: PORTFOLIO_DATA.profile.phone,
    url: "https://tanukashyap.dev",
    sameAs: [
      PORTFOLIO_DATA.profile.socials.linkedin,
      PORTFOLIO_DATA.profile.socials.github,
    ],
    knowsAbout: [
      "Laravel",
      "PHP",
      "Next.js",
      "React.js",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
      "Web Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: PORTFOLIO_DATA.education.institution,
    },
  };

  return (
    <div className="relative min-h-screen bg-[#08090e] text-slate-100 selection:bg-violet-600/30 selection:text-white">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative flex flex-col">
        {/* Hero Section */}
        <HeroSection onOpenResume={() => setResumeOpen(true)} />

        {/* About & Education Overview */}
        <AboutEducationSection />

        {/* Technical Skills & Architecture */}
        <SkillsSection />

        {/* Featured Projects with Real Screenshots */}
        <ProjectShowcase />

        {/* Professional Experience Timeline */}
        <ExperienceSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Resume Viewer / PDF Print Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}