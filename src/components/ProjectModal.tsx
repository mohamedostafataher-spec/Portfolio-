import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  FolderOpen,
  CheckCircle2,
  Lightbulb,
  UserCheck,
  Briefcase,
  Wrench,
  Tv,
  Smartphone,
  Presentation,
  Music,
  Volume2,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { Project } from '../types';
import { parseVideoUrl } from '../utils/videoHelper';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  allProjects?: Project[];
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
  onOpenContact: (projectTitle?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  allProjects = [],
  onClose,
  onSelectProject,
  onOpenContact,
}) => {
  const { isAr } = useLanguage();
  const [displayFormat, setDisplayFormat] = useState<'landscape' | 'vertical'>('landscape');
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [showDeepDiveDeck, setShowDeepDiveDeck] = useState<boolean>(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [modalSlideIndex, setModalSlideIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalScrollRef = useRef<HTMLDivElement | null>(null);

  const currentIndex = project ? allProjects.findIndex((p) => p.id === project.id) : -1;
  const hasNext = currentIndex !== -1 && currentIndex < allProjects.length - 1;
  const hasPrev = currentIndex !== -1 && currentIndex > 0;

  const nextProject = hasNext ? allProjects[currentIndex + 1] : null;
  const prevProject = hasPrev ? allProjects[currentIndex - 1] : null;

  const handleNext = () => {
    if (hasNext && onSelectProject && nextProject) {
      onSelectProject(nextProject);
      if (modalScrollRef.current) {
        modalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    if (hasPrev && onSelectProject && prevProject) {
      onSelectProject(prevProject);
      if (modalScrollRef.current) {
        modalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Keyboard navigation: Left / Right arrows & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        if (isAr) {
          if (hasPrev) handlePrev();
        } else {
          if (hasNext) handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        if (isAr) {
          if (hasNext) handleNext();
        } else {
          if (hasPrev) handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasNext, hasPrev, isAr, onClose, nextProject, prevProject]);

  const videoUrlToUse = project?.videoUrl || project?.videoPreviewUrl;
  const videoInfo = parseVideoUrl(videoUrlToUse);

  useEffect(() => {
    setIsPaused(true);
    setCurrentSlideIndex(0);
    setModalSlideIndex(0);
    setShowDeepDiveDeck(false);
    setDisplayFormat(project?.aspectRatio === '9:16' ? 'vertical' : 'landscape');

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop = 0;
    }
  }, [project]);

  if (!project) return null;

  // Derive fallbacks for 4-6 bullet points
  const bulletsToDisplay =
    project.whatIDid && project.whatIDid.length > 0
      ? project.whatIDid
      : [
          project.objective || 'تحديد الأهداف التسويقية وتحليل الشريحة المستهدفة.',
          project.concept || 'ابتكار الفكرة الإبداعية وصياغة الرسائل الإعلانية.',
          project.myRole || 'التوجيه الإبداعي وهندسة الإخراج والمونتاج.',
          project.finalResult || 'إنهاء الحملة وتسليم المواد الإعلانية بجاهزية تامة للنشر.',
        ];

  // Derive tools & skills (5-7 skills)
  const combinedSkillsAndTools = Array.from(
    new Set([...(project.tools || []), ...(project.skills || [])])
  ).slice(0, 7);

  const driveUrl =
    project.driveFolderUrl ||
    'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Background Overlay */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      <div
        ref={modalScrollRef}
        className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto bg-[#0d0d12] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl z-10 text-left my-auto selection:bg-amber-500 selection:text-black"
      >
        {/* ========================================================= */}
        {/* STICKY TOP BAR: FAST NAVIGATION & CLOSE */}
        {/* ========================================================= */}
        <div className="sticky top-0 z-30 px-4 sm:px-6 py-3 bg-[#0d0d12]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-3">
          {/* Left: Project Type & Drive Badge */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 truncate">
              {project.projectType || project.clientOrSpec || 'Spec / Concept'}
            </span>

            {currentIndex !== -1 && (
              <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                ({currentIndex + 1} / {allProjects.length})
              </span>
            )}
          </div>

          {/* Right: Quick Previous / Next & Close */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className="px-2.5 sm:px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300 hover:text-white border border-white/10 text-xs font-mono font-bold flex items-center gap-1 transition-all cursor-pointer"
              title={isAr ? 'المشروع السابق (سهم يسار)' : 'Previous Project (Left Arrow)'}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">{isAr ? 'السابق' : 'PREV'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!hasNext}
              className="px-2.5 sm:px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300 hover:text-white border border-white/10 text-xs font-mono font-bold flex items-center gap-1 transition-all cursor-pointer"
              title={isAr ? 'المشروع التالي (سهم يمين)' : 'Next Project (Right Arrow)'}
            >
              <span className="hidden md:inline">{isAr ? 'التالي' : 'NEXT'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/20 text-xs font-mono font-bold flex items-center gap-1 transition-colors"
              title="Open Google Drive Folder"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Drive</span>
              <ExternalLink className="w-3 h-3 hidden sm:inline opacity-70" />
            </a>

            <button
              onClick={onClose}
              id="close-project-modal"
              className="p-1.5 sm:p-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black border border-amber-400 transition-all cursor-pointer shadow-md"
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN BODY: THE USER'S EXACT SPECIFIED STRUCTURE */}
        {/* ========================================================= */}
        <div className="p-4 sm:p-8 md:p-10 space-y-8">
          {/* 1. PROJECT TITLE & SHORT SUBTITLE */}
          <div className="space-y-2 border-b border-white/5 pb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex-wrap">
              <span>PROJECT SHOWCASE</span>
              <span>•</span>
              <span>{project.category}</span>
              {(project.duration || project.durationAr) && (
                <>
                  <span>•</span>
                  <span className="text-white bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                    {isAr ? (project.durationAr || project.duration) : project.duration}
                  </span>
                </>
              )}
            </div>

            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              {project.subtitle || project.tagline || project.description}
            </p>
          </div>

          {/* 2. CONTEXTUAL MEDIA & DELIVERABLE SHOWCASE */}
          <div className="space-y-4">
            {/* Header with Format and Action Badges */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                {videoInfo ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>FINAL COMMERCIAL VIDEO</span>
                  </>
                ) : project.galleryImages && project.galleryImages.length > 1 ? (
                  <>
                    <Layers className="w-3.5 h-3.5" />
                    <span>INTERACTIVE CAROUSEL SLIDES</span>
                  </>
                ) : (
                  <>
                    <Presentation className="w-3.5 h-3.5" />
                    <span>STRATEGY & DELIVERABLE DECK</span>
                  </>
                )}

                {videoInfo?.type === 'youtube' && (
                  <span className="px-2 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] flex items-center gap-1">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>YouTube HD</span>
                  </span>
                )}

                {project.id === 'buffalo-burger-commercial' && (
                  <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold text-[10px]">
                    YouTube Shorts (Primary)
                  </span>
                )}
              </div>

              {/* Aspect Ratio Toggle (Landscape / Vertical) if Video */}
              {videoInfo && (
                <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-900 border border-white/10 text-xs">
                  <button
                    onClick={() => setDisplayFormat('landscape')}
                    title="16:9 Landscape"
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      displayFormat === 'landscape'
                        ? 'bg-amber-500 text-black font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Tv className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDisplayFormat('vertical')}
                    title="9:16 Vertical Reel"
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      displayFormat === 'vertical'
                        ? 'bg-amber-500 text-black font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Media Box: Video, Carousel Slider, or Strategy Slide */}
            <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center">
              {videoInfo ? (
                /* Video Player */
                <div
                  className={`w-full relative transition-all duration-300 ${
                    displayFormat === 'vertical'
                      ? 'max-w-[280px] xs:max-w-sm mx-auto aspect-[9/16] py-2'
                      : 'aspect-video max-h-[520px]'
                  }`}
                >
                  {videoInfo.isDirect ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <video
                        ref={videoRef}
                        controls
                        playsInline
                        preload="metadata"
                        poster={project.image}
                        onPlay={() => setIsPaused(false)}
                        onPause={() => setIsPaused(true)}
                        className="w-full h-full object-contain rounded-xl bg-black"
                      >
                        <source src={videoInfo.embedUrl} type="video/mp4" />
                        Your browser does not support video playback.
                      </video>
                      {isPaused && (
                        <button
                          onClick={() => {
                            if (videoRef.current) {
                              videoRef.current.play().catch(() => {});
                              setIsPaused(false);
                            }
                          }}
                          className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110 z-20 cursor-pointer pointer-events-auto"
                          aria-label="Play video"
                        >
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <iframe
                      src={videoInfo.embedUrl}
                      title={project.title}
                      className="w-full h-full border-0 rounded-xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}
                </div>
              ) : project.galleryImages && project.galleryImages.length > 1 ? (
                /* Interactive Multi-Image Carousel Slider */
                (() => {
                  const images = Array.from(new Set([project.image, ...project.galleryImages]));
                  const activeImg = images[modalSlideIndex] || project.image;
                  return (
                    <div className="relative w-full aspect-[16/10] sm:aspect-video max-h-[500px] bg-zinc-950 flex flex-col justify-between overflow-hidden">
                      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                        <img
                          src={activeImg}
                          alt={`${project.title} Slide ${modalSlideIndex + 1}`}
                          className="w-full h-full object-contain"
                        />

                        {/* Slider Prev / Next Controls */}
                        <button
                          onClick={() =>
                            setModalSlideIndex((prev) =>
                              prev === 0 ? images.length - 1 : prev - 1
                            )
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all cursor-pointer shadow-xl z-20"
                          title="Previous Slide"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                          onClick={() =>
                            setModalSlideIndex((prev) => (prev + 1) % images.length)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all cursor-pointer shadow-xl z-20"
                          title="Next Slide"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Carousel Thumbnail Strip & Counter */}
                      <div className="p-3 bg-black/80 border-t border-white/10 flex items-center justify-between gap-3">
                        <span className="text-xs font-mono text-amber-400 font-bold">
                          {isAr
                            ? `شريحة ${modalSlideIndex + 1} من ${images.length}`
                            : `Slide ${modalSlideIndex + 1} of ${images.length}`}
                        </span>

                        <div className="flex items-center gap-2 overflow-x-auto">
                          {images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setModalSlideIndex(idx)}
                              className={`w-12 h-8 rounded-md overflow-hidden border transition-all cursor-pointer ${
                                idx === modalSlideIndex
                                  ? 'border-amber-400 scale-105'
                                  : 'border-white/10 opacity-50 hover:opacity-100'
                              }`}
                            >
                              <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()
              ) : (
                /* Static High-Res Visual / Slide Preview */
                <div className="relative w-full aspect-video max-h-[460px] overflow-hidden bg-zinc-950 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                    <span className="px-3 py-1 rounded-lg bg-black/80 border border-white/10 font-mono text-amber-400">
                      {project.category}
                    </span>
                    {project.deckSlides && project.deckSlides.length > 0 && (
                      <button
                        onClick={() => setShowDeepDiveDeck(true)}
                        className="px-3 py-1.5 rounded-lg bg-amber-500 text-black font-bold flex items-center gap-1.5 cursor-pointer hover:bg-amber-400 transition-colors"
                      >
                        <Presentation className="w-3.5 h-3.5" />
                        <span>{isAr ? 'تصفح شرائح العرض' : 'Inspect Presentation'}</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Media Action Bar with Prominent YouTube & Secondary Drive */}
            <div className="flex items-center justify-between flex-wrap gap-3 pt-1 text-xs">
              <span className="font-mono text-[11px] text-zinc-400">
                {videoInfo
                  ? displayFormat === 'landscape'
                    ? '16:9 Landscape Commercial'
                    : '9:16 Vertical Reel'
                  : project.galleryImages && project.galleryImages.length > 1
                  ? `${project.galleryImages.length} Carousel Slides`
                  : project.category}
              </span>

              <div className="flex items-center gap-3">
                {/* Dedicated YouTube Link (Buffalo Burger & Breadfast) */}
                {project.videoUrl && project.videoUrl.includes('youtu') && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-red-600/20 transition-all hover:scale-105"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{isAr ? 'شاهد على يوتيوب شورتس' : 'Watch on YouTube Shorts'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {/* Google Drive Link (Secondary Backup) */}
                <a
                  href={driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-white/10 font-mono text-xs flex items-center gap-1.5 transition-colors"
                  title="Google Drive Archive (Backup)"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? 'مجلد Drive (إضافي)' : 'Drive (Backup)'}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* 3. THE IDEA / CONCEPT (2–3 lines فقط) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>THE IDEA / CONCEPT</span>
            </div>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans">
              {project.concept || project.description}
            </p>
          </div>

          {/* 4. MY ROLE */}
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
              <UserCheck className="w-4 h-4" />
              <span>MY ROLE</span>
            </div>
            <p className="text-sm sm:text-base text-white font-semibold leading-relaxed">
              {project.myRole || 'Creative Direction, Video Editing & Motion Graphics'}
            </p>
          </div>

          {/* 5. WHAT I DID (4–6 bullet points) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>WHAT I DID</span>
            </div>

            <div className="space-y-2.5">
              {bulletsToDisplay.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold font-mono">0{bIdx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. PROJECT TYPE */}
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>PROJECT TYPE</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3.5 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold font-mono">
                {project.projectType || project.clientOrSpec || 'Spec / Concept / Personal Project'}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                • {project.clientOrSpec}
              </span>
            </div>
          </div>

          {/* 7. TOOLS & SKILLS (5–7 skills) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>TOOLS & SKILLS</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {combinedSkillsAndTools.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-zinc-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Optional Audio Track (if present) */}
          {project.audioUrl && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900/80 to-zinc-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center shrink-0 shadow-lg">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-amber-400 font-bold flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Commercial Voiceover Audio</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                    {project.audioTitle || (isAr ? 'التسجيل الصوتي الرسمي' : 'Official Audio Track')}
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-64 shrink-0">
                <audio controls className="w-full h-9 rounded-lg" src={project.audioUrl}>
                  Your browser does not support audio.
                </audio>
              </div>
            </div>
          )}

          {/* Optional Strategy Deck Slides Viewer (Expandable) */}
          {project.deckSlides && project.deckSlides.length > 0 && (
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950">
              <button
                onClick={() => setShowDeepDiveDeck(!showDeepDiveDeck)}
                className="w-full px-5 py-4 flex items-center justify-between text-left bg-zinc-900/60 hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
                  <Presentation className="w-4 h-4" />
                  <span>
                    {isAr ? 'عرض شرائح الاستراتيجية التقديمية' : 'Strategy Deck Slides'} (
                    {project.deckSlides.length} Slides)
                  </span>
                </div>
                <span className="text-xs text-zinc-400 font-mono">
                  {showDeepDiveDeck ? '▲ إخفاء' : '▼ استعراض الشرائح'}
                </span>
              </button>

              {showDeepDiveDeck && (
                <div className="p-4 sm:p-6 border-t border-white/10 space-y-4">
                  {(() => {
                    const slide = project.deckSlides[currentSlideIndex];
                    return (
                      <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                          <span className="text-amber-400 font-bold">
                            SLIDE {slide.slideNumber} / {project.deckSlides.length}
                          </span>
                          <span>{slide.category}</span>
                        </div>

                        <h3 className="text-lg sm:text-2xl font-bold text-white">
                          {slide.title}
                        </h3>

                        <div className="space-y-2">
                          {slide.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                              <span className="text-amber-400 font-bold">•</span>
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>

                        {/* Slide Navigation */}
                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                          <button
                            onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                            disabled={currentSlideIndex === 0}
                            className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 text-white text-xs font-mono cursor-pointer"
                          >
                            ← Prev Slide
                          </button>
                          <span className="text-xs font-mono text-zinc-500">
                            {currentSlideIndex + 1} of {project.deckSlides.length}
                          </span>
                          <button
                            onClick={() =>
                              setCurrentSlideIndex((prev) =>
                                Math.min(project.deckSlides!.length - 1, prev + 1)
                              )
                            }
                            disabled={currentSlideIndex === project.deckSlides.length - 1}
                            className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 text-white text-xs font-mono cursor-pointer"
                          >
                            Next Slide →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* 8. FAST NEXT / PREVIOUS PROJECT NAVIGATION FOOTER */}
          {/* ========================================================= */}
          <div className="pt-8 border-t border-white/10 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* PREVIOUS PROJECT BUTTON */}
              <button
                onClick={handlePrev}
                disabled={!hasPrev}
                className="w-full p-4 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed border border-white/10 text-left transition-all cursor-pointer group flex items-center justify-between gap-3 shadow-lg"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-amber-400 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                      {isAr ? 'المشروع السابق' : '← PREVIOUS PROJECT'}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate block">
                      {prevProject ? prevProject.title : (isAr ? 'بداية القائمة' : 'Start of list')}
                    </span>
                  </div>
                </div>
              </button>

              {/* NEXT PROJECT BUTTON [ NEXT PROJECT → ] */}
              <button
                onClick={handleNext}
                disabled={!hasNext}
                className="w-full p-4 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 disabled:opacity-40 disabled:cursor-not-allowed border border-amber-500/30 text-left transition-all cursor-pointer group flex items-center justify-between gap-3 shadow-lg"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-amber-400 uppercase block font-bold">
                      {isAr ? 'المشروع التالي →' : 'NEXT PROJECT →'}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate block">
                      {nextProject ? nextProject.title : (isAr ? 'نهاية القائمة' : 'End of list')}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center shrink-0 shadow-md">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </button>
            </div>

            {/* Bottom Contact & Drive Banner */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <FolderOpen className="w-4 h-4 text-amber-400" />
                <span>
                  {isAr ? 'كل ملفات المشاريع متاحة على الدرايف:' : 'Full verified project assets on Google Drive:'}
                </span>
                <a
                  href={driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 underline font-mono text-xs hover:text-amber-300"
                >
                  Drive Vault ↗
                </a>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact(project.title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>{isAr ? 'طلب حملة مماثلة' : 'Work Together on Similar Campaign'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
