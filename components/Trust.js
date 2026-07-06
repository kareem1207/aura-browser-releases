const TRUST = [
  ["shield", "DNS-over-HTTPS"], ["key-round", "Password manager"],
  ["fingerprint", "Fingerprint protection"], ["globe", "Built on Chromium"],
  ["eye-off", "Tor Mode"], ["bot", "Built-in AI chat"],
  ["shield-ban", "108K+ ad-block rules"], ["zap", "<1s cold start"],
];

export default function Trust() {
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
