import React from 'react';
import { X, Clock, Calendar, Tag, Sparkles, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenContact,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#101014] border border-white/10 rounded-3xl shadow-2xl z-10 text-left my-auto p-6 sm:p-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category & Metadata */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold uppercase">
            {article.category}
          </span>
          <span className="text-zinc-500 text-xs flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
          <span className="text-zinc-500 text-xs flex items-center gap-1 font-mono hidden sm:flex">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {article.title}
        </h2>

        {/* Key Takeaways Box */}
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-amber-500/30 mb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>Executive Takeaways</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
            {article.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
          {article.content.map((paragraph, pIdx) => (
            <p key={pIdx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-zinc-500 mr-2">TOPICS:</span>
          {article.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author & Consultation CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-zinc-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-white text-sm">Authored by Mohamed Mostafa</div>
            <div className="text-xs text-zinc-400">Digital Marketing Specialist &amp; AI Content Creator</div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shrink-0 shadow-lg shadow-amber-500/20"
          >
            <span>Discuss This Strategy</span>
          </button>
        </div>
      </div>
    </div>
  );
};
