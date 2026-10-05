import React from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Play,
  Sparkles,
  MessageCircle,
  Instagram,
  Layers,
  Film,
  Music,
  Camera,
  TrendingUp,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

// 6 Authentic Thumbnails from User's Verified 21-Page PDF
import qaimEditorial1 from '../assets/images/qaim_real_editorial_1.jpg'; // CONTENT: QAIM
import takaaCreativeCampaign from '../assets/images/takaa_creative_campaign.jpg'; // AI: TAKAA Nile Can
import babaGehThumb1 from '../assets/images/baba_geh_thumb1.jpg'; // VIDEO: Baba Geh
import spiroPoster from '../assets/images/spiro_spathis_poster.jpg'; // DUBBING / AUDIO
import v7SummerPoster from '../assets/images/v7_summer_poster.jpg'; // PHOTO / VISUAL: V7
import qaimEditorial2 from '../assets/images/qaim_real_editorial_2.jpg'; // ADS & SOSTAC

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
  onOpenResume: () => void;
  onOpenFeaturedProject: () => void;
  onOpenPdfDeck?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  onExploreWork,
  onOpenResume,
  onOpenFeaturedProject,
  onOpenPdfDeck,
}) => {
  const { isAr } = useLanguage();

  const handleWhatsApp = () => {
    const phone = '201110095403';
    const message = isAr
      ? 'مرحباً أستاذ محمد، اطلعت على موقعك وأود مناقشة مشروع إعلاني / حملة تسويقية.'
      : 'Hi Mohamed, I saw your portfolio and would like to discuss a marketing campaign.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToSkill = (skillId: string) => {
    const el = document.getElementById(skillId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 sm:pt-36 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] md:w-[850px] h-[350px] sm:h-[450px] bg-gradient-to-b from-amber-500/15 via-amber-600/5 to-transparent blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability & Official Handle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 text-xs text-zinc-400 mb-6 font-mono flex-wrap justify-center"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-200">
            {isAr ? 'متاح لمشاريع العلامات التجارية وصناعة المحتوى' : 'Available for Brand Campaigns & Content'}
          </span>
          <span className="text-zinc-600">·</span>
          <a
            href="https://instagram.com/mohamedostafa5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@mohamedostafa5</span>
          </a>
        </motion.div>

        {/* COVER: FULL NAME FROM PDF */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-2"
        >
          {isAr ? 'محمد مصطفى طاهر سالم' : 'Mohamed Mostafa Taher Salem'}
        </motion.h1>

        {/* COVER: TITLE & CORE FORMULA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-1 mb-4"
        >
          <div className="text-xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight">
            {isAr ? 'تسويق رقمي ومحتوى إعلاني إبداعي' : 'Digital Marketing & Creative Content'}
          </div>
          <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-400 font-bold">
            Content • AI • Video • Dubbing • Visual • Performance
          </div>
        </motion.div>

        {/* COVER: SIGNATURE STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto my-4 p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md"
        >
          <p className="font-display text-sm sm:text-base md:text-lg font-medium text-zinc-200 tracking-tight leading-relaxed">
            {isAr
              ? 'أطوّر أفكار الحملات الإعلانية، المحتوى الاجتماعي، المواد البصرية بالذكاء الاصطناعي، ومفاهيم الفيديو القصير المصممة حول أهداف تسويقية واضحة للجمهور.'
              : 'I develop campaign ideas, social content, AI-assisted visuals and short-form video concepts designed around clear audience and communication goals.'}
          </p>
        </motion.div>

        {/* Action Buttons: Exactly 3 Buttons as requested */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto my-4"
        >
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>{isAr ? 'استعراض المشاريع المختارة' : 'View Selected Work'}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'تحميل السيرة الذاتية (CV)' : 'Download CV'}</span>
          </button>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-emerald-400 font-bold text-sm border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{isAr ? 'تواصل معي' : 'Contact Me'}</span>
          </button>
        </motion.div>
      </div>

      {/* Down Scroll Anchor */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <a
          href="#work"
          className="p-2 rounded-full text-zinc-500 hover:text-white transition-colors"
          aria-label="Scroll down to Selected Work"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
