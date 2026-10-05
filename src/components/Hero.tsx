import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Sparkles,
  MessageCircle,
  Instagram,
  FolderGit2,
  Mail,
  BookOpen,
  Award,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
  onOpenResume: () => void;
  onOpenFeaturedProject?: () => void;
  onOpenPdfDeck?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  onExploreWork,
  onOpenResume,
  onOpenPdfDeck,
}) => {
  const { isAr } = useLanguage();

  const rolesEn = [
    'Digital Marketer',
    'Performance Media Buyer',
    'Creative Director',
    'Commercial Video Producer',
    'Growth & Funnel Strategist',
  ];

  const rolesAr = [
    'مسوق رقمي ومخطط حملات',
    'ميديا باير وإعلانات أداء',
    'مخرج إبداعي ومبتكر أفكار',
    'صانع فيديو وإعلانات تجارية',
    'مخطط نمو وتصميم مسارات الشراء',
  ];

  const roles = isAr ? rolesAr : rolesEn;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [roles.length]);

  const handleWhatsApp = () => {
    const phone = '201110095403';
    const message = isAr
      ? 'مرحباً أستاذ محمد، اطلعت على موقعك وأود مناقشة مشروع إعلاني / حملة تسويقية.'
      : 'Hi Mohamed, I saw your portfolio and would like to discuss a marketing campaign.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 sm:pt-40 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[850px] h-[300px] sm:h-[450px] bg-gradient-to-b from-orange-500/15 via-amber-500/10 to-transparent blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* MAIN CONTENT (CENTERED WITHOUT PHOTO) */}
        <div className="flex flex-col items-center text-center">
          
          {/* "Hello, It's Me" Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-mono font-bold mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAr ? 'مرحباً، أنا' : "Hello, It's Me"}</span>
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight mb-2"
          >
            {isAr ? 'محمد طاهر' : 'Mohamed Taher'}
          </motion.h1>

          {/* SUBTITLE: FULL OFFICIAL NAME */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs sm:text-sm font-mono text-zinc-400 font-medium mb-6 uppercase tracking-widest"
          >
            {isAr ? 'محمد مصطفى طاهر سالم' : 'Mohamed Mostafa Taher Salem'}
          </motion.p>

          {/* TYPEWRITER ROLE */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 flex-wrap"
          >
            <span className="text-zinc-400 font-mono text-xl sm:text-3xl">
              {isAr ? 'أنا' : "I'm a"}
            </span>
            <div className="relative inline-block min-w-[240px] sm:min-w-[350px] h-[40px] sm:h-[50px] overflow-hidden text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="inline-block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent font-black tracking-tight"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* MARKETING HOOK PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-300 text-sm sm:text-lg max-w-2xl leading-relaxed mb-8 font-normal"
          >
            {isAr
              ? 'أربط بين السرد الإعلاني الإبداعي وهندسة الأرقام والتسويق بالأداء. أصنع حملات متكاملة، إعلانات فيديو قصيرة، ومسارات شراء عالية العائد (ROAS) لنمو العلامات التجارية في السوق المصري والخليج.'
              : 'Bridging creative storytelling with performance marketing. I architect full-funnel ad campaigns, viral video commercials, and strategic brand positioning that scale revenues across the MENA region.'}
          </motion.p>

          {/* SOCIAL & CTAs */}
          <div className="flex flex-col items-center gap-8 w-full">
            {/* 4 ORANGE CIRCULAR SOCIAL ICONS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={handleWhatsApp}
                title="WhatsApp Direct"
                className="w-12 h-12 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 transition-all flex items-center justify-center cursor-pointer shadow-md transform hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </button>

              <a
                href="https://instagram.com/mohamedostafa5"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-12 h-12 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 transition-all flex items-center justify-center shadow-md transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Drive Master Vault"
                className="w-12 h-12 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 transition-all flex items-center justify-center shadow-md transform hover:scale-110"
              >
                <FolderGit2 className="w-5 h-5" />
              </a>

              <a
                href="mailto:mohamedostafataher@gmail.com"
                title="Email Mohamed"
                className="w-12 h-12 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 transition-all flex items-center justify-center shadow-md transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-4 w-full"
            >
              <button
                onClick={onOpenPdfDeck || onExploreWork}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-sm sm:text-base transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5 text-black" />
                <span>{isAr ? 'البورتفوليو والكتيب (My Portfolio)' : 'My Portfolio'}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-8 py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-amber-400 hover:text-white font-bold text-sm sm:text-base border border-amber-500/30 hover:border-amber-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-5 h-5 text-amber-400" />
                <span>{isAr ? 'السيرة الذاتية (CV)' : 'Download CV'}</span>
              </button>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Down Scroll Anchor */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="p-2 rounded-full text-zinc-500 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
