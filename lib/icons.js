export function renderIcons() {
  if (typeof window !== "undefined" && window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons({ attrs: { "stroke-width": 1.75, width: "1em", height: "1em" } });
  }
}
