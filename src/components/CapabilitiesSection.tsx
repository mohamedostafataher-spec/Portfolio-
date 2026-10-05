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
      titleEn: 'Performance Marketing',
      categoryEn: 'PAID MEDIA & FUNNELS',
      categoryAr: 'الإعلانات الممولة ومسارات الشراء',
      icon: BarChart3,
      accentColor: 'from-amber-500 to-orange-500',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      descAr:
        'إدارة ميزانيات إعلانات Meta و TikTok و Google بهندسة مسارات شراء (Funnels) تضمن استهدافاً دقيقاً، وتقلل تكلفة الاستحواذ (CAC)، وتضاعف العائد على الإنفاق الإعلاني (ROAS).',
      descEn:
        'Managing high-performing Meta, TikTok & Google ad budgets through structured funnels, precise audience segmentation, CAC reduction, and aggressive ROAS scaling.',
      highlights: [
        { en: 'Meta Ads Manager & CBO/ABO', ar: 'إدارة حملات ميتا واختبارات A/B' },
        { en: 'TikTok Ads & Spark Ads', ar: 'إعلانات تيك توك وسپارك آدز' },
        { en: 'Full-Funnel TOFU/MOFU/BOFU', ar: 'هندسة مسارات الشراء المتكاملة' },
        { en: 'Retargeting & Lookalikes', ar: 'إعادة الاستهداف والجماهير المشابهة' },
      ],
    },
    {
      num: '02',
      id: 'commercial-video',
      titleAr: 'صناعة الفيديو والإعلانات التجارية',
      titleEn: 'Commercial Video & TVC',
      categoryEn: 'FAST-PACED EDITING & FOLEY',
      categoryAr: 'المونتاج الإيقاعي وهندسة الصوت',
      icon: Film,
      accentColor: 'from-orange-500 to-rose-500',
      badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
      descAr:
        'مونتاج فيديوهات إعلانية وتجارية سريعة الإيقاع بـ CapCut Pro و Premiere، مع هندسة خطافات بصرية تجذب الانتباه في أول ثانيتين، ومؤثرات صوتية محترفة (Foley & Sizzle) تحفز الشراء.',
      descEn:
        'Producing high-retention commercial TVC spots and short-form reels using CapCut Pro, featuring instant 2-second hooks, dynamic motion zooms, and macro food sizzle foley.',
      highlights: [
        { en: '2-Second Hook Engineering', ar: 'هندسة الهوك السريع في أول ثانيتين' },
        { en: 'Macro Foley & Sizzle Sound', ar: 'هندسة أصوات الماكرو وقرمشة الطعام' },
        { en: 'CapCut Pro & Motion Zooms', ar: 'مونتاج احترافي بحركات زووم رقمية' },
        { en: 'Short-Form Reels & TikToks', ar: 'فيديوهات رأسية 9:16 مصممة للانتشار' },
      ],
    },
    {
      num: '03',
      id: 'brand-strategy',
      titleAr: 'تخطيط الاستراتيجية ونموذج SOSTAC',
      titleEn: 'Brand Strategy (SOSTAC)',
      categoryEn: 'MARKET AUDITS & ROADMAPS',
      categoryAr: 'أبحاث السوق والخطط الشاملة',
      icon: Target,
      accentColor: 'from-amber-400 to-yellow-500',
      badgeColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
      descAr:
        'بناء خطط تسويق استراتيجية متكاملة وفق منهجية SOSTAC المعتمدة دولياً، تشمل تحليل الموقف الحالي، دراسة المنافسين، تحديد شخصيات المشترين (Buyer Personas)، وتصميم العروض التقديمية.',
      descEn:
        'Designing end-to-end strategic marketing roadmaps based on the certified SOSTAC framework, comprehensive competitor benchmarking, buyer persona definition, and pitch decks.',
      highlights: [
        { en: 'SOSTAC Certified Framework', ar: 'تخطيط تسويقي معتمد بنموذج SOSTAC' },
        { en: 'Competitor Benchmarking', ar: 'تحليل المنافسين والفجوات السوقية' },
        { en: 'Buyer Persona Architecture', ar: 'رسم وتحديد شخصيات العملاء المستهدفين' },
        { en: 'Investor & Strategy Pitch Decks', ar: 'تصميم عروض الاستراتيجية بالكانفا والـ PDF' },
      ],
    },
    {
      num: '04',
      id: 'creative-direction',
      titleAr: 'التوجيه الإبداعي وكتابة الاسكريبت',
      titleEn: 'Creative Direction & Copy',
      categoryEn: 'EGYPTIAN STORYTELLING & VO',
      categoryAr: 'السرد القصصي والفويس أوفر',
      icon: Sparkles,
      accentColor: 'from-emerald-400 to-teal-500',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      descAr:
        'ابتكار أفكار إعلانية أصيلة تلمس الواقع والفكاهة المصرية، صياغة اسكريبتات الإعلانات، توجيه الأداء الصوتي (Voice-over Direction)، وتوليد المواد البصرية بالذكاء الاصطناعي.',
      descEn:
        'Crafting memorable campaign ideas rooted in Egyptian cultural truths, high-converting colloquial copywriting, voice-over direction, and AI visual concept generation.',
      highlights: [
        { en: 'Egyptian Colloquial Copywriting', ar: 'كتابة إعلانية بالعامية المصرية الذكية' },
        { en: 'TVC Scriptwriting & Dialogue', ar: 'كتابة السيناريو والحوارات الإعلانية' },
        { en: 'Voice-over & Audio Direction', ar: 'توجيه هندسة الصوت والأداء الإعلاني' },
        { en: 'Generative AI Visual Concepts', ar: 'توليد أفكار وبوسترات بالذكاء الاصطناعي' },
      ],
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

  return (
    <section id="services" className="py-24 relative bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER (MATCHING REFERENCE VIDEO 00:10 "Our services") */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold mb-3 uppercase tracking-widest">
            <span>03 / SERVICES & CAPABILITIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'خدماتي التسويقية' : 'Our Services'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isAr
              ? 'حلول تسويقية متكاملة تجذب العملاء وتحقق أعلى عائد، مصممة خصيصاً لتناسب هوية علامتك التجارية وسلوك جمهورك المستهدف.'
              : 'End-to-end marketing solutions that attract customers, build brand equity, and generate measurable revenue across modern digital touchpoints.'}
          </p>
        </div>

        {/* 4 SERVICE CARDS (MATCHING REFERENCE VIDEO STYLE) */}
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

                {/* BOTTOM BUTTON: GET STARTED (MATCHING REFERENCE VIDEO) */}
                <button
                  onClick={() => handleServiceClick(isAr ? service.titleAr : service.titleEn)}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-800 hover:bg-amber-500 text-zinc-200 hover:text-black font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/5 hover:border-amber-500 group-hover:shadow-md"
                >
                  <span>{isAr ? 'ابدأ الآن' : 'Get Started'}</span>
                  <Arrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
