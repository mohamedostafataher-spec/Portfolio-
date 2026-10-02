import React, { useState, useRef, useEffect } from 'react';
import {
  Layers,
  Film,
  Camera,
  Play,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  X,
  MessageCircle,
  Volume2,
  VolumeX,
  Pause,
  Music,
  Download,
  CheckCircle2,
  Clock,
  Radio,
  Presentation,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TiltCard3D } from './TiltCard3D';
import { AudioMotionVisualizer } from './MotionGraphicsDecorations';

// Real Images
import qaimEditorial1 from '../assets/images/qaim_real_editorial_1.jpg';
import qaimEditorial2 from '../assets/images/qaim_real_editorial_2.jpg';
import qaimEditorial3 from '../assets/images/qaim_real_editorial_3.jpg';
import takaaCarousel1 from '../assets/images/takaa_carousel_1.jpg';
import takaaCreativeCampaign from '../assets/images/takaa_creative_campaign.jpg';
import takaaCapcutPoster from '../assets/images/takaa_capcut_poster.jpg';
import v7SocialPost from '../assets/images/v7_social_post.jpg';
import v7SummerPoster from '../assets/images/v7_summer_poster.jpg';
import spiroPoster from '../assets/images/spiro_spathis_poster.jpg';
import buffaloPoster from '../assets/images/buffalo_burger_poster.jpg';
import foodDeliveryPoster from '../assets/images/food_delivery_poster.jpg';
import babaGehPoster from '../assets/images/baba_geh_poster.jpg';
import babaGehThumb1 from '../assets/images/baba_geh_thumb1.jpg';
import babaGehThumb2 from '../assets/images/baba_geh_thumb2.jpg';
import hmGrowthThumb from '../assets/images/hm_growth_strategy_thumb.jpg';

// New Videos from Google Drive
import vid32Thumb from '../assets/images/VID-20260504-WA0032_thumb.jpg';
import vid36Thumb from '../assets/images/VID-20260504-WA0036_thumb.jpg';
import vid00Thumb from '../assets/images/VID-20260914-WA0000_thumb.jpg';

interface CreativeShowcaseHubProps {
  onSelectProject: (project: Project) => void;
  projects: Project[];
}

