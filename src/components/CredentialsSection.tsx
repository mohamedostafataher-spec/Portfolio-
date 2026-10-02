import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CredentialsProps {
  onOpenArticleModal?: (article: any) => void;
  onOpenContact: (subject?: string) => void;
}

export const CredentialsSection: React.FC<CredentialsProps> = ({ onOpenContact }) => {
  const { isAr } = useLanguage();
  const [activeTab, setActiveTab] = useState<'certifications' | 'education' | 'insights'>('certifications');
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const certifications = [
    {
      titleEn: 'Google Digital Marketing & E-Commerce Specialization',
      titleAr: 'تخصص التسويق الرقمي والتجارة الإلكترونية من Google',
      issuer: 'Google Career Certificates',
      year: '2024 - 2025',
      topicsEn: ['Customer Personas', 'Analytics & Funnels', 'E-Commerce Strategies', 'Email & Search Marketing'],
      topicsAr: ['تحديد شخصية العميل', 'تحليلات مسارات الشراء', 'استراتيجيات التجارة الإلكترونية', 'التسويق عبر البريد ومحركات البحث'],
    },
    {
      titleEn: 'HubSpot Inbound Marketing & Content Strategy',
      titleAr: 'شهادة التسويق الداخلي واستراتيجية المحتوى من HubSpot',
      issuer: 'HubSpot Academy',
      year: '2024',
      topicsEn: ['Content Clusters', 'Buyer Journey', 'Lead Nurturing', 'Organic Traffic Conversion'],
      topicsAr: ['توزيع وبناء المحتوى', 'رحلة العميل الشرائية', 'تأهيل العملاء المحتملين', 'تحويل الزيارات لمبيعات'],
    },
    {
      titleEn: 'Generative AI & Prompt Engineering for Commercials',
      titleAr: 'هندسة الأوامر والذكاء الاصطناعي للإعلانات التجارية',
      issuer: 'DeepLearning.AI & Industry Cohorts',
      year: '2025',
      topicsEn: ['Consistency Prompting', 'Image-to-Video Pipelines', 'Cinematic Lighting Models'],
      topicsAr: ['تناسق الشخصيات والمنتجات', 'تحويل الصور لفيديو سينمائي', 'محاكاة إضاءات الاستوديو'],
    },
    {
      titleEn: 'Meta Certified Digital Marketing Associate Foundations',
      titleAr: 'أساسيات التسويق الإعلاني عبر منصات Meta',
      issuer: 'Meta Blueprint',
      year: '2024',
      topicsEn: ['Ad Objectives', 'Campaign Budget Optimization', 'Audience Retargeting'],
      topicsAr: ['أهداف الحملات الإعلانية', 'تحسين ميزانيات الحملات', 'إعادة استهداف الجماهير'],
    },
  ];

  const education = [
    {
      degreeEn: 'Bachelor of Science (B.Sc.) in Management Information Systems',
      degreeAr: 'بكالوريوس نظم المعلومات الإدارية (MIS)',
      institutionEn: 'Faculty of Commerce & Business Technology',
      institutionAr: 'كلية التجارة وتكنولوجيا الأعمال',
      period: '2020 — 2024',
      descriptionEn:
        'Focused on business process engineering, digital systems architecture, database management, and data-driven marketing decision making.',
      descriptionAr:
        'دراسة متخصصة في هندسة العمليات التجارية، النظم الرقمية، إدارة قواعد البيانات، واتخاذ القرارات التسويقية المبنية على البيانات.',
    },
  ];

  const articles = [
    {
      id: 'ai-ads-2026',
      titleEn: 'How Generative AI is Reshaping TV Commercials in Egypt',
      titleAr: 'كيف يعيد الذكاء الاصطناعي تشكيل الإعلانات التلفزيونية في مصر',
      date: 'Feb 2026',
      readTime: '4 min read',
      excerptEn:
        'Why regional brands no longer need million-dollar production budgets to achieve world-class cinematic look and emotional connection.',
      excerptAr:
        'لماذا لم تعد العلامات التجارية بحاجة لميزانيات إنتاج ضخمة للحصول على جودة سينمائية وربط عاطفي بالجمهور المصري.',
      contentEn:
        'The transition from traditional week-long physical shoots to hybrid AI-assisted video workflows has unlocked unprecedented agility. By anchoring generative imagery in authentic local culture—like our Egyptian street and heritage moments in the Spiro Spathis and Talabat campaigns—brands achieve both massive cost efficiency and genuine audience resonance.',
      contentAr:
        'الانتقال من التصوير التقليدي المعقد إلى الإنتاج الهجين المدعوم بالذكاء الاصطناعي فتح آفاقاً غير مسبوقة. عند ربط اللقطات التوليدية بثقافة الشارع المصري وأماكنه الأصيلة—كما في حملات سبيرو سباتس وطلبات وبابا جه—يحصل البراند على جودة عالمية وتفاعل عاطفي حقيقي مع توفير كبير في الوقت والتكاليف.',
    },
    {
      id: 'scqa-framework',
      titleEn: 'The SCQA Framework: Why Storytelling Beats Features Every Time',
      titleAr: 'نموذج SCQA: لماذا تنتصر القصة التسويقية على سرد المميزات دائماً؟',
      date: 'Jan 2026',
      readTime: '3 min read',
      excerptEn:
        'A practical breakdown of Situation, Complication, Question, and Answer to stop endless scrolling and drive purchases.',
      excerptAr:
        'تحليل عملي لكيفية بناء الإعلان عبر الموقف، المشكلة، السؤال، والحل لخطف الانتباه وتحفيز قرار الشراء.',
      contentEn:
        'Most failing ads list specifications. Winning ads identify the user’s unstated emotional friction. In high-velocity conversion campaigns and brand strategy decks, we map the exact complication that makes the viewer freeze, positioning the product not as a gadget, but as the inevitable relief to their friction.',
      contentAr:
        'معظم الإعلانات غير الناجحة تسرد المواصفات فقط. أما الإعلانات الناجحة فتلمس التردد أو المشكلة النفسية التي يمر بها العميل. من خلال نموذج SCQA، نصنع مدخلاً يوقف المشاهد عن التمرير، ونقدم المنتج ليس مجرد سلعة بل كحل منطقي وممتع للمشكلة.',
    },
    {
      id: 'reels-first-second',
      titleEn: 'Winning the First 1.5 Seconds of Short-Form Video',
      titleAr: 'كيف تكسب أول 1.5 ثانية في الفيديوهات القصيرة (Reels & TikTok)؟',
      date: 'Dec 2025',
      readTime: '3 min read',
      excerptEn:
        'The technical mechanics of visual speed ramping, curiosity cues, and sound design that prevent users from swiping away.',
      excerptAr:
        'الأسرار التقنية لتسريع الحركة، فخاخ الفضول البصري، والهندسة الصوتية التي تمنع المستخدم من التمرير للأعلى.',
      contentEn:
        'The modern attention span is ruthless. If your video doesn’t offer a curiosity gap or striking visual contrast within the first 45 frames, retention plummets by 70%. We utilize asymmetric audio transients, quick zoom-ins, and on-screen bold hooks to ensure maximum retention.',
      contentAr:
        'مدى انتباه المشاهد اليوم لا يرحم. إذا لم يحمل الفيديو عنصراً مفاجئاً أو تبايناً بصرياً واضحاً في أول 45 إطاراً، تنخفض نسبة البقاء بنسبة 70%. نستخدم مؤثرات صوتية مباغتة، زووم سريع، وعناوين بارزة لضمان استمرار المشاهد حتى نهاية الرسالة.',
    },
  ];

  return (
    <section id="credentials" className="py-20 sm:py-28 relative bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            {isAr
              ? '05 — الشهادات، المؤهلات والرؤى التسويقية'
              : '05 — CREDENTIALS, EDUCATION & INSIGHTS'}
          </span>
          <div className="h-px bg-amber-500/20 w-16" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {isAr ? 'الاعتمادات والرؤية الفكرية' : 'Accreditations & Industry Insights'}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              {isAr
                ? 'شهادات معتمدة وأبحاث تطبيقية تثبت الجمع بين المعرفة الأكاديمية والإنتاج العملي الحديث.'
                : 'Recognized industry certifications, academic foundation in MIS, and strategic marketing insights.'}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-zinc-900 border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'certifications'
                  ? 'bg-amber-500 text-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{isAr ? 'الشهادات المعتمدة' : 'Certifications'}</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'education'
                  ? 'bg-amber-500 text-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{isAr ? 'المؤهل الأكاديمي' : 'Education'}</span>
            </button>

            <button
              onClick={() => setActiveTab('insights')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'insights'
                  ? 'bg-amber-500 text-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isAr ? 'مقالات ورؤى' : 'Articles'}</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-amber-400 font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">{cert.year}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-4">
                    {isAr ? cert.titleAr : cert.titleEn}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {(isAr ? cert.topicsAr : cert.topicsEn).map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-white/5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAr ? 'شهادة رسمية موثقة' : 'Verified Industry Credential'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Education */}
        {activeTab === 'education' && (
          <div className="max-w-3xl mx-auto animate-fade-in">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 transition-all"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {isAr ? edu.degreeAr : edu.degreeEn}
                      </h3>
                      <p className="text-zinc-400 text-sm">
                        {isAr ? edu.institutionAr : edu.institutionEn}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/5">
                    {edu.period}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mt-4 pt-4 border-t border-white/5">
                  {isAr ? edu.descriptionAr : edu.descriptionEn}
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-white/5 text-center">
                    <div className="text-amber-400 font-bold text-sm">Business Logic</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {isAr ? 'تحليل الأعمال' : 'Process Analysis'}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-white/5 text-center">
                    <div className="text-amber-400 font-bold text-sm">Data Architecture</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {isAr ? 'نظم وقواعد بيانات' : 'Database & Systems'}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-white/5 text-center col-span-2 sm:col-span-1">
                    <div className="text-amber-400 font-bold text-sm">Marketing Synergy</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {isAr ? 'تكامل تكنولوجي تسويقي' : 'Tech & Commercial'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 3: Strategic Articles */}
        {activeTab === 'insights' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {articles.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="group p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all flex flex-col justify-between cursor-pointer shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mb-3">
                    <span>{art.date}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2.5">
                    {isAr ? art.titleAr : art.titleEn}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {isAr ? art.excerptAr : art.excerptEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-amber-400">
                  <span>{isAr ? 'قراءة المقال كاملاً' : 'Read Full Article'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="w-full max-w-2xl bg-zinc-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-amber-400">
                  {selectedArticle.date} &bull; {selectedArticle.readTime}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
                {isAr ? selectedArticle.titleAr : selectedArticle.titleEn}
              </h2>

              <div className="text-sm sm:text-base text-zinc-300 leading-relaxed space-y-4">
                <p>{isAr ? selectedArticle.contentAr : selectedArticle.contentEn}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    const title = isAr ? selectedArticle.titleAr : selectedArticle.titleEn;
                    setSelectedArticle(null);
                    onOpenContact(`Consultation regarding: ${title}`);
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all cursor-pointer"
                >
                  {isAr ? 'ناقش هذه الفكرة معي' : 'Discuss this topic'}
                </button>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs hover:text-white cursor-pointer"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
