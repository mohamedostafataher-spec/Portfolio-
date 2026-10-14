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
const breadfastVideo = '/videos/breadfast_delivery_campaign.mp4';

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
import breadfastVideoPoster from '../assets/images/breadfast_video_poster.jpg';
import babaGehPoster from '../assets/images/baba_geh_poster.jpg';
import babaGehThumb1 from '../assets/images/baba_geh_thumb1.jpg';
import babaGehThumb2 from '../assets/images/baba_geh_thumb2.jpg';
import furnitureFbThumb from '../assets/images/furniture_fb_real_thumbnail.jpg';
import hmStrategyThumb from '../assets/images/hm_strategy_thumb.jpg';
import hmGrowthThumb from '../assets/images/hm_growth_strategy_thumb.jpg';
import depiCapstoneThumb from '../assets/images/depi_capstone_thumb.jpg';
import talabatRealThumb from '../assets/images/talabat_scqa_real_thumbnail.jpg';
import talabatEgyptAd from '../assets/images/talabat_egypt_ad_1788540445225.jpg';
export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'the-lakes-sodic-east',
    brandName: 'The Lakes (SODIC East)',
    tracks: ['AI Content', 'Videos', 'Marketing Strategy', 'Content Creation'],
    title: 'The Lakes (SODIC East): Luxury Living Commercial Film, SOSTAC Plan & 8-Slide Carousel',
    clientOrSpec: 'Concept Campaign',
    specBadge: 'Concept',
    projectType: 'Real Estate AI Commercial, SOSTAC Plan & Carousel',
    subtitle: '«الحياة في هدوء الطبيعة وسحر البحيرات» • 77s Cinematic AI Commercial, 22-Slide SOSTAC Strategy & 8-Slide Carousel',
    category: 'AI Commercial',
    duration: '77s Commercial + 22 Slides + 8 Slides',
    durationAr: 'إعلان 77 ثانية + خطة SOSTAC + كاروسيل 8 شرائح',
    tagline: 'الحياة في هدوء الطبيعة وسحر البحيرات — سوديك إيست.',
    description:
      'حملة إعلانية سينمائية متكاملة تم إنتاجها بالذكاء الاصطناعي لمشروع The Lakes الفاخر في سوديك إيست. تركز على التوازن بين هدوء الطبيعة والبحيرات الكريستالية والمساحات الخضراء، مصحوبة بخطة تسويقية واستراتيجية SOSTAC متكاملة مكونة من 22 شريحة وسلسلة كاروسيل إنستغرام مكونة من 8 شرائح عالية الدقة (1080×1350).',
    skills: ['Real Estate Storytelling', 'Generative AI Cinematography', 'SOSTAC Framework', 'Carousel Campaign Design', 'Audience Segmentation', 'CapCut Pro'],
    objective:
      'إبراز سحر المعيشة الفاخرة وسط البحيرات الكريستالية والمساحات الخضراء في سوديك إيست، وجذب فئة النخبة والعائلات الباحثة عن الهدوء والرقي عبر مسار تحويل مباشر Click-to-WhatsApp.',
    concept:
      '«سحر الهدوء والطبيعة — عيش على الميّه»: سرد بصري سينمائي يربط بين حركة المياه الصافية، انعكاسات الشمس، ودفء الحياة العائلية في مجتمع متكامل بنظام دفع 1.5% مقدم وأقساط 10 سنوات.',
    conceptScriptAr:
      'تخيل تصحى كل يوم على صوت المية، بين المساحات الخضراء والبحيرات الصافية في قلب سوديك إيست... مكان مش بس للسكن، ده مساحة تبدأ فيها حياة جديدة بهدوء وراحة بال وسط مجتمع راقي يليق بيك وبعيلتك.',
    myRole:
      'المخرج الإبداعي ومعد الاستراتيجية — كتابة السكربت بالعامية، توليد المشاهد البصرية بالذكاء الاصطناعي، المونتاج الإيقاعي وضبط شريط الصوت بـ CapCut Pro، وتصميم سلسلة الكاروسيل والديك الاستراتيجي.',
    whatIDid: [
      'Developed luxury real estate concept and emotional storytelling narrative ("عيش على الميّه").',
      'Generated cinematic 4K aerial and waterfront visuals using generative AI tools in Terrano style.',
      'Scripted warm Egyptian Arabic voiceover celebrating serene family lifestyle.',
      'Edited 77-second cinematic commercial reel with ambient audio in CapCut Pro.',
      'Designed 8-slide high-converting 4:5 Instagram carousel campaign.',
      'Authored comprehensive 22-slide SOSTAC marketing plan and full-funnel WhatsApp acquisition strategy.'
    ],
    tools: ['Midjourney AI', 'Runway Gen-3', 'CapCut Pro', 'Canva Pro', 'SOSTAC Framework', 'Meta Ads Manager'],
    image: '/images/lakes/lakes-v3-01.png',
    galleryImages: [
      '/images/lakes/lakes-v3-01.png',
      '/images/lakes/lakes-v3-02.png',
      '/images/lakes/lakes-v3-03.png',
      '/images/lakes/lakes-v3-04.png',
      '/images/lakes/lakes-v3-05.png',
      '/images/lakes/lakes-v3-06.png',
      '/images/lakes/lakes-v3-07.png',
      '/images/lakes/lakes-v3-08.png',
    ],
    videoUrl: 'https://youtube.com/shorts/WVn0VMNMWxU',
    galleryVideos: [
      { title: 'The Lakes SODIC East — Vertical Commercial Cut (YouTube Shorts)', url: 'https://youtube.com/shorts/WVn0VMNMWxU', category: 'YouTube Shorts' },
      { title: 'The Lakes Cinematic 77s Full Reel (4K MP4)', url: '/videos/the_lakes_sodic_77s.mp4', category: 'Director Cut (77s)' },
    ],
    aspectRatio: '9:16',
    isFeaturedTop3: true,
    driveFolderUrl: 'https://drive.google.com/drive/folders/1y2N3yDPEcKC6LjMI6eLavjI-eMNYrhqE',
    deckFileName: 'The_Lakes_Marketing_Plan_Redesigned.pptx',
    pdfDownloadUrl: '/decks/The_Lakes_SODIC_East_Marketing_Plan.pptx',
    pdfFileName: 'The_Lakes_Marketing_Plan_Redesigned.pptx',
    deckDownloadUrl: '/decks/The_Lakes_SODIC_East_Marketing_Plan.pptx',
    strategySlideImage: '/images/lakes/lakes-v3-01.png',
    stats: [
      { label: 'Commercial Reel', value: '77s Vertical Cut' },
      { label: 'Format', value: 'Vertical 9:16 Commercial' },
      { label: 'Carousel Slides', value: '8 High-Res Slides (4:5)' },
      { label: 'SOSTAC Plan', value: '22-Slide Master Deck' }
    ],
    featured: true,
    process: [
      { step: '01. Situation & Competitor Benchmark', detail: 'Analysis of New Heliopolis & SODIC East master plan (655 feddans) and competitor benchmark against Talala (Madinet Masr).' },
      { step: '02. Audience Hypotheses & Personas', detail: 'Targeting 4 distinct buyer personas: First-home couple (1 Bed from 6.7M), Remote-working pair, Upgrader family, and Wealth preservation investors.' },
      { step: '03. Creative Platform: A Day on the Water', detail: 'Developing the core narrative "عيش على الميّه" with 6 commercial beats and an 8-scene AI cinematography shot list in Terrano architectural style.' },
      { step: '04. Multi-Slide Educational Carousel', detail: 'Designing 8 high-impact 4:5 Instagram carousel slides breaking down the project numbers, payment flexibility (1.5% down, 10 yrs), and swimmable lagoon.' },
      { step: '05. Full-Funnel WhatsApp Growth Flow', detail: 'Architecting Meta lead ads + Click-to-WhatsApp conversion funnel with automated routing to SODIC sales advisory and EOI booking.' },
    ],
    finalResult: 'An end-to-end luxury real estate commercial campaign, 8-slide educational carousel, and 22-slide strategic SOSTAC plan combining cinematic AI filmmaking with measurable full-funnel lead acquisition.',
    deckSlides: [
      {
        slideNumber: 1,
        title: 'The Lakes | SODIC East: Live Around Water (عيش على الميّه)',
        category: 'Creative Marketing Plan',
        highlight: 'Prepared by Mohamed Mostafa Taher Salem',
        points: [
          'Full marketing & creative campaign blueprint for The Lakes luxury phase in SODIC East.',
          'Core proposition: "عيش على الميّه" — Live around crystal lagoons and green sanctuaries.',
          'Concept Plan prepared by Creative Marketer & AI Filmmaker Mohamed Mostafa Taher Salem.',
        ],
      },
      {
        slideNumber: 2,
        title: 'Executive Summary: The Offer in Four Numbers',
        category: 'Commercial Strategy',
        highlight: '1.5% Down Payment • 10 Yrs Installments',
        points: [
          '1.5% Down payment: ultra-accessible entry threshold for premium real estate.',
          '10 Years flexible installment structure matching affluent buyer cash-flows.',
          '50,000 EGP Expression of Interest (EOI) refundable reservation booking.',
          '1 Bedroom starting from 6.7M EGP in an upscale fully integrated master community.',
        ],
        metrics: [
          { label: 'Down Payment', value: '1.5%' },
          { label: 'Installments', value: '10 Years' },
          { label: 'Starting Price', value: '6.7M EGP' },
          { label: 'Booking EOI', value: '50,000 EGP' },
        ],
      },
      {
        slideNumber: 3,
        title: 'Master Plan Facts & Water Lagoon Architecture',
        category: 'Project Intelligence',
        highlight: '655 Feddans Master Plan by Sasaki & EDSA',
        points: [
          '655 Feddan total SODIC East master development, projected 6,000 units and 20,000 residents.',
          '3,000 m² swimmable crystal lagoon with natural sandy shore and exclusive island cafe.',
          '9,000 m² total interconnected water features creating micro-climate breezes.',
          'Clubhouse, sports facilities, international schools, and retail boulevards on-site.',
        ],
      },
      {
        slideNumber: 4,
        title: 'Location & Strategic Transit Connectivity',
        category: 'Infrastructure',
        highlight: 'Direct LRT & Monorail Accessibility',
        points: [
          '10 Minutes to Cairo Light Rail Transit (LRT) station.',
          '30 Minutes to Cairo Monorail station connecting directly to New Administrative Capital.',
          '35 Minutes to Cairo International Airport & 35 Minutes to 90th Street, New Cairo.',
          'Strategic positioning between Suez Road and Ismailia Road in New Heliopolis.',
        ],
      },
      {
        slideNumber: 5,
        title: 'Competitive Benchmark: The Lakes vs. Talala (Madinet Masr)',
        category: 'Competitor Audit',
        highlight: 'Head-to-Head Advantage in Payment & Water Features',
        points: [
          'The Lakes offers 1.5% down payment vs. 5% market average at Talala.',
          'Swimmable EDSA-designed lagoon provides lifestyle differentiation vs. conventional landscaping.',
          'SODIC brand equity delivers higher tenant occupancy trust and secondary resale premiums.',
          'Terrano Mediterranean architectural identity with curved balconies and terracotta earth tones.',
        ],
      },
      {
        slideNumber: 6,
        title: 'SWOT Analysis & Market Positioning',
        category: 'Strategic Analysis',
        highlight: 'Capitalizing on Flight-to-Quality & Water Lifestyle',
        points: [
          'Strengths: Sasaki master plan, swimmable lagoon, 1.5% down payment, SODIC brand reputation.',
          'Weaknesses: Future delivery schedule requires strong visual proof and virtual walkthroughs.',
          'Opportunities: Rising demand for East Cairo luxury and hedging against currency inflation.',
          'Threats: Competitive price wars in New Heliopolis countered by superior community amenities.',
        ],
      },
      {
        slideNumber: 7,
        title: 'Target Buyer Personas & Hypotheses',
        category: 'Audience Segmentation',
        highlight: '4 Tested Buyer Profiles',
        points: [
          'Persona 1: First-Home Couple (1 Bed, ~55K/month). Message: Start your life on the water with 1.5%.',
          'Persona 2: Remote-Working Pair (2 Bed, ~89K/month). Message: Work pods and morning coffee on the lagoon.',
          'Persona 3: Upgrader Family (Townhouses / 3 Bed). Message: Safe green sanctuary and elite sports academy.',
          'Persona 4: Wealth Preservation Investor. Message: High rental yield backed by SODIC development track record.',
        ],
      },
      {
        slideNumber: 8,
        title: 'Creative Platform: A Day on the Water (يوم كامل على الميّه)',
        category: 'Creative Concept',
        highlight: 'Lead Route A: Emotion & Waterfront Living',
        points: [
          'Lead Concept: "A Day on the Water" (يوم كامل على الميّه) — 24 hours of tranquil waterfront routine.',
          'Support Route B: "Your Terrace, Your View" — Architectural focus on panoramic lagoon views.',
          'Support Route C: "The Numbers That Matter" — Rational financial breakdown of the 1.5% payment plan.',
        ],
      },
      {
        slideNumber: 9,
        title: 'Hero Commercial Film Architecture (60s / 77s Cut)',
        category: 'Video Production',
        highlight: '6 Cinematic Emotional Beats',
        points: [
          '0-5s Dawn: Steam rising from fresh coffee on the terrace overlooking misty lagoon waters (Hook).',
          '5-20s Lagoon: Sunlight shimmering on 3,000 m² swimmable lagoon and sandy shore.',
          '20-35s Work & Community: Peaceful remote-working pod and clubhouse co-working lounge.',
          '35-50s Family & Sports: Kids playing along landscaped paths, elite club amenities.',
          '50-60s Sunset & CTA: Golden hour reflection on water, warm Egyptian voiceover, 1.5% down payment CTA.',
        ],
      },
      {
        slideNumber: 10,
        title: 'AI Cinematography Shot List & Terrano Aesthetics',
        category: 'Generative AI Tech',
        highlight: '8 AI Scenes in Terrano Architectural Style',
        points: [
          'Scene 1: 4K Aerial reveal of turquoise swimmable lagoon and golden hour sandy shoreline.',
          'Scene 2: Intimate shot of Island Cafe with natural timber decks and ambient water ripples.',
          'Scene 3: Terrano-style residential facade with terracotta textures and curved Italian balconies.',
          'Scene 4: Panoramic interior-to-terrace transition celebrating morning daylight and breeze.',
        ],
      },
      {
        slideNumber: 11,
        title: 'Multi-Slide Educational Carousel Strategy (4:5 Ratio)',
        category: 'Content Marketing',
        highlight: '8 High-Converting Instagram Carousel Slides',
        points: [
          'Slide 1: High-impact hook "8 أرقام تخليك تفكر في The Lakes سوديك إيست".',
          'Slides 2-4: Deep dive into the swimmable lagoon, 655 feddans, and transport transit links.',
          'Slides 5-7: Transparent breakdown of the 1.5% down payment and 10-year installment schedule.',
          'Slide 8: Clear conversion CTA directing to WhatsApp for brochure download and private consultation.',
        ],
      },
      {
        slideNumber: 12,
        title: 'Full-Funnel Acquisition & Click-to-WhatsApp Flow',
        category: 'Growth Architecture',
        highlight: 'Zero-Friction WhatsApp Lead Capture',
        points: [
          'Top of Funnel (Awareness): Cinematic Reels, TikTok shorts, and YouTube ads generating reach.',
          'Middle of Funnel (Consideration): 8-slide educational carousel and unit walkthrough tours.',
          'Bottom of Funnel (Conversion): Meta Click-to-WhatsApp ads with pre-filled brochure inquiry text.',
          'EOI Booking: Direct sales advisor follow-up and priority 50,000 EGP reservation.',
        ],
      },
      {
        slideNumber: 13,
        title: 'Media Allocation & Budget Distribution',
        category: 'Paid Media Plan',
        highlight: 'Meta 50% • Google 25% • Video Channels 25%',
        points: [
          'Meta (Facebook & Instagram): 50% — Click-to-WhatsApp, Instant Forms, and Carousel ads.',
          'Google Search & Display: 25% — High-intent keywords ("SODIC East", "The Lakes apartments").',
          'TikTok & YouTube Shorts: 15% — Upper-funnel awareness and viral video hooks.',
          'Dynamic Retargeting: 10% — Re-engaging 50%+ video viewers with payment plan carousels.',
        ],
      },
      {
        slideNumber: 14,
        title: 'Four-Week Campaign Rollout Schedule',
        category: 'Action Plan',
        highlight: 'Phased Launch from Teaser to EOI Conversion',
        points: [
          'Week 1 (Awareness): Launch Hero Film, lagoon aesthetic reel, and test 3 different hooks.',
          'Week 2 (Interest): Deploy persona carousels, terrace POV clips, and initiate Click-to-WhatsApp.',
          'Week 3 (Lead Generation): Scale top-performing ad creative, optimize CPL and lead quality.',
          'Week 4 (EOI Closing): Urgency messaging, VIP private site visits, and 50,000 EGP deposit conversions.',
        ],
      },
      {
        slideNumber: 15,
        title: 'Campaign KPIs, Benchmarks & Optimization Rules',
        category: 'Measurement & KPIs',
        highlight: '3-Second Hold Rate > 30% • CPL Targets',
        points: [
          'Video Hook Strength: Minimum 30% 3-second hold rate; iterate hook copy if underperforming.',
          'Click-Through Rate (CTR): Target > 1.8% on Meta carousel and video ads.',
          'Cost Per Lead (CPL): Benchmark against Cairo real estate standard (< 180 EGP per WhatsApp lead).',
          'Lead Quality: > 45% verified qualified buyer discussions with SODIC sales consultants.',
        ],
      },
      {
        slideNumber: 16,
        title: 'Legal Compliance & Advertising Guardrails',
        category: 'Regulatory Compliance',
        highlight: 'Ethical & Legally Compliant Copywriting',
        points: [
          'Mandatory "Starting from" pricing disclosure to prevent misleading financial commitments.',
          'Explicit "Views of water features / lagoon" copy rather than asserting all units touch water.',
          'Mandatory "Illustrative AI Concept" disclaimer across all generative video and visual renders.',
        ],
      },
      {
        slideNumber: 17,
        title: 'Prepared by Mohamed Mostafa Taher Salem',
        category: 'Author & Contact',
        highlight: 'Creative Marketer • AI Filmmaker',
        points: [
          'Strategy, Creative Direction & Production by Mohamed Mostafa Taher Salem.',
          'Email: mohamedostafataher@gmail.com | WhatsApp: +20 111 009 5403',
          'Full Portfolio & Video Vault: mohamedmostafa-one.vercel.app',
        ],
      },
    ],
  },
  {
    id: 'hm-egypt-market-research',
    tracks: ['Marketing Strategy', 'Content Creation'],
    title: 'H&M Egypt: $7.5B E-Commerce Market Research & Competitor Audit',
    clientOrSpec: 'Strategic Blueprint',
    projectType: 'Strategic Market Research & Competitor Audit',
    subtitle: 'Egypt Fast-Fashion Digital Landscape, Consumer Behavior & Gap Analysis',
    category: 'Market Research & Audit',
    duration: '20+ Pages Strategy',
    durationAr: 'تقرير وبحث 20+ صفحة',
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
    whatIDid: [
      'Analyzed $7.5B Egyptian fashion e-commerce market and demographic trends.',
      'Conducted rigorous competitor audit against Zara, Defacto and LC Waikiki.',
      'Identified critical brand gaps in local content localization and posting consistency.',
      'Authored comprehensive 20+ page executive strategy report with SWOT matrix.',
      'Delivered actionable growth recommendations for seasonal campaigns.'
    ],
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
    duration: '4-Week Roadmap',
    durationAr: 'خطة تنفيذية 4 أسابيع',
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
    brandName: 'QAIM (قيام)',
    tracks: ['Marketing Strategy', 'Content Creation', 'Dubbing & Audio', 'Videos', 'Photography'],
    title: 'QAIM (قيام للـ Menswear): Complete SOSTAC & SCQA Masterplan',
    clientOrSpec: 'Concept Campaign',
    specBadge: 'Concept',
    projectType: 'Client Strategy & Content Architecture',
    subtitle: 'Digital Presence Audit, SCQA Storytelling, 4 Weekly Tactics & Actions/Control KPIs',
    category: 'Marketing Strategy',
    duration: '60s Film + Deck',
    durationAr: 'فيديو 60 ثانية + خطة',
    tagline: 'بيع أسلوب الحياة والحل، مش بس المنتج — الخطة التسويقية الشاملة لعلامة قِيَم.',
    description:
      'استراتيجية تسويقية متكاملة الأركان طبقت أحدث المدارس العالمية (SOSTAC & SCQA). تشمل تدقيق الوضع الراهن لصفحة فيسبوك والمتجر الإلكتروني، وصياغة الرسائل الإعلانية، وتفصيل التكتيكات والإجراءات الأسبوعية ولوحة مؤشرات الأداء (KPIs)، مصحوبة بفيديو تجاري وتسجيل صوتي أصلي.',
    skills: ['SOSTAC Masterplan', 'SCQA Storytelling', 'Action Ownership', 'KPI Dashboards', 'AI Video & Voiceover', 'CapCut Pro'],
    objective:
      'حل معضلة المظهر الأنيق المريح للشباب والرجال، ومضاعفة التفاعل العضوي بنسبة +20% لجمهور يتجاوز 62 ألف متابع بنسبة توصية 96%، وزيادة التحويل لطلبات الواتساب والمتجر.',
    concept:
      'إطار SCQA: Situation (شباب يبحثون عن مظهر شيك ومريح يومياً) → Complication (صعوبة إيجاد خامات جيدة تجمع الستايل والراحة) → Question (كيف تحقق ذلك؟) → Answer (تشكيلة قيم المبتكرة).',
    conceptScriptAr:
      'بيع أسلوب الحياة والحل، مش بس المنتج. عندك هدوم كتير بس كل يوم مش عارف تلبس إيه ومش مرتاح؟ تشكيلة قِيَم بتديك الشياكة والراحة في نفس اللحظة ليوم العمل، الجامعة، وخروجات المساء.',
    myRole:
      'استراتيجي التسويق الرقمي والمخرج الإبداعي — تدقيق الحسابات الرقمية، صياغة رزنامة المحتوى الأسبوعية، توجيه الأداء الصوتي (Voiceover)، وإخراج الفيديو الإعلاني ولوحة الـ KPIs.',
    whatIDid: [
      'Architected complete SOSTAC & SCQA content system for a 62K followers menswear brand.',
      'Refined SOSTAC strategy for 2026/2027 market growth and conversion tracking.',
      'Engineered interactive carousels ("One Base, Three Looks" & "Complete the Look").',
      'Directed studio-recorded Egyptian colloquial voiceovers for product versatility.',
      'Structured high-retention 9:16 vertical reels commercial.',
      'Built direct link-in-bio & WhatsApp purchase funnel to reduce order friction.'
    ],
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
    image: '/images/qiam/qiam_c2_01.png',
    reelImage: '/images/qiam/qiam_c2_01.png',
    galleryImages: [
      '/images/qiam/qiam_c2_01.png',
      '/images/qiam/qiam_c2_02.png',
      '/images/qiam/qiam_c2_03.png',
      '/images/qiam/qiam_c2_04.png',
      '/images/qiam/qiam_c2_05.png',
      '/images/qiam/qiam_c2_06.png',
    ],
    videoUrl: qaimVideo,
    aspectRatio: '9:16',
    driveFolderUrl: 'https://drive.google.com/drive/folders/10e2orh2oRMlZ3jGFm5nyZukMMVKtj25A',
    stats: [
      { label: 'Audience Base', value: '62K Followers & 96% Trust' },
      { label: 'Carousel', value: '6 High-Res Slides' },
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
    image: '/images/qiam/qiam_c1_01.png',
    galleryImages: [
      '/images/qiam/qiam_c1_01.png',
      '/images/qiam/qiam_c1_02.png',
      '/images/qiam/qiam_c1_03.png',
      '/images/qiam/qiam_c1_04.png',
      '/images/qiam/qiam_c1_05.png',
      '/images/qiam/qiam_c1_06.png',
    ],
    aspectRatio: '16:9',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1zYaljKNwH5XvD5V_Irsfcas-FZ1MsHrq',
    stats: [
      { label: 'Carousel Concepts', value: '3 Distinct Routes' },
      { label: 'Carousel Slides', value: '6 High-Res Slides' },
      { label: 'Primary KPI', value: 'Saves & AOV Growth' },
      { label: 'Deck Deliverable', value: 'Full Presentation Ready' },
    ],
    featured: false,
  },
  {
    id: 'v7-cream-soda-summer',
    brandName: 'V7 Cream Soda',
    tracks: ['AI Content', 'Videos', 'Dubbing & Audio', 'Content Creation', 'Photography'],
    title: 'V7 Cream Soda: 360° Multi-Era Brand & Campaign Deck',
    clientOrSpec: 'Concept Campaign',
    specBadge: 'Concept',
    isFeaturedTop3: true,
    projectType: 'Brand Launch & Summer Campaign Deck',
    subtitle: '«صيف في سفن: كل جيل له صيفه... وده صيفنا» • 19-Slide Strategy Deck & Commercial Film',
    category: 'Brand Presentation & Deck',
    duration: '74s Reel + 19 Slides',
    durationAr: 'ريلز 74 ثانية + 19 شريحة',
    tagline: 'كل جيل له صيفه... وده صيفنا مع V7 Cream Soda.',
    description:
      'حملة إعلانية وتسويقية متكاملة موثقة بديك استراتيجي مكون من 19 شريحة لـ V7 Cream Soda. تعتمد على تقنية الـ Match Cuts والانتقال الزمني الصوتي البصري عبر 3 أجيال من المصايف المصرية (رأس البر، العجمي، والساحل الشمالي).',
    skills: ['Campaign Strategy', 'Match Cut Mechanics', 'Sound Identity', 'Brand Deck Design', 'Short-Form Reels', 'CapCut Pro'],
    objective:
      'خلق رابط عاطفي بين جيل الشباب وعلامة V7 من خلال مقارنة نوستالجية لأجواء الصيف في مصر عبر الأجيال الثلاثة وربط الانتعاش بعبوة V7 العصرية.',
    concept:
      'رحلة عبر 3 أجيال من الصيف المصري: جيل زمان في رأس البر مع راديو الشاطئ، جيل التسعينات في العجمي مع شريط الكاسيت، وجيل اليوم في الساحل مع عبوة V7 Cream Soda.',
    conceptScriptAr:
      'كل جيل له صيفه... جيل زمان في رأس البر وجمصة مع راديو الشاطئ والشمسيات القماش، جيل التسعينات في العجمي وشريط الكاسيت وسيارات الفيات، وده صيفنا مع V7 Cream Soda في الساحل! الانتعاش اللي بيكمل اللمة.',
    myRole:
      'مخطط الحملة والمخرج الإبداعي — صياغة فكرة الانتقال الزمني، كتابة الديك الإعلاني المكون من 19 شريحة استراتيجية، وهندسة الانتقالات الصوتية (Match Cuts).',
    whatIDid: [
      'Crafted 360° generational summer storytelling concept ("كل جيل له صيفه... وده صيفنا").',
      'Authored 19-slide comprehensive strategy deck with market context and moodboards.',
      'Directed match-cut visual transitions across Egyptian beach eras (Ras El Bar to Sahel).',
      'Produced 4K product hero visuals, splashing dynamics and color palette rules.',
      'Structured multi-platform rollout plan for TikTok, Instagram Reels and DOOH.'
    ],
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
    image: '/images/v7/v7_carousel_01.jpg',
    galleryImages: [
      '/images/v7/v7_carousel_01.jpg',
      '/images/v7/v7_carousel_02.jpg',
      '/images/v7/v7_carousel_03.jpg',
      '/images/v7/v7_carousel_04.jpg',
      '/images/v7/v7_carousel_05.jpg',
      '/images/v7/v7_carousel_06.jpg',
      '/images/v7/v7_carousel_07.jpg',
      '/images/v7/v7_carousel_08.jpg',
    ],
    videoUrl: '/videos/v7_summer_commercial.mp4',
    galleryVideos: [
      { title: 'V7 Cream Soda — Summer Commercial Cut (Match-Cut)', url: '/videos/v7_summer_commercial.mp4', category: 'TVC Reel' },
      { title: 'V7 Cream Soda — Generation Reveal & Story', url: '/videos/v7_summer_reveal.mp4', category: 'Era Reveal' },
      { title: 'V7 Cream Soda — Sahel Beach Dynamic Cut', url: '/videos/v7_summer_story.mp4', category: 'Sahel Edition' },
    ],
    aspectRatio: '9:16',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1fyGsWAhwiEdt_qkshdB9eCzsX1ldZ4Sh',
    stats: [
      { label: 'Format', value: 'Vertical Reel 9:16' },
      { label: 'Strategy Deck', value: '19 Master Slides' },
      { label: 'Carousel', value: '8 High-Res Slides' },
      { label: 'Audio Direction', value: '3-Era Match-Cuts' },
    ],
    featured: true,
  },
  {
    id: 'takaa-energy-launch',
    brandName: 'TAKAA Energy Drink',
    tracks: ['Content Creation', 'Videos', 'Marketing Strategy', 'AI Content'],
    title: 'TAKAA Energy Drink: Brand Identity, SOSTAC & Multi-Platform Launch',
    clientOrSpec: 'Concept Campaign',
    specBadge: 'Concept',
    isFeaturedTop3: true,
    projectType: 'AI Commercial, Viral CapCut & 18-Slide SOSTAC Strategy',
    subtitle: '«مودك ناقصه تاكة» • AI Commercial Master, CapCut Viral Template, 6-Slide Carousel & 18-Slide SOSTAC Deck',
    category: 'Brand Presentation & Deck',
    duration: 'Multi-Cut: 50s AI Master + CapCut + TikTok',
    durationAr: 'إعلان سينمائي 50 ثانية + تريند كاب كات + تيك توك + كاروسيل + SOSTAC',
    tagline: 'مودك مش محتاج إعادة ضبط كاملة.. هو بس ناقصه تاكة!',
    description:
      'إطلاق هوية تسويقية وإعلانية متكاملة لعلامة مشروبات الطاقة المصرية تاكة (TAKAA). يضم المشروع أربعة أقسام إبداعية مطابقة تماماً لمجلدات Google Drive: الفيديو التجاري بالذكاء الاصطناعي (ai video)، سلسلة فيديوهات تيك توك التفاعلية (Ai video tiktok)، قالب كاب كات الفيروسي للمنتج (capcut tempele trend)، وسلسلة كاروسيل إنستغرام لضبط المود (carousel social media)، بالإضافة إلى خطة SOSTAC الاستراتيجية المعتمدة من 18 شريحة عرض.',
    skills: [
      'Brand Identity',
      'SOSTAC Strategy',
      'AI Commercial Film',
      'CapCut Trend Template',
      'TikTok Short-Form Series',
      '4:5 Carousel Design',
      'Copywriting',
      'CapCut Pro',
    ],
    objective:
      'بناء براند طاقة جديد بروح مصرية خفيفة الظل وغير مبالغ فيها، موجهة للشباب والرياضيين والطلبة تحت شعار «مودك ناقصه تاكة». سد الفجوة بين ريد بول المرتفع السعر وستينج الشعبي عبر مشروب عصري بسعر متوازن وهوية مصرية قريبة من القلب.',
    concept:
      '«مودك مش محتاج ريسيت، محتاج تاكة» — استغلال لحظات هبوط الطاقة اليومية في العمل وزحمة القاهرة والمذاكرة، وتوفير شحنة انتعاش سريعة مصحوبة بقالب كاب كات بفتحة كانز سريعة وزوم خاطف (Zoom-Punch Cut) مع إعلان سينمائي يحلق فوق معالم القاهرة.',
    conceptScriptAr:
      '«صحيت تعبان؟ كل حاجة حواليك بتعصبك؟ حاضر في المكان بس مش موجود؟ مودك مش محتاج إعادة ضبط كاملة.. هو بس ناقصه تاكة! طاقة متجددة بدون توتر، بطعم مصري منعش يناسب أوقات العمل والدراسة والرياضة — Take the Tweak.»',
    myRole:
      'المبتكر الإبداعي واستراتيجي التسويق — كتابة الشعار والسكريبت، إعداد خطة الـ SOSTAC الاستراتيجية، إخراج الإعلان السينمائي بالذكاء الاصطناعي، هندسة قالب الكاب كات الفيروسي، وتصميم شرائح الكاروسيل وهوية الحساب.',
    whatIDid: [
      'Authored 18-slide certified SOSTAC marketing plan with SWOT, 5 Ss objectives, and 12-week roadmap.',
      'Directed cinematic 9:16 AI commercial showing the TAKAA can gliding across Cairo skyline, Pyramids, and Nile.',
      'Engineered viral 15-second CapCut pop-reveal template synced to authentic can-crack audio rhythm.',
      'Produced 2 interactive TikTok video cuts and 5 photographic product lifestyle shots.',
      'Designed 6-slide 4:5 Instagram educational carousel ("5 Signs Your Mood Needs a Tweak").',
      'Established full campaign visual identity in navy blue, electric orange, and Cairo golden hour tones.',
    ],
    tools: [
      'CapCut Pro',
      'Generative AI Video',
      'SOSTAC Framework',
      'Canva',
      'Meta Ad Library',
      'PowerPoint Decks',
    ],
    deckFileName: 'TAKAA_SOSTAC_Plan.pptx',
    pdfDownloadUrl: '/decks/TAKAA_SOSTAC_Plan.pptx',
    pdfFileName: 'TAKAA_SOSTAC_Plan.pptx',
    deckDownloadUrl: '/decks/TAKAA_SOSTAC_Plan.pptx',
    driveFolderUrl: 'https://drive.google.com/drive/folders/10wLuUC282nv83_lg0HGdbeBZMW5S25mD',
    deckSlides: [
      {
        slideNumber: 1,
        title: 'TAKAA: Egyptian Lifestyle Energy Drink',
        category: 'Brand Conception',
        highlight: 'Your mood needs a tweak. Take the Tweak.',
        points: [
          'A concept Egyptian energy-drink brand born for everyday Egyptian moments.',
          'Core campaign platform: "مودك ناقصه تاكة" (Your mood needs a tweak).',
          'Conceived, designed and directed by Mohamed Mostafa Taher Salem.',
        ],
      },
      {
        slideNumber: 2,
        title: 'Who is TAKAA? The Tweak Concept',
        category: 'Brand Conception',
        highlight: 'Your mood does not need a reset. Just a tweak.',
        points: [
          'Energy drinks usually shout about extreme sports, all-nighters or hype.',
          'TAKAA lives in the quiet slump: 2 PM at the office, sitting in Cairo traffic, or staring at page 10 of a slide deck.',
          'A crisp, refreshing lift with Egyptian soul and modern aesthetics.',
        ],
      },
      {
        slideNumber: 3,
        title: 'The Plan: SOSTAC Framework',
        category: 'Strategic Framework',
        highlight: 'Six Steps from Idea to Results',
        points: [
          'Situation: Where are we now in the Egyptian energy drink market?',
          'Objectives: Five quantifiable goals for the first 90 days.',
          'Strategy: The mood-tweak drink positioned between value and premium.',
          'Tactics: Content plan, viral CapCut template, 6-slide carousel, and AI commercials.',
          'Action: 12-week execution roadmap across Foundation, Launch, and Scale.',
          'Control: 3-second hold rate (35%+), engagement (4%+), and trial velocity.',
        ],
      },
      {
        slideNumber: 4,
        title: 'Situation Analysis: Shelf & Price Realities in Egypt',
        category: 'Situation Analysis',
        highlight: '~4.9x Price Gap: Red Bull vs Sting',
        points: [
          'Egypt energy-drink shelf is crowded, price-sensitive and shifting.',
          'Sting dominates high-volume convenience trade with aggressive price accessibility (~15 EGP).',
          'Red Bull commands premium nightlife and sports (~75 EGP), creating a 4.9x price divergence.',
          'An underserved middle tier exists for modern urban youth seeking premium feel at reachable price points.',
        ],
        metrics: [
          { label: 'Shelf Price Gap', value: '~4.9x' },
          { label: 'Inflation Context', value: '14.5%' },
        ],
      },
      {
        slideNumber: 5,
        title: 'Competitor Audit: Red Bull, Sting, Monster & Fury',
        category: 'Competitor Audit',
        highlight: 'Strong Brands, but None Owns an Egyptian Everyday Mood',
        points: [
          'Red Bull: Global extreme sports authority, high price barrier, low colloquial cultural intimacy.',
          'Sting: Mass market distribution powerhouse, perceived as artificial / low-tier caffeine hit.',
          'Monster & Power Horse: American / European gym aesthetics, lacks Egyptian cultural wit.',
          'Competitive White Space: TAKAA owns the relatable Egyptian daily mood lift.',
        ],
      },
      {
        slideNumber: 6,
        title: 'SWOT Matrix: Sharp Identity, Agile Start',
        category: 'Strategic Analysis',
        highlight: 'Capitalizing on Post-2024 Domestic Product Appetite',
        points: [
          'Strengths: Distinct Egyptian visual identity (navy, orange, Cairo golden-hour), agile short-form video creation, low overhead.',
          'Weaknesses: Zero existing physical distribution at start, cannot match Red Bull media budget or Sting commodity pricing.',
          'Opportunities: Egyptian consumers actively seeking and championing domestic beverage alternatives; viral social media loops.',
          'Threats: Fierce retail shelf fee barriers, volatile raw material inflation.',
        ],
      },
      {
        slideNumber: 7,
        title: 'Objectives: 5 Ss for the First 90 Days',
        category: 'Objectives',
        highlight: 'Quantifiable Launch Metrics',
        points: [
          'SELL: 2,000 first-time product trial conversions.',
          'SERVE: < 1 hour average response time across Instagram DMs & comments.',
          'SPEAK: 500,000 video impressions and 5,000 qualified Instagram followers.',
          'SAVE: Capped cost-per-trial benchmark pre-calibrated prior to paid spend.',
          'SIZZLE: 20 user-generated content (UGC) creator endorsements.',
        ],
        metrics: [
          { label: 'First Trials', value: '2,000' },
          { label: 'DM Reply Time', value: '< 1 hr' },
          { label: 'Video Reach', value: '500K' },
          { label: 'Followers Target', value: '5,000' },
        ],
      },
      {
        slideNumber: 8,
        title: 'Positioning: The Mood-Tweak for Urban Egypt',
        category: 'Positioning Strategy',
        highlight: 'Between Value & Premium with Egyptian Soul',
        points: [
          'Target Persona: Urban Egyptians 18–34 (students, corporate climbers, creative freelancers, commuters).',
          'Value Proposition: "Refresh the mood, not the whole day." — honest, achievable, without fake adrenaline promises.',
          'Aesthetic: Sophisticated navy blue and vibrant electric orange palette evocative of Cairo at golden hour.',
        ],
      },
      {
        slideNumber: 9,
        title: 'Content Strategy: Foundation Under Every Post',
        category: 'Content Strategy',
        highlight: 'Same Day. New Mood. (Relatable Dip → Instant Switch)',
        points: [
          'Content Pillar 1: Mood Moments — relatable everyday Cairo situations (traffic, midday fatigue, study pressure).',
          'Content Pillar 2: Cairo Golden Hour — high-end aesthetic visuals over city rooftops and bridges.',
          'Content Pillar 3: The Switch — dynamic split-screen transitions from slumping to locked-in focus.',
          'Content Pillar 4: Behind the Tweak — creative process, flavor tests, and community banter.',
        ],
      },
      {
        slideNumber: 10,
        title: 'Tactics & Channel Distribution Plan',
        category: 'Tactics',
        highlight: 'Instagram First (23.9M Egypt Users) + TikTok & Pinterest',
        points: [
          'Instagram First: Flagship channel for visual polish, carousel depth, and community direct messaging.',
          'TikTok: Fast humor, trending audio remixes, and creator collaboration challenges.',
          'Distribution Cadence: 4 organic posts per week + paid boost allocation on top 3-second hold rates.',
          'Repurposing Engine: One commercial film yields three 15-second cuts, carousel stills, and Pinterest pins.',
        ],
      },
      {
        slideNumber: 11,
        title: 'Content Creation Workflow (6-Step Proven Model)',
        category: 'Creative Process',
        highlight: 'Tested & Refined Across All TAKAA Assets',
        points: [
          'Step 1 Research: Continuous trend scanning across Pinterest, Reels and TikTok audio charts.',
          'Step 2 Ideation: Concept angles like "5 Signs Your Mood Needs a Tweak".',
          'Step 3 Copywriting: Egyptian Arabic colloquial punchlines ("Take the Tweak") with single clear CTA.',
          'Step 4 Design & Video: 4:5 carousels, 9:16 generative AI commercial shots, CapCut rhythm edits.',
          'Step 5 Optimization: Single-variable hook testing, retaining clips exceeding 35% 3-sec retention.',
          'Step 6 Feedback: Community comments and DMs directly guide the next production sprint.',
        ],
      },
      {
        slideNumber: 12,
        title: 'Interactive Carousel: 5 Signs Your Mood Needs a Tweak',
        category: 'Social Content',
        highlight: '6-Slide High-Retention Educational Format (1080×1350)',
        points: [
          'Slide 1: Hook — "صحيت من النوم تعبان؟" (Woke up exhausted?)',
          'Slide 2-4: Micro-relatable scenarios (everything annoying, physically present but mentally absent).',
          'Slide 5: The Switch — "مودك مش محتاج ريسيت، محتاج تاكة."',
          'Slide 6: Product reveal with flavor profiles and call to comment/save.',
        ],
      },
      {
        slideNumber: 13,
        title: 'AI Commercial: One Can. All of Cairo.',
        category: 'Commercial Video',
        highlight: 'Cinematic Cairo Landmarks to Product Splash',
        points: [
          'The TAKAA can glides over the Nile, floats past modern Heliopolis rooftops, and cuts towards the Pyramids.',
          'Concludes on an icy golden-hour splash and logo resolve: "Take the Tweak."',
          'Multi-platform outputs: 9:16 50s Director\'s Cut, 15s TikTok speed cuts, and static frame posters.',
        ],
      },
      {
        slideNumber: 14,
        title: 'CapCut Template: Product Pop-Reveal Mechanics',
        category: 'Viral Mechanics',
        highlight: 'Snap Zooms & Synchronized Can-Crack Audio Beat',
        points: [
          'Engineered for viral TikTok and Instagram UGC adoption.',
          'Syncs high-velocity snap zooms to the authentic sound of an icy can opening.',
          'Pre-packaged template enables creators and consumers to drop their own daily clips effortlessly.',
        ],
      },
      {
        slideNumber: 15,
        title: 'Action: 12-Week Launch Roadmap',
        category: 'Execution Timeline',
        highlight: 'Foundation (W1-3) • Launch (W4-7) • Scale (W8-12)',
        points: [
          'Weeks 1-3 (Foundation): Page setup, identity kit, content bank creation, initial seed tests.',
          'Weeks 4-7 (Launch): 4 organic posts weekly, AI commercial debut, CapCut template push.',
          'Weeks 8-12 (Scale): Creator gifting, micro-influencer UGC seeding, paid boost amplification.',
        ],
      },
      {
        slideNumber: 16,
        title: 'Action: Strategic Budget Allocation',
        category: 'Budgeting',
        highlight: 'Paid Social (40%) • Production (30%) • Creators (15%)',
        points: [
          '40% Paid Social: Meta & TikTok algorithmic boosts on validated 3-sec retention winners.',
          '30% Content Production: AI commercial renders, carousel design, sound engineering.',
          '15% Creator & UGC Seeding: Product seeding with 20 micro-creators.',
          '10% Sampling & Events: Office hubs and campus activation sampling.',
          '5% Contingency: Fast response fund to capitalize on emerging trends.',
        ],
        metrics: [
          { label: 'Paid Social', value: '40%' },
          { label: 'Production', value: '30%' },
          { label: 'Creators UGC', value: '15%' },
          { label: 'Sampling', value: '10%' },
        ],
      },
      {
        slideNumber: 17,
        title: 'Control: Performance KPIs & Weekly Cadence',
        category: 'Analytics & Control',
        highlight: '3-Sec Hold Rate (35%+) • Engagement Rate (4%+)',
        points: [
          '3-Sec Hold Rate: Target >35% to prove creative hook effectiveness before allocating ad spend.',
          'Engagement Rate: Target >4% across comments, saves, shares, proving authentic community affinity.',
          'Weekly Decision Loop: Double down on winning hooks, pause low-performing edits, iterate.',
        ],
        metrics: [
          { label: '3-Sec Hold Rate', value: '>35%' },
          { label: 'Engagement Rate', value: '>4%' },
          { label: 'Reach Target', value: '500K' },
        ],
      },
      {
        slideNumber: 18,
        title: 'Take the Tweak: Concept Creator Sign-Off',
        category: 'Creator Portfolio',
        highlight: 'Mohamed Mostafa Taher Salem',
        points: [
          'Concept Direction: Mohamed Mostafa Taher Salem.',
          'Specialization: Digital Marketing Strategy & Generative AI Commercial Video.',
          'Official Portfolio Case Study: TAKAA Lifestyle Energy Drink Concept.',
        ],
      },
    ],
    process: [
      {
        step: '01. التقسيم الإبداعي 1: ai video (الإعلان التجاري السينمائي)',
        detail: 'إنتاج إعلان سينمائي 9:16 بجودة 1080p يستعرض طيران كانز تاكة فوق معالم القاهرة والنيل والأهرامات حتى الهبوط المنعش في ساعة الغروب الذهبية.',
      },
      {
        step: '02. التقسيم الإبداعي 2: capcut tempele trend (قالب كاب كات الفيروسي)',
        detail: 'تطوير قالب كاب كات بفتحة كانز سريعة وزوم خاطف (Zoom-Punch Cut) متزامن مع إيقاع الطرقعة السريعة لتسهيل انتشار البراند بشكل مجاني على تيك توك وريلز.',
      },
      {
        step: '03. التقسيم الإبداعي 3: Ai video tiktok (سلسلة تيك توك التفاعلية)',
        detail: 'مونتاج نسختين تفاعليتين لتيك توك مع 5 لقطات فوتوغرافية احترافية تسلط الضوء على استهلاك المشروب في المكاتب والمذاكرة.',
      },
      {
        step: '04. التقسيم الإبداعي 4: carousel social media (كاروسيل إنستغرام)',
        detail: 'تصميم سلسلة كاروسيل من 6 شرائح تفاعلية بمقاس 4:5 (1080x1350) بعنوان «5 علامات إن مودك ناقصه تاكة» بباليتة ألوان كحلية وبرتقالية متناسقة.',
      },
      {
        step: '05. الاستراتيجية المتكاملة: TAKAA SOSTAC Plan (18 شريحة عرض)',
        detail: 'إعداد خطة تسويق استراتيجية متكاملة بنموذج SOSTAC تشمل تحليل السوق وفارق السعر (4.9x بين ريد بول وستينج)، أهداف الـ 5 Ss، وخطة ميزانية لـ 12 أسبوع.',
      },
    ],
    finalResult:
      'إطلاق متكامل لهوية علامة تجارية يجمع بين إعلان سينمائي بالذكاء الاصطناعي، قالب كاب كات فيروسي، سلسلة تيك توك، 6 سلايدات كاروسيل، وخطة SOSTAC كاملة من 18 شريحة عرض.',
    image: '/images/takaa/takaa_carousel_01.jpg',
    galleryImages: [
      '/images/takaa/takaa_carousel_01.jpg',
      '/images/takaa/takaa_carousel_02.jpg',
      '/images/takaa/takaa_carousel_03.jpg',
      '/images/takaa/takaa_carousel_04.jpg',
      '/images/takaa/takaa_carousel_05.jpg',
      '/images/takaa/takaa_carousel_06.jpg',
    ],
    videoUrl: '/videos/takaa/takaa_ai_commercial_master.mp4',
    galleryVideos: [
      {
        title: '🎬 AI Commercial Film Master (قسم: ai video)',
        url: '/videos/takaa/takaa_ai_commercial_master.mp4',
        category: 'ai video',
      },
      {
        title: '⚡ CapCut Viral Pop-Reveal Template (قسم: capcut tempele trend)',
        url: '/videos/takaa/takaa_capcut_template_viral.mp4',
        category: 'capcut tempele trend',
      },
      {
        title: '📱 TikTok Dynamic Cut #1 (قسم: Ai video tiktok)',
        url: '/videos/takaa/takaa_tiktok_cut_01.mp4',
        category: 'Ai video tiktok',
      },
      {
        title: '📱 TikTok Dynamic Cut #2 (قسم: Ai video tiktok)',
        url: '/videos/takaa/takaa_tiktok_cut_02.mp4',
        category: 'Ai video tiktok',
      },
    ],
    aspectRatio: '9:16',
    stats: [
      { label: 'Campaign Slogan', value: 'مودك ناقصه تاكة' },
      { label: 'Drive Divisions', value: '4 Sections + SOSTAC' },
      { label: 'SOSTAC Slides', value: '18 Certified Slides' },
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
    duration: 'Full Funnel Setup',
    durationAr: 'إعداد مسار بيع متكامل',
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
    projectType: 'Accredited Strategic Blueprint (MCIT DEPI)',
    subtitle: 'Certified Capstone: SOSTAC Framework, Budgeting, Meta Ads & Omnichannel Growth',
    category: 'Marketing Strategy',
    duration: 'Certified Master Capstone',
    durationAr: 'مشروع تخرج معتمد',
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
    whatIDid: [
      'Applied certified SOSTAC framework across situation audit, objectives, and strategy.',
      'Built media buying models and budgeting allocations for Meta and Google Ads.',
      'Designed full-funnel TOFU/MOFU/BOFU customer journeys and retargeting logic.',
      'Delivered capstone documentation accredited by Ministry of Communications (ID: 21172333).',
      'Formulated KPI measurement matrix focusing on CAC reduction and ROAS scaling.'
    ],
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
    brandName: 'Spiro Spathis (سبيرو سباتس)',
    tracks: ['AI Content', 'Videos', 'Dubbing & Audio'],
    title: 'Spiro Spathis (سبيرو سباتس) — «الأصل بيكمل معانا»',
    clientOrSpec: 'Concept Campaign',
    specBadge: 'Concept',
    projectType: 'Brand Heritage Commercial Spec (TVC)',
    subtitle: '«الأصل بيكمل معانا» • Cinematic Egyptian Heritage TVC',
    category: 'AI Commercial',
    tagline: 'سبيرو سباتس — الأصل طعمه مبيتغيرش، وبيرجع أقوى.',
    description:
      'إعلان تجاري سينمائي عالي الطاقة لعلامة سبيرو سباتس التاريخية، يجمع بين نبض الشارع المصري، لمة الصحاب، وانتعاش الصودا الأصلية بمؤثرات صوتية ومونتاج سريع.',
    skills: ['Creative Direction', 'AI Commercial Video', 'Sound Design & Foley', 'Brand Identity', 'Pacing & Editing', 'CapCut Pro'],
    objective:
      'إعادة إحياء وتصدر علامة سبيرو سباتس كرمز للفخر والانتماء الوطني المصري عبر إعلان فيديو سريع يخاطب جيل الشباب ويربط متعة اللحظة بتجربة المنتج المنعشة.',
    concept:
      '“الأصل بيكمل معانا”: سيمفونية بصرية وصوتية بين أصوات فتح العبوات وفقاعات الصودا وتجمع الأصدقاء في شوارع القاهرة التاريخية، مصحوبة بإيقاع سريع وتلوين سينمائي مشبع.',
    conceptScriptAr:
      'سبيرو سباتس — الأصل طعمه مبيتغيرش، وبيرجع أقوى! نبض الشارع المصري، لمة الصحاب، وانتعاش الصودا الأصلية بمؤثرات صوتية ومونتاج سريع.',
    myRole:
      'المخرج الإبداعي ومصمم الصوت ومونتير الإعلان — ابتكار الفكرة، توليد المشاهد السينمائية بالذكاء الاصطناعي، وهندسة شريط الصوت والمؤثرات الواقعية.',
    whatIDid: [
      'Developed emotional narrative celebrating 100+ years of Egyptian soda heritage.',
      'Directed sound foley of bottle opening, fizz, and cold condensation drops.',
      'Combined nostalgic retro visual cues with modern high-definition cinematography.',
      'Edited 41-second TVC spot with authentic Egyptian soundtrack in CapCut Pro.',
      'Delivered campaign assets adapted for both 16:9 widescreen and 9:16 reels.'
    ],
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
    duration: '41 sec',
    durationAr: '41 ثانية',
    stats: [
      { label: 'Brand', value: 'Spiro Spathis' },
      { label: 'Campaign Angle', value: 'الأصل بيكمل معانا' },
      { label: 'Quality', value: 'Cinematic 4K Audio-Visual' },
    ],
    featured: true,
  },
  {
    id: 'buffalo-burger-commercial',
    brandName: 'Buffalo Burger (بافلو برجر)',
    tracks: ['Videos', 'Photography'],
    title: 'Buffalo Burger (بافلو برجر) — Appetite Craving & Sizzle Reel',
    clientOrSpec: 'Concept Campaign',
    specBadge: 'Concept',
    projectType: 'Commercial Food TVC Spec / Appetizing Reel',
    subtitle: '«The Anatomy of a Craving» • High-Velocity Fast-Casual Food TVC',
    category: 'Food Advertising',
    duration: '30 sec Reel',
    durationAr: 'ريلز 30 ثانية',
    tagline: 'طعم أصيل ومونتاج ناري يثير الشهية من أول ثانية.',
    description:
      'إعلان تجاري سريع ومكثف لعلامة بافلو برجر، يركز على لقطات الماكرو الحارة للجبن الذائب والبرجر المشوي مع مونتاج سريع يرفع إفراز الدوبامين والرغبة الفورية في الطلب.',
    skills: ['Food Advertising', 'Macro Food Direction', 'Visual Speed Ramping', 'Sound FX & Crunch Foley', 'Short-Form Hooks', 'CapCut Pro'],
    objective:
      'تحفيز الشهية الفورية ودفع المستخدم لطلب الوجبة مباشرة عبر منصات التواصل (Reels & TikTok) باستخدام تقنيات التصوير البطيء والانتقالات السريعة.',
    concept:
      '«The Anatomy of a Craving»: استعراض ناري لمراحل إعداد الساندوتش بلقطات مقربة جداً تُبرز تفاصيل اللحم والصلصات وتطاير بذور السمسم مع إيقاع صوتي متفجر.',
    conceptScriptAr:
      'الجبنة السايحة لما تتقاطع مع اللحم المشوي على اللهب، مش بس وجبة... دي متعة بتسكت أي جوع! طعم أصيل ومونتاج ناري يثير الشهية من أول ثانية.',
    myRole:
      'المخرج والمونتير الإعلاني — ضبط توقيتات التقطيع (0.8 ثانية لكل لقطة)، هندسة مؤثرات القرمشة والصوت، وتوليد المشاهد الحركية بدقة فائقة.',
    whatIDid: [
      'Directed macro food sizzle cinematography focusing on melted cheese and flame grilling.',
      'Engineered high-fidelity Foley sound design (crunch, sizzle, sauce drip).',
      'Crafted hunger-inducing hook in the first 1.5 seconds to stop social feed scrolling.',
      'Edited high-retention commercial cut with rhythmic beat-synced transitions.',
      'Structured direct ordering CTA aligned with discount promotions.'
    ],
    tools: ['AI Video Generation', 'CapCut Pro (Speed Ramping)', 'Macro Sound Design', 'Cinematic Color Grading'],
    process: [
      { step: '01. هندسة الهوك النفسي', detail: 'بدء الفيديو فوراً بلقطة سريعة لقطع الجبن الذائب وانفجار النكهة لجذب الانتباه في أول ثانية.' },
      { step: '02. إبراز تفاصيل اللحم والخبز', detail: 'توليد زوايا ماكرو تبرز لمعان الخبز المحمص واللحم المشوي على اللهب.' },
      { step: '03. مزامنة الإيقاع الحركي', detail: 'ربط ضربات الموسيقى بحركة السكاكين ورشة الصوص وصوت القرمشة.' },
    ],
    finalResult:
      'إعلان رأسي عالي التحويل لمنصات إنستغرام وتيك توك يعزز مكانة بافلو برجر كخيار أول لعشاق البرجر الفاخر.',
    image: '/images/buffalo/buffalo_carousel_01.webp',
    galleryImages: [
      '/images/buffalo/buffalo_carousel_01.webp',
      '/images/buffalo/buffalo_carousel_02.webp',
      '/images/buffalo/buffalo_carousel_03.webp',
      '/images/buffalo/buffalo_carousel_04.webp',
      '/images/buffalo/buffalo_carousel_05.webp',
    ],
    videoUrl: 'https://youtube.com/shorts/6y1hBgpjbUo?si=1QVmwnI_Naly2V24',
    videoPreviewUrl: 'https://youtube.com/shorts/6y1hBgpjbUo?si=1QVmwnI_Naly2V24',
    galleryVideos: [
      { title: 'Buffalo Burger — Sizzle Reel (YouTube Shorts)', url: 'https://youtube.com/shorts/6y1hBgpjbUo?si=1QVmwnI_Naly2V24', category: 'YouTube Shorts' },
      { title: 'Buffalo Burger — Commercial Master Cut', url: '/videos/buffalo_burger_commercial.mp4', category: '1080p Master' },
    ],
    aspectRatio: '9:16',
    stats: [
      { label: 'Brand', value: 'Buffalo Burger' },
      { label: 'Format', value: 'Vertical Reel 9:16' },
      { label: 'Carousel', value: '5 High-Res Slides' },
      { label: 'Primary KPI', value: 'Appetite & Instant Orders' },
    ],
    featured: true,
    driveFolderUrl: 'https://drive.google.com/drive/folders/1bu31CMXTgz09XjSGdnSPRDzg_DhLdy9e',
  },
  {
    id: 'breadfast-campaign',
    brandName: 'Breadfast (بريد فاست)',
    tracks: ['Videos', 'Content Creation'],
    title: 'Breadfast — Breakfast, Delivered When Your Morning Starts Late',
    clientOrSpec: 'Concept Campaign',
    specBadge: 'Concept',
    projectType: 'Spec Advertising Campaign / Food Delivery Video',
    subtitle: 'Spec Advertising Campaign · Food Delivery · Short-form Video & 5-Slide Carousel',
    category: 'Food Advertising',
    tagline: 'Your morning can start late, but breakfast does not have to.',
    description: 'A short-form Egyptian breakfast delivery concept built around a late morning, a missed breakfast and a fast product payoff, paired with a 5-slide e-commerce carousel.',
    skills: ['Creative Advertising', 'Video Storytelling', 'Product Reveal', 'Voice-over Direction', 'CTA Structure', 'CapCut Pro'],
    objective: 'Create an Egyptian breakfast delivery advertisement built around a relatable morning problem.',
    concept: 'A young man wakes up late, rushes out without breakfast, stays connected with his friends, and eventually catches up with a fresh Breadfast delivery.',
    conceptScriptAr:
      'صحيت متأخر ومستعجل على الشغل وفطارك لسه مجهزش؟ مش مشكلة... فطارك المفضل من بريد فاست هيوصلك طازة وسخن في أسرع وقت. يومك يبدأ متأخر، بس فطارك ميتأخرش!',
    myRole: 'Creative Concept, Story & Dialogue Writing, Voice-over Direction, Video Editing & Motion Zooms, and CTA Structure.',
    whatIDid: [
      'Scripted relatable Egyptian morning scenario with conversational hooks and natural dialogue.',
      'Directed voice-over rhythm and sound pacing to match morning urgency.',
      'Edited vertical commercial reel in CapCut Pro with fast cuts and dynamic motion zooms.',
      'Designed Breadfast product reveal and fresh breakfast unboxing payoff.',
      'Structured clear final call-to-action (CTA) driving direct app breakfast orders.'
    ],
    tools: ['CapCut Pro', 'Canva Pro', 'AI Creative Tools', 'Audio Editing'],
    process: [
      { step: '01. Relatable Morning Problem', detail: 'A young man wakes up late and rushes out without breakfast.' },
      { step: '02. Dynamic Voice-over & Dialogue', detail: 'Egyptian colloquial dialogue, opening voice-over, and original music.' },
      { step: '03. Delivery Payoff & CTA', detail: 'Breadfast delivery bag reveal, fresh breakfast payoff, and clear call-to-action.' },
    ],
    finalResult: 'A relatable Egyptian morning story turned into a food-delivery campaign. The edit uses natural dialogue, fast pacing, subtle digital zooms, original music and a product-focused ending to move from problem to payoff.',
    image: '/images/breadfast/breadfast_carousel_01.webp',
    galleryImages: [
      '/images/breadfast/breadfast_carousel_01.webp',
      '/images/breadfast/breadfast_carousel_02.webp',
      '/images/breadfast/breadfast_carousel_03.webp',
      '/images/breadfast/breadfast_carousel_04.webp',
      '/images/breadfast/breadfast_carousel_05.webp',
    ],
    videoUrl: 'https://youtu.be/2FbPg2xFnPo?si=irzAosIboMAcvKgi',
    videoPreviewUrl: 'https://youtu.be/2FbPg2xFnPo?si=irzAosIboMAcvKgi',
    galleryVideos: [
      { title: 'Breadfast — Morning Story & Delivery (YouTube)', url: 'https://youtu.be/2FbPg2xFnPo?si=irzAosIboMAcvKgi', category: 'YouTube' },
      { title: 'Breadfast — Commercial Cut (1080p MP4)', url: '/videos/breadfast_delivery_campaign.mp4', category: 'Commercial Master' },
    ],
    aspectRatio: '9:16',
    duration: '64 sec',
    durationAr: '64 ثانية',
    stats: [
      { label: 'Format', value: 'Vertical Reel 9:16' },
      { label: 'Language', value: 'Egyptian Arabic Dialogue' },
      { label: 'Carousel', value: '5 High-Res Slides' },
      { label: 'Payoff', value: 'Fresh Breakfast CTA' },
    ],
    featured: true,
    driveFolderUrl: 'https://drive.google.com/drive/folders/1FFCqWudCQE0cM_b6rpe9IJRHWllAFpX6',
  },
  {
    id: 'talabat-egypt-campaign',
    brandName: 'Talabat (طلبات مصر)',
    tracks: ['Videos', 'Content Creation', 'AI Content'],
    title: 'Talabat Egypt (طلبات): High-Velocity Delivery TVC & SCQA Strategy',
    clientOrSpec: 'Concept Campaign',
    specBadge: 'Concept',
    projectType: 'Food Delivery Commercial Spec & Funnel',
    subtitle: '«أسرع من جوعك» • 68s Dynamic Commercial & Late-Night Delivery Story',
    category: 'Food Advertising',
    duration: '68 sec Reel',
    durationAr: 'ريلز 68 ثانية',
    tagline: 'جوعان ومش قادر تنزل؟ طلبات يوصلك في ثواني أينما كنت.',
    description:
      'إعلان تجاري سريع الإيقاع لعلامة طلبات مصر، يعالج مشكلة جوع منتصف الليل والرغبة الفورية في الأكل الساخن، مع حبكة درامية إعلانية سريعة ومونتاج حركي يعتمد على إيقاع السكربت بالعامية المصرية.',
    skills: ['Speed-Ramping Edit', 'Relatable Comedy Hook', 'App Order Payoff', 'Sound Design & Foley', 'CapCut Pro'],
    objective:
      'تحفيز طلبات الأكل الفورية في أوقات الذروة الليلية عبر فيديو ترفيهي سريع يركز على سهولة استخدام التطبيق وسرعة التوصيل.',
    concept:
      'مفارقة جوع الليل: الثلاجة فارغة، والمجهود صفر، والحل في لمسة واحدة على تطبيق طلبات يفتح باب الشقة بدليفري سخن ومقرمش.',
    conceptScriptAr:
      'الساعة 2 بالليل، الجوع ضرب فجأة والتلاجة مفيهاش غير مية مثلجة... فتحت أبلكيشن طلبات وبضغطة واحدة الساندوتش وصل سخن ومقرمش! طلبات.. أسرع من جوعك.',
    myRole:
      'المونتير الإبداعي ومصمم الصوت — كتابة السكربت بالعامية المصرية، ضبط تقطيع المشاهد على إيقاع الحوار، وهندسة المؤثرات الصوتية والمونتاج السريع بـ CapCut Pro.',
    whatIDid: [
      'Wrote relatable late-night Egyptian food craving dialogue and hook.',
      'Edited 68-second dynamic reel with synchronized fast zooms and Foley sound FX.',
      'Designed app purchase funnel and instant order CTA.',
      'Integrated food beauty shots and appetizing unboxing payoff.'
    ],
    tools: ['CapCut Pro', 'Canva Pro', 'Sound Design & Foley', 'SCQA Framework'],
    image: talabatRealThumb,
    galleryImages: [
      talabatRealThumb,
      '/images/talabat/talabat_commercial_eating_frame.jpg',
      foodDeliveryPoster,
      talabatEgyptAd,
    ],
    videoUrl: foodDeliveryVideo,
    aspectRatio: '9:16',
    pdfDownloadUrl: '/documents/Mohamed_Taher_Executive_Portfolio.pdf',
    stats: [
      { label: 'Format', value: 'Vertical Reel 9:16' },
      { label: 'Duration', value: '68 Seconds' },
      { label: 'Primary KPI', value: 'Instant App Orders' }
    ],
    featured: false,
    driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
  },
  {
    id: 'baba-geh-campaign',
    brandName: 'Baba Geh (بابا جه)',
    tracks: ['Videos', 'Dubbing & Audio', 'Content Creation', 'AI Content'],
    title: 'Baba Geh (بابا جه) — Montage & Viral Reels Cut',
    clientOrSpec: 'Concept Campaign',
    specBadge: 'Concept',
    projectType: 'Comedy Advertising Spec & Viral Cut',
    subtitle: '«أب للإيجار... بس بمشاعر حقيقية» • 60s Fast-Cut Viral Reel & Audio Sync',
    category: 'Short-Form Video',
    duration: '60 sec Reel',
    durationAr: 'ريلز 60 ثانية',
    tagline: 'بابا جه — الكوميديا الذكية والمشاعر اللي بتلمس كل بيت مصري.',
    description:
      'سلسلة مقاطع وفيديوهات إعلانية وترفيهية سريعة الإيقاع لفكرة ومسلسل «بابا جه»، تركز على المفارقات الكوميدية وسيكولوجية العلاقات الأسرية، مع مونتاج سينمائي وهندسة صوتية ودوبلاج جذاب لمخاطبة منصات السوشيال ميديا والتيك توك.',
    skills: ['Creative Video Editing', 'Comedy Pacing & Timing', 'Sound Design & Foley', 'Social Hooks Engineering', 'Dialogue Sync', 'CapCut Pro'],
    objective:
      'تحقيق أعلى معدلات انتشار وتفاعل عاطفي وكوميدي (Viral Engagement) عبر مقاطع ريلز وفيديوهات قصيرة تبرز المفارقات الساخرة بحبكة إيقاعية مشوقة.',
    concept:
      'مفارقة «أب للإيجار»: بناء مواقف طريفة وسريعة بين متطلبات الأبناء والمواقف غير المتوقعة، مصحوبة بوقفات كوميدية دقيقة ومؤثرات صوتية تعزز التفاعل.',
    conceptScriptAr:
      'بابا جه — أب للإيجار... بس بمشاعر حقيقية! لما تلاقي نفسك بتواجه متطلبات العيال اللي مبتخلصش في مواقف متتوقعهاش، الكوميديا الذكية اللي بتلمس كل بيت مصري.',
    myRole:
      'المونتير الإبداعي ومصمم الصوت وهندسة الخطافات السريعة (Viral Hooks) ومزامنة الحوار والمؤثرات الصوتية الواقعية.',
    whatIDid: [
      'Scripted family comedic sketch rooted in relatable Egyptian household dynamics.',
      'Edited two master cuts: 45s warm family story and 60s fast-paced comedy montage.',
      'Engineered Foley sound effects and crisp dialogue synchronization in CapCut Pro.',
      'Applied warm cinematic color grading tailored for Egyptian social feeds.',
      'Optimized opening 2-second hook to maximize viewer retention and shares.'
    ],
    tools: ['CapCut Pro', 'Adobe Premiere Pro', 'Sound Design & Foley', 'TikTok & Reels Trend Engineering'],
    process: [
      { step: '01. استخراج الخطافات الكوميدية', detail: 'انتقاء أكثر الجمل الحوارية والمواقف الساخرة ذات التأثير الفوري في أول 3 ثوانٍ.' },
      { step: '02. ضبط توقيت الـ Punchline', detail: 'مونتاج سريع مع وقفات كوميدية دقيقة ومؤثرات صوتية (Foley FX) تعزز الضحك والتفاعل.' },
      { step: '03. التصميم البصري والألوان', detail: 'تلوين دافئ يعكس روح البيت المصري مع نصوص متحركة بارزة (Dynamic Kinetic Subtitles).' },
      { step: '04. تصدير المنصات وتوجيه المشاركات', detail: 'صياغة صيغ النشر (9:16) مع هاشتاجات التريند وتوجيه الجمهور للتعليق والمشاركة.' },
    ],
    finalResult:
      'سلسلة مقاطع ترفيهية وكوميدية متقنة الإخراج تجمع بين سرعة الانتشار والجودة العالية والإيقاع المشوق مدتها دقيقة كاملة.',
    image: '/images/baba_geh/baba_geh_carousel_01.webp',
    reelImage: '/images/baba_geh/baba_geh_carousel_01.webp',
    galleryImages: [
      '/images/baba_geh/baba_geh_carousel_01.webp',
      '/images/baba_geh/baba_geh_carousel_02.webp',
      '/images/baba_geh/baba_geh_carousel_03.webp',
      '/images/baba_geh/baba_geh_carousel_04.webp',
      '/images/baba_geh/baba_geh_carousel_05.webp',
    ],
    videoUrl: '/videos/baba_geh_montage.mp4',
    galleryVideos: [
      { title: 'Baba Geh — Comedy Fast Montage (60s)', url: '/videos/baba_geh_montage.mp4', category: 'Viral Montage' },
      { title: 'Baba Geh — Pro Narrative Drama Cut (45s)', url: '/videos/baba_geh_pro.mp4', category: 'Narrative Cut' },
    ],
    aspectRatio: '9:16',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19xsfCc4ThGEilh9GoEQSaQgo5TARk00C',
    stats: [
      { label: 'Cut Duration', value: '60s Full Reel' },
      { label: 'Aspect Ratio', value: 'Vertical 9:16' },
      { label: 'Carousel', value: '5 High-Res Slides' },
      { label: 'Audio Pacing', value: 'Sync Beats & Foley' },
    ],
    featured: true,
  },
  {
    id: 'baba-geh-pro-edition',
    tracks: ['Videos', 'Dubbing & Audio', 'Content Creation'],
    title: 'Baba Geh (بابا جه) — Pro Narrative Cut (المونتاج الدرامي)',
    clientOrSpec: 'Spec Project',
    specBadge: 'Spec Work',
    subtitle: '«الكوميديا والمفارقة الأسرية» • 45s High-Pacing Storytelling Cut',
    category: 'Short-Form Video',
    duration: '45 sec Reel',
    durationAr: 'ريلز 45 ثانية',
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
    clientOrSpec: 'Spec Project',
    specBadge: 'Spec Work',
    subtitle: '«Zoom-Punch Pop-Reveal Mechanics» • High-Engagement Short-Form Video',
    category: 'Short-Form Video',
    duration: '15 sec Template',
    durationAr: 'قالب 15 ثانية',
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
    galleryVideos: [
      { title: 'CapCut Template', url: '/videos/takaa_capcut_ad.mp4', category: 'CapCut Viral' },
      { title: 'TikTok Reveal', url: '/videos/takaa_tiktok_reveal.mp4', category: 'TikTok' },
      { title: 'IG Launch TVC', url: '/videos/takaa_ig_tvc.mp4', category: 'TVC' }
    ],
    aspectRatio: '9:16',
    stats: [
      { label: 'Format', value: 'Vertical 9:16 Reels' },
      { label: 'Retention Hook', value: '< 2.1s Trigger' },
      { label: 'Template Engine', value: 'CapCut Viral Sync' },
    ],
    featured: true,
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