export const CreativeShowcaseHub: React.FC<CreativeShowcaseHubProps> = ({
  onSelectProject,
  projects,
}) => {
  const { isAr } = useLanguage();
  const [hubTab, setHubTab] = useState<'all' | 'carousels' | 'capcut' | 'audio' | 'photos' | 'decks'>('all');

  // Listen to hash changes for deep linking to corners
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#carousels') {
        setHubTab('carousels');
      } else if (hash === '#reels') {
        setHubTab('capcut');
      } else if (hash === '#audio') {
        setHubTab('audio');
      } else if (hash === '#visuals') {
        setHubTab('photos');
      } else if (hash === '#decks') {
        setHubTab('decks');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Carousel interactive state
  const [activeCarouselIdx, setActiveCarouselIdx] = useState(0);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  // Photo gallery lightbox state
  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    title: string;
    category: string;
    desc: string;
  } | null>(null);

  // Video modal state
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    titleAr: string;
    titleEn: string;
    badgeAr: string;
    badgeEn: string;
    stats: string;
    hookAr: string;
    projectId?: string;
  } | null>(null);

  // Audio Player State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play();
      setIsPlayingAudio(true);
    }
  };

  const whatsappNumber = '201110095403';

  // 1. Real Carousel Showcase Data (Mohamed Taher's authentic work)
  const carouselCases = [
    {
      id: 'qaim-carousels',
      brand: 'QAIM (قيم للـ Menswear - Assignment 9)',
      titleAr: 'سلسلة كاروسيل أزياء قيم: «قطعة واحدة بـ 3 تنسيقات مختلفة»',
      titleEn: 'QAIM Menswear: 3 High-Conversion Interactive Carousels',
      taglineAr: 'تصميم مسار كاروسيل تفاعلي يرفع معدل الحفظ وخوارزميات التمرير للملابس الكاجوال',
      taglineEn: 'Interactive micro-funnel designed to boost save-rate and direct orders',
      projectId: 'qaim-fashion-growth',
      slides: [
        {
          num: '01',
          kickerAr: 'الخطاف البصري (Hook)',
          kickerEn: 'Visual Hook',
          titleAr: '«عندي هدوم كتير بس كل يوم مش عارف ألبس إيه؟»',
          titleEn: 'The Daily Wardrobe Dilemma Hook',
          textAr: 'مخاطبة المعاناة اليومية للشاب المصري في اختيار طقم الصباح للعمل أو الجامعة.',
          textEn: 'Addressing the daily friction of morning outfit decisions with relatable local copy.',
          image: qaimEditorial1,
        },
        {
          num: '02',
          kickerAr: 'التنسيق الأول (Work Look)',
          kickerEn: 'Look 1: Smart Casual',
          titleAr: 'طقم الشغل: أناقة رسمية بدون خنقة ولمدة 9 ساعات',
          titleEn: 'Look 1: 9-Hour Breathable Smart Casual',
          textAr: 'تنسيق قميص الكتان مع بنطلون شينو مريح — خامات قطنية مصرية 100% مناسبة للصيف.',
          textEn: 'Linen shirt paired with tailored chinos — 100% breathable Egyptian cotton.',
          image: qaimEditorial2,
        },
        {
          num: '03',
          kickerAr: 'التنسيق الثاني (Weekend)',
          kickerEn: 'Look 2: Weekend Outing',
          titleAr: 'طقم الويك إند: كاجوال سريع لخروجة المساء والقهوة',
          titleEn: 'Look 2: Weekend Evening Outing & Coffee',
          textAr: 'نفس التيشيرت الأساسي مع أوفر شيرت خفيف وكوتشي أبيض — تقليل تكلفة الارتداء (Cost-per-wear).',
          textEn: 'Same base tee layered with an airy overshirt — maximizing cost-per-wear value.',
          image: qaimEditorial3,
        },
        {
          num: '04',
          kickerAr: 'دعوة التحويل (Direct CTA)',
          kickerEn: 'Direct CTA',
          titleAr: 'احفظ البوست للرجوع له، واطلب طقمك بخصم 15% على واتساب',
          titleEn: 'Save Post for Reference & Order via WhatsApp with 15% Off',
          textAr: 'تحفيز خوارزمية إنستغرام عبر زر الحفظ (Save) وربط رابط الشراء المباشر بالمحادثة.',
          textEn: 'Driving save signals for algorithm ranking with direct WhatsApp checkout trigger.',
          image: qaimEditorial1,
        },
      ],
    },
    {
      id: 'takaa-acquisition',
      brand: 'تاكة للطاقة (TAKAA Energy - Assignment 13)',
      titleAr: 'كاروسيل استحواذ تاكة: «5 علامات إن مودك ناقصه تاكة» (8 شرائح)',
      titleEn: 'TAKAA Acquisition Carousel: 5 Signs Your Mood Needs TAKAA (8 Slides)',
      taglineAr: 'بناء هوية «مودك ناقصه تاكة» وسرد فوائد التركيز بدون هبوط الطاقة المفاجئ',
      taglineEn: '8-slide acquisition sequence tackling afternoon energy crashes and focus slumps',
      projectId: 'takaa-energy-brand-launch',
      slides: [
        {
          num: '01',
          kickerAr: 'شريحة الخطاف (Cover Hook)',
          kickerEn: 'Cover Hook',
          titleAr: '«الساعة 2 الضهر وعينك بتقفل قدام اللابتوب؟»',
          titleEn: '2:00 PM Afternoon Slump Dilemma',
          textAr: 'تصميم الغلاف الجذاب باللون الأخضر والبرتقالي الفوسفوري لجذب شباب المكاتب وصناع المحتوى.',
          textEn: 'Punchy vibrant artwork targeting modern remote workers and creative professionals.',
          image: takaaCarousel1,
        },
        {
          num: '02',
          kickerAr: 'المقارنة العلمية (Friction)',
          kickerEn: 'Scientific Contrast',
          titleAr: 'ليه مشروبات الطاقة العادية بتديك طاقة كاذبة وبتنيمك بعدها؟',
          titleEn: 'Why Standard Sugar Energy Drinks Crash You Harder',
          textAr: 'شرح مبسط لمشكلة الـ Sugar Crash وكيف تقدم تاكة طاقة طبيعية مستمرة مع فيتامين B.',
          textEn: 'Explaining clean sustained caffeine release versus standard artificial sugar spikes.',
          image: takaaCreativeCampaign,
        },
        {
          num: '03',
          kickerAr: 'الحل والتحويل (The Solution)',
          kickerEn: 'Formula Reveal',
          titleAr: 'تاكة: فيتامينات B مركب، صفر سكر مضاف، وانتعاش فوري',
          titleEn: 'TAKAA: Clean Vitamin B Complex, Zero Sugar Spike',
          textAr: 'إبراز العبوة الرسمية في شريحة الشراء المباشر مع عروض البكجات للمكاتب والشركات.',
          textEn: 'Visual can packshot with direct corporate and multi-pack order CTA.',
          image: takaaCarousel1,
        },
      ],
    },
    {
      id: 'v7-brand-deck',
      brand: 'في سفن (V7 Cream Soda - Assignment 14)',
      titleAr: 'سلسلة ديك وهوية في سفن: «صيف في سفن — انتعاش بيكمل يومك»',
      titleEn: 'V7 Cream Soda: 19-Slide Summer Brand & Social Deck',
      taglineAr: 'العرض التقديمي المعتمد لحملة الصيف وسلايدات النوستالجيا ومونتاج الماتش-كت',
      taglineEn: '19-slide summer campaign deck blending 70s nostalgia with modern TikTok hooks',
      projectId: 'v7-cream-soda-summer',
      slides: [
        {
          num: '01',
          kickerAr: 'الهوية البصرية الرئيسية',
          kickerEn: 'Key Visual & Identity',
          titleAr: '«صيف في سفن» — 19 شريحة استراتيجية وهوية بصرية مشبعة 4K',
          titleEn: 'Summer in V7: 19 Strategic Slides & Saturated Color Art',
          textAr: 'تصميم الغلاف البصري المعتمد لحملة الصيف مع إبراز عبوة الصودا المنعشة وقطرات الندى في ضوء شمس الصيف.',
          textEn: 'Official visual cover artwork highlighting the soda can glowing under warm summer sunlight.',
          image: v7SummerPoster,
        },
        {
          num: '02',
          kickerAr: 'النوستالجيا وسلوك المستهلك',
          kickerEn: 'Nostalgia Marketing',
          titleAr: 'استعادة روح السبعينات والثمانينات لجيل الشباب في مصر',
          titleEn: 'Reviving 70s & 80s Nostalgia for Egypt’s Next Generation',
          textAr: 'معايرة الألوان والخطوط الكلاسيكية لربط المستهلك بذكريات الصودا الأصيلة مع المحافظة على ريتم معاصر.',
          textEn: 'Calibrating retro color grading and vintage typography to bridge generations.',
          image: v7SocialPost,
        },
        {
          num: '03',
          kickerAr: 'المونتاج والانتقال الزمني',
          kickerEn: 'Match-Cut Direction',
          titleAr: 'انتقال بصري سلس بين الأجيال بتقنية الـ Match-Cut',
          titleEn: 'Seamless Intergenerational Transitions via Match-Cuts',
          textAr: 'رسم المشاهد الحركية بين شرب الصودا في الماضي والحاضر بنفس زاوية الكاميرا ونفس حركة اليد.',
          textEn: 'Cinematic visual match-cuts between vintage memories and modern youth gatherings.',
          image: v7SummerPoster,
        },
      ],
    },
    {
      id: 'hm-growth-carousel',
      brand: 'إتش آند إم مصر (H&M Egypt)',
      titleAr: 'كاروسيل دراسة سوق H&M: «أزياء الجامعة اليومية»',
      titleEn: 'H&M Egypt Campus Essentials Carousel',
      taglineAr: 'تطبيق تحليل السوق المصري وربط قطع الجامعة بتنسيقات سريعة وعملية',
      taglineEn: 'Translating Egyptian market research into actionable everyday campus styling slides',
      projectId: 'hm-egypt-digital-strategy',
      slides: [
        {
          num: '01',
          kickerAr: 'التحليل الاستراتيجي',
          kickerEn: 'Strategic Insight',
          titleAr: '50.7 مليون مستخدم نشط في مصر: فرصة أزياء لا تُعوّض',
          titleEn: '50.7M Active Social Users in Egypt: Massive Opportunity',
          textAr: 'استعراض أرقام السوق المصري المستهدفة وكيفية جذب جيل الجامعات بالمحتوى المحلي.',
          textEn: 'Capturing Egyptian university youth through local content relevance and sharp styling.',
          image: hmGrowthThumb,
        },
        {
          num: '02',
          kickerAr: 'تنسيق اللبس السريع',
          kickerEn: 'Campus OOTD',
          titleAr: '«لبسة الجامعة» — 3 قطع مريحة تدوم معاك اليوم كله',
          titleEn: 'Campus OOTD: 3 Durable Everyday Essentials',
          textAr: 'تصميم سلايد يعرض القطع بالأسعار وكود المنتج لسهولة الشراء من الفرع أو المتجر.',
          textEn: 'Visual slide displaying products, prices, and SKU codes for smooth in-store or online checkout.',
          image: hmGrowthThumb,
        },
      ],
    },
  ];

  // 2. CapCut Reels & Commercial Videos (9 Videos with Direct Playback)
  const capcutReels = [
    {
      id: 'v7-summer',
      titleAr: 'في سفن (V7) — إعلان «صيف في سفن» وماتش-كت سينمائي (30 ثانية)',
      titleEn: 'V7 Cream Soda — Summer Launch TVC & Match-Cuts (30s)',
      projectId: 'v7-cream-soda-summer',
      badgeAr: 'مونتاج سينمائي وانتقال زمني Match-Cut',
      badgeEn: 'Cinematic Match-Cuts',
      image: v7SummerPoster,
      stats: '30s · Retro Grade · Foley Match-Cut',
      hookAr: 'انتقال سلس بين أجيال الصودا في مصر مع صوت فتح الكانز والفقاعات المنعشة',
      videoUrl: '/videos/v7_summer_commercial.mp4',
    },
    {
      id: 'takaa-capcut',
      titleAr: 'تاكة للطاقة — قالب كاب كات الفيروسي (Zoom-Punch Pop-Reveal)',
      titleEn: 'TAKAA — CapCut Viral Pop-Reveal Template (15s)',
      projectId: 'takaa-capcut-viral-template',
      badgeAr: 'قالب كاب كات فيروسي تفاعلي',
      badgeEn: 'Viral CapCut Template',
      image: takaaCapcutPoster,
      stats: '15s · Zoom-Punch · Viral Sound Sync',
      hookAr: 'حركة فتح الكانز السريعة وزوم الصدمة اللحظي المصمم لمشاركة صناع المحتوى',
      videoUrl: '/videos/takaa_capcut_ad.mp4',
    },
    {
      id: 'qaim-fashion',
      titleAr: 'قيم للأزياء — إعلان الريلز الرأسي وسرعة اتخاذ القرار (30 ثانية)',
      titleEn: 'QAIM Menswear — Style Decision Mobile Reel (30s)',
      projectId: 'qaim-fashion-growth',
      badgeAr: 'مونتاج كاب كات أزياء رأسي 9:16',
      badgeEn: 'CapCut Mobile Fashion Reel',
      image: qaimEditorial1,
      stats: '30s · 9:16 Vertical · Fast Decisions',
      hookAr: 'حل حيرة اللبس اليومي للشباب في 3 ثواني عبر 3 تنسيقات سريعة وواضحة',
      videoUrl: '/videos/qaim_fashion_campaign.mp4',
    },
    {
      id: 'baba-geh-montage',
      titleAr: 'بابا جه — مونتاج ريلز كوميدي وتريند تيك توك (60 ثانية)',
      titleEn: 'Baba Geh — Comedy Viral Cut & Foley Sync (60s)',
      projectId: 'baba-geh-campaign',
      badgeAr: 'مونتاج كاب كات برو فائق السرعة',
      badgeEn: 'CapCut Pro Ultra-Paced Cut',
      image: babaGehThumb1,
      stats: '60s · Beat Synced · Full Audio Master',
      hookAr: 'خطاف الـ 3 ثواني: مفارقة الأب للإيجار مع مؤثرات بصرية وصوتية مفاجئة',
      videoUrl: '/videos/baba_geh_montage.mp4',
    },
    {
      id: 'baba-geh-pro',
      titleAr: 'بابا جه — المونتاج الدرامي الاحترافي وتوقيت الإيفيهات (45 ثانية)',
      titleEn: 'Baba Geh — Pro Narrative Drama Cut (45s)',
      projectId: 'baba-geh-pro-edition',
      badgeAr: 'تقطيع فريمات وماتش-كت سينمائي',
      badgeEn: 'Frame Precision & Match-Cuts',
      image: babaGehThumb2,
      stats: '45s · Narrative Pacing · 96kHz Sound',
      hookAr: 'هندسة الضحكة: تقطيع المشاهد بدقة الفريم لخلق ريتم كوميدي لا يتوقف',
      videoUrl: '/videos/baba_geh_pro.mp4',
    },
    {
      id: 'spiro-spathis',
      titleAr: 'سبيرو سباتس — «الأصل بيكمل معانا» إعلان سينمائي وإيقاع صيفي',
      titleEn: 'Spiro Spathis — Heritage Cinematic Commercial',
      projectId: 'spiro-spathis-commercial',
      badgeAr: 'إعلان تجاري سينمائي متكامل',
      badgeEn: 'Full Cinematic TVC',
      image: spiroPoster,
      stats: '16:9 4K · Sound Design · Color Grading',
      hookAr: 'نوستالجيا الشارع المصري مع سيمفونية أصوات الصودا وفقاعات الانتعاش',
      videoUrl: '/videos/spiro_spathis_premium.mp4',
    },
    {
      id: 'buffalo-burger',
      titleAr: 'بافلو برجر — إعلان ماكرو سريع وحركة لهب الجبن المشوي',
      titleEn: 'Buffalo Burger — Macro Food TVC & Flame Speed Ramp',
      projectId: 'buffalo-burger-commercial',
      badgeAr: 'إعلان أكل سريع (Macro Sizzle)',
      badgeEn: 'Macro Food Sizzle TVC',
      image: buffaloPoster,
      stats: 'Vertical 9:16 · Speed Ramping · Foley',
      hookAr: 'إثارة الشهية الفورية بلقطات ماكرو فائقة الدقة للجبن الذائب واللحم المشوي',
      videoUrl: '/videos/buffalo_burger_commercial.mp4',
    },
    {
      id: 'talabat',
      titleAr: 'طلبات مصر — إعلان كوميدي سريع «يوم واحد من غير طلبات»',
      titleEn: 'Talabat — High-Velocity Food Delivery TVC',
      projectId: 'talabat-delivery-tvc',
      badgeAr: 'إعلان كوميدي وإخراج ريلز',
      badgeEn: 'Humor Script & Fast Cuts',
      image: foodDeliveryPoster,
      stats: 'Fast Paced · Dialogue Foley · 4K',
      hookAr: 'حل ورطة الجوع المفاجئ في البيت المصري بمجرد رنة جرس المندوب',
      videoUrl: '/videos/food_delivery_ad.mp4',
    },
    {
      id: 'cinematic-narrative-extended',
      titleAr: 'إعلان السرد القصصي السينمائي الطويل (105 ثانية) — Extended Brand Narrative',
      titleEn: 'Extended Brand Narrative & Cinematic Storytelling (105s)',
      projectId: 'baba-geh-campaign',
      badgeAr: 'سرد قصصي ومونتاج سينمائي (105s)',
      badgeEn: 'Cinematic Narrative (105s)',
      image: vid32Thumb,
      stats: '105s · High-Bitrate · Master Audio Foley',
      hookAr: 'بناء درامي متصاعد يربط المشاعر الإنسانية بقيمة وهوية العلامة التجارية',
      videoUrl: '/videos/VID-20260504-WA0032.mp4',
    },
    {
      id: 'commercial-spot-fast-paced',
      titleAr: 'سبوت تجاري وسرعة الإيقاع (42 ثانية) — Commercial Spot & Dynamic Cuts',
      titleEn: 'Commercial Spot & Dynamic Cuts (42s)',
      projectId: 'spiro-spathis-commercial',
      badgeAr: 'سبوت تلفزيوني وسوشيال (42s)',
      badgeEn: 'TVC & Social Spot (42s)',
      image: vid36Thumb,
      stats: '42s · Dynamic Pacing · 30fps Clean',
      hookAr: 'إيقاع إعلاني ديناميكي مكثف يوصل رسالة المنتج في أقل من دقيقة',
      videoUrl: '/videos/VID-20260504-WA0036.mp4',
    },
    {
      id: 'social-launch-product-reel',
      titleAr: 'ريلز إطلاق المنتج والإبهار البصري (35 ثانية) — Product Launch Reel',
      titleEn: 'Product Launch & Visual Impact Reel (35s)',
      projectId: 'takaa-capcut-viral-template',
      badgeAr: 'ريلز إطلاق منتج وسوشيال (35s)',
      badgeEn: 'Launch Reel (35s)',
      image: vid00Thumb,
      stats: '35s · Instant Hook · Color Grading',
      hookAr: 'خطف انتباه فوري في أول ثانيتين مع حركة كاميرا سينمائية وعرض تفاصيل المنتج',
      videoUrl: '/videos/VID-20260914-WA0000.mp4',
    },
  ];

  // 3. Visual Photo & Design Gallery (All 11 designed images & photography)
  const visualGallery = [
    {
      src: qaimEditorial1,
      titleAr: 'قيم للأزياء الرجالية — إطلالة الـ Smart Casual',
      titleEn: 'QAIM Menswear — Smart Casual Editorial',
      category: 'Editorial Photography',
      descAr: 'تصميم وإخراج الجلسة البصرية لأطقم العمل اليومية بتدرجات الألوان الهادئة.',
    },
    {
      src: qaimEditorial2,
      titleAr: 'قيم — تفاصيل النسيج والأناقة المريحة',
      titleEn: 'QAIM Menswear — Fabric & Texture Close-up',
      category: 'Product & Fashion',
      descAr: 'إبراز جودة الأقمشة الطبيعية والخياطة الدقيقة التي تدعم رسالة البراند.',
    },
    {
      src: qaimEditorial3,
      titleAr: 'قيم — الإطلالة الكاجوال المسائية',
      titleEn: 'QAIM Menswear — Evening Casual Look',
      category: 'Lookbook Design',
      descAr: 'تنسيق الطقم للويك إند والخروجات المسائية لرفع معدل تكرار الشراء.',
    },
    {
      src: takaaCarousel1,
      titleAr: 'تاكة للطاقة — التصميم البصري لشريحة الغلاف 4K',
      titleEn: 'TAKAA Energy — 4K Visual Cover Artwork',
      category: 'Social Media Design',
      descAr: 'تصميم رقمي مشرق ثلاثي الأبعاد يعكس فوران الصودا وحيوية الألوان.',
    },
    {
      src: takaaCreativeCampaign,
      titleAr: 'تاكة للطاقة — بوستر الحملة الصيفية الرسمية',
      titleEn: 'TAKAA Energy — Official Campaign Poster',
      category: 'Campaign Posters',
      descAr: 'بوستر ترويجي يجمع بين عبوة تاكة وعناصر الحركة والشباب.',
    },
    {
      src: v7SocialPost,
      titleAr: 'في سفن (V7 Cream Soda) — بوستر حقبة السبعينات والثمانينات',
      titleEn: 'V7 Cream Soda — Nostalgia Era Social Art',
      category: 'Brand Poster Art',
      descAr: 'معايرة الألوان والخطوط الكلاسيكية لتعكس أصالة الكريما صودا عبر الأجيال.',
    },
    {
      src: v7SummerPoster,
      titleAr: 'في سفن (V7) — بوستر إطلاق «صيف في سفن» 4K',
      titleEn: 'V7 Cream Soda — Summer Launch Key Visual',
      category: 'Key Visual Design',
      descAr: 'التصميم البصري الرئيسي المعتمد لحملة الصيف وسلايدات الديك الـ 19.',
    },
    {
      src: spiroPoster,
      titleAr: 'سبيرو سباتس — بوستر الهوية المصرية الكلاسيكية',
      titleEn: 'Spiro Spathis — Egyptian Heritage Bottle Art',
      category: 'Commercial Poster',
      descAr: 'إضاءة درامية تحاكي كاميرات السينما العالمية مع إبراز قطرات الندى المنعشة.',
    },
    {
      src: buffaloPoster,
      titleAr: 'بافلو برجر — بوستر الماكرو الناري للبرجر المشوي',
      titleEn: 'Buffalo Burger — Sizzle Macro Food Art',
      category: 'Food Photography',
      descAr: 'لقطة ماكرو مقربة جداً تُظهر تفاصيل لهب الشواء وذوبان الجبن لتحفيز الشهية.',
    },
    {
      src: babaGehPoster,
      titleAr: 'بابا جه — بوستر العرض الرسمي للمونتاج الكوميدي',
      titleEn: 'Baba Geh — Official Show Poster & Visual Art',
      category: 'Entertainment Poster',
      descAr: 'تصميم بوستر العرض الرسمي مع التركيز على هوية المسلسل الكوميدي.',
    },
  ];

  // 4. SOSTAC Strategy Presentations & Decks Library (from official Google Drive)
  const sostacDecks = [
    {
      num: '01',
      titleAr: 'المهمة 05: الاستراتيجية وتحديد التموضع (Assignment 5 Strategy)',
      titleEn: 'Assignment 5 — Strategy & Competitive Positioning',
      topicAr: 'تحليل المنافسين، تحديد الفجوات في السوق، وبناء استراتيجية التموضع التنافسي.',
      topicEn: 'Competitor benchmarking, market gap analysis, and brand positioning.',
      tag: 'Strategy',
      code: '21172333',
    },
    {
      num: '02',
      titleAr: 'المهمة 07: السرد القصصي للعلامات (SOSTAC Storytelling)',
      titleEn: 'Assignment 7 — SOSTAC Storytelling & Brand Narrative',
      topicAr: 'صياغة الرواية الإعلانية، خطافات الجذب العاطفي، ونماذج الإقناع التسويقي.',
      topicEn: 'Brand narrative architecture, emotional hooks, and conviction frameworks.',
      tag: 'Storytelling',
      code: '21172333',
    },
    {
      num: '03',
      titleAr: 'المهمة 08: استراتيجية أزياء قيم ومسارات الكاروسيل (QAIM Strategy & Carousels)',
      titleEn: 'Assignment 8 — QAIM Tactical Content & Carousels',
      topicAr: 'تدقيق حساب 62 ألف متابع، تصميم سلاسل الكاروسيل، وتوجيه الفويس أوفر.',
      topicEn: '62K audience audit, 3-slide carousel architectures, and voiceover directing.',
      tag: 'Content & Audio',
      code: '21172333',
    },
    {
      num: '04',
      titleAr: 'المهمة 10: خطة العمل التنفيذية والجدول الزمني (SOSTAC Actions)',
      titleEn: 'Assignment 10 — Tactics & Action Plan Roadmap',
      topicAr: 'توزيع المهام اليومية، ميزانيات الحملات، ومصفوفة القنوات الإعلانية.',
      topicEn: 'Daily tactical scheduling, campaign budgeting, and channel distribution.',
      tag: 'Action Plan',
      code: '21172333',
    },
    {
      num: '05',
      titleAr: 'المهمة 11: مصفوفة التحكم والقياس ومؤشرات الأداء (QAIM Control & KPIs)',
      titleEn: 'Assignment 11 — Control & KPI Measurement System',
      topicAr: 'مؤشرات ROAS، كلفة الاستحواذ على العميل CAC، ومعدل التحويل CR.',
      topicEn: 'ROAS tracking, customer acquisition cost (CAC), and conversion rate metrics.',
      tag: 'Control & Analytics',
      code: '21172333',
    },
    {
      num: '06',
      titleAr: 'المهمة 12: إنشاء وإدارة صفحة فيسبوك ومسارات الشراء (Meta Facebook Business)',
      titleEn: 'Assignment 12 — Facebook Page Creation & Paid Funnels',
      topicAr: 'تهيئة مدير الأعمال Meta Business Suite، مسارات البيع، واستهداف الجماهير.',
      topicEn: 'Meta Business Suite configuration, sales funnels, and custom audiences.',
      tag: 'Meta Ads',
      code: '21172333',
    },
    {
      num: '07',
      titleAr: 'المهمة 13: خطة إطلاق مشروب الطاقة تاكة (TAKAA Energy Launch Strategy)',
      titleEn: 'Assignment 13 — TAKAA Energy Drink Launch Strategy',
      topicAr: 'إطلاق العلامة التجارية، قالب كاب كات الفيروسي، والكانز 4K.',
      topicEn: 'Brand commercial launch, viral CapCut template, and 4K packshots.',
      tag: 'Brand Launch',
      code: '21172333',
    },
    {
      num: '08',
      titleAr: 'مشروع التخرج المعتمد من وزارة الاتصالات (MCIT DEPI Comprehensive Masterplan)',
      titleEn: 'Graduation Masterplan — DEPI MCIT Official Certification',
      topicAr: 'الخطة التسويقية الشاملة المعتمدة بنموذج SOSTAC برقم القيد الطلابي 21172333.',
      topicEn: 'Comprehensive marketing masterplan accredited by the Ministry of Communications.',
      tag: 'Certified Diploma',
      code: '21172333',
    },
  ];

  const currentCarousel = carouselCases[activeCarouselIdx];
  const currentSlide = currentCarousel.slides[activeSlideIdx] || currentCarousel.slides[0];

  const handlePrevSlide = () => {
    setActiveSlideIdx((prev) => (prev > 0 ? prev - 1 : currentCarousel.slides.length - 1));
  };

  const handleNextSlide = () => {
    setActiveSlideIdx((prev) => (prev < currentCarousel.slides.length - 1 ? prev + 1 : 0));
  };

  const handleOpenCarouselProject = () => {
    const proj = projects.find((p) => p.id === currentCarousel.projectId);
    if (proj) {
      onSelectProject(proj);
    }
  };

  return (
    <section id="creative-hub" className="py-20 relative bg-[#07070a] border-t border-white/5 overflow-hidden">
      {/* Scroll Anchors for Direct Navigation */}
      <div id="carousels" className="absolute -top-24" />
      <div id="reels" className="absolute -top-24" />
      <div id="audio" className="absolute -top-24" />
      <div id="visuals" className="absolute -top-24" />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Clear Personal Positioning */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? '06 — مختبر المحتوى • CONTENT LAB' : '06 — CONTENT LAB'}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'CONTENT LAB — مختبر الريلز، الكاروسيل، والفويس أوفر' : 'CONTENT LAB — Reels, Carousels & Voiceover'}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isAr
              ? 'مجموعة مختارة من أفضل مخرجات المحتوى الإعلاني مقسمة بوضوح: فيديوهات كاب كات الـ 9، سلاسل الكاروسيل التفاعلية، مشغل الفويس أوفر، والمعرض البصري 4K.'
              : 'Curated creative lab showcasing top ad assets: 9 playable CapCut reels, interactive carousels, voiceover studio, and 4K commercial visuals.'}
          </p>

          {/* Clean Segmented Navigation Controls */}
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-md mt-6 flex-wrap justify-center shadow-2xl">
            <button
              onClick={() => setHubTab('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                hubTab === 'all'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <span>{isAr ? 'كل المختبر (All Lab)' : 'All Lab'}</span>
            </button>

            <button
              onClick={() => {
                setHubTab('carousels');
                setActiveSlideIdx(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                hubTab === 'carousels'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isAr ? 'الكاروسيل (SOCIAL POSTS)' : 'Social Carousels'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20 font-mono">4 Decks</span>
            </button>

            <button
              onClick={() => setHubTab('capcut')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                hubTab === 'capcut'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>{isAr ? 'الريلز والإعلانات (REELS)' : 'Viral Reels & TVCs'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20 font-mono">12 Commercials</span>
            </button>

            <button
              onClick={() => setHubTab('audio')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                hubTab === 'audio'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
              <span>{isAr ? 'الاسكريبت والصوت (COPY & AUDIO)' : 'Copy & Audio'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20 font-mono">Master Track</span>
            </button>

            <button
              onClick={() => setHubTab('photos')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                hubTab === 'photos'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{isAr ? 'المعرض البصري 4K' : 'Visual Gallery'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20 font-mono">11 Artworks</span>
            </button>

            <button
              onClick={() => setHubTab('decks')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                hubTab === 'decks'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>{isAr ? 'عروض SOSTAC والمهام' : 'SOSTAC Decks'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20 font-mono">8 Decks</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CORNER 1: INTERACTIVE CAROUSEL VIEWER */}
        {/* ========================================================================= */}
        {(hubTab === 'all' || hubTab === 'carousels') && (
          <div className="mb-24 space-y-8 animate-fade-in">
            {/* Section Sub-Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{isAr ? 'ركن الكاروسيل التفاعلي عالي التحويل' : 'Interactive High-Converting Carousel Corner'}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
                      4 Decks
                    </span>
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {isAr ? 'قلّب السلايدات بنفسك واستعرض صياغة الهوك ومعالجة التردد ودعوة الشراء' : 'Flip slide by slide to experience hooks, objection handling & direct CTAs'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  const text = isAr
                    ? 'مرحباً أستاذ محمد، أريد طلب تصميم سلسلة كاروسيل تفاعلية لعلامتي التجارية.'
                    : 'Hi Mohamed, I would like to order an interactive carousel series for my brand.';
                  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{isAr ? 'طلب تصميم كاروسيل' : 'Order Carousel'}</span>
              </button>
            </div>

            {/* Carousel Selector Buttons */}
            <div className="flex items-center justify-center gap-2 flex-wrap pb-2">
              {carouselCases.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCarouselIdx(idx);
                    setActiveSlideIdx(0);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCarouselIdx === idx
                      ? 'bg-zinc-800 text-amber-300 border border-amber-500/40 shadow-lg'
                      : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  <span className="font-mono text-zinc-500 mr-1.5">0{idx + 1}.</span>
                  <span>{c.brand}</span>
                </button>
              ))}
            </div>

            {/* Main Interactive Slide Display Card with 3D Tilt */}
            <TiltCard3D maxTilt={7} className="rounded-3xl bg-zinc-900/60 border border-white/10 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Visual Slide Side */}
                <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] bg-black flex items-center justify-center p-6 sm:p-10">
                  <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <img
                      src={currentSlide.image}
                      alt={currentSlide.titleAr}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                    {/* Slide Top Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="px-3 py-1 rounded-full bg-amber-500 text-black font-black uppercase tracking-wider text-[11px] shadow-lg">
                        {isAr ? currentSlide.kickerAr : currentSlide.kickerEn}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-amber-300 text-xs font-bold">
                        Slide {activeSlideIdx + 1} / {currentCarousel.slides.length}
                      </span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-left rtl:text-right">
                      <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                        {isAr ? currentSlide.titleAr : currentSlide.titleEn}
                      </h4>
                    </div>
                  </div>

                  {/* Previous / Next Slide Floating Controls */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-amber-500 text-white hover:text-black border border-white/10 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-amber-500 text-white hover:text-black border border-white/10 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                  </button>
                </div>

                {/* Content & Details Side */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider">
                        {currentCarousel.brand}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        CAROUSEL ARCHITECTURE
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                      {isAr ? currentCarousel.titleAr : currentCarousel.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                      {isAr ? currentCarousel.taglineAr : currentCarousel.taglineEn}
                    </p>

                    {/* Current Slide Explanation */}
                    <div className="mt-6 p-4 rounded-2xl bg-zinc-950/80 border border-white/5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                          {currentSlide.num}
                        </span>
                        <span className="text-xs font-bold text-amber-300">
                          {isAr ? currentSlide.kickerAr : currentSlide.kickerEn}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                        {isAr ? currentSlide.textAr : currentSlide.textEn}
                      </p>
                    </div>

                    {/* Slide Dots / Thumbnails Navigation */}
                    <div className="mt-6">
                      <div className="text-[11px] font-mono text-zinc-400 mb-2">
                        {isAr ? 'تصفح الشرائح (Slides Navigator):' : 'Slide Navigator:'}
                      </div>
                      <div className="flex items-center gap-2">
                        {currentCarousel.slides.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveSlideIdx(idx)}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                              activeSlideIdx === idx
                                ? 'w-8 bg-amber-400'
                                : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                            }`}
                            aria-label={`Jump to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={handleOpenCarouselProject}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all cursor-pointer shadow-lg shadow-amber-500/20"
                    >
                      <span>{isAr ? 'فتح دراسة الحالة الكاملة' : 'View Full Case Study'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        const text = isAr
                          ? `مرحباً أستاذ محمد، أريد تصميم كاروسيل سوشيال ميديا احترافي لعلامتي مثل ${currentCarousel.brand}`
                          : `Hi Mohamed, I would like you to design a high-conversion social carousel for my brand.`;
                        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{isAr ? 'طلب كاروسيل' : 'Order Carousel'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CORNER 2: CAPCUT & VIRAL REELS SHOWCASE (9 VIDEOS WITH DIRECT PLAY) */}
        {/* ========================================================================= */}
        {(hubTab === 'all' || hubTab === 'capcut') && (
          <div className="mb-24 space-y-8 animate-fade-in">
            {/* Section Sub-Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{isAr ? 'استوديو مونتاج كاب كات والإعلانات التجارية' : 'CapCut Pro & Commercial Video Studio'}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
                      9 Commercial Cuts
                    </span>
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {isAr ? 'اضغط على زر التشغيل لمشاهدة المونتاج الفعلي، سرعة التقطيع، وهندسة الصوت' : 'Click play to watch the actual edit, speed ramping, and beat sound design'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  const text = isAr
                    ? 'مرحباً أستاذ محمد، أريد طلب مونتاج فيديو ريلز / إعلان تجاري بالهوك السريع.'
                    : 'Hi Mohamed, I would like to order a viral reel / commercial edit.';
                  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{isAr ? 'طلب مونتاج فيديو' : 'Order Video Edit'}</span>
              </button>
            </div>

            {/* 3x3 Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capcutReels.map((reel) => {
                const proj = projects.find((p) => p.id === reel.projectId);

                return (
                  <TiltCard3D
                    key={reel.id}
                    maxTilt={8}
                    className="group rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
                  >
                    <div className="relative aspect-[9/12] overflow-hidden bg-black flex items-center justify-center">
                      <img
                        src={reel.image}
                        alt={reel.titleAr}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-amber-500 text-black text-[11px] font-bold shadow-md">
                          {isAr ? reel.badgeAr : reel.badgeEn}
                        </span>
                        <AudioMotionVisualizer isPlaying={true} bars={5} />
                      </div>

                      {/* Play Button Overlay (Opens Direct Video Modal) */}
                      <button
                        onClick={() => setActiveVideo(reel)}
                        className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl cursor-pointer"
                        aria-label={`Play ${reel.titleAr}`}
                      >
                        <Play className="w-7 h-7 fill-current ml-0.5" />
                      </button>

                      {/* Hook & Timing Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-left rtl:text-right">
                        <span className="text-[10px] font-mono text-amber-300 block mb-0.5">
                          {reel.stats}
                        </span>
                        <p className="text-white text-xs font-semibold line-clamp-2">
                          {isAr ? reel.hookAr : reel.titleEn}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col justify-between space-y-4">
                      <h3 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {isAr ? reel.titleAr : reel.titleEn}
                      </h3>

                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <button
                          onClick={() => setActiveVideo(reel)}
                          className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{isAr ? 'تشغيل الفيديو فوراً' : 'Play Video'}</span>
                        </button>

                        <button
                          onClick={() => proj && onSelectProject(proj)}
                          className="text-xs text-zinc-400 hover:text-white font-mono flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isAr ? 'دراسة الحالة' : 'Case Study'}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </TiltCard3D>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CORNER 3: VOICEOVER & AUDIO DIRECTING STUDIO (FROM ASSIGNMENT 8) */}
        {/* ========================================================================= */}
        {(hubTab === 'all' || hubTab === 'audio') && (
          <div className="mb-24 space-y-8 animate-fade-in">
            {/* Section Sub-Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{isAr ? 'ركن التعليق الصوتي والهندسة الصوتية' : 'Voiceover Directing & Audio Studio'}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                      Master WAV 96kHz
                    </span>
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {isAr ? 'تسجيلات الإلقاء الصوتي الأصلية وكتابة السيناريو الإعلاني بالعامية المصرية' : 'Original commercial voiceover masters & localized Egyptian dialect scripts'}
                  </p>
                </div>
              </div>

              <a
                href="/audio/qaim_voiceover.wav"
                download="Mohamed_Taher_Qaim_Voiceover.wav"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono transition-all"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>{isAr ? 'تحميل التراك Master' : 'Download WAV'}</span>
              </a>
            </div>

            {/* Interactive Audio Player Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-white/10 shadow-2xl relative overflow-hidden">
              <audio
                ref={audioRef}
                src="/audio/qaim_voiceover.wav"
                onEnded={() => setIsPlayingAudio(false)}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Audio Controls & Visualizer */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={toggleAudio}
                      className="w-16 h-16 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20 cursor-pointer"
                      aria-label={isPlayingAudio ? 'Pause Voiceover' : 'Play Voiceover'}
                    >
                      {isPlayingAudio ? (
                        <Pause className="w-7 h-7 fill-current" />
                      ) : (
                        <Play className="w-7 h-7 fill-current ml-0.5" />
                      )}
                    </button>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
                          {isAr ? 'تسجيل إعلاني أصلي' : 'COMMERCIAL VOICEOVER'}
                        </span>
                        {isPlayingAudio && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                            <Radio className="w-3 h-3 animate-pulse" /> Live Playing
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-white mt-0.5">
                        {isAr ? 'إعلان أزياء قيم: «قطعة واحدة بـ 3 تنسيقات»' : 'QAIM Menswear: 1 Piece, 3 Occasions'}
                      </h4>
                      <p className="text-xs text-zinc-400">
                        {isAr ? 'تأليف السيناريو، الإشراف على الإلقاء، والميكسينج الصوتي' : 'Scriptwriting, voice direction & final audio mastering'}
                      </p>
                    </div>
                  </div>

                  {/* Animated Waveform Bars */}
                  <div className="p-4 rounded-2xl bg-black/60 border border-white/5 flex items-center justify-between gap-1.5 h-16">
                    {Array.from({ length: 32 }).map((_, i) => {
                      const heights = [20, 45, 80, 60, 35, 95, 70, 40, 65, 85, 30, 90, 50, 75, 40, 100];
                      const heightPercent = isPlayingAudio ? heights[i % heights.length] : 20;

                      return (
                        <div
                          key={i}
                          className="w-1.5 rounded-full bg-gradient-to-t from-amber-500 to-amber-300 transition-all duration-300"
                          style={{
                            height: `${heightPercent}%`,
                            opacity: isPlayingAudio ? 0.9 : 0.3,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Voiceover Script Transcript (Bilingual) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                    <span>{isAr ? 'السيناريو الإعلاني وتوزيع التوقيتات:' : 'Timecoded Ad Script:'}</span>
                    <span className="text-amber-400">Total: 30 Seconds</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-white/5 flex items-start gap-3">
                      <span className="text-[11px] font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 shrink-0">
                        00:00 - 00:08
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                        {isAr
                          ? '«كل يوم الصبح نفس الحيرة قدام الدولاب؟ هدوم كتير بس مفيش طقم راكب على بعضه...»'
                          : '“Every morning facing the same closet hesitation? Lots of clothes, but zero put-together outfits...”'}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-white/5 flex items-start gap-3">
                      <span className="text-[11px] font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 shrink-0">
                        00:08 - 00:20
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                        {isAr
                          ? '«مع قيم.. قطعة أساسية واحدة تكفيك للدوام الصباحي، ولخروجة المساء، وللويك إند. خامات قطنية مصرية 100% تعيش معاك.»'
                          : '“With QAIM.. a single versatile core piece covers work, evening catch-ups, and the weekend. 100% Egyptian cotton that lasts.”'}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-white/5 flex items-start gap-3">
                      <span className="text-[11px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 shrink-0">
                        00:20 - 00:30
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                        {isAr
                          ? '«وفر وقتك وفلوسك، واطلب تشكيلة الموسم دلوقتي بخصم حصري على الواتساب.»'
                          : '“Save time and money, order this season’s collection now with an exclusive WhatsApp discount.”'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CORNER 4: VISUAL PHOTO & POSTER GALLERY (11 4K ARTWORKS & LOOKBOOKS) */}
        {/* ========================================================================= */}
        {(hubTab === 'all' || hubTab === 'photos') && (
          <div className="space-y-8 animate-fade-in">
            {/* Section Sub-Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{isAr ? 'ركن المعرض البصري وجلسات التصوير والبوسترات 4K' : '4K Commercial Art & Lookbook Gallery'}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
                      11 High-Res Visuals
                    </span>
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {isAr ? 'اضغط على أي صورة لتكبيرها بدقة 4K وفحص تدرجات الألوان وتفاصيل التصميم' : 'Click any visual for 4K inspection, color grading, and typography details'}
                  </p>
                </div>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {visualGallery.map((item, idx) => (
                <TiltCard3D
                  key={idx}
                  maxTilt={10}
                  onClick={() =>
                    setLightboxImg({
                      src: item.src,
                      title: isAr ? item.titleAr : item.titleEn,
                      category: item.category,
                      desc: isAr ? item.descAr : item.category,
                    })
                  }
                  className="group relative rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/40 overflow-hidden cursor-pointer shadow-xl"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-black">
                    <img
                      src={item.src}
                      alt={item.titleAr}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-amber-300 font-mono text-[10px] font-bold">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-black/60 text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-left rtl:text-right">
                      <h4 className="text-white text-xs sm:text-sm font-bold leading-tight group-hover:text-amber-300 transition-colors">
                        {isAr ? item.titleAr : item.titleEn}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                        {isAr ? item.descAr : item.category}
                      </p>
                    </div>
                  </div>
                </TiltCard3D>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CORNER 5: SOSTAC STRATEGIC PRESENTATIONS & DECKS LIBRARY */}
        {/* ========================================================================= */}
        {(hubTab === 'all' || hubTab === 'decks') && (
          <div id="decks" className="space-y-8 animate-fade-in pt-12 border-t border-white/10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                    {isAr ? 'عروض واستراتيجيات SOSTAC المعتمدة' : 'SOSTAC STRATEGIC DECKS LIBRARY'}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {isAr ? 'مكتبة الاستراتيجيات ومهام الاعتماد الأكاديمي' : 'Certified Strategy Decks & Assignments'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
                  {isAr
                    ? 'نماذج وخطط العمل التسويقية الكاملة المعدة وفق منهجية SOSTAC العالمية المعتمدة بمبادرة وزارة الاتصالات (MCIT DEPI) برقم القيد 21172333.'
                    : 'End-to-end SOSTAC marketing roadmaps, tactical calendars, and strategic decks accredited by the Ministry of Communications.'}
                </p>
              </div>

              {/* Direct Drive Folder Button */}
              <a
                href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-lg shadow-amber-500/20 shrink-0 self-start md:self-auto cursor-pointer"
              >
                <span>{isAr ? 'فتح مجلد ملفات جوجل درايف الكامل' : 'Open Full Drive Folder'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Decks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sostacDecks.map((deck) => (
                <div
                  key={deck.num}
                  className="p-5 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xl font-black text-zinc-600 group-hover:text-amber-400 transition-colors">
                        {deck.num}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/40 font-mono text-[10px] text-amber-300 font-bold border border-white/5">
                        ID: {deck.code}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                      {deck.tag}
                    </span>

                    <h4 className="font-display text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {isAr ? deck.titleAr : deck.titleEn}
                    </h4>

                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {isAr ? deck.topicAr : deck.topicEn}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>PowerPoint / PDF</span>
                    <a
                      href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold"
                    >
                      <span>{isAr ? 'عرض الملف' : 'View File'}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* DIRECT PLAYABLE VIDEO MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/95 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Top Modal Bar */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-zinc-900/80">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[11px] font-bold">
                    {isAr ? activeVideo.badgeAr : activeVideo.badgeEn}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{activeVideo.stats}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title={isAr ? 'فتح الفيديو في تبويب مستقل' : 'Open in New Tab'}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setActiveVideo(null)}
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video sm:aspect-[16/9] bg-black flex items-center justify-center">
                <video
                  src={activeVideo.url}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Video Details & Action Footer */}
              <div className="p-5 sm:p-6 bg-zinc-900/60 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {isAr ? activeVideo.titleAr : activeVideo.titleEn}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    <strong className="text-amber-400">{isAr ? 'الخطاف والريتم: ' : 'Hook & Pacing: '}</strong>
                    {isAr ? activeVideo.hookAr : activeVideo.titleEn}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/10 gap-3">
                  <div className="flex items-center gap-2">
                    {activeVideo.projectId && (
                      <button
                        onClick={() => {
                          const p = projects.find((proj) => proj.id === activeVideo.projectId);
                          if (p) {
                            setActiveVideo(null);
                            onSelectProject(p);
                          }
                        }}
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{isAr ? 'فتح دراسة الحالة الكاملة' : 'View Full Case Study'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <a
                      href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 font-mono"
                    >
                      <span>{isAr ? 'ملف Google Drive' : 'Google Drive'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      const msg = isAr
                        ? `مرحباً أستاذ محمد، أريد طلب مونتاج فيديو ريلز مثل: ${activeVideo.titleAr}`
                        : `Hi Mohamed, I would like to order a video project like ${activeVideo.titleEn}.`;
                      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 4K PHOTO FULLSCREEN LIGHTBOX */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightboxImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center"
            >
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                <img
                  src={lightboxImg.src}
                  alt={lightboxImg.title}
                  className="w-full max-h-[75vh] object-contain mx-auto"
                />

                <div className="p-4 bg-zinc-950 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase">
                      {lightboxImg.category}
                    </span>
                    <h3 className="text-white text-sm sm:text-base font-bold">
                      {lightboxImg.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      const text = isAr
                        ? `مرحباً أستاذ محمد، اطلعت على تصميم البوستر/الصورة (${lightboxImg.title}) وأريد تصميم مماثل لهويتي التجارية.`
                        : `Hi Mohamed, I saw the poster (${lightboxImg.title}) and would like a similar design.`;
                      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{isAr ? 'استفسار واتساب' : 'Inquire via WhatsApp'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
