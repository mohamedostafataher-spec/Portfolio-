import React from 'react';
import {
  TrendingUp,
  Sparkles,
  Film,
  FileSpreadsheet,
  Compass,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhatIDo: React.FC = () => {
  const { isAr } = useLanguage();

  const disciplines = [
    {
      titleEn: 'Digital Marketing',
      titleAr: 'التسويق الرقمي',
      descEn: 'Digital marketing strategies, social media content, audience targeting and campaign concepts.',
      descAr: 'استراتيجيات التسويق الرقمي، محتوى السوشيال ميديا، استهداف الجماهير، ومفاهيم الحملات الإعلانية.',
      badgeEn: 'Core Specialty',
      badgeAr: 'التخصص الأساسي',
      icon: TrendingUp,
    },
    {
      titleEn: 'AI Content Creation',
      titleAr: 'صناعة المحتوى بالذكاء الاصطناعي',
      descEn: 'AI-generated images, videos, creative concepts and visual storytelling.',
      descAr: 'صور وفيديوهات مولدة بالذكاء الاصطناعي، مفاهيم إبداعية وسرد قصصي بصري سينمائي.',
      badgeEn: 'Creative Edge',
      badgeAr: 'الابتكار والتميز',
      icon: Sparkles,
    },
    {
      titleEn: 'Creative Video Editing',
      titleAr: 'المونتاج الإبداعي وصناعة الفيديو',
      descEn: 'Cinematic editing, short-form content, advertising videos, sound design and visual effects.',
      descAr: 'مونتاج سينمائي، محتوى سريع للفيديوهات القصيرة، إعلانات تجارية، هندسة صوتية ومؤثرات بصرية.',
      badgeEn: 'Craft & Motion',
      badgeAr: 'الصنعة والريتم',
      icon: Film,
    },
    {
      titleEn: 'Content Strategy',
      titleAr: 'استراتيجية المحتوى',
      descEn: 'Content pillars, hooks, storytelling, CTAs and platform-focused content.',
      descAr: 'ركائز المحتوى (Pillars)، خطافات أول ثوانٍ (Hooks)، السرد القصصي، ودعوات الإجراء (CTAs).',
      badgeEn: 'Architecture',
      badgeAr: 'الهندسة والبناء',
      icon: FileSpreadsheet,
    },
    {
      titleEn: 'Creative Direction',
      titleAr: 'الإشراف والإخراج الإبداعي',
      descEn: 'Turning an idea into a complete visual concept, from script and storyboard to final video.',
      descAr: 'تحويل الفكرة الأولية إلى مفهوم بصري متكامل من السكربت والستوري بورد إلى المونتاج النهائي.',
      badgeEn: 'Vision',
      badgeAr: 'الرؤية الإخراجية',
      icon: Compass,
    },
    {
      titleEn: 'Prompt Engineering',
      titleAr: 'هندسة الأوامر (Prompting)',
      descEn: 'Creating structured prompts for consistent AI-generated images and videos.',
      descAr: 'بناء أوامر برمجية دقيقة تضمن ثبات ملامح الشخصيات والمنتجات في صور وفيديوهات الذكاء الاصطناعي.',
      badgeEn: 'Technology',
      badgeAr: 'التقنية المتقدمة',
      icon: Cpu,
    },
  ];

  return (
    <section id="expertise" className="py-24 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            {isAr ? '04 — ماذا أقدم ومجالات الخبرة' : '04 — WHAT I DO'}
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {isAr ? 'مجالات خبرتي' : 'My Expertise'}
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              {isAr
                ? 'حيث تلتقي استراتيجيات التسويق الرقمي الدقيقة مع أحدث أدوات الذكاء الاصطناعي والإخراج السينمائي للفيديو.'
                : 'Where digital marketing strategy converges with AI-powered creativity and cinematic video editing.'}
            </p>
          </div>
          <div className="text-xs text-amber-400/80 font-mono">
            {isAr ? '[ 6 تخصصات مترابطة ]' : '[ 06 Core Disciplines ]'}
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-amber-500/40 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle hover accent light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/0 group-hover:bg-amber-500/10 rounded-full blur-xl transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 group-hover:text-amber-300 group-hover:bg-amber-500/10 border border-white/5 transition-all">
                      {isAr ? item.badgeAr : item.badgeEn}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span className="font-mono">0{index + 1}</span>
                  <a
                    href="#work"
                    className="inline-flex items-center gap-1 text-amber-400/80 font-medium group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                  >
                    <span>{isAr ? 'شاهد النماذج' : 'View Work'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
