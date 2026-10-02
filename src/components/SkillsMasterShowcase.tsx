import React, { useState, useRef } from 'react';
import {
  Layers,
  Sparkles,
  Film,
  Music,
  Camera,
  TrendingUp,
  Play,
  Pause,
  Volume2,
  CheckCircle2,
  ArrowUpRight,
  Maximize2,
  X,
  ExternalLink,
  ChevronRight,
  Clock,
  Radio,
  FileText,
  Target,
  Compass,
  BarChart3,
  MessageCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';
import { TiltCard3D } from './TiltCard3D';

// Images matching the 21-page master PDF
import qaimEditorial1 from '../assets/images/qaim_real_editorial_1.jpg'; // Casual look & 3 looks
import qaimEditorial2 from '../assets/images/qaim_real_editorial_2.jpg'; // Sporty look & checklist
import qaimEditorial3 from '../assets/images/qaim_real_editorial_3.jpg'; // Streetwear
import takaaCreativeCampaign from '../assets/images/takaa_creative_campaign.jpg'; // TAKAA Nile scene
import takaaCarousel1 from '../assets/images/takaa_carousel_1.jpg'; // 5 signs your mood needs a tweak
import takaaCapcutPoster from '../assets/images/takaa_capcut_poster.jpg'; // TAKAA splash
import v7SummerPoster from '../assets/images/v7_summer_poster.jpg'; // 5 علامات إن صيفك ناقصه حاجة
import v7SocialPost from '../assets/images/v7_social_post.jpg'; // الناقص كان V7
import spiroPoster from '../assets/images/spiro_spathis_poster.jpg'; // Spiro Spathis
import buffaloPoster from '../assets/images/buffalo_burger_poster.jpg'; // Buffalo Burger
import babaGehThumb1 from '../assets/images/baba_geh_thumb1.jpg'; // Baba Geh baby
import babaGehThumb2 from '../assets/images/baba_geh_thumb2.jpg'; // Baba Geh bag
import vid32Thumb from '../assets/images/VID-20260504-WA0032_thumb.jpg';
import vid36Thumb from '../assets/images/VID-20260504-WA0036_thumb.jpg';
import vid00Thumb from '../assets/images/VID-20260914-WA0000_thumb.jpg';

interface SkillsMasterShowcaseProps {
  onSelectProject: (project: Project) => void;
  projects: Project[];
}

export const SkillsMasterShowcase: React.FC<SkillsMasterShowcaseProps> = ({
  onSelectProject,
  projects,
}) => {
  const { isAr } = useLanguage();

  // Active section filter or quick jump
  const [activeSkill, setActiveSkill] = useState<
    'all' | 'content' | 'ai' | 'video' | 'audio' | 'visual' | 'marketing'
  >('all');

  // Video modal state
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    titleAr: string;
    titleEn: string;
    hookAr: string;
    badge: string;
    duration: string;
  } | null>(null);

  // Audio player state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeAudioTrack, setActiveAudioTrack] = useState<number>(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Lightbox state
  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  const handleToggleAudio = (trackNumber: number) => {
    if (!audioRef.current) return;
    if (activeAudioTrack === trackNumber && isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      setActiveAudioTrack(trackNumber);
      audioRef.current.currentTime = trackNumber === 1 ? 0 : 23;
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => setIsPlayingAudio(false));
    }
  };

  const handleWhatsApp = () => {
    const phone = '201110095403';
    const message = isAr
      ? 'مرحباً أستاذ محمد، اطلعت على قسم المهارات وأود مناقشة مشروع إعلاني / حملة تسويقية.'
      : 'Hi Mohamed, I saw your skills portfolio and would like to discuss a project.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // 6 Skills Navigation Tabs
  const skillTabs = [
    { id: 'all', labelAr: 'كل المهارات', labelEn: 'All Skills' },
    { id: 'content', num: '01', labelAr: 'صناعة المحتوى', labelEn: 'Content Creation' },
    { id: 'ai', num: '02', labelAr: 'الذكاء الاصطناعي', labelEn: 'AI Creative' },
    { id: 'video', num: '03', labelAr: 'الفيديو والريلز', labelEn: 'Video Production' },
    { id: 'audio', num: '04', labelAr: 'الصوت والدوبلاج', labelEn: 'Dubbing & Audio' },
    { id: 'visual', num: '05', labelAr: 'التوجيه البصري', labelEn: 'Visual Direction' },
    { id: 'marketing', num: '06', labelAr: 'التسويق والإعلانات', labelEn: 'Digital Marketing & Ads' },
  ];

  return (
    <div id="skills-portfolio" className="relative bg-[#07070a] border-t border-white/5 py-24">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">
        {/* ========================================================================= */}
        {/* SECTION HEADER & SKILL SWITCHER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SKILLS · 6 CORE DISCIPLINES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {isAr
              ? '6 مهارات تسويقية أساسية، مدعومة بأدلة حقيقية من المشاريع'
              : '6 Core Marketing Disciplines, Grounded in Product Truth'}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'بورتفوليو مهارات تنفيذي متكامل: من كتابة الكاروسيل والخطاف، إنتاج الـ AI، مونتاج الريلز، الفويس أوفر، والتوجيه البصري، إلى استراتيجية SOSTAC ومسارات التحويل.'
              : 'From high-converting carousels and AI creative production to short-form video editing, studio voice-over, visual direction, and SOSTAC performance roadmaps.'}
          </p>

          {/* Quick Skill Selector Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-zinc-900/80 border border-white/5 backdrop-blur-md">
            {skillTabs.map((tab) => {
              const isActive = activeSkill === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSkill(tab.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {tab.num && <span className="font-mono text-[10px] opacity-70">{tab.num}</span>}
                  <span>{isAr ? tab.labelAr : tab.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SKILL 01 — CONTENT CREATION */}
        {/* ========================================================================= */}
        {(activeSkill === 'all' || activeSkill === 'content') && (
          <section id="skill-content" className="space-y-8 pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>01 — CONTENT CREATION</span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {isAr
                    ? 'اكتب من أجل التمرير؛ وصمّم من أجل اتخاذ القرار'
                    : 'Write for the swipe; design for the decision'}
                </h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
                  &ldquo;Turning ideas into content people stop scrolling for.&rdquo; — {isAr ? 'أقوى النماذج تربط بين الإطار الأول، القيمة المقدمة، والإجراء المطلوب.' : 'The strongest examples connect the first frame, the value delivered and the action requested.'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-mono">
                  QAIM Menswear Case
                </span>
              </div>
            </div>

            {/* QAIM 4-Frame Carousel Grid from PDF Pages 4 & 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Frame 1: Opening Hook */}
              <div className="rounded-2xl bg-zinc-900/60 border border-white/10 overflow-hidden flex flex-col group">
                <div className="aspect-[4/5] overflow-hidden bg-black relative">
                  <img
                    src={qaimEditorial1}
                    alt="One Sweatpants 3 Looks"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 rounded font-mono text-[10px] text-amber-400 font-bold">
                    FRAME 01 · HOOK
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">QAIM STYLING</div>
                  <h4 className="text-sm font-bold text-white">One Sweatpants 3 Looks</h4>
                  <p className="text-[11px] text-zinc-400">
                    {isAr ? 'تسمية الحيرة أو التردد الحقيقي في الإطار الأول.' : 'Name the real choice or friction in the first frame.'}
                  </p>
                </div>
              </div>

              {/* Frame 2: Casual Look */}
              <div className="rounded-2xl bg-zinc-900/60 border border-white/10 overflow-hidden flex flex-col group">
                <div className="aspect-[4/5] overflow-hidden bg-black relative">
                  <img
                    src={qaimEditorial1}
                    alt="Casual Look"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 rounded font-mono text-[10px] text-amber-400 font-bold">
                    FRAME 02 · VALUE
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">CASUAL LOOK</div>
                  <h4 className="text-sm font-bold text-white">لوك بسيط ومريح للخروج اليومي</h4>
                  <p className="text-[11px] text-zinc-400">
                    {isAr ? 'جعل فكرة التنسيق مفيدة وعملية قبل طلب النقر.' : 'Make styling useful before asking for a click.'}
                  </p>
                </div>
              </div>

              {/* Frame 3: Sporty Look */}
              <div className="rounded-2xl bg-zinc-900/60 border border-white/10 overflow-hidden flex flex-col group">
                <div className="aspect-[4/5] overflow-hidden bg-black relative">
                  <img
                    src={qaimEditorial2}
                    alt="Sporty Look"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 rounded font-mono text-[10px] text-amber-400 font-bold">
                    FRAME 03 · ADAPTATION
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">SPORTY LOOK</div>
                  <h4 className="text-sm font-bold text-white">مناسب للجيم والـ Active Days</h4>
                  <p className="text-[11px] text-zinc-400">
                    {isAr ? 'تحويل قطعة واحدة إلى استخدامات متعددة في الروتين اليومي.' : 'Turns a product into a sequence of everyday looks.'}
                  </p>
                </div>
              </div>

              {/* Frame 4: Guidance & Confidence Checklist */}
              <div className="rounded-2xl bg-zinc-900/60 border border-white/10 overflow-hidden flex flex-col group">
                <div className="aspect-[4/5] overflow-hidden bg-zinc-950 p-5 flex flex-col justify-between border-b border-white/5 relative">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">CONFIDENCE CHECKLIST</span>
                    <h5 className="text-lg font-black text-white leading-tight">SAVE THIS CHECKLIST</h5>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Size & Fit</li>
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Material & Texture</li>
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Product Details</li>
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Inspection on Delivery</li>
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Easy Exchange</li>
                    </ul>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-300 text-[11px] font-bold text-center">
                    احفظ البوست قبل الـ Order الجاي
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">CTA & CONVERSION</div>
                  <h4 className="text-sm font-bold text-white">إزالة التردد والطلب بثقة</h4>
                  <p className="text-[11px] text-zinc-400">
                    {isAr ? 'دعوة خطوة تالية واحدة وواضحة: حفظ أو تعليق أو طلب.' : 'Invite one clear next step: save, comment or order.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Arabic Copy Callout from PDF */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-left rtl:text-right">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">ARABIC CAPTION ARCHITECTURE</span>
                <p className="text-base font-arabic font-bold text-white" dir="rtl">
                  «3 مشاوير في يوم واحد؟ اختار قطعة أساسية واحدة... اختيارك بيقول إيه عن يومك؟»
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  Qaim carousel copy sample · Arabic caption and frame plan documented in the assignment files.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    const p = projects.find((proj) => proj.id === 'qaim-fashion-growth');
                    if (p) onSelectProject(p);
                  }}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-black text-zinc-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{isAr ? 'استعراض دراسة كيس قيم' : 'View QAIM Case Study'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SKILL 02 — AI CONTENT (AI CREATIVE PRODUCTION) */}
        {/* ========================================================================= */}
        {(activeSkill === 'all' || activeSkill === 'ai') && (
          <section id="skill-ai" className="space-y-8 pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>02 — AI CREATIVE PRODUCTION</span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  TAKAA — &ldquo;Take the Tweak&rdquo; (مودك ناقصه تاكة)
                </h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
                  &ldquo;From concept to visual execution.&rdquo; — {isAr ? 'علامة مشروب طاقة مصرية افتراضية · مفهوم أكاديمي متكامل · أعمال بصرية وفيديو بالذكاء الاصطناعي.' : 'Fictional Egyptian energy-drink brand · course concept · AI-assisted visual and video work.'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                  Prompt Engineering & Direction
                </span>
              </div>
            </div>

            {/* Case Walkthrough: Brief -> Direction -> Final Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: The 3 Rules */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">01 · CLIENT BRIEF & PLATFORM</span>
                  <h4 className="text-sm font-bold text-white font-arabic" dir="rtl">
                    «مودك ناقصه تاكة» — a small mood shift, not a big reset.
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {isAr ? 'لحظة هبوط الطاقة المألوفة في منتصف اليوم الدراسي أو العمل هي المدخل العاطفي الواقعي للقصة.' : 'A familiar low-energy moment is a relatable way into the story.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">02 · PROMPT & VISUAL RULE</span>
                  <h4 className="text-sm font-bold text-white">
                    Deep Navy + Warm Orange + Cairo Landmarks
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {isAr ? 'توليد خلفيات نيلية مصرية مع برج القاهرة وقارب فلوكة وقت الغروب، مع تفاصيل تكثف قطرات الندى ودفقة الانتعاش البارد.' : 'Egyptian backdrops, Cairo Tower, condensation and splash dynamics.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">03 · VERIFIED OUTPUTS</span>
                  <ul className="text-xs text-zinc-300 space-y-1">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Eight-frame social carousel</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> 50s AI commercial product film</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> 16s adapted CapCut product-reveal edit</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: 2 Visuals from PDF Page 6 */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() =>
                    setLightboxImg({
                      src: takaaCreativeCampaign,
                      title: 'TAKAA — Cairo Landmark AI Scene',
                      caption: 'AI-generated product scene · Cairo Tower and Nile-inspired golden hour setting.',
                    })
                  }
                  className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-[4/5] cursor-pointer shadow-xl"
                >
                  <img
                    src={takaaCreativeCampaign}
                    alt="TAKAA Cairo Landmark"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left rtl:text-right">
                    <span className="text-[10px] font-mono text-amber-400 font-bold block">SCENE 01 · CAIRO AT NIGHT</span>
                    <h5 className="text-xs font-bold text-white">AI-generated product scene · Landmark</h5>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setLightboxImg({
                      src: takaaCapcutPoster,
                      title: 'TAKAA — Product Hero & Splash Details',
                      caption: 'Product hero · Cold refresh visual language with condensation dynamics.',
                    })
                  }
                  className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-[4/5] cursor-pointer shadow-xl"
                >
                  <img
                    src={takaaCapcutPoster}
                    alt="TAKAA Splash Details"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left rtl:text-right">
                    <span className="text-[10px] font-mono text-amber-400 font-bold block">SCENE 02 · PRODUCT HERO</span>
                    <h5 className="text-xs font-bold text-white">Cold refresh visual language</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SKILL 03 — VIDEO PRODUCTION (VIDEO & REELS) */}
        {/* ========================================================================= */}
        {(activeSkill === 'all' || activeSkill === 'video') && (
          <section id="skill-video" className="space-y-8 pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Film className="w-4 h-4" />
                  <span>03 — VIDEO & REELS</span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {isAr ? 'قصص مصممة خصيصاً للشاشة' : 'Stories designed for the screen'}
                </h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
                  {isAr
                    ? 'مقاطع إعلانية قصيرة ذات دور وظيفي بيعي واضح: اضغط على أي كارت لتشغيل الفيديو الفعلي فوراً.'
                    : 'Short advertising edits and product-story samples from the shared folder with verified 1-click playable modal.'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-amber-400 text-xs font-mono font-bold">
                  12 Playable Cuts
                </span>
              </div>
            </div>

            {/* Video Cards Grid from PDF Pages 6, 7, 8, 19 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[
                {
                  id: 'takaa-16s',
                  titleAr: 'تاكة — إعلان الكاب كات والتكبير السريع (16 ثانية)',
                  titleEn: 'TAKAA CapCut Product-Reveal Edit (16s)',
                  tag: 'TAKAA · CapCut Pop Reveal',
                  duration: '16 sec',
                  hookAr: 'تكبير ديناميكي على الكانز وفتحها مع صوت كسر الثلج في أول ثانيتين.',
                  url: '/videos/takaa_capcut_ad.mp4',
                  img: takaaCapcutPoster,
                },
                {
                  id: 'buffalo-burger',
                  titleAr: 'بافلو برجر — فيلم الأكل الماكرو والناري',
                  titleEn: 'Buffalo Burger Cinematic Food Film',
                  tag: 'Buffalo Burger · Food Sizzle',
                  duration: 'Macro Cut',
                  hookAr: 'لقطة ماكرو مقربة للجبن الذائب واللهب لتحفيز الشهية الفورية.',
                  url: '/videos/buffalo_burger_commercial.mp4',
                  img: buffaloPoster,
                },
                {
                  id: 'talabat-delivery',
                  titleAr: 'طلبات مصر — إعلان كوميدي عائلي سريع',
                  titleEn: 'Food Delivery Lifestyle & Family Film',
                  tag: 'Talabat · Family Lifestyle',
                  duration: 'Commercial',
                  hookAr: 'عائلة مصرية في ورطة الجوع تنقذها رنة جرس الطلب في ثوانٍ.',
                  url: '/videos/food_delivery_ad.mp4',
                  img: buffaloPoster,
                },
                {
                  id: 'spiro-spathis',
                  titleAr: 'سبيرو سباتس — إعلان المشروب الأصلي واللمة',
                  titleEn: 'Spiro Spathis Beverage Film',
                  tag: 'Spiro Spathis · Heritage TVC',
                  duration: '30 sec',
                  hookAr: 'صوت فتح الصودا ولمة الصحاب وأصالة الشارع المصري.',
                  url: '/videos/spiro_spathis_premium.mp4',
                  img: spiroPoster,
                },
                {
                  id: 'baba-geh-family',
                  titleAr: 'بابا جه — فيلم القصة والكوميديا العائلية',
                  titleEn: 'Baba Gah Family Story Film',
                  tag: 'Baba Gah · Family Story',
                  duration: '45 sec',
                  hookAr: 'أب للإيجار ومشاعر واقعية تلمس البيت المصري بحبكة مرحة.',
                  url: '/videos/baba_geh_pro.mp4',
                  img: babaGehThumb1,
                },
                {
                  id: 'baba-geh-montage',
                  titleAr: 'بابا جه — مونتاج سريع وكيس المشتريات (60 ثانية)',
                  titleEn: 'Baba Gah Montage Film (60s)',
                  tag: 'Baba Gah · Montage Cut',
                  duration: '60 sec',
                  hookAr: 'تقطيع فريمات كوميدي سريع وظهور شنطة اللبس «بابا جه».',
                  url: '/videos/baba_geh_montage.mp4',
                  img: babaGehThumb2,
                },
                {
                  id: 'vid-32-narrative',
                  titleAr: 'إعلان السرد القصصي السينمائي الطويل (105 ثانية)',
                  titleEn: 'Extended Brand Narrative Cut (105s)',
                  tag: 'Cinematic Narrative · 105s',
                  duration: '105 sec',
                  hookAr: 'بناء درامي متصاعد يربط المشاعر الإنسانية بقيمة وهوية العلامة.',
                  url: '/videos/VID-20260504-WA0032.mp4',
                  img: vid32Thumb,
                },
                {
                  id: 'vid-36-commercial',
                  titleAr: 'سبوت تجاري وإيقاع سريع (42 ثانية)',
                  titleEn: 'Commercial Spot & Dynamic Cuts (42s)',
                  tag: 'Commercial TVC · 42s',
                  duration: '42 sec',
                  hookAr: 'إيقاع إعلاني ديناميكي مكثف يوصل رسالة المنتج في أقل من دقيقة.',
                  url: '/videos/VID-20260504-WA0036.mp4',
                  img: vid36Thumb,
                },
                {
                  id: 'vid-00-launch-reel',
                  titleAr: 'ريلز إطلاق المنتج والإبهار البصري (35 ثانية)',
                  titleEn: 'Product Launch & Visual Impact Reel (35s)',
                  tag: 'Launch Reel · 35s',
                  duration: '35 sec',
                  hookAr: 'خطف انتباه فوري في أول ثانيتين مع حركة كاميرا سينمائية وعرض تفاصيل المنتج.',
                  url: '/videos/VID-20260914-WA0000.mp4',
                  img: vid00Thumb,
                },
              ].map((v) => (
                <div
                  key={v.id}
                  className="rounded-2xl bg-zinc-900/60 border border-white/10 overflow-hidden flex flex-col group hover:border-amber-500/40 transition-all shadow-xl"
                >
                  <div className="aspect-video relative overflow-hidden bg-black">
                    <img
                      src={v.img}
                      alt={v.titleEn}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <button
                        onClick={() =>
                          setActiveVideo({
                            url: v.url,
                            titleAr: v.titleAr,
                            titleEn: v.titleEn,
                            hookAr: v.hookAr,
                            badge: v.tag,
                            duration: v.duration,
                          })
                        }
                        className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-xl shadow-amber-500/30 transform group-hover:scale-110 transition-all cursor-pointer"
                      >
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </button>
                    </div>

                    <div className="absolute top-2.5 left-2.5 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-amber-300 font-bold">
                      {v.duration}
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">
                        {v.tag}
                      </span>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors mt-0.5">
                        {isAr ? v.titleAr : v.titleEn}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">
                        {v.hookAr}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setActiveVideo({
                          url: v.url,
                          titleAr: v.titleAr,
                          titleEn: v.titleEn,
                          hookAr: v.hookAr,
                          badge: v.tag,
                          duration: v.duration,
                        })
                      }
                      className="w-full mt-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-amber-500 text-zinc-300 hover:text-black text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isAr ? 'تشغيل الفيديو فوراً' : 'Watch Video'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SKILL 04 — DUBBING & AUDIO */}
        {/* ========================================================================= */}
        {(activeSkill === 'all' || activeSkill === 'audio') && (
          <section id="skill-audio" className="space-y-8 pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Music className="w-4 h-4" />
                  <span>04 — DUBBING & AUDIO</span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {isAr ? 'اللهجة المصرية، من السكربت إلى الدعوة للشراء' : 'Egyptian Arabic, from script to CTA'}
                </h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
                  &ldquo;Giving brands a voice.&rdquo; — {isAr ? 'عينتان صوتيتان متقنتان لمشروع أزياء قيم توضحان نبرة الصوت، التوقيت، وهندسة الإلقاء الإعلاني.' : 'Two Egyptian Arabic AI voice-over samples for Qaim demonstrating script timing, commercial tone and CTA conversion.'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                  Live Waveform Player
                </span>
              </div>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="/audio/qaim_voiceover.wav" onEnded={() => setIsPlayingAudio(false)} />

            {/* Audio Script & Interactive Player Card from PDF Page 9 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column: Script Breakdown */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-white/10 space-y-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-2">
                    SAMPLE SCRIPT · COMPLETE LOOK
                  </span>

                  <div className="p-4 rounded-2xl bg-black/60 border border-white/5 space-y-2">
                    <p className="text-lg font-arabic font-bold text-white text-right leading-relaxed" dir="rtl">
                      «عايز طقم كامل من غير ما تحتار في التنسيق؟»
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 flex-wrap">
                      <span className="text-amber-400 font-bold">Hook</span>
                      <span>→</span>
                      <span>product reveal</span>
                      <span>→</span>
                      <span>use case</span>
                      <span>→</span>
                      <span className="text-emerald-400 font-bold">Qaim.shop CTA</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
                    {isAr
                      ? 'تمت هندسة النص ليبدأ بالسؤال الذي يدور في ذهن الشاب المصري قبل الخروج، متبوعاً بحل التنسيق الفوري ودعوة الشراء المباشرة.'
                      : 'Structured script designed to tackle morning styling friction and transition seamlessly to the Qaim.shop checkout.'}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-zinc-500 pt-4 border-t border-white/5">
                  Scope note: Supports AI voice-over, audio directing, and commercial narration.
                </div>
              </div>

              {/* Right Column: Interactive 2-Track Player */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-900/40 to-black border border-amber-500/30 space-y-6 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500 text-black flex items-center justify-center font-bold shadow-lg shadow-amber-500/20">
                        <Volume2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">QAIM Menswear Commercial VO</h4>
                        <span className="text-xs text-zinc-400 font-mono">Egyptian Arabic · Studio Audio</span>
                      </div>
                    </div>

                    {/* Animated Pulsing Bars */}
                    {isPlayingAudio && (
                      <div className="flex items-end gap-1 h-6">
                        <span className="w-1 bg-amber-400 rounded-full animate-bounce h-3" />
                        <span className="w-1 bg-amber-400 rounded-full animate-bounce h-6" style={{ animationDelay: '0.15s' }} />
                        <span className="w-1 bg-amber-400 rounded-full animate-bounce h-4" style={{ animationDelay: '0.3s' }} />
                        <span className="w-1 bg-amber-400 rounded-full animate-bounce h-5" style={{ animationDelay: '0.45s' }} />
                      </div>
                    )}
                  </div>

                  {/* Track 1 Selector & Play */}
                  <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/5 flex items-center justify-between mb-3">
                    <div>
                      <div className="text-xs font-bold text-white">AI Voice-Over 1 · Complete Look</div>
                      <span className="text-[10px] font-mono text-zinc-400">Duration: 23 sec · Qaim Core Fit</span>
                    </div>

                    <button
                      onClick={() => handleToggleAudio(1)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeAudioTrack === 1 && isPlayingAudio
                          ? 'bg-amber-400 text-black'
                          : 'bg-zinc-800 hover:bg-amber-500 hover:text-black text-white'
                      }`}
                    >
                      {activeAudioTrack === 1 && isPlayingAudio ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          <span>{isAr ? 'إيقاف' : 'Pause'}</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{isAr ? 'تشغيل 23 ثانية' : 'Play 23s'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Track 2 Selector & Play */}
                  <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">AI Voice-Over 2 · Three Occasions</div>
                      <span className="text-[10px] font-mono text-zinc-400">Duration: 32 sec · 3 مشاوير في يوم واحد</span>
                    </div>

                    <button
                      onClick={() => handleToggleAudio(2)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeAudioTrack === 2 && isPlayingAudio
                          ? 'bg-amber-400 text-black'
                          : 'bg-zinc-800 hover:bg-amber-500 hover:text-black text-white'
                      }`}
                    >
                      {activeAudioTrack === 2 && isPlayingAudio ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          <span>{isAr ? 'إيقاف' : 'Pause'}</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{isAr ? 'تشغيل 32 ثانية' : 'Play 32s'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-zinc-400">هل تحتاج فويس أوفر إعلاني لحملتك؟</span>
                  <button
                    onClick={handleWhatsApp}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{isAr ? 'اطلب فويس أوفر واتساب' : 'Request Audio on WhatsApp'}</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SKILL 05 — VISUAL DIRECTION & PRODUCT IMAGERY */}
        {/* ========================================================================= */}
        {(activeSkill === 'all' || activeSkill === 'visual') && (
          <section id="skill-visual" className="space-y-8 pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  <span>05 — VISUAL DIRECTION</span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {isAr ? 'صور المنتج برؤية حملة إعلانية متكاملة' : 'Product imagery with a campaign point of view'}
                </h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
                  &ldquo;Finding the story in the frame.&rdquo; — {isAr ? 'حملة صيف V7 Cream Soda 2026: لوحة ألوان صيفية متسقة وقصة عابرة لثلاثة أجيال.' : 'V7 Cream Soda uses a coherent summer palette and a three-generation story to make the product feel part of a moment.'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-amber-400 text-xs font-mono font-bold">
                  Teal + Cream Visual System
                </span>
              </div>
            </div>

            {/* V7 Visual System from PDF Pages 10, 11, 18 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Frame 1 */}
              <div
                onClick={() =>
                  setLightboxImg({
                    src: v7SummerPoster,
                    title: 'V7 Summer Edition — 5 علامات إن صيفك ناقصه حاجة',
                    caption: 'الصيف بدأ.. بس لسه الإحساس مش كامل. اسحب عشان تعرف إيه الناقص.',
                  })
                }
                className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-[4/5] cursor-pointer shadow-xl flex flex-col justify-end p-4"
              >
                <img
                  src={v7SummerPoster}
                  alt="5 علامات إن صيفك ناقصه حاجة"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10 text-right font-arabic" dir="rtl">
                  <span className="text-[10px] font-mono text-amber-400 font-bold block mb-1">FRAME 01 · SUMMER OPENER</span>
                  <h5 className="text-sm font-bold text-white leading-snug">5 علامات إن صيفك ناقصه حاجة</h5>
                  <p className="text-[11px] text-zinc-300 mt-1">الصيف بدأ.. بس لسه الإحساس مش كامل.</p>
                </div>
              </div>

              {/* Frame 2 */}
              <div
                onClick={() =>
                  setLightboxImg({
                    src: v7SummerPoster,
                    title: 'V7 Cream Soda — كل جيل له صيفه.. وده صيفنا',
                    caption: 'Summer memory & lifestyle direction with authentic Egyptian beach trip energy.',
                  })
                }
                className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-[4/5] cursor-pointer shadow-xl flex flex-col justify-end p-4"
              >
                <img
                  src={v7SummerPoster}
                  alt="كل جيل له صيفه.. وده صيفنا"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10 text-right font-arabic" dir="rtl">
                  <span className="text-[10px] font-mono text-amber-400 font-bold block mb-1">FRAME 02 · GENERATION STORY</span>
                  <h5 className="text-sm font-bold text-white leading-snug">كل جيل له صيفه.. وده صيفنا</h5>
                  <p className="text-[11px] text-zinc-300 mt-1">V7 Cream Soda Summer Edition</p>
                </div>
              </div>

              {/* Frame 3 */}
              <div
                onClick={() =>
                  setLightboxImg({
                    src: v7SocialPost,
                    title: 'V7 Cream Soda — الناقص كان V7',
                    caption: 'صيفنا ليه طعم تاني · Teal + cream visual identity.',
                  })
                }
                className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-[4/5] cursor-pointer shadow-xl flex flex-col justify-end p-4"
              >
                <img
                  src={v7SocialPost}
                  alt="الناقص كان V7"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10 text-right font-arabic" dir="rtl">
                  <span className="text-[10px] font-mono text-amber-400 font-bold block mb-1">FRAME 03 · THE REVEAL</span>
                  <h5 className="text-sm font-bold text-white leading-snug">الناقص كان V7. صيفنا ليه طعم تاني</h5>
                  <p className="text-[11px] text-zinc-300 mt-1">هوية الكانز الصيفية بالكريمة المنعشة.</p>
                </div>
              </div>

              {/* Frame 4 */}
              <div
                onClick={() =>
                  setLightboxImg({
                    src: v7SocialPost,
                    title: 'V7 Cream Soda — كل أغاني الصيف اشتغلت ولسه ناقص الـ Drop',
                    caption: 'الصيف له إيقاع.. وله طعم كمان. Destination-led story frame.',
                  })
                }
                className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-[4/5] cursor-pointer shadow-xl flex flex-col justify-end p-4"
              >
                <img
                  src={v7SocialPost}
                  alt="كل أغاني الصيف اشتغلت ولسه ناقص الـ Drop"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10 text-right font-arabic" dir="rtl">
                  <span className="text-[10px] font-mono text-amber-400 font-bold block mb-1">FRAME 04 · MUSIC & RHYTHM</span>
                  <h5 className="text-sm font-bold text-white leading-snug">كل أغاني الصيف.. ولسه ناقص الـ Drop</h5>
                  <p className="text-[11px] text-zinc-300 mt-1">الصيف له إيقاع.. وله طعم كمان.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 text-[11px] font-mono text-zinc-500 text-center">
              Accurate credit note: These are campaign-concept visuals from the supplied materials supporting art direction and image-led content.
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SKILL 06 — DIGITAL MARKETING & ADS */}
        {/* ========================================================================= */}
        {(activeSkill === 'all' || activeSkill === 'marketing') && (
          <section id="skill-marketing" className="space-y-8 pt-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>06 — DIGITAL MARKETING & ADS</span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {isAr ? 'الاستراتيجية قبل الإنفاق الإعلاني' : 'Strategy before spend'}
                </h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
                  &ldquo;Creative that connects with strategy.&rdquo; — {isAr ? 'ربط دور المحتوى بإجراءات العملاء القابلة للقياس، وفصل السياق العام عن بيانات الأداء.' : 'The Qaim work links content roles to measurable customer actions, while separating public context from private performance data.'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                  SOSTAC Framework
                </span>
              </div>
            </div>

            {/* SOSTAC 6-Boxes Grid from PDF Page 12 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">01 · SITUATION</span>
                <h4 className="text-sm font-bold text-white">خريطة نقاط التماس الحالية</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Map the visible social and store touchpoints; identify what still needs analytics access.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">02 · OBJECTIVES</span>
                <h4 className="text-sm font-bold text-white">تحديد سلوك العميل المستهدف</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Define customer outcomes and KPIs before setting numerical targets.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">03 · STRATEGY</span>
                <h4 className="text-sm font-bold text-white">الانتقال من العرض إلى التوجيه</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Move from product listing to discovery, styling, guidance and a clear store visit.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">04 · TACTICS</span>
                <h4 className="text-sm font-bold text-white">مزيج المحتوى والإعلانات</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Reels, carousels, Stories, verified UGC and product-page CTAs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">05 · ACTION</span>
                <h4 className="text-sm font-bold text-white">جدول نشر أسبوعي قابل للتكرار</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Plan a repeatable week of content; test hooks and formats one variable at a time.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">06 · CONTROL</span>
                <h4 className="text-sm font-bold text-white">القياس المستمر والتطوير</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Review watch time, saves, shares, qualified clicks and orders; scale only from evidence.
                </p>
              </div>
            </div>

            {/* Funnel Banner from PDF Page 12 */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-amber-500/20 text-center space-y-3">
              <div className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                PROPOSED MEASUREMENT FUNNEL ARCHITECTURE
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono font-bold text-white">
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10">Discover</span>
                <span className="text-amber-400">→</span>
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10">Imagine</span>
                <span className="text-amber-400">→</span>
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10">Verify</span>
                <span className="text-amber-400">→</span>
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10">Visit</span>
                <span className="text-amber-400">→</span>
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10">Order</span>
                <span className="text-amber-400">→</span>
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10">Return</span>
              </div>
              <p className="text-xs text-zinc-400 max-w-xl mx-auto">
                Proposed measurement framework. Grounded in actual customer behavior before scaling ad spend.
              </p>
            </div>
          </section>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 1-CLICK PLAYABLE VIDEO MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/95 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-900/80">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[11px] font-bold">
                    {activeVideo.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{activeVideo.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title={isAr ? 'فتح الفيديو في تبويب مستقل' : 'Open in New Tab'}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setActiveVideo(null)}
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  src={activeVideo.url}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-5 bg-zinc-900/60 space-y-3">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {isAr ? activeVideo.titleAr : activeVideo.titleEn}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    <strong className="text-amber-400">{isAr ? 'الخطاف والريتم: ' : 'Hook & Pacing: '}</strong>
                    {activeVideo.hookAr}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/10 gap-2">
                  <a
                    href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold"
                  >
                    <span>{isAr ? 'مشاهدة الملف الأصلي على جوجل درايف' : 'Watch on Google Drive Folder'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={activeVideo.url}
                    download
                    className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 font-mono"
                  >
                    <span>{isAr ? 'تحميل ملف الـ MP4' : 'Download MP4'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightboxImg && (
          <div
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 p-2 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="max-h-[75vh] w-auto object-contain rounded-2xl border border-white/20 shadow-2xl"
              />

              <div className="mt-4 text-center">
                <h4 className="text-white font-bold text-base">{lightboxImg.title}</h4>
                <p className="text-zinc-400 text-xs mt-1">{lightboxImg.caption}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
