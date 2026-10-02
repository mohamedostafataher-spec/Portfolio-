import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  FileText,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

// PDF Slide Assets
import takaaCreativeCampaign from '../assets/images/takaa_creative_campaign.jpg';
import takaaCarousel1 from '../assets/images/takaa_carousel_1.jpg';
import takaaCapcutPoster from '../assets/images/takaa_capcut_poster.jpg';
import qaimEditorial1 from '../assets/images/qaim_real_editorial_1.jpg';
import qaimEditorial2 from '../assets/images/qaim_real_editorial_2.jpg';
import qaimEditorial3 from '../assets/images/qaim_real_editorial_3.jpg';
import v7SummerPoster from '../assets/images/v7_summer_poster.jpg';
import v7SocialPost from '../assets/images/v7_social_post.jpg';
import spiroPoster from '../assets/images/spiro_spathis_poster.jpg';
import buffaloPoster from '../assets/images/buffalo_burger_poster.jpg';
import babaGehThumb1 from '../assets/images/baba_geh_thumb1.jpg';
import babaGehThumb2 from '../assets/images/baba_geh_thumb2.jpg';

interface PdfDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const PdfDeckModal: React.FC<PdfDeckModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
}) => {
  const { isAr } = useLanguage();
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(initialPage);
    }
  }, [isOpen, initialPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') {
        setCurrentPage((p) => (p < 21 ? p + 1 : 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage((p) => (p > 1 ? p - 1 : 21));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Complete 21 Slides Content matching the PDF
  const slides = [
    {
      page: 1,
      section: 'COVER · SELECTED WORK 2026',
      titleEn: 'Mohamed Mostafa Taher Salem',
      titleAr: 'محمد مصطفى طاهر سالم',
      subtitleEn: 'Digital Marketing & Creative Content',
      subtitleAr: 'التسويق الرقمي والمحتوى الإبداعي',
      quoteEn:
        'Strategy, social content, AI-assisted creative, short-form video and voice-over samples — built around clear ideas and honest evidence.',
      quoteAr:
        'استراتيجية، محتوى سوشيال، إبداع بالذكاء الاصطناعي، فيديو قصير وفويس أوفر — مبني على أفكار واضحة وأدلة حقيقية.',
      tags: ['CONTENT STRATEGY', 'AI-ASSISTED CREATIVE', 'VIDEO + VOICE'],
      badge: '@mohamedostafa5',
      image: takaaCreativeCampaign,
    },
    {
      page: 2,
      section: '01 / PORTFOLIO MAP',
      titleEn: 'A clear path from brief to feed',
      titleAr: 'مسار واضح من الملخص إلى الظهور في الفيد',
      quoteEn: 'A compact overview of the work, its evidence and its limits.',
      quoteAr: 'نظرة شاملة ومكثفة على العمل، أدلته، وحدوده الواقعية.',
      items: [
        '01 · Content creation (Hooks, scripts, captions, carousels)',
        '02 · AI-assisted content (AI-led product imagery and short-form films)',
        '03 · Video (Short advertising edits and product-story samples)',
        '04 · Voice-over & audio (Egyptian Arabic AI voice-over samples)',
        '05 · Visual direction (Campaign art direction and image storytelling)',
        '06 · Digital marketing & ads (SOSTAC, funnel design and KPI testing)',
      ],
      image: qaimEditorial1,
    },
    {
      page: 3,
      section: '02 / PROFILE',
      titleEn: 'Creative thinking, grounded in product truth',
      titleAr: 'تفكير إبداعي، مستند إلى حقيقة المنتج',
      quoteEn:
        'I turn product facts and audience questions into useful social stories. From a clear hook to a carousel, a short-form video script or a measurable next step, my focus is on making the idea easy to understand and easy to act on.',
      quoteAr:
        'أحوّل حقائق المنتجات وأسئلة الجمهور إلى قصص محتوى مفيدة. من هوك واضح إلى كاروسيل أو سكربت ريلز أو خطوة تالية قابلة للقياس؛ تركيزي الدائم أن تكون الفكرة سهلة الفهم وسريعة الاستجابة.',
      workingPrinciple:
        'Use the real product and confirmed information. Test creative ideas before calling them winners.',
      image: takaaCreativeCampaign,
    },
    {
      page: 4,
      section: '03 / CONTENT CREATION',
      titleEn: 'Write for the swipe; design for the decision',
      titleAr: 'اكتب من أجل التمرير؛ وصمّم من أجل القرار',
      quoteEn: 'The strongest examples connect the first frame, the value delivered and the action requested.',
      quoteAr: 'أقوى النماذج تربط بين الإطار الأول، القيمة المقدمة، والإجراء المطلوب.',
      items: [
        'HOOK: Name the real choice or friction in the first frame.',
        'VALUE: Make the product or styling idea useful before asking for a click.',
        'CTA: Invite one clear next step: comment, save, or visit the product page.',
        'Arabic Copy: «اختيارك بيقول إيه عن يومك؟»',
      ],
      image: qaimEditorial1,
    },
    {
      page: 5,
      section: '04 / CONTENT FORMATS',
      titleEn: 'One idea, adapted to the platform',
      titleAr: 'فكرة واحدة، مكيفة حسب المنصة',
      quoteEn: 'Carousels, short Reels and Stories each take a distinct job in the same customer journey.',
      quoteAr: 'الكاروسيل والريلز والستوريز يؤدي كل منها وظيفة تسويقية محددة في نفس رحلة العميل.',
      items: [
        'A · Styling: “One Base, Three Plans” turns a product into a sequence of everyday looks.',
        'B · Guidance: “Before You Buy Online” organizes size, material, inspection and exchange checklists.',
        'Caption: «3 مشاوير في يوم واحد؟ اختار قطعة أساسية واحدة»',
      ],
      image: qaimEditorial2,
    },
    {
      page: 6,
      section: '05 / AI-ASSISTED CREATIVE',
      titleEn: 'TAKAA — “Take the Tweak” (مودك ناقصه تاكة)',
      titleAr: 'تاكة — «مودك ناقصه تاكة»',
      quoteEn: 'Fictional Egyptian energy-drink brand · course concept · AI-assisted visual and video work.',
      quoteAr: 'علامة مشروب طاقة مصرية افتراضية · مفهوم أكاديمي متكامل · أعمال بصرية وفيديو بالـ AI.',
      items: [
        'Platform: «مودك ناقصه تاكة» — a small mood shift, not a big reset.',
        'Visual Rule: Deep navy + warm orange, Egyptian landmarks, condensation and splash dynamics.',
        'Outputs: Eight-frame carousel, 50s AI product film, and 16s adapted CapCut product-reveal edit.',
      ],
      image: takaaCreativeCampaign,
    },
    {
      page: 7,
      section: '06 / VIDEO · SHORT-FORM',
      titleEn: 'Short-form stories with a clear product role',
      titleAr: 'قصص قصيرة ذات دور وظيفي بيعي واضح',
      quoteEn: 'Selected files from the shared project folder with authentic timing and hooks.',
      quoteAr: 'ملفات إعلانية مختارة من المجلد المشترك بإيقاع وهوك بيعي حاسم.',
      items: [
        'TAKAA · product-reveal CapCut adaptation (16 sec)',
        'Buffalo Burger · cinematic food-ad sample with melting cheese and flames',
      ],
      image: buffaloPoster,
    },
    {
      page: 8,
      section: '06 / VIDEO · FOOD & BEVERAGE',
      titleEn: 'Food and beverage lifestyle stories',
      titleAr: 'قصص الأغذية والمشروبات وأسلوب الحياة',
      quoteEn: 'Additional short-form samples from the shared Drive folder.',
      quoteAr: 'نماذج إعلانية إضافية للمأكولات والمشروبات من المجلد المشترك.',
      items: [
        'Food delivery · family/lifestyle ad sample (Talabat Egypt)',
        'Spiro Spathis · beverage-ad sample with authentic Egyptian gathering',
      ],
      image: spiroPoster,
    },
    {
      page: 9,
      section: '07 / VOICE-OVER & AUDIO',
      titleEn: 'Egyptian Arabic, from script to CTA',
      titleAr: 'اللهجة المصرية، من السكربت إلى الدعوة للشراء',
      quoteEn: 'Two Qaim audio files present in the shared Drive folder with clear commercial cadence.',
      quoteAr: 'ملفان صوتيان لمشروع أزياء قيم يوضحان نبرة الصوت وتوقيت الدعوة للشراء.',
      items: [
        'SAMPLE SCRIPT: «عايز طقم كامل من غير ما تحتار في التنسيق؟»',
        'Structure: Hook → product reveal → use case → Qaim.shop CTA',
        'AI voice-over 1: complete look (23 sec)',
        'AI voice-over 2: three occasions (32 sec)',
      ],
      image: qaimEditorial3,
    },
    {
      page: 10,
      section: '08 / VISUAL DIRECTION',
      titleEn: 'Product imagery with a campaign point of view',
      titleAr: 'صور المنتج برؤية حملة إعلانية متكاملة',
      quoteEn: 'V7 Cream Soda uses a coherent summer palette and a three-generation story to make the product feel part of a moment.',
      quoteAr: 'في سفن صودا: لوحة ألوان صيفية متسقة وقصة عابرة لثلاثة أجيال تجعل المنتج جزءاً من الذكريات.',
      items: [
        'Frame 01: «5 علامات إن صيفك ناقصه حاجة.. الصيف بدأ.. بس لسه الإحساس مش كامل»',
        'Frame 02: «كل جيل له صيفه.. وده صيفنا» (V7 Cream Soda Summer Edition)',
      ],
      image: v7SummerPoster,
    },
    {
      page: 11,
      section: '08 / VISUAL DIRECTION · CONTINUED',
      titleEn: 'A campaign system, not a camera-shoot claim',
      titleAr: 'منظومة إعلانية متكاملة، وليست مجرد جلسة تصوير',
      quoteEn: 'Additional V7 concept frames show the palette and destination-led storytelling.',
      quoteAr: 'إطارات إضافية تبرز هوية اللون التركواز والكريمة والسرد المرتبط برحلات الصيف.',
      items: [
        'Frame 03: «الناقص كان V7. صيفنا ليه طعم تاني»',
        'Frame 04: «كل أغاني الصيف اشتغلت.. ولسه ناقص الـ Drop. الصيف له إيقاع.. وله طعم كمان»',
      ],
      image: v7SocialPost,
    },
    {
      page: 12,
      section: '09 / DIGITAL MARKETING & ADS',
      titleEn: 'Strategy before spend (SOSTAC Framework)',
      titleAr: 'الاستراتيجية قبل الإنفاق الإعلاني (نموذج SOSTAC)',
      quoteEn: 'The Qaim work links content roles to measurable customer actions, while separating public context from private performance data.',
      quoteAr: 'ربط أدوار المحتوى بإجراءات العملاء القابلة للقياس، وفصل التخطيط النظري عن النتائج الفعلية.',
      items: [
        'SITUATION: Map visible social and store touchpoints.',
        'OBJECTIVES: Define customer outcomes and KPIs before numerical targets.',
        'STRATEGY: Move from product listing to discovery, styling, and guidance.',
        'TACTICS: Reels, carousels, Stories, verified UGC and store CTAs.',
        'ACTION: Plan a repeatable week of content; test one variable at a time.',
        'CONTROL: Review watch time, saves, shares, and qualified orders.',
        'FUNNEL: Discover → Imagine → Verify → Visit → Order → Return',
      ],
      image: qaimEditorial2,
    },
    {
      page: 13,
      section: '10 / CASE STUDY · QAIM',
      titleEn: 'Make everyday menswear easier to choose',
      titleAr: 'تيسير اختيار ملابس الرجال اليومية',
      quoteEn: 'Student strategy and content concept · not a verified commissioned campaign.',
      quoteAr: 'استراتيجية ومحتوى طلابي معتمد · تيسير قرار الشراء للعميل.',
      items: [
        'THE CUSTOMER QUESTION: What does Qaim sell? How can I style it? Is it right for me? Where do I order?',
        'THE CREATIVE RESPONSE: Turn a catalogue into a simple sequence: discover, imagine a look, verify details, visit Qaim.shop.',
        'THE GUARDRAIL: Use live product names and details; do not invent fake claims.',
      ],
      image: qaimEditorial1,
    },
    {
      page: 14,
      section: '11 / QAIM · CONTENT SYSTEM',
      titleEn: 'Four tactics, one customer journey',
      titleAr: 'أربعة تكتيكات في رحلة عميل واحدة',
      quoteEn: 'A connected plan for Qaim’s social channels and ecommerce destination.',
      quoteAr: 'خطة متكاملة لقنوات قيم الاجتماعية ومتجرها الإلكتروني.',
      items: [
        '01 · DISCOVER: Product discovery Reels introduce one category or item.',
        '02 · IMAGINE: Styling and use-case content shows how a piece fits plans.',
        '03 · VERIFY: Size and product-detail guidance answers questions.',
        '04 · CONVERT + LEARN: Guide qualified attention to Qaim.shop.',
      ],
      image: qaimEditorial2,
    },
    {
      page: 15,
      section: '12 / QAIM · EXECUTIONS',
      titleEn: 'Three content routes, three jobs',
      titleAr: 'ثلاثة مسارات محتوى تؤدي ثلاث وظائف',
      quoteEn: 'Examples from the Qaim carousel and content-development assignments.',
      quoteAr: 'أمثلة عملية من كاروسيل قيم ومهام التطوير التسويقي.',
      items: [
        'DISCOVER: Establish the base piece (One sweatpants 3 looks).',
        'IMAGINE: Style it for the day (Casual / Sporty / Streetwear).',
        'VERIFY: Check details before buying (Save this checklist).',
      ],
      image: qaimEditorial3,
    },
    {
      page: 16,
      section: '13 / CASE STUDY · TAKAA',
      titleEn: 'A small mood shift, told as a product story',
      titleAr: 'تعديل بسيط في المود، يُروى كقصة منتج',
      quoteEn: 'Fictional Egyptian energy-drink brand · course assignment · concept work.',
      quoteAr: 'علامة مشروب طاقة مصرية · مهمة أكاديمية بمبادرة وزارة الاتصالات.',
      items: [
        'INSIGHT: A familiar low-energy moment is a relatable way into the story.',
        'IDEA: “Take the Tweak” / «مودك ناقصه تاكة»',
        'EXECUTION: 5 signs carousel, AI product stills, and fast-cut reveal.',
      ],
      image: takaaCarousel1,
    },
    {
      page: 17,
      section: '14 / TAKAA · PRODUCTION',
      titleEn: 'From visual system to moving product',
      titleAr: 'من المنظومة البصرية إلى المنتج المتحرك',
      quoteEn: 'The folder contains the AI-generated product film and a separate CapCut product-reveal edit.',
      quoteAr: 'يحتوي المجلد على فيلم المنتج بالذكاء الاصطناعي وإعلان كاب كات السريع.',
      items: [
        'AI film · landmark-to-product reveal (50 sec)',
        'CapCut adaptation · product pop reveal (16 sec)',
        'Guardrail: preserve the can’s real label and design across generated scenes.',
      ],
      image: takaaCapcutPoster,
    },
    {
      page: 18,
      section: '15 / CASE STUDY · V7 CREAM SODA',
      titleEn: 'Every generation has its summer',
      titleAr: 'كل جيل له صيفه.. وده صيفنا',
      quoteEn: 'Summer Edition 2026 · brand and campaign concept · proposed content system.',
      quoteAr: 'إصدار صيف 2026 · استراتيجية حملة وهوية محتوى مقترحة لصودا في سفن.',
      items: [
        'BIG IDEA: Every generation has its summer. This is ours.',
        'CAMPAIGN ARC: Three generations move from memory to the present-day reveal.',
        'CONTENT PLAN: Five social posts plus hero film and launch-week sequence.',
      ],
      image: v7SummerPoster,
    },
    {
      page: 19,
      section: '16 / VIDEO · BABA GAH',
      titleEn: 'Family and lifestyle storytelling',
      titleAr: 'السرد القصصي العائلي والكوميديا الواقعية',
      quoteEn: 'Two short-form video samples from the Drive folder titled Baba Gah.',
      quoteAr: 'عينتان فيديو قصيرتان لمشروع بابا جه من مجلد جوجل درايف.',
      items: [
        'Baba Gah · family-story sample (relatable family emotion)',
        'Baba Gah · montage sample (fast cuts & branded shopping bag reveal)',
      ],
      image: babaGehThumb1,
    },
    {
      page: 20,
      section: '17 / WORKFLOW',
      titleEn: 'A repeatable creative loop',
      titleAr: 'حلقة إبداعية قابلة للتكرار',
      quoteEn: 'A simple working method that keeps strategy, production and measurement connected.',
      quoteAr: 'طريقة عمل واضحة تحافظ على ترابط الاستراتيجية، الإنتاج، والقياس الفعلي.',
      items: [
        '01 · BRIEF: Clarify the audience, product truth, platform and business action.',
        '02 · INSIGHT: Identify the real question, friction or occasion behind the content.',
        '03 · CONCEPT: Define one idea and a format that can carry it.',
        '04 · CREATE: Write, storyboard, design and edit; keep details accurate.',
        '05 · REVIEW: Check claims, names, price, stock, rights and readability.',
        '06 · LEARN: Set a baseline, compare meaningful signals, then iterate or scale.',
        'CORE PRINCIPLE: “No metric becomes a result until it is measured.”',
      ],
      image: takaaCreativeCampaign,
    },
    {
      page: 21,
      section: 'CONTACT',
      titleEn: 'Let’s talk about the next brief.',
      titleAr: 'فلنتحدث عن ملخص مشروعك الإعلاني القادم.',
      quoteEn: 'Digital marketing · creative content · AI-assisted product stories.',
      quoteAr: 'تسويق رقمي · محتوى إبداعي · قصص منتجات مدعومة بالذكاء الاصطناعي.',
      items: [
        'Instagram: @mohamedostafa5',
        'WhatsApp: +20 111 009 5403',
        'Email: mohamedostafataher@gmail.com',
        'Student ID / MCIT DEPI: 21172333',
        'MOHAMED MOSTAFA TAHER SALEM',
      ],
      image: takaaCreativeCampaign,
    },
  ];

  if (!isOpen) return null;

  const currentSlide = slides[currentPage - 1] || slides[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative w-full max-w-5xl h-[92vh] max-h-[850px] rounded-3xl bg-zinc-950 border border-white/15 shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:px-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/80">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold font-mono text-xs">
              PDF
            </span>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Mohamed Mostafa Taher Salem — Master Deck</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono">
                  21 Pages
                </span>
              </div>
              <div className="text-[11px] text-zinc-400 font-mono">
                Slide {currentPage} of 21 · {currentSlide.section}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
            >
              <span>Drive Files</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Body (Paper Format) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#0d0d11] flex items-center justify-center">
          <div className="w-full max-w-4xl bg-[#09090d] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative min-h-[460px] flex flex-col justify-between">
            {/* Slide Top Metadata */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-[11px] font-mono text-zinc-400">
              <span className="uppercase tracking-widest text-amber-400 font-bold">
                {currentSlide.section}
              </span>
              <span>Mohamed Mostafa Taher Salem</span>
            </div>

            {/* Slide Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1">
              <div className="md:col-span-7 space-y-4 text-left rtl:text-right">
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {isAr ? currentSlide.titleAr : currentSlide.titleEn}
                </h3>

                {currentSlide.subtitleEn && (
                  <h4 className="text-sm sm:text-base font-bold text-amber-400 font-mono">
                    {isAr ? currentSlide.subtitleAr : currentSlide.subtitleEn}
                  </h4>
                )}

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic border-l-2 rtl:border-l-0 rtl:border-r-2 border-amber-500/60 pl-3 rtl:pl-0 rtl:pr-3">
                  &ldquo;{isAr ? currentSlide.quoteAr : currentSlide.quoteEn}&rdquo;
                </p>

                {currentSlide.items && (
                  <ul className="space-y-2 pt-2">
                    {currentSlide.items.map((item, i) => (
                      <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {currentSlide.workingPrinciple && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                    <strong>WORKING PRINCIPLE:</strong> {currentSlide.workingPrinciple}
                  </div>
                )}
              </div>

              {/* Slide Visual Illustration */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl relative">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.titleEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-300 text-[10px] font-mono font-bold">
                      SLIDE {currentSlide.page} · EVIDENCE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Footer */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>IDEA → STORY → EXECUTION → MEASUREMENT</span>
              <span>Page {currentSlide.page}</span>
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Thumbnail Strip */}
        <div className="p-4 border-t border-white/10 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => (p > 1 ? p - 1 : 21))}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{isAr ? 'السابق' : 'Previous'}</span>
            </button>

            <span className="text-xs font-mono text-zinc-400 px-2">
              {currentPage} / 21
            </span>

            <button
              onClick={() => setCurrentPage((p) => (p < 21 ? p + 1 : 1))}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>{isAr ? 'التالي' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Page Picker Pill Carousel */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full sm:max-w-md py-1">
            {slides.map((s) => (
              <button
                key={s.page}
                onClick={() => setCurrentPage(s.page)}
                className={`w-7 h-7 rounded-lg text-[10px] font-mono font-bold shrink-0 transition-all cursor-pointer ${
                  currentPage === s.page
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {s.page}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
