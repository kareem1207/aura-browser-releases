"use client";
import { useEffect, useState } from "react";
import { FEATURE_CATEGORIES } from "./featuresData";
import { renderIcons } from "../lib/icons";

export default function Features() {
  const [activeCategory, setActiveCategory] = useState(FEATURE_CATEGORIES[0].id);
  const active = FEATURE_CATEGORIES.find((c) => c.id === activeCategory) || FEATURE_CATEGORIES[0];

  useEffect(() => {
    renderIcons();
  }, [activeCategory]);

  return (
    <section id="features" className="section alt">
      <div className="section-inner">
        <div className="section-label io">Features</div>
        <h2 className="section-title io">Not just a browser.<br /><em>A workspace OS.</em></h2>
        <p className="section-sub io">{FEATURE_CATEGORIES.reduce((n, c) => n + c.items.length, 0)}+ features across the shell. Nothing here is filler.</p>

        <div className="feature-tabs io" role="tablist" aria-label="Feature category">
          {FEATURE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={"feature-tab" + (activeCategory === cat.id ? " active" : "")}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="feature-mini-grid">
          {active.items.map((f, i) => (
            <article key={active.id + i} className="feature-card-mini r">
              <div className="fmi-icon"><i data-lucide={f.icon} /></div>
              <div className="fmi-name">
                {f.name}
                {f.tag && <span className="ftag" style={{ marginBottom: 0 }}>{f.tag}</span>}
              </div>
              <p className="fmi-desc">{f.desc}</p>
              {f.subItems && (
                <div className="fmi-subitems">{f.subItems.join(" · ")}</div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
