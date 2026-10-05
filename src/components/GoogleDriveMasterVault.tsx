import React, { useState } from 'react';
import {
  FolderOpen,
  ExternalLink,
  Film,
  Presentation,
  FileText,
  Volume2,
  Download,
  Play,
  CheckCircle2,
  Search,
  Sparkles,
  Layers,
  Eye,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface VaultItem {
  id: string;
  titleAr: string;
  titleEn: string;
  projectAr: string;
  projectEn: string;
  type: 'video' | 'deck' | 'pdf' | 'audio';
  ext: string;
  sizeLabel: string;
  url: string;
  driveFolderUrl?: string;
  durationOrPages?: string;
}

export const GoogleDriveMasterVault: React.FC = () => {
  const { isAr } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'video' | 'deck' | 'pdf' | 'audio'>('all');
  const [activeMedia, setActiveMedia] = useState<{ url: string; title: string; type: string } | null>(null);

  const vaultItems: VaultItem[] = [
    // 1. VIDEOS
    {
      id: 'v_breadfast',
      titleAr: 'إعلان بريدفاست الصباحي — فطارك ميتأخرش (مونتاج وإخراج متقن)',
      titleEn: 'Breadfast Breakfast Delivery Campaign (Precision Edit)',
      projectAr: 'بريدفاست مصر (Breadfast)',
      projectEn: 'Breadfast Egypt',
      type: 'video',
      ext: 'MP4',
      sizeLabel: '40 MB',
      durationOrPages: '64 sec',
      url: '/videos/breadfast_delivery_campaign.mp4',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1FFCqWudCQE0cM_b6rpe9IJRHWllAFpX6',
    },
    {
      id: 'v1',
      titleAr: 'إعلان تاكة كاب كات بوب ريفيل السريع',
      titleEn: 'TAKAA CapCut Product Pop-Reveal Edit',
      projectAr: 'تاكة لمشروب الطاقة',
      projectEn: 'TAKAA Energy Drink',
      type: 'video',
      ext: 'MP4',
      sizeLabel: '2.2 MB',
      durationOrPages: '16 sec',
      url: '/videos/takaa_capcut_ad.mp4',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1zYaljKNwH5XvD5V_Irsfcas-FZ1MsHrq',
    },
    {
      id: 'v2',
      titleAr: 'فيلم بافلو برجر الماكرو السيزل والناري',
      titleEn: 'Buffalo Burger Cinematic Food Film',
      projectAr: 'بافلو برجر مصر',
      projectEn: 'Buffalo Burger',
      type: 'video',
      ext: 'MP4',
      sizeLabel: '5.9 MB',
      durationOrPages: '52 sec',
      url: '/videos/buffalo_burger_commercial.mp4',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },
    {
      id: 'v3',
      titleAr: 'إعلان طلبات مصر العائلي — يوم واحد من غير طلبات',
      titleEn: 'Talabat Egypt — High-Velocity Food Delivery Spot',
      projectAr: 'تطبيق طلبات مصر',
      projectEn: 'Talabat Egypt',
      type: 'video',
      ext: 'MP4',
      sizeLabel: '7.5 MB',
      durationOrPages: '68 sec',
      url: '/videos/food_delivery_ad.mp4',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1v0rs3UAwaxY8sOckbHlWB3y-J9_AVSvf',
    },
    {
      id: 'v4',
      titleAr: 'إعلان سبيرو سباتس التاريخي — الأصل بيكمل معانا',
      titleEn: 'Spiro Spathis Beverage Heritage Spot',
      projectAr: 'سبيرو سباتس للمشروبات',
      projectEn: 'Spiro Spathis',
      type: 'video',
      ext: 'MP4',
      sizeLabel: '27 MB',
      durationOrPages: '41 sec',
      url: '/videos/spiro_spathis_premium.mp4',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },
    {
      id: 'v5',
      titleAr: 'فيلم بابا جه السردي العائلي — النسخة الإنسانية',
      titleEn: 'Baba Geh Family Storytelling Film',
      projectAr: 'مسلسل وفكرة بابا جه',
      projectEn: 'Baba Geh',
      type: 'video',
      ext: 'MP4',
      sizeLabel: '14 MB',
      durationOrPages: '45 sec',
      url: '/videos/baba_geh_pro.mp4',
      driveFolderUrl: 'https://drive.google.com/drive/folders/19xsfCc4ThGEilh9GoEQSaQgo5TARk00C',
    },
    {
      id: 'v6',
      titleAr: 'مونتاج بابا جه السريع والكوميدي وشنطة المشتريات',
      titleEn: 'Baba Geh Punchline & Bag Reveal Montage',
      projectAr: 'مسلسل وفكرة بابا جه',
      projectEn: 'Baba Geh',
      type: 'video',
      ext: 'MP4',
      sizeLabel: '20 MB',
      durationOrPages: '60 sec',
      url: '/videos/baba_geh_montage.mp4',
      driveFolderUrl: 'https://drive.google.com/drive/folders/19xsfCc4ThGEilh9GoEQSaQgo5TARk00C',
    },
    {
      id: 'v7',
      titleAr: 'إعلان السرد القصصي السينمائي الطويل (105 ثانية)',
      titleEn: 'Extended Brand Narrative & Storytelling Cut',
      projectAr: 'أرشيف الدرايف المعتمد',
      projectEn: 'Master Drive Archive',
      type: 'video',
      ext: 'MP4',
      sizeLabel: '17 MB',
      durationOrPages: '105 sec',
      url: '/videos/VID-20260504-WA0032.mp4',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },
    {
      id: 'v8',
      titleAr: 'سبوت تجاري وإيقاع سريع مكثف (42 ثانية)',
      titleEn: 'Commercial Spot & Dynamic Rhythm Cut',
      projectAr: 'أرشيف الدرايف المعتمد',
      projectEn: 'Master Drive Archive',
      type: 'video',
      ext: 'MP4',
      sizeLabel: '7.3 MB',
      durationOrPages: '42 sec',
      url: '/videos/VID-20260504-WA0036.mp4',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },
    {
      id: 'v9',
      titleAr: 'ريلز إطلاق المنتج والإبهار البصري (35 ثانية)',
      titleEn: 'Product Launch & Visual Reveal Reel',
      projectAr: 'أرشيف الدرايف المعتمد',
      projectEn: 'Master Drive Archive',
      type: 'video',
      ext: 'MP4',
      sizeLabel: '6.7 MB',
      durationOrPages: '35 sec',
      url: '/videos/VID-20260914-WA0000.mp4',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },

    // 2. AUDIO & VOICEOVER (WAV files)
    {
      id: 'a1',
      titleAr: 'فويس أوفر قيم 1: طقم كامل من غير ما تحتار',
      titleEn: 'Qaim AI VO 1: Complete Look Script',
      projectAr: 'قيم للأزياء الرجالية',
      projectEn: 'QAIM Menswear',
      type: 'audio',
      ext: 'WAV',
      sizeLabel: '1.1 MB',
      durationOrPages: '23 sec',
      url: '/audio/voice_over_1_product_aligned_qiyam.wav',
      driveFolderUrl: 'https://drive.google.com/drive/folders/10e2orh2oRMlZ3jGFm5nyZukMMVKtj25A',
    },
    {
      id: 'a2',
      titleAr: 'فويس أوفر قيم 2: 3 مشاوير في يوم واحد',
      titleEn: 'Qaim AI VO 2: Three Occasions Script',
      projectAr: 'قيم للأزياء الرجالية',
      projectEn: 'QAIM Menswear',
      type: 'audio',
      ext: 'WAV',
      sizeLabel: '1.5 MB',
      durationOrPages: '32 sec',
      url: '/audio/voice_over_2_fresh_3_occasions_qiyam.wav',
      driveFolderUrl: 'https://drive.google.com/drive/folders/10e2orh2oRMlZ3jGFm5nyZukMMVKtj25A',
    },

    // 3. PRESENTATION DECKS (PPTX files)
    {
      id: 'd1',
      titleAr: 'عرض استراتيجية وسردية قِيَم الكاملة SOSTAC',
      titleEn: 'Qaim SOSTAC Storytelling Masterplan Deck',
      projectAr: 'قيم للأزياء الرجالية',
      projectEn: 'QAIM Menswear',
      type: 'deck',
      ext: 'PPTX',
      sizeLabel: '8.4 MB',
      durationOrPages: 'Deck PPTX',
      url: '/decks/Qaim_SOSTAC_Storytelling_Masterplan.pptx',
      driveFolderUrl: 'https://drive.google.com/drive/folders/10e2orh2oRMlZ3jGFm5nyZukMMVKtj25A',
    },
    {
      id: 'd2',
      titleAr: 'مفاهيم الكاروسيل التفاعلية لعلامة قيم',
      titleEn: 'Qaim Interactive Carousel Concepts Deck',
      projectAr: 'قيم للأزياء الرجالية',
      projectEn: 'QAIM Menswear',
      type: 'deck',
      ext: 'PPTX',
      sizeLabel: '5.2 MB',
      durationOrPages: 'Deck PPTX',
      url: '/decks/Qaim_Interactive_Carousel_Concepts.pptx',
      driveFolderUrl: 'https://drive.google.com/drive/folders/10e2orh2oRMlZ3jGFm5nyZukMMVKtj25A',
    },
    {
      id: 'd3',
      titleAr: 'عرض إطلاق هوية تاكة لمشروب الطاقة Brand Deck',
      titleEn: 'TAKAA Energy Brand Launch Deck',
      projectAr: 'تاكة لمشروب الطاقة',
      projectEn: 'TAKAA Energy',
      type: 'deck',
      ext: 'PPTX',
      sizeLabel: '6.1 MB',
      durationOrPages: 'Deck PPTX',
      url: '/decks/TAKAA_Energy_Brand_Launch_Deck.pptx',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1zYaljKNwH5XvD5V_Irsfcas-FZ1MsHrq',
    },
    {
      id: 'd4',
      titleAr: 'عرض علامة وحملة صودا في سفن صيف 2026',
      titleEn: 'V7 Cream Soda Summer Brand Deck',
      projectAr: 'في سفن صودا صيفية',
      projectEn: 'V7 Cream Soda',
      type: 'deck',
      ext: 'PPTX',
      sizeLabel: '7.8 MB',
      durationOrPages: 'Deck PPTX',
      url: '/decks/V7_Cream_Soda_Summer_Brand_Deck.pptx',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1fyGsWAhwiEdt_qkshdB9eCzsX1ldZ4Sh',
    },
    {
      id: 'd5',
      titleAr: 'استراتيجية التسويق الرقمي لعلامة H&M Egypt',
      titleEn: 'H&M Egypt Digital Marketing Strategy Deck',
      projectAr: 'H&M Egypt تكليف دراسي',
      projectEn: 'H&M Egypt Coursework',
      type: 'deck',
      ext: 'PPTX',
      sizeLabel: '9.3 MB',
      durationOrPages: 'Deck PPTX',
      url: '/decks/HM_Egypt_Digital_Marketing_Strategy.pptx',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },
    {
      id: 'd6',
      titleAr: 'تحليل وبحوث السوق الرقمي لـ H&M Egypt',
      titleEn: 'H&M Egypt Market Research & Analysis Deck',
      projectAr: 'H&M Egypt تكليف دراسي',
      projectEn: 'H&M Egypt Coursework',
      type: 'deck',
      ext: 'PPTX',
      sizeLabel: '8.1 MB',
      durationOrPages: 'Deck PPTX',
      url: '/decks/HM_Egypt_Market_Research_Analysis.pptx',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },
    {
      id: 'd7',
      titleAr: 'هيكلة وتحسين صفحة فيسبوك لمتجر أثاث محلي',
      titleEn: 'Facebook Business Page Optimization Deck',
      projectAr: 'متجر الأثاث والتنجيد',
      projectEn: 'Local Furniture Store',
      type: 'deck',
      ext: 'PPTX',
      sizeLabel: '4.9 MB',
      durationOrPages: 'Deck PPTX',
      url: '/decks/Facebook_Business_Page_Optimization.pptx',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },

    // 4. RESEARCH REPORTS & PDFS
    {
      id: 'p1',
      titleAr: 'تقرير بحوث سوق الأزياء في مصر H&M Egypt (PDF)',
      titleEn: 'H&M Egypt Market Research Report (PDF)',
      projectAr: 'H&M Egypt تكليف دراسي',
      projectEn: 'H&M Egypt Coursework',
      type: 'pdf',
      ext: 'PDF',
      sizeLabel: '3.6 MB',
      durationOrPages: 'PDF Report',
      url: '/documents/HM_Egypt_Market_Research_Report.pdf',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },
    {
      id: 'p2',
      titleAr: 'مخطط استراتيجية التسويق الرقمي لقِيَم (PDF)',
      titleEn: 'Qaim Digital Marketing Masterplan (PDF)',
      projectAr: 'قيم للأزياء الرجالية',
      projectEn: 'QAIM Menswear',
      type: 'pdf',
      ext: 'PDF',
      sizeLabel: '4.2 MB',
      durationOrPages: 'PDF Masterplan',
      url: '/documents/Qaim_Digital_Marketing_Masterplan.pdf',
      driveFolderUrl: 'https://drive.google.com/drive/folders/10e2orh2oRMlZ3jGFm5nyZukMMVKtj25A',
    },
    {
      id: 'p3',
      titleAr: 'مشروع التخرج المعتمد — مبادرة وزارة الاتصالات DEPI (PDF)',
      titleEn: 'DEPI Digital Marketing Certification Work (PDF)',
      projectAr: 'مبادرة MCIT DEPI مصر',
      projectEn: 'MCIT DEPI Egypt',
      type: 'pdf',
      ext: 'PDF',
      sizeLabel: '2.8 MB',
      durationOrPages: 'PDF Certified',
      url: '/documents/DEPI_Digital_Marketing_Certification_Work.pdf',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },
    {
      id: 'p4',
      titleAr: 'كتيب البورتفوليو التنفيذي الموسع (PDF)',
      titleEn: 'Mohamed Taher Executive Portfolio (PDF)',
      projectAr: 'ملف الأعمال الشخصي',
      projectEn: 'Master Portfolio',
      type: 'pdf',
      ext: 'PDF',
      sizeLabel: '5.1 MB',
      durationOrPages: '25 Pages',
      url: '/documents/Mohamed_Taher_Executive_Portfolio.pdf',
      driveFolderUrl: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
    },
  ];

  const filteredItems = vaultItems.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="drive-vault" className="py-20 bg-[#07070a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-3 max-w-2xl text-left rtl:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>{isAr ? 'خزينة ملفات Google Drive الكاملة' : 'MASTER GOOGLE DRIVE VAULT'}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {isAr
                ? 'جميع ملفات وأصول الدرايف الأساسي المعتمدة'
                : 'Every Verified Asset from the Master Drive'}
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {isAr
                ? 'فهرس متكامل لجميع الفيديوهات، العروض التقديمية (PPTX)، التقارير (PDF)، والتسجيلات الصوتية (WAV) مع إمكانية التشغيل أو التحميل المباشر.'
                : 'Complete directory of 79 original Drive assets: 9 videos, 11 PPTX presentations, 6 PDF reports, and studio audio masters.'}
            </p>
          </div>

          {/* Master Drive Link CTA */}
          <div className="shrink-0">
            <a
              href="https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs sm:text-sm transition-all shadow-xl shadow-amber-500/10 flex items-center gap-2"
            >
              <FolderOpen className="w-4 h-4 fill-current" />
              <span>{isAr ? 'فتح مجلد Google Drive الرئيسي' : 'Open Master Google Drive'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 5 Folder Shortcuts Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            {
              nameAr: 'المجلد الرئيسي الشامل',
              nameEn: 'Master Drive Folder',
              count: '79 Files',
              url: 'https://drive.google.com/drive/folders/1xgALo2bO0OOT5yC674DhLphM91VN8ML3',
            },
            {
              nameAr: 'مجلد مشروع قِيَم',
              nameEn: 'QAIM Folder',
              count: '8 Files',
              url: 'https://drive.google.com/drive/folders/10e2orh2oRMlZ3jGFm5nyZukMMVKtj25A',
            },
            {
              nameAr: 'مجلد مشروع تاكة',
              nameEn: 'TAKAA Folder',
              count: '16 Files',
              url: 'https://drive.google.com/drive/folders/1zYaljKNwH5XvD5V_Irsfcas-FZ1MsHrq',
            },
            {
              nameAr: 'مجلد مشروع في سفن',
              nameEn: 'V7 Folder',
              count: '18 Files',
              url: 'https://drive.google.com/drive/folders/1fyGsWAhwiEdt_qkshdB9eCzsX1ldZ4Sh',
            },
            {
              nameAr: 'مجلد مشروع بابا جه',
              nameEn: 'Baba Gah Folder',
              count: 'Videos & Foley',
              url: 'https://drive.google.com/drive/folders/19xsfCc4ThGEilh9GoEQSaQgo5TARk00C',
            },
          ].map((f, i) => (
            <a
              key={i}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/5 hover:border-amber-500/30 transition-all text-left rtl:text-right flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-zinc-400 group-hover:text-amber-400 transition-colors">
                <FolderOpen className="w-4 h-4" />
                <span className="text-[10px] font-mono">{f.count}</span>
              </div>
              <div className="mt-3">
                <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                  {isAr ? f.nameAr : f.nameEn}
                </h4>
                <span className="text-[10px] text-zinc-500 font-mono flex items-center gap-1 mt-0.5">
                  <span>Google Drive</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {[
            { id: 'all', labelAr: 'كل الملفات', labelEn: 'All Files', count: vaultItems.length },
            { id: 'video', labelAr: 'الفيديوهات (MP4)', labelEn: 'Videos (9 MP4)', count: 9 },
            { id: 'deck', labelAr: 'عروض البوربوينت (PPTX)', labelEn: 'Decks (7 PPTX)', count: 7 },
            { id: 'pdf', labelAr: 'التقارير (PDF)', labelEn: 'PDF Reports', count: 4 },
            { id: 'audio', labelAr: 'الصوت والفويس أوفر (WAV)', labelEn: 'Voiceover (WAV)', count: 2 },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 border ${
                filter === btn.id
                  ? 'bg-amber-500 text-black border-amber-400'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border-white/5'
              }`}
            >
              <span>{isAr ? btn.labelAr : btn.labelEn}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                filter === btn.id ? 'bg-black/20 text-black' : 'bg-black/50 text-amber-300'
              }`}>
                {btn.count}
              </span>
            </button>
          ))}
        </div>

        {/* File Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => {
            const isVideo = item.type === 'video';
            const isAudio = item.type === 'audio';

            return (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4 group shadow-lg"
              >
                <div className="space-y-2 text-left rtl:text-right">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span
                      className={`px-2 py-0.5 rounded font-bold text-[10px] border ${
                        isVideo
                          ? 'bg-purple-950/70 text-purple-300 border-purple-500/30'
                          : isAudio
                          ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30'
                          : item.type === 'deck'
                          ? 'bg-amber-950/70 text-amber-300 border-amber-500/30'
                          : 'bg-blue-950/70 text-blue-300 border-blue-500/30'
                      }`}
                    >
                      .{item.ext}
                    </span>

                    <span className="text-zinc-500 text-[11px]">
                      {item.durationOrPages} &bull; {item.sizeLabel}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                      {isAr ? item.projectAr : item.projectEn}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mt-0.5 leading-snug">
                      {isAr ? item.titleAr : item.titleEn}
                    </h4>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5 gap-2">
                  <div className="flex items-center gap-1.5">
                    {(isVideo || isAudio) ? (
                      <button
                        onClick={() =>
                          setActiveMedia({
                            url: item.url,
                            title: isAr ? item.titleAr : item.titleEn,
                            type: item.type,
                          })
                        }
                        className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-black font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>{isAr ? 'تشغيل' : 'Play'}</span>
                      </button>
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-bold text-xs transition-colors flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" />
                        <span>{isAr ? 'معاينة' : 'Inspect'}</span>
                      </a>
                    )}

                    <a
                      href={item.url}
                      download
                      className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                      title={isAr ? 'تحميل الملف' : 'Download File'}
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {item.driveFolderUrl && (
                    <a
                      href={item.driveFolderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-zinc-500 hover:text-amber-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Drive</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Media Playback Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl">
          <div className="relative w-full max-w-3xl rounded-3xl bg-zinc-950 border border-white/15 shadow-2xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-900/80">
              <span className="text-xs font-bold text-white truncate max-w-md">
                {activeMedia.title}
              </span>
              <button
                onClick={() => setActiveMedia(null)}
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.url}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="p-8 text-center space-y-4">
                  <Volume2 className="w-12 h-12 text-amber-400 mx-auto animate-pulse" />
                  <audio src={activeMedia.url} controls autoPlay className="w-full max-w-md mx-auto" />
                </div>
              )}
            </div>

            <div className="p-4 bg-zinc-900/60 flex items-center justify-between text-xs font-mono">
              <a
                href={activeMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold"
              >
                <span>{isAr ? 'فتح في نافذة كاملة' : 'Open in New Window'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={activeMedia.url}
                download
                className="text-zinc-400 hover:text-white flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isAr ? 'تحميل الملف الأصلي' : 'Download File'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
