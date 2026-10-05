import {
  Project,
  ServiceCategory,
  ProcessStep,
  SkillCategory,
  ToolItem,
  EducationItem,
  ExperienceItem,
  Certification,
  Article,
} from '../types';

// Video Asset URLs (Served from public/videos/)
const aiReelVideo = '/videos/ai_reel_commercial.mp4';
const takaaCapcutVideo = '/videos/takaa_capcut_ad.mp4';
const spiroVideo = '/videos/spiro_spathis_premium.mp4';
const buffaloVideo = '/videos/buffalo_burger_commercial.mp4';
const v7Video = '/videos/v7_summer_commercial.mp4';
const qaimVideo = '/videos/qaim_fashion_campaign.mp4';
const takaaVideo = '/videos/takaa_instagram_ad.mp4';
const foodDeliveryVideo = '/videos/food_delivery_ad.mp4';

// Real Posters and Image Assets
import spiroPoster from '../assets/images/spiro_spathis_poster.jpg';
import buffaloPoster from '../assets/images/buffalo_burger_poster.jpg';
import v7Poster from '../assets/images/v7_summer_poster.jpg';
import v7SocialPost from '../assets/images/v7_social_post.jpg';
import aiReelPoster from '../assets/images/ai_reel_poster.jpg';
import qaimVideoPoster from '../assets/images/qaim_video_poster.jpg';
import qaimEditorial1 from '../assets/images/qaim_real_editorial_1.jpg';
import qaimEditorial2 from '../assets/images/qaim_real_editorial_2.jpg';
import qaimEditorial3 from '../assets/images/qaim_real_editorial_3.jpg';
import takaaVideoPoster from '../assets/images/takaa_video_poster.jpg';
import takaaCarousel1 from '../assets/images/takaa_carousel_1.jpg';
import takaaCreativeCampaign from '../assets/images/takaa_creative_campaign.jpg';
import takaaCapcutPoster from '../assets/images/takaa_capcut_poster.jpg';
import foodDeliveryPoster from '../assets/images/food_delivery_poster.jpg';
import breadfastCover from '../assets/images/breadfast_campaign_cover.jpg';
import babaGehPoster from '../assets/images/baba_geh_poster.jpg';
import babaGehThumb1 from '../assets/images/baba_geh_thumb1.jpg';
import babaGehThumb2 from '../assets/images/baba_geh_thumb2.jpg';
import furnitureFbThumb from '../assets/images/furniture_fb_real_thumbnail.jpg';
import hmStrategyThumb from '../assets/images/hm_strategy_thumb.jpg';
import hmGrowthThumb from '../assets/images/hm_growth_strategy_thumb.jpg';
import depiCapstoneThumb from '../assets/images/depi_capstone_thumb.jpg';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'hm-egypt-market-research',
    tracks: ['Marketing Strategy', 'Content Creation'],
    title: 'H&M Egypt: $7.5B E-Commerce Market Research & Competitor Audit',
    clientOrSpec: 'Strategic Blueprint',
    subtitle: 'Egypt Fast-Fashion Digital Landscape, Consumer Behavior & Gap Analysis',
    category: 'Market Research & Audit',
    tagline: 'تشريح دقيق لسوق الأزياء الرقمي في مصر بحجم 7.5 مليار دولار وفرص النمو الكبرى.',
    description:
      'دراسة وبحث سوق معمق لقطاع الأزياء السريعة في مصر لعلامة H&M. تشمل تحليل حجم التجارة الإلكترونية، دراسة سلوك المستهلك المصري، وتدقيقاً تنافسياً شاملاً ضد Zara و LC Waikiki و Defacto و Mango و Bershka.',
    skills: ['Market Sizing', 'Competitor Benchmarking', 'Consumer Behavior', 'SWOT Analysis', 'Data Synthesis'],
    objective:
      'تحديد الفجوات التنافسية لعلامة H&M Egypt في السوق المحلي، ودراسة تفضيلات 50.7 مليون مستخدم مصري على وسائل التواصل الاجتماعي لصياغة استراتيجية استحواذ رابحة.',
    concept:
      'تحليل تقاطعي بين حجم السوق الصاعد (+35% نمو سنوي) وبين نقاط ضعف العلامة الحالية (النشر غير المنتظم والاعتماد المفرط على الكتالوج العالمي دون محتوى محلي).',
    myRole:
      'أخصائي بحوث السوق واستراتيجي التسويق — جمع البيانات، تحليل أداء المنافسين في مواسم رمضان والجمعة البيضاء، وبناء مصفوفة الـ SWOT وشخصيات العملاء المستهدفين.',
    tools: ['Market Intelligence', 'Competitor Auditing Decks', 'Meta Ad Library', 'PowerPoint Strategy Presentation'],
    deckFileName: 'HM_Egypt_Market_Research_Analysis.pptx',
    pdfDownloadUrl: '/documents/HM_Egypt_Market_Research_Report.pdf',
    pdfFileName: 'HM_Egypt_Market_Research_Report.pdf',
    deckDownloadUrl: '/decks/HM_Egypt_Market_Research_Analysis.pptx',
    deckSlides: [
      {
        slideNumber: 1,
        title: 'H&M Egypt: Digital Situation Analysis 2024 / 2025',
        category: 'Executive Summary',
        highlight: 'Fast-Fashion Landscape',
        points: [
          'دراسة شاملة لحجم قطاع التجارة الإلكترونية وسلوك المستهلك المصري.',
          'تحليل الحصة السوقية وفرص التوسع لـ H&M في مصر.',
          'إعداد وتوثيق استراتيجي معتمد برقم الهوية: 21172333.',
        ],
      },
      {
        slideNumber: 2,
        title: 'Egypt Fashion Market Sizing & E-Commerce Growth',
        category: 'Market Sizing',
        highlight: 'Macroeconomics',
        points: [
          'حجم مبيعات التجارة الإلكترونية الإجمالي في مصر بلغ 7.5 مليار دولار (GMV).',
          'معدل نمو سنوي متسارع يصل إلى +35% في قطاع بيع الأزياء بالتجزئة عبر الإنترنت.',
          'التحول الرقمي السريع يجعل المنصات الاجتماعية المحرك الأول لقرارات الشراء.',
        ],
        metrics: [
          { label: 'Egypt E-Com GMV', value: '$7.5B' },
          { label: 'Annual Growth Rate', value: '+35%' },
        ],
      },
      {
        slideNumber: 3,
        title: 'Consumer Buying Behavior & Demographics in Egypt',
        category: 'Consumer Behavior',
        highlight: 'Target Persona',
        points: [
          'الفئة العمرية من 18 إلى 34 عاماً تستحوذ على النصيب الأكبر من مشتريات الأزياء الرقمية.',
          'الإناث يقدن ما يقارب 70% من طلبات الأزياء عبر الإنترنت، مع نمو متسارع لفئة الشباب والرجال.',
          'طريقة الدفع: النقد عند الاستلام (COD) لا يزال يشكل الخيار الأكثر تفضيلاً للعملاء.',
        ],
        metrics: [
          { label: 'Prime Age Group', value: '18 - 34 Y/O' },
          { label: 'Female Order Share', value: '~70%' },
        ],
      },
      {
        slideNumber: 4,
        title: 'Egypt Digital Landscape & Channel Penetration',
        category: 'Digital Landscape',
        highlight: 'Infrastructure',
        points: [
          '96.3 مليون مستخدم للإنترنت في مصر بنسبة انتشار 81.9% من السكان.',
          '50.7 مليون مستخدم نشط لشبكات التواصل الاجتماعي يمثلون الشريحة المستهدفة مباشرة.',
          'إنستغرام وتيك توك وفيسبوك هي القنوات الثلاث المهيمنة على اهتمام فئة الشباب.',
        ],
        metrics: [
          { label: 'Internet Users', value: '96.3M' },
          { label: 'Social Media Users', value: '50.7M' },
        ],
      },
      {
        slideNumber: 5,
        title: 'Competitor Audit: H&M vs. Zara, LC Waikiki & Defacto',
        category: 'Competitor Benchmarking',
        highlight: 'Competitive Gap',
        points: [
          'LC Waikiki تتصدر في النشر اليومي المكثف وتوطين المحتوى باللغة العربية.',
          'Zara تركز على الجماليات العالمية والفخامة الهادئة بأسعار أعلى.',
          'نقطة ضعف H&M الحرجة: جدول نشر غير منتظم (0-2 منشور أسبوعياً) وغياب صناع المحتوى المصريين.',
        ],
      },
      {
        slideNumber: 6,
        title: 'Best Performing Content & Seasonal Demand Spikes',
        category: 'Seasonal Uplifts',
        highlight: 'Peak Seasons',
        points: [
          'حملات شهر رمضان تحقق وصولاً مضاعفاً بنسبة 4 إلى 6 أضعاف مقارنة بالأشهر العادية.',
          'عروض الجمعة البيضاء (White Friday) تضاعف مبيعات الموقع وتطبيقات الهاتف 3 إلى 4 أضعاف.',
          'فيديوهات الريلز والـ UGC تحقق أعلى معدل حفظ ومشاركة (Saves & Shares).',
        ],
        metrics: [
          { label: 'Ramadan Reach Uplift', value: '4-6x' },
          { label: 'White Friday Sales', value: '3-4x' },
        ],
      },
    ],
    process: [
      { step: '01. تدقيق حجم السوق', detail: 'تحليل بيانات الاقتصاد الرقمي المصري وإحصائيات E-Commerce GMV بقيمة 7.5 مليار دولار.' },
      { step: '02. تشريح المنافسين', detail: 'مقارنة دقيقة ضد LC Waikiki و Zara و Defacto في وتيرة النشر والتوطين.' },
      { step: '03. دراسة سلوك المستهلك', detail: 'تحليل دوافع الشراء، الدفع عند الاستلام، وتفضيلات الشباب من سن 18 إلى 34 سنة.' },
      { step: '04. مصفوفة الفرص التسويقية', detail: 'استخراج التوصيات التنفيذية لحملات الجمعة البيضاء وعودة المدارس.' },
    ],
    finalResult:
      'ملف بحثي واستراتيجي متكامل متاح للتصفح والتحميل، يعتمد على أرقام واقعية يقدم خارطة طريق صلبة للنمو في السوق المصري.',
    image: hmStrategyThumb,
    galleryImages: [hmStrategyThumb],
    aspectRatio: '16:9',
    stats: [
      { label: 'Market GMV', value: '$7.5B Egypt E-Com' },
      { label: 'Annual Growth', value: '+35% YoY' },
      { label: 'Target Audience', value: '50.7M Social Users' },
    ],
    featured: true,
  },
  {
    id: 'hm-egypt-growth-strategy',
    tracks: ['Marketing Strategy', 'Content Creation'],
    title: 'H&M Egypt: Digital Growth Strategy & Content Transformation',
    clientOrSpec: 'Strategic Blueprint',
    subtitle: 'Solving Irregular Posting, SMART Objectives & 2.5M Monthly Youth Reach',
    category: 'Marketing Strategy',
    tagline: 'تحويل استراتيجية المحتوى من مجرد كتالوج جامد إلى ماكينة وصول وتحويل تفاعلية.',
    description:
      'خطة استراتيجية تنفيذية لمعالجة أكبر نقاط ضعف H&M Egypt (النشر غير المنتظم وضعف التفاعل العضوي). تتضمن أهداف SMART طموحة، وإعادة بناء لجدول المحتوى بالاعتماد على صناع المحتوى المصريين.',
    skills: ['SMART Goals', 'Content Strategy', 'Campaign Planning', 'Audience Personas', 'Execution Roadmap'],
    objective:
      'تحقيق زيادة 20% في المبيعات الإلكترونية خلال مواسم الذروة، والوصول إلى 2.5 مليون شاب مصري شهرياً على تيك توك وإنستغرام عبر المحتوى الفيروسي.',
    concept:
      'الانتقال من "استعراض الصور الاستوديو العالمية الباردة" إلى "محتوى الستايل اليومي الواقعي في الشارع والجامعات المصرية" عبر شراكات الـ UGC والترندات السريعة.',
    myRole:
      'مخطط الحملات واستراتيجي النمو — وضع الأهداف الذكية، تصميم شخصية المشتري (Persona)، وجدولة محتوى الأسبوع لمواكبة ساعات الذروة في مصر.',
    tools: ['Meta Business Suite', 'Content Architecture', 'SMART Framework', 'PowerPoint Presentation'],
    deckFileName: 'HM_Egypt_Digital_Marketing_Strategy.pptx',
    pdfDownloadUrl: '/documents/HM_Egypt_Market_Research_Report.pdf',
    pdfFileName: 'HM_Egypt_Digital_Marketing_Strategy.pdf',
    deckDownloadUrl: '/decks/HM_Egypt_Digital_Marketing_Strategy.pptx',
    deckSlides: [
      {
        slideNumber: 1,
        title: 'H&M Egypt: Digital Marketing Strategy & Execution',
        category: 'Strategic Deck',
        highlight: 'Growth Masterplan',
        points: [
          'خطة تنفيذية للتحول الرقمي وزيادة الحصة السوقية في مصر.',
          'معالجة ضعف الانتظام في النشر ورفع معدلات التفاعل العضوي.',
          'إعداد الطالب: محمد مصطفى طاهر — كود الهوية: 21172333.',
        ],
      },
      {
        slideNumber: 2,
        title: 'SMART Marketing Objectives for H&M Egypt',
        category: 'SMART Objectives',
        highlight: 'Target KPIs',
        points: [
          'زيادة مبيعات المتجر الإلكتروني بنسبة 20% خلال مواسم الجمعة البيضاء وعودة الجامعات في 3 أشهر.',
          'الوصول إلى 2.5 مليون شاب مصري فريد شهرياً على تيك توك وإنستغرام خلال 5 أشهر.',
          'اكتساب 100 ألف متابع نشط على تيك توك وإنستغرام عبر ترندات المحتوى المحلي.',
        ],
        metrics: [
          { label: 'Online Sales Growth', value: '+20%' },
          { label: 'Monthly Youth Reach', value: '2.5M' },
          { label: 'New Active Followers', value: '100K' },
        ],
      },
      {
        slideNumber: 3,
        title: 'Buyer Persona: The Egyptian University Student',
        category: 'Audience Persona',
        highlight: 'Customer Profile',
        points: [
          'الاسم الديموغرافي: طالب جامعي (21 عاماً) في القاهرة الكبرى بميزانية شهرية محددة.',
          'السلوك الشرائي: يبحث عن الملابس الأنيقة بأسعار معقولة، يتابع أكواد الخصم والعروض أونلاين.',
          'الاحتكاك: الخوف من سوء المقاسات أو تأخر التوصيل وتفضيل خيارات التبديل السلسة.',
        ],
      },
      {
        slideNumber: 4,
        title: 'Solving Inconsistent Posting & Content Audit',
        category: 'Content Shift',
        highlight: 'Content Matrix',
        points: [
          'المشكلة: H&M تنشر 0 إلى 2 بوست أسبوعياً فقط وتفوت ساعات الذروة المسائية في مصر.',
          'الحل: رفع وتيرة النشر إلى 5-7 منشورات أسبوعياً مقسمة بين الفيديوهات الريلز والقصص التفاعلية.',
          'استبدال الصور العالمية الجافة بفيديوهات تنسيق ملابس سريعة بصوت صناع محتوى مصريين.',
        ],
      },
    ],
    process: [
      { step: '01. صياغة أهداف SMART', detail: 'وضع أهداف قابلة للقياس لتحقيق +20% مبيعات و2.5M وصول شهري.' },
      { step: '02. تصميم الـ Persona', detail: 'بناء ملف العميل المثالي من طلاب الجامعات والشباب العاملين.' },
      { step: '03. إعادة هيكلة النشر', detail: 'جدولة محتوى يومي يغطي ساعات الذروة من 7 إلى 11 مساءً في مصر.' },
    ],
    finalResult:
      'استراتيجية تسويقية مكتملة قابلة للتطبيق العملي الفوري تضمن انتقال H&M لتصدر اهتمامات فئة الشباب في مصر.',
    image: hmGrowthThumb,
    galleryImages: [hmGrowthThumb],
    aspectRatio: '16:9',
    stats: [
      { label: 'Sales Target', value: '+20% Peak Seasons' },
      { label: 'Reach Goal', value: '2.5M Unique/Mo' },
      { label: 'Followers Goal', value: '100K Active Growth' },
    ],
    featured: true,
  },
  {
    id: 'qaim-fashion-growth',
    tracks: ['Marketing Strategy', 'Content Creation', 'Dubbing & Audio', 'Videos', 'Photography'],
    title: 'QAIM (قيم للـ Menswear): Complete SOSTAC & SCQA Masterplan',
    clientOrSpec: 'Client Project',
    subtitle: 'Digital Presence Audit, SCQA Storytelling, 4 Weekly Tactics & Actions/Control KPIs',
    category: 'Marketing Strategy',
    tagline: 'بيع أسلوب الحياة والحل، مش بس المنتج — الخطة التسويقية الشاملة لعلامة قِيَم.',
    description:
      'استراتيجية تسويقية متكاملة الأركان طبقت أحدث المدارس العالمية (SOSTAC & SCQA). تشمل تدقيق الوضع الراهن لصفحة فيسبوك والمتجر الإلكتروني، وصياغة الرسائل الإعلانية، وتفصيل التكتيكات والإجراءات الأسبوعية ولوحة مؤشرات الأداء (KPIs)، مصحوبة بفيديو تجاري وتسجيل صوتي أصلي.',
    skills: ['SOSTAC Masterplan', 'SCQA Storytelling', 'Action Ownership', 'KPI Dashboards', 'AI Video & Voiceover'],
    objective:
      'حل معضلة المظهر الأنيق المريح للشباب والرجال، ومضاعفة التفاعل العضوي بنسبة +20% لجمهور يتجاوز 62 ألف متابع بنسبة توصية 96%، وزيادة التحويل لطلبات الواتساب والمتجر.',
    concept:
      'إطار SCQA: Situation (شباب يبحثون عن مظهر شيك ومريح يومياً) → Complication (صعوبة إيجاد خامات جيدة تجمع الستايل والراحة) → Question (كيف تحقق ذلك؟) → Answer (تشكيلة قيم المبتكرة).',
    myRole:
      'استراتيجي التسويق الرقمي والمخرج الإبداعي — تدقيق الحسابات الرقمية، صياغة رزنامة المحتوى الأسبوعية، توجيه الأداء الصوتي (Voiceover)، وإخراج الفيديو الإعلاني ولوحة الـ KPIs.',
    tools: ['SOSTAC Framework', 'SCQA Model', 'CapCut Pro', 'Voiceover Recording & Foley', 'Canva Strategy Decks'],
    audioUrl: '/audio/qaim_voiceover.wav',
    audioTitle: 'Voiceover: Product Aligned & Fresh Occasions (هندسة الصوت والإلقاء الإعلاني لعلامة قيم)',
    deckFileName: 'Qaim_SOSTAC_Storytelling_Masterplan.pptx',
    pdfDownloadUrl: '/documents/Qaim_Digital_Marketing_Masterplan.pdf',
    pdfFileName: 'Qaim_Digital_Marketing_Masterplan.pdf',
    deckDownloadUrl: '/decks/Qaim_SOSTAC_Storytelling_Masterplan.pptx',
    deckSlides: [
      {
        slideNumber: 1,
        title: 'QAIM — قيم: Digital Marketing Storytelling Strategy',
        category: 'SOSTAC Strategy',
        highlight: 'Brand Identity',
        points: [
          'تطبيق متكامل لنموذج SOSTAC وسردية SCQA في قطاع الأزياء الرجالية.',
          'الربط الاستراتيجي بين صفحة فيسبوك، حساب إنستغرام، والمتجر الإلكتروني qaim.shop.',
          'إعداد: محمد مصطفى طاهر — كود الطالب: 21172333.',
        ],
      },
      {
        slideNumber: 2,
        title: 'Current Digital Audit: 62K Followers & 96% Trust',
        category: 'Situation Analysis',
        highlight: 'Verified Presence',
        points: [
          'قاعدة متابعين تتجاوز 62 ألف عميل على فيسبوك وتفاعل مرتفع مع منشورات الريلز.',
          'نسبة رضا وتوصية استثنائية بلغت 96% من واقع مراجعات العملاء وتجارب الشراء.',
          'الفرصة الكبرى: تحويل التفاعل العضوي إلى مبيعات مباشرة عبر أتمتة مسارات الشراء في واتساب.',
        ],
        metrics: [
          { label: 'Followers Base', value: '62,000+' },
          { label: 'Customer Trust', value: '96% Positive' },
        ],
      },
      {
        slideNumber: 3,
        title: 'Strategic Core: “Sell the Lifestyle, Not Just the Fabric”',
        category: 'Strategy & Positioning',
        highlight: 'Core Positioning',
        points: [
          'الانتقال من مجرد عرض القميص أو البنطلون إلى بيع الثقة والراحة في يوم العمل الطويل.',
          'المشكلة العاطفية: “عندي هدوم كتير بس كل يوم مش عارف ألبس إيه ومش مرتاح”.',
          'الحل من قِيَم: أطقم أساسية مريحة ومتناسقة تناسب العمل، الجامعة، وخروجات المساء.',
        ],
      },
      {
        slideNumber: 4,
        title: 'Four Core Weekly Tactics Across the Funnel',
        category: 'Tactics & Funnels',
        highlight: 'Execution Pillars',
        points: [
          'تكتيك 1 (Discover): ريلز استكشاف سريعة تشرح تشكيلة المنتجات وتنسيقها.',
          'تكتيك 2 (Imagine): محتوى تفاعلي يتيح للعميل اختيار الإطلالة المناسبة ليومه.',
          'تكتيك 3 (Verify): أدلة شراء واضحة وإرشادات اختيار المقاسات بدقة لبناء الثقة.',
          'تكتيك 4 (Convert): عروض مباشرة ومسار فوري للطلب عبر الموقع والواتساب.',
        ],
      },
      {
        slideNumber: 5,
        title: 'Action Plan: Who Does What Every Week',
        category: 'Actions & Ownership',
        highlight: 'Team Responsibilities',
        points: [
          'صانع المحتوى / المونتير: تصوير ومونتاج 2 فيديو ريلز + تسجيل الفويس أوفر + تصميم 2 كاروسيل.',
          'مدير المجتمع (Community Manager): نشر الستوريز اليومية والرد على التعليقات خلال 24 ساعة.',
          'مسؤول النمو والإعلانات: متابعة لوحة الـ KPIs أسبوعياً وترويج أفضل المنشورات أداءً.',
          'عمليات المتجر: الرد الفوري على استفسارات الواتساب وتأكيد المقاسات والشحن.',
        ],
      },
      {
        slideNumber: 6,
        title: 'Control & Performance Tracking Dashboard',
        category: 'Control & KPIs',
        highlight: 'Weekly Metrics',
        points: [
          'مراقبة معدل التفاعل والحفظ والمشاركة (Saves & Shares) لكل ريل.',
          'تتبع عدد المحادثات المبدئية ومعدل إتمام الطلبات على واتساب Business.',
          'قواعد القرار الأسبوعية: المنشور الذي يتجاوز معدل حفظ 3% يُدعَم بإعلانات ممولة فوراً.',
        ],
      },
    ],
    process: [
      { step: '01. تدقيق الوضع الراهن (Situation)', detail: 'تحليل أداء 62K متابع على فيسبوك وإنستغرام ونسبة التوصية البالغة 96%.' },
      { step: '02. صياغة الاستراتيجية (Strategy)', detail: '«Sell the lifestyle and the solution, not only the product».' },
      { step: '03. رزنامة المحتوى والتكتيكات', detail: 'توزيع مدروس بين الريلز التثقيفية، كواليس الإنتاج، وإثبات الجودة.' },
      { step: '04. مصفوفة المسؤوليات والمراقبة', detail: 'تحديد مهام فريق العمل وضبط لوحة مؤشرات الأداء (Control KPIs).' },
    ],
    finalResult:
      'خطة تسويقية شاملة مصحوبة بفيديو إعلاني رأسي، وتسجيل صوتي، وسلايدات تقديمية، زادت من وضوح العلامة ومعدلات التحويل.',
    image: qaimVideoPoster,
    reelImage: qaimEditorial1,
    galleryImages: [qaimEditorial1, qaimEditorial2, qaimEditorial3],
    videoUrl: qaimVideo,
    aspectRatio: '9:16',
    driveFolderUrl: 'https://drive.google.com/drive/folders/10e2orh2oRMlZ3jGFm5nyZukMMVKtj25A',
    stats: [
      { label: 'Audience Base', value: '62K Followers & 96% Trust' },
      { label: 'Framework', value: 'SOSTAC + SCQA' },
      { label: 'Execution', value: 'Deck + Video + Audio' },
    ],
    featured: true,
  },
  {
    id: 'qaim-carousels-content',
    tracks: ['Content Creation', 'Photography', 'Marketing Strategy'],
    title: 'QAIM Menswear: 3 High-Conversion Interactive Carousels',
    clientOrSpec: 'Client Project',
    subtitle: '“One Base, Three Plans” • “Daily or Weekend?” • “Complete the Look”',
    category: 'Brand Presentation & Deck',
    tagline: 'تصميم مسارات الكاروسيل التفاعلية لزيادة معدلات الحفظ ونسبة الشراء الفوري.',
    description:
      'تطوير 3 مفاهيم كاروسيل تسويقية لعلامة أزياء قيم، مصممة خصيصاً لخوارزميات إنستغرام وفيسبوك. تركز على تفاعل العميل مع السلايدات من خلال خيارات التنسيق اليومي ومسار الشراء السلس.',
    skills: ['Carousel Architecture', 'Visual Copywriting', 'Interactive Micro-Funnels', 'Social Proof Integration'],
    objective:
      'رفع معدل التمرير عبر السلايدات (Carousel Completion Rate) ودفع المتابع لحفظ البوست أو الضغط على الرابط لشراء الطقم كاملاً.',
    concept:
      'ثلاثة مسارات متدرجة: 1) قطعة واحدة بثلاث تنسيقات مختلفة، 2) اختيار تفاعلي بين إطلالة العمل وإطلالة الويك إند، 3) إكمال الطقم (Complete the Look) لرفع متوسط قيمة السلة (AOV).',
    myRole:
      'مخطط المحتوى ومصمم الكاروسيل — كتابة النصوص التفاعلية وهندسة تصميم السلايدات على كانفا وأدوات التصميم.',
    tools: ['Canva Pro', 'Social Media Copywriting', 'Engagement Funnels', 'PowerPoint Deck'],
    deckFileName: 'Qaim_Interactive_Carousel_Concepts.pptx',
    pdfDownloadUrl: '/documents/Qaim_Digital_Marketing_Masterplan.pdf',
    pdfFileName: 'Qaim_Interactive_Carousel_Concepts.pdf',
    deckDownloadUrl: '/decks/Qaim_Interactive_Carousel_Concepts.pptx',
    deckSlides: [
      {
        slideNumber: 1,
        title: 'QAIM: Three Strategic Carousel Concepts',
        category: 'Content Strategy',
        highlight: 'Carousel Decks',
        points: [
          'تطوير محتوى قِيَم الاجتماعي إلى صيغ كاروسيل عملية وجاهزة للنشر والتفاعل.',
          'ربط كل مفهوم بوظيفة محددة في رحلة الشراء (Discover, Engage, Convert).',
          'إعداد: محمد مصطفى طاهر — كود: 21172333.',
        ],
      },
      {
        slideNumber: 2,
        title: 'Concept 1: “One Base, Three Plans”',
        category: 'Styling Carousel',
        highlight: 'Versatility Route',
        points: [
          'استعراض كيف يمكن لقطعة أساسية واحدة من قيم أن ترافق العميل في مشاوير الصباح، الكافيه، وعشاء المساء.',
          'تقليل تردد العميل وإبراز القيمة الاقتصادية للقطعة (Cost-Per-Wear).',
          'الشريحة الأخيرة: رابط مباشر لاقتناء الطقم كاملاً بنقرة واحدة.',
        ],
      },
      {
        slideNumber: 3,
        title: 'Concept 2: “Daily or Weekend?”',
        category: 'Interactive Choice',
        highlight: 'Engagement Route',
        points: [
          'تصميم تفاعلي يدعو المتابع لاختيار اللوك المفضل له في التعليقات.',
          'استغلال أسئلة الاستفتاء لزيادة التفاعل العضوي وتحفيز خوارزميات المنصة.',
          'الربط الذكي بين مزاج العميل وتشكيلة قمصان وبناطيل قيم.',
        ],
      },
      {
        slideNumber: 4,
        title: 'Concept 3: “Complete the Look”',
        category: 'Conversion & AOV',
        highlight: 'Basket Size Route',
        points: [
          'نقل العميل من مرحلة شراء قطعة منفردة إلى شراء الطقم الكامل بتنسيق متوازن.',
          'عرض الإكسسوارات والبنطلون المتطابق مع تبيان السعر الإجمالي للطقم كعرض مجمع.',
          'رفع متوسط قيمة الطلب (Average Order Value) في متجر qaim.shop.',
        ],
      },
    ],
    process: [
      { step: '01. تحديد الهدف التسويقي', detail: 'تخصيص كاروسيل للاكتشاف، وآخر للتفاعل، وثالث للتحويل المباشر.' },
      { step: '02. صياغة الهوك والنسخ البصرية', detail: 'كتابة نصوص مختصرة وواضحة تجعل التمرير سهلاً وسريعاً.' },
      { step: '03. التصميم والإخراج على كانفا', detail: 'تطبيق هوية البراند والألوان وتجهيز الملفات للنشر الفوري.' },
    ],
    finalResult:
      'حزمة كاروسيل احترافية متكاملة حققت نسب تفاعل وحفظ عالية وأثبتت فاعلية التسويق البصري المنظم.',
    image: qaimEditorial2,
    galleryImages: [qaimEditorial1, qaimEditorial2, qaimEditorial3],
    aspectRatio: '16:9',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1zYaljKNwH5XvD5V_Irsfcas-FZ1MsHrq',
    stats: [
      { label: 'Carousel Concepts', value: '3 Distinct Routes' },
      { label: 'Primary KPI', value: 'Saves & AOV Growth' },
      { label: 'Deck Deliverable', value: 'Full Presentation Ready' },
    ],
    featured: false,
  },
  {
    id: 'v7-cream-soda-summer',
    tracks: ['AI Content', 'Videos', 'Dubbing & Audio', 'Content Creation', 'Photography'],
    title: 'V7 Cream Soda: 360° Multi-Era Brand & Campaign Deck',
    clientOrSpec: 'Brand Launch',
    subtitle: '«صيف في سفن: كل جيل له صيفه... وده صيفنا» • 19-Slide Strategy Deck & Commercial Film',
    category: 'Brand Presentation & Deck',
    tagline: 'كل جيل له صيفه... وده صيفنا مع V7 Cream Soda.',
    description:
      'حملة إعلانية وتسويقية متكاملة موثقة بديك استراتيجي مكون من 19 شريحة لـ V7 Cream Soda. تعتمد على تقنية الـ Match Cuts والانتقال الزمني الصوتي البصري عبر 3 أجيال من المصايف المصرية (رأس البر، العجمي، والساحل الشمالي).',
    skills: ['Campaign Strategy', 'Match Cut Mechanics', 'Sound Identity', 'Brand Deck Design', 'Short-Form Reels'],
    objective:
      'خلق رابط عاطفي بين جيل الشباب وعلامة V7 من خلال مقارنة نوستالجية لأجواء الصيف في مصر عبر الأجيال الثلاثة وربط الانتعاش بعبوة V7 العصرية.',
    concept:
      'رحلة عبر 3 أجيال من الصيف المصري: جيل زمان في رأس البر مع راديو الشاطئ، جيل التسعينات في العجمي مع شريط الكاسيت، وجيل اليوم في الساحل مع عبوة V7 Cream Soda.',
    myRole:
      'مخطط الحملة والمخرج الإبداعي — صياغة فكرة الانتقال الزمني، كتابة الديك الإعلاني المكون من 19 شريحة استراتيجية، وهندسة الانتقالات الصوتية (Match Cuts).',
    tools: ['V7 Brand Deck', 'AI Video Generation', 'CapCut (Match-Cut Transitions)', 'Sound Design & Foley'],
    deckFileName: 'V7_Cream_Soda_Summer_Brand_Deck.pptx',
    pdfDownloadUrl: '/documents/Mohamed_Taher_Executive_Portfolio.pdf',
    pdfFileName: 'V7_Cream_Soda_Summer_Brand_Deck.pdf',
    deckDownloadUrl: '/decks/V7_Cream_Soda_Summer_Brand_Deck.pptx',
    deckSlides: [
      {
        slideNumber: 1,
        title: 'V7 Cream Soda: Brand & Summer Campaign Deck',
        category: 'Campaign Launch',
        highlight: '19-Slide Master Deck',
        points: [
          'حملة «كل جيل له صيفه... وده صيفنا» — الصيف في مصر مش مجرد شمس وبحر، ده حالة وشعور.',
          'الربط بين نوستالجيا أجيال زمان ومصايف اليوم بعبوة V7 العصرية.',
          'إعداد: محمد مصطفى طاهر — كود 21172333.',
        ],
      },
      {
        slideNumber: 2,
        title: 'Brand Snapshot: Who is V7 Cream Soda?',
        category: 'Brand Identity',
        highlight: 'Product Attributes',
        points: [
          'مشروب فوار مصري عصري يتميز بطعم الكريم صودا الغني والمنعش.',
          'البديل المحلي الفاخر للمشروبات الغازية المستوردة بروح وهوية شابة متجددة.',
          'استهداف قطاع الشباب ومرتادي الشواطئ وعشاق التجارب الصيفية الممتعة.',
        ],
      },
      {
        slideNumber: 3,
        title: 'Big Idea: The Journey Through Three Generations',
        category: 'Creative Concept',
        highlight: 'Match-Cut Bridge',
        points: [
          'الجيل الأول (السبعينات والثمانينات): رأس البر وجمصة مع راديو الشاطئ والشمسيات القماش.',
          'الجيل الثاني (التسعينات): العجمي وشريط الكاسيت وسيارات الفيات وأجواء البيانو بار.',
          'الجيل الثالث (اليوم): الساحل الشمالي، البيتس العصري، وعبوة V7 Cream Soda المثلجة.',
        ],
      },
      {
        slideNumber: 4,
        title: 'Sound Identity Evolution Across Generations',
        category: 'Sound Design',
        highlight: 'Audio Match-Cut',
        points: [
          'شوشرة الراديو وصوت المذيع القديم تنتقل بسلاسة لدوران بكرة شريط الكاسيت في مسجل السيارة.',
          'صوت فتح زجاجة V7 وفقاعات الصودا المنعشة تقطع المشهد إلى الإيقاع الصيفي الحديث.',
          'الـ Match Cut الصوتي البصري هو جوهر الحملة الذي يمنع تخطي الإعلان.',
        ],
      },
      {
        slideNumber: 5,
        title: '5-Post Strategic Deployment Roadmap',
        category: 'Media Distribution',
        highlight: 'Content Schedule',
        points: [
          'منشور 1: فيديو ريلز تمهيدي يستعرض نوستالجيا رأس البر والعجمي.',
          'منشور 2: فيديو الإعلان الرئيسي بتقنية الـ Match Cuts الكاملة.',
          'منشور 3: كاروسيل تفاعلي «أي جيل صيف يمثلك أكتر؟».',
          'منشور 4: ريلز تحدي سحب الكانز والترند الصيفي على تيك توك.',
          'منشور 5: بوستر تثبيتي لعروض الشراء والتوصيل لمصايف الساحل.',
        ],
      },
    ],
    process: [
      { step: '01. المحور الإبداعي (Match Cuts)', detail: 'تحديد نقطة الربط بين اللقطات بحركة متطابقة (رشفة المشروب وحركة اليد).' },
      { step: '02. الهوية الصوتية للأجيال', detail: 'شوشرة الراديو القديم لجيل زمان، صوت الكاسيت للتسعينات، والبيتس الحديث لجيل اليوم.' },
      { step: '03. رحلة النشر (5 منشورات)', detail: 'تخطيط خطة محتوى تشمل 3 فيديوهات ريلز + كاروسيل + تصميم ثابت.' },
    ],
    finalResult:
      'حملة إعلانية مبتكرة موثقة بديك تسويقي كامل وفيديو تجاري أثبتت قدرة المنتج على اختراق وجدان المستهلكين وربط التراث بالحداثة.',
    image: v7Poster,
    galleryImages: [v7SocialPost, aiReelPoster],
    videoUrl: v7Video,
    aspectRatio: '9:16',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1fyGsWAhwiEdt_qkshdB9eCzsX1ldZ4Sh',
    stats: [
      { label: 'Format', value: 'Vertical Reel 9:16' },
      { label: 'Strategy Deck', value: '19 Master Slides' },
      { label: 'Audio Direction', value: '3-Era Match-Cuts' },
    ],
    featured: true,
  },
  {
    id: 'takaa-energy-launch',
    tracks: ['Content Creation', 'Videos', 'Photography', 'AI Content'],
    title: 'TAKAA Energy Drink: Brand Identity & Instagram Architecture',
    clientOrSpec: 'Brand Launch',
    subtitle: '«مودك ناقصه تاكة» • Brand Positioning Deck, CapCut Viral Template & 8-Slide Carousel',
    category: 'Brand Presentation & Deck',
    tagline: 'مودك مش محتاج إعادة ضبط كاملة.. هو بس ناقصه تاكة!',
    description:
      'إطلاق هوية متكاملة لمشروب طاقة مصري عصري، تشمل إعلاناً سينمائياً، قالب كاب كات فيروسي (Product Pop-Reveal)، وتصميم حساب إنستغرام مخصص للاستحواذ، وكاروسيل من 8 شرائح.',
    skills: ['Brand Identity', 'CapCut Pop-Reveal Template', 'AI Commercial Film', 'Instagram Architecture', 'Copywriting'],
    objective:
      'بناء براند طاقة جديد بروح مصرية خفيفة الظل وغير مبالغ فيها، موجهة للشباب والرياضيين والطلبة تحت شعار «مودك ناقصه تاكة».',
    concept:
      'تصميم قالب كاب كات بفتحة كانز سريعة وزوم خاطف (Zoom-Punch Cut) مع إعلان سينمائي يستعرض شحن الطاقة في لحظات التعب والتركيز اليومية.',
    myRole:
      'المبتكر الإبداعي للعلامة — كتابة الشعار، هندسة قالب الكاب كات الفيروسي، إنتاج الإعلان التجاري، وتصميم سلايدات الكاروسيل وهوية الحساب الرسمي.',
    tools: ['CapCut Viral Templates', 'Generative AI Media', 'Brand Deck Presentations', 'Social Carousel Design'],
    deckFileName: 'TAKAA_Energy_Brand_Launch_Deck.pptx',
    pdfDownloadUrl: '/documents/Mohamed_Taher_Executive_Portfolio.pdf',
    pdfFileName: 'TAKAA_Energy_Brand_Launch_Deck.pdf',
    deckDownloadUrl: '/decks/TAKAA_Energy_Brand_Launch_Deck.pptx',
    deckSlides: [
      {
        slideNumber: 1,
        title: 'TAKAA Energy Drink: Brand Deck & Launch Plan',
        category: 'Brand Conception',
        highlight: 'Lifestyle Brand',
        points: [
          'علامة تجارية مصرية لمشروبات الطاقة مبنية حول مفهوم اللمسة السريعة التي تعدل المزاج.',
          'الشعار الإعلاني المعتمد: «مودك ناقصه تاكة».',
          'إعداد: محمد مصطفى طاهر — كود 21172333.',
        ],
      },
      {
        slideNumber: 2,
        title: 'Brand Positioning: Who Is TAKAA?',
        category: 'Positioning',
        highlight: 'The Tweak Concept',
        points: [
          'طاقة متجددة بدون توتر، بطعم مصري منعش يناسب أوقات العمل والدراسة والرياضة.',
          'الابتعاد عن خطابات الإعلانات التقليدية المعقدة والاقتراب من لغة الشارع البسيطة.',
          'تصميم العبوة: كانز أنيقة ملونة تعبر عن الحيوية والنشاط.',
        ],
      },
      {
        slideNumber: 3,
        title: 'Instagram Architecture: Profile Optimization',
        category: 'Page Optimization',
        highlight: 'Conversion Setup',
        points: [
          'هندسة البايو (Bio): عبارة تموضع واضحة تحدد تخصص الحساب والمنتج فوراً.',
          'الهايلايتس (Highlights): تنظيم القصص (النكهات، تجارب العملاء، أماكن التواجد، المسابقات).',
          'زر الإجراء (CTA): رابط موجه مباشرة للطلب السريع عبر المتجر أو الواتساب.',
        ],
      },
      {
        slideNumber: 4,
        title: 'CapCut Viral Pop-Reveal Template Mechanics',
        category: 'Viral Content',
        highlight: 'Trend Template',
        points: [
          'قالب كاب كات مدته 15 ثانية يعتمد على حركة فتح الكانز وصوت الطرقعة السريعة.',
          'تقنية الـ Zoom-Punch Cut التي تسهل على صناع المحتوى وتيك توكرز استبدال الصور بمقاطعهم.',
          'تصميم مخصص لزيادة انتشار العلامة بشكل عضوي ومجاني.',
        ],
      },
    ],
    process: [
      { step: '01. ولادة الشعار والهوية', detail: 'صياغة اسم «تاكة» من العامية المصرية للتعبير عن اللمسة البسيطة التي تقلب المود.' },
      { step: '02. قالب الكاب كات الفيروسي', detail: 'تطوير قالب Product Pop-Reveal يسهل على صناع المحتوى استخدامه وتكراره.' },
      { step: '03. الفيلم الإعلاني والكاروسيل', detail: 'إنتاج إعلان يبرز تصميم الكانز وانتعاش النكهات مع سلايدات الكاروسيل الثمانية.' },
    ],
    finalResult:
      'حزمة إطلاق كاملة لمنتج استهلاكي تشمل المحتوى الإعلاني وقوالب التيك توك وتصميم الحساب وسلاسل الكاروسيل التسويقية.',
    image: takaaVideoPoster,
    galleryImages: [takaaCarousel1, takaaCreativeCampaign, takaaCapcutPoster],
    videoUrl: takaaVideo,
    aspectRatio: '9:16',
    stats: [
      { label: 'Campaign Slogan', value: 'مودك ناقصه تاكة' },
      { label: 'Deliverables', value: 'AI Video + CapCut + Decks' },
      { label: 'Platform Focus', value: 'Instagram & TikTok Launch' },
    ],
    featured: true,
  },
  {
    id: 'furniture-facebook-page-funnel',
    tracks: ['Marketing Strategy', 'Content Creation', 'Photography'],
    title: 'Local Business Growth: Facebook Page Architecture & WhatsApp Funnel',
    clientOrSpec: 'Client Project',
    subtitle: 'Service Categorization, WhatsApp Quick-Replies, Customer Reviews & Direct Lead Generation',
    category: 'Marketing Strategy',
    tagline: 'بناء الحضور التجاري على فيسبوك وتأسيس مسار تحويل مباشر للطلبات.',
    description:
      'توثيق استراتيجي وتنفيذي لإنشاء وتهيئة صفحة فيسبوك تجارية احترافية لخدمات تنجيد وتجديد الأثاث المنزلي (وش جديد مصطفى للأثاث). يركز على تحسين محركات البحث الداخلية لفيسبوك، ربط قنوات الاتصال الفورية (+201115869239)، واستعراض سابقة الأعمال لزيادة المبيعات المباشرة.',
    skills: ['Local Business Funnel', 'Facebook Page SEO', 'WhatsApp Direct Sales', 'Service Cataloging', 'Social Proof Setup'],
    objective:
      'تحويل الصفحة من مجرد بروفايل غير منظم إلى نقطة التقاط عملاء فعالة تستقبل استفسارات التنجيد والتفصيل وتحولها إلى زيارات وطلبات شراء فعلية.',
    concept:
      'تصميم مسار تحويل محلي بسيط وقوي: العميل يرى صور «قبل وبعد» لتجديد الأنتريهات → يقرأ المراجعات ورقم الهاتف الموثق → يضغط على زر الواتساب لإرسال صورة أثاثه والحصول على مقايسة فورية.',
    myRole:
      'مدير الحساب ومخطط مسار التحويل — تهيئة الصفحة، كتابة وصف الخدمات، إدراج معلومات الاتصال وساعات العمل، وتنسيق ألبومات سابقة الأعمال.',
    tools: ['Meta Business Suite', 'WhatsApp Business', 'Local SEO Optimization', 'PowerPoint Documentation'],
    deckFileName: 'Facebook_Business_Page_Optimization.pptx',
    pdfDownloadUrl: '/documents/Mohamed_Taher_Executive_Portfolio.pdf',
    pdfFileName: 'Facebook_Business_Page_Optimization.pdf',
    deckDownloadUrl: '/decks/Facebook_Business_Page_Optimization.pptx',
    deckSlides: [
      {
        slideNumber: 1,
        title: 'Facebook Page Creation & Optimization Deck',
        category: 'Local Business Setup',
        highlight: 'Commercial Implementation',
        points: [
          'توثيق إنشاء وتطوير صفحة تجارية لخدمات الأثاث المنزلي والتنجيد (وش جديد).',
          'ربط الهوية البصرية ببيانات التواصل الرسمية وكتالوج الخدمات التفصيلي.',
          'إعداد الطالب: محمد مصطفى طاهر سالم — كود: 21172333.',
        ],
      },
      {
        slideNumber: 2,
        title: 'Business Identity & Contact Channels',
        category: 'Business Profile',
        highlight: 'Verified Channels',
        points: [
          'اسم النشاط التجاري: وش جديد مصطفى للأثاث والتنجيد.',
          'الخدمات المعروضة: تفصيل وتجديد الأنتريهات، الركن، الستائر، وتفصيل الأثاث حسب الطلب.',
          'أرقام التواصل المباشرة: +201115869239 و +201110095403.',
        ],
        metrics: [
          { label: 'Followers Base', value: '520+ Followers' },
          { label: 'Service Niche', value: 'Custom Furniture' },
        ],
      },
      {
        slideNumber: 3,
        title: 'Page Architecture & WhatsApp Acquisition Funnel',
        category: 'Conversion Flow',
        highlight: 'Direct WhatsApp Leads',
        points: [
          'زر الإجراء الأساسي الموجه مباشرة لمحادثة واتساب مجهزة برسالة ترحيب مخصصة.',
          'تنسيق ألبومات الأعمال حسب فئات المنتجات لتسهيل تصفح العميل أثناء اتخاذ القرار.',
          'رابط الصفحة العام المتاح للعملاء: https://www.facebook.com/share/1LkCKcGVww/.',
        ],
      },
    ],
    process: [
      { step: '01. تهيئة البنية الأساسية', detail: 'تحديد فئة النشاط التجاري بدقة وإدخال بيانات الاتصال وأوقات العمل.' },
      { step: '02. تصميم مسار الواتساب', detail: 'ربط أزرار المراسلة المباشرة وتجهيز الردود السريعة لاستقبال المقايسات.' },
      { step: '03. تنظيم ألبومات الصور', detail: 'عرض نماذج حقيقية لأعمال التنجيد قبل وبعد لتعزيز مصداقية الخدمة.' },
    ],
    finalResult:
      'صفحة تجارية مكتملة البنية تستقبل طلبات العملاء بشكل دوري وتسهل التواصل المباشر مع أصحاب القرار.',
    image: furnitureFbThumb,
    galleryImages: [furnitureFbThumb],
    aspectRatio: '16:9',
    stats: [
      { label: 'Platform', value: 'Facebook Business' },
      { label: 'Conversion', value: 'WhatsApp Direct Leads' },
      { label: 'Scope', value: 'Full Page Architecture' },
    ],
    featured: false,
  },
  {
    id: 'depi-digital-marketing-capstone',
    tracks: ['Marketing Strategy', 'Content Creation'],
    title: 'DEPI Ministry of Communications: Digital Marketing Master Strategy',
    clientOrSpec: 'Strategic Blueprint',
    subtitle: 'Certified Capstone: SOSTAC Framework, Budgeting, Meta Ads & Omnichannel Growth',
    category: 'Marketing Strategy',
    tagline: 'الخطة الاستراتيجية الشاملة المعتمدة من مبادرة رواد مصر الرقمية (DEPI).',
    description:
      'الملف التنفيذي والاستراتيجي المعتمد والمقدم ضمن مبادرة رواد مصر الرقمية (DEPI) التابعة لوزارة الاتصالات وتكنولوجيا المعلومات. يغطي دراسة السوق، تقسيم الجماهير، إدارة الميزانيات، ونماذج العائد على الاستثمار الإعلاني.',
    skills: ['DEPI Certified Specialist', 'SOSTAC Model', 'Media Buying Economics', 'Omnichannel Strategy', 'KPI Benchmarking'],
    objective:
      'تطبيق أعلى المعايير المهنية والأكاديمية في صياغة الخطط التسويقية وحساب تكلفة العميل (CPA) وقيمة العميل الدائمة (LTV).',
    concept:
      'منهجية علمية صارمة تربط بين أبحاث السوق الميدانية في مصر وبين تكتيكات الحملات الرقمية على منصات ميتا وجوجل لتحقيق أعلى ربحية ممكنة.',
    myRole:
      'أخصائي التسويق الرقمي والمخطط الاستراتيجي المعتمد — كود الاعتماد الرسمي (ID: 21172333).',
    tools: ['SOSTAC Strategic Model', 'Meta Ads Planner', 'Budget Allocation Sheets', 'Executive PDF Documentation'],
    deckFileName: 'DEPI_Digital_Marketing_Certification_Work.pdf',
    pdfDownloadUrl: '/documents/DEPI_Digital_Marketing_Certification_Work.pdf',
    pdfFileName: 'DEPI_Digital_Marketing_Certification_Work.pdf',
    deckDownloadUrl: '/documents/DEPI_Digital_Marketing_Certification_Work.pdf',
    deckSlides: [
      {
        slideNumber: 1,
        title: 'DEPI Digital Marketing Master Strategy & Capstone',
        category: 'Government Initiative',
        highlight: 'Ministry of ICT',
        points: [
          'برنامج مكثف ومعتمد في التخطيط التسويقي الاستراتيجي من وزارة الاتصالات وتكنولوجيا المعلومات.',
          'التركيز على مهارات القيادة التسويقية، اقتصاديات الإعلانات الرقمية، وإدارة ميزانيات الشركات.',
          'كود الاعتماد الرسمي: 21172333 — محمد مصطفى طاهر سالم.',
        ],
      },
      {
        slideNumber: 2,
        title: 'End-to-End SOSTAC Strategic Execution',
        category: 'Methodology',
        highlight: '6 Pillars',
        points: [
          'Situation: تحليل دقيق للوضع الراهن والبيئة التنافسية في السوق المصري.',
          'Objectives: صياغة أهداف ذكية SMART تربط بين الوصول والمبيعات.',
          'Strategy & Tactics: التموضع التسويقي وهندسة مسارات التحويل.',
          'Action & Control: مصفوفة المسؤوليات الأسبوعية وضبط مؤشرات الأداء الحيوية.',
        ],
      },
      {
        slideNumber: 3,
        title: 'Campaign Financials & Budget Allocation Rules',
        category: 'Media Buying & ROI',
        highlight: 'ROAS & CPA Control',
        points: [
          'توزيع الميزانية الإعلانية وفق قاعدة 70% للاستحواذ، 20% لإعادة الاستهداف، و10% للاختبار.',
          'حساب تكلفة النقرة (CPC) وتكلفة الاكتساب (CPA) وقيمة دورة حياة العميل (LTV).',
          'قواعد صارمة لإيقاف أو مضاعفة ميزانيات الحملات الإعلانية بناءً على الأرقام الحقيقية.',
        ],
      },
    ],
    process: [
      { step: '01. اعتماد البرنامج', detail: 'اجتياز المسار المتقدم للتسويق الرقمي من مبادرة رواد مصر الرقمية.' },
      { step: '02. إعداد المخطط الشامل', detail: 'تطبيق نماذج SOSTAC و SCQA على مشاريع واقعية في السوق المصري.' },
      { step: '03. مراجعة واختبار الميزانيات', detail: 'محاكاة توزيع الميزانيات وتحقيق أعلى عائد استثماري إعلاني.' },
    ],
    finalResult:
      'اعتماد استراتيجي رسمي يوثق الجاهزية لقيادة الحملات التسويقية للشركات الكبرى والناشئة بكفاءة عالية.',
    image: depiCapstoneThumb,
    galleryImages: [depiCapstoneThumb],
    aspectRatio: '16:9',
    stats: [
      { label: 'Initiative', value: 'MCIT DEPI Egypt' },
      { label: 'Credential ID', value: 'ID: 21172333' },
      { label: 'Methodology', value: 'Advanced SOSTAC' },
    ],
    featured: true,
  },
  {
    id: 'spiro-spathis-commercial',
    tracks: ['AI Content', 'Videos', 'Dubbing & Audio'],
    title: 'Spiro Spathis (سبيرو سباتس)',
    clientOrSpec: 'Commercial Campaign',
    subtitle: '«الأصل بيكمل معانا» • Cinematic Egyptian Heritage TVC',
    category: 'AI Commercial',
    tagline: 'سبيرو سباتس — الأصل طعمه مبيتغيرش، وبيرجع أقوى.',
    description:
      'إعلان تجاري سينمائي عالي الطاقة لعلامة سبيرو سباتس التاريخية، يجمع بين نبض الشارع المصري، لمة الصحاب، وانتعاش الصودا الأصلية بمؤثرات صوتية ومونتاج سريع.',
    skills: ['Creative Direction', 'AI Commercial Video', 'Sound Design & Foley', 'Brand Identity', 'Pacing & Editing'],
    objective:
      'إعادة إحياء وتصدر علامة سبيرو سباتس كرمز للفخر والانتماء الوطني المصري عبر إعلان فيديو سريع يخاطب جيل الشباب ويربط متعة اللحظة بتجربة المنتج المنعشة.',
    concept:
      '“الأصل بيكمل معانا”: سيمفونية بصرية وصوتية بين أصوات فتح العبوات وفقاعات الصودا وتجمع الأصدقاء في شوارع القاهرة التاريخية، مصحوبة بإيقاع سريع وتلوين سينمائي مشبع.',
    myRole:
      'المخرج الإبداعي ومصمم الصوت ومونتير الإعلان — ابتكار الفكرة، توليد المشاهد السينمائية بالذكاء الاصطناعي، وهندسة شريط الصوت والمؤثرات الواقعية.',
    tools: ['AI Video Generation', 'CapCut (Pacing & Sound Design)', 'Adobe Audition (Sound FX)', 'Prompt Engineering'],
    process: [
      { step: '01. الفكرة والعمق الثقافي', detail: 'دراسة نوستالجيا الشارع المصري وارتباط اسم سبيرو سباتس بالهوية واللمة.' },
      { step: '02. المؤثرات البصرية وتفاصيل المنتج', detail: 'توليد لقطات ماكرو واقعية لقطرات الندى على الزجاج، وتطاير فقاعات الصودا مع فتح الغطاء.' },
      { step: '03. الإيقاع وهندسة الصوت', detail: 'بناء تراك صوتي ديناميكي يبدأ بصوت الطرقعة وينتهي بإيقاع صيفي عصري يجذب الانتباه.' },
      { step: '04. التلوين والإخراج النهائي', detail: 'تلوين سينمائي دافئ يعكس روح شمس مصر وجمال ألوان مشروب سبيرو سباتس.' },
    ],
    finalResult:
      'إعلان تجاري عالي الجودة والدقة جاهز للنشر على قنوات التواصل والتلفزيون، يبرز القوة البصرية للمنتج ويثير الرغبة الفورية في التجربة.',
    image: spiroPoster,
    videoUrl: spiroVideo,
    aspectRatio: '16:9',
    stats: [
      { label: 'Brand', value: 'Spiro Spathis' },
      { label: 'Campaign Angle', value: 'الأصل بيكمل معانا' },
      { label: 'Quality', value: 'Cinematic 4K Audio-Visual' },
    ],
    featured: true,
  },
  {
    id: 'buffalo-burger-commercial',
    tracks: ['Videos', 'Photography'],
    title: 'Buffalo Burger (بافلو برجر)',
    clientOrSpec: 'Commercial Campaign',
    subtitle: '«The Anatomy of a Craving» • High-Velocity Fast-Casual Food TVC',
    category: 'Food Advertising',
    tagline: 'طعم أصيل ومونتاج ناري يثير الشهية من أول ثانية.',
    description:
      'إعلان تجاري سريع ومكثف لعلامة بافلو برجر، يركز على لقطات الماكرو الحارة للجبن الذائب والبرجر المشوي مع مونتاج سريع يرفع إفراز الدوبامين والرغبة الفورية في الطلب.',
    skills: ['Food Advertising', 'Macro Food Direction', 'Visual Speed Ramping', 'Sound FX & Crunch Foley', 'Short-Form Hooks'],
    objective:
      'تحفيز الشهية الفورية ودفع المستخدم لطلب الوجبة مباشرة عبر منصات التواصل (Reels & TikTok) باستخدام تقنيات التصوير البطيء والانتقالات السريعة.',
    concept:
      '«The Anatomy of a Craving»: استعراض ناري لمراحل إعداد الساندوتش بلقطات مقربة جداً تُبرز تفاصيل اللحم والصلصات وتطاير بذور السمسم مع إيقاع صوتي متفجر.',
    myRole:
      'المخرج والمونتير الإعلاني — ضبط توقيتات التقطيع (0.8 ثانية لكل لقطة)، هندسة مؤثرات القرمشة والصوت، وتوليد المشاهد الحركية بدقة فائقة.',
    tools: ['AI Video Generation', 'CapCut Pro (Speed Ramping)', 'Macro Sound Design', 'Cinematic Color Grading'],
    process: [
      { step: '01. هندسة الهوك النفسي', detail: 'بدء الفيديو فوراً بلقطة سريعة لقطع الجبن الذائب وانفجار النكهة لجذب الانتباه في أول ثانية.' },
      { step: '02. إبراز تفاصيل اللحم والخبز', detail: 'توليد زوايا ماكرو تبرز لمعان الخبز المحمص واللحم المشوي على اللهب.' },
      { step: '03. مزامنة الإيقاع الحركي', detail: 'ربط ضربات الموسيقى بحركة السكاكين ورشة الصوص وصوت القرمشة.' },
    ],
    finalResult:
      'إعلان رأسي عالي التحويل لمنصات إنستغرام وتيك توك يعزز مكانة بافلو برجر كخيار أول لعشاق البرجر الفاخر.',
    image: buffaloPoster,
    videoUrl: buffaloVideo,
    aspectRatio: '9:16',
    stats: [
      { label: 'Brand', value: 'Buffalo Burger' },
      { label: 'Format', value: 'Vertical Reel 9:16' },
      { label: 'Primary KPI', value: 'Appetite & Instant Orders' },
    ],
    featured: true,
  },
  {
    id: 'breadfast-campaign',
    tracks: ['Videos', 'Content Creation'],
    title: 'Breadfast — Breakfast, Delivered When Your Morning Starts Late',
    clientOrSpec: 'Spec Project',
    subtitle: 'Spec Advertising Campaign · Food Delivery · Short-form Video',
    category: 'Food Advertising',
    tagline: 'Your morning can start late, but breakfast does not have to.',
    description: 'A short-form Egyptian breakfast delivery concept built around a late morning, a missed breakfast and a fast product payoff.',
    skills: ['Creative Advertising', 'Video Storytelling', 'Product Reveal', 'Voice-over Direction', 'CTA Structure'],
    objective: 'Create an Egyptian breakfast delivery advertisement built around a relatable morning problem.',
    concept: 'A young man wakes up late, rushes out without breakfast, stays connected with his friends, and eventually catches up with a Breadfast delivery.',
    myRole: 'Creative Concept, Story Editing, Voice-over Direction, Music Direction, Video Editing, Motion Zooms, Product Reveal and CTA Structure.',
    tools: ['CapCut Pro', 'Canva Pro', 'AI Creative Tools', 'Audio Editing'],
    process: [
      { step: '01. Relatable Morning Problem', detail: 'A young man wakes up late and rushes out without breakfast.' },
      { step: '02. Dynamic Voice-over & Dialogue', detail: 'Egyptian colloquial dialogue, opening voice-over, and original music.' },
      { step: '03. Delivery Payoff & CTA', detail: 'Breadfast delivery bag reveal, fresh breakfast payoff, and clear call-to-action.' },
    ],
    finalResult: 'A relatable Egyptian morning story turned into a food-delivery campaign. The edit uses natural dialogue, fast pacing, subtle digital zooms, original music and a product-focused ending to move from problem to payoff.',
    image: breadfastCover,
    aspectRatio: '9:16',
    stats: [
      { label: 'Format', value: 'Short-form Video 9:16' },
      { label: 'Language', value: 'Egyptian Arabic Dialogue' },
      { label: 'Payoff', value: 'Fresh Breakfast CTA' },
    ],
    featured: true,
  },
  {
    id: 'talabat-delivery-tvc',
    tracks: ['Videos', 'Dubbing & Audio'],
    title: 'Talabat (طلبات) — «يوم واحد من غير طلبات»',
    clientOrSpec: 'Commercial Campaign',
    subtitle: 'High-Velocity Food Delivery TVC • إعلان تجاري سريع لتطبيق طلبات',
    category: 'Food Advertising',
    tagline: 'في ثواني.. الطلب على بابك مع طلبات.',
    description:
      'إعلان تجاري سريع وممتع يبرز دور خدمة التوصيل كمنقذ لحظات الجوع والمواقف المفاجئة في البيت والعمل المصري.',
    skills: ['Advertising', 'Storytelling', 'Scriptwriting', 'AI Video', 'Sound Design', 'Editing'],
    objective:
      'التواصل مع الجمهور المصري بروح الفكاهة والسرعة، وإظهار التباين بين فوضى الجوع المفاجئ وبين الراحة الفورية بمجرد رنة جرس مندوب طلبات.',
    concept:
      'مونتاج كوميدي وسريع لمواقف يومية مصرية مألوفة — الثلاجة الفاضية، خناقات الأكل العائلية، وسهرات المذاكرة — تُحل جميعها بظهور مندوب طلبات بسترته البرتقالية المنقذة.',
    myRole:
      'كاتب الاسكريبت ومونتير الفيديو الإعلاني — ابتكار الهوك السريع، هندسة أصوات تحمير الأكل والقرمشة، والمونتاج الإيقاعي السريع.',
    tools: ['CapCut Pro', 'Canva Pro', 'AI Video Tools', 'Egyptian Colloquial Copywriting', 'Macro Food Foley'],
    process: [
      { step: '01. الرؤية الإنسانية والفكاهة', detail: 'رصد نقاط الاحتكاك اليومية في البيت المصري وتأخير وجبات الغداء والعشاء.' },
      { step: '02. الهوك والمونتاج السريع', detail: 'بناء تسلسل سردي يبدأ بالصدمة، يتصاعد مع الجوع، وينتهي بالحل السعيد.' },
      { step: '03. اللقطات الشهية والمؤثرات', detail: 'إبراز لقطات سينمائية مقربة للأطعمة الشهية وصوت رنة الباب الشهيرة.' },
    ],
    finalResult:
      'إعلان إيقاعي جذاب يعزز ارتباط الجمهور المصري بتطبيق طلبات ويزيد من الرغبة في الطلب الفوري.',
    image: foodDeliveryPoster,
    videoUrl: foodDeliveryVideo,
    aspectRatio: '16:9',
    stats: [
      { label: 'Format', value: 'High-Velocity TVC' },
      { label: 'Audience Tone', value: 'Egyptian Humor & Craving' },
      { label: 'Pacing', value: 'Fast Cut Macro Editing' },
    ],
    featured: true,
    driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
  },
  {
    id: 'baba-geh-campaign',
    tracks: ['Videos', 'Dubbing & Audio', 'Content Creation', 'AI Content'],
    title: 'Baba Geh (بابا جه) — Montage & Viral Reels Cut',
    clientOrSpec: 'Commercial Campaign',
    subtitle: '«أب للإيجار... بس بمشاعر حقيقية» • 60s Fast-Cut Viral Reel & Audio Sync',
    category: 'Short-Form Video',
    tagline: 'بابا جه — الكوميديا الذكية والمشاعر اللي بتلمس كل بيت مصري.',
    description:
      'سلسلة مقاطع وفيديوهات إعلانية وترفيهية سريعة الإيقاع لفكرة ومسلسل «بابا جه»، تركز على المفارقات الكوميدية وسيكولوجية العلاقات الأسرية، مع مونتاج سينمائي وهندسة صوتية ودوبلاج جذاب لمخاطبة منصات السوشيال ميديا والتيك توك.',
    skills: ['Creative Video Editing', 'Comedy Pacing & Timing', 'Sound Design & Foley', 'Social Hooks Engineering', 'Dialogue Sync'],
    objective:
      'تحقيق أعلى معدلات انتشار وتفاعل عاطفي وكوميدي (Viral Engagement) عبر مقاطع ريلز وفيديوهات قصيرة تبرز المفارقات الساخرة بحبكة إيقاعية مشوقة.',
    concept:
      'مفارقة «أب للإيجار»: بناء مواقف طريفة وسريعة بين متطلبات الأبناء والمواقف غير المتوقعة، مصحوبة بوقفات كوميدية دقيقة ومؤثرات صوتية تعزز التفاعل.',
    myRole:
      'المونتير الإبداعي ومصمم الصوت وهندسة الخطافات السريعة (Viral Hooks) ومزامنة الحوار والمؤثرات الصوتية الواقعية.',
    tools: ['CapCut Pro', 'Adobe Premiere Pro', 'Sound Design & Foley', 'TikTok & Reels Trend Engineering'],
    process: [
      { step: '01. استخراج الخطافات الكوميدية', detail: 'انتقاء أكثر الجمل الحوارية والمواقف الساخرة ذات التأثير الفوري في أول 3 ثوانٍ.' },
      { step: '02. ضبط توقيت الـ Punchline', detail: 'مونتاج سريع مع وقفات كوميدية دقيقة ومؤثرات صوتية (Foley FX) تعزز الضحك والتفاعل.' },
      { step: '03. التصميم البصري والألوان', detail: 'تلوين دافئ يعكس روح البيت المصري مع نصوص متحركة بارزة (Dynamic Kinetic Subtitles).' },
      { step: '04. تصدير المنصات وتوجيه المشاركات', detail: 'صياغة صيغ النشر (9:16) مع هاشتاجات التريند وتوجيه الجمهور للتعليق والمشاركة.' },
    ],
    finalResult:
      'سلسلة مقاطع ترفيهية وكوميدية متقنة الإخراج تجمع بين سرعة الانتشار والجودة العالية والإيقاع المشوق مدتها دقيقة كاملة.',
    image: babaGehThumb1,
    reelImage: babaGehThumb1,
    galleryImages: [babaGehThumb1, babaGehThumb2, babaGehPoster],
    videoUrl: '/videos/baba_geh_montage.mp4',
    aspectRatio: '9:16',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19xsfCc4ThGEilh9GoEQSaQgo5TARk00C',
    stats: [
      { label: 'Cut Duration', value: '60s Full Reel' },
      { label: 'Aspect Ratio', value: 'Vertical 9:16' },
      { label: 'Audio Pacing', value: 'Sync Beats & Foley' },
    ],
    featured: true,
  },
  {
    id: 'baba-geh-pro-edition',
    tracks: ['Videos', 'Dubbing & Audio', 'Content Creation'],
    title: 'Baba Geh (بابا جه) — Pro Narrative Cut (المونتاج الدرامي)',
    clientOrSpec: 'Commercial Campaign',
    subtitle: '«الكوميديا والمفارقة الأسرية» • 45s High-Pacing Storytelling Cut',
    category: 'Short-Form Video',
    tagline: 'بابا جه — أب للإيجار... بس بضحكة ومشاعر من القلب.',
    description:
      'مونتاج درامي وكوميدي احترافي لمسلسل «بابا جه»، يركز على إيقاع المشاهد، هندسة وتوزيع الحوار الكوميدي، وانتقالات الماتش-كت السلسة بين ردود الفعل والمفارقات اليومية مع شريط صوتي فائق النقاء.',
    skills: ['Narrative Video Editing', 'Comedy Timing', 'Sound Design & Foley', 'Dramatic Dialogue Pacing', 'Color Mood Grading'],
    objective:
      'إبراز القوة التعبيرية للمشاهد التمثيلية والمواقف الكوميدية في صيغة فيديو ريلز مكثفة تحقق أعلى معدل إكمال ومشاهدة للنهاية.',
    concept:
      'بناء تسلسل سردي يبدأ بالورطة وينتهي بالحل الكوميدي غير المتوقع، مدعوماً بهندسة صوتية دقيقة ومؤثرات تبرز الـ Punchlines المضحكة.',
    myRole:
      'المونتير الإبداعي ومصمم الصوت — تقطيع المشاهد، ضبط التوقيت الكوميدي بدقة الفريم، ومعايرة الصوت والمؤثرات الواقعية.',
    tools: ['CapCut Pro', 'Adobe Premiere Pro', 'Sound Beat Foley', 'Cinematic Dialogue Sync'],
    process: [
      { step: '01. فرز واختيار المشاهد الذهبية', detail: 'فرز ساعات المادة المصورة واقتناص ألمع المشاهد الكوميدية الأكثر تأثيراً وجاذبية.' },
      { step: '02. تقطيع الفريمات وضبط الرتم', detail: 'تقطيع الحوار والمشاهد بدقة الفريم لخلق إيقاع سريع وممتع دون إخلال بالمعنى الدرامي.' },
      { step: '03. التصميم الصوتي المحاكي', detail: 'إضافة مؤثرات صوتية مضحكة وخلفية موسيقية تتصاعد مع تأزم الموقف وتنفجر مع الحل.' },
      { step: '04. التصدير والمعايرة الرأسية', detail: 'إخراج الفيديو بنسبة 9:16 مع نقاء صوتي فائق (96kHz Master) متوافق مع كافة المنصات.' },
    ],
    finalResult:
      'فيديو ريلز درامي كوميدي مدته 45 ثانية يجسد الاحترافية في فن المونتاج والقص السردي الممتع مع شريط صوتي سينمائي.',
    image: babaGehThumb2,
    reelImage: babaGehThumb2,
    galleryImages: [babaGehThumb2, babaGehThumb1, babaGehPoster],
    videoUrl: '/videos/baba_geh_pro.mp4',
    aspectRatio: '9:16',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19xsfCc4ThGEilh9GoEQSaQgo5TARk00C',
    stats: [
      { label: 'Cut Style', value: '45s Pro Narrative' },
      { label: 'Audio Master', value: '96kHz Crisp Foley' },
      { label: 'Pacing', value: 'Dynamic Cuts & Sync' },
    ],
    featured: true,
  },
  {
    id: 'takaa-capcut-viral-template',
    tracks: ['Videos', 'Content Creation', 'AI Content'],
    title: 'TAKAA CapCut Viral Pop-Reveal Reel (قالب تاكة الفيروسي)',
    clientOrSpec: 'Commercial Campaign',
    subtitle: '«Zoom-Punch Pop-Reveal Mechanics» • High-Engagement Short-Form Video',
    category: 'Short-Form Video',
    tagline: 'مودك ناقصه تاكة — الانتقال السريع بين الملل والانتعاش الفوري.',
    description:
      'قالب ومحتوى فيديو ريلز رأسي صُمم وفق سيكولوجية الخطافات البصرية السريعة (3-Second Hook) مع مؤثرات الانتقال الإيقاعي Zoom-Punch على تريندات التيك توك وإنستغرام ريلز.',
    skills: ['CapCut Pro Dynamics', 'Viral Hook Engineering', 'Audio Match Beats', 'High-Pacing Editing', 'Sound FX'],
    objective:
      'تحقيق انتشار فيروسي عضوي لعلامة تاكة من خلال إتاحة قالب كاب كات تفاعلي يمكن للمتابعين وصناع المحتوى استخدامه بسهولة لإنشاء فيديوهاتهم الخاصة وربطها بالتريند.',
    concept:
      'سيكولوجية التحول: يبدأ الفيديو بلقطة تعبر عن خمول اليوم أو التشتت، ثم بضغطة زر وتأثير بوب سريع تتفجر علبة تاكة وتملأ الشاشة بالألوان والحيوية والطاقة.',
    myRole:
      'مونتير ومصمم القالب الفيروسي — ضبط الإيقاع على النبضات الصوتية (Beat Synced)، تصميم خطافات التوقف أثناء التمرير (Stop-Scroll Hooks)، وإخراج النسخة النهائية بجودة 4K عمودية.',
    tools: ['CapCut Pro', 'Adobe Premiere Pro', 'Sound Beat Synchronization', 'Generative Motion FX'],
    process: [
      { step: '01. تحليل تريندات التيك توك', detail: 'دراسة أشهر الإيقاعات والحركات البصرية ذات معدل الإكمال العالي (High Retention Rate) في مصر والعالم العربي.' },
      { step: '02. هندسة خطاف الـ 3 ثواني', detail: 'تصميم أول ثانيتين بحركة زوم سريعة وتباين لوني قوي يجبر المستخدم على التوقف وعدم التمرير.' },
      { step: '03. ضبط الإيقاع والمؤثرات الصوتية', detail: 'توليد أصوات فرقعة وفقاعات وتزامنها ميلي-ثانية بميلي-ثانية مع ظهور كانز تاكة باللون البرتقالي والبنفسجي.' },
      { step: '04. التصدير واختبار معدل التفاعل', detail: 'إخراج الفيديو بنسب 9:16 مع إرشادات نشر الهاشتاجات وزر استخدام القالب (Use Template).' },
    ],
    finalResult:
      'فيديو ريلز عالي الجاذبية والبصرية جاهز للنشر وتحقيق معدلات تفاعل ومشاركات مضاعفة مقارنة بالمحتوى التقليدي.',
    image: takaaCapcutPoster,
    videoUrl: takaaCapcutVideo,
    aspectRatio: '9:16',
    stats: [
      { label: 'Format', value: 'Vertical 9:16 Reels' },
      { label: 'Retention Hook', value: '< 2.1s Trigger' },
      { label: 'Template Engine', value: 'CapCut Viral Sync' },
    ],
    featured: true,
  },
  {
    id: 'level-fitness-spec',
    tracks: ['Marketing Strategy', 'Content Creation'],
    title: 'Level Fitness: First rep, not perfect rep (ابدأ بخطوة صغيرة)',
    clientOrSpec: 'Spec Project',
    evidenceStatus: 'Spec Concept',
    evidenceLabelAr: 'مفهوم حملة مقترح · Spec Concept',
    subtitle: '«Your First Rep Counts» • WhatsApp Trial-Session Funnel & Meta Ads Plan',
    category: 'Marketing Strategy',
    tagline: 'ابدأ بخطوة صغيرة.. أول عدة هي الأهم، مش العدة المثالية.',
    description:
      'خطة حملة إعلانية مقترحة (Spec Campaign Plan) لنادي Level Fitness تركز على إزالة حاجز التردد والرهبة لدى المبتدئين وتحويلهم إلى طلب جلسة تجريبية عبر الواتساب دون ادعاءات تحول مبالغ فيها.',
    skills: ['Funnel Architecture', 'Meta Ads Campaign Structure', 'Copywriting for Friction Removal', 'WhatsApp Lead Routing'],
    objective:
      'توليد استفسارات لحجز جلسات تجريبية موثوقة (Trial Sessions) عبر الواتساب في النطاق الجغرافي الفعلي للنادي، مع تأكيد المواعيد والأسعار قبل الإطلاق.',
    concept:
      '“Your First Rep Counts” / «ابدأ بخطوة صغيرة»: التركيز على بيئة تدريب مرحبة، ومدرب يشرح ببساطة، بدلاً من أسلوب التخويف أو وعود النتائج المستحيلة.',
    myRole:
      'مخطط الحملة وكاتب الإعلانات المقترح — هندسة مسار الإعلانات واختبار الخطافات (A/B Test Hooks) ورسائل الرد الفوري للواتساب.',
    tools: ['Meta Ads Manager Structure', 'WhatsApp Business Routing', 'Funnel Blueprint', 'Local Catchment Segmentation'],
    process: [
      { step: '01. تحديد الجمهور الجغرافي', detail: 'استهداف البالغين 18+ في المحيط الفعلي للنادي وتقسيم الرسائل بين المبتدئين والعائدين للتمرين.' },
      { step: '02. صياغة الخطاف الترحيبي', detail: 'استخدام هوك «ابدأ بخطوة صغيرة» لإزالة التردد والرهبة من اليوم الأول في الجيم.' },
      { step: '03. ضبط مسار الواتساب المباشر', detail: 'توجيه النقرات إلى نموذج محادثة محدد يسأل عن أول زيارة والجدول الأنسب للعميل.' },
      { step: '04. القياس ومؤشرات الأداء', detail: 'متابعة سرعة الرد، معدل الحضور الفعلي للجلسة، وتكلفة الاستفسار المؤهل (Qualified Enquiry).' },
    ],
    finalResult:
      'مسار تسويقي مقترح جاهز للاختبار الفعلي فور تحديد الموقع الدقيق والميزانية، يلتزم بالصدق الإعلاني دون ادعاء نتائج سابقة.',
    image: takaaCapcutPoster,
    aspectRatio: '4:3',
    guardrailNote: 'Spec concept only · No live campaign, location, ad set or performance data is claimed. A Level-specific visual is required before presentation as executed work.',
    stats: [
      { label: 'Status', value: 'Spec Concept' },
      { label: 'Hook', value: 'ابدأ بخطوة صغيرة' },
      { label: 'CTA', value: 'اسأل عن أول زيارة' },
    ],
    featured: false,
  },
  {
    id: 'wojooh-tourism-spec',
    tracks: ['Content Creation', 'Videos', 'Marketing Strategy'],
    title: 'WOJOOH: Tourism, told through local eyes (السياحة بعيون أهل البلد)',
    clientOrSpec: 'Spec Project',
    evidenceStatus: 'Spec Concept',
    evidenceLabelAr: 'مفهوم استراتيجي ذاتي · Spec Concept',
    subtitle: '«See the city through the people who live it» • Experiential Local Tourism Series',
    category: 'Content Creation',
    tagline: 'تفاصيل المكان لا تُحفظ في قائمة المعالم.. تُعاش في حكايات أهله وطقوسهم اليومية.',
    description:
      'مفهوم استراتيجي ذاتي المبادرة لمحتوى السياحة التجريبية (Self-Initiated Strategy Concept) يبتعد عن استعراض المعالم التقليدي ويقدم القاهرة كمسارات إنسانية حية يقودها صناع المحتوى المحليون.',
    skills: ['Cultural Storytelling', 'Short-Form Narrative', 'Destination Content Architecture', 'Route-Based Discovery'],
    objective:
      'بناء سلسلة محتوى ترفع الرغبة في خوض التجارب المحلية وتدفع الزائر لحفظ المسارات المقترحة وزيارة صفحة الحجز المباشر.',
    concept:
      '“See the city through the people who live it”: كل حلقة يقودها مرشد أو صانع حرفة مصري يكشف تفصيلة واحدة دافئة (مقهى قديم، مسار مشي، نكهة مخبوزات).',
    myRole:
      'مبتكر المفهوم ومهندس استراتيجية المحتوى — تصميم هيكل الحلقات القصيرة، وربط الفيديو بصفحة الخريطة الرقمية التفاعلية.',
    tools: ['Content Mapping', 'Reels / TikTok Strategy', 'Searchable Guide Architecture', 'Creator Partnership Guidelines'],
    process: [
      { step: '01. استخراج الرؤية الثقافية', detail: 'الجمهور يتذكر ملمس المكان والطقوس اليومية أكثر من مجرد قائمة بالآثار الصامتة.' },
      { step: '02. تصميم الحلقات القصيرة', detail: 'هندسة كل حلقة لتركز على شخصية محلية واحدة وحكاية إنسانية قابلة للاكتشاف والتجربة.' },
      { step: '03. ربط الفيديو بمسار عملي', detail: 'وضع دعوة واضحة لحفظ المسار (Save Route) والاطلاع على الخريطة وساعات العمل.' },
      { step: '04. القياس الصادق', detail: 'قياس نقرات حفظ المسار والخرائط وزيارات صفحة الدليل قبل الإنفاق على الترويج الممول.' },
    ],
    finalResult:
      'رؤية إبداعية لسياحة حقيقية ملهمة ومجهزة للتنفيذ فور التعاون مع الجهات السياحية أو الثقافية المعنية.',
    image: qaimEditorial1,
    aspectRatio: '4:3',
    guardrailNote: 'Spec concept · Validate actual destination, access, safety, permissions and brand identity before any public use.',
    stats: [
      { label: 'Status', value: 'Spec Concept' },
      { label: 'Core Angle', value: 'Local Human Stories' },
      { label: 'Key Action', value: 'Save Route & Map' },
    ],
    featured: false,
  },
  {
    id: 'golden-sun-spec',
    tracks: ['Dubbing & Audio', 'Videos', 'AI Content'],
    title: 'Golden Sun: A story built around the last light (حكاية آخر خيوط الضوء)',
    clientOrSpec: 'Spec Project',
    evidenceStatus: 'Spec Concept',
    evidenceLabelAr: 'معالجة فيديو وصوت مقترحة · Spec Concept',
    subtitle: '«20s Sunset Storyboard & Egyptian Arabic Synthetic Narration»',
    category: 'Dubbing & Audio',
    tagline: 'في آخر اليوم، لما الشمس تلمس البحر.. بنفتكر إن أحلى الحكايات بتبدأ من لحظة هدوء.',
    description:
      'معالجة فيديو وسرد إعلاني مقترح (Spec Video-Story Treatment) يجمع بين تصوير لحظات الغروب الساحلية وسيناريو فويس أوفر دافئ باللهجة المصرية لنقل شعور بالسكينة والانتماء.',
    skills: ['Poetic Voiceover Scripting', 'Pacing & Micro-Storyboard', 'Atmospheric Foley Design', 'Golden Hour Art Direction'],
    objective:
      'اختبار قدرة الإلقاء الصوتي المصري والمؤثرات الصوتية الطبيعية على إيقاف التمرير وبناء علاقة عاطفية فورية مع المستمع في 20 ثانية.',
    concept:
      'اللحظة الذهبية: الانتقال من صخب النهار إلى هدوء المغيب على الشاطئ، مصحوباً بحديث هادئ يلامس الوجدان.',
    myRole:
      'كاتب السيناريو ومصمم شريط الصوت المقترح — صياغة النص، توزيع التوقيتات بالثواني، وهندسة الأجواء الشاطئية المحيطة.',
    tools: ['Script Timing (20s)', 'Sound Bed Design', 'Synthetic Audio Demo', 'Moodboard Storyboard'],
    voiceoverScript: [
      { time: '00:00 - 00:03', ar: 'في آخر اليوم، لما الشمس تلمس البحر..', en: 'At the end of the day, when the sun kisses the sea..' },
      { time: '00:03 - 00:07', ar: 'بنفتكر إن أحلى الحكايات بتبدأ من لحظة هدوء.', en: 'We remember that the best stories start with a quiet breath.' },
      { time: '00:07 - 00:13', ar: 'خطوة على الرمل، وضحكة من بعيد..', en: 'A step on the sand, distant laughter..' },
      { time: '00:13 - 00:20', ar: 'ووقت نعيشه على مهله.', en: 'And time lived gently, without rush.' },
    ],
    storyboard: [
      { scene: '01 (00:00 - 00:03)', visual: 'Day winds down, sunset glow over horizon', focus: 'Atmosphere setting' },
      { scene: '02 (00:03 - 00:07)', visual: 'Footsteps toward the gentle shore waves', focus: 'Human touch & presence' },
      { scene: '03 (00:07 - 00:13)', visual: 'A shared quiet smile, wind in the hair', focus: 'Relatable emotion' },
      { scene: '04 (00:13 - 00:20)', visual: 'Golden light reflection & brand lock-up', focus: 'Brand resonance & CTA' },
    ],
    process: [
      { step: '01. كتابة النص الشاعري البسيط', detail: 'اختيار مفردات مصرية يومية أصيلة ومؤثرة دون استعلاء أو مبالغة بيعية.' },
      { step: '02. تصميم الستوري بورد في 20 ثانية', detail: 'تقسيم المشاهد زمنياً لضمان تطابق نبرة الصوت مع حركة الأمواج وإضاءة الغروب.' },
      { step: '03. هندسة المؤثرات الصوتية', detail: 'اقتراح تراك صوتي ناعم يمزج بين هدير البحر الخافت ونسيم الهواء الخفيف.' },
      { step: '04. مراجعة الإسناد والشفافية', detail: 'توضيح أن المفهوم تجريبي ولم يُنسب لمنتج محدد قبل التعاقد والاعتماد الرسمي.' },
    ],
    finalResult:
      'نموذج سرد قصصي مصري مكتمل العناصر الإعلانية يبرز إتقان كتابة الفويس أوفر والتناغم الصوتي والبصري.',
    image: v7Poster,
    aspectRatio: '16:9',
    guardrailNote: 'Synthetic narration concept · Not a real brand voice, published film or client result. Confirm category, product truth and CTA before live use.',
    stats: [
      { label: 'Status', value: 'Spec Concept' },
      { label: 'Duration', value: '20s Storyboard' },
      { label: 'Dialect', value: 'Egyptian Arabic VO' },
    ],
    featured: false,
  },
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Strategy',
    subtitle: 'بناء خطط النمو التسويقي المدروسة المبنية على أرقام السوق وسلوك المستهلك المصري.',
    iconName: 'TrendingUp',
    items: [
      'تطبيق نموذج SOSTAC المتكامل للحملات التجارية (Situation, Objectives, Strategy, Tactics, Actions, Control)',
      'تطوير سردية الـ SCQA للمنتجات والخدمات (Situation, Complication, Question, Answer)',
      'بحوث السوق وتقدير حجم الفرص (Market Sizing & E-Commerce GMV Analysis)',
      'التدقيق التنافسي الشامل (Competitor Benchmarking & Gap Analysis)',
      'هندسة مسارات الاستحواذ والتحويل وصفحات فيسبوك (Conversion Funnels & Meta Pages)',
      'تحديد وتحليل شرائح الجمهور المستهدف وبناء الـ Buyer Personas',
    ],
  },
  {
    id: 'ai-commercials',
    title: 'AI Video Commercials & TVCs',
    subtitle: 'إنتاج إعلانات تجارية سينمائية فائقة الجودة بتقنيات الذكاء الاصطناعي في وقت قياسي.',
    iconName: 'Film',
    items: [
      'توليد المشاهد السينمائية بجودة 4K وإضاءة متسقة',
      'ابتكار الاسكريبتات والتعليق الصوتي باللهجة المصرية الحية',
      'بناء عوالم بصرية واقعية (أجواء القاهرة، الشوارع، لقطات الماكرو)',
      'إعلانات المنتجات الاستهلاكية (المشروبات، الهواتف، الأغذية، الأزياء)',
      'إنتاج ستوري بورد كامل للمشاهد قبل التنفيذ الفعلي',
      'خفض تكاليف وأوقات الإنتاج التقليدية من شهور إلى 48 ساعة فقط',
    ],
  },
  {
    id: 'short-form-video',
    title: 'Short-Form Video & Viral Hooks',
    subtitle: 'صناعة محتوى ريلز وتيك توك يوقف التمرير ويحقق أعلى معدلات حفظ ومشاركة.',
    iconName: 'Smartphone',
    items: [
      'هندسة الـ Hooks النفسية في أول 1.5 ثانية لمنع تخطي الفيديو',
      'مونتاج سريع الإيقاع وتقنيات الـ Speed Ramping في CapCut',
      'تطوير قوالب كاب كات مخصصة للعلامات التجارية (Pop-Reveals & Trends)',
      'تصميم مقاسات العرض الرأسي 9:16 المخصصة للإنستغرام وتيك توك',
      'مونتاج وتلوين متقدم (Color Grading & Cinematic LUTs)',
      'مزامنة الإيقاع الحركي مع أقوى التراكات الصيفية والحماسية',
    ],
  },
  {
    id: 'brand-identity',
    title: 'Creative Direction & Brand Decks',
    subtitle: 'إعطاء العلامة التجارية روحاً وشخصية فريدة وتصميم عروض تقديمية مقنعة (Pitch Decks).',
    iconName: 'Sparkles',
    items: [
      'صياغة العروض التقديمية وملفات العلامات التجارية (19-Slide Brand Decks)',
      'صياغة الشعارات الإعلانية الرنانة (Brand Slogans & Taglines)',
      'تصميم الكاروسيل الاحترافي وتنسيقات الـ Social Proof',
      'توحيد النبرة والصوت والهوية البصرية عبر كافة المنصات',
      'ربط العلامة بالمناسبات الثقافية والمشاعر الإنسانية',
      'استشارات تطوير المحتوى وتحويل المشاهدين إلى عملاء دائمين',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'البحث والرؤية الاستراتيجية',
    description: 'تشريح حجم السوق المصري وتحليل المنافسين وسلوك الجمهور المستهدف بدقة لتحديد الفجوة التسويقية.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'تطبيق نموذج SOSTAC',
    description: 'صياغة أهداف ذكية SMART، وهندسة مسارات التحويل وتوزيع المسؤوليات وجدولة النشر.',
    icon: 'Lightbulb',
  },
  {
    number: '03',
    title: 'الإنتاج البصري والمحتوى الإعلاني',
    description: 'توليد وتصوير المشاهد السينمائية بالذكاء الاصطناعي وتصميم العروض التقديمية وسلايدات الكاروسيل.',
    icon: 'Sparkles',
  },
  {
    number: '04',
    title: 'المونتاج والهندسة الصوتية',
    description: 'ضبط إيقاع اللقطات في CapCut وهندسة الفويس أوفر والمؤثرات الواقعية لضمان أعلى تفاعل في أول 1.5 ثانية.',
    icon: 'Film',
  },
  {
    number: '05',
    title: 'المراقبة وضبط مؤشرات الأداء (Control KPIs)',
    description: 'متابعة معدلات الحفظ والمشاركة والنقرات للواتساب وحساب العائد الاستثماري لتحسين الحملات باستمرار.',
    icon: 'CheckCircle',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Marketing Strategy & Analytics',
    skills: [
      'SOSTAC Comprehensive Framework',
      'SCQA Storytelling Framework',
      'Market Sizing ($7.5B E-Com Analysis)',
      'Competitor Benchmarking (Zara, LCW)',
      'Buyer Persona & ICP Mapping',
      'Meta Ad Funnels & WhatsApp Conversion',
      'Control Dashboards & CPA Optimization',
    ],
  },
  {
    category: 'Brand Decks & Presentation',
    skills: [
      'Multi-Slide Brand & Campaign Decks',
      'Executive Strategy Presentations',
      'Interactive Carousel Architecture',
      'Brand Slogan & Positioning Conception',
      'Value Proposition & Tone of Voice',
    ],
  },
  {
    category: 'Creative Video & Editing',
    skills: [
      'CapCut Advanced Pacing & Speed Ramping',
      'Audio & Visual Match-Cut Transitions',
      'Cinematic Color Grading & LUTs',
      'Short-Form Hooks (1.5s Attention Rule)',
      'Sound Design & Foley Mastery',
      'Dynamic Subtitles & Pacing',
    ],
  },
  {
    category: 'AI Media & Prompt Engineering',
    skills: [
      'High-Fidelity AI Video Generation',
      'Consistent Product & Character Prompting',
      'Midjourney & Photorealistic Synthesis',
      'Camera Lens & Lighting Matrix Prompts',
      'Storyboard Visual Sequencing',
      'Voiceover Audio Direction & Foley',
    ],
  },
];

