export default function AppLockSpotlight() {
  const pillStyle = { padding: "6px 10px", border: "1px solid var(--border)", borderRadius: 8, color: "var(--text-2)" };
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label io">App Lock</div>
        <h2 className="section-title io">One switch.<br /><em>A locked-down app.</em></h2>
        <p className="section-sub io">Install any site as an app, then add a site lock. Combined, that's a full app lock — no separate tool needed.</p>
        <div className="split io">
          <div className="terminal">
            <div className="t-bar">
              <div className="dots"><span className="r" /><span className="a" /><span className="g" /></div>
              <div className="title">~ — aura</div>
            </div>
            <div className="t-body">
              <span className="t-line"><span className="prompt">$</span> aura install-app https://mail.example.com</span>
              <span className="t-line"><span className="ok">→</span> installed as app <span className="em">·</span> icon added to dock</span>
              <span className="t-line"><span className="prompt">$</span> aura lock mail.example.com</span>
              <span className="t-line"><span className="ok">✓</span> master password set <span className="em">·</span> App Lock active</span>
              <span className="t-line"><span className="prompt">$</span> <span className="t-cursor" /></span>
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "var(--font-display-style)", fontWeight: "var(--font-display-weight)", fontSize: 32, letterSpacing: "-.02em", color: "var(--text)", marginBottom: 14 }}>Any site. <em style={{ color: "var(--accent)" }}>Locked down.</em></h3>
            <p style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.6, maxWidth: 440 }}>Install any site as its own app — mail, banking, work tools — then add a site lock with a master password. Together, that's a full app lock: its own icon, its own window, and nobody gets in without the password.</p>
            <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: 11.5 }}>
              <span style={pillStyle} className="applock-pill">One-click install</span>
              <span style={pillStyle} className="applock-pill">Master password</span>
              <span style={pillStyle} className="applock-pill">Per-app isolation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
