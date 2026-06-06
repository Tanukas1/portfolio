"use client";
import { useEffect, useRef, useState } from "react";


/* ─── Types ─────────────────────────────────────── */
interface Project {
  emoji: string;
  name: string;
  url: string;
  urlLabel: string;
  desc: string;
  tags: string[];
  accent: string;
  tagColor: string;
}

interface Experience {
  period: string;
  type: string;
  title: string;
  company: string;
  items: string[];
  accent: string;
}

/* ─── Data ───────────────────────────────────────── */
const SKILLS = [
  {
    icon: "⚙️",
    label: "Backend",
    sub: "Server-side",
    items: ["Laravel", "PHP", "REST API", "MVC Architecture", "Admin Panels"],
    accent: "#6366f1",
  },
  {
    icon: "🎨",
    label: "Frontend",
    sub: "Client-side",
    items: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    accent: "#06b6d4",
  },
  {
    icon: "🗄️",
    label: "Databases",
    sub: "Data Layer",
    items: ["MySQL", "MongoDB", "CRUD Operations", "DB Design"],
    accent: "#8b5cf6",
  },
  {
    icon: "🛠️",
    label: "Tools & DevOps",
    sub: "Workflow",
    items: ["Git", "GitHub", "VS Code", "Postman", "Firebase", "Composer", "Hostinger"],
    accent: "#06b6d4",
  },
  {
    icon: "💡",
    label: "Core Concepts",
    sub: "Principles",
    items: ["Responsive Design", "CMS Dev", "Component Arch", "Cross-Browser"],
    accent: "#6366f1",
  },
  {
    icon: "🤝",
    label: "Soft Skills",
    sub: "Interpersonal",
    items: ["Client Communication", "Problem Solving", "Team Collaboration", "Time Management"],
    accent: "#06b6d4",
  },
];

const PROJECTS: Project[] = [
  {
    emoji: "🏥",
    name: "Sunrise Hospital",
    url: "https://sunrisehospitals.in",
    urlLabel: "sunrisehospitals.in ↗",
    desc: "Dynamic hospital website with full CMS — custom admin panel for banners, services, gallery, blog posts, and speciality departments. 100% content editable.",
    tags: ["Laravel", "PHP", "MySQL", "MVC"],
    accent: "#6366f1",
    tagColor: "rgba(99,102,241,.15)",
  },
  {
    emoji: "✂️",
    name: "RThree Salon",
    url: "https://rthreesalon.digitalnawab.com",
    urlLabel: "rthreesalon.digitalnawab.com ↗",
    desc: "Salon management platform with service booking, staff scheduling, and customer management. Integrated Laravel CMS with responsive frontend UI.",
    tags: ["Laravel", "PHP", "MySQL", "Admin Panel"],
    accent: "#06b6d4",
    tagColor: "rgba(6,182,212,.15)",
  },
  {
    emoji: "💎",
    name: "Parvatias",
    url: "https://parvatias.com",
    urlLabel: "parvatias.com ↗",
    desc: "Full e-commerce jewellery platform with 50+ product categories, reusable component architecture, lazy loading, and efficient state management.",
    tags: ["React.js", "Tailwind CSS", "REST API"],
    accent: "#8b5cf6",
    tagColor: "rgba(139,92,246,.15)",
  },
  {
    emoji: "💆",
    name: "Sumeera Salon & Academy",
    url: "https://sumeerasalonandacademy.com",
    urlLabel: "sumeerasalonandacademy.com ↗",
    desc: "Professional salon & training academy website with service showcases, course listings, gallery, and lead-capture enquiry forms. Fully responsive.",
    tags: ["React.js", "Tailwind CSS"],
    accent: "#6366f1",
    tagColor: "rgba(99,102,241,.15)",
  },
  {
    emoji: "🏫",
    name: "Tender Hearts School",
    url: "https://tenderheartsschool.in",
    urlLabel: "tenderheartsschool.in ↗",
    desc: "Institutional school website with dynamic sections for admissions, academics, events, announcements, and gallery. Accessibility-first design.",
    tags: ["React.js", "Bootstrap"],
    accent: "#06b6d4",
    tagColor: "rgba(6,182,212,.15)",
  },
];

const EXPERIENCES: Experience[] = [
  {
    period: "Feb 2025 — Present",
    type: "Full-Time · Lucknow",
    title: "Full-Stack Developer",
    company: "Trafico Analytica Pvt. Ltd. (Digital Nawab)",
    accent: "#6366f1",
    items: [
      "Developed & maintained Laravel backend systems and admin panels for multiple live client websites",
      "Built dynamic CRUD modules reducing manual update dependency by 100% for clients",
      "Developed React.js frontends integrated with backend APIs delivering responsive user experiences",
      "Owned backend development end-to-end from requirement gathering to production deployment",
    ],
  },
  {
    period: "May 2024 — Jan 2025",
    type: "Intern · Lucknow",
    title: "Full-Stack Developer (Intern)",
    company: "Trafico Analytica Pvt. Ltd. (Digital Nawab)",
    accent: "#06b6d4",
    items: [
      "Built responsive frontend apps using React.js, Tailwind CSS, and Bootstrap for real client projects",
      "Developed product listing pages, category-based navigation, and detailed product views",
      "Hands-on exposure to full project lifecycle — from requirement gathering to live deployment",
    ],
  },
];