export const TOOLS_DATA: ToolItem[] = [
  { name: 'PowerPoint & Decks', purpose: 'تصميم العروض التقديمية وخطط الاستراتيجيات ودراسات السوق', category: 'Strategy & Presentation' },
  { name: 'Meta Business Suite', purpose: 'تخطيط استهداف الجماهير، إدارة الصفحات، وتتبع مسارات التحويل', category: 'Digital Advertising' },
  { name: 'CapCut Pro', purpose: 'المونتاج الاحترافي، ضبط التوقيتات، تسريع الإيقاع، والترجمات التفاعلية', category: 'Editing & Motion' },
  { name: 'AI Video Engines', purpose: 'توليد اللقطات الإعلانية السينمائية والمؤثرات البصرية الواقعية', category: 'Generative AI' },
  { name: 'Midjourney / AI Image', purpose: 'تصميم بوسترات الحملات واللوحات الإعلانية بدقة فوتوغرافية', category: 'Visual Generation' },
  { name: 'ChatGPT / Claude', purpose: 'أبحاث السوق، صياغة الاسكريبتات المصرية، وتطوير أفكار الهوك', category: 'Strategy & Copy' },
  { name: 'Canva Pro', purpose: 'تصميم عروض الحملات، الكاروسيل التسويقي، والخطط البصرية', category: 'Design & Presentation' },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Digital Egypt Pioneers Initiative (DEPI) • وزارة الاتصالات وتكنولوجيا المعلومات',
    degree: 'Digital Marketing & Content Strategy Specialist Track (ID: 21172333)',
    period: '2025 - 2026',
    details: 'برنامج مكثف ومعتمد في التخطيط التسويقي الاستراتيجي، تطبيق نموذج SOSTAC، إدارة ميزانيات الحملات الرقمية، وصناعة المحتوى الإبداعي.',
  },
  {
    institution: 'كلية التجارة / إدارة الأعمال والتسويق',
    degree: 'دراسات التسويق وسلوك المستهلك والتجارة الإلكترونية',
    period: '2022 - 2026',
    details: 'تركيز عميق على سلوك المشتري، اقتصاديات الإعلان الرقمي، وإدارة العلامات التجارية في السوق المصري والعربي.',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: 'Digital Marketing Strategist & Brand Consultant',
    type: 'Strategic Planning & Growth Consulting',
    period: '2025 - Present',
    description: 'تطبيق نماذج التسويق المعتمدة (SOSTAC & SCQA) لبناء حضور رقمي قوي ومربح للمشاريع التجارية.',
    highlights: [
      'دراسة وتحليل سوق الأزياء السريعة في مصر لـ H&M بقيمة 7.5 مليار دولار وتدقيق المنافسين (Zara و LC Waikiki).',
      'بناء استراتيجية كاملة لعلامة أزياء قيم (Qaim) ترفع التفاعل العضوي بنسبة +20% لجمهور يتجاوز 62 ألف عميل.',
      'تطوير ديك استراتيجي متكامل من 19 شريحة لحملة صيف V7 Cream Soda عبر 3 أجيال من المصايف المصرية.',
      'إعداد خطط إطلاق وتسويق متكاملة لعلامة مشروبات الطاقة تاكة (TAKAA) تشمل الهوية والرعاية وقوالب كاب كات.',
      'هندسة صفحة فيسبوك ومسار مبيعات الواتساب لـ وش جديد للأثاث لتحقيق مبيعات مباشرة.',
    ],
  },
  {
    title: 'Lead Creative Director & AI Video Producer',
    type: 'Freelance & Commercial Production',
    period: '2024 - Present',
    description: 'إخراج وإنتاج حملات إعلانية وفيديوهات سينمائية بالذكاء الاصطناعي لعلامات تجارية بارزة ومفاهيم ابتكارية.',
    highlights: [
      'إنتاج إعلان سبيرو سباتس التاريخي برؤية سينمائية عصرية فائقة النقاء.',
      'إنتاج إعلان بافلو برجر عالي السرعة بمؤثرات صوتية ومونتاج سريع الإيقاع.',
      'تطوير حملة V7 Cream Soda الصيفية بتقنية الـ Match Cuts الصوتية.',
      'إنتاج وهندسة مقاطع حملة «بابا جه» الكوميدية والترفيهية برتم سريع ومؤثرات صوتية جذابة.',
      'تصميم ونشر قوالب CapCut فيروسية لعلامة تاكة (TAKAA) ومحتوى إنستغرام وتيك توك.',
    ],
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-depi-mcit',
    title: 'Certified Digital Marketing & Creative Specialist (DEPI)',
    platform: 'Digital Egypt Pioneers Initiative • Ministry of Communications and Information Technology (MCIT)',
    year: '2025 - 2026',
    skills: ['SOSTAC Strategy', 'Brand Storytelling', 'Social Media Strategy', 'Campaign Planning', 'Market Audit'],
    credentialId: 'DEPI-ID-21172333',
    verifyUrl: '/documents/DEPI_Digital_Marketing_Certification_Work.pdf',
  },
  {
    id: 'cert-google-digital',
    title: 'Digital Marketing Fundamentals',
    platform: 'Google Digital Garage',
    year: '2025',
    skills: ['SEO', 'SEM', 'Content Marketing', 'Analytics', 'Customer Journey'],
    credentialId: 'GDG-DM-789421',
  },
  {
    id: 'cert-hubspot-content',
    title: 'Inbound & Content Marketing Certification',
    platform: 'HubSpot Academy',
    year: '2025',
    skills: ['Content Strategy', 'Buyer Personas', 'Storytelling', 'Promotion Pipelines'],
    credentialId: 'HS-CONT-552109',
  },
  {
    id: 'cert-ai-prompts',
    title: 'Generative AI & Prompt Engineering for Media',
    platform: 'DeepLearning.AI / Coursera',
    year: '2025',
    skills: ['Prompt Architecture', 'Image Synthesis', 'Video Generation', 'Visual Consistency'],
    credentialId: 'DL-GENAI-330129',
  },
  {
    id: 'cert-video-creative',
    title: 'Advanced Video Editing & Creative Pacing',
    platform: 'Creative Media Masterclass',
    year: '2024',
    skills: ['CapCut Masterclass', 'Color Grading', 'Sound Design', 'Short-Form Hooks'],
    credentialId: 'CMM-VID-118834',
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'article-hm-egypt-audit',
    title: 'تشريح سوق الأزياء المصري بحجم 7.5 مليار دولار: كيف تتفوق H&M على منافسيها؟',
    slug: 'hm-egypt-market-research-case-study',
    readTime: '6 دقائق قراءة',
    date: 'مارس 2026',
    category: 'Content Strategy',
    excerpt:
      'تحليل بيانات التجارة الإلكترونية وسلوك المستهلك المصري، وكيف يؤدي حل مشكلة النشر غير المنتظم إلى مضاعفة المبيعات في مواسم رمضان والجمعة البيضاء.',
    tags: ['H&M Egypt', 'Market Sizing', 'Competitor Audit', 'Fast Fashion'],
    keyTakeaways: [
      'حجم سوق التجارة الإلكترونية في مصر وصل إلى 7.5 مليار دولار بنمو سنوي +35%.',
      'الاعتماد فقط على كتالوج الصور العالمي يفقد العلامة ارتباطها الوجداني بالمستهلك المصري.',
      'مواسم رمضان تضاعف الوصول 4-6 أضعاف، والجمعة البيضاء ترفع المبيعات 3-4 أضعاف.',
    ],
    content: [
      'خلال بحث السوق الذي أجريته لعلامة H&M في مصر، كشفت الأرقام عن فرصة هائلة: أكثر من 50.7 مليون مستخدم نشط لشبكات التواصل في مصر، وسوق تجارة إلكترونية يتجاوز 7.5 مليار دولار.',
      'لكن المقارنة التنافسية أظهرت ثغرة كبيرة: بينما تنشر LC Waikiki يومياً محتوى معرب وموجه للمستهلك المصري، عانت H&M من جدول نشر عشوائي (0 إلى 2 بوست أسبوعياً) وغياب للمحتوى المصنوع بأيدي صناع محتوى مصريين.',
      'الحل يكمن في استراتيجية المحتوى المحلية: رفع وتيرة النشر إلى 5-7 منشورات أسبوعياً، والتركيز على أوقات الذروة المسائية في مصر، وإطلاق شراكات UGC مع طلاب الجامعات والشباب.',
    ],
  },
  {
    id: 'article-v7-match-cuts',
    title: 'كيف صممت ديك حملة صيف V7 Cream Soda: الانتقال الزمني وصوت الأجيال',
    slug: 'how-i-built-v7-summer-campaign-match-cuts',
    readTime: '5 دقائق قراءة',
    date: 'مارس 2026',
    category: 'AI Advertising',
    excerpt:
      'تشريح تفصيلي لديك الحملة المكون من 19 شريحة، وكيفية استخدام تقنية الـ Match Cuts والانتقال الصوتي بين 3 أجيال من الصيف المصري لصناعة حملة فيروسية.',
    tags: ['V7 Cream Soda', 'Brand Deck', 'Match Cuts', 'Sound Identity'],
    keyTakeaways: [
      'النوستالجيا الصادقة المرتبطة بأماكن حقيقية في وجدان المصريين تتفوق على أي إعلان تقليدي بارد.',
      'تقنية الـ Match Cut تربط بين أزمنة مختلفة بحركة واحدة مما يخلق إبهاراً بصرياً فورياً.',
      'الديك الاستراتيجي (Brand Deck) هو الأساس الذي يترجم الرؤية الإبداعية إلى خطوات تنفيذية مقنعة للعميل.',
    ],
    content: [
      'عندما بدأت التفكير في حملة صيف V7 Cream Soda، كان الهدف الأساسي هو تجاوز فكرة مجرد «مشروب مثلج على شاطئ بحر». كان المطلوب هو حفر العلامة في وجدان الصيف المصري.',
      'أعددت ديك استراتيجي متكامل من 19 شريحة استعرضت فيه أجيال المصايف الثلاثة: جيل زمان في رأس البر، جيل التسعينات في العجمي، وجيل اليوم في الساحل الشمالي.',
      'قمت بتصميم نقطة ارتكاز بصرية (Visual Pivot): حركة يد الشخص وهي ترفع الزجاجة لتشرب.. في اللحظة التي تلمس فيها الزجاجة شفتيه، يحدث الـ Match Cut السلس لننتقل إلى الجيل التالي، مع انتقال الصوت من شوشرة الراديو القديم إلى دوران بكرة الكاسيت ثم إلى نقاء وإيقاع الصيف الحديث.',
    ],
  },
  {
    id: 'article-sostac-qaim',
    title: 'تطبيق نموذج SOSTAC وسردية SCQA في عالم الأزياء: دراسة حالة قيم (Qaim)',
    slug: 'sostac-scqa-qaim-fashion-case-study',
    readTime: '5 دقائق قراءة',
    date: 'فبراير 2026',
    category: 'Marketing Psychology',
    excerpt:
      'كيف نقلت محتوى علامة أزياء مصرية من مرحلة «استعراض القمصان» إلى «بيع أسلوب الحياة والحل» وتأسيس لوحة مؤشرات أداء (KPIs) أسبوعية.',
    tags: ['SOSTAC', 'SCQA', 'Qaim Fashion', 'Control KPIs'],
    keyTakeaways: [
      'العميل لا يشتري القماش أو الخياطة؛ العميل يشتري الثقة والشعور بالراحة في يوم عمل طويل.',
      'إطار SCQA ينظم السرد التسويقي: مشكلة العميل أولاً ثم الحل الطبيعي من المنتج.',
      'التحكم والمراقبة (Control KPIs) هما الضمان الوحيد لتحقيق أعلى عائد على الإنفاق الإعلاني.',
    ],
    content: [
      'خلال تدقيقي لحسابات براند قيم (Qaim)، لاحظت أن العلامة تمتلك قاعدة متابعين قوية تفوق 62 ألفاً ونسبة توصية غير مسبوقة تبلغ 96%، لكن المحتوى كان يدور في حلقة مفرغة: تصوير الموديل بالقميص والسؤال المعتاد «إيه رأيكم؟».',
      'طبقت القاعدة الذهبية: «Sell the lifestyle and the solution, not only the product».',
      'استخدمت معادلة SCQA: الشباب والرجال في مصر يريدون مظهراً أنيقاً في العمل والجامعة وفي نفس الوقت ملابس مريحة تتحمل حرارة الصيف والتحرك المستمر. هذه هي الـ (Complication). وهنا يأتي دور قيم لتقديم خامات قطنية معالجة بقصات عصرية تحل المشكلة.',
      'أعدت بناء مصفوفة الـ Actions & Control لتوزيع المهام أسبوعياً على الفريق ومراقبة معدلات التفاعل والطلبات عبر الواتساب بشكل دقيق.',
    ],
  },
];

