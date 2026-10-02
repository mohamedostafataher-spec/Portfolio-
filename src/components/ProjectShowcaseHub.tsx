import React, { useState } from 'react';
import {
  FolderOpen,
  ExternalLink,
  Play,
  Volume2,
  FileText,
  Presentation,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  Layers,
  Film,
  Music,
  Download,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';

// Posters & Media
import qaimEditorial1 from '../assets/images/qaim_real_editorial_1.jpg';
import qaimEditorial2 from '../assets/images/qaim_real_editorial_2.jpg';
import qaimEditorial3 from '../assets/images/qaim_real_editorial_3.jpg';
import takaaCreativeCampaign from '../assets/images/takaa_creative_campaign.jpg';
import takaaCapcutPoster from '../assets/images/takaa_capcut_poster.jpg';
import v7SummerPoster from '../assets/images/v7_summer_poster.jpg';
import v7SocialPost from '../assets/images/v7_social_post.jpg';
import spiroPoster from '../assets/images/spiro_spathis_poster.jpg';
import buffaloPoster from '../assets/images/buffalo_burger_poster.jpg';
import foodDeliveryPoster from '../assets/images/food_delivery_poster.jpg';
import babaGehThumb1 from '../assets/images/baba_geh_thumb1.jpg';
import babaGehThumb2 from '../assets/images/baba_geh_thumb2.jpg';
import hmStrategyThumb from '../assets/images/hm_strategy_thumb.jpg';
import hmGrowthThumb from '../assets/images/hm_growth_strategy_thumb.jpg';
import depiCapstoneThumb from '../assets/images/depi_capstone_thumb.jpg';
import furnitureThumb from '../assets/images/furniture_fb_real_thumbnail.jpg';

interface ProjectShowcaseHubProps {
  onSelectProject: (project: Project) => void;
  projects: Project[];
}

interface ProjectTabConfig {
  id: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  evidenceStatus: 'Drive-backed' | 'Coursework' | 'Spec Concept' | 'Video Sample';
  evidenceLabelAr: string;
  driveFolderUrl?: string;
  taglineAr: string;
  taglineEn: string;
  briefAr: string;
  briefEn: string;
  insightAr: string;
  insightEn: string;
  executionAr: string;
  executionEn: string;
  statusAr: string;
  statusEn: string;
  guardrailAr?: string;
  guardrailEn?: string;
  videoUrl?: string;
  audioUrl?: string;
  posterImg: string;
  galleryImgs?: string[];
  deckDownloadUrl?: string;
  deckName?: string;
  pdfDownloadUrl?: string;
  pdfName?: string;
  stats: { labelAr: string; labelEn: string; val: string }[];
  associatedProjectId?: string;
}

export const ProjectShowcaseHub: React.FC<ProjectShowcaseHubProps> = ({
  onSelectProject,
  projects,
}) => {
  const { isAr } = useLanguage();
  const [activeTabId, setActiveTabId] = useState<string>('qaim');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const projectConfigs: ProjectTabConfig[] = [
    {
      id: 'qaim',
      nameAr: 'قيم — ملابس رجالية عصرية',
      nameEn: 'QAIM Menswear',
      categoryAr: 'استراتيجية محتوى وكاروسيل وفيديوهات',
      categoryEn: 'Content Strategy, Carousels & Video',
      evidenceStatus: 'Drive-backed',
      evidenceLabelAr: 'موثق بمجلد Google Drive',
      driveFolderUrl: 'https://drive.google.com/drive/folders/10e2orh2oRMlZ3jGFm5nyZukMMVKtj25A',
      taglineAr: '«عايز طقم كامل من غير ما تحتار في التنسيق؟» • منظومة محتوى تسهل قرار الشراء اليومي.',
      taglineEn: '“Sell the lifestyle, not just the fabric” • Friction-free everyday styling system.',
      briefAr: 'بناء استراتيجية محتوى رقمي كاملة (SOSTAC & SCQA) لحساب أزياء يضم 62 ألف متابع بنسبة رضا 96%، وتوجيه التفاعل للشراء المباشر عبر qaim.shop والواتساب.',
      briefEn: 'Comprehensive SOSTAC & SCQA content system for a menswear account with 62K followers and 96% positive sentiment, channeling engagement to ecommerce & WhatsApp.',
      insightAr: 'الشاب المصري لا يشتري مجرد قماش؛ هو يبحث عن قطعة أساسية واحدة تريحه في 3 مشاوير مختلفة (جامعة، شغل، خروجة مسائية).',
      insightEn: 'Young men look for versatile staples that solve everyday friction: one base piece adapted for gym, work and evening casual.',
      executionAr: 'كاروسيل تعليمي (One Sweatpants 3 Looks) + فيديو ريلز رأسي 9:16 + تسجيلان صوتيان أصليان باللهجة المصرية (Complete Look & 3 Occasions) + 5 عروض تقديمية PPTX.',
      executionEn: 'High-converting carousel architecture, vertical 9:16 reels ad, two studio-recorded Egyptian Arabic voiceovers, and five PPTX decks.',
      statusAr: 'مكتمل كدراسة حالة محتوى واستراتيجية موثقة بملفات الدرايف الأصلية.',
      statusEn: 'Complete Content & Strategy case study backed by original Drive files.',
      guardrailAr: 'الأسعار والخصومات نماذج تخطيطية وتعتمد على العروض المعتمدة على صفحة المتجر الحية.',
      guardrailEn: 'Price points and discount tiers are strategic models aligned with live product listings.',
      videoUrl: '/videos/qaim_fashion_campaign.mp4',
      audioUrl: '/audio/voice_over_1_product_aligned_qiyam.wav',
      posterImg: qaimEditorial1,
      galleryImgs: [qaimEditorial1, qaimEditorial2, qaimEditorial3],
      deckDownloadUrl: '/decks/Qaim_SOSTAC_Storytelling_Masterplan.pptx',
      deckName: 'Qaim_SOSTAC_Storytelling_Masterplan.pptx',
      pdfDownloadUrl: '/documents/Qaim_Digital_Marketing_Masterplan.pdf',
      pdfName: 'Qaim_Digital_Marketing_Masterplan.pdf',
      stats: [
        { labelAr: 'متابعين', labelEn: 'Followers Base', val: '62K' },
        { labelAr: 'نسبة الرضا', labelEn: 'Positive Trust', val: '96%' },
        { labelAr: 'صيغ المحتوى', labelEn: 'Assets', val: '9 Formats' },
      ],
      associatedProjectId: 'qaim-fashion-growth',
    },
    {
      id: 'takaa',
      nameAr: 'تاكة — مشروب طاقة مصري',
      nameEn: 'TAKAA Energy Drink',
      categoryAr: 'مفهوم إبداعي بالذكاء الاصطناعي وقالب كاب كات',
      categoryEn: 'AI Creative Concept & CapCut Template',
      evidenceStatus: 'Drive-backed',
      evidenceLabelAr: 'مفهوم دراسي موثق بالدرايف',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1zYaljKNwH5XvD5V_Irsfcas-FZ1MsHrq',
      taglineAr: '«مودك ناقصه تاكة» • تعديل بسيط في المود، يُروى كقصة منتج وسيناريو كاب كات فيروسي.',
      taglineEn: '“Take the Tweak” • A small mood shift told through AI visuals and dynamic CapCut editing.',
      briefAr: 'ابتكار هوية إطلاق رقمية متكاملة لعلامة مشروب طاقة مصرية افتراضية ضمن تكليف إبداعي، تشمل مشاهد سينمائية للمنتج وقوالب ريلز سريعة.',
      briefEn: 'Course concept developing an AI-driven digital launch system for an Egyptian energy drink, including product film and CapCut reveal.',
      insightAr: 'لحظات انخفاض الطاقة خلال ساعات العمل والدراسة في مصر تحتاج إلى تنشيط ذهني سريع وخفيف، وليس إلى جرعة ثقيلة أو مبالغ فيها.',
      insightEn: 'Midday Egyptian slumps call for a relatable reset, not an extreme sports cliche.',
      executionAr: 'توليد مشاهد AI للمنتج أمام معالم القاهرة (برج القاهرة والنيل) + كاروسيل 8 إطارات «5 علامات إن مودك ناقصه تاكة» + فيديو إعلاني 50 ثانية + مونتاج كاب كات بوب ريفيل 16 ثانية.',
      executionEn: 'AI product hero stills with Cairo skyline, 8-frame carousel, 50s AI commercial film, and 16s CapCut fast-cut template.',
      statusAr: 'مكتمل كمفهوم إنتاج إبداعي بالذكاء الاصطناعي (Fictional Brand Concept).',
      statusEn: 'Complete AI Creative Production Concept for an academic brief.',
      guardrailAr: 'العلامة تجريبية وافتراضية ضمن التكليف؛ تم الحفاظ على تصميم العلبة وهوية الألوان (Deep Navy + Warm Orange).',
      guardrailEn: 'Fictional course brand; packaging design and color language preserved across all outputs.',
      videoUrl: '/videos/takaa_capcut_ad.mp4',
      posterImg: takaaCapcutPoster,
      galleryImgs: [takaaCapcutPoster, takaaCreativeCampaign],
      deckDownloadUrl: '/decks/TAKAA_Energy_Brand_Launch_Deck.pptx',
      deckName: 'TAKAA_Energy_Brand_Launch_Deck.pptx',
      stats: [
        { labelAr: 'مدة الريلز', labelEn: 'CapCut Cut', val: '16 sec' },
        { labelAr: 'فيلم المنتج', labelEn: 'AI Film', val: '50 sec' },
        { labelAr: 'فريمات الكاروسيل', labelEn: 'Carousel', val: '8 Frames' },
      ],
      associatedProjectId: 'takaa-energy-launch',
    },
    {
      id: 'v7',
      nameAr: 'في سفن صودا — إصدار صيف 2026',
      nameEn: 'V7 Cream Soda (Summer Edition)',
      categoryAr: 'سرد قصصي وتوجيه بصري متقدم',
      categoryEn: 'Campaign Storytelling & Visual Direction',
      evidenceStatus: 'Drive-backed',
      evidenceLabelAr: 'مفهوم حملة موثق بالدرايف',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1fyGsWAhwiEdt_qkshdB9eCzsX1ldZ4Sh',
      taglineAr: '«كل جيل له صيفه.. وده صيفنا» • حكاية 3 أجيال من الانتعاش بلمسة Teal & Cream.',
      taglineEn: '“Every generation has its summer. This is ours.” • Generational summer storytelling system.',
      briefAr: 'تصميم Brand Deck وحملة إعلانية موسمية لصودا في سفن كريم صودا لصيف 2026 تربط بين نوستالجيا الصيف المصري وألوان المشروب المعاصرة.',
      briefEn: 'Strategic brand deck and seasonal summer campaign concept blending nostalgic Egyptian summer light with crisp product reveals.',
      insightAr: 'الصيف في الذاكرة المصرية مرتبط بذكريات الآباء والأجداد على البحر، وإصدار الكريم صودا يمثل طعم هذا الجيل الجديد.',
      insightEn: 'Egyptian beach memories span generations; V7 represents the taste and vibrancy of the current era.',
      executionAr: 'العرض التقديمي Brand Deck + بوستر رئيسي 4K بقطرات الانتعاش + إعلان فيديو رأسي + بوستات كاروسيل وسوشيال مقاسات 4:5 و 9:16.',
      executionEn: 'Strategic Brand Deck, 4K hero visual with splash dynamics, vertical video ad, and 4:5 social posts.',
      statusAr: 'مكتمل كمفهوم حملة وتوجيه بصري (Campaign Concept + Visual Direction).',
      statusEn: 'Complete campaign concept and visual direction system.',
      guardrailAr: 'المشاهد التاريخية في السيناريو تستخدم مشروبات عامة غير معلومة لتجنب أي ادعاء غير مثبت.',
      guardrailEn: 'Historical narrative scenes use generic unbranded refreshments to ensure strict factual honesty.',
      videoUrl: '/videos/v7_summer_commercial.mp4',
      posterImg: v7SummerPoster,
      galleryImgs: [v7SummerPoster, v7SocialPost],
      deckDownloadUrl: '/decks/V7_Cream_Soda_Summer_Brand_Deck.pptx',
      deckName: 'V7_Cream_Soda_Summer_Brand_Deck.pptx',
      stats: [
        { labelAr: 'أجيال السرد', labelEn: 'Generations', val: '3 Eras' },
        { labelAr: 'الهوية البصرية', labelEn: 'Visual Code', val: 'Teal/Cream' },
        { labelAr: 'تنسيقات النشر', labelEn: 'Formats', val: '4:5 / 9:16' },
      ],
      associatedProjectId: 'v7-cream-soda-summer',
    },
    {
      id: 'baba-geh',
      nameAr: 'بابا جه — الكوميديا العائلية والريلز',
      nameEn: 'Baba Geh (Comedy & Viral Cut)',
      categoryAr: 'مونتاج فيديو إيقاعي وهندسة صوتية',
      categoryEn: 'Video Editing, Pacing & Audio Foley',
      evidenceStatus: 'Video Sample',
      evidenceLabelAr: 'أرشيف عينات فيديو بالدرايف',
      driveFolderUrl: 'https://drive.google.com/drive/folders/19xsfCc4ThGEilh9GoEQSaQgo5TARk00C',
      taglineAr: '«أب للإيجار.. ومشاعر واقعية تلمس البيت المصري» • مونتاج كوميدي سريع الإيقاع.',
      taglineEn: 'Relatable family storytelling and fast-cut comedy reels synced to dialogue beats.',
      briefAr: 'إنتاج نسختين مونتاج لمشروع «بابا جه»: الأولى فيلم عائلي دافئ (45 ثانية) والثانية مونتاج كوميدي سريع (60 ثانية) مع شنطة المشتريات ومزامنة الحوار.',
      briefEn: 'Two edited cuts from the Baba Gah Drive archive: a 45s warm family narrative and a 60s dynamic punchline montage.',
      insightAr: 'المفارقات الكوميدية العائلية في مصر تتطلب توقيتاً دقيقاً للـ Punchline ومؤثرات صوتية واقعية تجعل المشهد طبيعياً وقريباً للقلب.',
      insightEn: 'Egyptian family comedy succeeds when timing is precise and sound effects emphasize everyday humor.',
      executionAr: 'مونتاج سريع الإيقاع في CapCut Pro + تلوين سينمائي دافئ + هندسة المؤثرات الصوتية (Foley FX) + مزامنة حركة شنطة الملابس مع الحوار.',
      executionEn: 'Precision rhythm editing, warm color grade, Foley audio design, and dialogue synchronization.',
      statusAr: 'مكتمل كأرشيف عينات فيديو (Video Sample Archive).',
      statusEn: 'Complete Video Sample Archive with two distinct master cuts.',
      guardrailAr: 'الملفات تُعرض كعينات إخراج ومونتاج إعلاني وتجريبي من مجلد الدرايف.',
      guardrailEn: 'Presented as video editing and rhythm direction samples from the supplied project folder.',
      videoUrl: '/videos/baba_geh_montage.mp4',
      posterImg: babaGehThumb1,
      galleryImgs: [babaGehThumb1, babaGehThumb2],
      stats: [
        { labelAr: 'النسخة العائلية', labelEn: 'Family Cut', val: '45 sec' },
        { labelAr: 'المونتاج السريع', labelEn: 'Montage Cut', val: '60 sec' },
        { labelAr: 'الإيقاع الصوتي', labelEn: 'Audio Beat', val: 'Crisp Foley' },
      ],
      associatedProjectId: 'baba-geh-campaign',
    },
    {
      id: 'commercials',
      nameAr: 'إعلانات تجارية — طلبات، بافلو، وسبيرو',
      nameEn: 'Commercial Ads (Talabat, Buffalo, Spiro)',
      categoryAr: 'مقاطع تجارية سريعة للأطعمة والمشروبات',
      categoryEn: 'Food & Beverage Commercial Films',
      evidenceStatus: 'Video Sample',
      evidenceLabelAr: 'عينات فيديو معتمدة بالدرايف',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
      taglineAr: 'إعلانات ذات دور وظيفي بيعي واضح: تحفيز الشهية والطلب الفوري في أول ثانيتين.',
      taglineEn: 'High-impact food & beverage advertising cuts focused on immediate appetite appeal.',
      briefAr: 'استعراض 3 إعلانات تجارية أصلية من مجلد الدرايف: إعلان طلبات مصر (حل ورطة الجوع)، فيلم بافلو برجر (ماكرو الجبن واللهب)، وفيلم سبيرو سباتس (أصالة المشروب والانتعاش).',
      briefEn: 'Three verified commercial cuts from Drive: Talabat delivery rescue, Buffalo Burger macro sizzle, and Spiro Spathis heritage refreshment.',
      insightAr: 'إعلانات الأكل تحتاج للقطات ماكرو مقربة لصوت القرمشة والجبن الذائب لتحفيز الجوع، وإعلانات التوصيل تركز على لحظة الفرج برنة جرس المندوب.',
      insightEn: 'Food ads require sensory triggers (melt, crunch, steam); delivery ads resolve the friction of waiting.',
      executionAr: 'إعلان طلبات مصر (مع بوستر طلبات الحقيقي) + إعلان بافلو برجر الماكرو + إعلان سبيرو سباتس التراثي.',
      executionEn: 'Talabat delivery ad with authentic poster, Buffalo Burger macro food sizzle, and Spiro Spathis heritage spot.',
      statusAr: 'مكتمل كعينات فيديو مختارة (Selected Video Samples).',
      statusEn: 'Complete Selected Video Samples with verified original video files.',
      guardrailAr: 'تُعرض النماذج تحت مسمى عينات فيديو مختارة وتوثيق مهارة الإخراج والمونتاج الإعلاني.',
      guardrailEn: 'Categorized strictly as Selected Video Samples demonstrating commercial pacing and appetite stimulation.',
      videoUrl: '/videos/food_delivery_ad.mp4',
      posterImg: foodDeliveryPoster,
      galleryImgs: [foodDeliveryPoster, buffaloPoster, spiroPoster],
      stats: [
        { labelAr: 'فيلم طلبات', labelEn: 'Talabat Spot', val: '68 sec' },
        { labelAr: 'بافلو برجر', labelEn: 'Buffalo Sizzle', val: '52 sec' },
        { labelAr: 'سبيرو سباتس', labelEn: 'Spiro TVC', val: '41 sec' },
      ],
      associatedProjectId: 'talabat-delivery-tvc',
    },
    {
      id: 'academic',
      nameAr: 'التكليفات الأكاديمية — H&M، DEPI، والأثاث',
      nameEn: 'Academic & Strategy Coursework',
      categoryAr: 'بحوث سوق ونماذج SOSTAC وتكليفات مبادرة DEPI',
      categoryEn: 'Market Research, SOSTAC & Page Funnels',
      evidenceStatus: 'Coursework',
      evidenceLabelAr: 'تكليفات أكاديمية موثقة',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
      taglineAr: 'تطبيق علمي صارم لأطر التسويق الرقمي وبحوث السوق برقم الهوية: 21172333.',
      taglineEn: 'Rigorous digital marketing methodology, market sizing, and funnel architecture.',
      briefAr: 'مجموعة التكليفات الأكاديمية المعتمدة: دراسة سوق H&M Egypt بحجم 7.5 مليار دولار، مشروع تخرج مبادرة وزارة الاتصالات DEPI، وهيكلة صفحة متجر أثاث محلي.',
      briefEn: 'Verified academic coursework: H&M Egypt $7.5B market research and growth plan, MCIT DEPI capstone assignment, and local furniture funnel setup.',
      insightAr: 'الاستراتيجية الناجحة تسبق أي إنفاق إعلاني: تشريح حجم السوق وتحليل المنافسين يحدد أين تكمن الفجوة البيعية بدقة.',
      insightEn: 'Strategy precedes spend: analyzing competitor benchmarks and audience friction ensures marketing efficiency.',
      executionAr: 'تقرير بحوث السوق لـ H&M (PDF + PPTX) + خطة التسويق الاستراتيجي SOSTAC + ملف مشروع تخرج DEPI + هيكلة صفحة الفيسبوك ومسار محادثات الواتساب.',
      executionEn: 'H&M market research & growth strategy decks, DEPI graduation coursework, and furniture Facebook page setup.',
      statusAr: 'مكتمل كتكليفات دراسية وأكاديمية (Coursework / Academic Assignments).',
      statusEn: 'Complete Academic Coursework identified with student credential ID: 21172333.',
      guardrailAr: 'تُقدم المشاريع كأعمال دراسية وأكاديمية بمبادرة وزارة الاتصالات ولا تمثل شراكة عمل رسمية مع H&M أو Adidas.',
      guardrailEn: 'Identified accurately as academic coursework; no client relationship or corporate employment claimed.',
      posterImg: hmStrategyThumb,
      galleryImgs: [hmStrategyThumb, hmGrowthThumb, depiCapstoneThumb, furnitureThumb],
      deckDownloadUrl: '/decks/HM_Egypt_Digital_Marketing_Strategy.pptx',
      deckName: 'HM_Egypt_Digital_Marketing_Strategy.pptx',
      pdfDownloadUrl: '/documents/HM_Egypt_Market_Research_Report.pdf',
      pdfName: 'HM_Egypt_Market_Research_Report.pdf',
      stats: [
        { labelAr: 'حجم سوق H&M', labelEn: 'Market Size', val: '$7.5B' },
        { labelAr: 'مبادرة DEPI', labelEn: 'Credential', val: 'ID: 21172333' },
        { labelAr: 'منهجية العمل', labelEn: 'Framework', val: 'SOSTAC' },
      ],
      associatedProjectId: 'hm-egypt-market-research',
    },
    {
      id: 'spec-concepts',
      nameAr: 'المفاهيم المقترحة — Level، WOJOOH، وGolden Sun',
      nameEn: 'Spec Concepts (Level, WOJOOH, Golden Sun)',
      categoryAr: 'مفاهيم حملات إعلانية مبتكرة وسيناريوهات',
      categoryEn: 'Strategic Spec Concepts & Storyboards',
      evidenceStatus: 'Spec Concept',
      evidenceLabelAr: 'مفاهيم مقترحة غير منشورة',
      taglineAr: 'أفكار حملات مصممة على ملخصات افتراضية: صدق إعلاني كامل دون ادعاء نتائج غير مثبتة.',
      taglineEn: 'Proposed strategic campaign frameworks developed around real problem statements.',
      briefAr: 'ثلاثة مفاهيم إعلانية مقترحة من الكتيب الماستر: نادي Level Fitness (مسار الواتساب)، سياحة WOJOOH (حكايات أهل البلد)، وعلامة Golden Sun (قصة الغروب الصيفي).',
      briefEn: 'Three creative spec treatments from the master deck: Level Fitness WhatsApp funnel, WOJOOH experiential tourism, and Golden Sun sunset storytelling.',
      insightAr: 'المبتدئ في الجيم يحتاج لإزالة الخوف بهوك «ابدأ بخطوة صغيرة»، وسائح مصر يبحث عن تجربة إنسانية حية، والمستمع يتأثر بنبرة صوت مصرية هادئة وقت الغروب.',
      insightEn: 'Beginners need friction-free gym entry; tourists seek human connection; golden-hour scripts build instant emotional resonance.',
      executionAr: 'خطة إعلانات ميتا ومسار استفسارات الواتساب لـ Level Fitness + هيكل سلسلة فيديوهات قصيرة لـ WOJOOH + ستوري بورد 20 ثانية وفويس أوفر لـ Golden Sun.',
      executionEn: 'Meta Ads structure for Level Fitness, route-based video series for WOJOOH, and 20s script & storyboard for Golden Sun.',
      statusAr: 'مكتمل كمفاهيم إعلانية مقترحة (Spec Concepts Only).',
      statusEn: 'Complete Spec Concepts labelled transparently with no unverified metrics claimed.',
      guardrailAr: 'مفاهيم مقترحة لم تُنشر بعد، وتتطلب اعتماد التفاصيل والميزانيات الفعلية قبل الإطلاق.',
      guardrailEn: 'Spec concepts only; require live client verification, ad account access, and assets before execution.',
      audioUrl: '/audio/voice_over_2_fresh_3_occasions_qiyam.wav',
      posterImg: takaaCapcutPoster,
      galleryImgs: [takaaCapcutPoster, qaimEditorial1, v7SummerPoster],
      stats: [
        { labelAr: 'هوك Level Fitness', labelEn: 'Level Hook', val: 'ابدأ بخطوة صغيرة' },
        { labelAr: 'فكرة WOJOOH', labelEn: 'WOJOOH Theme', val: 'Local Eyes' },
        { labelAr: 'مدة Golden Sun', labelEn: 'Golden Sun VO', val: '20 sec' },
      ],
      associatedProjectId: 'level-fitness-spec',
    },
  ];

  const currentTab = projectConfigs.find((t) => t.id === activeTabId) || projectConfigs[0];

  return (
    <section id="projects-breakdown" className="py-20 bg-[#08080b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Calm, High-End Header */}
        <div className="max-w-3xl space-y-3 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>{isAr ? 'تقسيم المشاريع المستقلة الموثقة' : 'INDEPENDENT PROJECT SHOWCASES'}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {isAr
              ? 'كل مشروع في مساحة مستقلة ومريحة للعين'
              : 'Every Project in Its Own Dedicated Stage'}
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            {isAr
              ? 'تصفح كل عمل على حدة: الفكرة، الاستراتيجية، المخرجات البصرية والفيديوهات، وروابط الدرايف المباشرة دون ازدحام.'
              : 'Explore each project individually with dedicated video, strategy breakdown, original files, and verified Drive access.'}
          </p>
        </div>

        {/* Project Selector Tabs — Clean, Minimal, Non-Crowded */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin border-b border-white/5">
          {projectConfigs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  setIsPlayingVideo(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/10'
                    : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border-white/5'
                }`}
              >
                <span>{isAr ? tab.nameAr : tab.nameEn}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-black/20 text-black' : 'bg-black/40 text-amber-400'
                  }`}
                >
                  {tab.stats[0].val}
                </span>
              </button>
            );
          })}
        </div>

        {/* The Focused Project Stage */}
        <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Top Meta Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                    currentTab.evidenceStatus === 'Drive-backed'
                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
                      : currentTab.evidenceStatus === 'Coursework'
                      ? 'bg-blue-950/60 text-blue-300 border-blue-500/30'
                      : currentTab.evidenceStatus === 'Spec Concept'
                      ? 'bg-amber-950/60 text-amber-300 border-amber-500/30'
                      : 'bg-purple-950/60 text-purple-300 border-purple-500/30'
                  }`}
                >
                  {isAr ? currentTab.evidenceLabelAr : currentTab.evidenceStatus}
                </span>

                <span className="text-xs text-zinc-400 font-mono">
                  // {isAr ? currentTab.categoryAr : currentTab.categoryEn}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                {isAr ? currentTab.nameAr : currentTab.nameEn}
              </h3>

              <p className="text-xs sm:text-sm text-amber-300/90 font-medium">
                {isAr ? currentTab.taglineAr : currentTab.taglineEn}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 flex-wrap">
              {currentTab.driveFolderUrl && (
                <a
                  href={currentTab.driveFolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/20 text-xs font-bold transition-all flex items-center gap-1.5 font-mono shadow-sm"
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span>{isAr ? 'مجلد الدرايف الأصلي' : 'Google Drive Folder'}</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              )}

              {currentTab.associatedProjectId && (
                <button
                  onClick={() => {
                    const p = projects.find((proj) => proj.id === currentTab.associatedProjectId);
                    if (p) onSelectProject(p);
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>{isAr ? 'فتح دراسة الحالة الكاملة' : 'View Full Case Study'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Media & Stage Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Video or Visual Media Player */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center">
                {currentTab.videoUrl ? (
                  <video
                    src={currentTab.videoUrl}
                    controls
                    playsInline
                    preload="metadata"
                    poster={currentTab.posterImg}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={currentTab.posterImg}
                    alt={currentTab.nameEn}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Gallery Thumbnails */}
              {currentTab.galleryImgs && currentTab.galleryImgs.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {currentTab.galleryImgs.map((img, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black"
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {/* Audio Track if available */}
              {currentTab.audioUrl && (
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Volume2 className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-xs font-bold text-white">
                        {isAr ? 'التسجيل الصوتي المعتمد (WAV)' : 'Studio Voiceover Track'}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {isAr ? 'إلقاء مصري أصيل مع توقيت إعلاني' : 'Egyptian Arabic Colloquial Audio'}
                      </span>
                    </div>
                  </div>

                  <audio controls className="h-8 w-44 sm:w-56" src={currentTab.audioUrl}>
                    Audio player
                  </audio>
                </div>
              )}
            </div>

            {/* Right: Strategy & 4 Pillars Breakdown */}
            <div className="lg:col-span-6 space-y-4 text-left rtl:text-right">
              {/* 4 Cards: Brief, Insight, Execution, Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">
                    01 · {isAr ? 'المطلوب والتحدي' : 'THE BRIEF'}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {isAr ? currentTab.briefAr : currentTab.briefEn}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block">
                    02 · {isAr ? 'الرؤية وسلوك الجمهور' : 'CONSUMER INSIGHT'}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {isAr ? currentTab.insightAr : currentTab.insightEn}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">
                    03 · {isAr ? 'التنفيذ والمخرجات' : 'EXECUTION & ASSETS'}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {isAr ? currentTab.executionAr : currentTab.executionEn}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-purple-400 font-bold uppercase block">
                    04 · {isAr ? 'حالة التوثيق' : 'EVIDENCE STATUS'}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {isAr ? currentTab.statusAr : currentTab.statusEn}
                  </p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-white/5 flex items-center justify-around text-center">
                {currentTab.stats.map((s, idx) => (
                  <div key={idx}>
                    <div className="text-sm sm:text-base font-black font-mono text-amber-400">
                      {s.val}
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono">
                      {isAr ? s.labelAr : s.labelEn}
                    </div>
                  </div>
                ))}
              </div>

              {/* Downloads & Decks */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {currentTab.deckDownloadUrl && (
                  <a
                    href={currentTab.deckDownloadUrl}
                    download
                    className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono transition-colors flex items-center gap-1.5"
                  >
                    <Presentation className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isAr ? 'تحميل العرض (PPTX)' : 'Download PPTX'}</span>
                  </a>
                )}

                {currentTab.pdfDownloadUrl && (
                  <a
                    href={currentTab.pdfDownloadUrl}
                    download
                    className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono transition-colors flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isAr ? 'تحميل التقرير (PDF)' : 'Download PDF'}</span>
                  </a>
                )}
              </div>

              {/* Guardrail Note */}
              {currentTab.guardrailAr && (
                <div className="p-3 rounded-xl bg-zinc-950 border border-amber-500/20 text-[11px] text-zinc-400 font-mono flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{isAr ? currentTab.guardrailAr : currentTab.guardrailEn}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
