import React, { useState, useEffect } from 'react';
import {
  Play,
  Eye,
  Layers,
  Presentation,
  FileText,
  FolderOpen,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MessageCircle,
  Plus,
  Crown,
  Edit3,
  Clock,
  Target,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useOwner } from '../context/OwnerContext';
import { TiltCard3D } from './TiltCard3D';
import { VideoTheatreModal } from './VideoTheatreModal';

interface MasterPortfolioSectionProps {
  projects: Project[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  onSelectProject: (project: Project) => void;
  onOpenAddModal: () => void;
  onEditProject?: (project: Project) => void;
  onDeleteProject?: (projectId: string) => void;
  onResetProjects?: () => void;
}

const ProjectCarouselCard: React.FC<{
  project: Project;
  onOpenLightbox: (images: string[], index: number, title: string, category?: string) => void;
  onSelectProject: (project: Project) => void;
  isAr: boolean;
}> = ({ project, onOpenLightbox, onSelectProject, isAr }) => {
  const slides = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [project.image];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Reset slide to 0 whenever project changes
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [project.id]);

  const safeSlideIndex = currentSlideIndex < slides.length ? currentSlideIndex : 0;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlideIndex((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlideIndex((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl">
      {/* Card Header */}
      <div className="p-4 sm:p-5 pb-3 bg-zinc-950/60 border-b border-white/5 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              {project.brandName || project.title}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-300 font-bold">
              {slides.length} {isAr ? 'شرائح (4:5)' : 'Slides (4:5)'}
            </span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-white mt-1 font-display truncate">
            {project.title}
          </h4>
        </div>
        <button
          onClick={() => onOpenLightbox(slides, currentSlideIndex, project.title, project.brandName)}
          className="p-2 rounded-xl bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 transition-colors cursor-pointer shrink-0"
          title={isAr ? 'تكبير ملء الشاشة' : 'Fullscreen'}
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Main Interactive Slide Stage */}
      <div className="relative aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] bg-black overflow-hidden flex items-center justify-center group">
        <img
          src={slides[safeSlideIndex]}
          alt={`${project.title} slide ${safeSlideIndex + 1}`}
          className="w-full h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]"
          onClick={() => onOpenLightbox(slides, safeSlideIndex, project.title, project.brandName)}
        />

        {/* Slide Counter Overlay */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-amber-300 font-bold z-10 shadow-lg">
          {isAr ? `شريحة ${safeSlideIndex + 1} من ${slides.length}` : `Slide ${safeSlideIndex + 1} of ${slides.length}`}
        </div>

        {/* Previous Button */}
        {slides.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all cursor-pointer shadow-xl z-20 border border-white/15"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next Button */}
        {slides.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all cursor-pointer shadow-xl z-20 border border-white/15"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Clickable Thumbnail Strip */}
      {slides.length > 1 && (
        <div className="p-2.5 bg-zinc-950/90 border-t border-b border-white/5 overflow-x-auto scrollbar-thin">
          <div className="flex items-center gap-1.5">
            {slides.map((imgUrl, sIdx) => (
              <button
                key={sIdx}
                onClick={() => setCurrentSlideIndex(sIdx)}
                className={`relative w-12 h-14 sm:w-14 sm:h-16 rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer ${
                  currentSlideIndex === sIdx
                    ? 'border-amber-400 ring-2 ring-amber-400/40 scale-105'
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
                title={isAr ? `شريحة ${sIdx + 1}` : `Slide ${sIdx + 1}`}
              >
                <img
                  src={imgUrl}
                  alt={`Thumb ${sIdx + 1}`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0.5 right-0.5 px-1 py-0.2 rounded bg-black/80 text-[8px] font-mono font-bold text-white">
                  {sIdx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Card Footer: Concept + CTAs */}
      <div className="p-4 sm:p-5 space-y-3 bg-zinc-900/40">
        <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
          {project.tagline || project.subtitle || project.description}
        </p>

        <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5 flex-wrap">
          <button
            onClick={() => onSelectProject(project)}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-400 font-mono text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-amber-500/20"
          >
            <span>{isAr ? 'عرض الاستراتيجية والتفاصيل' : 'Case Study & Details'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {project.driveFolderUrl && (
            <a
              href={project.driveFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-1.5 border border-white/5"
            >
              <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'ملفات الدرايف' : 'Drive'}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const MasterPortfolioSection: React.FC<MasterPortfolioSectionProps> = ({
  projects,
  activeCategory,
  onCategoryChange,
  onSelectProject,
  onOpenAddModal,
  onEditProject,
  onDeleteProject,
  onResetProjects,
}) => {
  const { isAr } = useLanguage();
  const { isOwnerMode } = useOwner();

  // Full-screen Lightbox for Carousels & Visuals
  const [lightboxState, setLightboxState] = useState<{
    images: string[];
    currentIndex: number;
    title: string;
    category?: string;
    desc?: string;
  } | null>(null);

  // Instant Video Theatre Modal for Playable Commercials & YouTube
  const [theatreVideo, setTheatreVideo] = useState<{
    title: string;
    clientOrSpec?: string;
    category: string;
    videoUrl: string;
    driveUrl?: string;
    duration?: string;
    project?: Project;
  } | null>(null);

  // Carousel brand filter (ALL or project ID)
  const [carouselBrandFilter, setCarouselBrandFilter] = useState<string>('ALL');

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxState(null);
        setTheatreVideo(null);
      } else if (e.key === 'ArrowRight' && lightboxState && lightboxState.images.length > 1) {
        setLightboxState((prev) =>
          prev
            ? { ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length }
            : null
        );
      } else if (e.key === 'ArrowLeft' && lightboxState && lightboxState.images.length > 1) {
        setLightboxState((prev) =>
          prev
            ? {
                ...prev,
                currentIndex:
                  prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1,
              }
            : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState, theatreVideo]);

  // The Filter Tabs (All / Videos / Carousels / SOSTAC Decks)
  const filterTabs = [
    {
      key: 'All',
      labelAr: '✨ جميع المشاريع (الرئيسية)',
      labelEn: 'All Projects (Overview)',
      descAr: 'المشاريع المختارة (3 في الواجهة) + شبكة باقي الأعمال لجميع البراندات',
      descEn: '3 Flagship Featured Projects + Grid of All Brand Deliverables',
      icon: Layers,
    },
    {
      key: 'Videos',
      labelAr: '🎬 الفيديوهات الإعلانية',
      labelEn: 'Commercial Videos',
      descAr: 'الفيديوهات التجارية ومونتاج CapCut وإعلانات يوتيوب — تشغيل فوري بدون صور ثابتة',
      descEn: 'Commercial video commercials, CapCut reels & YouTube shorts with instant playback',
      icon: Play,
    },
    {
      key: 'Carousels',
      labelAr: '📱 الكاروسيل التفاعلي',
      labelEn: 'Interactive Carousels',
      descAr: 'سلاسل الكاروسيل التفاعلية متعددة الشرائح للمنتجات وعلامات الأزياء مع تصفح كامل',
      descEn: 'Interactive multi-slide product & fashion carousels with slide-by-slide inspection',
      icon: ImageIcon,
    },
    {
      key: 'SOSTAC',
      labelAr: '📊 استراتيجيات SOSTAC & Decks',
      labelEn: 'SOSTAC Strategy & Decks',
      descAr: 'خطط التسويق الاستراتيجية بنموذج SOSTAC المعتمد، عروض PPTX، وتقارير أبحاث السوق PDF',
      descEn: 'Certified SOSTAC strategic plans, PowerPoint decks & market research PDFs',
      icon: Presentation,
    },
  ];

  // Helper categorization
  const isVideoProject = (p: Project) => {
    return !!p.videoUrl;
  };

  const isCarouselProject = (p: Project) => {
    return !!p.galleryImages && p.galleryImages.length >= 4;
  };

  const isStrategyProject = (p: Project) => {
    return (
      !!p.deckFileName ||
      !!p.pdfDownloadUrl ||
      p.category === 'Marketing Strategy' ||
      p.category === 'Market Research & Audit' ||
      p.category === 'Brand Presentation & Deck' ||
      (!!p.deckSlides && p.deckSlides.length > 0)
    );
  };

  // 1. The 3 Featured Flagship Projects requested by the user
  const featuredTop3 = [
    projects.find((p) => p.id === 'the-lakes-sodic-east') || projects.find((p) => p.id.includes('lakes')),
    projects.find((p) => p.id === 'takaa-energy-launch') || projects.find((p) => p.id.includes('takaa')),
    projects.find((p) => p.id === 'v7-cream-soda-summer') || projects.find((p) => p.id.includes('v7')),
  ].filter(Boolean) as Project[];

  // 2. The 6 Remaining Projects for the Grid
  const grid6Projects = [
    projects.find((p) => p.id === 'buffalo-burger-commercial') || projects.find((p) => p.id.includes('buffalo')),
    projects.find((p) => p.id === 'breadfast-campaign') || projects.find((p) => p.id.includes('breadfast')),
    projects.find((p) => p.id === 'talabat-egypt-campaign') || projects.find((p) => p.id.includes('talabat')),
    projects.find((p) => p.id === 'spiro-spathis-commercial') || projects.find((p) => p.id.includes('spiro')),
    projects.find((p) => p.id === 'baba-geh-campaign') || projects.find((p) => p.id.includes('baba')),
    projects.find((p) => p.id === 'qaim-fashion-growth') || projects.find((p) => p.id.includes('qaim')),
  ].filter(Boolean) as Project[];

  // Filtered list when user selects a specific corner tab (Videos, Carousels, SOSTAC)
  const filteredCategoryProjects = projects.filter((p) => {
    if (activeCategory === 'Videos') return isVideoProject(p);
    if (activeCategory === 'Carousels') return isCarouselProject(p);
    if (activeCategory === 'SOSTAC') return isStrategyProject(p);
    return true;
  });

  const activeTabMeta = filterTabs.find((t) => t.key === activeCategory) || filterTabs[0];

  const handleOpenVideoTheatre = (project: Project) => {
    if (project.videoUrl) {
      setTheatreVideo({
        title: project.title,
        clientOrSpec: project.clientOrSpec,
        category: project.category,
        videoUrl: project.videoUrl,
        driveUrl: project.driveFolderUrl,
        duration: isAr ? (project.durationAr || project.duration) : project.duration,
        project: project,
      });
    } else {
      onSelectProject(project);
    }
  };

  return (
    <section id="work" className="py-20 relative bg-[#07070a] border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              {isAr ? '02 — معرض الأعمال والمشاريع • WORK & PORTFOLIO' : '02 — WORK & PORTFOLIO'}
            </span>
            <div className="h-px bg-amber-500/20 w-16" />
          </div>

          {/* Owner Only Controls */}
          {isOwnerMode && (
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                <Crown className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'صلاحيات المالك' : 'Owner Actions'}</span>
              </span>

              <button
                onClick={onOpenAddModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{isAr ? 'إضافة مشروع' : 'Add Project'}</span>
              </button>

              {onResetProjects && (
                <button
                  onClick={onResetProjects}
                  className="p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Reset to default showcase"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Section Title & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5 mb-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {isAr ? 'أعمال وحملات إعلانية بالذكاء الاصطناعي' : 'Featured Work & AI Campaigns'}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {isAr
                ? 'مشاريع متكاملة للبراندات المصرية: إعلانات فيديو سينمائية ورأسية، استراتيجيات SOSTAC المعتمدة، وسلاسل كاروسيل تفاعلية.'
                : 'Commercial AI video campaigns, certified SOSTAC strategy plans, and interactive carousels for Egyptian brands.'}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="relative">
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-md overflow-x-auto no-scrollbar max-w-full">
              {filterTabs.map((tab) => {
                const isActive = activeCategory === tab.key;
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => onCategoryChange(tab.key)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-extrabold'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-amber-400/80'}`} />
                    <span>{isAr ? tab.labelAr : tab.labelEn}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* VIEW 1: DEFAULT OVERVIEW (3 FEATURED + 6 GRID) */}
        {/* ========================================================= */}
        {activeCategory === 'All' ? (
          <div className="space-y-16">
            
            {/* ----------------------------------------------------- */}
            {/* PART 1: أعمال مختارة (FEATURED TOP 3) */}
            {/* ----------------------------------------------------- */}
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isAr ? 'أعمال مختارة (Featured)' : 'FEATURED SHOWCASE (TOP 3)'}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                    {isAr ? 'المشاريع الرئيسية الأقوى والأكمل' : 'Flagship Projects: Video + Strategy + Carousel'}
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  (3 {isAr ? 'مشاريع متكاملة' : 'Complete Flagship Projects'})
                </span>
              </div>

              {/* 3 Featured Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {featuredTop3.map((project, idx) => {
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="rounded-3xl bg-gradient-to-b from-zinc-900/90 via-zinc-900/60 to-zinc-950 border border-white/10 hover:border-amber-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl group"
                    >
                      {/* Top Poster Image with Play Overlay */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-black">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-black/30 to-black/30" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono z-10">
                          <span className="px-2.5 py-1 rounded-md bg-amber-500/90 text-black font-extrabold text-[10px] shadow-md uppercase tracking-wider">
                            Concept Project
                          </span>
                          {project.duration && (
                            <span className="px-2 py-0.5 rounded bg-black/70 text-amber-300 font-mono text-[10px] border border-white/10">
                              {project.duration}
                            </span>
                          )}
                        </div>

                        {/* Play Video Trigger Overlay */}
                        {project.videoUrl && (
                          <button
                            onClick={() => handleOpenVideoTheatre(project)}
                            className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110 z-20 cursor-pointer pointer-events-auto"
                            aria-label="Play commercial video"
                            title={isAr ? 'تشغيل الفيديو التجاري' : 'Play Commercial Video'}
                          >
                            <Play className="w-6 h-6 fill-current ml-0.5" />
                          </button>
                        )}
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          {/* Brand Name */}
                          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                            {project.brandName || project.title}
                          </span>

                          {/* Title */}
                          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-display line-clamp-2">
                            {project.title}
                          </h4>

                          {/* Tagline / Subtitle */}
                          <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                            {project.tagline || project.subtitle || project.description}
                          </p>
                        </div>

                        {/* 3 Core Deliverable Badges: Video + Strategy + Carousel */}
                        <div className="pt-3 border-t border-white/5 space-y-3">
                          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                            {project.videoUrl && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenVideoTheatre(project);
                                }}
                                className="px-2 py-1 rounded bg-amber-500/10 hover:bg-amber-500/25 text-amber-400 border border-amber-500/25 flex items-center gap-1 cursor-pointer transition-colors"
                                title={isAr ? 'مشاهدة الفيديو' : 'Watch Video'}
                              >
                                <Play className="w-2.5 h-2.5 fill-current" />
                                <span>{isAr ? '🎬 فيديو إعلاني' : '🎬 Commercial Video'}</span>
                              </button>
                            )}

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectProject(project);
                              }}
                              className="px-2 py-1 rounded bg-amber-500/10 hover:bg-amber-500/25 text-amber-400 border border-amber-500/25 flex items-center gap-1 cursor-pointer transition-colors"
                              title={isAr ? 'استعراض خطة العمل' : 'View Strategy Plan'}
                            >
                              <Presentation className="w-2.5 h-2.5" />
                              <span>{isAr ? '📊 خطة SOSTAC' : '📊 SOSTAC Strategy'}</span>
                            </button>

                            {project.galleryImages && project.galleryImages.length > 1 ? (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLightboxState({
                                    images: project.galleryImages!,
                                    currentIndex: 0,
                                    title: project.title,
                                    category: 'Instagram Carousel',
                                    desc: project.subtitle || project.description,
                                  });
                                }}
                                className="px-2 py-1 rounded bg-amber-500/10 hover:bg-amber-500/25 text-amber-400 border border-amber-500/25 flex items-center gap-1 cursor-pointer transition-colors"
                                title={isAr ? 'تصفح شرائح الكاروسيل كاملة' : 'Browse All Carousel Slides'}
                              >
                                <ImageIcon className="w-2.5 h-2.5" />
                                <span>{isAr ? `📱 كاروسيل (${project.galleryImages.length} شرائح)` : `📱 Carousel (${project.galleryImages.length} Slides)`}</span>
                              </button>
                            ) : (
                              <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-white/5">
                                📱 كاروسيل
                              </span>
                            )}
                          </div>

                          {/* Two Action Buttons: Open Case Study + Watch Video */}
                          <div className="flex items-center gap-2 pt-1">
                            <button
                              onClick={() => onSelectProject(project)}
                              className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>{isAr ? 'فتح ملف المشروع (Dossier)' : 'Open Dossier'}</span>
                            </button>

                            {project.videoUrl && (
                              <button
                                onClick={() => handleOpenVideoTheatre(project)}
                                className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-white/10 transition-colors cursor-pointer"
                                title={isAr ? 'مشاهدة الفيديو' : 'Watch Video'}
                              >
                                <Play className="w-4 h-4 fill-current" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ----------------------------------------------------- */}
            {/* PART 2: باقي الأعمال (REST OF PROJECTS GRID - 6 PROJECTS) */}
            {/* ----------------------------------------------------- */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isAr ? 'باقي الأعمال (Grid)' : 'REST OF PROJECTS (GRID)'}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                    {isAr ? 'حملات إعلانية وكاروسيل للبراندات' : 'Commercial Food, Fashion & Comedy Campaigns'}
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  (6 {isAr ? 'مشاريع متكاملة' : 'Projects'})
                </span>
              </div>

              {/* 6 Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {grid6Projects.map((project, idx) => {
                  const isYouTube = project.videoUrl && project.videoUrl.includes('youtu');

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                      onClick={() => onSelectProject(project)}
                      className="group rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg cursor-pointer hover:-translate-y-1"
                    >
                      {/* Poster Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-black">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/40" />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono z-10">
                          <span className="px-2 py-0.5 rounded bg-amber-500/90 text-black font-extrabold shadow uppercase">
                            Concept Project
                          </span>

                          {isYouTube && (
                            <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold flex items-center gap-1 shadow">
                              <Play className="w-2.5 h-2.5 fill-current" />
                              <span>YouTube</span>
                            </span>
                          )}
                        </div>

                        {/* Subtle Center Hover Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                          <span className="px-3 py-1.5 rounded-full bg-amber-500 text-black text-xs font-bold font-mono shadow-xl flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" />
                            <span>{isAr ? 'عرض التفاصيل' : 'View Details'}</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-1">
                          {/* Brand Name */}
                          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                            {project.brandName || project.title}
                          </span>

                          {/* Title */}
                          <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors font-display line-clamp-1">
                            {project.title}
                          </h4>

                          {/* Subtitle / Type */}
                          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                            {project.tagline || project.subtitle || project.description}
                          </p>
                        </div>

                        {/* Bottom Tag Bar */}
                        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span className="text-amber-400/80">
                            {project.category}
                          </span>
                          <span className="text-zinc-500 flex items-center gap-1 group-hover:text-white transition-colors">
                            <span>{isAr ? 'تصفح' : 'Details'}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        ) : (
          /* ========================================================= */
          /* VIEW 2: FILTERED CORNER (Videos / Carousels / SOSTAC) */
          /* ========================================================= */
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <activeTabMeta.icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                      {isAr ? activeTabMeta.labelAr : activeTabMeta.labelEn}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      ({filteredCategoryProjects.length} {isAr ? 'مشاريع' : 'projects'})
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                    {isAr ? activeTabMeta.descAr : activeTabMeta.descEn}
                  </p>
                </div>
              </div>

              {/* Quick Reset back to All */}
              <button
                onClick={() => onCategoryChange('All')}
                className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 transition-colors cursor-pointer"
              >
                {isAr ? 'العودة لجميع المشاريع' : 'Back to Overview'}
              </button>
            </div>

            {/* DEDICATED CAROUSELS PER-PROJECT SHOWCASE */}
            {activeCategory === 'Carousels' ? (
              <div className="space-y-6">
                {/* Brand Selector Filter Bar */}
                <div className="p-3 rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-thin">
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase shrink-0 px-2">
                    {isAr ? 'تصفية البراند:' : 'FILTER BRAND:'}
                  </span>
                  {[
                    { id: 'ALL', labelAr: '✨ جميع الكاروسيلات (48+ شريحة)', labelEn: '✨ All Carousels (48+ Slides)' },
                    { id: 'the-lakes-sodic-east', labelAr: 'The Lakes SODIC (8)', labelEn: 'The Lakes SODIC (8)' },
                    { id: 'takaa-energy-launch', labelAr: 'TAKAA Energy (6)', labelEn: 'TAKAA Energy (6)' },
                    { id: 'v7-cream-soda-summer', labelAr: 'V7 Cream Soda (8)', labelEn: 'V7 Cream Soda (8)' },
                    { id: 'baba-geh-campaign', labelAr: 'Baba Geh (5)', labelEn: 'Baba Geh (5)' },
                    { id: 'breadfast-campaign', labelAr: 'Breadfast (5)', labelEn: 'Breadfast (5)' },
                    { id: 'buffalo-burger-commercial', labelAr: 'Buffalo Burger (5)', labelEn: 'Buffalo Burger (5)' },
                    { id: 'qaim-carousels-content', labelAr: 'QAIM Concepts (6)', labelEn: 'QAIM Concepts (6)' },
                    { id: 'qaim-fashion-growth', labelAr: 'QAIM Fashion (6)', labelEn: 'QAIM Fashion (6)' },
                  ].map((filterItem) => (
                    <button
                      key={filterItem.id}
                      onClick={() => setCarouselBrandFilter(filterItem.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                        carouselBrandFilter === filterItem.id
                          ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                          : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-white/5'
                      }`}
                    >
                      {isAr ? filterItem.labelAr : filterItem.labelEn}
                    </button>
                  ))}
                </div>

                {/* Per-Project Interactive Carousel Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {filteredCategoryProjects
                    .filter((p) => carouselBrandFilter === 'ALL' || p.id === carouselBrandFilter)
                    .map((project) => (
                      <ProjectCarouselCard
                        key={project.id}
                        project={project}
                        onOpenLightbox={(imgs, idx, ttl, cat) =>
                          setLightboxState({
                            images: imgs,
                            currentIndex: idx,
                            title: ttl,
                            category: cat || 'Carousel',
                            desc: project.tagline || project.subtitle || '',
                          })
                        }
                        onSelectProject={onSelectProject}
                        isAr={isAr}
                      />
                    ))}
                </div>
              </div>
            ) : (
              /* VIDEOS & SOSTAC CORNER GRID */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategoryProjects.map((project, idx) => (
                  <TiltCard3D
                    key={project.id}
                    onClick={() => {
                      if (activeCategory === 'Videos' && project.videoUrl) {
                        handleOpenVideoTheatre(project);
                      } else {
                        onSelectProject(project);
                      }
                    }}
                    className="group rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/40" />

                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono z-10">
                        <span className="px-2 py-0.5 rounded bg-amber-500/90 text-black font-extrabold uppercase">
                          Concept Project
                        </span>
                        {activeCategory === 'SOSTAC' && project.deckSlides && project.deckSlides.length > 0 ? (
                          <span className="px-2 py-0.5 rounded bg-black/80 text-amber-300 border border-white/10 flex items-center gap-1 font-bold">
                            <Presentation className="w-2.5 h-2.5" />
                            <span>{project.deckSlides.length} {isAr ? 'شريحة استراتيجية' : 'Deck Slides'}</span>
                          </span>
                        ) : project.videoUrl ? (
                          <span className="px-2 py-0.5 rounded bg-black/80 text-amber-300 border border-white/10 flex items-center gap-1 font-bold">
                            <Play className="w-2.5 h-2.5 fill-current" />
                            <span>Play Video</span>
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                          {project.brandName || project.title}
                        </span>
                        <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-display line-clamp-1">
                          {project.title}
                        </h4>
                        <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                          {project.tagline || project.subtitle || project.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span>{project.category}</span>
                        <span className="text-amber-400 group-hover:underline">
                          {isAr ? 'فتح التفاصيل ←' : 'Open Dossier →'}
                        </span>
                      </div>
                    </div>
                  </TiltCard3D>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* Instant Playable Video Theatre Modal */}
      {theatreVideo && (
        <VideoTheatreModal
          video={theatreVideo}
          onClose={() => setTheatreVideo(null)}
          onOpenProjectDetails={(proj) => {
            setTheatreVideo(null);
            onSelectProject(proj);
          }}
          isAr={isAr}
        />
      )}

      {/* Lightbox for Full-Screen Carousel Slides */}
      {lightboxState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setLightboxState(null)} />
          <div className="relative w-full max-w-5xl bg-[#0c0c10] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
            <div className="px-6 py-4 bg-zinc-950 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  {lightboxState.category} • Slide {lightboxState.currentIndex + 1} of {lightboxState.images.length}
                </span>
                <h3 className="text-base font-bold text-white">{lightboxState.title}</h3>
              </div>
              <button
                onClick={() => setLightboxState(null)}
                className="p-2 rounded-full bg-zinc-900 hover:bg-amber-500 hover:text-black text-white border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 bg-black flex items-center justify-center p-4 min-h-[350px]">
              <img
                src={lightboxState.images[lightboxState.currentIndex]}
                alt="Slide"
                className="max-h-[65vh] w-auto object-contain rounded-xl"
              />
              {lightboxState.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setLightboxState((prev) =>
                        prev
                          ? {
                              ...prev,
                              currentIndex:
                                prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1,
                            }
                          : null
                      )
                    }
                    className="absolute left-4 p-3 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setLightboxState((prev) =>
                        prev
                          ? {
                              ...prev,
                              currentIndex: (prev.currentIndex + 1) % prev.images.length,
                            }
                          : null
                      )
                    }
                    className="absolute right-4 p-3 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
