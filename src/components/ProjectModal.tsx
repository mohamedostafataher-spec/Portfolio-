import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Sparkles,
  ArrowUpRight,
  Clock,
  Wrench,
  Target,
  Lightbulb,
  CheckCircle,
  Play,
  Pause,
  Film,
  Volume2,
  Tv,
  Smartphone,
  ListOrdered,
  FileText,
  Video,
  ExternalLink,
  Image as ImageIcon,
  Music,
  Presentation,
  Download,
  ChevronLeft,
  ChevronRight,
  Check,
  FolderOpen,
  ShieldCheck,
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
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'case-study' | 'commercial-reel' | 'storyboard' | 'gallery' | 'deck'>('video');
  const [activeScriptIdx, setActiveScriptIdx] = useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [displayFormat, setDisplayFormat] = useState<'landscape' | 'vertical'>('landscape');
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentIndex = project ? allProjects.findIndex(p => p.id === project.id) : -1;
  const hasNext = currentIndex < allProjects.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasNext && onSelectProject) {
      onSelectProject(allProjects[currentIndex + 1]);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasPrev && onSelectProject) {
      onSelectProject(allProjects[currentIndex - 1]);
    }
  };

  const videoUrlToUse = project?.videoUrl || project?.videoPreviewUrl;
  const videoInfo = parseVideoUrl(videoUrlToUse);

  useEffect(() => {
    setIsPlayingAudio(false);
    setActiveScriptIdx(0);
    setCurrentSlideIndex(0);
    setSelectedGalleryImg(null);
    setIsPaused(true);
    setDisplayFormat(project?.aspectRatio === '9:16' ? 'vertical' : 'landscape');

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }

    if (videoUrlToUse) {
      setActiveTab('video');
    } else if (project?.deckSlides && project.deckSlides.length > 0) {
      setActiveTab('deck');
    } else if (project?.galleryImages && project.galleryImages.length > 0) {
      setActiveTab('gallery');
    } else if (project?.voiceoverScript && project.voiceoverScript.length > 0) {
      setActiveTab('commercial-reel');
    } else {
      setActiveTab('case-study');
    }
  }, [project, videoUrlToUse]);

  // Audio simulation timer for voiceover script
  useEffect(() => {
    let interval: any = null;
    if (isPlayingAudio && project?.voiceoverScript) {
      interval = setInterval(() => {
        setActiveScriptIdx((prev) => (prev + 1) % project.voiceoverScript!.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, project]);

  if (!project) return null;

  const hasVoiceover = project.voiceoverScript && project.voiceoverScript.length > 0;
  const hasStoryboard = project.storyboard && project.storyboard.length > 0;
  const hasVideo = !!videoInfo;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#101014] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl z-10 text-left my-auto">
        {/* Sticky Close & Navigation Button */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
          {hasPrev && (
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-black/75 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer shadow-lg"
              title="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {hasNext && (
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-black/75 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer shadow-lg"
              title="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={onClose}
            id="close-project-modal"
            className="p-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black border border-white/10 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Navigation Tabs - Optimized for Mobile */}
        <div className="sticky top-0 z-20 px-4 sm:px-6 pt-4 pb-3 bg-[#101014]/95 backdrop-blur-md border-b border-white/10 overflow-hidden">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap max-w-[80%]">
              {project.evidenceStatus && (
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold font-mono border ${
                  project.evidenceStatus === 'Drive-backed' ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' : 
                  project.evidenceStatus === 'Coursework' ? 'bg-blue-950/80 text-blue-300 border-blue-500/40' : 
                  project.evidenceStatus === 'Spec Concept' ? 'bg-amber-950/80 text-amber-300 border-amber-500/40' : 
                  'bg-purple-950/80 text-purple-300 border-purple-500/40'
                }`}>
                  {isAr ? project.evidenceLabelAr || project.evidenceStatus : project.evidenceStatus}
                </span>
              )}
              <span className="text-zinc-400 text-[10px] font-mono hidden sm:inline truncate">
                // {project.category}
              </span>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-full bg-zinc-900 border border-white/10 text-[10px] sm:text-xs overflow-x-auto no-scrollbar">
              {hasVideo && (
                <button
                  onClick={() => setActiveTab('video')}
                  className={`px-3 py-1.5 rounded-full font-semibold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    activeTab === 'video' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>{isAr ? 'فيديو' : 'Video'}</span>
                </button>
              )}
              <button
                onClick={() => setActiveTab('case-study')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  activeTab === 'case-study' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isAr ? 'الخطة' : 'Study'}</span>
              </button>
              {project.deckSlides && project.deckSlides.length > 0 && (
                <button
                  onClick={() => setActiveTab('deck')}
                  className={`px-3 py-1.5 rounded-full font-semibold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    activeTab === 'deck' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Presentation className="w-3.5 h-3.5" />
                  <span>{isAr ? 'عرض' : 'Deck'}</span>
                </button>
              )}
              {project.galleryImages && project.galleryImages.length > 0 && (
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-3 py-1.5 rounded-full font-semibold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    activeTab === 'gallery' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{isAr ? 'صور' : 'Gallery'}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Video / Visual Media Player Area */}
        <div className="relative bg-black flex items-center justify-center border-b border-white/10">
          {hasVideo && activeTab === 'video' ? (
            <div
              className={`w-full relative transition-all duration-300 ${
                displayFormat === 'vertical'
                  ? 'max-w-sm mx-auto aspect-[9/16] py-4'
                  : 'aspect-video max-h-[520px]'
              }`}
            >
              {videoInfo.isDirect ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    ref={videoRef}
                    controls
                    playsInline
                    preload="auto"
                    poster={project.image}
                    onPlay={() => setIsPaused(false)}
                    onPause={() => setIsPaused(true)}
                    className="w-full h-full object-contain rounded-lg shadow-2xl bg-black"
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
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110 z-20 cursor-pointer pointer-events-auto"
                      aria-label="Play video"
                    >
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </button>
                  )}
                </div>
              ) : (
                <iframe
                  src={videoInfo.embedUrl}
                  title={project.title}
                  className="w-full h-full border-0 rounded-lg shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}

              {/* Format Toggle overlay */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1 p-1 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                <button
                  onClick={() => setDisplayFormat('landscape')}
                  title="16:9 Landscape"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    displayFormat === 'landscape' ? 'bg-amber-500 text-black font-bold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Tv className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDisplayFormat('vertical')}
                  title="9:16 Vertical Reel"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    displayFormat === 'vertical' ? 'bg-amber-500 text-black font-bold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Poster View with Tagline and Switcher */
            <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
              <img
                src={displayFormat === 'vertical' && project.reelImage ? project.reelImage : project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  displayFormat === 'vertical' ? 'max-w-xs mx-auto object-contain' : ''
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-[#101014]/40 to-transparent" />

              {/* Slogan Banner */}
              {project.tagline && (
                <div className="absolute top-4 left-6 z-10">
                  <div className="px-3.5 py-1.5 rounded-xl bg-black/70 border border-amber-500/40 backdrop-blur-md text-amber-300 font-arabic text-sm font-bold shadow-lg" dir="rtl">
                    {project.tagline}
                  </div>
                </div>
              )}

              {/* Play video badge if video is present */}
              {hasVideo && (
                <button
                  onClick={() => setActiveTab('video')}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-2xl transition-transform transform hover:scale-110 cursor-pointer z-10"
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </button>
              )}

              {/* Aspect Ratio Switcher */}
              <div className="absolute top-4 right-16 z-10 flex items-center gap-1 p-1 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs">
                <button
                  onClick={() => setDisplayFormat('landscape')}
                  title="16:9 Landscape"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    displayFormat === 'landscape' ? 'bg-amber-500 text-black font-bold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Tv className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDisplayFormat('vertical')}
                  title="9:16 Vertical Reel Mode"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    displayFormat === 'vertical' ? 'bg-amber-500 text-black font-bold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 z-10">
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-zinc-300 text-sm sm:text-base font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video Info Bar */}
        {hasVideo && (
          <div className="px-6 py-3 bg-zinc-900/60 border-b border-white/5 flex items-center justify-between flex-wrap gap-2 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isAr ? 'الفيديو الأصلي جاهز للمشاهدة' : 'Active Commercial Video Preview'}</span>
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-zinc-500">FORMAT: {displayFormat === 'landscape' ? '16:9 Landscape TVC' : '9:16 Vertical Reel'}</span>
              {videoInfo.isDirect ? (
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
                  HD STREAM
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono text-[10px] border border-blue-500/20 uppercase">
                  {videoInfo.type}
                </span>
              )}
            </div>
          </div>
        )}

        {/* TAB: Full Case Study */}
        {activeTab === 'case-study' && (
          <div className="p-6 sm:p-10 space-y-8">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                <span className="text-[11px] font-mono text-zinc-500 block mb-1">CATEGORY</span>
                <span className="text-sm font-bold text-white">{project.category}</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                <span className="text-[11px] font-mono text-zinc-500 block mb-1">STATUS</span>
                <span className="text-sm font-bold text-amber-400">{project.clientOrSpec}</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                <span className="text-[11px] font-mono text-zinc-500 block mb-1">ROLE</span>
                <span className="text-xs font-semibold text-white line-clamp-1">{project.myRole || 'Creative Director'}</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                <span className="text-[11px] font-mono text-zinc-500 block mb-1">ASPECT</span>
                <span className="text-sm font-mono text-zinc-300">{displayFormat === 'landscape' ? '16:9 TVC' : '9:16 Reel'}</span>
              </div>
            </div>

            {/* Description & Objective */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-base">
                  <Target className="w-5 h-5" />
                  <span>{isAr ? 'الهدف التسويقي (Objective)' : 'Marketing Objective'}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.objective}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-base">
                  <Lightbulb className="w-5 h-5" />
                  <span>{isAr ? 'الفكرة الإبداعية (Concept)' : 'Creative Concept'}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.concept}
                </p>
              </div>
            </div>

            {/* Process Steps */}
            {project.process && project.process.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  {isAr ? 'مراحل التنفيذ من الفكرة للإخراج' : 'Production Process & Methodology'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 space-y-1.5"
                    >
                      <span className="text-xs font-mono font-bold text-amber-400">
                        {step.step}
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Real Audio Player (if present) */}
            {project.audioUrl && (
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900/80 to-zinc-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-black flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                    <Music className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{project.audioTitle || 'Official Voiceover Audio Track'}</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {isAr ? 'التسجيل الصوتي الرسمي وهندسة الإلقاء الإعلاني' : 'Commercial Voiceover & Foley Audio Direction'}
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-72 shrink-0">
                  <audio controls className="w-full h-10 rounded-xl" src={project.audioUrl}>
                    Your browser does not support audio playback.
                  </audio>
                </div>
              </div>
            )}

            {/* Final Result */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-base">
                <CheckCircle className="w-5 h-5" />
                <span>{isAr ? 'النتيجة والأثر التسويقي' : 'Final Result & Impact'}</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                {project.finalResult}
              </p>
            </div>

            {/* Guardrail Note / Transparency Notice */}
            {project.guardrailNote && (
              <div className="p-4 rounded-xl bg-zinc-900/90 border border-amber-500/30 text-xs text-amber-300 space-y-1">
                <div className="font-bold flex items-center gap-1.5 font-mono uppercase tracking-wider text-amber-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isAr ? 'تنويه الشفافية وحدود العمل (ACCURACY & GUARDRAIL)' : 'TRANSPARENCY & GUARDRAIL'}</span>
                </div>
                <p className="text-zinc-300 font-mono leading-relaxed">
                  {project.guardrailNote}
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB: TVC Script */}
        {activeTab === 'commercial-reel' && hasVoiceover && (
          <div className="p-6 sm:p-10 space-y-8">
            {/* Audio Simulation Player */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-amber-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center transition-transform hover:scale-105 shadow-lg shadow-amber-500/30 cursor-pointer shrink-0"
                  aria-label={isPlayingAudio ? 'Pause Voiceover Simulation' : 'Play Voiceover Simulation'}
                >
                  {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>TVC Colloquial Voiceover Audio Track</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5 font-arabic">
                    {project.tagline || '“خليك في اللحظة، والباقي عليه”'}
                  </div>
                </div>
              </div>

              {/* Animated wave frequencies */}
              <div className="flex items-center gap-1 h-6">
                {[12, 24, 18, 28, 14, 22, 10, 26, 16, 20, 14, 24].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-full bg-amber-400 transition-all duration-300 ${
                      isPlayingAudio ? 'animate-pulse' : 'opacity-40'
                    }`}
                    style={{ height: isPlayingAudio ? `${h}px` : '8px' }}
                  />
                ))}
              </div>
            </div>

            {/* Script Breakdown */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  Full Egyptian Arabic Voiceover Script &amp; English Adaptation
                </h3>
                <span className="text-xs text-zinc-500 font-mono">
                  [ Click any timestamp to inspect ]
                </span>
              </div>

              <div className="space-y-3">
                {project.voiceoverScript!.map((item, idx) => {
                  const isCurrent = activeScriptIdx === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveScriptIdx(idx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-amber-500/10 border-amber-500/40 shadow-lg'
                          : 'bg-zinc-900/30 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded bg-black/60 font-mono text-[11px] text-amber-300 border border-white/10">
                          {item.time}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-mono text-amber-400 animate-pulse">
                            ACTIVE TIMECODE
                          </span>
                        )}
                      </div>
                      <p className="text-white font-arabic text-base sm:text-lg font-bold leading-relaxed mb-1" dir="rtl">
                        {item.ar}
                      </p>
                      <p className="text-zinc-400 text-xs sm:text-sm font-sans italic">
                        “{item.en}”
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Storyboard */}
        {activeTab === 'storyboard' && hasStoryboard && (
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400">
                {isAr ? 'الستوري بورد وتوزيع اللقطات' : 'Cinematic Storyboard Sequence'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.storyboard!.map((scene, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display font-bold text-sm text-amber-400">
                        {scene.scene}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                        {scene.focus}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {scene.visual}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                    <span>Scene 0{sIdx + 1}</span>
                    <span className="text-amber-400/80">AI Generated Video</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: Visual Gallery / Lookbook / Carousels */}
        {activeTab === 'gallery' && project.galleryImages && project.galleryImages.length > 0 && (
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  {isAr ? 'اللوك بوك وتصاميم الكاروسيل والسوشيال ميديا' : 'Visual Lookbook & Social Carousel Slides'}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {isAr ? 'اضغط على أي صورة لتكبيرها واستعراض التفاصيل الكاملة' : 'Click on any slide or photo to inspect full resolution details'}
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                {project.galleryImages.length} {isAr ? 'تصاميم' : 'Assets'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.galleryImages.map((imgUrl, gIdx) => (
                <div
                  key={gIdx}
                  onClick={() => setSelectedGalleryImg(imgUrl)}
                  className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-amber-500/50 transition-all cursor-pointer aspect-square shadow-lg"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} asset ${gIdx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-amber-500 text-black text-xs font-bold shadow-lg">
                      {isAr ? 'تكبير وعرض' : 'View Fullscreen'}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-amber-300">
                    Slide 0{gIdx + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox / Zoom Modal */}
            {selectedGalleryImg && (
              <div
                className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                onClick={() => setSelectedGalleryImg(null)}
              >
                <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20">
                  <button
                    onClick={() => setSelectedGalleryImg(null)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/80 text-white hover:bg-zinc-800 transition-colors z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <img
                    src={selectedGalleryImg}
                    alt="Enlarged preview"
                    className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB: Interactive Presentation Slide Deck Viewer */}
        {activeTab === 'deck' && project.deckSlides && project.deckSlides.length > 0 && (
          <div className="p-6 sm:p-10 space-y-6">
            {/* Header controls: Title, slide counter, and download button */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                    {project.deckFileName || 'Marketing Presentation'}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    [{currentSlideIndex + 1} / {project.deckSlides.length}]
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mt-1">
                  {isAr ? 'عرض شرائح الخطة الاستراتيجية التفاعلية' : 'Interactive Strategy Slide Deck Viewer'}
                </h4>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {project.pdfDownloadUrl && (
                  <a
                    href={project.pdfDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={project.pdfFileName || 'Strategy_Document.pdf'}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-300 text-xs font-bold transition-all shadow-lg cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-red-400" />
                    <span>{isAr ? 'عرض وتحميل المستند (PDF)' : 'Download PDF Document'}</span>
                  </a>
                )}
                {project.deckDownloadUrl && (
                  <a
                    href={project.deckDownloadUrl}
                    download={project.deckFileName || 'Presentation.pptx'}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-lg cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isAr ? 'تحميل ملف العرض (.pptx)' : 'Download Deck (.pptx)'}</span>
                  </a>
                )}
                {project.driveFolderUrl && (
                  <a
                    href={project.driveFolderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-300 text-xs font-bold transition-all shadow-lg cursor-pointer"
                  >
                    <FolderOpen className="w-4 h-4 text-blue-400" />
                    <span>{isAr ? 'فتح المجلد في Google Drive' : 'Open in Google Drive'}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Slide Stage Canvas */}
            {(() => {
              const slide = project.deckSlides[currentSlideIndex];
              if (!slide) return null;

              return (
                <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900 via-[#141419] to-black border border-amber-500/20 p-6 sm:p-10 shadow-2xl min-h-[380px] flex flex-col justify-between">
                  {/* Slide Top Bar */}
                  <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-amber-500 text-black font-mono font-black text-xs flex items-center justify-center">
                        {slide.slideNumber}
                      </span>
                      {slide.category && (
                        <span className="text-xs font-mono uppercase tracking-wider text-amber-400/90 font-bold">
                          {slide.category}
                        </span>
                      )}
                    </div>
                    {slide.highlight && (
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300">
                        {slide.highlight}
                      </span>
                    )}
                  </div>

                  {/* Slide Main Content */}
                  <div className="space-y-6 my-auto">
                    <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                      {slide.title}
                    </h3>

                    {/* Bullet Points */}
                    <div className="space-y-3">
                      {slide.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Metrics grid if present */}
                    {slide.metrics && slide.metrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/5">
                        {slide.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="p-3.5 rounded-xl bg-black/50 border border-amber-500/20">
                            <div className="font-display font-black text-lg sm:text-2xl text-amber-400">
                              {m.value}
                            </div>
                            <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Slide Bottom Controls */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4 mt-8">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                        disabled={currentSlideIndex === 0}
                        className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-all cursor-pointer"
                        title="Previous Slide"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setCurrentSlideIndex((prev) => Math.min(project.deckSlides!.length - 1, prev + 1))}
                        disabled={currentSlideIndex === project.deckSlides.length - 1}
                        className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-all cursor-pointer"
                        title="Next Slide"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <span className="text-xs font-mono text-zinc-400 ml-2">
                        {currentSlideIndex + 1} / {project.deckSlides.length}
                      </span>
                    </div>

                    {/* Slide Dots Quick Jump */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.deckSlides.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setCurrentSlideIndex(dotIdx)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            currentSlideIndex === dotIdx
                              ? 'w-6 bg-amber-400'
                              : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                          }`}
                          aria-label={`Jump to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Skills Applied Tags & Modal Footer */}
        <div className="p-6 sm:p-10 pt-0 space-y-6">
          <div>
            <div className="text-xs text-zinc-500 font-mono mb-2">SKILLS APPLIED:</div>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-400">
              {isAr
                ? 'هل تريد إعلاناً سينمائياً أو حملة تسويقية لعلامتك التجارية؟'
                : 'Need a cinematic commercial or marketing concept for your brand?'}
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact(project.title);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <span>{isAr ? 'طلب حملة مماثلة' : 'Inquire Similar Campaign'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
