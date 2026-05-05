'use client'
import { useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────────────────────────────────
   NAV
───────────────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">🌐</div>
        Aura
      </a>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#privacy">Privacy</a></li>
        <li><a href="#download">Download</a></li>
        <li><a href="#download" className="nav-cta">Download Free</a></li>
      </ul>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   BROWSER MOCKUP
───────────────────────────────────────────────────────────────────────── */
function BrowserMockup() {
  return (
    <div className="hero-mockup-wrap animate-fade-up delay-5">
      <div className="browser-frame">
        <div className="browser-toolbar">
          <div className="browser-dots">
            <span className="dot-red" />
            <span className="dot-yellow" />
            <span className="dot-green" />
          </div>
          <div className="browser-bar">
            <span className="browser-bar-lock">🔒</span>
            aura-browser.app/canvas
          </div>
        </div>
        <div className="browser-screen">
          <div className="scan-overlay" />
          <div className="mock-sidebar">
            <div className="mock-tab active">
              <div className="mock-tab-dot" />
              Canvas Mode
            </div>
            <div className="mock-tab">
              <div className="mock-tab-dot" />
              GitHub — aura
            </div>
            <div className="mock-tab">
              <div className="mock-tab-dot" />
              Figma · UI Kit
            </div>
            <div className="mock-tab" style={{ opacity: 0.45 }}>
              <div className="mock-tab-dot" />
              Zzzz (sleeping)
            </div>
          </div>
          <div className="mock-main">
            <div className="mock-page-header">Aura Canvas Mode</div>
            <div className="mock-line w80" />
            <div className="mock-line w60" />
            <div className="mock-line w90" />
            <div className="mock-cards-row">
              <div className="mock-card" />
              <div className="mock-card" />
              <div className="mock-card" />
            </div>
          </div>
          <div className="mock-privacy-pill">
            🛡 14 trackers blocked
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-content">
        <div className="hero-badge animate-fade-up">
          <div className="hero-badge-dot" />
          Now in active development &middot; <strong>Beta coming soon</strong>
        </div>
        <h1 className="hero-title animate-fade-up delay-1">
          The browser that works<br />
          <em>the way you do</em>
        </h1>
        <p className="hero-sub animate-fade-up delay-2">
          Privacy-first. Workspace-native. Built for developers, students,
          writers, and everyone who deserves better than the default.
        </p>
        <div className="hero-actions animate-fade-up delay-3">
          <a href="#download" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v9M4 8l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download for Windows
          </a>
          <a href="#features" className="btn-secondary">
            Explore features →
          </a>
        </div>
        <div className="hero-meta animate-fade-in delay-4">
          <span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="#0db89e" strokeWidth="1.4"/>
              <path d="M4.5 6.5l1.5 1.5L8.5 5" stroke="#0db89e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Free forever
          </span>
          <span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="#0db89e" strokeWidth="1.4"/>
              <path d="M4.5 6.5l1.5 1.5L8.5 5" stroke="#0db89e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            No data collection
          </span>
          <span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="#0db89e" strokeWidth="1.4"/>
              <path d="M4.5 6.5l1.5 1.5L8.5 5" stroke="#0db89e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Built on Electron + Chromium
          </span>
        </div>
      </div>
      <BrowserMockup />
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   STATS BAR
───────────────────────────────────────────────────────────────────────── */
function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        <div className="stat-item">
          <div className="stat-num">118<span>+</span></div>
          <div className="stat-label">Features built</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-num">200<span>+</span></div>
          <div className="stat-label">Data broker removals</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-num">50<span>ms</span></div>
          <div className="stat-label">Tab switch time</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-num">0</div>
          <div className="stat-label">Ads ever</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-num"><span>&lt;</span>1<span>s</span></div>
          <div className="stat-label">Cold startup</div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   FEATURES
───────────────────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: '🎨', iconStyle: 'purple', tag: 'EXCLUSIVE', tagStyle: '',
    name: 'Canvas Mode',
    desc: 'Edit any live webpage like Figma. Move elements, change styles, then export as HTML+CSS, HTML+Tailwind, React+CSS, or React+Tailwind. No other browser has this.',
    highlight: true,
  },
  {
    icon: '🛡️', iconStyle: 'teal', tag: 'NEW', tagStyle: 'new',
    name: 'Privacy Suite',
    desc: 'DNS-over-HTTPS, Encrypted Client Hello, fingerprint randomization, cookie partitioning, and data broker removal. Real privacy — not just a badge.',
    highlight: false,
  },
  {
    icon: '🗂️', iconStyle: 'purple', tag: 'WORKSPACE', tagStyle: '',
    name: 'Workspaces & Spaces',
    desc: 'Separate work, personal, and study into isolated workspaces. Each space has its own tabs, bookmarks, and profile. Switch in a single click.',
    highlight: false,
  },
  {
    icon: '⚡', iconStyle: 'gold', tag: 'PERFORMANCE', tagStyle: '',
    name: 'Ultra-Fast Tabs',
    desc: 'Tab switching under 50ms. Smart tab sleeping frees RAM automatically. Sub-1 second cold start. We measured everything so you get the fastest experience.',
    highlight: false,
  },
  {
    icon: '🔧', iconStyle: 'purple', tag: 'DEVELOPER', tagStyle: '',
    name: 'Enhanced DevTools',
    desc: 'Improved Network Inspector, better console filtering, DOM search by attribute, color palette extractor, font inspector, and response mocking — all built in.',
    highlight: false,
  },
  {
    icon: '🔐', iconStyle: 'teal', tag: 'SECURITY', tagStyle: 'new',
    name: 'Password Vault',
    desc: 'AES-256 encrypted local vault with autofill, strong password generation, and import from Chrome and Edge. Your passwords never leave your device.',
    highlight: false,
  },
  {
    icon: '📱', iconStyle: 'purple', tag: 'PROFILES', tagStyle: '',
    name: 'Multi-Profile',
    desc: 'Fully isolated Work, Personal, and Study profiles with separate cookies, bookmarks, history, and extensions. One browser, many identities.',
    highlight: false,
  },
  {
    icon: '🎯', iconStyle: 'gold', tag: 'FOCUS', tagStyle: '',
    name: 'Focus Mode',
    desc: 'Built-in Pomodoro timer, site blocker, and daily time limits per domain. Stay in the zone without installing anything extra.',
    highlight: false,
  },
  {
    icon: '🤖', iconStyle: 'purple', tag: 'AI', tagStyle: '',
    name: 'AI Assistant',
    desc: 'Browser-native AI chat and task execution. Ask it to summarize pages, automate multi-step tasks, or research across tabs — without leaving your browser.',
    highlight: false,
  },
]

function Features() {
  const cardRefs = useRef([])

  useEffect(() => {
    const cards = cardRefs.current
    const handlers = cards.map((card) => {
      if (!card) return null
      const handler = (e) => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%')
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%')
      }
      card.addEventListener('mousemove', handler)
      return handler
    })
    return () => {
      cards.forEach((card, i) => {
        if (card && handlers[i]) card.removeEventListener('mousemove', handlers[i])
      })
    }
  }, [])

  return (
    <section id="features" className="features-section">
      <div className="section-inner">
        <div className="section-label">Features</div>
        <h2 className="section-title">
          Not just a browser.<br />A workspace OS.
        </h2>
        <p className="section-sub">
          Every feature is intentional. Nothing is here just to fill a changelog.
        </p>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el }}
              className={'feature-card' + (f.highlight ? ' highlight' : '')}
            >
              <div className={'feature-icon ' + f.iconStyle}>{f.icon}</div>
              <div className={'feature-tag ' + f.tagStyle}>{f.tag}</div>
              <div className="feature-name">{f.name}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   PRIVACY
