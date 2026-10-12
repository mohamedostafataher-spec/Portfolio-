import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderOpen,
  CheckCircle2,
  Lightbulb,
  UserCheck,
  Wrench,
  Presentation,
  Download,
  MessageCircle,
  FileText,
  Layers,
  Sparkles,
  Volume2,
  Tv,
  Smartphone,
  Briefcase,
  Share2,
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
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9'>('9:16');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showDeckSlides, setShowDeckSlides] = useState<boolean>(false);
  const [deckSlideIndex, setDeckSlideIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalScrollRef = useRef<HTMLDivElement | null>(null);

  const whatsappNumber = '201110095403';

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

  // Reset state when project changes
  useEffect(() => {
    setCarouselIndex(0);
    setActiveVideoIndex(0);
    setShowDeckSlides(false);
    setDeckSlideIndex(0);

    if (project) {
      setAspectRatio(project.aspectRatio === '16:9' ? '16:9' : '9:16');
    }

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }

    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop = 0;
    }
  }, [project]);

  // Auto-play when active video changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [activeVideoIndex]);

  if (!project) return null;

  // Video list (Gallery videos + Primary videoUrl de-duplicated)
  const rawVideoList = [
    ...(project.galleryVideos || []),
    {
      title: project.title,
      url: project.videoUrl || project.videoPreviewUrl || '',
      category: project.category,
    },
  ].filter((v) => !!v.url);

  const seenUrls = new Set<string>();
  const videoList = rawVideoList.filter((v) => {
    if (seenUrls.has(v.url)) return false;
    seenUrls.add(v.url);
    return true;
  });

  const safeVideoIndex = activeVideoIndex < videoList.length ? activeVideoIndex : 0;
  const currentVideoItem = videoList[safeVideoIndex] || videoList[0];
  const videoInfo = currentVideoItem ? parseVideoUrl(currentVideoItem.url) : null;
  const isYouTube = videoInfo?.type === 'youtube';

  // Carousel images (Only true multi-slide carousel projects)
  const carouselImages = (project.galleryImages && project.galleryImages.length >= 4)
    ? project.galleryImages
    : [];

  const driveUrl =
    project.driveFolderUrl ||
    'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3';

  const downloadDocUrl =
    project.pdfDownloadUrl ||
    project.deckDownloadUrl ||
    '/documents/Mohamed_Taher_Executive_Portfolio.pdf';

  const downloadFileName =
    project.pdfFileName ||
    project.deckFileName ||
    `${project.id}_Strategy_Plan.pdf`;

  const handleWhatsAppInquiry = () => {
    const text = isAr
      ? `مرحباً أستاذ محمد، اطلعت على مشروع "${project.brandName || project.title}" في بورتفوليو أعمالك، وأود مناقشة فكرة حملة إعلانية / محتوى مشابه للبراند الخاص بنا.`
      : `Hi Mohamed, I saw your project "${project.brandName || project.title}" in your portfolio, and would like to discuss a similar advertising campaign / content for our brand.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/92 backdrop-blur-2xl animate-fadeIn">
      {/* Background Overlay */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      <div
        ref={modalScrollRef}
        className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto bg-[#0c0c10] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl z-10 text-left my-auto selection:bg-amber-500 selection:text-black flex flex-col"
      >
        {/* ========================================================= */}
        {/* STICKY TOP BAR: NAVIGATION & ACTIONS */}
        {/* ========================================================= */}
        <div className="sticky top-0 z-40 px-4 sm:px-6 py-3.5 bg-[#0c0c10]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-3">
          {/* Brand + Project indicator */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              Concept Project
            </span>
            <span className="text-xs sm:text-sm font-bold text-white truncate font-display">
              {project.brandName || project.title}
            </span>
            {currentIndex !== -1 && (
              <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                ({currentIndex + 1} / {allProjects.length})
              </span>
            )}
          </div>

          {/* Quick Prev / Next & Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className="px-2.5 sm:px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300 hover:text-white border border-white/10 text-xs font-mono font-bold flex items-center gap-1 transition-all cursor-pointer"
              title={isAr ? 'المشروع السابق' : 'Previous Project'}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">{isAr ? 'السابق' : 'PREV'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!hasNext}
              className="px-2.5 sm:px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300 hover:text-white border border-white/10 text-xs font-mono font-bold flex items-center gap-1 transition-all cursor-pointer"
              title={isAr ? 'المشروع التالي' : 'Next Project'}
            >
              <span className="hidden md:inline">{isAr ? 'التالي' : 'NEXT'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/20 text-xs font-mono font-bold flex items-center gap-1 transition-colors"
              title="Google Drive Folder"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Drive</span>
              <ExternalLink className="w-3 h-3 hidden sm:inline opacity-70" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black border border-amber-400 transition-all cursor-pointer shadow-md"
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN BODY: EXACT 6-STEP SEQUENCE ORDER */}
        {/* 1. ملخص (Summary) */}
        {/* 2. الفيديو (Video: 9:16, instant playback / YouTube) */}
        {/* 3. الاستراتيجية (Strategy: SOSTAC slide + Download PDF) */}
        {/* 4. الكاروسيل (Carousel: Interactive slider) */}
        {/* 5. الفكرة والسكريبت (Concept & Script in Egyptian Arabic) */}
        {/* 6. زرار تواصل (Direct WhatsApp / Contact) */}
        {/* ========================================================= */}
        <div className="p-4 sm:p-8 space-y-8">
          
          {/* ========================================================= */}
          {/* STEP 1: ملخص (SUMMARY: Brand, Type, Role, Tools) */}
          {/* ========================================================= */}
          <section className="p-5 sm:p-6 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-white/5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>01 — {isAr ? 'ملخص المشروع' : 'PROJECT SUMMARY'}</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-bold">
                Concept Project
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Brand */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-zinc-400 uppercase">
                  {isAr ? 'البراند' : 'Brand'}
                </span>
                <p className="text-sm sm:text-base font-bold text-white font-display">
                  {project.brandName || project.title}
                </p>
              </div>

              {/* Type */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-zinc-400 uppercase">
                  {isAr ? 'نوع العمل' : 'Project Type'}
                </span>
                <p className="text-sm font-semibold text-amber-400">
                  {project.projectType || project.category}
                </p>
              </div>

              {/* My Role */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-zinc-400 uppercase">
                  {isAr ? 'دوري في المشروع' : 'My Role'}
                </span>
                <p className="text-xs sm:text-sm font-medium text-zinc-200">
                  {project.myRole || 'Creative Direction, Scriptwriting & Video Editing'}
                </p>
              </div>

              {/* Tools */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-zinc-400 uppercase">
                  {isAr ? 'الأدوات والبرامج' : 'Tools & Software'}
                </span>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {(project.tools || ['CapCut Pro', 'Canva', 'AI Video']).map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300 border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-xs sm:text-sm text-zinc-300 pt-2 border-t border-white/5 leading-relaxed font-sans">
              {project.tagline || project.subtitle || project.description}
            </p>
          </section>

          {/* ========================================================= */}
          {/* STEP 2: الفيديو (VIDEO: 9:16 or Native, YouTube or Direct) */}
          {/* ========================================================= */}
          <section className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                <span>02 — {isAr ? 'فيديو الإعلان التجاري' : 'COMMERCIAL VIDEO'}</span>
                {project.duration && (
                  <span className="text-zinc-400 font-normal">({project.duration})</span>
                )}
              </span>

              {/* Video aspect ratio switch */}
              {videoInfo && (
                <div className="flex items-center gap-2">
                  {videoList.length > 1 && (
                    <span className="text-[11px] font-mono text-zinc-400">
                      {activeVideoIndex + 1} / {videoList.length} Videos
                    </span>
                  )}
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-900 border border-white/10 text-xs">
                    <button
                      onClick={() => setAspectRatio('9:16')}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        aspectRatio === '9:16'
                          ? 'bg-amber-500 text-black font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                      title="9:16 Vertical Reel"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setAspectRatio('16:9')}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        aspectRatio === '16:9'
                          ? 'bg-amber-500 text-black font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                      title="16:9 Landscape"
                    >
                      <Tv className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Video Multi-clip selector (if project has multiple videos like TAKAA) */}
            {videoList.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {videoList.map((vItem, vIdx) => (
                  <button
                    key={vIdx}
                    onClick={() => setActiveVideoIndex(vIdx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                      vIdx === activeVideoIndex
                        ? 'bg-amber-500 text-black font-bold shadow-md'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {vItem.title || `Video ${vIdx + 1}`}
                  </button>
                ))}
              </div>
            )}

            {/* Video Player Box */}
            <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center min-h-[300px]">
              {videoInfo ? (
                isYouTube ? (
                  /* YouTube Embed with High Quality & Preservation */
                  <div className="w-full flex flex-col items-center">
                    <div
                      className={`w-full relative transition-all duration-300 ${
                        aspectRatio === '9:16'
                          ? 'max-w-[320px] aspect-[9/16] py-3'
                          : 'aspect-video max-w-4xl'
                      }`}
                    >
                      <iframe
                        src={videoInfo.embedUrl}
                        title={project.title}
                        className="w-full h-full rounded-xl border border-white/10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-3 bg-zinc-950/80 w-full flex items-center justify-center gap-3 border-t border-white/5">
                      <a
                        href={currentVideoItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{isAr ? 'مشاهدة مباشرة على YouTube' : 'Open Directly on YouTube'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Direct HTML5 MP4 Player */
                  <div className="w-full flex flex-col items-center relative">
                    <div
                      className={`w-full relative transition-all duration-300 ${
                        aspectRatio === '9:16'
                          ? 'max-w-[320px] aspect-[9/16] py-2'
                          : 'aspect-video max-h-[520px]'
                      }`}
                    >
                      <video
                        ref={videoRef}
                        controls
                        autoPlay
                        playsInline
                        loop
                        muted={isMuted}
                        poster={project.image}
                        className="w-full h-full object-contain rounded-xl bg-black"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      >
                        <source src={videoInfo.embedUrl} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    </div>

                    {/* Quick direct video bar */}
                    <div className="p-2.5 bg-zinc-950/90 w-full flex items-center justify-between text-xs font-mono text-zinc-400 border-t border-white/5 px-4">
                      <span>{currentVideoItem.title || project.title}</span>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-amber-400 hover:underline cursor-pointer flex items-center gap-1"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isMuted ? (isAr ? 'تشغيل الصوت' : 'Unmute') : (isAr ? 'كتم الصوت' : 'Mute')}</span>
                      </button>
                    </div>
                  </div>
                )
              ) : (
                /* Poster fallback if no video */
                <div className="relative w-full aspect-video max-h-[460px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </section>

          {/* ========================================================= */}
          {/* STEP 3: الاستراتيجية (STRATEGY: SOSTAC Slide + PDF Download) */}
          {/* ========================================================= */}
          <section className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-white/5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Presentation className="w-4 h-4" />
                <span>03 — {isAr ? 'الاستراتيجية وخطة العمل' : 'STRATEGY & MARKETING PLAN'}</span>
              </span>

              {/* Button: حمّل الخطة كاملة PDF */}
              <a
                href={downloadDocUrl}
                download={downloadFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs font-mono transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>{isAr ? 'حمّل الخطة كاملة PDF' : 'Download Full Plan (PDF)'}</span>
              </a>
            </div>

            {/* Strategy Highlights or SOSTAC Pillars */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {project.objective ||
                  'تطبيق نموذج SOSTAC لدراسة الوضع الراهن، تحديد الأهداف الذكية، وصياغة الرسائل الإعلانية ومسار التحويل.'}
              </p>

              {/* What I Did / Strategic execution points */}
              {project.whatIDid && project.whatIDid.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {project.whatIDid.slice(0, 4).map((pt, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Optional Deck Slides Inspector */}
              {project.deckSlides && project.deckSlides.length > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setShowDeckSlides(!showDeckSlides)}
                    className="text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer flex items-center gap-1.5"
                  >
                    <Presentation className="w-3.5 h-3.5" />
                    <span>
                      {showDeckSlides
                        ? (isAr ? 'إخفاء شرائح العرض' : 'Hide Presentation Slides')
                        : (isAr ? `تصفح شرائح العرض التقديمي (${project.deckSlides.length} شرائح)` : `Browse Strategy Slides (${project.deckSlides.length})`)}
                    </span>
                  </button>

                  {showDeckSlides && (
                    <div className="mt-3 p-4 rounded-xl bg-black/70 border border-white/10 space-y-3">
                      {(() => {
                        const slide = project.deckSlides[deckSlideIndex];
                        return (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span className="text-amber-400 font-bold">
                                {isAr ? `شريحة ${deckSlideIndex + 1} من ${project.deckSlides.length}` : `Slide ${deckSlideIndex + 1} of ${project.deckSlides.length}`}
                              </span>
                              <span className="text-zinc-500">{slide.category}</span>
                            </div>
                            <h4 className="text-sm sm:text-base font-bold text-white">
                              {slide.title}
                            </h4>
                            <ul className="space-y-1.5 text-xs text-zinc-300">
                              {slide.points.map((p, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2">
                                  <span className="text-amber-400">•</span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono">
                              <button
                                onClick={() => setDeckSlideIndex((prev) => Math.max(0, prev - 1))}
                                disabled={deckSlideIndex === 0}
                                className="px-3 py-1 rounded bg-zinc-800 disabled:opacity-30 text-white cursor-pointer"
                              >
                                {isAr ? '← السابق' : '← Prev'}
                              </button>
                              <button
                                onClick={() =>
                                  setDeckSlideIndex((prev) =>
                                    Math.min(project.deckSlides!.length - 1, prev + 1)
                                  )
                                }
                                disabled={deckSlideIndex === project.deckSlides.length - 1}
                                className="px-3 py-1 rounded bg-zinc-800 disabled:opacity-30 text-white cursor-pointer"
                              >
                                {isAr ? 'التالي →' : 'Next →'}
                              </button>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* ========================================================= */}
          {/* STEP 4: الكاروسيل (CAROUSEL: Interactive Multi-Slide Slider) */}
          {/* ========================================================= */}
          {carouselImages.length > 0 && (
            <section className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>04 — {isAr ? 'الكاروسيل التفاعلي' : 'INTERACTIVE CAROUSEL'}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 font-bold">
                  {isAr
                    ? `شريحة ${carouselIndex + 1} من ${carouselImages.length}`
                    : `Slide ${carouselIndex + 1} of ${carouselImages.length}`}
                </span>
              </div>

              {/* Slider container with swipe / buttons */}
              <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 min-h-[440px] sm:min-h-[540px] max-h-[650px] flex flex-col justify-between">
                {/* Slide image */}
                <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                  <img
                    src={carouselImages[carouselIndex]}
                    alt={`${project.title} Carousel Slide ${carouselIndex + 1}`}
                    className="w-full h-full max-h-[460px] sm:max-h-[520px] object-contain rounded-lg"
                  />

                  {/* Left Button */}
                  {carouselImages.length > 1 && (
                    <button
                      onClick={() =>
                        setCarouselIndex((prev) =>
                          prev === 0 ? carouselImages.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all cursor-pointer shadow-xl z-20"
                      title="Previous Slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}

                  {/* Right Button */}
                  {carouselImages.length > 1 && (
                    <button
                      onClick={() =>
                        setCarouselIndex((prev) => (prev + 1) % carouselImages.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all cursor-pointer shadow-xl z-20"
                      title="Next Slide"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Slider Bottom Bar with Thumbnails */}
                <div className="p-3 bg-black/90 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
                  <span className="text-xs font-mono text-amber-400 font-bold">
                    {isAr
                      ? `سلسلة إنستغرام كاملة (${carouselImages.length} شرائح 4:5)`
                      : `Full Instagram Series (${carouselImages.length} Slides 4:5)`}
                  </span>

                  <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-thin max-w-full">
                    {carouselImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={`w-10 h-12 sm:w-11 sm:h-14 rounded overflow-hidden border shrink-0 transition-all cursor-pointer ${
                          idx === carouselIndex
                            ? 'border-amber-400 scale-105 ring-2 ring-amber-400/40'
                            : 'border-white/10 opacity-50 hover:opacity-100'
                        }`}
                        title={`Slide ${idx + 1}`}
                      >
                        <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ========================================================= */}
          {/* STEP 5: الفكرة والسكريبت (CONCEPT & SCRIPT IN EGYPTIAN ARABIC) */}
          {/* ========================================================= */}
          <section className="p-5 sm:p-6 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider pb-3 border-b border-white/5">
              <Lightbulb className="w-4 h-4" />
              <span>05 — {isAr ? 'الفكرة والسكريبت بالعامية المصرية' : 'THE CONCEPT & COLLOQUIAL SCRIPT'}</span>
            </div>

            {/* The Creative Concept */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold text-amber-400/90 uppercase">
                {isAr ? '💡 الفكرة الإعلانية:' : '💡 The Creative Angle:'}
              </span>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans">
                {project.concept || project.description}
              </p>
            </div>

            {/* The Script in Egyptian Arabic */}
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isAr ? '🎬 الاسكريبت الإعلاني (بالعامية المصرية):' : '🎬 Commercial Script (Egyptian Arabic):'}</span>
              </span>
              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-sans italic">
                "{project.conceptScriptAr || project.tagline || project.description}"
              </p>
            </div>
          </section>

          {/* ========================================================= */}
          {/* STEP 6: زرار تواصل (DIRECT CONTACT / WHATSAPP ACTION) */}
          {/* ========================================================= */}
          <section className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-zinc-900/90 to-amber-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            <div className="space-y-1 text-center sm:text-left rtl:sm:text-right">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                06 — {isAr ? 'جاهز للتنفيذ والتعاون؟' : 'READY TO COLLABORATE?'}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                {isAr
                  ? `عايز حملة إعلانية أو فيديو بالذكاء الاصطناعي لبراندك؟`
                  : `Want a similar AI commercial or strategy for your brand?`}
              </h3>
              <p className="text-xs text-zinc-300">
                {isAr
                  ? 'تواصل مباشرة عبر واتساب لمناقشة الفكرة والتفاصيل والبدء في التنفيذ.'
                  : 'Chat directly on WhatsApp to discuss your brief and get started.'}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              {/* WhatsApp Direct Button */}
              <button
                onClick={handleWhatsAppInquiry}
                className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 transition-all cursor-pointer hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{isAr ? 'تواصل على واتساب' : 'Chat on WhatsApp'}</span>
              </button>

              {/* Alternative Email / Contact modal button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenContact(project.title);
                }}
                className="px-4 py-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono font-bold border border-white/10 transition-colors cursor-pointer"
              >
                {isAr ? 'نموذج التواصل' : 'Contact Form'}
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
