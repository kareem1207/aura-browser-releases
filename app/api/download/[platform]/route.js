import { getLatestDownloads, PLATFORM_KEYS, RELEASES_PAGE } from "../../../../lib/releases";

export async function GET(request, { params }) {
  const { platform } = await params;

  if (!PLATFORM_KEYS.includes(platform)) {
    return Response.redirect(RELEASES_PAGE, 302);
  }

  const downloads = await getLatestDownloads();
  const target = downloads?.[platform]?.url;

  // If GitHub is down or the release is missing that platform's installer,
  // send people to the releases page instead of a broken file link.
  return Response.redirect(target ?? RELEASES_PAGE, 302);
}
