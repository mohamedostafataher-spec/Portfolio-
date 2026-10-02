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

  // YouTube matchers:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/shorts/VIDEO_ID
  // - https://www.youtube.com/embed/VIDEO_ID
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/;
  const ytMatch = cleanUrl.match(youtubeRegex);
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`,
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
