import React, { useState } from 'react';
import {
  Code,
  Layers,
  Sparkles,
  TrendingUp,
  Film,
  Cpu,
  Search,
  Target,
  Lightbulb,
  Sliders,
  Rocket,
  CheckCircle2,
  Wrench,
  BarChart3,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SkillsToolsSection: React.FC = () => {
  const { isAr } = useLanguage();
  const [activeTab, setActiveTab] = useState<'skills' | 'stack' | 'workflow'>('skills');

  const skillGroups = [
    {
      categoryEn: 'Digital Marketing & Strategy',
      categoryAr: 'التسويق الرقمي وبناء الاستراتيجيات',
      icon: TrendingUp,
      skills: [
        'Audience Persona & ICPs',
        'SCQA Storytelling Framework',
        'Hook → Body → CTA Architecture',
        'Campaign Roadmaps & Content Calendars',
        'Paid Social Media Fundamentals',
        'Conversion & Retention Optimization',
      ],
    },
    {
      categoryEn: 'AI Generation & Direction',
      categoryAr: 'الذكاء الاصطناعي والتوليد الإعلاني',
      icon: Sparkles,
      skills: [
        'Photorealistic Commercial Imagery',
        'Generative Video & Camera Motion',
        'Prompt Engineering for Brands',
        'Character & Product Consistency',
        'AI Storyboard Rapid Prototyping',
        'Multi-Pass AI Upscaling & Texture',
      ],
    },
    {
      categoryEn: 'Cinematic Video Editing & Motion',
      categoryAr: 'المونتاج السينمائي والريتم الحركي',
      icon: Film,
      skills: [
        'Short-Form Viral Retention Pacing',
        'Dynamic Sound Design & SFX Mixing',
        'Speed Ramping & Match Cuts',
        'Kinetic Typography & Titles',
        'Commercial Color Grading',
        '9:16 & 16:9 Multi-Platform Export',
      ],
    },
    {
      categoryEn: 'Creative Copy & Direction',
      categoryAr: 'الكتابة الإعلانية والإخراج الإبداعي',
      icon: Target,
      skills: [
        'Colloquial Egyptian Scriptwriting',
        'Commercial Voiceover Direction',
        'Emotional Hook Formulation',
        'Visual Moodboards & Treatment Decks',
        'Brand Narrative Development',
        'Competitive Creative Audits',
      ],
    },
  ];

  const toolsList = [
    {
      name: 'CapCut Pro & Desktop',
      categoryEn: 'Video Editing & Motion',
      categoryAr: 'مونتاج وحركة وصوتيات',
      purposeEn: 'Dynamic short-form pacing, audio mixing, speed ramps, and kinetic captions.',
      purposeAr: 'ريتم الفيديوهات السريعة، دمج الأصوات، تسريع وتبطئ اللقطات، وإضافة نصوص حركية.',
      level: 'Advanced',
    },
    {
      name: 'Generative AI Video (Kling / Runway / Sora concepts)',
      categoryEn: 'AI Motion & Cinematography',
      categoryAr: 'توليد لقطات سينمائية بالذكاء الاصطناعي',
      purposeEn: 'Image-to-video motion, camera panning, drone shots, and cinematic atmosphere.',
      purposeAr: 'تحريك الصور لقطات سينمائية، حركات كاميرا درون، وأجواء إعلانية متقنة.',
      level: 'Advanced',
    },
    {
      name: 'AI Image Synthesis (Midjourney / Stable Diffusion)',
      categoryEn: 'Visual Concept & Mockups',
      categoryAr: 'توليد صور واقعية ومفاهيم بصرية',
      purposeEn: 'Ultra-realistic product visuals, lighting control, cinematic lighting, and textures.',
      purposeAr: 'صور واقعية للمنتجات، إضاءات استوديو وإعلانات تجارية فائقة الدقة.',
      level: 'Mastery',
    },
    {
      name: 'ChatGPT & Claude',
      categoryEn: 'Strategy & Arabic Copywriting',
      categoryAr: 'الأبحاث والسكربتات الإعلانية',
      purposeEn: 'Audience psychology research, SCQA scripts, creative angles, and prompt architecture.',
      purposeAr: 'أبحاث سلوك المستهلك، سكربتات إعلانية بالعامية المصرية، وهندسة الأوامر.',
      level: 'Expert',
    },
    {
      name: 'Canva & Figma',
      categoryEn: 'Decks & Visual Layouts',
      categoryAr: 'عروض تقديمية وبوسترات',
      purposeEn: 'Client pitch decks, campaign mockups, moodboards, and social media grids.',
      purposeAr: 'عروض تقديمية للمشاريع، تصميم ستوري بورد، وجداول نشر مرئية.',
      level: 'Proficient',
    },
    {
      name: 'Meta Ads Manager & Analytics Concepts',
      categoryEn: 'Campaign Performance',
      categoryAr: 'إدارة الحملات والتحليلات',
      purposeEn: 'Targeting setup, audience segmentation, CTR/ROAS metric tracking, and testing.',
      purposeAr: 'ضبط الاستهداف، تقسيم الجماهير، وتتبع مؤشرات الأداء والتحويل.',
      level: 'Strategic',
    },
  ];

  const workflowSteps = [
    {
      number: '01',
      titleEn: 'Research & ICP Friction',
      titleAr: 'دراسة الجمهور ونقاط الاحتكاك',
      descEn: 'Deep dive into audience psychology, competitor gaps, and the core marketing objective.',
      descAr: 'تحليل دقيق لسيكولوجية العميل، نقاط الضعف في إعلانات المنافسين، والهدف البيعي المحدد.',
      icon: Search,
    },
    {
      number: '02',
      titleEn: 'Creative Hook & Script',
      titleAr: 'صياغة خطاف الجذب والسكربت',
      descEn: 'Writing the sub-2-second visual hook, colloquial Arabic script, and storyboard structure.',
      descAr: 'كتابة خطاف أول ثانيتين، سكربت بالعامية الراقية، ورسم الستوري بورد لكل ثانية.',
      icon: Lightbulb,
    },
    {
      number: '03',
      titleEn: 'Generative Production',
      titleAr: 'الإنتاج البصري بالذكاء الاصطناعي',
      descEn: 'Iterative generation of cinematic scenes, consistent product imagery, and camera motion.',
      descAr: 'توليد لقطات المشاهد بدقة عالية، تثبيت شكل المنتج، واختيار حركات الكاميرا الأنسب.',
      icon: Sparkles,
    },
    {
      number: '04',
      titleEn: 'Editing, Sound & Export',
      titleAr: 'المونتاج، هندسة الصوت والتحسين',
      descEn: 'Precision cutdown, dynamic sound design, speed ramps, platform formatting, and delivery.',
      descAr: 'المونتاج الإيقاعي، المؤثرات الصوتية والموسيقى، وتجهيز الملفات بأعلى جودة لمختلف المنصات.',
      icon: Rocket,
    },
  ];

  return (
    <section id="skills-stack" className="py-20 sm:py-28 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            {isAr
              ? '04 — المهارات، بيئة العمل ومنهجية التنفيذ'
              : '04 — SKILLS, PRODUCTION STACK & WORKFLOW'}
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {isAr ? 'الترسانة الإبداعية والتقنية' : 'Technical & Creative Arsenal'}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              {isAr
                ? 'مزيج فريد من أدوات الإنتاج المتقدمة والخبرة التسويقية لإنتاج محتوى عالي الجودة بأسرع وقت.'
                : 'A battle-tested synergy of marketing methodology, production software, and generative AI pipelines.'}
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-zinc-900 border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'skills'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>{isAr ? 'المهارات' : 'Skills Matrix'}</span>
            </button>

            <button
              onClick={() => setActiveTab('stack')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'stack'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>{isAr ? 'الأدوات' : 'Tools Stack'}</span>
            </button>

            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'workflow'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>{isAr ? 'منهجية العمل' : '4-Step Workflow'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Skills Matrix */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {isAr ? group.categoryAr : group.categoryEn}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 text-xs text-zinc-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Tools Stack */}
        {activeTab === 'stack' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {toolsList.map((tool, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {isAr ? tool.categoryAr : tool.categoryEn}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {tool.level}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {tool.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {isAr ? tool.purposeAr : tool.purposeEn}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isAr ? 'تطبيق عملي متكرر' : 'Production Verified'}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Workflow */}
        {activeTab === 'workflow' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 transition-all relative group"
                >
                  <div className="text-3xl font-display font-black text-amber-500/30 group-hover:text-amber-400 transition-colors mb-4">
                    {step.number}
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-800/80 text-amber-400 w-fit mb-3 border border-white/5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {isAr ? step.titleAr : step.titleEn}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {isAr ? step.descAr : step.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
