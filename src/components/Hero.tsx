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

        {/* COVER: SIGNATURE STATEMENT FROM PDF PAGE 1 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto my-3 p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md"
        >
          <p className="font-display text-base sm:text-xl font-bold text-white tracking-tight leading-relaxed italic">
            &ldquo;
            {isAr
              ? 'أحوّل حقائق المنتجات وأسئلة الجمهور إلى قصص محتوى اجتماعي مفيدة وسهلة الفهم ومحفزة للقرار.'
              : 'Strategy, social content, AI-assisted creative, short-form video and voice-over samples — built around clear ideas and honest evidence.'}
            &rdquo;
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto my-4"
        >
          <button
            onClick={() => scrollToSkill('skills-portfolio')}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>{isAr ? 'استعراض الـ 6 مهارات العملية' : 'Explore 6 Skills Portfolio'}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{isAr ? 'واتساب مباشر: 01110095403' : 'WhatsApp: +20 111 009 5403'}</span>
          </button>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-900/70 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold text-xs sm:text-sm border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'السيرة الذاتية (CV)' : 'Download CV'}</span>
          </button>

          {onOpenPdfDeck && (
            <button
              onClick={onOpenPdfDeck}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-bold text-xs sm:text-sm border border-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/5"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'عرض كتيب الـ PDF الماستر (25 صفحة)' : 'View 25-Page Master PDF Deck'}</span>
            </button>
          )}
        </motion.div>

        {/* ===================================================================== */}
        {/* THE 6 SKILLS TILES (AS REQUESTED IN USER PROMPT) */}
        {/* ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-4xl pt-6"
        >
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3 text-center flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{isAr ? 'اضغط على أي مهارة للانتقال المباشر لأعمالها' : 'SELECT A SKILL TO INSPECT VERIFIED WORK'}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {/* Tile 01: CONTENT */}
            <div
              onClick={() => scrollToSkill('skill-content')}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/60 cursor-pointer shadow-lg transition-all"
            >
              <img
                src={qaimEditorial1}
                alt="Content Creation"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left rtl:text-right">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">01 · CONTENT</span>
                <h4 className="text-xs font-bold text-white truncate">QAIM Carousels & Hooks</h4>
              </div>
            </div>

            {/* Tile 02: AI CREATIVE */}
            <div
              onClick={() => scrollToSkill('skill-ai')}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/60 cursor-pointer shadow-lg transition-all"
            >
              <img
                src={takaaCreativeCampaign}
                alt="AI Content"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left rtl:text-right">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">02 · AI CREATIVE</span>
                <h4 className="text-xs font-bold text-white truncate">TAKAA &ldquo;Take the Tweak&rdquo;</h4>
              </div>
            </div>

            {/* Tile 03: VIDEO */}
            <div
              onClick={() => scrollToSkill('skill-video')}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/60 cursor-pointer shadow-lg transition-all"
            >
              <img
                src={babaGehThumb1}
                alt="Video Production"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left rtl:text-right">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">03 · VIDEO & REELS</span>
                <h4 className="text-xs font-bold text-white truncate">Baba Gah & Buffalo TVC</h4>
              </div>
            </div>

            {/* Tile 04: DUBBING & AUDIO */}
            <div
              onClick={() => scrollToSkill('skill-audio')}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/60 cursor-pointer shadow-lg transition-all"
            >
              <img
                src={spiroPoster}
                alt="Dubbing and Audio"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left rtl:text-right">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">04 · DUBBING & AUDIO</span>
                <h4 className="text-xs font-bold text-white truncate">Egyptian Arabic VO & Audio</h4>
              </div>
            </div>

            {/* Tile 05: PHOTO / VISUAL */}
            <div
              onClick={() => scrollToSkill('skill-visual')}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/60 cursor-pointer shadow-lg transition-all"
            >
              <img
                src={v7SummerPoster}
                alt="Visual Direction"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left rtl:text-right">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">05 · VISUAL DIRECTION</span>
                <h4 className="text-xs font-bold text-white truncate">V7 Summer Edition 2026</h4>
              </div>
            </div>

            {/* Tile 06: DIGITAL MARKETING */}
            <div
              onClick={() => scrollToSkill('skill-marketing')}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/60 cursor-pointer shadow-lg transition-all"
            >
              <img
                src={qaimEditorial2}
                alt="Digital Marketing"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left rtl:text-right">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">06 · MARKETING & ADS</span>
                <h4 className="text-xs font-bold text-white truncate">SOSTAC Strategy & Funnels</h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Anchor */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <a
          href="#skills-portfolio"
          className="p-2 rounded-full text-zinc-500 hover:text-white transition-colors"
          aria-label="Scroll down to Skills"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
