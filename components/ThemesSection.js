export default function ThemesSection({ theme, onPick }) {
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
