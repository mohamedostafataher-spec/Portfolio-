import React from 'react';
import { Target, Sparkles, Film, Wrench, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CapabilitiesSection: React.FC = () => {
  const { isAr } = useLanguage();

  const capabilityGroups = [
    {
      num: '01',
      id: 'strategy',
      titleAr: 'الاستراتيجية وتخطيط الحملات',
      titleEn: 'Strategy & Campaign Planning',
      icon: Target,
      accentColor: 'text-amber-400',
      borderColor: 'hover:border-amber-500/40',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      skills: [
        { en: 'Campaign Strategy', ar: 'استراتيجية الحملات الإعلانية' },
        { en: 'Audience Research', ar: 'بحوث وسلوك الجمهور المستهدف' },
        { en: 'Content Strategy', ar: 'استراتيجية وهندسة المحتوى' },
        { en: 'SOSTAC Planning', ar: 'تخطيط تسويقي متكامل SOSTAC' },
      ],
      descAr: 'تحليل دقيق للجمهور والسوق قبل أي تنفيذ إبداعي لضمان توجيه الرسالة والميزانية نحو أهداف بيعية واضحة.',
      descEn: 'Audience and market-level strategy connecting business goals to structured campaign roadmaps.',
    },
    {
      num: '02',
      id: 'creative',
      titleAr: 'الأفكار الإعلانية والتوجيه الإبداعي',
      titleEn: 'Creative Direction & Storytelling',
      icon: Sparkles,
      accentColor: 'text-rose-400',
      borderColor: 'hover:border-rose-500/40',
      badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      skills: [
        { en: 'Creative Concepts', ar: 'ابتكار الأفكار الإعلانية' },
        { en: 'Copywriting', ar: 'كتابة الإعلانات والاسكريبتات' },
        { en: 'Art Direction', ar: 'التوجيه الفني والهوية البصرية' },
        { en: 'Campaign Storytelling', ar: 'السرد القصصي للعلامات' },
      ],
      descAr: 'تحويل ميزات المنتج الجافة إلى قصص إنسانية ومواقف مصرية مألوفة تلمس مشاعر المستهلك وتحرك قراره.',
      descEn: 'Translating product features into relatable cultural narratives and emotionally resonant campaign themes.',
    },
    {
      num: '03',
      id: 'video',
      titleAr: 'صناعة المحتوى وفيديوهات الريلز',
      titleEn: 'Video & Short-Form Content',
      icon: Film,
      accentColor: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/40',
      badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      skills: [
        { en: 'Social Media Content', ar: 'محتوى السوشيال ميديا اليومي' },
        { en: 'Reels & Short-Form', ar: 'ريلز وتيك توك سريع الإيقاع' },
        { en: 'Video Marketing', ar: 'تسويق الفيديو والمشاهد المقربة' },
        { en: 'Storyboarding', ar: 'رسم تسلسل المشاهد واللقطات' },
      ],
      descAr: 'مونتاج سريع، خطافات بصرية في أول ثانيتين، ومزامنة إيقاعية مع الحوار والمؤثرات الصوتية.',
      descEn: 'High-retention social video execution with strong 2-second hooks, dynamic pacing, and clean audio foley.',
    },
    {
      num: '04',
      id: 'tools',
      titleAr: 'أدوات الذكاء الاصطناعي والإنتاج الرقمي',
      titleEn: 'AI & Production Tools',
      icon: Wrench,
      accentColor: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/40',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      skills: [
        { en: 'Canva Pro', ar: 'Canva Pro للتصميم والتنسيقات' },
        { en: 'CapCut Pro', ar: 'CapCut Pro للمونتاج السريع' },
        { en: 'Adobe Premiere & Photoshop', ar: 'Adobe Premiere & Photoshop' },
        { en: 'Meta Ads & Google Analytics', ar: 'مدير إعلانات Meta و GA4' },
        { en: 'AI Creative Production', ar: 'أدوات الذكاء الاصطناعي التوليدي' },
      ],
      descAr: 'مزيج مرن من أدوات التصميم والمونتاج والذكاء الاصطناعي لتسريع دورة الإنتاج الإعلاني بأعلى جودة.',
      descEn: 'Integrated toolstack combining professional editing, AI visual generation, and performance analytics.',
    },
  ];

  return (
    <section id="capabilities" className="py-24 relative bg-[#08080b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left rtl:text-right max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'القدرات والمهارات الأساسية' : 'CORE CAPABILITIES'}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {isAr ? 'المهارات مصنفة في 4 ركائز متكاملة' : 'Capabilities Organized in 4 Core Pillars'}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isAr
              ? 'تفكير استراتيجي، إبداع سردي، مهارة تنفيذية بالفيديو، واستخدام ذكي لأدوات الإنتاج والذكاء الاصطناعي.'
              : 'Strategic thinking, creative storytelling, short-form video execution, and modern AI-powered production tools.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilityGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className={`p-6 sm:p-8 rounded-3xl bg-zinc-950/70 border border-white/8 transition-all ${group.borderColor} shadow-xl flex flex-col justify-between space-y-6 group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-zinc-500 tracking-wider">
                      {group.num} // PILLAR
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 ${group.accentColor}`} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {isAr ? group.titleAr : group.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                      {isAr ? group.descAr : group.descEn}
                    </p>
                  </div>
                </div>

                {/* Skills tags list */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-white/8 text-zinc-200 text-xs font-medium hover:border-amber-500/30 transition-colors"
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${group.accentColor}`} />
                        <span>{isAr ? skill.ar : skill.en}</span>
                      </span>
                    ))}
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
