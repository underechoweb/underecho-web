/**
 * Tipos para YouTube Data API v3 (playlistItems).
 */

export interface YouTubePlaylistItem {
  id       : string;
  snippet  : {
    title      : string;
    thumbnails : {
      default? : { url: string };
      medium?  : { url: string };
      high?    : { url: string };
      maxres?  : { url: string };
    };
    resourceId? : { videoId: string };
  };
}

export interface YouTubePlaylistResponse {
  items         : YouTubePlaylistItem[];
  nextPageToken?: string;
}
