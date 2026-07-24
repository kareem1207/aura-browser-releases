import { getLatestDownloads } from "../../../lib/releases";

export async function GET() {
  const downloads = await getLatestDownloads();
  return Response.json(downloads ?? {});
}
