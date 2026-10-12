import React, { useRef, useEffect, useState } from 'react';
import {
  X,
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  ExternalLink,
  FileText,
  ChevronLeft,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { Project } from '../types';
import { parseVideoUrl } from '../utils/videoHelper';

interface VideoTheatreModalProps {
  video: {
    title: string;
    clientOrSpec?: string;
    category: string;
    videoUrl: string;
    driveUrl?: string;
    duration?: string;
    project?: Project;
  } | null;
  onClose: () => void;
  onOpenProjectDetails?: (project: Project) => void;
  isAr: boolean;
}

export const VideoTheatreModal: React.FC<VideoTheatreModalProps> = ({
  video,
  onClose,
  onOpenProjectDetails,
  isAr,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Reset video index whenever video object changes
  useEffect(() => {
    setVideoIndex(0);
  }, [video?.videoUrl, video?.title]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  // Combine main videoUrl with galleryVideos if available
  const allVideos: Array<{ title: string; url: string; category?: string }> = [
    { title: video.title, url: video.videoUrl, category: video.category || 'Commercial Video' },
    ...(video.project?.galleryVideos || []),
  ];

  const safeIndex =
    videoIndex >= 0 && videoIndex < allVideos.length ? videoIndex : 0;
  const currentVideo = allVideos[safeIndex] || {
    title: video.title,
    url: video.videoUrl,
    category: video.category || 'Commercial Video',
  };

  const videoInfo = parseVideoUrl(currentVideo.url);
  const isYouTube = videoInfo?.type === 'youtube';

  const nextVideo = () =>
    setVideoIndex((prev) => (prev + 1) % allVideos.length);
  const prevVideo = () =>
    setVideoIndex((prev) => (prev - 1 + allVideos.length) % allVideos.length);

  useEffect(() => {
    setIsPlaying(true);
    setAutoplayBlocked(false);

    if (videoRef.current && videoInfo?.isDirect && currentVideo?.url) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
        })
        .catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
                setAutoplayBlocked(false);
              })
              .catch(() => {
                setAutoplayBlocked(true);
                setIsPlaying(false);
              });
          }
        });
    }
  }, [currentVideo?.url, safeIndex, videoInfo?.isDirect]);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
        })
        .catch(() => {
          setIsPlaying(true);
        });
    }
  };

  const isVertical =
    video.project?.aspectRatio === '9:16' ||
    currentVideo.url.includes('shorts') ||
    currentVideo.url.includes('baba_geh') ||
    currentVideo.url.includes('takaa_capcut') ||
    currentVideo.url.includes('takaa_ai_commercial');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn">
      {/* Background Overlay */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="relative w-full max-w-5xl bg-[#0c0c10] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[95vh]">
        {/* Top Header Bar */}
        <div className="px-4 sm:px-6 py-3 bg-zinc-950/90 border-b border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] sm:text-xs font-mono text-amber-400 font-bold uppercase tracking-wider truncate">
                {currentVideo.category || video.category || 'Commercial Video'}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {currentVideo.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Open directly on YouTube if it's a YouTube video */}
            {isYouTube && (
              <a
                href={currentVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md"
                title={isAr ? 'فتح في تطبيق أو موقع يوتيوب' : 'Open in YouTube'}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isAr ? 'فتح على YouTube' : 'Watch on YouTube'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {/* Google Drive Link */}
            {video.driveUrl && (
              <a
                href={video.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 font-mono text-xs font-bold items-center gap-1.5 transition-colors"
                title="Google Drive Archive"
              >
                <span>Drive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-zinc-900 hover:bg-amber-500 hover:text-black text-zinc-300 border border-white/10 transition-all cursor-pointer"
              aria-label="Close video"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video switcher row if project has multiple video cuts */}
        {allVideos.length > 1 && (
          <div className="px-4 py-2 bg-zinc-950 border-b border-white/5 flex items-center gap-2 overflow-x-auto">
            <span className="text-[10px] font-mono text-zinc-500 uppercase shrink-0">
              {isAr ? 'المقاطع المتوفرة:' : 'Video Cuts:'}
            </span>
            {allVideos.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setVideoIndex(idx)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  idx === safeIndex
                    ? 'bg-amber-500 text-black font-bold shadow-md'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/5'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        )}

        {/* Video Player Center Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden p-2 sm:p-4 min-h-[300px] sm:min-h-[460px] max-h-[68vh]">
          {isYouTube && videoInfo?.embedUrl ? (
            <div
              className={`w-full h-full flex items-center justify-center ${
                isVertical
                  ? 'max-w-[340px] aspect-[9/16]'
                  : 'aspect-video max-w-4xl'
              }`}
            >
              <iframe
                src={videoInfo.embedUrl}
                title={currentVideo.title}
                className="w-full h-full rounded-xl border border-white/10 shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : videoInfo?.isDirect ? (
            <div
              className={`relative w-full h-full flex items-center justify-center ${
                isVertical
                  ? 'max-w-[340px] aspect-[9/16]'
                  : 'aspect-video max-w-4xl'
              }`}
            >
              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-contain rounded-xl bg-black"
                onPlay={() => {
                  setIsPlaying(true);
                  setAutoplayBlocked(false);
                }}
                onPause={() => setIsPlaying(false)}
              >
                <source src={currentVideo.url} type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>

              {/* Prev / Next navigation overlay if multiple clips */}
              {allVideos.length > 1 && (
                <>
                  <button
                    onClick={prevVideo}
                    className="absolute left-2 sm:left-4 p-2 sm:p-3 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black z-20 backdrop-blur-sm transition-all cursor-pointer"
                    title="Previous Video"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute right-2 sm:right-4 p-2 sm:p-3 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black z-20 backdrop-blur-sm transition-all cursor-pointer"
                    title="Next Video"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Autoplay blocked banner / click to play */}
              {autoplayBlocked && (
                <div
                  onClick={handleManualPlay}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-20 gap-3"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="text-white text-sm font-bold font-mono">
                    {isAr ? 'اضغط لتشغيل الفيديو بالصوت' : 'Click to Play with Sound'}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full aspect-video flex flex-col items-center justify-center text-zinc-400 gap-4 p-8 text-center">
              <p>
                {isAr
                  ? 'جاري فتح الفيديو من الرابط المعتمد'
                  : 'Loading video stream from source...'}
              </p>
              <a
                href={currentVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-amber-500 text-black font-bold text-xs"
              >
                {isAr ? 'فتح الفيديو مباشرة' : 'Open Video Directly'}
              </a>
            </div>
          )}
        </div>

        {/* Bottom Bar: Quick Project Dossier Opener & Metadata */}
        <div className="px-4 sm:px-6 py-3 bg-zinc-950/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            {video.duration && (
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-amber-400 font-bold">
                {video.duration}
              </span>
            )}
            <span className="hidden sm:inline">
              {isAr
                ? 'إنتاج ومونتاج: محمد مصطفى طاهر سالم'
                : 'Commercial Edit & Production: Mohamed Mostafa Taher Salem'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {video.project && onOpenProjectDetails && (
              <button
                onClick={() => {
                  onClose();
                  onOpenProjectDetails(video.project!);
                }}
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-amber-500 hover:text-black text-zinc-200 border border-white/10 text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>
                  {isAr
                    ? 'فتح ملف المشروع بالكامل (الاستراتيجية والكاروسيل)'
                    : 'Open Full Project Dossier'}
                </span>
              </button>
            )}

            {isYouTube && (
              <a
                href={currentVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isAr ? 'مشاهدة على YouTube' : 'Open YouTube'}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
