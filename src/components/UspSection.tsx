import React, { useState } from 'react';
import { Quote, Sparkles, Languages, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const UspSection: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'both' | 'en' | 'ar'>('both');

  return (
    <section id="usp" className="py-20 relative bg-[#09090b] overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-zinc-900/30 to-amber-500/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Tag */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              03 — USP (UNIQUE SELLING PROPOSITION)
            </span>
            <div className="h-px bg-amber-500/20 w-16" />
          </div>

          {/* Dual language toggle pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-zinc-900 border border-white/10 text-xs">
            <button
              onClick={() => setActiveLang('both')}
              className={`px-3 py-1 rounded-full font-medium transition-all ${
                activeLang === 'both'
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Bilingual
            </button>
            <button
              onClick={() => setActiveLang('en')}
              className={`px-3 py-1 rounded-full font-medium transition-all ${
                activeLang === 'en'
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setActiveLang('ar')}
              className={`px-3 py-1 rounded-full font-medium transition-all font-arabic ${
                activeLang === 'ar'
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              عربي
            </button>
          </div>
        </div>

        {/* Main USP Card */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-amber-500/20 shadow-2xl relative overflow-hidden">
          <Quote className="absolute -bottom-10 -right-10 w-64 h-64 text-amber-500/5 pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>My USP — Unique Selling Proposition</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              My USP
            </h2>

            {/* English Version */}
            {(activeLang === 'both' || activeLang === 'en') && (
              <motion.blockquote
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-snug tracking-tight"
              >
                “I combine{' '}
                <span className="text-amber-400 underline decoration-amber-500/40 decoration-wavy underline-offset-8">
                  digital marketing strategy
                </span>{' '}
                with AI-powered creativity to create content that looks cinematic, communicates clearly, and helps brands get noticed.”
              </motion.blockquote>
            )}

            {/* Arabic Version */}
            {(activeLang === 'both' || activeLang === 'ar') && (
              <motion.blockquote
                dir="rtl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-arabic text-2xl sm:text-3xl md:text-4xl font-bold text-amber-200 leading-relaxed pt-2"
              >
                “بجمع بين استراتيجية التسويق الرقمي والإبداع المدعوم بالـAI لصناعة محتوى سينمائي، واضح، ويساعد البراندات إنها تتميز وتتلاحظ.”
              </motion.blockquote>
            )}

            {/* Explanatory Context Note */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400 text-left">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>
                  <strong className="text-zinc-200">The Strategic Advantage:</strong> Not just AI visuals for show — every asset is anchored in clear marketing intent and conversion thinking.
                </span>
              </div>
              <div className="flex items-center gap-4 text-zinc-500 text-xs">
                <span>Visuals × Story × ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
