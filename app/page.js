"use client";
import { useEffect, useRef, useState } from "react";

const THEMES = ["frost", "noir", "aurora"];
const HERO_IMG = { frost: "/Frost.png", noir: "/Noir.png", aurora: "/Aurora.png" };

function Nav({ theme, setTheme }) {
  return (
    <nav className="nav">
      <a href="#" className="wordmark">Aura</a>
      <div className="nav-right">
        <a href="#features" className="nav-link">Features</a>
        <a href="#privacy" className="nav-link">Privacy</a>
        <a href="#themes" className="nav-link">Themes</a>
        <div className="theme-switch" role="tablist" aria-label="Theme">
          {THEMES.map((t) => (
            <button key={t} data-t={t} className={theme === t ? "active" : ""} onClick={() => setTheme(t)}>
              <span className="sw" /> {t[0].toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <a href="#download" className="nav-cta">Download</a>
      </div>
    </nav>
  );
}

function Hero({ theme }) {
  const [imgFading, setImgFading] = useState(false);
  const [src, setSrc] = useState(HERO_IMG[theme]);
  useEffect(() => {
    setImgFading(true);
    const t = setTimeout(() => { setSrc(HERO_IMG[theme]); setImgFading(false); }, 250);
    return () => clearTimeout(t);
  }, [theme]);
  return (
    <section className="hero">
      <div className="hero-orb o1" />
      <div className="hero-orb o2" />
      <div className="hero-left">
        <div className="eyebrow r"><span className="dot" />v1.0 · Early access · Beta soon</div>
        <h1 className="headline r d1">
          An <span className="accent-word">aura</span><br />
          around <span className="underline">everything</span><br />
          you do.
        </h1>
        <p className="sub r d2">A privacy-first agentic browser. Three moods — Frost, Noir, Aurora — one calm, fast, workspace-native shell that quietly does the work for you.</p>
        <div className="hero-actions r d3">
          <a className="btn-primary" href="#download"><i className="lucide icon-arrow-down-to-line" /> Download for Windows</a>
          <a className="btn-secondary" href="#features"><i className="lucide icon-sparkles" /> See what it does</a>
        </div>
        <div className="kicker-row r d4">
          <span><i className="lucide icon-check-circle-2" /> Free forever</span>
          <span><i className="lucide icon-check-circle-2" /> Zero data collection</span>
          <span><i className="lucide icon-check-circle-2" /> Built on Chromium</span>
        </div>
      </div>
      <div className="hero-right r d3">
        <div className="product-stage">
          <div className="compass-ring">
            <svg viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="190" stroke="currentColor" strokeOpacity=".18" strokeWidth="1" strokeDasharray="2 6" />
              <circle cx="200" cy="200" r="160" stroke="currentColor" strokeOpacity=".10" strokeWidth="1" />
              <g stroke="currentColor" strokeOpacity=".22" strokeWidth="1">
                <line x1="200" y1="10" x2="200" y2="30" />
                <line x1="200" y1="370" x2="200" y2="390" />
                <line x1="10" y1="200" x2="30" y2="200" />
                <line x1="370" y1="200" x2="390" y2="200" />
              </g>
              <text x="200" y="22" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="currentColor" opacity=".5">N</text>
              <text x="200" y="396" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="currentColor" opacity=".5">S</text>
              <text x="6" y="204" fontFamily="JetBrains Mono" fontSize="10" fill="currentColor" opacity=".5">W</text>
              <text x="386" y="204" fontFamily="JetBrains Mono" fontSize="10" fill="currentColor" opacity=".5">E</text>
            </svg>
          </div>
          <img className="product-img" src={src} alt="Aura product mark" style={{ opacity: imgFading ? 0 : 1 }} />
          <div className="orbit-chip c1"><i className="lucide icon-shield-check" /> 14 trackers blocked</div>
          <div className="orbit-chip c2"><i className="lucide icon-zap" /> Tab switch &lt; 50ms</div>
          <div className="orbit-chip c3"><i className="lucide icon-sparkles" /> Canvas mode</div>
        </div>
      </div>
    </section>
  );
}

const TRUST = [
  ["shield", "DNS-over-HTTPS"], ["key-round", "AES-256 vault"],
  ["fingerprint", "Fingerprint randomizer"], ["globe", "Built on Chromium"],
  ["eye-off", "Zero telemetry"], ["cpu", "Local AI"],
  ["trash-2", "200+ data broker removals"], ["zap", "<1s cold start"],
];
function Trust() {
  return (
    <div className="trust" aria-hidden>
      <div className="trust-track">
        {[...TRUST, ...TRUST].map(([i, l], k) => (
          <span key={k} className="trust-item"><i className={`lucide icon-${i}`} /> {l}</span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label">By the numbers</div>
        <h2 className="section-title">Quiet on the outside.<br /><em>Loud where it counts.</em></h2>
        <div className="stats-grid">
          <div className="stat"><div className="stat-n">118<span className="unit">+</span></div><div className="stat-l">Features shipped</div></div>
          <div className="stat"><div className="stat-n">200<span className="unit">+</span></div><div className="stat-l">Data broker removals</div></div>
          <div className="stat"><div className="stat-n">50<span className="unit">ms</span></div><div className="stat-l">Tab switch time</div></div>
          <div className="stat"><div className="stat-n">0</div><div className="stat-l">Ads. Ever.</div></div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: "pen-tool", tag: "Exclusive", name: "Canvas mode", desc: "Edit any live webpage like Figma — drag, restyle, replace — then export as HTML + CSS, HTML + Tailwind, React + CSS, or React + Tailwind. No other browser does this.", featured: true },
  { icon: "shield", tag: "Privacy", name: "Privacy suite", desc: "DoH, ECH, fingerprint randomizer, cookie partitioning, and a data-broker opt-out engine. Real privacy — not a badge." },
  { icon: "layers", tag: "Workspaces", name: "Workspaces & spaces", desc: "Separate work, personal, and study into isolated profiles. Switch in a click; nothing leaks across." },
  { icon: "zap", tag: "Performance", name: "Ultra-fast tabs", desc: "<50ms tab switches, <1s cold start, smart tab sleeping. We measured everything." },
  { icon: "bot", tag: "AI", name: "Agent sidebar", desc: "Ask Aura to summarize, extract, or run multi-step tasks across tabs. Local-first, no cloud hop." },
  { icon: "terminal", tag: "Developer", name: "Enhanced DevTools", desc: "Better network inspector, DOM search by attribute, color & font extractors, response mocking — built in." },
];

function Features() {
  const ref = useRef([]);
  useEffect(() => {
    const handlers = ref.current.map((c) => {
      if (!c) return null;
      const h = (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", e.clientX - r.left + "px");
        c.style.setProperty("--my", e.clientY - r.top + "px");
      };
      c.addEventListener("mousemove", h);
      return h;
    });
    return () => ref.current.forEach((c, i) => c && handlers[i] && c.removeEventListener("mousemove", handlers[i]));
  }, []);
  return (
    <section id="features" className="section alt">
      <div className="section-inner">
        <div className="section-label">Features</div>
        <h2 className="section-title">Not just a browser.<br /><em>A workspace OS.</em></h2>
        <p className="section-sub">Every feature is intentional. Nothing here is filler.</p>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <article key={i} ref={(el) => (ref.current[i] = el)} className={"fcard" + (f.featured ? " featured" : "")}>
              <div className="ficon"><i className={`lucide icon-${f.icon}`} /></div>
              <span className="ftag">{f.tag}</span>
              <h3 className="fname">{f.name}</h3>
              <p className="fdesc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const LAYERS = [
  ["search", "DNS-over-HTTPS", "ISP cannot see your lookups"],
  ["lock", "Encrypted Client Hello", "Hides domain even over TLS"],
  ["fingerprint", "Fingerprint randomizer", "Canvas, WebGL, audio spoofed"],
  ["cookie", "Cookie partitioning", "No cross-site tracking"],
  ["trash-2", "Data broker removal", "200+ brokers · re-runs every 90d"],
  ["link-2-off", "Link cleaner", "Strips fbclid, gclid, UTM on click"],
];
const POINTS = [
  ["We collect zero data", "No analytics, no telemetry, no usage tracking. What you browse is yours alone."],
  ["Everything runs locally", "Phishing detection, password vault, privacy engine — no cloud calls, no latency."],
  ["Broker automation", "Aura submits opt-outs to 200+ brokers on your behalf and re-runs every 90 days."],
  ["No ads. Ever.", "We don't sell your data or show ads. Revenue comes from optional features, not your attention."],
];
function Privacy() {
  return (
    <section id="privacy" className="section">
      <div className="section-inner">
        <div style={{ textAlign: "center" }}>
          <div className="section-label" style={{ textAlign: "center" }}>Privacy</div>
          <h2 className="section-title" style={{ marginLeft: "auto", marginRight: "auto" }}>Real privacy.<br /><em>Not a marketing promise.</em></h2>
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>Seven active protection layers, running locally — nothing leaves your device.</p>
        </div>
        <div className="privacy-wrap">
          <div className="privacy-panel">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".06em", color: "var(--text-3)", marginBottom: 14, textTransform: "uppercase" }}>Active protection layers</div>
            {LAYERS.map(([i, n, d], k) => (
              <div key={k} className="privacy-row">
                <div className="ico"><i className={`lucide icon-${i}`} /></div>
                <div className="pmeta"><div className="pname">{n}</div><div className="pdesc">{d}</div></div>
                <div className="pstatus">ACTIVE</div>
              </div>
            ))}
          </div>
          <ul className="privacy-list">
            {POINTS.map(([t, d], k) => (
              <li key={k}>
                <div className="check"><i className="lucide icon-check" /></div>
                <div><h4>{t}</h4><p>{d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ThemesSection({ setTheme }) {
  const cards = [
    { id: "frost", name: "Frost", desc: "Warm minimalism · Instrument Serif + Manrope · paper-like", swatches: ["#f5f0e8", "#1a1714", "#c8823a", "#e8e2d9"], img: "/Frost.png" },
    { id: "noir", name: "Noir", desc: "Dark editorial · Fraunces italic + Inter Tight · hushed", swatches: ["#0d0d0d", "#1a1a1a", "#c8823a", "#e8e3da"], img: "/Noir.png" },
    { id: "aurora", name: "Aurora", desc: "Glassmorphic · Cormorant italic + Manrope · airy", swatches: ["#d8eef8", "#e8e0f0", "#c8e6c8", "#3c7096"], img: "/Aurora.png" },
  ];
  return (
    <section id="themes" className="section alt">
      <div className="section-inner">
        <div className="section-label">Three moods</div>
        <h2 className="section-title">One browser.<br /><em>Three auras.</em></h2>
        <p className="section-sub">Switch the entire shell with one click. Type, color, motion — all tuned per theme. Click a card to try it.</p>
        <div className="themes-grid">
          {cards.map((c) => (
            <div key={c.id} className="theme-card" onClick={() => setTheme(c.id)}>
              <div className={`tc-img tc-${c.id}`}><img src={c.img} alt={c.name} /></div>
              <div className="tc-meta">
                <div className="tc-name">{c.name}</div>
                <div className="tc-desc">{c.desc}</div>
                <div className="tc-swatches">{c.swatches.map((s, i) => <span key={i} style={{ background: s }} />)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="section">
      <div className="section-inner dl-wrap">
        <div className="section-label" style={{ textAlign: "center" }}>Get Aura</div>
        <h2 className="section-title" style={{ marginLeft: "auto", marginRight: "auto" }}><em>Free.</em> No account.<br />Install in seconds.</h2>
        <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>v1.0 — early access. macOS &amp; Linux landing soon.</p>
        <div className="platform-grid">
          <a className="pcard available" href="https://github.com/kareem1207/aura-browser-releases/releases/download/patch/aura_win_ad.exe">
            <div className="pbadge">Available now</div>
            <i className="picon lucide icon-monitor" />
            <div className="pname">Windows</div>
            <div className="pdetail">Windows 10 / 11</div>
            <div className="parrow"><i className="lucide icon-arrow-down" /></div>
          </a>
          {[["apple", "macOS", "Apple Silicon · Intel"], ["terminal-square", "Linux", ".deb · .AppImage"], ["smartphone", "Mobile", "Android · iOS"]].map(([i, n, d]) => (
            <div key={n} className="pcard coming">
              <div className="pbadge soon">Coming soon</div>
              <i className={`picon lucide icon-${i}`} />
              <div className="pname">{n}</div>
              <div className="pdetail">{d}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12.5, color: "var(--text-3)", marginTop: 8 }}>Hosted on GitHub Releases · Free, no account · 189 MB</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="left">
          <div className="wordmark" style={{ fontSize: 22 }}>Aura</div>
          <div className="copy">© 2026 Aura Browser · Built with care in Hyderabad, India</div>
        </div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href="#themes">Themes</a>
          <a href="#download">Download</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const [theme, setTheme] = useState("noir");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    try { localStorage.setItem("aura.theme", theme); } catch (e) {}
  }, [theme]);
  useEffect(() => {
    try {
      const s = localStorage.getItem("aura.theme");
      if (s && THEMES.includes(s)) setTheme(s);
    } catch (e) {}
  }, []);
  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero theme={theme} />
        <Trust />
        <Stats />
        <Features />
        <Privacy />
        <ThemesSection setTheme={setTheme} />
        <Download />
      </main>
      <Footer />
    </>
  );
}
