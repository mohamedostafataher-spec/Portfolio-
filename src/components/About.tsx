import React from 'react';
import {
  TrendingUp,
  Sparkles,
  Compass,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowUpRight,
  FileText,
  MessageCircle,
  BarChart3,
  Lightbulb,
  HeartHandshake,
  Layers,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useAvatar } from '../context/AvatarContext';

interface AboutProps {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
  onOpenPdfDeck?: () => void;
}

export const About: React.FC<AboutProps> = ({
  onOpenResume,
  onOpenContact,
  onOpenPdfDeck,
}) => {
  const { isAr } = useLanguage();
  const { avatarUrl } = useAvatar();

  const handleWhatsApp = () => {
    const phone = '201110095403';
    const message = isAr
      ? 'مرحباً أستاذ محمد، اطلعت على قسم التعريف وأود مناقشة مشروع تسويقي.'
      : 'Hi Mohamed, I read your About section and would like to discuss a marketing project.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const marketingPillars = [
    {
      titleEn: 'Performance & ROAS',
      titleAr: 'التسويق بالأداء والعائد',
      descEn: 'Managing Meta & TikTok ad budgets with precision funnel targeting, audience segmentation, and CAC reduction.',
      descAr: 'إدارة ميزانيات إعلانات ميتا وتيك توك بتحديد دقيق للجمهور ومسارات شراء تقلل كلفة الاكتساب وتضاعف العائد.',
      icon: BarChart3,
    },
    {
      titleEn: 'Creative Direction',
      titleAr: 'التوجيه الإبداعي والهوك',
      descEn: 'Scripting high-velocity TVC spots, crafting Egyptian colloquial hooks, and directing commercial audio & video.',
      descAr: 'كتابة اسكريبتات الإعلانات التلفزيونية والرقمية، هندسة الهوك المصري، والإشراف الصوتي والبصري الكامل.',
      icon: Lightbulb,
    },
    {
      titleEn: 'Brand Strategy (SOSTAC)',
      titleAr: 'تخطيط الاستراتيجية الشاملة',
      descEn: 'Architecting research-backed growth plans, customer journeys, brand positioning, and structured pitch decks.',
      descAr: 'بناء خطط نمو مبنية على أبحاث السوق ونموذج SOSTAC المعتمد، ورسم رحلة العميل والعروض التقديمية الاحترافية.',
      icon: Compass,
    },
    {
      titleEn: 'Content & Viral Reels',
      titleAr: 'صناعة المحتوى الفيروسي',
      descEn: 'Transforming product truths into engaging carousels and fast-paced reels with macro sizzle and motion zooms.',
      descAr: 'تحويل مزايا المنتجات إلى سلاسل كاروسيل جذابة وفيديوهات ريلز سريعة الإيقاع مع لمسات الماكرو والمؤثرات.',
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#09090c] border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TWO-COLUMN ABOUT SHOWCASE (MATCHING REFERENCE VIDEO 00:05) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* LEFT: BRANDED PORTRAIT IN GLOWING BADGE */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Outer Amber Rim Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-500/25 via-orange-500/15 to-transparent blur-xl" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 opacity-80" />

              {/* Portrait Image Frame */}
              <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-3xl overflow-hidden border-4 border-[#121215] bg-[#18181b] shadow-2xl p-1">
                <img
                  src={avatarUrl}
                  alt="Mohamed Mostafa Taher"
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
              </div>

              {/* Verified Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/95 border border-amber-500/50 backdrop-blur-md shadow-xl flex items-center gap-1.5 whitespace-nowrap z-20">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-white">DEPI Certified Marketer</span>
              </div>
            </div>
          </div>

          {/* RIGHT: STORY, CREDENTIALS & ACTION BUTTONS */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
            
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-2">
                <span>02 / ABOUT ME</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
                {isAr ? 'عن محمد طاهر' : 'About Me'}
              </h2>
              <p className="text-amber-400 font-mono text-sm sm:text-base font-bold mt-1">
                {isAr ? 'مسوق رقمي ومخرج إبداعي وميديا باير' : 'Digital Marketer & Creative Director'}
              </p>
            </div>

            {/* BIO TEXT */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {isAr
                ? 'أنا محمد مصطفى طاهر، مسوق رقمي ومخرج إبداعي مقيم في القاهرة، مصر. متخصص في هندسة الحملات الإعلانية المدفوعة، كتابة وصناعة الفيديوهات التجارية، وتخطيط استراتيجيات النمو للعلامات التجارية وفق نموذج SOSTAC العالمي.'
                : 'I am Mohamed Mostafa Taher, a data-driven Digital Marketer & Creative Director based in Cairo, Egypt. Specializing in high-converting paid media campaigns, viral short-form commercials, and full-funnel growth architecture.'}
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              {isAr
                ? 'طالب بجامعة العاصمة (كلية الآداب) وحاصل على شهادة الذكاء الاصطناعي والمهارات المهنية من ALX ومعتمد من مبادرة مصر الرقمية (DEPI). قمت بتخطيط وتنفيذ حملات وفيديوهات إعلانية لمشاريع بارزة تشمل: قيم للأزياء، بريدفاست، في سفن صودا، تاكة، بابا جه، بافلو برجر، وطلبات مصر.'
                : 'Student at Capital University (Faculty of Arts), ALX AI & Professional Skills certified, and accredited by the Digital Egypt Pioneers Initiative (DEPI). Strategized and produced impactful campaigns for brands including QAIM Menswear, Breadfast, V7 Soda, TAKAA Energy Drink, Baba Geh, Buffalo Burger, and Talabat Egypt.'}
            </p>

            {/* Quick Credentials Pills */}
            <div className="flex flex-wrap gap-2 pt-1 justify-center lg:justify-start text-xs font-mono">
              <span className="px-3 py-1 rounded-lg bg-zinc-800 border border-white/5 text-zinc-300">
                🎓 Capital University (2027)
              </span>
              <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300">
                ✨ ALX AI Certified
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                🤝 Resala Volunteer
              </span>
            </div>

            {/* ACTION BUTTONS (LIKE VIDEO 00:08) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer transform hover:scale-105"
              >
                <FileText className="w-4 h-4" />
                <span>{isAr ? 'عرض وتحميل السيرة الذاتية (CV)' : 'Download CV / Resume'}</span>
              </button>

              <button
                onClick={onOpenPdfDeck}
                className="px-5 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-white/10 hover:border-amber-500/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{isAr ? 'عرض الكتيب الشامل (PDF)' : 'View Full Deck (25 Pages)'}</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-5 py-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'محادثة واتساب سريعة' : 'Quick WhatsApp Chat'}</span>
              </button>
            </div>

          </div>

        </div>

        {/* 4 MARKETING PILLARS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {marketingPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-white text-base">
                  {isAr ? pillar.titleAr : pillar.titleEn}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {isAr ? pillar.descAr : pillar.descEn}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