───────────────────────────────────────────────────────────────────────── */
const PRIVACY_LAYERS = [
  { icon: '🔍', name: 'DNS-over-HTTPS', desc: 'ISP cannot see your domain lookups' },
  { icon: '🔒', name: 'Encrypted Client Hello', desc: 'Hides domain even over HTTPS' },
  { icon: '👤', name: 'Fingerprint Randomizer', desc: 'Canvas, WebGL, audio context spoofed' },
  { icon: '🍪', name: 'Cookie Partitioning', desc: 'No cross-site tracking possible' },
  { icon: '🗑️', name: 'Data Broker Removal', desc: '200+ brokers, automated opt-outs' },
  { icon: '🚨', name: 'Breach Monitoring', desc: 'HaveIBeenPwned — instant alerts' },
  { icon: '🔗', name: 'Link Cleaner', desc: 'Strips fbclid, gclid, UTM on every click' },
]

const PRIVACY_POINTS = [
  ['We collect zero data', 'No analytics, no telemetry, no usage tracking. What you browse is yours alone.'],
  ['Everything runs locally', 'Phishing detection, password vault, privacy engine — no cloud calls, no latency.'],
  ['Data broker automation', 'Aura submits opt-out requests to 200+ brokers on your behalf and re-runs every 90 days.'],
  ['No ads, ever', 'We do not sell your data or show ads. Revenue comes from optional features, not your attention.'],
  ['Open architecture', 'Built on Chromium. No custom DNS servers to trust, no VPN servers we operate.'],
]

