import React, { useState } from 'react';
import {
  Megaphone,
  Share2,
  Users,
  Calendar,
  Layers,
  Zap,
  Crosshair,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { DIGITAL_MARKETING_PILLARS } from '../data/portfolioData';

interface DigitalMarketingSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const DigitalMarketingSection: React.FC<DigitalMarketingSectionProps> = ({
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [
    Layers, // Content Strategy
    Share2, // Social Media
    Users, // Audience Research
    Calendar, // Campaign Planning
    Megaphone, // Content Pillars
    Zap, // Hooks & CTAs
    Crosshair, // Brand Positioning
    BarChart3, // Performance/Analytics
  ];

  const currentPillar = DIGITAL_MARKETING_PILLARS[activeTab] || DIGITAL_MARKETING_PILLARS[0];
  const CurrentIcon = icons[activeTab] || Layers;

  return (
    <section id="marketing" className="py-24 relative bg-[#09090b] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            04 — CORE SPECIALIZATION
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Digital Marketing &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Content Architecture
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Content is only as powerful as the strategic intent behind it. Every campaign I develop is rooted in audience psychology, algorithmic pacing, and full-funnel distribution.
          </p>
        </div>

        {/* Interactive 8-Pillars Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {DIGITAL_MARKETING_PILLARS.map((pillar, idx) => {
              const IconComponent = icons[idx] || Layers;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500/15 to-transparent border-amber-500/60 shadow-lg shadow-amber-500/5 text-white'
                      : 'bg-zinc-900/40 border-white/5 hover:border-white/15 text-zinc-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-amber-500 text-black font-bold'
                          : 'bg-white/5 text-zinc-400'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-sm truncate">
                      {pillar.title}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-mono shrink-0 ${
                      isActive ? 'text-amber-400' : 'text-zinc-600'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Deep-Dive Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-white/10 shadow-2xl relative overflow-hidden space-y-8">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] pointer-events-none rounded-full" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
                    <CurrentIcon className="w-4 h-4" />
                    <span>Marketing Pillar 0{activeTab + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                    {currentPillar.title}
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-6 h-6" />
                </div>
              </div>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                {currentPillar.description}
              </p>

              {/* Topics / Methodologies */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                  Applied Frameworks &amp; Focus Areas:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPillar.topics.map((top, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{top}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Impact Note */}
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-zinc-300 flex items-start gap-3">
                <span className="font-bold text-amber-400 font-mono shrink-0">PRACTICE:</span>
                <p>
                  Applied in client and commercial campaigns like Spiro Spathis, Baba Geh, Talabat, and Buffalo Burger to balance brand storytelling with direct-response metrics.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => onOpenContact(`Marketing Strategy: ${currentPillar.title}`)}
                  className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  <span>Inquire Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                  Strategy First Approach &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
