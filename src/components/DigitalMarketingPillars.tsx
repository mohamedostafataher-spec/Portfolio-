import React from 'react';
import {
  Compass,
  Palette,
  Smartphone,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DigitalMarketingPillarsProps {
  onSelectCategory: (category: string) => void;
}

export const DigitalMarketingPillars: React.FC<DigitalMarketingPillarsProps> = ({
  onSelectCategory,
}) => {
  const { isAr } = useLanguage();

  const capabilities = [
    {
      id: 'strategy',
      filterKey: 'Strategy',
      icon: Compass,
      tagAr: '🎯 استراتيجية وتسويق',
      tagEn: '🎯 STRATEGY',
      flowAr: 'بحث السوق → استخراج الـ Insight → الاستراتيجية → الحملة',
      flowEn: 'Research → Insight → Strategy → Campaign',
      itemsAr: [
        'استراتيجيات التسويق الرقمي (Digital Marketing Strategy)',
        'أبحاث ودراسة الجمهور المستهدف (Audience Research)',
        'تخطيط وهندسة الحملات (Campaign Strategy)',
        'ركائز وتخطيط المحتوى (Content Strategy)',
      ],
      itemsEn: [
        'Digital Marketing Strategy',
        'Audience Research & ICPs',
        'Campaign Architecture',
        'Content Strategy',
      ],
      proofAr: 'دراسة سوق H&M وتدقيق حساب قيم للأزياء 62K متابع',
      proofEn: 'H&M Egypt $7.5B Study & QAIM 62K Audience Audit',
    },
    {
      id: 'creative',
      filterKey: 'All',
      icon: Palette,
      tagAr: '🎨 الابتكار والإبداع',
      tagEn: '🎨 CREATIVE',
      flowAr: 'الفكرة → المفهوم → السرد القصصي → التنفيذ البصري',
      flowEn: 'Idea → Concept → Story → Execution',
      itemsAr: [
        'ابتكار المفاهيم الإبداعية (Creative Concepts)',
        'أفكار إعلانية خارج الصندوق (Campaign Ideas)',
        'كتابة الإعلانات والاسكريبتات (Copywriting & Scripts)',
        'الإشراف الفني والبصري (Art Direction)',
        'الإنتاج الإعلاني بالـ AI (AI Creative Production)',
      ],
      itemsEn: [
        'Creative Concepts',
        'Campaign Ideas & Hooks',
        'Copywriting & Scripts',
        'Art Direction',
        'AI Creative Production',
      ],
      proofAr: 'إعلان بابا جه الكوميدي وبوسترات سبيرو وبافلو 4K',
      proofEn: 'Baba Geh Comedy TVC & 4K Campaign Artworks',
    },
    {
      id: 'content',
      filterKey: 'Carousels',
      icon: Smartphone,
      tagAr: '📱 صناعة المحتوى',
      tagEn: '📱 CONTENT',
      flowAr: 'محتوى يرغب الجمهور في مشاهدته وحفظه ومشاركته فعلياً',
      flowEn: 'Content people actually want to watch',
      itemsAr: [
        'محتوى منصات التواصل (Social Media Content)',
        'فيديوهات الريلز السريعة (Reels & Viral Pacing)',
        'سلاسل الكاروسيل التفاعلية (Interactive Carousels)',
        'جداول نشر المحتوى التكتيكية (Content Calendars)',
        'السرد القصصي للعلامات (Brand Storytelling)',
      ],
      itemsEn: [
        'Social Media Content',
        'Viral Reels (CapCut Pro)',
        'Interactive Carousels',
        'Content Calendars',
        'Brand Storytelling',
      ],
      proofAr: 'كاروسيل تاكة (8 شرائح) وديك في سفن (19 شريحة)',
      proofEn: 'TAKAA 8-Slide Carousel & V7 19-Slide Deck',
    },
    {
      id: 'performance',
      filterKey: 'Paid Ads',
      icon: TrendingUp,
      tagAr: '📈 الأداء والنتائج',
      tagEn: '📈 PERFORMANCE',
      flowAr: 'الإطلاق → القياس اللحظي → التحسين المستمر',
      flowEn: 'Launch → Measure → Optimize',
      itemsAr: [
        'إعلانات ميتا الممولة (Meta Ads - FB & IG)',
        'هندسة مسار الحملة (Campaign & Funnel Setup)',
        'استهداف وتخصيص الجماهير (Audience Targeting)',
        'تحسين كلفة الاستحواذ (CPL / CAC Optimization)',
        'تحليل الأداء والعائد (ROAS & Performance Analysis)',
      ],
      itemsEn: [
        'Meta Ads (Facebook & Instagram)',
        'Campaign & Funnel Setup',
        'Audience Targeting & Retargeting',
        'Cost Optimization (CPL / CAC)',
        'Performance & ROAS Analysis',
      ],
      proofAr: '+185 عميل محتمل مؤهل لحملة الأثاث عبر فيسبوك وواتساب',
      proofEn: '+185 Qualified Business Leads via Meta & WhatsApp',
    },
  ];

  return (
    <section id="what-i-do" className="py-20 relative bg-[#09090c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
            {isAr ? '03 — ما أقدمه بدقة' : '03 — WHAT I DO'}
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr
              ? '4 قدرات أساسية تصنع الفارق في كل حملة'
              : '4 Core Capabilities Behind Every Campaign'}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isAr
              ? 'بدل سرد قائمة عشوائية من 20 خدمة، أعتمد منهجية متكاملة تجمع بين الاستراتيجية والإبداع وصناعة المحتوى وإدارة الأداء.'
              : 'Instead of an endless checklist of services, here is the integrated 4-pillar methodology behind every project I build.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;

            return (
              <div
                key={cap.id}
                onClick={() => onSelectCategory(cap.filterKey)}
                className="group relative rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-amber-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer"
              >
                <div>
                  {/* Top Tag & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {isAr ? cap.tagAr : cap.tagEn}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Flow Subtitle */}
                  <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 text-[11px] font-mono text-zinc-300 mb-5 leading-snug">
                    {isAr ? cap.flowAr : cap.flowEn}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                    {(isAr ? cap.itemsAr : cap.itemsEn).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proof & Action */}
                <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500 line-clamp-1">
                    {isAr ? cap.proofAr : cap.proofEn}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-amber-500 text-zinc-400 group-hover:text-black flex items-center justify-center transition-colors shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
