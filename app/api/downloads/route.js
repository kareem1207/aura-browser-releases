const ASSET_PATTERN = /\.(exe|AppImage|dmg|deb)$/i;

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/kareem1207/aura-browser-releases/releases",
      { next: { revalidate: 300 }, headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) return Response.json({ total: 0 });

    const releases = await res.json();
    const latest = Array.isArray(releases) ? releases[0] : null;
    const assets = latest?.assets ?? [];
    const total = assets
      .filter((a) => ASSET_PATTERN.test(a.name))
      .reduce((sum, a) => sum + (a.download_count || 0), 0);

    return Response.json({ total });
  } catch (e) {
    return Response.json({ total: 0 });
  }
}