const PHRASES = [
  "Full-Stack Developer",
  "Laravel Specialist",
  "React.js Engineer",
  "API Architect",
  "CMS Developer",
];

const MARQUEE_ITEMS = [
  "React.js","Laravel","PHP","MySQL","Tailwind CSS","JavaScript ES6+","MongoDB","REST API","Git & GitHub","Bootstrap","Firebase",
];

/* ─── Typewriter Hook ───────────────────────────── */
function useTypewriter(phrases: string[]) {
  const [text, setText] = useState("");
  const state = useRef({ pIdx: 0, cIdx: 0, deleting: false });
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function tick() {
      const { pIdx, cIdx, deleting } = state.current;
      const phrase = phrases[pIdx];
      if (!deleting) {
        const next = cIdx + 1;
        setText(phrase.slice(0, next));
        state.current.cIdx = next;
        if (next === phrase.length) {
          state.current.deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        const next = cIdx - 1;
        setText(phrase.slice(0, next));
        state.current.cIdx = next;
        if (next === 0) {
          state.current.deleting = false;
          state.current.pIdx = (pIdx + 1) % phrases.length;
        }
      }
      timer = setTimeout(tick, deleting ? 50 : 80);
    }
    timer = setTimeout(tick, 1000);
    return () => clearTimeout(timer);
  }, [phrases]);
  return text;
}

