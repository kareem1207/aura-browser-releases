export const FEATURE_CATEGORIES = [
  {
    id: "browser-core",
    label: "Browser Core",
    items: [
      { icon: "layout-panel-left", name: "100+ tabs", desc: "Multi-tab browsing built for scale." },
      { icon: "folder-tree", name: "Tab groups", desc: "Collapsible sets to keep chaos contained." },
      { icon: "layers", name: "Spaces", desc: "Isolated browser profiles per context." },
      { icon: "columns-2", name: "Split view", desc: "Side-by-side tabs, no extra windows." },
      { icon: "layout-grid", name: "Snap layouts", desc: "Window and layout management that just works." },
      { icon: "search", name: "Smart address bar", desc: "Suggestions that actually help." },
      { icon: "bookmark", name: "Bookmarks bar", desc: "Folders included, obviously." },
      { icon: "history", name: "History", desc: "A real page, not a modal afterthought." },
      { icon: "download", name: "Downloads manager", desc: "See and control every download." },
      { icon: "search-check", name: "Find-in-page", desc: "Fast, unobtrusive in-page search." },
      { icon: "book-open", name: "Reading list", desc: "Save it for later, actually read it later." },
      { icon: "notebook-pen", name: "Notes panel", desc: "Jot it down without leaving the tab." },
      { icon: "highlighter", name: "Highlights manager", desc: "Every highlight, in one place." },
      { icon: "history", name: "Session recovery", desc: "Crash-proof. Pick up where you left off." },
      { icon: "hand", name: "Gesture support", desc: "Navigate with swipes, not just clicks." },
      { icon: "user-check", name: "Per-profile isolation", desc: "Each space keeps its own data." },
      { icon: "eye-off", name: "Hidden spaces", desc: "Some tabs are nobody's business." },
    ],
  },
  {
    id: "privacy-security",
    label: "Privacy & Security",
    items: [
      { icon: "key-round", name: "Password manager", desc: "Built-in vault with autofill." },
      { icon: "shield-alert", name: "Breach monitor", desc: "Checked against HaveIBeenPwned." },
      { icon: "fingerprint", name: "Fingerprint protection", desc: "Canvas, WebGL, audio spoofed." },
      { icon: "wifi-off", name: "ISP protection", desc: "Your provider doesn't need to know." },
      { icon: "shield-ban", name: "Ad blocker", desc: "Ghostery-powered, 108K+ rules." },
      { icon: "eye-off", name: "Tor Mode", desc: "Real onion routing, built in." },
      { icon: "glasses", name: "Incognito spaces", desc: "Private browsing, isolated by space." },
      { icon: "user-x", name: "User-agent spoofing", desc: "Blend in, on your terms." },
      { icon: "file-text", name: "Privacy report", desc: "See exactly what got blocked." },
      { icon: "lock", name: "Site lock", desc: "Master password on any site." },
      { icon: "shield-check", name: "DNS-over-HTTPS", desc: "Lookups your ISP can't read." },
    ],
  },
  {
    id: "ai",
    label: "AI Features",
    items: [
      { icon: "bot", name: "AI chat", desc: "Built-in, with full page context." },
      { icon: "sparkles", name: "Sazubu · Multi-AI", desc: "Use multiple AI providers, one place." },
      { icon: "workflow", name: "Autonomous task runner", desc: "Runs multi-step jobs on its own." },
      { icon: "languages", name: "Translation panel", tag: "Beta", desc: "Translate any page inline." },
      { icon: "shopping-cart", name: "Shopping Scout", desc: "Compares prices while you browse." },
      { icon: "message-circle", name: "Floating AI assistant", desc: "Always one click away." },
      {
        icon: "layout-dashboard", name: "Nexus", tag: "Beta",
        desc: "A built-in office suite — no other apps needed.",
        subItems: ["Word doc editor", "PDF viewer", "PowerPoint viewer", "Excel/spreadsheet editor", "OCR support", "File conversion tools"],
      },
    ],
  },
  {
    id: "games",
    label: "Games",
    items: [
      { icon: "gamepad-2", name: "Game engine", desc: "Built in, no extension required." },
      { icon: "zap", name: "Neon Rush", desc: "A built-in game, for when tabs load slow." },
    ],
  },
  {
    id: "developer",
    label: "Developer Tools",
    items: [
      { icon: "network", name: "Network inspector", desc: "See every request, clearly." },
      { icon: "cpu", name: "Memory diagnostics", desc: "Know exactly what's eating RAM." },
      { icon: "server", name: "Localhost dashboard", desc: "All your local servers, one view." },
      { icon: "send", name: "API client", desc: "A REST tester, no separate app." },
      { icon: "pen-tool", name: "Canvas mode", desc: "Annotation overlay on any page." },
      { icon: "palette", name: "Color palette extractor", desc: "Pull any page's palette instantly." },
      { icon: "type", name: "Font inspector", desc: "Identify any font on any site." },
      { icon: "layout-panel-top", name: "DevTools dock picker", desc: "Dock it wherever you think." },
      { icon: "box", name: "QuickJS sandbox", desc: "Run JS safely, isolated." },
    ],
  },
  {
    id: "productivity",
    label: "Productivity",
    items: [
      { icon: "party-popper", name: "Fun Mode", desc: "Easter eggs, because why not." },
      { icon: "message-square", name: "Feedback system", desc: "Tell us what's missing, built in." },
      { icon: "arrow-left-right", name: "Browser migration", desc: "Import from Chrome, Edge, or Brave." },
      { icon: "graduation-cap", name: "Tutorial system", desc: "Learn Aura without leaving Aura." },
      { icon: "database", name: "Local storage migration", desc: "Bring your data, keep it local." },
    ],
  },
];

export const APP_LOCK_FEATURE = {
  icon: "lock",
  name: "App Lock",
  desc: "Install any site as an app, then add a site lock with a master password — combined, that's a full app lock for anything you use every day.",
};

export const TOTAL_FEATURE_COUNT = FEATURE_CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0) + 1;
