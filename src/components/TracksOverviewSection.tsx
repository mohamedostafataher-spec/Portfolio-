import React from 'react';
import {
  PenTool,
  Sparkles,
  Film,
  Mic,
  Camera,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  FileCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PortfolioTrack } from '../types';

interface TracksOverviewSectionProps {
  onSelectTrack: (trackKey: PortfolioTrack) => void;
}

export const TracksOverviewSection: React.FC<TracksOverviewSectionProps> = ({
  onSelectTrack,
}) => {
  const { isAr } = useLanguage();

  const tracks = [
    {
      id: 'Content Creation' as PortfolioTrack,
      titleEn: 'Content Creation',
      titleAr: 'صناعة المحتوى والكاروسيل',
      icon: PenTool,
      badge: '3 Projects · 14 Slides',
      deliverables: [
        '3 مفاهيم كاروسيل تفاعلية لعلامة قيم (One Base, 3 Plans)',
        'كاروسيل تاكة التعليمي (5 علامات إن مودك محتاج تاكة)',
        'خطة النشر لـ V7 المكونة من 5 منشورات استراتيجية',
      ],
      color: 'from-amber-500/20 to-amber-600/5',
      borderColor: 'border-amber-500/30',
      iconColor: 'text-amber-400',
    },
    {
      id: 'AI Content' as PortfolioTrack,
      titleEn: 'AI Content',
      titleAr: 'محتوى الذكاء الاصطناعي',
      icon: Sparkles,
      badge: '4 Cinematic Projects',
      deliverables: [
        'إعلانات ومقاطع حملة بابا جه (Baba Geh) الكوميدية الترفيهية',
        'إعلان سبيرو سباتس التاريخي «الأصل بيكمل معانا»',
        'توليد المشاهد الحركية والتصوير البطيء لـ V7 Cream Soda',
      ],
      color: 'from-purple-500/20 to-indigo-600/5',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
    },
    {
      id: 'Videos' as PortfolioTrack,
      titleEn: 'Videos',
      titleAr: 'الفيديوهات والإعلانات التجارية',
      icon: Film,
      badge: '6 Commercial Films',
      deliverables: [
        'إعلان بافلو برجر السريع (Buffalo Burger Macro Sizzle TVC)',
        'إعلان طلبات مصر الكوميدي السريع (Talabat Food Delivery)',
        'قالب كاب كات الفيروسي لمشروب تاكة (Zoom-Punch Pop-Reveal)',
      ],
      color: 'from-rose-500/20 to-pink-600/5',
      borderColor: 'border-rose-500/30',
      iconColor: 'text-rose-400',
    },
    {
      id: 'Dubbing & Audio' as PortfolioTrack,
      titleEn: 'Dubbing & Audio',
      titleAr: 'الدوبلاج والتعليق الصوتي',
      icon: Mic,
      badge: 'Real Audio Tracks',
      deliverables: [
        'تسجيل صوتي رسمي لعلامة قيم (Product Aligned Voiceover)',
        'سيناريو الإلقاء الإعلاني لسامسونج بلهجة مصرية وتوقيتات زمنية',
        'تصميم شريط الصوت والانتقال الزمني Match-Cut لـ V7',
      ],
      color: 'from-emerald-500/20 to-teal-600/5',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
    },
    {
      id: 'Photography' as PortfolioTrack,
      titleEn: 'Photography',
      titleAr: 'التصوير الفوتوغرافي والبوسترات',
      icon: Camera,
      badge: 'Lookbooks & Product',
      deliverables: [
        'جلسات تصوير أزياء قيم الرجالية (Editorial Lookbook)',
        'تصوير منتجات كانز تاكة وإبراز ألوان الهوية الحيوية',
        'بوسترات الماكرو الإعلانية للأغذية والمشروبات بدقة فائقة',
      ],
      color: 'from-cyan-500/20 to-blue-600/5',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
    },
    {
      id: 'Marketing Strategy' as PortfolioTrack,
      titleEn: 'Marketing Strategy',
      titleAr: 'استراتيجيات التسويق و SOSTAC',
      icon: TrendingUp,
      badge: '5 Strategy Decks',
      deliverables: [
        'بحث سوق H&M Egypt بقيمة 7.5 مليار دولار وتدقيق المنافسين',
        'خطة SOSTAC الكاملة لـ قِيَم مع لوحة مؤشرات الأداء (KPIs)',
        'هندسة صفحة فيسبوك ومسار الواتساب للأعمال المحلية (وش جديد)',
      ],
      color: 'from-amber-500/20 to-yellow-600/5',
      borderColor: 'border-amber-500/30',
      iconColor: 'text-amber-400',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0c0c10] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5" />
                <span>{isAr ? 'الملفات الستة المعتمدة' : 'Official Track Portfolio'}</span>
              </span>
              <span className="text-zinc-500 text-xs font-mono hidden sm:inline">
                // DEPI Certified Structure
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              {isAr ? 'أقسام البورتفوليو الستة وفق معايير المسار' : 'The 6 Core Portfolio Pillars'}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              {isAr
                ? 'تقسيم منهجي منظم يغطي كافة جوانب صناعة المحتوى، الذكاء الاصطناعي، الفيديو، الدوبلاج، التصوير، واستراتيجيات التسويق.'
                : 'Systematic specialization covering Content Creation, AI Media, Commercial Video, Voiceover Dubbing, Photography, and Marketing Strategy.'}
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 hidden lg:block">
            6 VERIFIED COMPETENCY FILES
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((track) => {
            const Icon = track.icon;

            return (
              <div
                key={track.id}
                onClick={() => onSelectTrack(track.id)}
                className={`group relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-gradient-to-br ${track.color} bg-zinc-900/50 border ${track.borderColor} hover:border-amber-400 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-xl`}
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-center ${track.iconColor} group-hover:scale-110 transition-transform shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-300">
                      {track.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                    {isAr ? track.titleAr : track.titleEn}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mt-0.5">
                    {track.titleEn}
                  </div>

                  {/* Deliverables list */}
                  <div className="mt-4 space-y-2 border-t border-white/5 pt-4">
                    {track.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>{isAr ? 'استعراض مشاريع الملف' : 'Explore Track Projects'}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
