import React from 'react';
import { CheckCircle2, TrendingUp, Sparkles, Film, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SkillsSection: React.FC = () => {
  const { isAr } = useLanguage();

  const skillsData = [
    {
      categoryEn: 'Marketing',
      categoryAr: 'التسويق الرقمي',
      icon: TrendingUp,
      skills: [
        { en: 'Digital Marketing', ar: 'التسويق الرقمي' },
        { en: 'Social Media Marketing', ar: 'التسويق عبر منصات التواصل' },
        { en: 'Content Strategy', ar: 'استراتيجية وتخطيط المحتوى' },
        { en: 'Audience Targeting', ar: 'استهداف الجماهير وتحديد الـ ICPs' },
        { en: 'Campaign Concepts', ar: 'مفاهيم وإطلاق الحملات الإعلانية' },
        { en: 'Branding', ar: 'بناء العلامة التجارية والتموضع' },
      ],
    },
    {
      categoryEn: 'Creative',
      categoryAr: 'الإبداع والسرد',
      icon: Sparkles,
      skills: [
        { en: 'Creative Direction', ar: 'الإشراف والإخراج الإبداعي' },
        { en: 'Storytelling', ar: 'السرد القصصي المؤثر' },
        { en: 'Advertising', ar: 'الأفكار الإعلانية المبتكرة' },
        { en: 'Copywriting', ar: 'الكتابة التسويقية المقنعة' },
        { en: 'Scriptwriting', ar: 'كتابة السكربتات والسيناريو' },
      ],
    },
    {
      categoryEn: 'Production',
      categoryAr: 'الإنتاج والمونتاج',
      icon: Film,
      skills: [
        { en: 'Video Editing', ar: 'مونتاج الفيديو الاحترافي' },
        { en: 'AI Video', ar: 'فيديو الذكاء الاصطناعي' },
        { en: 'AI Image Generation', ar: 'توليد الصور وتجسيم المنتجات' },
        { en: 'Motion Graphics', ar: 'الموشن جرافيكس والنصوص' },
        { en: 'VFX', ar: 'المؤثرات البصرية والخدع' },
        { en: 'Sound Design', ar: 'الهندسة والمؤثرات الصوتية' },
        { en: 'Color Grading', ar: 'التلوين السينمائي وتصحيح الألوان' },
      ],
    },
    {
      categoryEn: 'AI',
      categoryAr: 'الذكاء الاصطناعي',
      icon: Cpu,
      skills: [
        { en: 'Prompt Engineering', ar: 'هندسة الأوامر المتقدمة (Prompting)' },
        { en: 'AI Creative Workflows', ar: 'مسارات العمل الإبداعية بالـ AI' },
        { en: 'Image-to-Video', ar: 'تحويل الصور إلى لقطات فيديو سينمائية' },
        { en: 'Generative Visuals', ar: 'توليد المرئيات والبيئات ثلاثية الأبعاد' },
        { en: 'AI Content Production', ar: 'الإنتاج المتكامل للمحتوى بالذكاء الاصطناعي' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            {isAr ? '08 — مصفوفة المهارات' : '08 — SKILLS'}
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {isAr ? 'المهارات والقدرات' : 'Skills Grid'}
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              {isAr
                ? 'مصفوفة مهارات متكاملة تربط بين استراتيجيات التسويق الحديث، الكتابة الإعلانية، المونتاج الاحترافي، وحلول الذكاء الاصطناعي.'
                : 'A comprehensive cross-disciplinary matrix connecting marketing strategy, creative copywriting, cinematic editing, and generative AI.'}
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            {isAr ? '[ 4 محاور أساسية ]' : '[ 04 Strategic Pillars ]'}
          </div>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((categoryGroup, index) => {
            const Icon = categoryGroup.icon;
            return (
              <div
                key={categoryGroup.categoryEn}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {isAr ? categoryGroup.categoryAr : categoryGroup.categoryEn}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-zinc-600">0{index + 1}</span>
                  </div>

                  <ul className="space-y-3">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                        <span>{isAr ? skill.ar : skill.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>{categoryGroup.skills.length} {isAr ? 'مهارات' : 'Capabilities'}</span>
                  <span className="text-amber-400 font-semibold">● Active</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
