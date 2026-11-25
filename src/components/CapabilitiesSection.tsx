import React from 'react';
import { Clapperboard, PenLine, Target, LayoutGrid, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  onSelectService: (service: string) => void;
}

export const CapabilitiesSection: React.FC<Props> = ({ onSelectService }) => {
  const { isAr } = useLanguage();
  const items = [
    {
      icon: Clapperboard,
      en: 'Short videos & reels',
      ar: 'فيديوهات وريلز قصيرة',
      dEn: 'AI-assisted video, edited in CapCut, vertical and ready to post.',
      dAr: 'فيديو بمساعدة الذكاء الاصطناعي ومونتاج على CapCut، رأسي وجاهز للنشر.',
    },
    {
      icon: PenLine,
      en: 'Scripts & hooks in Egyptian Arabic',
      ar: 'سكريبتات وهوكات بالعامية المصرية',
      dEn: 'Short scripts and opening hooks written in natural Egyptian Arabic.',
      dAr: 'سكريبتات قصيرة وبدايات جذابة مكتوبة بعامية مصرية طبيعية.',
    },
    {
      icon: Target,
      en: 'Marketing plans (SOSTAC)',
      ar: 'خطط تسويق (SOSTAC)',
      dEn: 'A clear plan: situation, goals, strategy, tactics and how to measure.',
      dAr: 'خطة واضحة: الوضع والأهداف والاستراتيجية والتكتيكات وطريقة القياس.',
    },
    {
      icon: LayoutGrid,
      en: 'Carousels & designs',
      ar: 'كاروسيل وتصميمات',
      dEn: 'Multi-slide posts and simple brand visuals made in Canva.',
      dAr: 'بوستات متعددة الشرائح وتصميمات بسيطة للبراند على Canva.',
    },
  ];

  return (
    <section id="services" className="py-16 border-t border-white/5" aria-labelledby="services-title">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 id="services-title" className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-8">
          {isAr ? 'اللي أقدر أعمله' : 'What I can do for you'}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.en} className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5">
                <Icon className="w-6 h-6 text-amber-400 mb-3" aria-hidden="true" />
                <h3 className="text-lg font-bold text-white mb-1">{isAr ? it.ar : it.en}</h3>
                <p className="text-base text-zinc-300 leading-relaxed">{isAr ? it.dAr : it.dEn}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => onSelectService('Project enquiry')}
            className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-base flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            {isAr ? 'ابعتلي مشروعك' : 'Send me your project'}
          </button>
        </div>
      </div>
    </section>
  );
};
