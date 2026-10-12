import React from 'react';
import {
  TrendingUp,
  Sparkles,
  Film,
  Target,
  BarChart3,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Layers,
  MessageCircle,
  Clock,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CapabilitiesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectService }) => {
  const { isAr } = useLanguage();

  const services = [
    {
      num: '01',
      id: 'performance-marketing',
      titleAr: 'إعلانات الأداء والميديا بايينج',
      titleEn: 'Paid Media & Performance',
      categoryEn: 'PAID ADS & CONVERSION',
      categoryAr: 'الإعلانات الممولة ومسارات الشراء',
      icon: BarChart3,
      descAr:
        'إدارة ميزانيات إعلانات Meta و TikTok باستهداف دقيق ومسارات تحويل ترفع المبيعات وتضاعف العائد الإعلاني (ROAS).',
      descEn:
        'Managing targeted Meta & TikTok ad budgets to drive purchases, reduce customer acquisition cost, and scale ROAS.',
    },
    {
      num: '02',
      id: 'commercial-video',
      titleAr: 'صناعة الفيديو والريلز التجارية',
      titleEn: 'Commercial Video & Reels',
      categoryEn: 'DYNAMIC EDITING & FOLEY',
      categoryAr: 'المونتاج الإيقاعي وهندسة الصوت',
      icon: Film,
      descAr:
        'مونتاج إعلانات ريلز وتيك توك سريعة الإيقاع بـ CapCut Pro بهوكات بصرية قوية في أول ثانيتين ومؤثرات صوتية متقنة.',
      descEn:
        'Producing fast-paced vertical video ads and reels with instant 2-second visual hooks, rhythmic cuts, and tactile sound design.',
    },
    {
      num: '03',
      id: 'brand-strategy',
      titleAr: 'استراتيجيات التسويق ونموذج SOSTAC',
      titleEn: 'Brand Strategy & SOSTAC',
      categoryEn: 'MARKET AUDITS & ROADMAPS',
      categoryAr: 'أبحاث السوق والخطط الاستراتيجية',
      icon: Target,
      descAr:
        'خطط تسويقية متكاملة وفق منهجية SOSTAC المعتمدة لدراسة المنافسين ورسم رحلة العميل وتوجيه نمو العلامة.',
      descEn:
        'Developing actionable marketing roadmaps based on the certified SOSTAC framework, competitor analysis, and audience targeting.',
    },
    {
      num: '04',
      id: 'creative-direction',
      titleAr: 'إعلانات الذكاء الاصطناعي والكاروسيل',
      titleEn: 'Generative AI & Carousels',
      categoryEn: 'GEN-AI & SOCIAL CONTENT',
      categoryAr: 'المحتوى الإبداعي والذكاء الاصطناعي',
      icon: Sparkles,
      descAr:
        'توليد مشاهد إعلانية سينمائية بالـ AI، كتابة اسكريبتات بالعامية المصرية الذكية، وتصميم سلاسل كاروسيل جذابة للمنتجات.',
      descEn:
        'Generating cinematic AI visuals, authentic Egyptian Arabic commercial scripts, and interactive multi-slide product carousels.',
    },
  ];

  // 3 Streamlined Packages (Concise, High-Impact & Organized)
  const packages = [
    {
      nameAr: 'باقة الانطلاق (Starter Pack)',
      nameEn: 'Starter Creative Pack',
      taglineAr: 'إعلانات ريلز سريعة وهوكات قوية للمنتجات والمطاعم',
      taglineEn: 'Fast product reels & high-impact visual hooks',
      scopeAr: [
        '2 إلى 3 فيديوهات ريلز تجارية بهوكات سريعة',
        'مونتاج احترافي مع مؤثرات صوتية (Foley)',
        'تسليم سريع وجاهز للنشر (3–5 أيام)',
      ],
      scopeEn: [
        '2–3 High-retention vertical commercial reels',
        'Pro editing with tactile audio and sound effects',
        'Fast turnaround ready to publish (3–5 days)',
      ],
      isPopular: false,
    },
    {
      nameAr: 'باقة النمو والذكاء الاصطناعي (Growth Pack)',
      nameEn: 'Growth & AI Content Pack',
      taglineAr: 'إنتاج إعلاني متكامل بالذكاء الاصطناعي وسلاسل الكاروسيل',
      taglineEn: 'AI commercial spots & high-converting carousel series',
      scopeAr: [
        'إعلان تجاري سينمائي بتوليد أدوات الذكاء الاصطناعي',
        'سلسلة كاروسيل تفاعلية (4:5) لعرض المنتجات',
        'اسكريبت إعلاني وفويس أوفر بالعامية المصرية',
      ],
      scopeEn: [
        'Cinematic generative AI commercial film',
        'Multi-slide interactive product carousel (4:5)',
        'Commercial script & authentic Egyptian voiceover',
      ],
      isPopular: true,
    },
    {
      nameAr: 'الحملة الشاملة والاستراتيجية (Full Strategy)',
      nameEn: 'Full Campaign & Strategy',
      taglineAr: 'استراتيجية تسويق كاملة مع إنتاج إعلاني متكامل',
      taglineEn: 'End-to-end marketing roadmap & full creative execution',
      scopeAr: [
        'خطة تسويق SOSTAC متكاملة لدراسة السوق والجمهور',
        'إنتاج متكامل (فيديو + كاروسيل + محتوى ترويجي)',
        'مسار تواصل وتحويل مباشر (Click-to-WhatsApp)',
      ],
      scopeEn: [
        'Full SOSTAC marketing plan & competitor audit',
        'Integrated creative production (Video + Carousel)',
        'Direct acquisition funnel (Click-to-WhatsApp)',
      ],
      isPopular: false,
    },
  ];

  const handleServiceClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePackageWhatsApp = (pkgTitle: string) => {
    const phone = '201110095403';
    const message = isAr
      ? `مرحباً أستاذ محمد، أود الاستفسار ومناقشة تفاصيل التعاون عبر: ${pkgTitle}.`
      : `Hi Mohamed, I would like to inquire about collaboration via: ${pkgTitle}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 relative bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* SECTION HEADER: PERSONAL PRO PROFESSIONAL TONE */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold mb-3 uppercase tracking-widest">
            <span>{isAr ? '03 / الخدمات وباقات التعاون' : '03 / SERVICES & PACKAGES'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'خدماتي التسويقية والإبداعية' : 'My Services & Capabilities'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isAr
              ? 'حلول إبداعية متكاملة ومباشرة تجمع بين سحر الإخراج المرئي، محتوى الذكاء الاصطناعي، وهندسة مسارات الشراء المربحة.'
              : 'Direct, focused creative and growth solutions combining cinematic video direction, generative AI, and high-converting acquisition funnels.'}
          </p>
        </div>

        {/* 4 SERVICE CAPABILITIES CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const Arrow = isAr ? ArrowLeft : ArrowRight;

            return (
              <div
                key={service.id}
                className="group p-6 sm:p-7 rounded-3xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-white/5 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-amber-500/5"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/10 group-hover:border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-black text-zinc-600 group-hover:text-amber-400 transition-colors">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase block mb-1">
                      {isAr ? service.categoryAr : service.categoryEn}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {isAr ? service.titleAr : service.titleEn}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {isAr ? service.descAr : service.descEn}
                  </p>
                </div>

                {/* Bottom Button */}
                <button
                  onClick={() => handleServiceClick(isAr ? service.titleAr : service.titleEn)}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-800 hover:bg-amber-500 text-zinc-200 hover:text-black font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/5 hover:border-amber-500 group-hover:shadow-md mt-4"
                >
                  <span>{isAr ? 'طلب الخدمة' : 'Discuss'}</span>
                  <Arrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* 3 STRUCTURED PACKAGES WITH CLEAR SCOPE (AUDIT PROPOSAL) */}
        {/* ======================================================== */}
        <div className="pt-10 border-t border-white/5 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {isAr ? 'باقات العمل المقترحة ونطاق التسليم' : 'Engagement Packages & Scopes'}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              {isAr
                ? 'نطاق تسليم واضح ومحدد يناسب احتياج علامتك ومرحلة نموها بدون تعقيدات.'
                : 'Clear, transparent deliverables tailored to your brand stage and campaign goals.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-6 transition-all ${
                  pkg.isPopular
                    ? 'bg-zinc-900/80 border-amber-500/40 shadow-xl shadow-amber-500/5 ring-1 ring-amber-500/20'
                    : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
                      PACKAGE 0{idx + 1}
                    </span>
                    {pkg.isPopular && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-black font-mono font-bold text-[10px] uppercase">
                        MOST POPULAR
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-xl font-bold text-white">
                    {isAr ? pkg.nameAr : pkg.nameEn}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {isAr ? pkg.taglineAr : pkg.taglineEn}
                  </p>

                  {/* Scope Checklist */}
                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase block">
                      DELIVERABLES / نطاق العمل:
                    </span>
                    {(isAr ? pkg.scopeAr : pkg.scopeEn).map((item, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-zinc-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePackageWhatsApp(isAr ? pkg.nameAr : pkg.nameEn)}
                  className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isAr ? 'مناقشة الباقة عبر واتساب' : 'Discuss Scope on WhatsApp'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