function Privacy() {
  return (
    <section id="privacy" className="privacy-section">
      <div className="section-inner">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Privacy</div>
          <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 14px' }}>
            Real privacy.<br />Not a marketing promise.
          </h2>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Seven active protection layers, running locally, with no data ever leaving your device.
          </p>
        </div>
        <div className="privacy-grid">
          <div className="privacy-visual">
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '14px' }}>
              Active Protection Layers
            </div>
            <div className="privacy-layers">
              {PRIVACY_LAYERS.map((layer, i) => (
                <div key={i} className="privacy-layer">
                  <div className="privacy-layer-icon">{layer.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div className="privacy-layer-name">{layer.name}</div>
                    <div className="privacy-layer-desc">{layer.desc}</div>
                  </div>
                  <div className="privacy-layer-status status-active">Active</div>
                </div>
              ))}
            </div>
          </div>
          <ul className="privacy-list">
            {PRIVACY_POINTS.map(([title, desc], i) => (
              <li key={i}>
                <div className="privacy-check">&#10003;</div>
                <div>
                  <div style={{ fontWeight: 650, color: 'var(--text)', marginBottom: '4px', fontSize: '15px' }}>{title}</div>
                  <div style={{ color: 'var(--text-2)', fontSize: '14px', lineHeight: '1.55' }}>{desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   DOWNLOAD
───────────────────────────────────────────────────────────────────────── */
function Download() {
  return (
    <section id="download" className="download-section">
      <div className="dl-orb-1" />
      <div className="section-inner download-content">
        <div className="download-version">
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
          Version 1.0.0 &mdash; Early Access
        </div>
        <h2 className="download-title">
          Download <em>Aura</em>
        </h2>
        <p className="download-sub">Free. No account required. Install in seconds.</p>

        <div className="platform-cards">
          {/* Windows — AVAILABLE NOW */}
          <a
            href="https://github.com/YOUR_USERNAME/aura-browser/releases/latest/download/aura-1.0.0-setup.exe"
            className="platform-card available featured"
          >
            <div className="platform-badge">Available now</div>
            <div className="platform-icon">🪟</div>
            <div className="platform-name">Windows</div>
            <div className="platform-detail">Windows 10 / 11</div>
            <div className="platform-arrow">&#8595;</div>
          </a>

          {/* macOS */}
          <div className="platform-card coming-soon">
            <div className="platform-badge soon">Coming soon</div>
            <div className="platform-icon">🍎</div>
            <div className="platform-name">macOS</div>
            <div className="platform-detail">Apple Silicon + Intel</div>
          </div>

          {/* Linux */}
          <div className="platform-card coming-soon">
            <div className="platform-badge soon">Coming soon</div>
            <div className="platform-icon">🐧</div>
            <div className="platform-name">Linux</div>
            <div className="platform-detail">.deb &middot; .AppImage</div>
          </div>

          {/* Mobile */}
          <div className="platform-card coming-soon">
            <div className="platform-badge soon">Coming soon</div>
            <div className="platform-icon">📱</div>
            <div className="platform-name">Mobile</div>
            <div className="platform-detail">Android &middot; iOS</div>
          </div>
        </div>

        <p className="download-note">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="var(--text-3)" strokeWidth="1.2"/>
            <path d="M7 6.5v3M7 4.5v.5" stroke="var(--text-3)" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          Hosted on{' '}
          <a href="https://github.com/YOUR_USERNAME/aura-browser/releases" target="_blank" rel="noreferrer">
            GitHub Releases
          </a>
          {' '}&middot; Free, no account required &middot; 189 MB installer
        </p>
        <p className="download-note" style={{ marginTop: '8px' }}>
          Want to be notified when macOS and Linux land?{' '}
          <a href="mailto:hello@aura-browser.app">Join the waitlist &rarr;</a>
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">🌐</div>
            Aura Browser
          </div>
          <div className="footer-copy">
            &copy; 2025 Aura Browser. Built with care in Hyderabad, India.
          </div>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href="#download">Download</a>
          <a href="https://github.com/YOUR_USERNAME/aura-browser" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Privacy />
        <Download />
      </main>
      <Footer />
    </>
  )
}
