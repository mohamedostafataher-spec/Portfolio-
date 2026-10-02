import React from 'react';
import { Sparkles, Eye, Target, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ApproachSection: React.FC = () => {
  const { isAr } = useLanguage();

  return (
    <section id="approach" className="py-24 relative bg-[#09090b] border-t border-white/5 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            {isAr ? '14 — منهجية ورؤية العمل' : '14 — ABOUT MY APPROACH'}
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="max-w-4xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-8">
            {isAr ? 'الاستراتيجية تلتقي بالإبداع' : 'Strategy Meets Creativity'}
          </h2>

          {/* Core Philosophy Quote Block */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-zinc-900/90 via-zinc-900/50 to-zinc-900/90 border border-amber-500/30 relative overflow-hidden shadow-2xl mb-12">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white leading-relaxed">
              {isAr ? (
                <>
                  «المحتوى العظيم لا يقتصر على المظهر الجميل فحسب..{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    بل يحتاج إلى هدف وغاية واضحة.
                  </span>»
                </>
              ) : (
                <>
                  “I believe great content is not just about looking good.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    It needs a purpose.
                  </span>”
                </>
              )}
            </blockquote>
          </div>

          {/* Deep-dive Narrative and Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <div className="space-y-4">
              <p>
                {isAr
                  ? 'كل لقطة بصرية، كل خطاف انتباه (Hook)، كل انتقال في المونتاج، وكل رسالة كلامية يجب أن يكون وراءها سبب وغاية تسويقية محددة.'
                  : 'Every visual, hook, transition and message should have a reason behind it.'}
              </p>
            </div>
            <div className="space-y-4">
              <p>
                {isAr
                  ? 'أجمع بين التفكير التسويقي المدروس والتنفيذ الإبداعي المتطور لصناعة محتوى يخطف الانتباه وفي نفس الوقت يوصل الرسالة الصحيحة للجمهور المناسب.'
                  : 'I combine marketing thinking with creative execution to create content that captures attention while communicating the right message to the right audience.'}
              </p>
            </div>
          </div>

          {/* 3 Pillars of Purpose */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-2">
              <Eye className="w-5 h-5 text-amber-400" />
              <h4 className="font-display font-bold text-white text-base">
                {isAr ? 'خطف الانتباه (Hook)' : 'Hook & Attention'}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {isAr
                  ? 'إيقاف التمرير اللانهائي في أول 1.5 ثانية عبر زوايا سينمائية مبتكرة وكسر النمط المتوقع.'
                  : 'Stopping the endless scroll in the first 1.5 seconds through compelling cinematography and curiosity cues.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-2">
              <Target className="w-5 h-5 text-amber-400" />
              <h4 className="font-display font-bold text-white text-base">
                {isAr ? 'وضوح الرسالة (Clarity)' : 'Clear Messaging'}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {isAr
                  ? 'إيصال القيمة الحقيقية للعلامة التجارية بسلاسة وإقناع دون تعقيد أو تشويش بصري.'
                  : 'Communicating the brand’s core benefit simply, without jargon or visual clutter.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <h4 className="font-display font-bold text-white text-base">
                {isAr ? 'الأثر والتذكر (Recall)' : 'Action & Recall'}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {isAr
                  ? 'ترك بصمة بصرية وعاطفية تدوم في ذهن المشاهد وتدفعه للتفاعل أو الشراء والمشاركة.'
                  : 'Leaving a memorable imprint that drives word of mouth, brand equity, and measurable conversions.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
