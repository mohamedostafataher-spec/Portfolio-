import React from 'react';
import {
  FileText,
  Lightbulb,
  Palette,
  CheckCircle2,
  BarChart3,
  Search,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CreativeProcess: React.FC = () => {
  const { isAr } = useLanguage();

  const steps = [
    {
      number: '01',
      titleEn: 'BRIEF',
      titleAr: '01 · ملخص الهدف (BRIEF)',
      descEn: 'Clarify the audience, product truth, platform and business action.',
      descAr: 'تحديد الشريحة المستهدفة، حقيقة المنتج الفعلية، المنصة الملائمة، والهدف البيعي.',
      icon: Search,
    },
    {
      number: '02',
      titleEn: 'INSIGHT',
      titleAr: '02 · رؤية المستهلك (INSIGHT)',
      descEn: 'Identify the real question, friction or occasion behind the content.',
      descAr: 'استخراج السؤال الحقيقي أو التردد أو المناسبة الواقعية وراء المحتوى.',
      icon: Lightbulb,
    },
    {
      number: '03',
      titleEn: 'CONCEPT',
      titleAr: '03 · المفهوم الإبداعي (CONCEPT)',
      descEn: 'Define one idea and a format that can carry it.',
      descAr: 'صياغة فكرة واحدة قوية واختيار القالب المناسب لحملها (كاروسيل، ريلز، بوستر).',
      icon: Palette,
    },
    {
      number: '04',
      titleEn: 'CREATE',
      titleAr: '04 · الإنتاج والتنفيذ (CREATE)',
      descEn: 'Write, storyboard, design and edit; keep product details accurate.',
      descAr: 'كتابة السكربت، الستوري بورد، التصميم، والمونتاج؛ مع دقة بيانات المنتج.',
      icon: FileText,
    },
    {
      number: '05',
      titleEn: 'REVIEW',
      titleAr: '05 · المراجعة والتدقيق (REVIEW)',
      descEn: 'Check claims, names, price, stock, rights, spelling and mobile readability.',
      descAr: 'تدقيق الأسماء، الأسعار، المخزون، سهولة القراءة على الموبايل، والوعود البيعية.',
      icon: CheckCircle2,
    },
    {
      number: '06',
      titleEn: 'LEARN',
      titleAr: '06 · التعلم والتطوير (LEARN)',
      descEn: 'Set a baseline, compare meaningful signals, then iterate or scale.',
      descAr: 'تحديد خط الأساس، مقارنة الإشارات الحقيقية (الحفظ والطلبات)، ثم التوسع.',
      icon: BarChart3,
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching PDF Page 20 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-3">
            {isAr ? '17 / WORKFLOW · حلقة العمل الإبداعي' : '17 / WORKFLOW'}
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'حلقة إبداعية قابلة للتكرار' : 'A Repeatable Creative Loop'}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isAr
              ? 'طريقة عمل واضحة تحافظ على ترابط الاستراتيجية، الإنتاج، والقياس الفعلي.'
              : 'A simple working method that keeps strategy, production and measurement connected.'}
          </p>
        </div>

        {/* 6 Steps Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-zinc-600 group-hover:text-amber-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-sm font-bold text-white mb-2">
                    {isAr ? step.titleAr : step.titleEn}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed pt-3 border-t border-white/5">
                  {isAr ? step.descAr : step.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Rule Banner from PDF Page 20 */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950/80 border border-white/10 max-w-3xl mx-auto text-center space-y-2">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            {isAr ? 'المبدأ الحاكم' : 'CORE PRINCIPLE'}
          </div>
          <p className="text-base sm:text-lg font-bold text-white italic">
            &ldquo;{isAr ? 'لا يصبح أي مؤشر نتيجة حقيقية حتى يتم قياسه فعلياً.' : 'No metric becomes a result until it is measured.'}&rdquo;
          </p>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto">
            {isAr
              ? 'الخطط في دراسات الحالة تحدد ما يجب قياسه؛ ويتم فصل البيانات المخططة عن نتائج الحملات المعتمدة.'
              : 'The plans in these case studies define what to measure; verified evidence is maintained honestly.'}
          </p>
        </div>
      </div>
    </section>
  );
};
