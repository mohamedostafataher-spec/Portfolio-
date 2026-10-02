import React from 'react';
import {
  TrendingUp,
  Sparkles,
  Compass,
  GraduationCap,
  Wrench,
  CheckCircle2,
  ArrowUpRight,
  Database,
  BarChart3,
  Lightbulb,
  HeartHandshake,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { isAr } = useLanguage();

  const tools = [
    { name: 'Meta Ads Manager', category: 'Performance & Targeting' },
    { name: 'CapCut Pro', category: 'Viral Video & Pacing' },
    { name: 'Adobe Premiere Pro', category: 'Narrative Video Editing' },
    { name: 'Canva Pro', category: 'Decks & Visual Layouts' },
    { name: 'Adobe Photoshop', category: 'Key Visuals & Retouching' },
    { name: 'Google Analytics', category: 'Data & Tracking' },
    { name: 'AI Creative Tools', category: 'Generative Renders & Visuals' },
    { name: 'ChatGPT & Prompting', category: 'Market Research & Scripts' },
  ];

  const whyMePoints = [
    {
      titleEn: 'STRATEGY',
      titleAr: 'الاستراتيجية',
      quoteEn: "I don't create content without a purpose.",
      quoteAr: 'لا أصنع محتوى لمجرد الظهور، بل لكل منشور وزاوية تصوير غاية تسويقية محددة.',
      icon: Compass,
    },
    {
      titleEn: 'CREATIVITY',
      titleAr: 'الإبداع',
      quoteEn: 'I turn insights into ideas people remember.',
      quoteAr: 'أحوّل دراسة سلوك المستهلك إلى فكرة لافتة تعلق في ذاكرة الجمهور.',
      icon: Lightbulb,
    },
    {
      titleEn: 'DATA',
      titleAr: 'البيانات والأرقام',
      quoteEn: 'I use performance to make better decisions.',
      quoteAr: 'أعتمد على لغة الأرقام ومؤشرات الـ ROAS لتطوير الحملات ووقف الهدر الإعلاني.',
      icon: BarChart3,
    },
    {
      titleEn: 'STORYTELLING',
      titleAr: 'السرد القصصي',
      quoteEn: 'I make brands feel human.',
      quoteAr: 'أمنح العلامات التجارية صوتاً إنسانياً قريباً من مشاعر وواقع الشارع المصري.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#07070a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 02 — INTRO: WHO AM I */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-3">
            {isAr ? '02 / PROFILE · ملف التعريف المهني' : '02 / PROFILE'}
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            {isAr ? 'تفكير إبداعي، مستند إلى حقيقة المنتج' : 'Creative Thinking, Grounded in Product Truth'}
          </h2>

          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-md text-left rtl:text-right space-y-6">
            <p className="font-display text-lg sm:text-2xl text-zinc-100 font-bold leading-relaxed italic">
              &ldquo;
              {isAr
                ? 'أحوّل حقائق المنتجات وأسئلة الجمهور إلى قصص محتوى مفيدة. من هوك واضح إلى كاروسيل، أو سكربت ريلز، أو خطوة تالية قابلة للقياس؛ تركيزي الدائم أن تكون الفكرة سهلة الفهم وسريعة الاستجابة.'
                : 'I turn product facts and audience questions into useful social stories. From a clear hook to a carousel, a short-form video script or a measurable next step, my focus is on making the idea easy to understand and easy to act on.'}
              &rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">WHAT THE WORK DEMONSTRATES</span>
                <p className="text-zinc-300">
                  {isAr
                    ? 'كتابة إعلانية باللغة العربية أولاً، هندسة المحتوى، الإشراف الفني، الإنتاج بالذكاء الاصطناعي، ومصفوفة مؤشرات الأداء العملية.'
                    : 'Arabic-first creative writing, content architecture, visual direction, AI-assisted concept development, video samples and a practical KPI framework.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">WORKING PRINCIPLE</span>
                <p className="text-zinc-300">
                  {isAr
                    ? 'استخدم المنتج الحقيقي والمعلومات المؤكدة. اختبر الأفكار الإبداعية قبل وصفها بالناجحة.'
                    : 'Use the real product and confirmed information. Test creative ideas before calling them winners.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-center font-mono">
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-amber-400 font-bold text-xs sm:text-sm">STRATEGY</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-white font-bold text-xs sm:text-sm">CREATIVE</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-amber-300 font-bold text-xs sm:text-sm">CONTENT</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-emerald-400 font-bold text-xs sm:text-sm">PERFORMANCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* 08 — WHY ME: 4 PILLARS */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
              {isAr ? '08 — لماذا أعمل بهذه الطريقة؟' : '08 — WHY ME'}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              {isAr ? 'الركائز الأربع التي تحكم كل مشروع' : 'The 4 Core Beliefs Behind My Work'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyMePoints.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 block mb-1">
                      {isAr ? pt.titleAr : pt.titleEn}
                    </span>
                    <p className="font-display text-base font-bold text-white leading-snug">
                      &ldquo;{isAr ? pt.quoteAr : pt.quoteEn}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 09 — TOOLS & 10 — EDUCATION (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* 09 — TOOLS I WORK WITH (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  {isAr ? '09 — أدوات العمل اليومية' : '09 — TOOLS I WORK WITH'}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  {isAr ? 'أدوات التنفيذ والتحليل الفعلي' : 'Daily Execution & Analytics Stack'}
                </h3>
              </div>
              <Wrench className="w-5 h-5 text-zinc-500" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tools.map((t, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-zinc-950/70 border border-white/5 hover:border-amber-500/30 transition-all text-center"
                >
                  <p className="font-bold text-white text-xs truncate">{t.name}</p>
                  <p className="text-[10px] text-zinc-500 font-mono mt-1 truncate">{t.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 10 — EDUCATION & CERTIFICATIONS (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  {isAr ? '10 — التعليم والاعتمادات' : '10 — EDUCATION & CERTIFICATIONS'}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  {isAr ? 'الشهادات والاعتماد الرسمي' : 'Official Credentials & Training'}
                </h3>
              </div>
              <GraduationCap className="w-5 h-5 text-amber-400" />
            </div>

            <div className="space-y-3">
              {/* DEPI MCIT Official Credential */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-amber-400">MINISTRY OF COMMUNICATIONS (MCIT)</span>
                  <span className="px-2 py-0.5 rounded bg-black/40 font-mono text-[10px] text-amber-300 font-bold">
                    ID: 21172333
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm">
                  {isAr ? 'مبادرة رواد مصر الرقمية (DEPI)' : 'Digital Egypt Pioneers Initiative (DEPI)'}
                </h4>
                <p className="text-xs text-zinc-300 mt-1">
                  {isAr
                    ? 'اعتماد مهني في استراتيجيات التسويق الرقمي المتقدمة، نماذج SOSTAC، وتحليل الحملات.'
                    : 'Advanced Digital Marketing Strategy, SOSTAC frameworks, and full-funnel performance.'}
                </p>
              </div>

              {/* University Degree */}
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5">
                <span className="text-[10px] font-mono text-zinc-500 block mb-1">UNIVERSITY DEGREE</span>
                <h4 className="font-bold text-white text-sm">
                  {isAr ? 'بكالوريوس — جامعة حلوان' : "Bachelor's Degree — Helwan University"}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {isAr ? 'خريج جامعي معتمد' : 'Graduate & Certified Marketer'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
