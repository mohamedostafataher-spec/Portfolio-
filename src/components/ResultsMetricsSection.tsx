import React from 'react';
import {
  BarChart2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  Eye,
  Activity,
} from 'lucide-react';
import { RESULTS_METRICS_DATA } from '../data/portfolioData';

export const ResultsMetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="py-20 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            08 — RESULTS &amp; PERFORMANCE PHILOSOPHY
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Metrics That Matter.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Zero Vanity Numbers.
              </span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
              Real marketing is measured by message retention, attention capture, and business action. Every project I produce is calibrated against real performance benchmarks.
            </p>
          </div>

          <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-900/40 border border-dashed border-white/10 flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs text-zinc-300 leading-relaxed">
              <strong className="text-white block mb-1">Authentic Metrics Policy:</strong>
              As commercial collaborations go live, verified case study data (Reach, CTR, Lead Velocity) will be posted here without cosmetic inflation.
            </div>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESULTS_METRICS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-zinc-950 border border-white/5 hover:border-amber-500/20 transition-all space-y-2"
            >
              <div className="text-3xl sm:text-4xl font-display font-black text-amber-400">
                {item.metric}
              </div>
              <div className="text-sm font-bold text-white">
                {item.label}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
