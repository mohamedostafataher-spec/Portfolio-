import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FaqItem {
  qEn: string;
  qAr: string;
  aEn: string;
  aAr: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    qEn: 'Are these campaigns real client work?',
    qAr: 'هل الحملات المعروضة شغل عملاء حقيقي؟',
    aEn: 'The brand campaigns (The Lakes, TAKAA, V7, Buffalo Burger and others) are independent concept projects I planned and produced end-to-end to show how I think and execute. Sulta (the online store) and my YouTube channel are live projects I built and run myself.',
    aAr: 'الحملات المعروضة للبراندات (ذا ليكس، تاكة، V7، بافلو برجر وغيرها) أعمال مفاهيمية مستقلة خططتها ونفذتها بالكامل لتوضيح طريقة تفكيري وتنفيذي. أما متجر سولته وقناة اليوتيوب فمشاريع حقيقية شغالة أديرها بنفسي.',
  },
  {
    qEn: 'What services do you offer?',
    qAr: 'ما هي الخدمات التي تقدمها؟',
    aEn: 'Commercial AI video ads and reels, interactive product carousels, SOSTAC marketing plans and competitor audits, and brand content in authentic Egyptian Arabic — from first idea to final cut.',
    aAr: 'إعلانات فيديو وريلز بالذكاء الاصطناعي، كاروسيلات تفاعلية للمنتجات، خطط تسويق SOSTAC وتحليل منافسين، ومحتوى براندات بالعامية المصرية الأصيلة — من الفكرة حتى المونتاج النهائي.',
  },
  {
    qEn: 'How does a project start?',
    qAr: 'كيف نبدأ التعاون؟',
    aEn: 'Send a short brief on WhatsApp or through the contact form: the brand, the audience, and the goal. I reply within 24 hours with first ideas, a clear scope, and next steps.',
    aAr: 'ابعت brief مختصر على واتساب أو من فورم التواصل: البراند والجمهور والهدف. برد خلال ٢٤ ساعة بأفكار أولية ونطاق عمل واضح والخطوات التالية.',
  },
  {
    qEn: 'Do you work remotely?',
    qAr: 'هل تعمل عن بُعد؟',
    aEn: 'Yes. I work fully remote from Cairo and collaborate with brands anywhere in Egypt, the Gulf, and beyond. All deliverables are shared digitally with review rounds.',
    aAr: 'نعم. أعمل عن بُعد بالكامل من القاهرة وأتعاون مع براندات في مصر والخليج وأي مكان. كل التسليمات رقمية مع جولات مراجعة.',
  },
  {
    qEn: 'Which tools do you use?',
    qAr: 'ما هي الأدوات التي تستخدمها؟',
    aEn: 'CapCut Pro for editing, Canva for design, generative AI tools for visuals and voice, and React/TypeScript/Supabase when a project needs a real website or store.',
    aAr: 'CapCut Pro للمونتاج، Canva للتصميم، أدوات الذكاء الاصطناعي التوليدي للصور والصوت، وReact/TypeScript/Supabase عندما يحتاج المشروع موقعاً أو متجراً حقيقياً.',
  },
  {
    qEn: 'Which language do you create content in?',
    qAr: 'بأي لغة تصنع المحتوى؟',
    aEn: 'My strongest work is in authentic colloquial Egyptian Arabic — hooks, scripts and voiceover that sound native, not translated. I also deliver English content for international-facing brands.',
    aAr: 'أقوى أعمالي بالعامية المصرية الأصيلة — هوكس وسكريبتات وتعليق صوتي يبدو طبيعياً وليس مترجماً. وأقدم أيضاً محتوى بالإنجليزية للبراندات الموجهة للخارج.',
  },
];

export const FaqSection: React.FC = () => {
  const { isAr } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      dir={isAr ? 'rtl' : 'ltr'}
      className="py-20 sm:py-24 relative bg-[#07070a] border-t border-white/5"
      aria-labelledby="faq-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <MessageCircleQuestion className="w-3.5 h-3.5" />
            {isAr ? 'الأسئلة الشائعة' : 'FAQ'}
          </span>
        </div>
        <h2 id="faq-title" className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
          {isAr ? 'أسئلة بتتسأل كتير' : 'Questions, answered'}
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mb-10">
          {isAr
            ? 'كل اللي محتاج تعرفه قبل ما نبدأ شغل مع بعض.'
            : 'Everything you need to know before we work together.'}
        </p>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors ${
                  open ? 'border-amber-500/30 bg-amber-500/[0.04]' : 'border-white/8 bg-zinc-900/40 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : idx)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start cursor-pointer"
                >
                  <span className={`font-semibold text-sm sm:text-base ${open ? 'text-amber-300' : 'text-zinc-100'}`}>
                    {isAr ? item.qAr : item.qEn}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-amber-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                  />
                </button>
                {open && (
                  <p className="px-5 pb-5 text-zinc-300 text-sm sm:text-[15px] leading-relaxed">
                    {isAr ? item.aAr : item.aEn}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
