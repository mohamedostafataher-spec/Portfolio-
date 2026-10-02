import React from 'react';
import { MessageSquare, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TestimonialsProps {
  onOpenContact: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ onOpenContact }) => {
  const { isAr } = useLanguage();

  return (
    <section id="testimonials" className="py-20 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            {isAr ? '13 — آراء وتقييمات العملاء' : '13 — TESTIMONIALS'}
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/30 border border-dashed border-white/10 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mx-auto mb-6">
            <MessageSquare className="w-6 h-6" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-zinc-400 text-xs font-mono uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isAr ? 'سياسة الشفافية — لا تقييمات مصطنعة' : 'Zero Fake Testimonials Policy'}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            {isAr ? 'آراء العملاء • قريباً مع إطلاق الحملات' : 'Client Endorsements • Coming Soon'}
          </h3>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            {isAr
              ? 'الصدق والمصداقية أساس بناء الثقة. مع انطلاق المشاريع الإعلانية والحملات التسويقية القادمة، سيتم توثيق ونشر تقييمات العملاء ونتائج الحملات مباشرة هنا.'
              : 'Authenticity comes first. As new client collaborations and pilot advertising campaigns roll out, genuine feedback and verified results will be published right here.'}
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <span>{isAr ? 'كن شريكاً في الحملات القادمة' : 'Collaborate as a Launch Client'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
            <span className="text-xs text-zinc-500">
              {isAr ? 'عروض وباقات خاصة للمشاريع الرائدة' : 'Special pilot rates for first-mover brands'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
