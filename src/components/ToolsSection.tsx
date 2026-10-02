import React from 'react';
import { Sparkles, Video, Image, PlaySquare, Layout, MessageSquareCode } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ToolsSection: React.FC = () => {
  const { isAr } = useLanguage();

  const tools = [
    {
      name: 'CapCut',
      categoryEn: 'Video Editing',
      categoryAr: 'مونتاج الفيديو',
      purposeEn: 'Video Editing • Motion • Color',
      purposeAr: 'مونتاج الفيديو • حركة ونصوص • تدريج ألوان',
      icon: Video,
    },
    {
      name: 'AI Image Tools',
      categoryEn: 'Generative Visuals',
      categoryAr: 'الصور التوليدية',
      purposeEn: 'Creative Visuals • Product Concepts',
      purposeAr: 'صور إبداعية • مفاهيم وتجسيم المنتجات',
      icon: Image,
    },
    {
      name: 'AI Video Tools',
      categoryEn: 'AI Cinematography',
      categoryAr: 'الفيديو السينمائي بالـ AI',
      purposeEn: 'Generative Video • Image-to-Video',
      purposeAr: 'فيديو توليدي • تحويل الصور للقطات سينمائية',
      icon: PlaySquare,
    },
    {
      name: 'Canva',
      categoryEn: 'Presentation & Design',
      categoryAr: 'التصميم والعروض',
      purposeEn: 'Social Media • Presentations • Design',
      purposeAr: 'محتوى السوشيال ميديا • عروض تقديمية • تصاميم',
      icon: Layout,
    },
    {
      name: 'ChatGPT',
      categoryEn: 'Ideation & Strategy',
      categoryAr: 'الأفكار والاستراتيجية',
      purposeEn: 'Research • Ideation • Scripts • Prompts',
      purposeAr: 'أبحاث السوق • ابتكار الأفكار • سكربتات • أوامر برمجية',
      icon: MessageSquareCode,
    },
  ];

  return (
    <section id="tools" className="py-20 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            {isAr ? '09 — الأدوات الفعلية' : '09 — TOOLS'}
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isAr ? 'الأدوات التي أعتمد عليها' : 'Tools & Technologies'}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              {isAr
                ? 'أدوات حقيقية أستخدمها يومياً في العمل الإعلاني وإنتاج الفيديو وإدارة الحملات دون مبالغة.'
                : 'Authentic tools actively used in day-to-day video editing, generative media, and marketing strategy.'}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>{isAr ? 'أدوات تتوسع وتتطور باستمرار' : 'Continuously expanded with new workflows'}</span>
          </div>
        </div>

        {/* Tools Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80 block">
                      {isAr ? tool.categoryAr : tool.categoryEn}
                    </span>
                    <div className="p-1.5 rounded-lg bg-white/5 text-zinc-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {isAr ? tool.purposeAr : tool.purposeEn}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>{isAr ? 'مُفعّل' : 'Active'}</span>
                  <span className="text-amber-400">● Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