export const RESULTS_METRICS_DATA = [
  {
    metric: '$7.5B',
    label: 'Market Sizing Research',
    description: 'تحليل دقيق لحجم التجارة الإلكترونية وسوق الأزياء والتجزئة في مصر.',
  },
  {
    metric: '62K+',
    label: 'Community Audit & Growth',
    description: 'تدقيق وتحسين معدلات التحويل لقاعدة عملاء تتجاوز 62 ألف متابع بنسبة ثقة 96%.',
  },
  {
    metric: '19 Slides',
    label: 'Comprehensive Brand Decks',
    description: 'صياغة عروض تقديمية وحقائب استراتيجية متكاملة للعلامات التجارية تشمل كل تفاصيل الحملة.',
  },
  {
    metric: '100%',
    label: 'Real Strategic Portfolio',
    description: 'جميع المشاريع مدعومة بملفات العروض التقديمية (.pptx) والوثائق الرسمية المعتمدة للتحميل.',
  },
];

export const DIGITAL_MARKETING_PILLARS = [
  {
    title: 'تخطيط استراتيجية SOSTAC المتكاملة',
    description: 'تطبيق الإطار الأكاديمي والعملي المعتمد في دراسة الوضع الراهن وتحديد الأهداف الذكية وصياغة الاستراتيجيات والتكتيكات وإجراءات الرقابة.',
    topics: ['تحليل الوضع (Situation Audit)', 'الأهداف الذكية (SMART Objectives)', 'استراتيجية التموضع (Positioning)', 'تكتيكات مسار التحويل (Tactics & Funnels)'],
    outcome: 'بناء خطة تسويقية خالية من العشوائية تضمن توجيه الميزانيات بدقة نحو أعلى القنوات ربحية.',
  },
  {
    title: 'بحوث السوق وتشريح المنافسين (Market Intelligence)',
    description: 'تقدير حجم الفرص المتاحة (Market Sizing)، تحليل الحصص السوقية، وتشريح استراتيجيات المنافسين لاستغلال الفجوات السعرية والتسويقية.',
    topics: ['تقدير حجم السوق (E-Commerce GMV)', 'مصفوفة مقارنة المنافسين (Benchmarking)', 'تحليل نقاط القوة والضعف (SWOT)', 'دراسة مواسم الذروة الشرائية'],
    outcome: 'قرارات استراتيجية مبنية على أرقام وبيانات واقعية تضمن تجنب إهدار الميزانيات.',
  },
  {
    title: 'سردية الـ SCQA وقوة الـ Storytelling',
    description: 'تحويل الحديث عن مواصفات المنتج الجافة إلى قصة إنسانية مشوقة تبدأ بالوضع الراهن، وتبرز المشكلة الصادمة، وتطرح السؤال، وتقدم الحل الحتمي.',
    topics: ['إطار SCQA السردي', 'نقاط الألم العاطفية (Friction Points)', 'تحويل المزايا إلى أسلوب حياة', 'صياغة نهايات مفتوحة تفاعلية'],
    outcome: 'مضاعفة تفاعل الجمهور العضوي وربط العلامة التجارية بمشاعر الاحتياج والانتماء.',
  },
  {
    title: 'تدقيق وتحليل الجماهير (Audience & ICP)',
    description: 'بناء شخصيات العملاء المثاليين (Personas) ودراسة عاداتهم الاستهلاكية في الشارع المصري لتحديد أنسب مواعيد وطرق مخاطبتهم.',
    topics: ['التقسيم الديموغرافي والنفسي', 'دوافع الشراء والتردد', 'خريطة رحلة العميل (Customer Journey)', 'رصد ردود الأفعال والمراجعات'],
    outcome: 'رسائل إعلانية موجهة تشعر العميل وكأنها كُتبت خصيصاً له وحده.',
  },
  {
    title: 'العروض التقديمية وملفات البراند (Pitch Decks)',
    description: 'صياغة عروض تقديمية مقنعة وجذابة للعلامات التجارية تلخص الأهداف الإعلانية ومراحل الحملات ومسارات النشر.',
    topics: ['هيكلة شرائح العرض (Slide Architecture)', 'إبراز القيمة التنافسية (USP)', 'المخطط الزمني للحملة (Roadmap)', 'العروض البصرية للأفكار الإبداعية'],
    outcome: 'إقناع أصحاب القرار والمستثمرين بالرؤية التسويقية والحصول على الموافقة والتمويل.',
  },
  {
    title: 'هندسة صفحات فيسبوك ومسارات التحويل (Funnels)',
    description: 'تهيئة الحسابات والصفحات التجارية على منصات ميتا وربطها بقنوات الواتساب والمواقع الإلكترونية لضمان سرعة تحويل الاستفسارات لمبيعات.',
    topics: ['تهيئة صفحات فيسبوك وسيو البحث الداخلي', 'مسار الواتساب للطلبات المباشرة', 'أتمتة الردود السريعة (Quick Replies)', 'كتالوج الخدمات وسابقة الأعمال'],
    outcome: 'بناء مسار تحويل مباشر وسلس يرفع من معدل إتمام الصفقات وتخفيض كلفة العميل (CPA).',
  },
];

