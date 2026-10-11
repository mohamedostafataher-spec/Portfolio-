import React, { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  Instagram,
  FolderGit2,
  Mail,
  FileText,
  Sparkles,
  ArrowDown,
} from 'lucide-react';
import { motion } from 'motion/react';
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
  const handleWhatsApp = () => {
    const phone = '201110095403';
    const message = isAr
      ? 'مرحباً أستاذ محمد، اطلعت على البورتفوليو وأود مناقشة مشروع إعلاني / حملة تسويقية.'
      : 'Hi Mohamed, I saw your portfolio and would like to discuss an advertising / marketing project.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 sm:pt-36 pb-20 flex flex-col items-center justify-center overflow-hidden border-b border-white/5"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] md:w-[900px] h-[350px] sm:h-[500px] bg-gradient-to-b from-amber-500/15 via-orange-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center z-10">
        {/* Profile Avatar + Location & Status */}
        <div className="relative mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 shadow-xl shadow-amber-500/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950">
              <img
                src="https://lh3.googleusercontent.com/d/1Fw6HZYS0JZ0QAByDjCCXPwGH4jApy_5l"
                alt="Mohamed Mostafa Taher"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950 shadow-md shadow-emerald-500/50" />
        </div>

        {/* Clear Professional Positioning Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Digital Marketing • AI Content • Video Editing • Creative Strategy</span>
        </div>

        {/* Standardized Full Official Name */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-2">
          Mohamed Mostafa
        </h1>

        {/* Title */}
        <p className="text-amber-400 font-bold text-lg sm:text-xl mb-5">
          Digital Marketing Specialist & AI Content Creator
        </p>

        {/* Main Headline */}
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
          Creative Strategist · AI Filmmaker · Growth Marketer
        </h2>

        {/* Main Description */}
        <p className="max-w-2xl text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-normal">
          I turn ideas into visual stories and strategies into campaigns.
          <br /><br />
          Blending creative thinking, generative AI, cinematic storytelling, and digital marketing to build compelling brand experiences—from the first insight to the final execution.
        </p>

        {/* CTAs Action Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full">
          {/* WhatsApp Direct */}
          <button
            onClick={handleWhatsApp}
            className="px-6 py-3.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-black font-bold text-xs sm:text-sm border border-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isAr ? 'محادثة واتساب مباشرة' : 'WhatsApp Chat'}</span>
          </button>

          {/* Download CV */}
          <button
            onClick={onOpenResume}
            className="px-5 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'السيرة الذاتية (CV)' : 'Download CV'}</span>
          </button>
        </div>

        {/* Showreel removed per user request */}

        {/* Quick Social Strip */}
        <div className="flex items-center gap-3 mt-8">
          <a
            href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-amber-400 border border-white/5 transition-colors flex items-center gap-1.5"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Master Drive (Google Drive)</span>
          </a>

          <a
            href="https://instagram.com/mohamedostafataher"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-pink-400 border border-white/5 transition-colors"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href="mailto:mohamedostafataher@gmail.com"
            className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 border border-white/5 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Down Scroll Anchor */}
      <div className="mt-12">
        <button
          onClick={onExploreWork}
          className="p-2 text-zinc-500 hover:text-white transition-colors cursor-pointer flex flex-col items-center gap-1"
          aria-label="Scroll down to projects"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">EXPLORE WORK</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
