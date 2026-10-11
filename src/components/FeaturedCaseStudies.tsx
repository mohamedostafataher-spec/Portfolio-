import React, { useState } from 'react';
import {
  Sparkles,
  Play,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Target,
  Wrench,
  Lightbulb,
  CheckCircle2,
  Bookmark,
  Volume2,
  FolderOpen,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';

interface FeaturedCaseStudiesProps {
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const FeaturedCaseStudies: React.FC<FeaturedCaseStudiesProps> = ({
  onSelectProject,
  allProjects,
}) => {
  const { isAr } = useLanguage();
  const [activeTab, setActiveTab] = useState<'takaa' | 'baba' | 'qaim' | 'buffalo'>('takaa');

  // Find underlying projects from portfolio data
  const takaaProj =
    allProjects.find((p) => p.id === 'takaa-energy-launch') ||
    allProjects.find((p) => p.id.includes('takaa')) ||
    allProjects[0];

  const babaProj =
    allProjects.find((p) => p.id === 'baba-geh-campaign' || p.id === 'baba-geh-comedy-campaign') ||
    allProjects.find((p) => p.id.includes('baba')) ||
    allProjects[1];

  const qaimProj =
    allProjects.find((p) => p.id === 'qaim-carousels-content' || p.id === 'qaim-fashion-growth') ||
    allProjects.find((p) => p.id.includes('qaim')) ||
    allProjects[2];

  const buffaloProj =
    allProjects.find((p) => p.id === 'buffalo-burger-commercial') ||
    allProjects[3];

  const caseStudies = [
    {
      id: 'takaa' as const,
      project: takaaProj,
      tagAr: 'دراسة حالة 01 · إطلاق علامة وتوليد بالذكاء الاصطناعي',
      tagEn: 'CASE STUDY 01 · AI COMMERCIAL & LAUNCH',
      titleAr: 'تاكة لمشروب الطاقة (TAKAA Energy Drink)',
      titleEn: 'TAKAA Energy Drink — AI Commercial & Launch',
      badge: 'Concept / Spec Work',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      heroMedia: {
        type: 'video',
        src: '/videos/takaa_capcut_ad.mp4',
        poster: '/assets/images/takaa_video_poster.jpg',
      },
      briefAr:
        'تصميم حملة إطلاق وهوك إعلاني رقمي لمشروب طاقة محلي يهدف لمنافسة الماركات العالمية بتكلفة إنتاج رشيقة وسرعة إنتاج فائقة عبر أدوات الذكاء الاصطناعي التوليدي.',
      briefEn:
        'Crafting a launch campaign and high-octane digital hook for a local energy drink brand to challenge global giants using agile Gen-AI workflows.',
      audienceAr: 'الشباب والرياضيون وممارسو الألعاب الإلكترونية في مصر (16-28 سنة).',
      audienceEn: 'Egyptian youth, gamers, athletes, and university students (16–28 y/o).',
      roleAr: 'المخرج الإبداعي ومصمم المحتوى بالذكاء الاصطناعي — صياغة البرومتس، توليد المشاهد الحركية، ومونتاج الإيقاع السريع بـ CapCut Pro.',
      roleEn: 'Creative Director & AI Video Producer — prompt crafting, motion generation, sound foley, and beat-synced CapCut editing.',
      aiTools: ['Kling AI', 'Midjourney v6', 'CapCut Pro', 'ElevenLabs Voice AI'],
      workflowSteps: [
        { en: 'Midjourney Can Modeling & Macro Lighting', ar: 'توليد إضاءة العبوة وزوايا الماكرو' },
        { en: 'Kling AI Motion & Liquid Splash Generation', ar: 'توليد حركة الرذاذ والانتعاش بـ Kling' },
        { en: 'CapCut Dynamic Speed Ramps & Foley Sync', ar: 'مونتاج سريع مع تسارع وضبط إيقاع الصوت' },
      ],
      targetKpiAr: 'مؤشر الأداء المستهدف: معدل الاحتفاظ بأول 3 ثوانٍ (3s Hold Rate) > 48% على TikTok & Instagram.',
      targetKpiEn: 'Target KPI: 3-Second Hold Rate > 48% on TikTok & Meta Reels with high re-watch ratio.',
      learnedAr:
        'استخدام زوايا الماكرو المترابطة مع صوت فتح العبوة القوي يضاعف نسبة الانتباه ويمنح المنتج فخامة العلامات العالمية بدون تكلفة استوديو تصوير تقليدي.',
      learnedEn:
        'Syncing macro liquid motion with tactile foley delivers premium commercial aesthetics with zero physical studio overhead.',
    },
    {
      id: 'baba' as const,
      project: babaProj,
      tagAr: 'دراسة حالة 02 · محتوى فيروسي وسرد فكاهي مصري',
      tagEn: 'CASE STUDY 02 · VIRAL REELS & STORYTELLING',
      titleAr: 'بابا جه (Baba Geh — Viral Comedy Reel)',
      titleEn: 'Baba Geh — Viral Short-Form Comedy & Cultural Spot',
      badge: 'Spec Work',
      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      heroMedia: {
        type: 'video',
        src: '/videos/baba_geh_pro.mp4',
        poster: '/assets/images/baba_geh_poster.jpg',
      },
      briefAr:
        'تحويل المواقف والمفارقات العائلية في مسلسل "بابا جه" إلى ريلز إعلاني سريع الانتشار يستند إلى السرد الفكاهي المصري الأصيل لجذب المشاهد في أول ثانيتين.',
      briefEn:
        'Translating authentic Egyptian familial humor from "Baba Geh" into a viral commercial hook designed to hold retention on Instagram & TikTok.',
      audienceAr: 'العائلات والشباب ورواد منصات التواصل الاجتماعي في مصر (18-40 سنة).',
      audienceEn: 'Egyptian families and digital youth (18–40 y/o) who engage with comedic storytelling.',
      roleAr: 'مونتير فيديو ومصمم هوكات — اقتناص البانش لاين، قص اللقطات بأجزاء من الثانية، وهندسة مؤثرات الصوت الكوميدية.',
      roleEn: 'Video Editor & Punchline Scripter — pacing cuts, dialogue selection, audio effects, and mobile typography.',
      aiTools: ['CapCut Pro', 'Premiere Pro', 'Audio Foley', 'Colloquial Scriptwriting'],
      workflowSteps: [
        { en: 'Extracting 2-Second Punchline Hook', ar: 'استخراج الهوك الكوميدي في أول ثانيتين' },
        { en: 'Micro Cut Transitions & Dynamic Zoom', ar: 'مونتاج سريع مع زووم حركي للتعبير' },
        { en: 'Sound Design & Mobile Text Animation', ar: 'هندسة المؤثرات الصوتية والخط المصري' },
      ],
      targetKpiAr: 'مؤشر الأداء المستهدف: معدل إكمال الفيديو (Completion Rate) > 62%، ومعدل مشاركة عضوي مرتفع.',
      targetKpiEn: 'Target KPI: Reel Completion Rate > 62% with viral organic share-to-view ratio.',
      learnedAr:
        'الفكاهة المصرية الصادقة والقطع المحكم على تعبيرات الوجه هما أقصر طريق لصناعة محتوى يعيد المشاهدون نشره دون ميزانيات إعلانية ضخمة.',
      learnedEn:
        'Authentic cultural humor cut with sub-second precision drives voluntary shares far more reliably than high-budget generic ads.',
    },
    {
      id: 'qaim' as const,
      project: qaimProj,
      tagAr: 'دراسة حالة 03 · سلاسل كاروسيل وهندسة مسار الشراء',
      tagEn: 'CASE STUDY 03 · CONVERTING CAROUSELS & BRAND FUNNEL',
      titleAr: 'قِيَم للأزياء الرجالية (QAIM Menswear)',
      titleEn: 'QAIM Menswear — Full-Funnel Content & Carousels',
      badge: 'Brand Concept & Strategy',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      heroMedia: {
        type: 'carousel',
        slides: [
          '/assets/images/qaim_real_editorial_1.jpg',
          '/assets/images/qaim_real_editorial_2.jpg',
          '/assets/images/qaim_real_editorial_3.jpg',
        ],
        videoFallback: '/videos/qaim_fashion_campaign.mp4',
      },
      briefAr:
        'بناء استراتيجية محتوى متكاملة وسلاسل كاروسيل تفاعلية لعلامة أزياء رجالية، لحل مشكلة "حيرة التنسيق اليومي" وتحويل المشاهدين لعملاء دائمين.',
      briefEn:
        'Developing a full-funnel content strategy and multi-slide carousels solving the daily men outfit dilemma to drive e-commerce saves and orders.',
      audienceAr: 'الشباب ورجال الأعمال وطلاب الجامعات في مصر والخليج (20-35 سنة).',
      audienceEn: 'Young professionals and style-conscious men in Egypt & GCC (20–35 y/o).',
      roleAr: 'استراتيجي المحتوى ومصمم الكاروسيل — هيكلة رحلة العميل من المشاهدة للشراء، صياغة اسكريبتات الفويس أوفر، وتصميم شرائح الكاروسيل.',
      roleEn: 'Content Strategist & Carousel Designer — customer journey mapping, persuasive copywriting, multi-slide layout, and audio direction.',
      aiTools: ['SOSTAC Strategy', 'Multi-Slide Layout', 'CapCut Pro', 'ElevenLabs Audio'],
      workflowSteps: [
        { en: 'Identifying Customer Friction Point', ar: 'تحديد نقطة الألم: حيرة 3 مشاوير في يوم واحد' },
        { en: 'Multi-Slide Visual Proof & Fit Guide', ar: 'تصميم كاروسيل تعليمي يوضح كيفية تنسيق الطقم' },
        { en: 'Frictionless E-Commerce CTA Slide', ar: 'شريحة ختامية توفر كود الخصم ورابط الشراء' },
      ],
      targetKpiAr: 'مؤشر الأداء المستهدف: معدل حفظ المنشور (Save Rate) > 5.5%، ونسبة النقر للشراء (CTR) > 3.2%.',
      targetKpiEn: 'Target KPI: Instagram Save Rate > 5.5% and E-commerce Click-Through Rate (CTR) > 3.2%.',
      learnedAr:
        'الكاروسيل الذي يقدم حلاً عملياً لحياة العميل اليومية يحقق معدل حفظ ومبيعات مضاعفة مقارنة بصور الكتالوج التقليدية.',
      learnedEn:
        'Utility-focused styling carousels outperform model lookbooks by 3x in bookmark saves and commercial conversions.',
    },
    {
      id: 'buffalo' as const,
      project: buffaloProj,
      tagAr: 'دراسة حالة 04 · سبوت تجاري وهندسة صوت السيزل',
      tagEn: 'CASE STUDY 04 · FOOD SIZZLE & CAPCUT MOTION',
      titleAr: 'بافلو برجر (Buffalo Burger — Macro Sizzle)',
      titleEn: 'Buffalo Burger — High-Velocity Food Sizzle Spot',
      badge: 'Spec Commercial',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30',
      heroMedia: {
        type: 'youtube_shorts',
        url: 'https://youtube.com/shorts/6y1hBgpjbUo?si=1QVmwnI_Naly2V24',
        embedUrl: 'https://www.youtube-nocookie.com/embed/6y1hBgpjbUo?autoplay=0&rel=0',
        poster: '/assets/images/buffalo_burger_poster.jpg',
      },
      briefAr:
        'إبراز تفاصيل قرمشة البرجر ومكوناته الطازجة عبر لقطات ماكرو سريعة وهوك يجبر الجائع على طلب الأوردر فوراً، مع نشر مخصص لـ YouTube Shorts.',
      briefEn:
        'Showcasing sizzling textures and appetizing food details with macro cinematography and tactical foley tailored for YouTube Shorts.',
      audienceAr: 'محبو البرجر والوجبات السريعة في المدن المصرية الكبرى (17-35 سنة).',
      audienceEn: 'Urban food lovers and burger enthusiasts across major cities (17–35 y/o).',
      roleAr: 'مونتير فيديو وهندسة مؤثرات صوتية — تصميم صوت القرمشة والسيزل (Foley)، ضبط الألوان، واختيار هوك الثانية الأولى.',
      roleEn: 'Commercial Editor & Foley Designer — sizzle audio engineering, color pop, speed ramping, and 9:16 Shorts optimization.',
      aiTools: ['CapCut Pro', 'Macro Foley Sound', 'YouTube Shorts Optimization', 'Color Grading'],
      workflowSteps: [
        { en: '1-Second Sizzle Hook', ar: 'هوك ثانية واحدة: صوت الشواء وقرمشة اللحم' },
        { en: 'Macro Ingredients & Sauce Reveal', ar: 'لقطات ماكرو لصوص البرجر والجبن الذائب' },
        { en: 'Direct Order Call-to-Action', ar: 'دعوة مباشرة للطلب مع شعار العلامة' },
      ],
      targetKpiAr: 'مؤشر الأداء المستهدف: نسبة النقر إلى المنيو (CTR) > 3.8% على إعلانات التوصيل السريع.',
      targetKpiEn: 'Target KPI: Order Menu CTR > 3.8% with sub-2-second viewer drop-off reduction.',
      learnedAr:
        'الصوت المتقن (صوت القرمشة والشواء) يعوض غياب الرائحة عبر الشاشة ويحفز الرغبة البيعية الفورية أسرع من أي نص تقليدي.',
      learnedEn:
        'Tactile food audio foley creates an irresistible sensory trigger on mobile screens that boosts impulse orders.',
    },
  ];

  const current = caseStudies.find((c) => c.id === activeTab) || caseStudies[0];

  return (
    <section id="case-studies" className="py-20 sm:py-28 relative bg-[#060608] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? '04 / دراسات الحالة المتعمقة' : '04 / FEATURED CASE STUDIES'}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'أبرز 4 دراسات حالة مفصلة' : 'Top 4 In-Depth Case Studies'}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'تشريح تفصيلي لسير العمل الإبداعي، البرومتس، أدوات الذكاء الاصطناعي، ومؤشرات الأداء المستهدفة لكل مشروع.'
              : 'Detailed breakdown of the creative process, AI prompts, tools stack, and target KPIs for signature projects.'}
          </p>
        </div>

        {/* 4 Interactive Project Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap p-1.5 rounded-2xl bg-zinc-900/60 border border-white/10 max-w-2xl mx-auto">
          {caseStudies.map((study) => {
            const isActive = study.id === activeTab;
            return (
              <button
                key={study.id}
                onClick={() => setActiveTab(study.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-105'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{study.id === 'takaa' ? 'TAKAA' : study.id === 'baba' ? 'Baba Geh' : study.id === 'qaim' ? 'QAIM' : 'Buffalo'}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-400'
                  }`}
                >
                  {study.badge.split('/')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* The Active Case Study Card */}
        <div className="rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left / Media Column (5 Cols) */}
          <div className="lg:col-span-5 bg-black/60 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="space-y-4">
              {/* Honest Badge */}
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${current.badgeColor}`}>
                  {current.badge}
                </span>
                <span className="text-zinc-500 font-mono text-xs">
                  {current.tagEn.split('·')[0]}
                </span>
              </div>

              {/* Media Container */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-[9/14] max-h-[500px] mx-auto w-full relative flex items-center justify-center">
                {current.heroMedia.type === 'video' ? (
                  <video
                    src={current.heroMedia.src}
                    controls
                    playsInline
                    poster={current.heroMedia.poster}
                    className="w-full h-full object-cover"
                  />
                ) : current.heroMedia.type === 'youtube_shorts' ? (
                  <iframe
                    src={current.heroMedia.embedUrl}
                    title={current.titleEn}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={current.heroMedia.slides?.[0]}
                    alt={current.titleEn}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* YouTube Shorts Direct Link for Buffalo */}
              {current.id === 'buffalo' && (
                <a
                  href="https://youtube.com/shorts/6y1hBgpjbUo?si=1QVmwnI_Naly2V24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isAr ? 'مشاهدة مباشرة على YouTube Shorts' : 'Watch on YouTube Shorts'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Quick Full Project Modal Opener */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <button
                onClick={() => onSelectProject(current.project)}
                className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-amber-500 hover:text-black text-zinc-200 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <span>{isAr ? 'فتح ملف المشروع والملحقات الكاملة' : 'Open Full Project Dossier & Files'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right / Information & Workflow Column (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Title & Category */}
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  {isAr ? current.tagAr : current.tagEn}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {isAr ? current.titleAr : current.titleEn}
                </h3>
              </div>

              {/* 1. BRIEF (Why it exists) */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>1. BRIEF &amp; OBJECTIVE</span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {isAr ? current.briefAr : current.briefEn}
                </p>
              </div>

              {/* 2. TARGET AUDIENCE */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                  <Target className="w-3.5 h-3.5" />
                  <span>2. TARGET AUDIENCE</span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {isAr ? current.audienceAr : current.audienceEn}
                </p>
              </div>

              {/* 3. MY ROLE & EXECUTION */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>3. MY EXACT ROLE</span>
                </div>
                <p className="text-zinc-200 font-medium text-xs sm:text-sm leading-relaxed">
                  {isAr ? current.roleAr : current.roleEn}
                </p>
              </div>

              {/* 4. WORKFLOW & AI TOOLS USED */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>4. PROCESS &amp; TOOLS USED</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {current.aiTools.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {current.workflowSteps.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-zinc-500">STEP 0{idx + 1}</span>
                      <p className="text-xs text-zinc-300 font-medium leading-snug">
                        {isAr ? step.ar : step.en}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. TARGET KPI (Honest, not invented) */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                  <Target className="w-3.5 h-3.5" />
                  <span>5. MEASURABLE SUCCESS KPI (TARGET)</span>
                </div>
                <p className="text-amber-200 text-xs sm:text-sm font-mono font-semibold">
                  {isAr ? current.targetKpiAr : current.targetKpiEn}
                </p>
              </div>

              {/* 6. WHAT I LEARNED */}
              <div className="space-y-1 text-zinc-400 text-xs sm:text-sm">
                <span className="font-mono text-amber-400 text-xs font-bold uppercase block mb-1">
                  6. KEY LEARNING / TAKEAWAY:
                </span>
                <p className="italic text-zinc-300">"{isAr ? current.learnedAr : current.learnedEn}"</p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-xs font-mono text-zinc-500">
                {isAr ? 'جميع الملفات مدعومة ومحفوظة في مجلد الأرشيف' : 'All raw and final assets archived in Master Drive'}
              </span>

              <a
                href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                <span>{isAr ? 'استعراض مجلد Drive' : 'View Drive Folder'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
