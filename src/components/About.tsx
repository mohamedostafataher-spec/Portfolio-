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
        
        {/* ABOUT CONTENT (CENTERED WITH PHOTO) */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          
          {/* Circular Photo for About */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative inline-block mb-10"
          >
            <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full" />
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl rotate-3 border border-white/10 p-2 bg-zinc-900 group">
              <div className="w-full h-full rounded-xl overflow-hidden -rotate-3 transition-transform group-hover:rotate-0 duration-500">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Fw6HZYS0JZ0QAByDjCCXPwGH4jApy_5l" 
                  alt="Mohamed Mostafa Taher"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black shadow-lg shadow-amber-500/30">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-[1px] bg-amber-500/50"></span>
            <span>{isAr ? 'عن محمد طاهر' : '02 / ABOUT ME'}</span>
            <span className="w-8 h-[1px] bg-amber-500/50"></span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-6xl font-black text-white tracking-tight mb-4">
            {isAr ? 'قصة نجاح رقمية' : 'A Digital Success Story'}
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 whitespace-nowrap">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] sm:text-xs font-mono font-bold text-white uppercase tracking-wider">DEPI Certified Marketer</span>
            </div>
          </div>

          <div className="space-y-6 text-zinc-300 text-sm sm:text-xl leading-relaxed font-light px-2">
            <p>
              {isAr
                ? 'أنا محمد مصطفى طاهر، مسوق رقمي ومخرج إبداعي مقيم في القاهرة، مصر. متخصص في هندسة الحملات الإعلانية المدفوعة، كتابة وصناعة الفيديوهات التجارية، وتخطيط استراتيجيات النمو للعلامات التجارية وفق نموذج SOSTAC العالمي.'
                : 'I am Mohamed Mostafa Taher, a data-driven Digital Marketer & Creative Director based in Cairo, Egypt. Specializing in high-converting paid media campaigns, viral short-form commercials, and full-funnel growth architecture.'}
            </p>

            <p className="text-zinc-400 text-sm sm:text-lg">
              {isAr
                ? 'طالب بجامعة العاصمة (كلية الآداب) وحاصل على شهادة الذكاء الاصطناعي والمهارات المهنية من ALX ومعتمد من مبادرة مصر الرقمية (DEPI). قمت بتخطيط وتنفيذ حملات وفيديوهات إعلانية لمشاريع بارزة تشمل: قيم للأزياء، بريدفاست، في سفن صودا، تاكة، بابا جه، بافلو برجر، وطلبات مصر.'
                : 'Student at Capital University (Faculty of Arts), ALX AI & Professional Skills certified, and accredited by the Digital Egypt Pioneers Initiative (DEPI). Strategized and produced impactful campaigns for brands including QAIM Menswear, Breadfast, V7 Soda, TAKAA Energy Drink, Baba Geh, Buffalo Burger, and Talabat Egypt.'}
            </p>
          </div>

          {/* Quick Credentials Pills */}
          <div className="flex flex-wrap gap-3 mt-10 justify-center font-mono">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-300 text-xs shadow-sm">
              <GraduationCap className="w-4 h-4 text-amber-500" />
              <span>Capital University (2027)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-300 text-xs shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>ALX AI Certified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-300 text-xs shadow-sm">
              <HeartHandshake className="w-4 h-4 text-emerald-500" />
              <span>Resala Volunteer</span>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <button
              onClick={onOpenResume}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-sm transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2 cursor-pointer transform hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              <span>{isAr ? 'عرض السيرة الذاتية (CV)' : 'Download CV / Resume'}</span>
            </button>

            <button
              onClick={onOpenPdfDeck}
              className="px-7 py-4 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{isAr ? 'عرض الكتيب الشامل (PDF)' : 'View Full Deck'}</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </button>
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
