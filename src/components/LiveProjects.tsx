import React from 'react';
import { ExternalLink, Store, Youtube, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LiveProject {
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  url: string;
  ctaEn: string;
  ctaAr: string;
  tags: string[];
  extraUrl?: string;
  extraEn?: string;
  extraAr?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROJECTS: LiveProject[] = [
  {
    nameEn: 'Sulta (سولته): online store',
    nameAr: 'سولته: متجر إلكتروني',
    descEn:
      'A Saudi-focused online store for women\'s cotton pajamas. Arabic-first (RTL) storefront with smart Arabic search that tolerates spelling mistakes, SAR prices, product pages with short reels, and orders sent to the store on WhatsApp. Built with React, TypeScript and Supabase.',
    descAr:
      'متجر إلكتروني للبيجامات القطنية النسائية موجه للسعودية. واجهة عربية بالكامل، بحث عربي ذكي يتحمل أخطاء الإملاء، أسعار بالريال، صفحات منتجات بريلز قصيرة، وإرسال الطلبات للمتجر على واتساب. مبني بـ React و TypeScript و Supabase.',
    url: 'https://sulta.vercel.app/',
    ctaEn: 'Visit the store',
    ctaAr: 'زيارة المتجر',
    tags: ['React', 'TypeScript', 'Supabase', 'Arabic SEO', 'RTL'],
    extraUrl: 'https://sulta.vercel.app/en',
    extraEn: 'English page',
    extraAr: 'الصفحة الإنجليزية',
    icon: Store,
  },
  {
    nameEn: 'Mohamed Mostafa Creative: story shorts',
    nameAr: 'Mohamed Mostafa Creative: قصص قصيرة',
    descEn:
      'My YouTube channel for short story videos written and produced in Cairene Egyptian Arabic with AI video tools and CapCut.',
    descAr:
      'قناتي على يوتيوب لفيديوهات قصصية قصيرة مكتوبة ومنتجة بالعامية المصرية القاهرية بأدوات الذكاء الاصطناعي و CapCut.',
    url: 'https://www.youtube.com/@mohamedmostafacreative',
    ctaEn: 'Watch on YouTube',
    ctaAr: 'مشاهدة على يوتيوب',
    tags: ['Short-form video', 'CapCut', 'AI video'],
    icon: Code2,
  },
];

export const LiveProjects: React.FC = () => {
  const { isAr } = useLanguage();

  return (
    <section id="live-projects" className="py-20 relative border-t border-white/5" aria-labelledby="live-projects-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            {isAr ? 'مشاريع حقيقية منشورة' : 'LIVE PROJECTS I BUILT'}
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>
        <h2 id="live-projects-title" className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          {isAr ? 'أشياء بنيتها وهي شغالة دلوقتي' : 'Things I built that are live today'}
        </h2>
        <p className="text-zinc-300 max-w-2xl mb-10 text-sm sm:text-base">
          {isAr
            ? 'مشاريع شخصية حقيقية، تقدر تفتحها وتجربها بنفسك.'
            : 'Real personal projects you can open and try yourself.'}
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.url}
                className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950 border border-white/5 hover:border-amber-500/30 transition-colors flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{isAr ? p.nameAr : p.nameEn}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4 flex-1">{isAr ? p.descAr : p.descEn}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/5 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
                >
                  {isAr ? p.ctaAr : p.ctaEn}
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
                {p.extraUrl && (
                  <a
                    href={p.extraUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-zinc-200 hover:text-white"
                  >
                    {isAr ? p.extraAr : p.extraEn}
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
