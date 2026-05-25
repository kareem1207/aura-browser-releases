"use client";
import { useEffect, useRef, useState } from "react";

const THEMES = ["frost", "noir", "aurora"];
const HERO_IMG = { frost: "/Frost.png", noir: "/Noir.png", aurora: "/Aurora.png" };

function renderIcons() {
  if (typeof window !== "undefined" && window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons({ attrs: { "stroke-width": 1.75, width: "1em", height: "1em" } });
  }
}

function Nav({ theme, onPick }) {
  return (
    <nav className="nav">
      <a href="#" className="wordmark">Aura</a>
      <div className="nav-right">
        <a href="#features" className="nav-link">Features</a>
        <a href="#privacy" className="nav-link">Privacy</a>
        <a href="#themes" className="nav-link">Themes</a>
        <div className="theme-switch" role="tablist" aria-label="Theme">
          {THEMES.map((t) => (
            <button key={t} data-t={t} className={theme === t ? "active" : ""} onClick={(e) => onPick(t, e)}>
              <span className="sw" /><span>{t[0].toUpperCase() + t.slice(1)}</span>
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
    const t = setTimeout(() => { setSrc(HERO_IMG[theme]); setImgFading(false); }, 230);
    return () => clearTimeout(t);
  }, [theme]);
  return (
    <section className="hero">
      <div className="hero-orb o1" data-parallax="0.12" />
      <div className="hero-orb o2" data-parallax="-0.08" />

      <div className="hero-left">
        <div className="eyebrow"><span className="dot" /><i data-lucide="sparkles" className="star" /> v1.0 · Early access · Beta soon</div>
        <h1 className="headline" id="headline">
          <span className="line">
            <span className="word" style={{ animationDelay: ".05s" }}>An</span>{" "}
            <span className="word accent-word" style={{ animationDelay: ".18s" }}>aura</span>
          </span><br />
          <span className="line">
            <span className="word" style={{ animationDelay: ".32s" }}>around</span>{" "}
            <span className="word underline" style={{ animationDelay: ".46s" }}>everything</span>
          </span><br />
          <span className="line">
            <span className="word" style={{ animationDelay: ".62s" }}>you</span>{" "}
            <span className="word" style={{ animationDelay: ".74s" }}>do.</span>
          </span>
        </h1>
        <p className="sub r d3">A privacy-first agentic browser. Three moods — Frost, Noir, Aurora — one calm, fast, workspace-native shell that quietly does the work for you.</p>
        <div className="hero-actions r d4">
          <a className="btn-primary magnetic" href="#download"><i data-lucide="download" /> Download for Windows</a>
          <a className="btn-secondary" href="#features"><i data-lucide="play" /> See what it does</a>
        </div>
        <div className="kicker-row r d5">
          <span><i data-lucide="check-circle-2" /> Free forever</span>
          <span><i data-lucide="check-circle-2" /> Zero data collection</span>
          <span><i data-lucide="check-circle-2" /> Built on Chromium</span>
        </div>
      </div>

      <div className="hero-right r d3">
        <div className="product-stage" data-tilt>
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
          <div className="compass-ring inner">
            <svg viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="130" stroke="currentColor" strokeOpacity=".14" strokeWidth="1" strokeDasharray="4 10" />
            </svg>
          </div>
          <img id="hero-img" className="product-img" src={src} alt="Aura browser product mark" style={{ opacity: imgFading ? 0 : 1, transform: imgFading ? "scale(.96)" : "" }} />
          <div className="orbit-chip c1"><i data-lucide="shield-check" /> 14 trackers blocked</div>
          <div className="orbit-chip c2"><i data-lucide="zap" /> Tab switch &lt; 50ms</div>
          <div className="orbit-chip c3"><i data-lucide="sparkles" /> Canvas mode</div>
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
          <span key={k} className="trust-item"><i data-lucide={i} /> {l}</span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label io">By the numbers</div>
        <h2 className="section-title io">Quiet on the outside.<br /><em>Loud where it counts.</em></h2>
        <div className="stats-grid io">
          <div className="stat"><div className="stat-n"><span data-count="118">0</span><span className="unit">+</span></div><div className="stat-l">Features shipped</div></div>
          <div className="stat"><div className="stat-n"><span data-count="200">0</span><span className="unit">+</span></div><div className="stat-l">Data broker removals</div></div>
          <div className="stat"><div className="stat-n"><span data-count="50">0</span><span className="unit">ms</span></div><div className="stat-l">Tab switch time</div></div>
          <div className="stat"><div className="stat-n"><span data-count="0">0</span></div><div className="stat-l">Ads. Ever.</div></div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: "pen-tool", tag: "Exclusive", name: "Canvas mode", desc: "Edit any live webpage like Figma — drag, restyle, replace — then export to HTML + CSS, HTML + Tailwind, React + CSS, or React + Tailwind. No other browser does this.", featured: true },
  { icon: "shield", tag: "Privacy", name: "Privacy suite", desc: "DoH, ECH, fingerprint randomizer, cookie partitioning, and a data-broker opt-out engine. Real privacy — not a badge." },
  { icon: "layers", tag: "Workspaces", name: "Workspaces & spaces", desc: "Separate work, personal, and study into isolated profiles. Switch in a click; nothing leaks across." },
  { icon: "zap", tag: "Performance", name: "Ultra-fast tabs", desc: "<50ms tab switches, <1s cold start, smart tab sleeping. We measured everything." },
  { icon: "bot", tag: "AI", name: "Agent sidebar", desc: "Ask Aura to summarize, extract, or run multi-step tasks across tabs. Local-first, no cloud hop." },
  { icon: "terminal", tag: "Developer", name: "Enhanced DevTools", desc: "Better network inspector, DOM search by attribute, color & font extractors, response mocking — built in." },
];

function CanvasDemo() {
  return (
    <div className="canvas-demo" aria-hidden>
      <div className="cd-bar">
        <div className="cd-dots"><span className="r1" /><span className="a1" /><span className="g1" /></div>
        <div className="cd-url"><i data-lucide="lock" style={{ fontSize: 11 }} /> aura://canvas/example.com</div>
      </div>
      <div className="cd-canvas">
        <div className="l">
          <div className="cd-h" />
          <div className="cd-line w80" />
          <div className="cd-line w60" />
          <div className="cd-line w40" />
        </div>
        <div className="r">
          <div className="cd-tile" />
        </div>
        <div className="cd-selected"><span className="cd-handle" /></div>
        <div className="cd-export">export · React + Tailwind</div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="section alt">
      <div className="section-inner">
        <div className="section-label io">Features</div>
        <h2 className="section-title io">Not just a browser.<br /><em>A workspace OS.</em></h2>
        <p className="section-sub io">Every feature is intentional. Nothing here is filler.</p>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <article key={i} className={"fcard io" + (f.featured ? " featured" : "")}>
              <div className="ficon"><i data-lucide={f.icon} /></div>
              <span className="ftag">{f.tag}</span>
              <h3 className="fname">{f.name}</h3>
              <p className="fdesc">{f.desc}</p>
              {f.featured && <CanvasDemo />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Terminal() {
  const pillStyle = { padding: "6px 10px", border: "1px solid var(--border)", borderRadius: 8, color: "var(--text-2)" };
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label io">Built for builders</div>
        <h2 className="section-title io">A browser that<br /><em>speaks your language.</em></h2>
        <p className="section-sub io">One command, your whole workspace. Aura ships a tiny local CLI so flows you do every day are one keystroke away.</p>
        <div className="split io">
          <div className="terminal">
            <div className="t-bar">
              <div className="dots"><span className="r" /><span className="a" /><span className="g" /></div>
              <div className="title">~ — aura</div>
            </div>
            <div className="t-body">
              <span className="t-line"><span className="prompt">$</span> aura canvas https://example.com</span>
              <span className="t-line"><span className="ok">→</span> opening in canvas mode <span className="em">·</span> 14 trackers blocked</span>
              <span className="t-line"><span className="prompt">$</span> aura export --hero --to react+tw</span>
              <span className="t-line"><span className="ok">✓</span> saved <span className="em">Hero.tsx</span> · <span className="em">hero.module.css</span></span>
              <span className="t-line"><span className="prompt">$</span> aura privacy status</span>
              <span className="t-line"><span className="ok">●</span> DoH, ECH, fingerprint randomizer · <span className="em">all active</span></span>
              <span className="t-line"><span className="prompt">$</span> <span className="t-cursor" /></span>
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "var(--font-display-style)", fontWeight: "var(--font-display-weight)", fontSize: 32, letterSpacing: "-.02em", color: "var(--text)", marginBottom: 14 }}>Keyboard-native. <em style={{ color: "var(--accent)" }}>Forever.</em></h3>
            <p style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.6, maxWidth: 440 }}>Every action has a shortcut. Every shortcut is remappable. Multi-cursor URL bar. Vim-mode if you want it. Aura gets out of your way.</p>
            <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: 11.5 }}>
              <span style={pillStyle}>⌘ K · Quick switch</span>
              <span style={pillStyle}>⌘ ⇧ P · Command palette</span>
              <span style={pillStyle}>⌘ E · Canvas mode</span>
              <span style={pillStyle}>⌘ ⇧ A · Ask Aura</span>
            </div>
          </div>
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
    <section id="privacy" className="section alt">
      <div className="section-inner">
        <div style={{ textAlign: "center" }}>
          <div className="section-label io" style={{ marginInline: "auto" }}>Privacy</div>
          <h2 className="section-title io" style={{ marginInline: "auto" }}>Real privacy.<br /><em>Not a marketing promise.</em></h2>
          <p className="section-sub io" style={{ margin: "0 auto", textAlign: "center" }}>Seven active protection layers, running locally — nothing leaves your device.</p>
        </div>
        <div className="privacy-wrap">
          <div className="privacy-panel io">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".06em", color: "var(--text-3)", marginBottom: 14, textTransform: "uppercase" }}>Active protection layers</div>
            {LAYERS.map(([i, n, d], k) => (
              <div key={k} className="privacy-row">
                <div className="ico"><i data-lucide={i} /></div>
                <div className="pmeta"><div className="pname">{n}</div><div className="pdesc">{d}</div></div>
                <div className="pstatus">ACTIVE</div>
              </div>
            ))}
          </div>
          <ul className="privacy-list io">
            {POINTS.map(([t, d], k) => (
              <li key={k}>
                <div className="check"><i data-lucide="check" /></div>
                <div><h4>{t}</h4><p>{d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ThemesSection({ theme, onPick }) {
  const cards = [
    { id: "frost", name: "Frost", desc: "Warm minimalism · Instrument Serif + Manrope · paper-like", swatches: ["#f5f0e8", "#1a1714", "#c8823a", "#e8e2d9"], img: "/Frost.png" },
    { id: "noir", name: "Noir", desc: "Dark editorial · Fraunces italic + Inter Tight · hushed", swatches: ["#0d0d0d", "#1a1a1a", "#c8823a", "#e8e3da"], img: "/Noir.png" },
    { id: "aurora", name: "Aurora", desc: "Glassmorphic · Cormorant italic + Manrope · airy", swatches: ["#d8eef8", "#e8e0f0", "#c8e6c8", "#3c7096"], img: "/Aurora.png" },
  ];
  return (
    <section id="themes" className="section">
      <div className="section-inner">
        <div className="section-label io">Three moods</div>
        <h2 className="section-title io">One browser.<br /><em>Three auras.</em></h2>
        <p className="section-sub io">Switch the entire shell with one click. Type, color, motion — all tuned per theme. Click a card to try it.</p>
        <div className="themes-grid">
          {cards.map((c) => (
            <div key={c.id} className={"theme-card io" + (theme === c.id ? " active" : "")} data-theme-pick={c.id} onClick={(e) => onPick(c.id, e)}>
              <div className={`tc-img tc-${c.id}`}><img src={c.img} alt={c.name} /></div>
              <div className="tc-meta">
                <div className="tc-name">{c.name} <i data-lucide="check" /></div>
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

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true"><path d="M0 3.449L9.75 2.1v9.451H0V3.449zM10.949 1.949L24 0v11.4H10.949V1.949zM0 12.6h9.75v9.451L0 20.699V12.6zM10.949 12.6H24V24l-13.051-1.949V12.6z" /></svg>
);
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
);
const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68a1.193 1.193 0 0 0-.132.602c.001.199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 0 0-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.151.236-6.142-3.544-6.057zm.616 7.13c-.115.001-.234.012-.36.038-.318.066-.617.21-.928.43a3.226 3.226 0 0 1-.426.275 1.156 1.156 0 0 1-.4.137c-.137.012-.247-.014-.348-.078-.099-.061-.176-.149-.234-.265a.946.946 0 0 1-.105-.359 1.118 1.118 0 0 1 .015-.366c.024-.116.063-.214.121-.295.107-.156.236-.257.378-.301.143-.046.288-.05.43-.024.142.029.276.085.4.171.124.085.232.198.32.328.087.131.157.276.21.43.05.155.084.314.097.474.013.16.012.318-.008.471-.02.156-.054.305-.108.444-.054.143-.124.275-.214.39-.087.117-.197.215-.328.292-.13.077-.276.137-.43.176-.156.04-.32.062-.485.06-.165 0-.327-.026-.481-.07a1.61 1.61 0 0 1-.43-.193 1.413 1.413 0 0 1-.347-.292c-.097-.116-.176-.243-.234-.388a1.7 1.7 0 0 1-.116-.456 2.46 2.46 0 0 1-.012-.488c.012-.162.043-.32.082-.474.04-.156.097-.305.16-.444a1.85 1.85 0 0 1 .238-.39c.097-.116.21-.214.328-.291.122-.077.262-.137.41-.176.15-.04.314-.062.482-.06z" /></svg>
);
const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true"><path d="M17.523 15.341c-.5 0-.91-.41-.91-.916 0-.504.41-.913.91-.913.504 0 .914.41.914.913 0 .506-.41.916-.914.916m-11.046 0c-.502 0-.912-.41-.912-.916 0-.504.41-.913.912-.913.504 0 .913.41.913.913 0 .506-.41.916-.913.916m11.372-6.029l1.823-3.156a.38.38 0 0 0-.139-.518.378.378 0 0 0-.517.139l-1.846 3.196A11.5 11.5 0 0 0 12 7.842c-1.84 0-3.572.43-5.17 1.131L4.985 5.777a.378.378 0 1 0-.656.379L6.15 9.312C2.99 11.039.96 14.272 1 17.91h22c.04-3.638-1.99-6.872-5.151-8.598" /></svg>
);

function Download() {
  return (
    <section id="download" className="section alt">
      <div className="section-inner dl-wrap">
        <div className="section-label io" style={{ marginInline: "auto" }}>Get Aura</div>
        <h2 className="section-title io" style={{ marginInline: "auto" }}><em>Free.</em> No account.<br />Install in seconds.</h2>
        <p className="section-sub io" style={{ margin: "0 auto", textAlign: "center" }}>v1.0 — early access. macOS &amp; Linux landing soon.</p>
        <div className="platform-grid">
          <a className="pcard available io" href="https://github.com/kareem1207/aura-browser-releases/releases/download/download/aura-9.0.0-setup.exe">
            <div className="pbadge">Available now</div>
            <span className="picon brand" aria-label="Windows"><WindowsIcon /></span>
            <div className="pname">Windows</div>
            <div className="pdetail">Windows 10 / 11</div>
            <div className="parrow"><i data-lucide="arrow-down" /></div>
          </a>
          <div className="pcard coming io">
            <div className="pbadge soon">Coming soon</div>
            <span className="picon brand" aria-label="macOS"><AppleIcon /></span>
            <div className="pname">macOS</div>
            <div className="pdetail">Apple Silicon · Intel</div>
          </div>
          <div className="pcard coming io">
            <div className="pbadge soon">Coming soon</div>
            <span className="picon brand" aria-label="Linux"><LinuxIcon /></span>
            <div className="pname">Linux</div>
            <div className="pdetail">.deb · .AppImage</div>
          </div>
          <div className="pcard coming io">
            <div className="pbadge soon">Coming soon</div>
            <span className="picon brand" aria-label="Android"><AndroidIcon /></span>
            <div className="pname">Mobile</div>
            <div className="pdetail">Android · iOS</div>
          </div>
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
  const initialized = useRef(false);

  // Load persisted theme once
  useEffect(() => {
    try {
      const s = localStorage.getItem("aura.theme");
      if (s && THEMES.includes(s)) setTheme(s);
    } catch (e) {}
  }, []);

  // Apply theme + persist
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    try { localStorage.setItem("aura.theme", theme); } catch (e) {}
  }, [theme]);

  // Render Lucide icons whenever theme changes (in case new icons mounted)
  useEffect(() => {
    let raf = requestAnimationFrame(() => renderIcons());
    // Re-try after a short delay in case the script hasn't loaded yet on first render
    const t = setTimeout(renderIcons, 250);
    const t2 = setTimeout(renderIcons, 800);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); clearTimeout(t2); };
  }, [theme]);

  const handlePick = (name, ev) => {
    if (ev && ev.clientX != null) {
      const veil = document.createElement("div");
      veil.className = "theme-veil";
      veil.style.setProperty("--rx", ev.clientX + "px");
      veil.style.setProperty("--ry", ev.clientY + "px");
      veil.style.background = getComputedStyle(document.body).backgroundColor;
      document.body.appendChild(veil);
      setTimeout(() => veil.remove(), 750);
    }
    setTheme(name);
  };

  // Global interactions (cursor, particles, scroll, observers, magnetic, tilt)
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Particles
    const layer = document.getElementById("particles");
    if (layer) {
      for (let i = 0; i < 26; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = 3 + Math.random() * 7;
        p.style.width = p.style.height = size + "px";
        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";
        p.style.animationDuration = (16 + Math.random() * 16) + "s, " + (4 + Math.random() * 5) + "s";
        p.style.animationDelay = (-Math.random() * 16) + "s, " + (-Math.random() * 5) + "s";
        p.style.opacity = (0.18 + Math.random() * 0.35).toFixed(2);
        layer.appendChild(p);
      }
    }

    // Cursor dot + glow with lerp follow
    const dot = document.querySelector(".cursor-dot");
    const glow = document.querySelector(".cursor-glow");
    let mx = window.innerWidth / 2, my = window.innerHeight / 2, gx = mx, gy = my;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot) { dot.style.left = mx + "px"; dot.style.top = my + "px"; dot.classList.add("show"); }
      if (glow) glow.style.opacity = 1;
    };
    window.addEventListener("mousemove", onMove);
    const onLeave = () => { if (glow) glow.style.opacity = 0; };
    document.addEventListener("mouseleave", onLeave);
    let rafId;
    const gLoop = () => {
      gx += (mx - gx) * 0.08; gy += (my - gy) * 0.08;
      if (glow) { glow.style.left = gx + "px"; glow.style.top = gy + "px"; }
      rafId = requestAnimationFrame(gLoop);
    };
    gLoop();

    // Hover state on interactive elements
    const hoverSelectors = ["a", "button", ".fcard", ".theme-card", ".pcard.available", ".stat", ".privacy-row"];
    const hoverEls = [];
    hoverSelectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        const enter = () => dot && dot.classList.add("hover");
        const leave = () => dot && dot.classList.remove("hover");
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        hoverEls.push([el, enter, leave]);
      });
    });

    // Feature card + stat mousemove spotlight
    const mmEls = document.querySelectorAll(".fcard, .stat");
    const mmHandler = (e) => {
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    };
    mmEls.forEach((c) => c.addEventListener("mousemove", mmHandler));

    // Scroll progress + parallax orbs
    const orbs = document.querySelectorAll("[data-parallax]");
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      doc.style.setProperty("--scroll", max > 0 ? (window.scrollY / max).toFixed(4) : 0);
      orbs.forEach((o) => {
        const speed = +o.dataset.parallax;
        o.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Reveal on scroll
    const ioObs = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("show"); ioObs.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".io").forEach((el) => ioObs.observe(el));

    // Count-up stats
    const countObs = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        countObs.unobserve(en.target);
        const target = +en.target.dataset.count;
        const dur = 1200;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          en.target.textContent = Math.floor(target * eased);
          if (p < 1) requestAnimationFrame(tick);
          else en.target.textContent = target;
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll("[data-count]").forEach((el) => countObs.observe(el));

    // Magnetic button
    const magEls = document.querySelectorAll(".magnetic");
    const magHandlers = [];
    magEls.forEach((el) => {
      const enter = () => el.classList.add("magnetic-active");
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * 0.18, dy = (e.clientY - cy) * 0.28;
        el.style.transform = `translate(${dx}px, ${dy - 2}px)`;
      };
      const leave = () => { el.style.transform = ""; el.classList.remove("magnetic-active"); };
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      magHandlers.push([el, enter, move, leave]);
    });

    // Tilt
    const tiltEls = document.querySelectorAll("[data-tilt]");
    const tiltHandlers = [];
    tiltEls.forEach((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`;
      };
      const leave = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      tiltHandlers.push([el, move, leave]);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      ioObs.disconnect();
      countObs.disconnect();
      hoverEls.forEach(([el, enter, leave]) => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); });
      mmEls.forEach((c) => c.removeEventListener("mousemove", mmHandler));
      magHandlers.forEach(([el, enter, move, leave]) => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); });
      tiltHandlers.forEach(([el, move, leave]) => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); });
    };
  }, []);

  return (
    <>
      <div className="scroll-bar" aria-hidden />
      <div className="cursor-glow" aria-hidden />
      <div className="cursor-dot" aria-hidden />
      <div className="particles" id="particles" aria-hidden />
      <Nav theme={theme} onPick={handlePick} />
      <main>
        <Hero theme={theme} />
        <Trust />
        <Stats />
        <Features />
        <Terminal />
        <Privacy />
        <ThemesSection theme={theme} onPick={handlePick} />
        <Download />
      </main>
      <Footer />
    </>
  );
}
