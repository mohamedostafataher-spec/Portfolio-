import React from 'react';
import {
  TrendingUp,
  Sparkles,
  Film,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { isAr } = useLanguage();

  const services = [
    {
      id: 'digital-marketing',
      titleEn: 'Digital Marketing & Strategy',
      titleAr: 'استراتيجيات التسويق الرقمي والنمو',
      icon: TrendingUp,
      descEn:
        'Audience targeting, campaign architecture, and conversion-focused content planning that connects your brand with the right people.',
      descAr:
        'تحديد الجمهور المستهدف بدقة، بناء هياكل الحملات الإعلانية، وتخطيط محتوى تسويقي يهدف إلى زيادة المبيعات والولاء.',
      featuresEn: [
        'Audience Targeting & Persona Profiling',
        'SCQA & Hook-Body-CTA Storytelling',
        'Social Media Content Roadmaps',
        'Campaign Ideation & A/B Testing',
      ],
      featuresAr: [
        'دراسة وتحديد شرائح الجمهور المستهدف',
        'صياغة نماذج الجذب والإقناع (Hook-Body-CTA)',
        'جداول وخطط نشر المحتوى المدروس',
        'أفكار الحملات الإعلانية واختبار النسخ',
      ],
    },
    {
      id: 'ai-commercial',
      titleEn: 'AI Commercials & Visuals',
      titleAr: 'إعلانات الذكاء الاصطناعي والإنتاج السينمائي',
      icon: Sparkles,
      descEn:
        'Photorealistic commercial concepts, product mockups, and cinematic AI-generated videos created at unprecedented speed.',
      descAr:
        'مفاهيم إعلانية واقعية، تجسيم سينمائي للمنتجات، وفيديوهات ذكاء اصطناعي احترافية بجودة سينمائية فائقة وسرعة قياسية.',
      featuresEn: [
        'Cinematic Spec TVCs & Commercials',
        'High-Resolution AI Product Imagery',
        'Creative Direction & Scriptwriting',
        'Image-to-Video Production Pipelines',
      ],
      featuresAr: [
        'إنتاج إعلانات تجارية سينمائية متكاملة',
        'تصوير افتراضي واقعي للمنتجات بالذكاء الاصطناعي',
        'كتابة السكربتات وصياغة الرؤية الإبداعية',
        'توليد وتحريك اللقطات عبر Image-to-Video',
      ],
    },
    {
      id: 'video-editing',
      titleEn: 'Creative Video Editing',
      titleAr: 'المونتاج الإبداعي وصناعة الريلز',
      icon: Film,
      descEn:
        'High-retention short-form video editing for Instagram Reels, TikTok, and advertising campaigns with punchy pacing and sound design.',
      descAr:
        'مونتاج احترافي للفيديوهات القصيرة (Reels & TikTok) بريتم سريع يخطف الانتباه من الثانية الأولى، وهندسة صوتية عالية التأثير.',
      featuresEn: [
        'Thumb-Stopping First 2s Hooks',
        'Dynamic Sound Design & SFX Audio Mixing',
        'Kinetic Typography & Motion Graphics',
        'Color Grading & Seamless Transitions',
      ],
      featuresAr: [
        'خطافات أول ثانيتين لمنع التخطي',
        'مؤثرات صوتية وهندسة صوت احترافية',
        'نصوص حركية ومؤثرات بصرية ديناميكية',
        'تلوين سينمائي وانتقالات بصرية سلسة',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            {isAr ? '03 — الخدمات والحلول' : '03 — SERVICES'}
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {isAr ? 'ما أقدمه لعلامتك التجارية' : 'What I Deliver'}
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              {isAr
                ? 'خدمات متخصصة تجمع بين الاستراتيجية التسويقية المحكمة والإنتاج البصري المبهر.'
                : 'Focused services that pair strategic marketing discipline with cinematic creative execution.'}
            </p>
          </div>
        </div>

        {/* 3 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-amber-500/30 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {isAr ? service.titleAr : service.titleEn}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {isAr ? service.descAr : service.descEn}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/5 mb-8">
                    {(isAr ? service.featuresAr : service.featuresEn).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(isAr ? service.titleAr : service.titleEn)}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-800/80 hover:bg-amber-500 text-zinc-200 hover:text-black font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>{isAr ? 'طلب هذه الخدمة' : 'Request This Service'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
