import React from 'react';
import {
  Sparkles,
  Film,
  Image as ImageIcon,
  Cpu,
  Clapperboard,
  Compass,
  ArrowUpRight,
  Sliders,
} from 'lucide-react';
import { AI_CREATIVE_PILLARS } from '../data/portfolioData';

interface AiCreativeSectionProps {
  onOpenWork: () => void;
}

export const AiCreativeSection: React.FC<AiCreativeSectionProps> = ({
  onOpenWork,
}) => {
  const icons = [
    Film, // AI Video
    ImageIcon, // AI Images
    Cpu, // Prompt Engineering
    Clapperboard, // AI Advertising
    Sliders, // Storyboarding
    Compass, // Creative Direction
  ];

  return (
    <section id="ai-creative" className="py-24 relative bg-[#060608] border-t border-white/5 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            05 — CREATIVE EDGE
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              AI &amp; Cinematic Creative Direction
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
              Merging cutting-edge generative media tools with disciplined cinematography. Producing Tier-1 commercial aesthetics with 10x production speed.
            </p>
          </div>

          <button
            onClick={onOpenWork}
            className="px-5 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-amber-500/40 text-xs font-bold text-white flex items-center gap-2 transition-all hover:bg-zinc-800 cursor-pointer self-start md:self-auto"
          >
            <span>View AI Commercials</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_CREATIVE_PILLARS.map((pillar, idx) => {
            const IconComponent = icons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-zinc-600 group-hover:text-amber-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-3">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">
                    STACK / ENGINE:
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-amber-400">
                    {pillar.tools}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
