export default function Footer() {
  return (
    <>
      <style>{`
        .tk-footer { border-top:1px solid rgba(99,102,241,.12);padding:48px 24px 32px;position:relative; }
        .tk-footer-inner { max-width:1200px;margin:0 auto; }
        .tk-footer-top { display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-bottom:28px; }
        .tk-footer-brand { display:flex;align-items:center;gap:12px; }
        .tk-footer-icon { width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#06b6d4);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:#fff;font-family:'Syne',sans-serif; }
        .tk-footer-name { font-family:'Syne',sans-serif;font-weight:700;font-size:14px;color:#f0eeff; }
        .tk-footer-role { font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:rgba(6,182,212,.55);margin-top:2px; }
        .tk-footer-code { font-family:'DM Mono',monospace;font-size:.75rem;color:rgba(200,195,255,.2); }
        .tk-footer-links { display:flex;gap:28px; }
        .tk-footer-link { font-family:'DM Mono',monospace;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(200,195,255,.35);text-decoration:none;transition:color .3s; }
        .tk-footer-link:hover { color:rgba(200,195,255,.8); }
        .tk-footer-hr { height:1px;background:linear-gradient(90deg,transparent,rgba(99,102,241,.25) 40%,rgba(6,182,212,.25) 60%,transparent);margin-bottom:20px; }
        .tk-footer-copy { text-align:center;font-family:'DM Mono',monospace;font-size:.68rem;color:rgba(200,195,255,.18); }
        .tk-footer-copy a { color:rgba(6,182,212,.4);text-decoration:none; }
        .tk-footer-copy a:hover { color:rgba(6,182,212,.7); }
      `}</style>

      <footer className="tk-footer">
        <div className="tk-footer-inner">
          <div className="tk-footer-top">
            <div className="tk-footer-brand">
              <div className="tk-footer-icon">TK</div>
              <div>
                <div className="tk-footer-name">Tanu Kashyap</div>
                <div className="tk-footer-role">Full-Stack Developer</div>
              </div>
            </div>

            <div className="tk-footer-code">
              &lt;/&gt; built with React + Laravel
            </div>

            <div className="tk-footer-links">
              <a href="#hero" className="tk-footer-link">Top</a>
              <a href="#projects" className="tk-footer-link">Projects</a>
              <a href="#contact" className="tk-footer-link">Contact</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="tk-footer-link">GitHub ↗</a>
            </div>
          </div>

          <div className="tk-footer-hr" />
          <div className="tk-footer-copy">
            © 2025 Tanu Kashyap. All rights reserved. ·{" "}
            <a href="mailto:tanukashyap889@gmail.com">tanukashyap889@gmail.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}