export const AI_CREATIVE_PILLARS = [
  {
    title: 'توليد الفيديو السينمائي بالذكاء الاصطناعي',
    description: 'إنتاج لقطات إعلانية واقعية فائقة الدقة تحاكي إضاءة السينما وعدسات التصوير الاحترافية في ساعات معدودة.',
    tools: 'Runway Gen-3 / Luma / Kling AI',
  },
  {
    title: 'توليد الصور والبوسترات الفوتوغرافية',
    description: 'تصميم لقطات تجارية متسقة الملامح للمنتجات والأشخاص بدقة فوتوغرافية جاهزة للوحات الإعلانات والسوشيال ميديا.',
    tools: 'Midjourney / Flux Pro / Stable Diffusion',
  },
  {
    title: 'هندسة الأوامر المتقدمة (Prompt Architecture)',
    description: 'بناء مصفوفات برومبت هندسية تحدد أطوال بؤر العدسات (Focal Lengths)، توزيع الإضاءة، وزوايا الكاميرا بدقة صارمة.',
    tools: 'Prompt Engineering & Style Encoders',
  },
  {
    title: 'تصميم الإعلانات التجارية (AI Spec TVCs)',
    description: 'ابتكار أفلام إعلانية متكاملة لعلامات تجارية كبرى (سامسونج، سبيرو سباتس، V7) مع ضمان الاتساق عبر المشاهد.',
    tools: 'Generative Commercial Pipelines',
  },
  {
    title: 'الستوري بورد البصري (Cinematic Storyboarding)',
    description: 'تحويل الاسكريبت المكتوب إلى مخطط بصري لقطة بلقطة مع توصيف زوايا الكاميرا وحركة الممثلين ومصادر الإضاءة.',
    tools: 'Visual Sequencing & Frame Staging',
  },
  {
    title: 'الإخراج الإبداعي وهندسة الصوت (Audio Direction)',
    description: 'دمج التعليق الصوتي المصري الأصيل مع مؤثرات صوتية واقعية (Foley) وموسيقى تصاعدية تمنح الإعلان روحاً حية.',
    tools: 'CapCut Pro / Audio Mastering / Foley FX',
  },
];
