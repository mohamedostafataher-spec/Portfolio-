/**
 * Video Helper Utility
 * Parses YouTube, Vimeo, Streamable, Dropbox, Google Drive, and direct video URLs (MP4/WebM/Blob).
 */

export interface VideoInfo {
  type: 'youtube' | 'vimeo' | 'streamable' | 'direct' | 'drive';
  embedUrl: string;
  isDirect: boolean;
}

export function parseVideoUrl(url?: string): VideoInfo | null {
  if (!url || typeof url !== 'string' || !url.trim()) {
    return null;
  }

  const cleanUrl = url.trim();

  // Robust YouTube ID extraction
  let ytId: string | null = null;

  const youtuBeMatch = cleanUrl.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (youtuBeMatch && youtuBeMatch[1]) {
    ytId = youtuBeMatch[1];
  }

  if (!ytId) {
    const watchMatch = cleanUrl.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch && watchMatch[1]) {
      ytId = watchMatch[1];
    }
  }

  if (!ytId) {
    const shortsMatch = cleanUrl.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch && shortsMatch[1]) {
      ytId = shortsMatch[1];
    }
  }

  if (!ytId) {
    const embedMatch = cleanUrl.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    if (embedMatch && embedMatch[1]) {
      ytId = embedMatch[1];
    }
  }

  if (ytId) {
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`,
      isDirect: false,
    };
  }

  // Vimeo matcher:
  // - https://vimeo.com/VIDEO_ID
  const vimeoRegex = /(?:vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|))(\d+)/;
  const vimeoMatch = cleanUrl.match(vimeoRegex);
  if (vimeoMatch && vimeoMatch[3]) {
    return {
      type: 'vimeo',
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[3]}?autoplay=1`,
      isDirect: false,
    };
  }

  // Streamable matcher:
  // - https://streamable.com/CODE
  const streamableMatch = cleanUrl.match(/streamable\.com\/([a-zA-Z0-9]+)/);
  if (streamableMatch && streamableMatch[1]) {
    return {
      type: 'streamable',
      embedUrl: `https://streamable.com/e/${streamableMatch[1]}?autoplay=1`,
      isDirect: false,
    };
  }

  // Dropbox direct streaming replacement (?dl=0 -> ?raw=1)
  if (cleanUrl.includes('dropbox.com/')) {
    const rawUrl = cleanUrl.replace(/[?&]dl=0/, '').replace(/[?&]raw=1/, '') + '?raw=1';
    return {
      type: 'direct',
      embedUrl: rawUrl,
      isDirect: true,
    };
  }

  // Google Drive preview matcher
  if (cleanUrl.includes('drive.google.com')) {
    const fileIdMatch =
      cleanUrl.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) ||
      cleanUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return {
        type: 'drive',
        embedUrl: `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`,
        isDirect: false,
      };
    }
  }

  // Direct video file (Cloudinary, Bunny.net, MP4, WebM, OGG, MOV, blob:, data:video/)
  return {
    type: 'direct',
    embedUrl: cleanUrl,
    isDirect: true,
  };
}