/* ─── Reveal Hook ───────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("tk-in")),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".tk-reveal,.tk-reveal-l,.tk-reveal-r,.tk-reveal-s").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);
}

/* ─── Main Page ─────────────────────────────────── */
export default function Home() {
  const typeText = useTypewriter(PHRASES);
  useReveal();
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = () => {
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <>
      {/* ── GLOBAL STYLES ─────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        *,::before,::after{box-sizing:border-box;margin:0;padding:0}
        html{font-size:16px;scroll-behavior:smooth}
        body{background:#06051a;color:#e6e1ff;font-family:'Inter',sans-serif;overflow-x:hidden;-webkit-font-smoothing:antialiased}
        ::selection{background:rgba(99,102,241,.4);color:#fff}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#06051a}
        ::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#6366f1,#06b6d4);border-radius:3px}

        /* GRADIENT TEXT */
        .g-main{background:linear-gradient(135deg,#a5b4fc 0%,#818cf8 40%,#06b6d4 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .g-cyan{background:linear-gradient(135deg,#06b6d4,#67e8f9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .g-shimmer{background:linear-gradient(90deg,#a5b4fc,#818cf8,#06b6d4,#818cf8,#a5b4fc);background-size:300% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 6s linear infinite}
        @keyframes shimmer{0%{background-position:0% center}100%{background-position:300% center}}

        /* GLASS */
        .glass-card{backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.07)}

        /* GRADIENT BORDERS */
        .gb-indigo{background:linear-gradient(#0d0c28,#0d0c28) padding-box,linear-gradient(135deg,#6366f1,#8b5cf6 50%,#06b6d4) border-box;border:1px solid transparent}
        .gb-cyan{background:linear-gradient(#0d0c28,#0d0c28) padding-box,linear-gradient(135deg,#06b6d4,#67e8f9) border-box;border:1px solid transparent}
        .gb-soft{background:linear-gradient(#0d0c28,#0d0c28) padding-box,linear-gradient(135deg,rgba(99,102,241,.4),rgba(6,182,212,.4)) border-box;border:1px solid transparent}

        /* BLOBS */
        .blob{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;animation:bfloat 9s ease-in-out infinite}
        @keyframes bfloat{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(20px,-20px) scale(1.05)}66%{transform:translate(-15px,10px) scale(.97)}}
        .b-indigo{background:radial-gradient(circle,rgba(99,102,241,.3),transparent 70%)}
        .b-violet{background:radial-gradient(circle,rgba(139,92,246,.25),transparent 70%)}
        .b-cyan{background:radial-gradient(circle,rgba(6,182,212,.22),transparent 70%)}

        /* DIVIDERS */
        .indigo-hr{height:1px;background:linear-gradient(90deg,transparent,#6366f1 40%,#8b5cf6 50%,#6366f1 60%,transparent)}
        .cyan-hr{height:1px;background:linear-gradient(90deg,transparent,#06b6d4 40%,#67e8f9 50%,#06b6d4 60%,transparent)}

        /* REVEAL */
        .tk-reveal{opacity:0;transform:translateY(40px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)}
        .tk-reveal-l{opacity:0;transform:translateX(-40px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)}
        .tk-reveal-r{opacity:0;transform:translateX(40px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)}
        .tk-reveal-s{opacity:0;transform:scale(.93);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)}
        .tk-reveal.tk-in,.tk-reveal-l.tk-in,.tk-reveal-r.tk-in,.tk-reveal-s.tk-in{opacity:1;transform:none}
        .td1{transition-delay:.1s}.td2{transition-delay:.2s}.td3{transition-delay:.3s}.td4{transition-delay:.4s}.td5{transition-delay:.5s}

        /* BUTTONS */
        .btn-glow{position:relative;overflow:hidden;transition:transform .3s,box-shadow .3s;text-decoration:none}
        .btn-glow:hover{transform:translateY(-2px);box-shadow:0 0 36px rgba(99,102,241,.45)}
        .btn-outline{transition:transform .3s,color .3s;background:transparent;text-decoration:none}
        .btn-outline:hover{transform:translateY(-2px);color:#fff}

        /* CARDS */
        .project-card{transition:transform .5s cubic-bezier(.22,1,.36,1),box-shadow .5s ease}
        .project-card:hover{transform:translateY(-8px);box-shadow:0 20px 60px rgba(99,102,241,.18)}

        /* SKILL BADGE */
        .skill-badge{transition:all .3s cubic-bezier(.22,1,.36,1)}
        .skill-badge:hover{transform:translateY(-3px) scale(1.04)}

        /* TIMELINE DOT */
        .tl-dot::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:32px;height:32px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,.35),transparent 70%);animation:pulse 2s ease-in-out infinite}
        @keyframes pulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.6}50%{transform:translate(-50%,-50%) scale(1.5);opacity:0}}

        /* FORM */
        .form-input{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#e6e1ff;transition:border-color .3s,box-shadow .3s;outline:none;font-family:'Inter',sans-serif}
        .form-input:focus{border-color:rgba(99,102,241,.6);box-shadow:0 0 20px rgba(99,102,241,.12)}
        .form-input::placeholder{color:rgba(230,225,255,.28)}

        /* MARQUEE */
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .marquee-track{animation:marquee 28s linear infinite;white-space:nowrap;display:flex;align-items:center;gap:40px}

        /* CODE TAG */
        .code-tag{font-family:'DM Mono',monospace;font-size:.72rem;letter-spacing:.06em}

        /* GRID BG */
        .grid-bg{background-image:linear-gradient(rgba(99,102,241,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.04) 1px,transparent 1px);background-size:60px 60px}

        /* TYPEWRITER CURSOR */
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        .tw-cursor{animation:blink 1s step-end infinite;color:#6366f1}
      `}</style>


      {/* ══════════════════════ HERO ══════════════════════ */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 110,
          paddingBottom: 60,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <div className="blob b-indigo" style={{ width: 400, height: 400, top: -80, left: -80 }} />
        <div className="blob b-cyan" style={{ width: 320, height: 320, bottom: 80, right: 0, animationDelay: "3s" }} />
        <div className="blob b-violet" style={{ width: 280, height: 280, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDelay: "6s" }} />
        <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
            {/* LEFT */}
            <div>
              <div className="tk-reveal" style={{ marginBottom: 28 }}>
                <span
                  className="code-tag"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 18px",
                    borderRadius: 50,
                    background: "linear-gradient(#0d0c28,#0d0c28) padding-box,linear-gradient(135deg,rgba(99,102,241,.4),rgba(6,182,212,.4)) border-box",
                    border: "1px solid transparent",
                    color: "rgba(6,182,212,.9)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#06b6d4",
                      display: "inline-block",
                      animation: "pulse 2s ease-in-out infinite",
                    }}
                  />
                  Available for new opportunities
                </span>
              </div>

              <div
                className="tk-reveal td1 code-tag"
                style={{ color: "rgba(165,180,252,.7)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 12 }}
              >
                Hello, World! 👋
              </div>

              <h1
                className="tk-reveal td2"
                style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem,6.5vw,5rem)", lineHeight: 1.02, marginBottom: 16 }}
              >
                <span style={{ color: "#f0eeff" }}>Tanu</span>
                <br />
                <span className="g-main">Kashyap</span>
              </h1>

              <div className="tk-reveal td3" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ height: 1, width: 32, background: "linear-gradient(90deg,#6366f1,#06b6d4)" }} />
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".85rem", color: "#06b6d4", letterSpacing: ".04em" }}>
                  {typeText}
                  <span className="tw-cursor">|</span>
                </div>
              </div>

              <p
                className="tk-reveal td3"
                style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, color: "rgba(230,225,255,.5)", maxWidth: 500, marginBottom: 36 }}
              >
                Full-Stack Developer crafting scalable web apps with{" "}
                <span style={{ color: "#a5b4fc" }}>React.js</span> &amp;{" "}
                <span style={{ color: "#06b6d4" }}>Laravel</span>.
                Specialized in RESTful APIs, admin panels &amp; pixel-perfect UI — across healthcare, e-commerce &amp; education.
              </p>

              <div className="tk-reveal td4" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginBottom: 40 }}>
                <a
                  href="#contact"
                  className="btn-glow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    borderRadius: 16,
                    background: "linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)",
                    color: "#fff",
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: ".85rem",
                    letterSpacing: ".04em",
                  }}
                >
                  💬 Hire Me
                </a>
                <a
                  href="Tanu_Kashyap_Resume.pdf"
                  download
                  className="btn-glow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    borderRadius: 16,
                    background: "linear-gradient(135deg,rgba(6,182,212,.2),rgba(99,102,241,.2))",
                    border: "1px solid rgba(6,182,212,.35)",
                    color: "#06b6d4",
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: ".85rem",
                    letterSpacing: ".04em",
                  }}
                >
                  📄 Download CV
                </a>
                <a
                  href="#projects"
                  style={{ fontFamily: "'DM Mono',monospace", fontSize: ".78rem", color: "rgba(230,225,255,.3)", textDecoration: "none", transition: "color .3s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#06b6d4")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(230,225,255,.3)")}
                >
                  View Projects →
                </a>
              </div>

              {/* Socials */}
              <div className="tk-reveal td5" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "rgba(230,225,255,.2)", textTransform: "uppercase", letterSpacing: ".2em" }}>
                  Find me
                </span>
                <div style={{ height: 1, width: 24, background: "rgba(255,255,255,.08)" }} />
                {[
                  { href: "https://linkedin.com", icon: "in", label: "LinkedIn" },
                  { href: "https://github.com", icon: "gh", label: "GitHub" },
                  { href: "mailto:tanukashyap889@gmail.com", icon: "@", label: "Email" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="gb-soft glass-card"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'DM Mono',monospace",
                      fontSize: 11,
                      color: "rgba(230,225,255,.4)",
                      textDecoration: "none",
                      transition: "color .3s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,225,255,.4)")}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: Stats cards */}
            <div className="tk-reveal-r" style={{ display: "flex", flexDirection: "column", gap: 14, width: 200 }}>
              {[
                { val: "2+", label: "Years Exp", style: "gb-indigo" },
                { val: "5+", label: "Live Projects", style: "gb-cyan" },
                { val: "10+", label: "Technologies", style: "gb-soft" },
                { val: "8.13", label: "MCA CGPA", style: "gb-indigo" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`glass-card ${s.style}`}
                  style={{ borderRadius: 18, padding: "18px 16px", textAlign: "center" }}
                >
                  <div
                    className="g-main"
                    style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "2.2rem", lineHeight: 1 }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.3)", textTransform: "uppercase", letterSpacing: ".15em", marginTop: 4 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
              <div className="glass-card gb-soft" style={{ borderRadius: 18, padding: 14, display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
                {["React", "Laravel", "MySQL", "PHP", "Tailwind"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: 9,
                      padding: "4px 8px",
                      borderRadius: 6,
                      background: "rgba(99,102,241,.12)",
                      color: "rgba(165,180,252,.8)",
                      border: "1px solid rgba(99,102,241,.2)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            opacity: .25,
            animation: "bounce 2s infinite",
          }}
        >
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.4)", letterSpacing: ".2em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
            <rect x="1" y="1" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity=".4" />
            <circle cx="7" cy="7" r="2" fill="currentColor" opacity=".6">
              <animate attributeName="cy" values="7;13;7" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </section>

      {/* ══════════════════════ ABOUT ══════════════════════ */}
      <section id="about" style={{ position: "relative", padding: "112px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center" }}>
            {/* Visual */}
            <div className="tk-reveal-l" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative" }}>
                <div
                  className="gb-indigo"
                  style={{
                    width: 280,
                    height: 280,
                    borderRadius: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg,rgba(99,102,241,.1),rgba(6,182,212,.06))",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div className="blob b-indigo" style={{ width: 180, height: 180, top: 0, left: 0, opacity: .5 }} />
                  <div style={{ position: "relative", textAlign: "center" }}>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: "50%",
                        margin: "0 auto 12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 800,
                        fontSize: "2rem",
                        background: "linear-gradient(135deg,#6366f1,#06b6d4)",
                        color: "#fff",
                      }}
                    >
                      TK
                    </div>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "rgba(230,225,255,.35)" }}>
                      — replace with photo —
                    </div>
                  </div>
                </div>
                <div
                  className="glass-card gb-soft"
                  style={{ position: "absolute", top: -12, right: -24, borderRadius: 12, padding: "10px 14px" }}
                >
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#06b6d4" }}>✓ Open to Work</span>
                </div>
                <div
                  className="glass-card gb-soft"
                  style={{ position: "absolute", bottom: -12, left: -24, borderRadius: 12, padding: "10px 14px" }}
                >
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#a5b4fc" }}>📍 Lucknow, UP, India</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="tk-reveal-r">
              <div className="code-tag" style={{ color: "rgba(6,182,212,.7)", marginBottom: 10 }}>
                // about_me.tsx
              </div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: 20 }}>
                About <span className="g-main">Me</span>
              </h2>
              <p style={{ color: "rgba(230,225,255,.55)", lineHeight: 1.8, marginBottom: 16 }}>
                I&apos;m a <span style={{ color: "#a5b4fc" }}>Full-Stack Developer</span> specialized in{" "}
                <span style={{ color: "#06b6d4" }}>React.js</span> and{" "}
                <span style={{ color: "#06b6d4" }}>Laravel (PHP)</span> with hands-on experience building
                scalable web applications, RESTful APIs, and custom admin panels.
              </p>
              <p style={{ color: "rgba(230,225,255,.48)", lineHeight: 1.8, marginBottom: 28 }}>
                I&apos;ve delivered production-ready applications across healthcare, e-commerce, salon, and education domains —
                always focusing on clean code, performance, and user-friendly design.
              </p>

              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}
              >
                {[
                  { label: "Backend", color: "#06b6d4", val: "Laravel · PHP · MySQL" },
                  { label: "Frontend", color: "#a5b4fc", val: "React.js · Tailwind · JS" },
                  { label: "Email", color: "#06b6d4", val: "tanukashyap889@gmail.com" },
                  { label: "Phone", color: "#a5b4fc", val: "+91-7398213399" },
                ].map((i) => (
                  <div key={i.label} className="glass-card gb-soft" style={{ borderRadius: 14, padding: "14px 16px" }}>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: i.color, marginBottom: 4 }}>
                      {i.label}
                    </div>
                    <div style={{ fontSize: 13, color: "rgba(230,225,255,.65)", wordBreak: "break-all" }}>{i.val}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a
                  href="mailto:tanukashyap889@gmail.com"
                  className="btn-glow"
                  style={{
                    padding: "10px 24px",
                    borderRadius: 50,
                    background: "linear-gradient(135deg,#6366f1,#06b6d4)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: ".85rem",
                    textDecoration: "none",
                  }}
                >
                  Get in Touch
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline gb-soft glass-card"
                  style={{ padding: "10px 24px", borderRadius: 50, color: "rgba(230,225,255,.55)", fontSize: ".85rem", textDecoration: "none" }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ SKILLS ══════════════════════ */}
      <section id="skills" style={{ position: "relative", padding: "112px 24px" }}>
        <div className="blob b-cyan" style={{ width: 300, height: 300, right: 0, top: "50%", opacity: .5 }} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tk-reveal code-tag" style={{ color: "rgba(6,182,212,.7)", marginBottom: 10 }}>// tech_stack.ts</div>
            <h2 className="tk-reveal td1" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: 14 }}>
              Technical <span className="g-main">Skills</span>
            </h2>
            <p className="tk-reveal td2" style={{ color: "rgba(230,225,255,.4)", maxWidth: 480, margin: "0 auto" }}>
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <div className="tk-reveal indigo-hr" style={{ marginBottom: 56 }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {SKILLS.map((sk, i) => (
              <div
                key={sk.label}
                className={`tk-reveal td${Math.min(i + 1, 5)} glass-card project-card`}
                style={{
                  borderRadius: 20,
                  padding: 24,
                  background: "linear-gradient(#0d0c28,#0d0c28) padding-box, linear-gradient(135deg," + sk.accent + "88," + sk.accent + "44) border-box",
                  border: "1px solid transparent",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.25rem",
                      background: `linear-gradient(135deg,${sk.accent}30,${sk.accent}15)`,
                    }}
                  >
                    {sk.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "#f0eeff" }}>{sk.label}</div>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: sk.accent, opacity: .8, textTransform: "uppercase", letterSpacing: ".15em" }}>
                      {sk.sub}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {sk.items.map((item) => (
                    <span
                      key={item}
                      className="skill-badge code-tag"
                      style={{
                        padding: "6px 12px",
                        borderRadius: 8,
                        background: `${sk.accent}18`,
                        color: sk.accent,
                        border: `1px solid ${sk.accent}30`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROJECTS ══════════════════════ */}
      <section id="projects" style={{ position: "relative", padding: "112px 24px" }}>
        <div className="blob b-indigo" style={{ width: 360, height: 360, left: 0, top: "25%", opacity: .45 }} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tk-reveal code-tag" style={{ color: "rgba(165,180,252,.7)", marginBottom: 10 }}>// projects.json</div>
            <h2 className="tk-reveal td1" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: 14 }}>
              Featured <span className="g-main">Projects</span>
            </h2>
            <p className="tk-reveal td2" style={{ color: "rgba(230,225,255,.4)", maxWidth: 480, margin: "0 auto" }}>
              Production-ready applications delivered for real clients
            </p>
          </div>
          <div className="tk-reveal cyan-hr" style={{ marginBottom: 56 }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {PROJECTS.map((p, i) => (
              <div
                key={p.name}
                className={`tk-reveal td${Math.min(i + 1, 5)} project-card glass-card`}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  background: `linear-gradient(#0d0c28,#0d0c28) padding-box, linear-gradient(135deg,${p.accent}88,${p.accent}44) border-box`,
                  border: "1px solid transparent",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 160,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg,${p.accent}18,${p.accent}08)`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ fontSize: "2.5rem", position: "relative", zIndex: 1 }}>{p.emoji}</div>
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      fontFamily: "'DM Mono',monospace",
                      fontSize: 9,
                      padding: "4px 10px",
                      borderRadius: 50,
                      background: `${p.accent}25`,
                      color: p.accent,
                      border: `1px solid ${p.accent}40`,
                    }}
                  >
                    {p.tags[0]}
                  </div>
                </div>
                <div style={{ padding: 22 }}>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#f0eeff", marginBottom: 4 }}>
                    {p.name}
                  </h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "rgba(6,182,212,.65)", textDecoration: "none", display: "block", marginBottom: 12 }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#06b6d4")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(6,182,212,.65)")}
                  >
                    {p.urlLabel}
                  </a>
                  <p style={{ fontSize: ".84rem", color: "rgba(230,225,255,.5)", lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'DM Mono',monospace",
                          fontSize: 10,
                          padding: "3px 8px",
                          borderRadius: 6,
                          background: "rgba(255,255,255,.05)",
                          color: "rgba(230,225,255,.4)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-glow"
                      style={{
                        flex: 1,
                        padding: "9px 0",
                        borderRadius: 12,
                        background: `linear-gradient(135deg,${p.accent},#06b6d4)`,
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: ".8rem",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="gb-soft glass-card"
                      style={{
                        padding: "9px 16px",
                        borderRadius: 12,
                        fontSize: ".8rem",
                        color: "rgba(230,225,255,.45)",
                        textDecoration: "none",
                        transition: "color .3s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,225,255,.45)")}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* More projects CTA */}
            <div
              className="tk-reveal td5 project-card glass-card gb-soft"
              style={{ borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 280 }}
            >
              <div style={{ textAlign: "center", padding: 32 }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>✦</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#f0eeff", marginBottom: 8 }}>
                  More Projects
                </h3>
                <p style={{ fontSize: ".84rem", color: "rgba(230,225,255,.35)", marginBottom: 20 }}>
                  Explore all my work on GitHub
                </p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow"
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    borderRadius: 50,
                    background: "linear-gradient(135deg,#6366f1,#06b6d4)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: ".85rem",
                    textDecoration: "none",
                  }}
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ EXPERIENCE ══════════════════════ */}
      <section id="experience" style={{ position: "relative", padding: "112px 24px" }}>
        <div className="blob b-violet" style={{ width: 300, height: 300, right: 40, top: 80, opacity: .35 }} />
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tk-reveal code-tag" style={{ color: "rgba(6,182,212,.7)", marginBottom: 10 }}>// work_history.md</div>
            <h2 className="tk-reveal td1" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: 14 }}>
              Work <span className="g-main">Experience</span>
            </h2>
            <p className="tk-reveal td2" style={{ color: "rgba(230,225,255,.4)", maxWidth: 480, margin: "0 auto" }}>
              My professional journey in software development
            </p>
          </div>
          <div className="tk-reveal indigo-hr" style={{ marginBottom: 56 }} />

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 1,
                background: "linear-gradient(180deg,#6366f1,#8b5cf6,#06b6d4)",
                transform: "translateX(-50%)",
              }}
            />

            {EXPERIENCES.map((ex, i) => (
              <div
                key={ex.period}
                className="tk-reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr",
                  gap: 0,
                  alignItems: "start",
                  marginBottom: i < EXPERIENCES.length - 1 ? 60 : 0,
                }}
              >
                {/* Left (date for first, content for second) */}
                <div style={{ paddingRight: 40, textAlign: i === 0 ? "right" : "left" }}>
                  {i === 0 ? (
                    <div className="gb-soft glass-card" style={{ display: "inline-block", borderRadius: 12, padding: "10px 16px" }}>
                      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#06b6d4" }}>{ex.period}</div>
                      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.3)", marginTop: 2 }}>{ex.type}</div>
                    </div>
                  ) : (
                    <div className="glass-card" style={{ borderRadius: 18, padding: 22, background: `linear-gradient(#0d0c28,#0d0c28) padding-box, linear-gradient(135deg,${ex.accent}88,${ex.accent}44) border-box`, border: "1px solid transparent" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <div style={{ fontSize: "1.3rem" }}>🎓</div>
                        <div>
                          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "#f0eeff", fontSize: "1rem" }}>{ex.title}</div>
                          <div style={{ fontSize: 12, color: ex.accent, marginTop: 2 }}>{ex.company}</div>
                        </div>
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                        {ex.items.map((item) => (
                          <li key={item} style={{ display: "flex", gap: 8, fontSize: ".82rem", color: "rgba(230,225,255,.5)", lineHeight: 1.6 }}>
                            <span style={{ color: "#6366f1", flexShrink: 0, marginTop: 2 }}>▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Dot */}
                <div
                  className="tl-dot"
                  style={{
                    position: "relative",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    border: `2px solid ${ex.accent}`,
                    background: "#06051a",
                    flexShrink: 0,
                    marginTop: 8,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 3,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg,${ex.accent},#06b6d4)`,
                    }}
                  />
                </div>

                {/* Right (content for first, date for second) */}
                <div style={{ paddingLeft: 40, textAlign: i === 1 ? "left" : "left" }}>
                  {i === 0 ? (
                    <div className="glass-card" style={{ borderRadius: 18, padding: 22, background: `linear-gradient(#0d0c28,#0d0c28) padding-box, linear-gradient(135deg,${ex.accent}88,${ex.accent}44) border-box`, border: "1px solid transparent" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <div style={{ fontSize: "1.3rem" }}>💼</div>
                        <div>
                          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "#f0eeff", fontSize: "1rem" }}>{ex.title}</div>
                          <div style={{ fontSize: 12, color: ex.accent, marginTop: 2 }}>{ex.company}</div>
                        </div>
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                        {ex.items.map((item) => (
                          <li key={item} style={{ display: "flex", gap: 8, fontSize: ".82rem", color: "rgba(230,225,255,.5)", lineHeight: 1.6 }}>
                            <span style={{ color: "#06b6d4", flexShrink: 0, marginTop: 2 }}>▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="gb-soft glass-card" style={{ display: "inline-block", borderRadius: 12, padding: "10px 16px" }}>
                      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#06b6d4" }}>{ex.period}</div>
                      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.3)", marginTop: 2 }}>{ex.type}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ EDUCATION ══════════════════════ */}
      <section id="education" style={{ position: "relative", padding: "112px 24px" }}>
        <div className="blob b-cyan" style={{ width: 260, height: 260, left: 0, bottom: 0, opacity: .35 }} />
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tk-reveal code-tag" style={{ color: "rgba(165,180,252,.7)", marginBottom: 10 }}>// education.json</div>
            <h2 className="tk-reveal td1" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: 14 }}>
              My <span className="g-main">Education</span>
            </h2>
          </div>
          <div className="tk-reveal cyan-hr" style={{ marginBottom: 56 }} />

          <div className="tk-reveal-s" style={{ maxWidth: 680, margin: "0 auto" }}>
            <div
              className="glass-card"
              style={{
                borderRadius: 24,
                padding: 36,
                background: "linear-gradient(#0d0c28,#0d0c28) padding-box, linear-gradient(135deg,#6366f188,#06b6d488) border-box",
                border: "1px solid transparent",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: "radial-gradient(circle,rgba(99,102,241,.18),transparent)",
                }}
              />
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap", position: "relative" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    background: "linear-gradient(135deg,rgba(99,102,241,.35),rgba(6,182,212,.25))",
                  }}
                >
                  🎓
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#f0eeff" }}>
                        Master of Computer Applications
                      </h3>
                      <div style={{ color: "#a5b4fc", fontSize: ".9rem", marginTop: 4 }}>MCA</div>
                    </div>
                    <div className="gb-soft glass-card" style={{ borderRadius: 12, padding: "10px 16px", textAlign: "right" }}>
                      <div className="g-main" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.8rem", lineHeight: 1 }}>
                        8.13
                      </div>
                      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.3)", letterSpacing: ".15em" }}>
                        CGPA / 10.0
                      </div>
                    </div>
                  </div>
                  <div style={{ color: "rgba(230,225,255,.55)", marginBottom: 8 }}>
                    Lal Bahadur Shastri Institute of Management and Development Studies
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "rgba(6,182,212,.65)" }}>Sep 2023 – Jun 2025</span>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "inline-block" }} />
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "rgba(230,225,255,.3)" }}>Lucknow, India</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.06)" }}>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.3)", textTransform: "uppercase", letterSpacing: ".15em", marginBottom: 12 }}>
                  Academic Focus
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Software Engineering", "Web Development", "Database Management", "Computer Networks", "Data Structures"].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: 10,
                        padding: "6px 12px",
                        borderRadius: 8,
                        background: "rgba(99,102,241,.1)",
                        color: "#a5b4fc",
                        border: "1px solid rgba(99,102,241,.2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ MARQUEE STRIP ══════════════════════ */}
      <div
        style={{
          position: "relative",
          padding: "32px 0",
          overflow: "hidden",
          borderTop: "1px solid rgba(99,102,241,.1)",
          borderBottom: "1px solid rgba(99,102,241,.1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg,#06051a 0%,transparent 12%,transparent 88%,#06051a 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 40 }}>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: ".82rem", color: "rgba(230,225,255,.18)", letterSpacing: ".1em" }}>
                {item}
              </span>
              <span style={{ color: "rgba(99,102,241,.3)", fontSize: ".7rem" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════ CONTACT ══════════════════════ */}
      <section id="contact" style={{ position: "relative", padding: "112px 24px" }}>
        <div className="blob b-indigo" style={{ width: 360, height: 360, right: 0, top: 0, opacity: .35 }} />
        <div className="blob b-cyan" style={{ width: 260, height: 260, left: 40, bottom: 40, opacity: .25 }} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tk-reveal code-tag" style={{ color: "rgba(6,182,212,.7)", marginBottom: 10 }}>// contact_me.ts</div>
            <h2 className="tk-reveal td1" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: 14 }}>
              Let&apos;s <span className="g-main">Connect</span>
            </h2>
            <p className="tk-reveal td2" style={{ color: "rgba(230,225,255,.4)", maxWidth: 480, margin: "0 auto" }}>
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
          </div>
          <div className="tk-reveal indigo-hr" style={{ marginBottom: 56 }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 40, alignItems: "start" }}>
            {/* Info */}
            <div className="tk-reveal-l">
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#f0eeff", marginBottom: 12 }}>
                Get in Touch
              </h3>
              <p style={{ color: "rgba(230,225,255,.45)", lineHeight: 1.8, marginBottom: 28 }}>
                I&apos;m currently available for freelance work and full-time positions. Let&apos;s build something amazing together.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {[
                  { href: "mailto:tanukashyap889@gmail.com", icon: "✉️", label: "Email", val: "tanukashyap889@gmail.com", acc: "#6366f1" },
                  { href: "tel:+917398213399", icon: "📞", label: "Phone", val: "+91-7398213399", acc: "#06b6d4" },
                  { href: "#", icon: "📍", label: "Location", val: "Lucknow, Uttar Pradesh, India", acc: "#8b5cf6" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="glass-card gb-soft"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "16px 18px",
                      borderRadius: 18,
                      textDecoration: "none",
                      transition: "all .3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `linear-gradient(#0d0c28,#0d0c28) padding-box, linear-gradient(135deg,${c.acc}88,${c.acc}44) border-box`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "";
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        background: `linear-gradient(135deg,${c.acc}30,${c.acc}15)`,
                      }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.3)", textTransform: "uppercase", letterSpacing: ".15em", marginBottom: 2 }}>
                        {c.label}
                      </div>
                      <div style={{ fontSize: ".84rem", color: "rgba(230,225,255,.65)", wordBreak: "break-all" }}>{c.val}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.3)", textTransform: "uppercase", letterSpacing: ".2em", marginBottom: 14 }}>
                  Find me on
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    { href: "https://linkedin.com", label: "LI" },
                    { href: "https://github.com", label: "GH" },
                    { href: "tel:+917398213399", label: "WA" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="gb-soft glass-card"
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'DM Mono',monospace",
                        fontSize: 11,
                        color: "rgba(230,225,255,.4)",
                        textDecoration: "none",
                        transition: "color .3s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,225,255,.4)")}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="tk-reveal-r">
              <div
                className="glass-card"
                style={{
                  borderRadius: 24,
                  padding: 32,
                  background: "linear-gradient(#0d0c28,#0d0c28) padding-box, linear-gradient(135deg,#6366f188,#06b6d444) border-box",
                  border: "1px solid transparent",
                }}
              >
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#f0eeff", marginBottom: 24 }}>
                  Send a Message
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    {[
                      { label: "Name", placeholder: "Your name", type: "text" },
                      { label: "Email", placeholder: "your@email.com", type: "email" },
                    ].map((f) => (
                      <div key={f.label}>
                        <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.35)", textTransform: "uppercase", letterSpacing: ".15em", display: "block", marginBottom: 6 }}>
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          className="form-input"
                          style={{ width: "100%", padding: "12px 16px", borderRadius: 12, fontSize: ".85rem" }}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.35)", textTransform: "uppercase", letterSpacing: ".15em", display: "block", marginBottom: 6 }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project inquiry..."
                      className="form-input"
                      style={{ width: "100%", padding: "12px 16px", borderRadius: 12, fontSize: ".85rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: "rgba(230,225,255,.35)", textTransform: "uppercase", letterSpacing: ".15em", display: "block", marginBottom: 6 }}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="form-input"
                      style={{ width: "100%", padding: "12px 16px", borderRadius: 12, fontSize: ".85rem", resize: "none" }}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="btn-glow"
                    style={{
                      width: "100%",
                      padding: "14px 0",
                      borderRadius: 14,
                      background: "linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)",
                      color: "#fff",
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: ".9rem",
                      border: "none",
                      cursor: "pointer",
                      letterSpacing: ".04em",
                    }}
                  >
                    Send Message ✦
                  </button>
                  {formSent && (
                    <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#06b6d4", textAlign: "center" }}>
                      ✓ Message sent! I&apos;ll get back to you soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}