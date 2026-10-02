import React, { useState } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  Plus,
  Play,
  Filter,
  RefreshCw,
  Eye,
  Film,
  Calendar,
  CheckCircle2,
  Edit3,
  Trash2,
  Crown,
  Presentation,
  FileText,
  FolderOpen,
  Layers,
  Camera,
  Music2,
} from 'lucide-react';
import { Project } from '../types';
import { useOwner } from '../context/OwnerContext';
import { useLanguage } from '../context/LanguageContext';
import { TiltCard3D } from './TiltCard3D';
import { AudioMotionVisualizer } from './MotionGraphicsDecorations';

interface FeaturedWorkProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenAddModal: () => void;
  onEditProject?: (project: Project) => void;
  onDeleteProject?: (projectId: string) => void;
  onResetProjects?: () => void;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  projects,
  onSelectProject,
  onOpenAddModal,
  onEditProject,
  onDeleteProject,
  onResetProjects,
  activeCategory: controlledCategory,
  onCategoryChange,
}) => {
  const { isOwnerMode } = useOwner();
  const { isAr, t } = useLanguage();
  const [internalCategory, setInternalCategory] = useState<string>('All');

  const activeCategory = controlledCategory ?? internalCategory;
  const handleCategorySelect = (catKey: string) => {
    if (onCategoryChange) {
      onCategoryChange(catKey);
    } else {
      setInternalCategory(catKey);
    }
  };

  const categories = [
    { key: 'All', labelEn: 'All Work', labelAr: 'الكل (جميع الأعمال)' },
    { key: 'Carousels', labelEn: 'Carousels', labelAr: 'كاروسيل السوشيال ميديا (Carousels)' },
    { key: 'CapCut', labelEn: 'CapCut & Reels', labelAr: 'فيديوهات كاب كات والريلز (CapCut Pro)' },
    { key: 'Photography', labelEn: 'Photography & Visuals', labelAr: 'التصميم البصري والصور (Visuals)' },
    { key: 'Videos', labelEn: 'Commercial TVCs', labelAr: 'الإعلانات التجارية (TVCs)' },
    { key: 'Marketing Strategy', labelEn: 'Marketing Strategy', labelAr: 'استراتيجيات التسويق والـ SOSTAC' },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => {
          if (activeCategory === 'Carousels') {
            return (
              p.id.includes('carousel') ||
              p.category === 'Brand Presentation & Deck' ||
              p.skills.some((s) => s.toLowerCase().includes('carousel')) ||
              (p.deckSlides && p.deckSlides.length > 0)
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
          if (activeCategory === 'Photography') {
            return (
              p.category === 'Photography' ||
              (p.tracks && p.tracks.includes('Photography')) ||
              (p.galleryImages && p.galleryImages.length > 1)
            );
          }
          return (
            p.category === activeCategory ||
            (p.tracks && p.tracks.includes(activeCategory as any))
          );
        });

  return (
    <section id="work" className="py-24 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              {isAr
                ? '01 — الأعمال المختارة وحملات الذكاء الاصطناعي'
                : '01 — SELECTED WORK'}
            </span>
            <div className="h-px bg-amber-500/20 w-16" />
          </div>

          {/* Owner Only Controls: Add & Reset buttons are STRICTLY hidden for clients */}
          {isOwnerMode && (
            <div className="flex items-center gap-2 animate-fade-in">
              <span className="text-[10px] font-mono text-amber-400/80 uppercase font-bold flex items-center gap-1 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                <Crown className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'صلاحيات المالك' : 'Owner Actions'}</span>
              </span>

              <button
                onClick={onOpenAddModal}
                id="add-project-btn"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{isAr ? 'إضافة مشروع جديد' : 'Add New Project'}</span>
              </button>

              {onResetProjects && (
                <button
                  onClick={onResetProjects}
                  title={isAr ? 'إعادة ضبط المشاريع الافتراضية' : 'Reset to default showcase'}
                  className="p-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Title and Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {isAr ? 'المشاريع الإعلانية ودراسات الجدوى' : 'Selected Projects & Case Studies'}
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-2 max-w-2xl">
              {isAr
                ? 'إعلانات تجارية سينمائية، إنتاج فيديو بالذكاء الاصطناعي، واستراتيجيات نمو تسويقية ذات أثر ملموس.'
                : 'High-impact commercial concepts, cinematic AI video productions, and full-funnel marketing strategies.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategorySelect(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase Cards with 3D Tilt */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => {
            const isLatest = index === 0;
            const isCapCut =
              project.id.includes('capcut') ||
              project.id.includes('baba-geh') ||
              project.tools.some((t) => t.toLowerCase().includes('capcut'));
            const isCarousel =
              project.id.includes('carousel') ||
              (project.deckSlides && project.deckSlides.length > 0);

            return (
              <TiltCard3D
                key={project.id}
                maxTilt={6}
                className="group relative rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-amber-500/30 transition-all duration-500 overflow-hidden shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Visual / Image Side */}
                  <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[440px] overflow-hidden bg-zinc-950 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/30" />

                    {/* Play / Case Study floating badge */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl cursor-pointer z-10"
                      aria-label={`Play or view case study for ${project.title}`}
                    >
                      {project.videoUrl || project.videoPreviewUrl ? (
                        <Play className="w-7 h-7 fill-current ml-1" />
                      ) : (
                        <Eye className="w-6 h-6" />
                      )}
                    </button>

                    <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
                      {isLatest && (
                        <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-lg">
                          {isAr ? 'أحدث أعمال 2026' : 'Latest Work — 2026'}
                        </span>
                      )}
                      {isCapCut && (
                        <span className="px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-black tracking-wider shadow-lg flex items-center gap-1">
                          <Film className="w-3 h-3" />
                          <span>CapCut Pro Edit</span>
                        </span>
                      )}
                      {isCarousel && (
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold backdrop-blur-md flex items-center gap-1">
                          <Layers className="w-3 h-3" />
                          <span>Multi-Slide Carousel</span>
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-black/70 border border-white/10 text-amber-300 text-xs font-mono font-bold backdrop-blur-md">
                        {project.clientOrSpec}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/70 border border-white/10 text-zinc-300 text-xs font-medium backdrop-blur-md">
                        {project.category}
                      </span>
                      {project.deckSlides && project.deckSlides.length > 0 && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold backdrop-blur-md flex items-center gap-1">
                          <Presentation className="w-3 h-3" />
                          <span>{project.deckSlides.length} {isAr ? 'شرائح استراتيجية' : 'Deck Slides'}</span>
                        </span>
                      )}
                      {project.galleryImages && project.galleryImages.length > 0 && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-mono backdrop-blur-md">
                          {project.galleryImages.length} {isAr ? 'تصاميم' : 'Designs'}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-400 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 z-10">
                      <span className="flex items-center gap-1.5">
                        <Film className="w-3.5 h-3.5 text-amber-400" />
                        {isAr
                          ? 'إعلان سينمائي • الهدف ← الاستراتيجية ← النتيجة'
                          : 'Cinematic Reel • Objective → Strategy → Result'}
                      </span>
                      {project.videoUrl && <AudioMotionVisualizer isPlaying={true} bars={5} />}
                      <span className="text-zinc-500 font-mono">0{index + 1} // CASE</span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
                          {project.subtitle}
                        </div>
                        {project.voiceoverScript && (
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px] uppercase font-bold">
                            {isAr ? 'سيناريو إعلاني مرفق' : 'TVC Script Included'}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h3>

                      {project.tagline && (
                        <div
                          className="mt-2.5 px-3.5 py-1.5 rounded-xl bg-black/60 border border-amber-500/40 text-amber-300 font-arabic text-sm font-bold inline-block shadow-sm"
                          dir="rtl"
                        >
                          {project.tagline}
                        </div>
                      )}

                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-4">
                        {project.description}
                      </p>

                      {/* Objective & Concept Pill */}
                      <div className="mt-4 p-3.5 rounded-xl bg-zinc-900/80 border border-white/5 text-xs text-zinc-300 space-y-1">
                        <div>
                          <strong className="text-amber-400">{isAr ? 'الهدف:' : 'Objective:'}</strong>{' '}
                          <span className="text-zinc-300">{project.objective}</span>
                        </div>
                        <div>
                          <strong className="text-white">{isAr ? 'الدور:' : 'Role:'}</strong>{' '}
                          <span className="text-zinc-400">{project.myRole}</span>
                        </div>
                      </div>

                      {/* Skills Pills */}
                      <div className="mt-5">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                          {isAr ? 'المهارات المطبقة في الحملة:' : 'Applied Competencies:'}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-[11px] text-zinc-300 border border-white/5 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        {(project.videoUrl || project.videoPreviewUrl) && (
                          <button
                            onClick={() => onSelectProject(project)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-md cursor-pointer group/vbtn"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>{isAr ? 'مشاهدة الفيديو الإعلاني' : 'Watch Commercial'}</span>
                          </button>
                        )}
                        {project.deckSlides && project.deckSlides.length > 0 && (
                          <button
                            onClick={() => onSelectProject(project)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-black border border-amber-500/30 text-xs font-bold transition-all shadow-md cursor-pointer"
                          >
                            <Presentation className="w-3.5 h-3.5" />
                            <span>{isAr ? `عرض السلايدات (${project.deckSlides.length})` : `Strategy Deck (${project.deckSlides.length})`}</span>
                          </button>
                        )}
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all cursor-pointer"
                        >
                          <span>
                            {isAr
                              ? 'دراسة الخطة والسيناريو'
                              : 'Case Study & Script'}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                        </button>
                      </div>

                      {/* Owner Specific Controls on Each Card */}
                      {isOwnerMode && (
                        <div className="flex items-center gap-1.5">
                          {onEditProject && (
                            <button
                              onClick={() => onEditProject(project)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-amber-500 hover:text-black text-amber-300 text-xs font-semibold border border-amber-500/30 transition-all cursor-pointer"
                              title={isAr ? 'تعديل بيانات المشروع' : 'Edit Project'}
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>{isAr ? 'تعديل' : 'Edit'}</span>
                            </button>
                          )}

                          {onDeleteProject && (
                            <button
                              onClick={() => onDeleteProject(project.id)}
                              className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all cursor-pointer"
                              title={isAr ? 'حذف المشروع' : 'Delete Project'}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
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
