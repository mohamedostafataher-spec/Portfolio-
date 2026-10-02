import React, { useState } from 'react';
import {
  Play,
  Eye,
  Layers,
  Film,
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
  RefreshCw,
  Crown,
  Edit3,
  Trash2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useOwner } from '../context/OwnerContext';
import { TiltCard3D } from './TiltCard3D';
import { AudioMotionVisualizer } from './MotionGraphicsDecorations';

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

  // Lightbox state for full-screen photo & poster inspection
  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    title: string;
    category: string;
    desc: string;
  } | null>(null);

  // Filter Categories tailored to Mohamed's Digital Marketing identity
  const filterTabs = [
    { key: 'All', labelAr: 'جميع الحملات', labelEn: 'All Campaigns' },
    { key: 'Paid Ads', labelAr: 'إعلانات ممولة ومسارات بيع', labelEn: 'Paid Ads & Funnels' },
    { key: 'Carousels', labelAr: 'كاروسيل السوشيال ميديا', labelEn: 'Carousels' },
    { key: 'CapCut', labelAr: 'فيديوهات كاب كات والريلز', labelEn: 'CapCut & Reels' },
    { key: 'Strategy', labelAr: 'استراتيجيات ودراسات SOSTAC', labelEn: 'Marketing Strategy' },
    { key: 'Visuals', labelAr: 'المعرض البصري والبوسترات', labelEn: 'Visuals & Lookbooks' },
  ];

  // Smart filtering logic
  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;

    if (activeCategory === 'Paid Ads') {
      return (
        p.id.includes('funnel') ||
        p.id.includes('depi') ||
        p.skills.some((s) => s.toLowerCase().includes('ad') || s.toLowerCase().includes('funnel'))
      );
    }

    if (activeCategory === 'Carousels') {
      return (
        p.id.includes('carousel') ||
        p.category === 'Brand Presentation & Deck' ||
        (p.deckSlides && p.deckSlides.length > 0) ||
        p.skills.some((s) => s.toLowerCase().includes('carousel'))
      );
    }

    if (activeCategory === 'CapCut') {
      return (
        p.id.includes('capcut') ||
        p.id.includes('baba-geh') ||
        p.category === 'Short-Form Video' ||
        p.tools.some((t) => t.toLowerCase().includes('capcut')) ||
        p.aspectRatio === '9:16'
      );
    }

    if (activeCategory === 'Strategy') {
      return (
        p.category === 'Marketing Strategy' ||
        p.category === 'Market Research & Audit' ||
        (p.tracks && p.tracks.includes('Marketing Strategy')) ||
        (p.deckSlides && p.deckSlides.length > 0)
      );
    }

    if (activeCategory === 'Visuals') {
      return (
        p.category === 'Photography' ||
        p.category === 'Food Advertising' ||
        (p.tracks && p.tracks.includes('Photography')) ||
        (p.galleryImages && p.galleryImages.length > 1)
      );
    }

    return true;
  });

  return (
    <section id="work" className="py-24 relative bg-[#07070a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              {isAr ? '04 — المشاريع المختارة • SELECTED WORK' : '04 — SELECTED WORK'}
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
                  title={isAr ? 'إعادة ضبط المشاريع' : 'Reset projects'}
                  className="p-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* 04 — SELECTED WORK (MENU SHOWROOM) */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
            {isAr ? 'المشاريع المختارة (SELECTED WORK)' : 'SELECTED WORK MENU'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-8">
            {isAr
              ? 'كل مشروع هنا يؤكد مهارة تسويقية محددة: من التفكير الإبداعي، وإعلانات الأداء، وحتى تخطيط الحملات والسرد القصصي.'
              : 'Each project is curated to demonstrate a specific discipline: Creative Thinking, Performance Marketing, Integrated Campaigns, and Brand Strategy.'}
          </p>

          {/* Menu Rows */}
          <div className="space-y-3">
            {[
              {
                num: '01',
                id: 'baba-geh-campaign',
                nameAr: 'BABA GAH (بابا جه)',
                nameEn: 'BABA GAH',
                typeAr: 'إعلان تجاري وسينمائي كوميدي (Creative TVC & Viral Pacing)',
                typeEn: 'Creative Advertising / TVC',
                msgAr: 'الرسالة: التفكير الإبداعي وهندسة الضحكة (Creative Thinking)',
                msgEn: 'Message: Creative Thinking & Viral Pacing',
              },
              {
                num: '02',
                id: 'furniture-brand-funnel',
                nameAr: 'LOCAL FURNITURE STORE (حملة براند الأثاث)',
                nameEn: 'LOCAL FURNITURE STORE',
                typeAr: 'إعلانات ممولة ومسارات تحويل مبيعات Meta Ads (+185 Leads)',
                typeEn: 'Performance Marketing / Meta Ads',
                msgAr: 'الرسالة: التسويق المالي وتوليد العملاء المحتملين (Performance Marketing)',
                msgEn: 'Message: Performance Marketing & Lead Gen',
              },
              {
                num: '03',
                id: 'hm-egypt-growth-strategy',
                nameAr: 'H&M EGYPT (إتش آند إم مصر)',
                nameEn: 'H&M EGYPT',
                typeAr: 'حملة متكاملة للجامعات ودراسة سوق 7.5 مليار دولار (Integrated Campaign)',
                typeEn: 'Integrated Campus Campaign',
                msgAr: 'الرسالة: التخطيط التسويقي وأبحاث السوق (Campaign Planning)',
                msgEn: 'Message: Campaign Planning & Market Sizing',
              },
              {
                num: '04',
                id: 'qaim-fashion-growth',
                nameAr: 'QAIM MENSWEAR (قيم للأزياء)',
                nameEn: 'QAIM MENSWEAR',
                typeAr: 'استراتيجية نمو SOSTAC وتدقيق حساب 62K وفويس أوفر (Growth Strategy)',
                typeEn: 'SOSTAC Growth Strategy & Audio Directing',
                msgAr: 'الرسالة: الاستراتيجية والابتكار والإخراج الصوتي (Strategy + Innovation)',
                msgEn: 'Message: Strategy + Innovation & Audio Directing',
              },
              {
                num: '05',
                id: 'takaa-capcut-viral-template',
                nameAr: 'TAKAA & V7 (تاكة وفي سفن)',
                nameEn: 'TAKAA & V7 SUMMER',
                typeAr: 'تسويق فيديو وإطلاق علامات تجارية وماتش-كت سينمائي (Video Marketing)',
                typeEn: 'Video Marketing / Storytelling',
                msgAr: 'الرسالة: إخراج الفيديو والسرد القصصي (Video & Storytelling)',
                msgEn: 'Message: Video Marketing & Storytelling',
              },
            ].map((item) => {
              const matchedProj = projects.find((p) => p.id === item.id) || projects[0];

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectProject(matchedProj)}
                  className="group p-4 sm:p-5 rounded-2xl bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/5 hover:border-amber-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xl sm:text-2xl font-black text-zinc-600 group-hover:text-amber-400 transition-colors shrink-0">
                      {item.num}
                    </span>

                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10 hidden sm:block">
                      <img src={matchedProj.image} alt={matchedProj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                          {isAr ? item.nameAr : item.nameEn}
                        </h3>
                        <span className="text-zinc-600 hidden sm:inline">&bull;</span>
                        <span className="text-xs text-amber-400 font-mono">
                          {isAr ? item.typeAr : item.typeEn}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 font-mono">
                        {isAr ? item.msgAr : item.msgEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                    <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                      {isAr ? 'فتح دراسة الحالة' : 'View Case Study'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-amber-500 text-zinc-400 group-hover:text-black flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 05 — CASE STUDIES & ALL CAMPAIGNS HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pt-10 border-t border-white/10">
          <div>
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-2">
              {isAr ? '05 — دراسات الحالة وأرشيف الحملات' : '05 — CASE STUDIES & CAMPAIGN ARCHIVE'}
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
              {isAr ? 'جميع الحملات ودراسات الحالة المفصلة' : 'Detailed Case Studies & Archive'}
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              {isAr
                ? 'تصفح تفاصيل كل حملة: المشكلة، رؤية المستهلك، الفكرة، المخرجات، والنتائج بالأرقام.'
                : 'Browse the complete challenge, consumer insight, creative idea, strategy, output, and KPIs.'}
            </p>
          </div>

          {/* Segmented Filter Bar (Clean, Zero Slop) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-900/80 border border-white/5 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => onCategoryChange(tab.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {isAr ? tab.labelAr : tab.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Unified Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const hasVideo = !!(project.videoUrl || project.videoPreviewUrl);
            const hasDeck = !!(project.deckSlides && project.deckSlides.length > 0);
            const isCapCut =
              project.id.includes('capcut') ||
              project.id.includes('baba-geh') ||
              project.tools.some((t) => t.toLowerCase().includes('capcut'));
            const isCarousel =
              project.id.includes('carousel') || hasDeck;

            // Highlight primary metric
            const mainStat = project.stats && project.stats[0];

            return (
              <TiltCard3D
                key={project.id}
                maxTilt={6}
                className="group rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Visual Cover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/20 to-black/40" />

                  {/* Top Subtle Typographic Kicker & Evidence Status */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono gap-1.5 z-10">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.evidenceStatus ? (
                        <span
                          className={`px-2 py-0.5 rounded-md backdrop-blur-md border font-bold text-[10px] ${
                            project.evidenceStatus === 'Drive-backed'
                              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                              : project.evidenceStatus === 'Coursework'
                              ? 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                              : project.evidenceStatus === 'Spec Concept'
                              ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                              : 'bg-purple-950/80 text-purple-300 border-purple-500/40'
                          }`}
                        >
                          {isAr ? project.evidenceLabelAr || project.evidenceStatus : project.evidenceStatus}
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-amber-300 font-bold text-[10px]">
                          {project.clientOrSpec}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      {project.driveFolderUrl && (
                        <a
                          href={project.driveFolderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2 py-0.5 rounded bg-zinc-900/90 hover:bg-zinc-800 text-amber-400 border border-white/10 text-[10px] flex items-center gap-1 transition-colors"
                          title="Open Verified Google Drive Folder"
                        >
                          <span>Drive</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                      {hasVideo && <AudioMotionVisualizer isPlaying={true} bars={4} />}
                    </div>
                  </div>

                  {/* Central Play or Inspect Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl cursor-pointer z-10"
                    aria-label={`Open ${project.title}`}
                  >
                    {hasVideo ? (
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>

                  {/* Bottom Image Metadata Line */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    {mainStat ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold border border-emerald-500/30">
                        {mainStat.value}
                      </span>
                    ) : (
                      <span className="text-zinc-400 font-mono text-[11px]">
                        {project.category}
                      </span>
                    )}

                    {isCapCut && (
                      <span className="text-amber-400 font-mono text-[10px] font-bold">
                        CapCut Pro
                      </span>
                    )}
                    {isCarousel && !isCapCut && (
                      <span className="text-cyan-400 font-mono text-[10px] font-bold flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        <span>Carousel</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Quiet Kicker */}
                    <div className="text-xs font-mono text-zinc-400 mb-1.5 flex items-center gap-1.5">
                      <span>{project.category}</span>
                      <span>·</span>
                      <span>2026</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.tagline || project.subtitle || project.description}
                    </p>
                  </div>

                  {/* Actions & Buttons */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <span>
                        {hasVideo
                          ? isAr
                            ? 'مشاهدة الفيديو'
                            : 'Watch Video'
                          : isAr
                          ? 'دراسة الحالة والنتائج'
                          : 'View Case Study'}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          const text = isAr
                            ? `مرحباً أستاذ محمد، أود مناقشة حملة تسويقية مماثلة لمشروع: ${project.title}`
                            : `Hi Mohamed, I'd like to discuss a marketing campaign similar to: ${project.title}`;
                          window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
                        }}
                        className="text-xs text-zinc-400 hover:text-emerald-400 flex items-center gap-1 font-mono transition-colors cursor-pointer"
                        title="WhatsApp Inquiry"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>

                      {/* Owner Edit Button */}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
