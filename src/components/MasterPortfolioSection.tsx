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
import { AudioMotionVisualizer } from './MotionGraphicsDecorations';
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
  const whatsappNumber = '201110095403';

  // Per-card interactive carousel slide index
  const [cardSlideIndices, setCardSlideIndices] = useState<Record<string, number>>({});

  // Full-screen Lightbox for Carousels & Visuals
  const [lightboxState, setLightboxState] = useState<{
    images: string[];
    currentIndex: number;
    title: string;
    category: string;
    desc: string;
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

  // The 3 Distinct Corners requested by the user + All Projects Overview
  const filterTabs = [
    {
      key: 'Videos',
      labelAr: '🎬 ركن الفيديوهات الإعلانية',
      labelEn: 'Project Videos',
      descAr: 'الفيديوهات التجارية ومونتاج CapCut وإعلانات يوتيوب — تشغيل فوري بدون صور ثابتة',
      descEn: 'Commercial video commercials, CapCut reels & YouTube shorts with instant playback',
      icon: Play,
    },
    {
      key: 'Carousels',
      labelAr: '📱 ركن الكاروسيل التفاعلي',
      labelEn: 'Project Carousels',
      descAr: 'سلاسل الكاروسيل التفاعلية متعددة الشرائح للمنتجات وعلامات الأزياء مع تصفح كامل',
      descEn: 'Interactive multi-slide product & fashion carousels with slide-by-slide inspection',
      icon: ImageIcon,
    },
    {
      key: 'SOSTAC',
      labelAr: '📊 ركن ملفات استراتيجيات SOSTAC',
      labelEn: 'SOSTAC Strategy & Decks',
      descAr: 'خطط التسويق الاستراتيجية بنموذج SOSTAC المعتمد، عروض PPTX، وتقارير أبحاث السوق PDF',
      descEn: 'Certified SOSTAC strategic plans, PowerPoint decks & market research PDFs',
      icon: Presentation,
    },
    {
      key: 'All',
      labelAr: '✨ جميع المشاريع',
      labelEn: 'All Projects',
      descAr: 'استعراض شامل لجميع الأعمال والحملات المعتمدة في جوجل درايف',
      descEn: 'Comprehensive showcase of all verified deliverables and campaigns',
      icon: Layers,
    },
  ];

  // Helper categorization to cleanly map Projects to their respective corners
  const isVideoProject = (p: Project) => {
    const cat = p.category as string;
    return (
      p.id === 'baba-geh-pro-edition' ||
      p.id === 'baba-geh-campaign' ||
      p.id === 'buffalo-burger-commercial' ||
      p.id === 'breadfast-campaign' ||
      p.id === 'takaa-capcut-viral-template' ||
      p.id === 'spiro-spathis-commercial' ||
      (!!p.videoUrl && (cat === 'Short-Form Video' || cat === 'Creative Video & Editing' || p.id === 'v7-cream-soda-summer' || p.id === 'qaim-fashion-growth'))
    );
  };

  const isCarouselProject = (p: Project) => {
    const cat = p.category as string;
    return (
      p.id === 'qaim-carousels-content' ||
      p.id === 'takaa-energy-launch' ||
      p.id === 'v7-cream-soda-summer' ||
      cat === 'Carousels' ||
      cat === 'Social Media Content' ||
      cat === 'Styling Carousel' ||
      (!!p.galleryImages && p.galleryImages.length > 1 && !p.id.includes('baba-geh'))
    );
  };

  const isStrategyProject = (p: Project) => {
    return (
      p.id === 'qaim-fashion-growth' ||
      p.id === 'takaa-energy-launch' ||
      p.id === 'v7-cream-soda-summer' ||
      p.id === 'hm-egypt-market-research' ||
      p.id === 'hm-egypt-growth-strategy' ||
      p.id === 'depi-digital-marketing-capstone' ||
      p.id === 'furniture-facebook-page-funnel' ||
      p.category === 'Marketing Strategy' ||
      p.category === 'Market Research & Audit' ||
      p.category === 'Brand Presentation & Deck' ||
      (!!p.deckSlides && p.deckSlides.length > 0)
    );
  };

  // Smart, strict filtering per user specification
  const filteredProjects = projects
    .filter((p) => {
      // Exclude any deleted / non-Drive phantom projects
      if (
        p.id === 'level-fitness-spec' ||
        p.id === 'wojooh-tourism-spec' ||
        p.id === 'golden-sun-spec'
      ) {
        return false;
      }

      if (activeCategory === 'Videos' || activeCategory === 'CapCut') {
        return isVideoProject(p);
      }

      if (activeCategory === 'Carousels') {
        return isCarouselProject(p);
      }

      if (activeCategory === 'SOSTAC' || activeCategory === 'Strategy' || activeCategory === 'Paid Ads') {
        return isStrategyProject(p);
      }

      return true;
    })
    .sort((a, b) => {
      if (activeCategory === 'Videos' || activeCategory === 'CapCut') {
        const order = [
          'baba-geh-campaign',
          'baba-geh-pro-edition',
          'buffalo-burger-commercial',
          'breadfast-campaign',
          'takaa-capcut-viral-template',
          'spiro-spathis-commercial',
        ];
        const idxA = order.indexOf(a.id);
        const idxB = order.indexOf(b.id);
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;
        if (idxA !== -1) return -1;
        if (idxB !== -1) return 1;
      }
      if (activeCategory === 'Carousels') {
        const order = ['qaim-carousels-content', 'takaa-energy-launch', 'v7-cream-soda-summer'];
        const idxA = order.indexOf(a.id);
        const idxB = order.indexOf(b.id);
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;
        if (idxA !== -1) return -1;
        if (idxB !== -1) return 1;
      }
      if (activeCategory === 'SOSTAC' || activeCategory === 'Strategy') {
        const order = [
          'qaim-fashion-growth',
          'hm-egypt-market-research',
          'hm-egypt-growth-strategy',
          'depi-digital-marketing-capstone',
          'takaa-energy-launch',
          'v7-cream-soda-summer',
          'furniture-facebook-page-funnel',
        ];
        const idxA = order.indexOf(a.id);
        const idxB = order.indexOf(b.id);
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;
        if (idxA !== -1) return -1;
        if (idxB !== -1) return 1;
      }
      return 0;
    });

  const activeTabMeta = filterTabs.find((t) => t.key === activeCategory) || filterTabs[0];

  return (
    <section id="work" className="py-20 relative bg-[#07070a] border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              {isAr ? '04 — معرض المشاريع والأركان الثلاثة • PROJECTS HUB' : '04 — PROJECTS HUB & WORK CORNERS'}
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

        {/* Title & Filter Bar Container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5 mb-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {isAr ? 'معرض المشاريع وأركان العمل' : 'Projects Hub & Work Corners'}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {isAr
                ? 'استعراض منظم للمشاريع وفق أركان العمل الثلاثة: 🎬 الفيديوهات الإعلانية، 📱 سلاسل الكاروسيل التفاعلية، و 📊 خطط وملفات استراتيجيات SOSTAC.'
                : 'Curated projects organized into 3 dedicated corners: 🎬 Commercial Videos, 📱 Interactive Carousels, and 📊 SOSTAC Strategy Decks.'}
            </p>
          </div>

          {/* Clean 6-Category Filter Buttons */}
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

        {/* Active Category Contextual Description Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-zinc-900/40 border border-white/10 flex items-center justify-between gap-4 flex-wrap">
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
                  ({filteredProjects.length} {isAr ? 'عناصر معروضة' : 'deliverables'})
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                {isAr ? activeTabMeta.descAr : activeTabMeta.descEn}
              </p>
            </div>
          </div>

          {activeCategory === 'Carousels' && (
            <div className="text-[11px] font-mono text-amber-400/90 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{isAr ? 'تصفح الشرائح مباشرة بالأسهم داخل الكارت' : 'Swipe slides directly on the card'}</span>
            </div>
          )}

          {activeCategory === 'CapCut' && (
            <div className="text-[11px] font-mono text-red-400 bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20 flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isAr ? 'فيديو بافلو برجر مدعوم برابط يوتيوب شورتس المباشر' : 'Buffalo Burger powered by direct YouTube Shorts'}</span>
            </div>
          )}
        </div>

        {/* Unified Projects Grid with Framer-Motion Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const isBuffaloBurger = project.id === 'buffalo-burger-commercial';
            const isBreadfast = project.id === 'breadfast-campaign';
            const isYouTube =
              isBuffaloBurger ||
              isBreadfast ||
              (project.videoUrl && (project.videoUrl.includes('youtu') || project.videoUrl.includes('youtube')));

            // Strict categorization: if it's a video, it is NEVER a carousel!
            const hasVideo = isVideoProject(project);
            const isCarousel = !hasVideo && isCarouselProject(project);
            const isStrategy = !hasVideo && !isCarousel && isStrategyProject(project);
            const isPaidFunnelAds = project.id.toLowerCase().includes('funnel') || project.title.toLowerCase().includes('funnel');

            // Gather all slide images for true carousels ONLY
            const slideImages: string[] =
              isCarousel && project.galleryImages && project.galleryImages.length > 0
                ? Array.from(new Set([project.image, ...project.galleryImages]))
                : [project.image];

            const currentSlide = cardSlideIndices[project.id] || 0;
            const displayedImage = isCarousel ? (slideImages[currentSlide] || project.image) : project.image;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (idx % 3) * 0.08,
                }}
                className="h-full"
              >
                <TiltCard3D
                  maxTilt={5}
                  onClick={() => {
                    if (activeCategory === 'Videos' || (hasVideo && activeCategory !== 'Carousels' && activeCategory !== 'SOSTAC')) {
                      setTheatreVideo({
                        title: project.title,
                        clientOrSpec: project.clientOrSpec,
                        category: project.category,
                        videoUrl: project.videoUrl!,
                        driveUrl: project.driveFolderUrl,
                        duration: isAr ? (project.durationAr || project.duration) : project.duration,
                        project: project,
                      });
                    } else if (isCarousel && slideImages.length > 1) {
                      setLightboxState({
                        images: slideImages,
                        currentIndex: currentSlide,
                        title: project.title,
                        category: project.category,
                        desc: project.tagline || project.subtitle || project.description,
                      });
                    } else {
                      onSelectProject(project);
                    }
                  }}
                  className="group rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl cursor-pointer h-full"
                >
                  {/* Top Media Area */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src={displayedImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/25 to-black/40 pointer-events-none" />

                    {/* Top Evidence & Drive Bar */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono gap-1.5 z-10">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {(() => {
                          const badge = project.specBadge || (project.clientOrSpec.toLowerCase().includes('spec') ? 'Spec Work' : project.clientOrSpec.toLowerCase().includes('concept') ? 'Concept' : project.clientOrSpec.toLowerCase().includes('academic') || project.clientOrSpec.toLowerCase().includes('strategic') ? 'Coursework' : 'Concept');
                          const badgeStyles =
                            badge === 'Spec Work'
                              ? 'bg-orange-950/80 text-orange-300 border-orange-500/40'
                              : badge === 'Concept'
                              ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                              : badge === 'Coursework'
                              ? 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                              : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40';

                          return (
                            <span className={`px-2 py-0.5 rounded-md backdrop-blur-md border font-bold text-[10px] ${badgeStyles}`}>
                              {badge}
                            </span>
                          );
                        })()}

                        {isYouTube && (
                          <span className="px-2 py-0.5 rounded-md bg-red-600/90 text-white font-bold text-[10px] shadow-sm flex items-center gap-1">
                            <Play className="w-2.5 h-2.5 fill-current" />
                            <span>{isBuffaloBurger ? 'YouTube Shorts' : 'YouTube HD'}</span>
                          </span>
                        )}

                        {hasVideo && !isYouTube && (
                          <span className="px-2 py-0.5 rounded-md bg-amber-500/90 text-black font-bold text-[10px] shadow-sm flex items-center gap-1">
                            <Play className="w-2.5 h-2.5 fill-current" />
                            <span>Video</span>
                          </span>
                        )}

                        {isCarousel && (
                          <span className="px-2 py-0.5 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-bold text-[10px] flex items-center gap-1">
                            <Layers className="w-2.5 h-2.5" />
                            <span>{slideImages.length} Slides</span>
                          </span>
                        )}

                        {isStrategy && (
                          <span className="px-2 py-0.5 rounded-md bg-purple-950/80 text-purple-300 border border-purple-500/40 font-bold text-[10px] flex items-center gap-1">
                            <Presentation className="w-2.5 h-2.5" />
                            <span>SOSTAC Deck</span>
                          </span>
                        )}
                      </div>

                      {/* Drive Folder Link (Secondary Backup) */}
                      <div className="flex items-center gap-1">
                        {project.driveFolderUrl && (
                          <a
                            href={project.driveFolderUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-2 py-0.5 rounded bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-white/10 text-[10px] flex items-center gap-1 transition-colors"
                            title={isAr ? 'مجلد الدرايف كمرجع إضافي' : 'Open Google Drive Folder (Backup)'}
                          >
                            <span>Drive</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                        {hasVideo && <AudioMotionVisualizer isPlaying={true} bars={4} />}
                      </div>
                    </div>

                    {/* Interactive Carousel Slide Controls (ONLY FOR REAL CAROUSELS) */}
                    {isCarousel && slideImages.length > 1 && (
                      <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none z-20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardSlideIndices((prev) => ({
                              ...prev,
                              [project.id]:
                                currentSlide === 0 ? slideImages.length - 1 : currentSlide - 1,
                            }));
                          }}
                          className="w-7 h-7 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all pointer-events-auto cursor-pointer shadow-md"
                          title="Previous slide"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardSlideIndices((prev) => ({
                              ...prev,
                              [project.id]: (currentSlide + 1) % slideImages.length,
                            }));
                          }}
                          className="w-7 h-7 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all pointer-events-auto cursor-pointer shadow-md"
                          title="Next slide"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {/* Central Action Button tailored strictly to Content Type */}
                    {hasVideo ? (
                      /* Instant Play Commercial Video & YouTube Action */
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTheatreVideo({
                            title: project.title,
                            clientOrSpec: project.clientOrSpec,
                            category: project.category,
                            videoUrl: project.videoUrl!,
                            driveUrl: project.driveFolderUrl,
                            duration: isAr ? (project.durationAr || project.duration) : project.duration,
                            project: project,
                          });
                        }}
                        className={`absolute inset-0 m-auto w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl cursor-pointer z-10 ${
                          isYouTube ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-amber-500 hover:bg-amber-400 text-black'
                        }`}
                        title={isYouTube ? (isAr ? 'تشغيل فيديو اليوتيوب' : 'Play YouTube Video') : (isAr ? 'تشغيل الفيديو الإعلاني فوراً' : 'Play Commercial Video')}
                      >
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </button>
                    ) : isCarousel ? (
                      /* Carousel Inspect / Lightbox Action */
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxState({
                            images: slideImages,
                            currentIndex: currentSlide,
                            title: project.title,
                            category: project.category,
                            desc: project.tagline || project.subtitle || project.description,
                          });
                        }}
                        className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl cursor-pointer z-10"
                        title={isAr ? 'تكبير وتصفح شرائح الكاروسيل' : 'Inspect Carousel Slides'}
                      >
                        <Layers className="w-6 h-6" />
                      </button>
                    ) : isStrategy ? (
                      /* Strategy Presentation Inspection Action */
                      <button
                        onClick={() => onSelectProject(project)}
                        className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl cursor-pointer z-10"
                        title={isAr ? 'تصفح خطة الاستراتيجية وشرائح العرض' : 'Inspect Strategy Deck'}
                      >
                        <Presentation className="w-6 h-6" />
                      </button>
                    ) : (
                      /* Static Deliverable Inspection */
                      <button
                        onClick={() => onSelectProject(project)}
                        className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-zinc-900/90 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl cursor-pointer z-10 border border-white/20"
                        title={isAr ? 'استعراض المشروع' : 'View Deliverable'}
                      >
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    )}

                    {/* Bottom Metadata & Slide Dots Line */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
                      {isCarousel && slideImages.length > 1 ? (
                        <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                          {slideImages.map((_, dotIdx) => (
                            <span
                              key={dotIdx}
                              className={`h-1.5 rounded-full transition-all ${
                                dotIdx === currentSlide ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/40'
                              }`}
                            />
                          ))}
                          <span className="text-[10px] font-mono text-zinc-300 ml-1">
                            {currentSlide + 1}/{slideImages.length}
                          </span>
                        </div>
                      ) : (project.duration || project.durationAr) ? (
                        <span className="px-2 py-0.5 rounded bg-black/80 text-amber-300 font-mono text-[10px] font-bold border border-amber-500/30 backdrop-blur-md flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5 text-amber-400" />
                          <span>{isAr ? project.durationAr || project.duration : project.duration}</span>
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-black/80 text-zinc-400 font-mono text-[10px] border border-white/10">
                          {project.category}
                        </span>
                      )}

                      <div className="flex items-center gap-1.5">
                        {isBuffaloBurger ? (
                          <span className="text-red-400 font-mono text-[10px] font-bold bg-red-950/80 px-1.5 py-0.5 rounded border border-red-500/30">
                            YouTube 9:16
                          </span>
                        ) : project.id.includes('capcut') ? (
                          <span className="text-amber-400 font-mono text-[10px] font-bold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                            CapCut Pro
                          </span>
                        ) : isStrategy ? (
                          <span className="text-purple-300 font-mono text-[10px] font-bold bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-500/30">
                            SOSTAC Deck
                          </span>
                        ) : isPaidFunnelAds ? (
                          <span className="text-emerald-300 font-mono text-[10px] font-bold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                            Meta Funnel
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Quiet Kicker with Category & Year */}
                      <div className="text-xs font-mono text-zinc-400 mb-1.5 flex items-center justify-between gap-1.5 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <span className="text-amber-400/90 font-semibold">{project.category}</span>
                          <span>·</span>
                          <span>2026</span>
                        </div>
                        {(project.duration || project.durationAr) && (
                          <span className="text-[11px] text-zinc-400 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                            <Clock className="w-3 h-3 text-amber-400/80" />
                            <span>{isAr ? project.durationAr || project.duration : project.duration}</span>
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                        {project.tagline || project.subtitle || project.description}
                      </p>
                    </div>

                    {/* Primary Action Button tailored strictly to content type */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                      {isYouTube ? (
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{isAr ? 'شاهد على يوتيوب' : 'Watch on YouTube'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : hasVideo ? (
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{isAr ? 'تشغيل الفيديو الإعلاني' : 'Play Commercial Video'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      ) : isCarousel ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxState({
                              images: slideImages,
                              currentIndex: currentSlide,
                              title: project.title,
                              category: project.category,
                              desc: project.tagline || project.subtitle || project.description,
                            });
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>{isAr ? 'تصفح شرائح الكاروسيل' : 'View Carousel Slides'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                        >
                          <Presentation className="w-3.5 h-3.5" />
                          <span>{isAr ? 'تصفح خطة الاستراتيجية والـ Deck' : 'View Strategy Deck'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {/* WhatsApp Inquiry & Owner Edit */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const text = isAr
                              ? `مرحباً أستاذ محمد، أود مناقشة مشروع وحملة مماثلة لـ: ${project.title}`
                              : `Hi Mohamed, I'd like to discuss a marketing project similar to: ${project.title}`;
                            window.open(
                              `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
                              '_blank'
                            );
                          }}
                          className="text-xs text-zinc-400 hover:text-emerald-400 flex items-center gap-1 font-mono transition-colors cursor-pointer"
                          title="WhatsApp Inquiry"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">WhatsApp</span>
                        </button>

                        {isOwnerMode && onEditProject && (
                          <button
                            onClick={() => onEditProject(project)}
                            className="p-1 rounded bg-zinc-800 text-zinc-400 hover:text-amber-400 transition-colors"
                            title="Edit"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FULL-SCREEN CAROUSEL & VISUAL LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightboxState && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn">
            <div
              className="fixed inset-0 cursor-pointer"
              onClick={() => setLightboxState(null)}
              aria-label="Close Lightbox"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl overflow-hidden flex flex-col z-10 max-h-[92vh]"
            >
              {/* Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-900/80">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500 text-black text-[11px] font-bold">
                    {lightboxState.category}
                  </span>
                  <span className="text-xs font-bold text-white truncate max-w-sm">
                    {lightboxState.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {lightboxState.images.length > 1 && (
                    <span className="text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md">
                      {lightboxState.currentIndex + 1} / {lightboxState.images.length}
                    </span>
                  )}
                  <button
                    onClick={() => setLightboxState(null)}
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                    title="Close (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Image Display with Navigation */}
              <div className="relative aspect-[16/10] sm:aspect-video bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={lightboxState.images[lightboxState.currentIndex]}
                  alt={lightboxState.title}
                  className="w-full h-full object-contain"
                />

                {lightboxState.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxState((prev) =>
                          prev
                            ? {
                                ...prev,
                                currentIndex:
                                  prev.currentIndex === 0
                                    ? prev.images.length - 1
                                    : prev.currentIndex - 1,
                              }
                            : null
                        );
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                      title="Previous Slide"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxState((prev) =>
                          prev
                            ? {
                                ...prev,
                                currentIndex:
                                  (prev.currentIndex + 1) % prev.images.length,
                              }
                            : null
                        );
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                      title="Next Slide"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Footer Thumbnails & Caption */}
              <div className="p-4 bg-zinc-900/60 border-t border-white/5 space-y-3">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {lightboxState.desc}
                </p>

                {lightboxState.images.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1">
                    {lightboxState.images.map((img, thumbIdx) => (
                      <button
                        key={thumbIdx}
                        onClick={() =>
                          setLightboxState((prev) =>
                            prev ? { ...prev, currentIndex: thumbIdx } : null
                          )
                        }
                        className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                          thumbIdx === lightboxState.currentIndex
                            ? 'border-amber-400 scale-105'
                            : 'border-white/10 opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Instant Video Theatre Player */}
      <VideoTheatreModal
        video={theatreVideo}
        onClose={() => setTheatreVideo(null)}
        onOpenProjectDetails={(proj) => {
          setTheatreVideo(null);
          onSelectProject(proj);
        }}
        isAr={isAr}
      />
    </section>
  );
};
