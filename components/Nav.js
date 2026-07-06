const THEMES = ["frost", "noir", "aurora"];

export default function Nav({ theme, onPick }) {
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
