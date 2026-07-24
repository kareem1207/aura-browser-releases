const REPO = "kareem1207/aura-browser-releases";

export const RELEASES_PAGE = `https://github.com/${REPO}/releases/latest`;
const RELEASES_API = `https://api.github.com/repos/${REPO}/releases?per_page=100`;

// electron-builder stamps the version into every artifact name (the nsis
// artifactName is `${name}-${version}-setup.${ext}`), so there is no stable
// filename to hardcode — not even via /releases/latest/download/<file>. Assets
// are resolved from the releases API at request time instead, which also
// survives the naming changes this repo has been through (aura_win.exe,
// aura-1.0.0-setup-win.exe, aura-1.1.1-setup.exe).
const PLATFORMS = {
  windows: /\.exe$/i,
  macos: /\.dmg$/i,
  linux: /\.AppImage$/i,
  "linux-deb": /\.deb$/i,
};

export const PLATFORM_KEYS = Object.keys(PLATFORMS);

function versionOf(name) {
  const m = name.match(/(\d+)\.(\d+)\.(\d+)/);
  return m ? m.slice(1, 4).map(Number) : [0, 0, 0];
}

// A single release can hold several builds for one platform: the repo reuses
// the `latest` tag and uploads new installers beside the old ones, so `latest`
// currently carries both aura-1.1.0-setup.exe and aura-1.1.1-setup.exe.
function newest(assets) {
  return assets
    .slice()
    .sort((a, b) => {
      const [av, bv] = [versionOf(a.name), versionOf(b.name)];
      for (let i = 0; i < 3; i++) if (av[i] !== bv[i]) return bv[i] - av[i];
      return new Date(b.created_at) - new Date(a.created_at);
    })[0];
}

/**
 * Picks the newest installer per platform, given releases newest-first.
 *
 * Anchored on the current stable release, then walking back for any platform
 * that release doesn't ship — Aura pushes Windows-only updates (1.1.0 and
 * 1.1.1 landed while mac/linux stayed at 1.0.0), so a Windows-only release
 * must not blank out the mac and linux buttons. Walking back only for the
 * *missing* platforms is what keeps a stale high version in an old
 * pre-release (aura-9.0.0-setup.exe) from outranking the real Windows build.
 *
 * Exported for testing.
 */
export function resolveDownloads(releases) {
  const stable = releases.filter((r) => !r.prerelease && !r.draft);
  const downloads = {};

  for (const [platform, pattern] of Object.entries(PLATFORMS)) {
    for (const release of stable) {
      const assets = (release.assets ?? []).filter((a) => pattern.test(a.name));
      const asset = newest(assets);
      if (!asset) continue;

      const [major, minor, patch] = versionOf(asset.name);
      downloads[platform] = {
        url: asset.browser_download_url,
        file: asset.name,
        version: major || minor || patch ? `${major}.${minor}.${patch}` : null,
      };
      break;
    }
  }
  return downloads;
}

/**
 * Returns null when GitHub is unreachable or rate-limits us, so callers can
 * fall back to the releases page rather than serving a dead link.
 */
export async function getLatestDownloads() {
  try {
    const res = await fetch(RELEASES_API, {
      next: { revalidate: 300 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;

    const releases = await res.json();
    if (!Array.isArray(releases)) return null;

    return resolveDownloads(releases);
  } catch (e) {
    return null;
  }
}
