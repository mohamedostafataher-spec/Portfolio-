import React, { useState } from 'react';
import {
  BookOpen,
  ArrowUpRight,
  Clock,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { ARTICLES_DATA } from '../data/portfolioData';
import { Article } from '../types';
import { ArticleModal } from './ArticleModal';

interface InsightsSectionProps {
  onOpenContact: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  onOpenContact,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="insights" className="py-24 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            11 — STRATEGIC INSIGHTS &amp; THINKING
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Marketing &amp; AI Breakdown
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
              Real case breakdowns, psychological hook formulas, and generative production workflows written from practical application.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-500 hidden md:block">
            4 Core Publications // 2026
          </span>
        </div>

        {/* 4 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES_DATA.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/40 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-amber-400 text-[11px] font-mono font-bold uppercase border border-white/5">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-3 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Breakdown</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Article Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
