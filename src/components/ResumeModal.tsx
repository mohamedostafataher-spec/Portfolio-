import React from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Linkedin,
  Sparkles,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#101014] border border-white/15 rounded-3xl shadow-2xl z-10 text-left my-auto p-6 sm:p-10">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
              Curriculum Vitae &bull; Updated 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Close CV"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div className="space-y-8 print:text-black">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                Mohamed Mostafa
              </h1>
              <p className="text-amber-400 font-semibold text-sm sm:text-base mt-1">
                Digital Marketing Specialist &amp; AI Content Creator
              </p>
              <p className="text-zinc-400 text-xs mt-1">
                Cairo, Egypt &bull; Available for Remote &amp; On-Site Collaborations
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-zinc-400 sm:text-right font-mono">
              <a
                href="mailto:mohamedostafataher@gmail.com"
                className="hover:text-amber-400 transition-colors"
              >
                mohamedostafataher@gmail.com
              </a>
              <span>LinkedIn: Mohamed Mostafa</span>
              <span className="text-emerald-400 font-bold">Open to Commercial &amp; Full-Time Roles</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Profile</span>
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Results-driven Digital Marketing &amp; Creative Video Specialist accredited by the Digital Egypt Pioneers Initiative (DEPI / MCIT - ID: 21172333). Specialized in bridging data-informed marketing frameworks (SOSTAC, SCQA, Audience Personas, Meta Ad Funnels) with cinematic AI video production, colloquial storytelling, and high-velocity short-form content.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Core Competencies</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-zinc-300">
                &bull; SOSTAC Strategy &amp; SCQA
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-zinc-300">
                &bull; AI Commercial Production
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-zinc-300">
                &bull; CapCut &amp; Viral Pop-Reveals
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-zinc-300">
                &bull; Sound Design &amp; Match Cuts
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-zinc-300">
                &bull; Meta (FB &amp; IG) Acquisition Funnels
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-zinc-300">
                &bull; Brand Deck Presentations
              </div>
            </div>
          </div>

          {/* Selected Creative & Practical Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Key Campaigns &amp; Commercial Concepts (2025 — 2026)</span>
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">
                    Spiro Spathis — “الأصل بيكمل معانا”
                  </span>
                  <span className="text-xs font-mono text-amber-400">Concept Campaign</span>
                </div>
                <p className="text-xs text-zinc-400">
                  High-energy cinematic Egyptian heritage soda commercial. Crafted macro condensation visual aesthetics, crisp bottle cap Foley soundscapes, and rhythmic editing celebrating Egyptian cultural pride.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">
                    V7 Cream Soda — “Every Generation Has Its Summer”
                  </span>
                  <span className="text-xs font-mono text-amber-400">19-Slide Deck &amp; Reel</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Constructed match-cut transitions and generative audio soundscapes bridging 3 eras of Egyptian coastal summers (Ras El Bar, Agami, and Sahel).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">
                    QAIM (قيم) — Fashion Storytelling &amp; SOSTAC Strategy
                  </span>
                  <span className="text-xs font-mono text-amber-400">E-Commerce Strategy</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Full SOSTAC audit and SCQA campaign roadmap for a 62K follower brand with 96% positive rating. Shifted content focus to “Sell the lifestyle and the solution, not only the product” boosting organic engagement by +20%.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">
                    Baba Geh (بابا جه) — Social & Comedy Campaign
                  </span>
                  <span className="text-xs font-mono text-amber-400">Viral Short-Form & TVC</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Engineered viral hooks, comedic punchline timing, and dynamic audio-dialogue synchronization for the high-engagement «بابا جه» campaign with custom sound Foley effects.
                </p>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              <span>Technical &amp; Creative Toolset</span>
            </h2>
            <p className="text-xs text-zinc-300 leading-relaxed">
              <strong className="text-white">Video &amp; Motion:</strong> CapCut Pro, Match-Cut Direction, Foley Sound Engineering &bull;{' '}
              <strong className="text-white">Generative Media:</strong> AI Video Generation, Prompt Schemas, Midjourney, Flux &bull;{' '}
              <strong className="text-white">Marketing &amp; Strategy:</strong> SOSTAC Framework, SCQA Narrative, Meta Ads Manager, Canva Brand Decks.
            </p>
          </div>

          {/* Education & Accreditations */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Accreditations &amp; Education</span>
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between flex-wrap gap-2 text-zinc-200">
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span>Digital Egypt Pioneers Initiative (DEPI) • وزارة الاتصالات وتكنولوجيا المعلومات</span>
                  </div>
                  <div className="text-zinc-400 text-[11px]">
                    Specialist ID: <span className="text-amber-400 font-mono font-bold">21172333</span> &bull; Digital Marketing &amp; Creative Strategy
                  </div>
                </div>
                <a
                  href="/documents/DEPI_Digital_Marketing_Certification_Work.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-1 transition-all"
                >
                  <Download className="w-3 h-3" />
                  <span>View Official DEPI Capstone Report (PDF)</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-zinc-300 px-1">
                <span>Google Digital Garage — Digital Marketing Fundamentals</span>
                <span className="font-mono text-emerald-400">Certified</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300 px-1">
                <span>HubSpot Academy — Inbound &amp; Content Marketing</span>
                <span className="font-mono text-emerald-400">Certified</span>
              </div>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-500">
              Ready to create something impactful for your brand?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
            >
              <span>Hire Me / Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
