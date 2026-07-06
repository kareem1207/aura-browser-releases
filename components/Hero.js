"use client";
import { useEffect, useState } from "react";

const HERO_IMG = { frost: "/Frost.png", noir: "/Noir.png", aurora: "/Aurora.png" };

export default function Hero({ theme }) {
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
          <div className="orbit-chip c3"><i data-lucide="lock" /> App Lock built in</div>
        </div>
      </div>
    </section>
  );
}
