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
                src="/images/profile/mohamed_profile_new.jpg"
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
          <span>AI Video • Creative Content • SOSTAC Strategy • Digital Marketing</span>
        </div>

        {/* Unified Official Full Name */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-3">
          Mohamed Mostafa Taher Salem
        </h1>

        {/* Exact Requested Professional Title */}
        <p className="text-amber-400 font-bold text-lg sm:text-2xl mb-4 font-display">
          AI Video & Content Creator | Digital Marketing Trainee
        </p>

        {/* Exact Requested Single Line Description */}
        <p className="max-w-2xl text-zinc-200 text-base sm:text-xl leading-relaxed mb-8 font-normal font-sans">
          {isAr
            ? 'بعمل حملات وإعلانات فيديو بالـ AI للبراندات المصرية بالعامية المصرية'
            : 'Crafting AI video campaigns & commercials for Egyptian brands in authentic Egyptian Arabic.'}
        </p>

        {/* CTAs Action Row: Exact Two Primary Buttons (شوف الأعمال + واتساب) + CV */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 w-full">
          {/* شوف الأعمال (Explore Work) */}
          <button
            onClick={onExploreWork}
            className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm sm:text-base transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>{isAr ? 'شوف الأعمال' : 'Explore Work'}</span>
            <ArrowDown className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* واتساب (WhatsApp Direct) */}
          <button
            onClick={handleWhatsApp}
            className="px-7 py-3.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-black font-bold text-sm sm:text-base border border-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
          </button>

          {/* Quick CV Download */}
          <button
            onClick={onOpenResume}
            className="px-5 py-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
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
            href="https://youtube.com/@mohamedmostafacreative"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-red-500 border border-white/5 transition-colors"
            title="YouTube Channel"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/mohamed-mostafa-2a00993b8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-sky-400 border border-white/5 transition-colors"
            title="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.65-1.63 1.65 1.65 0 1 0-3.3 0c0 .9.74 1.63 1.65 1.63m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
            </svg>
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
