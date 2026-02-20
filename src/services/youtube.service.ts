/**
 * Servicio para obtener videos de YouTube (playlist).
 * Usa YouTube Data API v3 (~1 unidad/día por llamada).
 */

import type { SocialVideo } from "@/types/social-carousel.types";
import type { YouTubePlaylistResponse } from "@/types/youtube.types";

const BASE = "https://www.googleapis.com/youtube/v3";

/** Obtiene los vídeos de una playlist de YouTube. */
export async function getPlaylistVideos(
  config: { apiKey: string; playlistId: string },
  maxResults = 10
): Promise<SocialVideo[]> {
  const { apiKey, playlistId } = config;
  if (!apiKey || !playlistId) {
    throw new Error(
      "YouTube: Falta PUBLIC_YOUTUBE_API_KEY o PUBLIC_YOUTUBE_PLAYLIST_ID en .env"
    );
  }

  const url = new URL(`${BASE}/playlistItems`);
  url.searchParams.set("part", "snippet");
  url.searchParams.set("maxResults", String(maxResults));
  url.searchParams.set("playlistId", playlistId);
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`YouTube API error: ${res.status} - ${err}`);
  }

  const data = (await res.json()) as YouTubePlaylistResponse;
  if (!data.items?.length) return [];

  return data.items
    .filter((item) => item.snippet?.resourceId?.videoId)
    .map((item) => {
      const videoId = item.snippet.resourceId!.videoId;
      return {
        thumbnail:
          item.snippet.thumbnails.maxres?.url ||
          item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          item.snippet.thumbnails.default?.url ||
          "",
        url: `https://www.youtube.com/watch?v=${videoId}`,
        videoId,
        title: item.snippet.title || "",
      };
    });
}
