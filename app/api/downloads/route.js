const ASSET_PATTERN = /\.(exe|AppImage|dmg|deb)$/i;
// Downloads from a release that was since deleted from GitHub and can no longer be counted via the API.
const DELETED_RELEASE_DOWNLOADS = 50;

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/kareem1207/aura-browser-releases/releases?per_page=100",
      { next: { revalidate: 300 }, headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) return Response.json({ total: 0 });

    const releases = await res.json();
    const list = Array.isArray(releases) ? releases : [];
    const total = list
      .flatMap((r) => r.assets ?? [])
      .filter((a) => ASSET_PATTERN.test(a.name))
      .reduce((sum, a) => sum + (a.download_count || 0), DELETED_RELEASE_DOWNLOADS);

    return Response.json({ total });
  } catch (e) {
    return Response.json({ total: 0 });
  }
}
