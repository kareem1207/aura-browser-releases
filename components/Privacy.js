const LAYERS = [
  ["search", "DNS-over-HTTPS", "ISP cannot see your lookups"],
  ["shield-ban", "Ghostery ad blocker", "108K+ rules, blocked locally"],
  ["fingerprint", "Fingerprint protection", "Canvas, WebGL, audio spoofed"],
  ["eye-off", "Tor Mode", "Real onion routing, built in"],
  ["shield-alert", "Breach monitor", "Checked against HaveIBeenPwned"],
  ["lock", "Site lock", "Master password on any site"],
  ["lock", "Hidden Spaces", "Master password on any Space"],
];
const POINTS = [
  ["We collect zero data", "No analytics, no telemetry, no usage tracking. What you browse is yours alone."],
  ["Everything runs locally", "Password vault, ad blocking, privacy engine — no cloud calls, no latency."],
  ["User-agent spoofing", "Blend in on your terms, site by site."],
  ["No ads. (We reduced amount of ads, if you found any you can report it)", "We don't sell your data, That's a promise from a solo developer, not a marketing slogan."],
];

export default function Privacy() {
  return (
    <section id="privacy" className="section alt">
      <div className="section-inner">
        <div style={{ textAlign: "center" }}>
          <div className="section-label io" style={{ marginInline: "auto" }}>Privacy</div>
          <h2 className="section-title io" style={{ marginInline: "auto" }}>Real privacy.<br /><em>Not a marketing promise.</em></h2>
          <p className="section-sub io" style={{ margin: "0 auto", textAlign: "center" }}>Active protection layers, running locally — nothing leaves your device.</p>
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
