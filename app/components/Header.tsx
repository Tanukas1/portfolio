"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 200)
          current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .tk-nav { position:fixed;top:0;left:0;right:0;z-index:100;transition:all .4s ease;padding:16px 24px; }
        .tk-nav.solid { background:rgba(6,5,20,.95);border-bottom:1px solid rgba(99,102,241,.15);box-shadow:0 4px 32px rgba(0,0,0,.5); }
        .tk-nav-inner { max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between; }
        .tk-logo { display:flex;align-items:center;gap:12px;text-decoration:none; }
        .tk-logo-icon { width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:#fff;font-family:'Syne',sans-serif;letter-spacing:-.5px; }
        .tk-logo-text { line-height:1; }
        .tk-logo-name { font-family:'Syne',sans-serif;font-weight:700;font-size:15px;color:#f0eeff; }
        .tk-logo-role { font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#06b6d4;opacity:.7;margin-top:2px; }
        .tk-links { display:flex;align-items:center;gap:36px; }
        .tk-link { font-family:'DM Mono',monospace;font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(230,225,255,.45);text-decoration:none;position:relative;transition:color .3s; }
        .tk-link::after { content:'';position:absolute;bottom:-3px;left:0;width:0;height:1px;background:linear-gradient(90deg,#6366f1,#06b6d4);transition:width .35s cubic-bezier(.22,1,.36,1); }
        .tk-link:hover,.tk-link.active { color:#f0eeff; }
        .tk-link:hover::after,.tk-link.active::after { width:100%; }
        .tk-hire { background:linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4);color:#fff;border:none;border-radius:50px;padding:10px 24px;font-size:.8rem;font-weight:600;cursor:pointer;letter-spacing:.06em;font-family:'Syne',sans-serif;text-decoration:none;transition:transform .3s,box-shadow .3s; }
        .tk-hire:hover { transform:translateY(-2px);box-shadow:0 0 28px rgba(99,102,241,.5); }
        .tk-burger { display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:6px; }
        .tk-burger span { display:block;width:22px;height:1.5px;background:rgba(200,195,255,.7);transition:all .3s; }
        .tk-mobile { display:none;flex-direction:column;gap:4px;padding:16px 0 8px;border-top:1px solid rgba(99,102,241,.1);margin-top:12px; }
        .tk-mobile.open { display:flex; }
        .tk-mobile-link { font-family:'DM Mono',monospace;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(230,225,255,.5);text-decoration:none;padding:10px 4px;transition:color .3s; }
        .tk-mobile-link:hover { color:#f0eeff; }
        @media(max-width:900px){
          .tk-links,.tk-hire-wrap { display:none; }
          .tk-burger { display:flex; }
        }
      `}</style>

      <nav className={`tk-nav${scrolled ? " solid" : ""}`}>
        <div className="tk-nav-inner">
          <a href="#hero" className="tk-logo">
            <div className="tk-logo-icon">TK</div>
            <div className="tk-logo-text">
              <div className="tk-logo-name">Tanu Kashyap</div>
              <div className="tk-logo-role">Full-Stack Dev</div>
            </div>
          </a>

          <div className="tk-links">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`tk-link${active === l.href.slice(1) ? " active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="tk-hire-wrap">
            <a href="#contact" className="tk-hire">Hire Me</a>
          </div>

          <button
            className="tk-burger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`tk-mobile${mobileOpen ? " open" : ""}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="tk-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="tk-hire"
            style={{ marginTop: 8, textAlign: "center" }}
            onClick={() => setMobileOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </nav>
    </>
  );
}