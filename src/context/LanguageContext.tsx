import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isAr: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    navWork: 'Work',
    navMarketing: 'Marketing',
    navAiCreative: 'AI Creative',
    navInsights: 'Insights',
    navCertifications: 'Certifications',
    navContact: 'Contact',
    navResume: 'CV',
    navCms: 'CMS',
    navLetsTalk: "Let's Talk",

    // Hero
    heroAvailable: 'Available for Brand Campaigns & Collaborations',
    heroLocation: 'Cairo & Remote',
    heroTitle: 'Mohamed Mostafa',
    heroSubtitle: 'Digital Marketing Specialist & AI Content Creator',
    heroDescription:
      'Turning ideas into digital experiences, cinematic content, and marketing strategies that connect brands with people.',
    heroViewWork: 'Explore Selected Work',
    heroCollaborate: 'Hire Me / Collaborate',
    heroDownloadCv: 'Curriculum Vitae',
    heroFeaturedBadge: 'Latest Work — 2026',
    heroExploreCase: 'Explore Commercial Case Study',

    // Featured Work
    workSectionNumber: '06 — FEATURED WORK & COMMERCIAL CONCEPTS',
    workHeading: 'Selected Projects & Case Studies',
    workSubheading:
      'High-impact commercial concepts, cinematic AI video productions, and full-funnel marketing strategies.',
    workAddNew: 'Add New Project',
    workExploreStoryboard: 'Explore Full Case Study & Storyboard',
    workObjective: 'Objective',
    workRole: 'Role',
    workCompetencies: 'Applied Competencies',

    // Marketing Section
    mktBadge: '04 — CORE SPECIALIZATION',
    mktHeading: 'Digital Marketing & Content Architecture',
    mktSubheading:
      'Every campaign begins with strategic intent. I build end-to-end marketing engines where content informs distribution and data optimizes creative execution.',

    // AI Creative
    aiBadge: '05 — CREATIVE EDGE & INNOVATION',
    aiHeading: 'AI-Powered Creative Direction & Commercial Production',

    // Owner controls
    ownerActiveBadge: 'Owner Mode Active (Mohamed Mostafa)',
    ownerClientPreviewNotice: 'Previewing as Client (Editing controls hidden)',
    ownerExitPreview: 'Exit Preview',
    ownerPreviewAsClient: 'Preview as Client',
    ownerAddProject: '+ Add Project',
    ownerOpenCms: 'CMS Dashboard',
    ownerLogout: 'Lock / Logout',
    ownerLoginTitle: 'Owner Portal',
    ownerLoginDesc: 'Enter your PIN or email to access portfolio management & editing controls.',
    ownerLoginPinPlaceholder: 'Enter PIN (e.g., 2026)',
    ownerUnlockBtn: 'Unlock Owner Mode',
    ownerDemoHint: 'Quick Access: PIN is 2026',

    // Quick dock
    dockWhatsApp: 'WhatsApp Direct',
    dockEmail: 'Email',
    dockCv: 'Download CV',
    dockLang: 'عربي',
    dockTop: 'Top',
  },
  ar: {
    // Navigation
    navWork: 'الأعمال',
    navMarketing: 'التسويق الرقمي',
    navAiCreative: 'إبداع الذكاء الاصطناعي',
    navInsights: 'المقالات والأفكار',
    navCertifications: 'الشهادات',
    navContact: 'تواصل معي',
    navResume: 'السيرة الذاتية',
    navCms: 'لوحة التحكم',
    navLetsTalk: 'ابدأ مشروعك',

    // Hero
    heroAvailable: 'متاح لحملات العلامات التجارية والتعاون الإبداعي',
    heroLocation: 'القاهرة وعن بُعد',
    heroTitle: 'محمد مصطفى',
    heroSubtitle: 'أخصائي تسويق رقمي وصانع محتوى بالذكاء الاصطناعي',
    heroDescription:
      'تحويل الأفكار إلى تجارب رقمية ومحتوى سينمائي واستراتيجيات تسويقية تصنع أثراً حقيقياً وتربط العلامات التجارية بجمهورها المستهدف.',
    heroViewWork: 'استكشف الأعمال المختارة',
    heroCollaborate: 'تواصل للتعاون الإعلاني',
    heroDownloadCv: 'السيرة الذاتية (CV)',
    heroFeaturedBadge: 'أحدث أعمال 2026',
    heroExploreCase: 'استعرض دراسة الحالة الإعلانية',

    // Featured Work
    workSectionNumber: '06 — الأعمال المختارة وحملات الذكاء الاصطناعي',
    workHeading: 'المشاريع الإعلانية ودراسات الجدوى الإبداعية',
    workSubheading:
      'إعلانات تجارية سينمائية، إنتاج فيديو بالذكاء الاصطناعي، واستراتيجيات تسويق متكاملة لزيادة الانتشار والمبيعات.',
    workAddNew: 'إضافة مشروع جديد',
    workExploreStoryboard: 'استكشف دراسة الحالة والستوري بورد كاملاً',
    workObjective: 'الهدف التسويقي',
    workRole: 'الدور الإبداعي',
    workCompetencies: 'المهارات المطبقة',

    // Marketing Section
    mktBadge: '04 — التخصص الجوهري',
    mktHeading: 'التسويق الرقمي وهندسة المحتوى الاستراتيجي',
    mktSubheading:
      'كل حملة تبدأ برؤية مدروسة. أصمم منظومات تسويقية متكاملة تربط بين استراتيجية المحتوى والتحليل الرقمي لتحقيق أعلى عائد على الاستثمار.',

    // AI Creative
    aiBadge: '05 — الميزة التنافسية والإبداع المستقبلي',
    aiHeading: 'الإخراج الإبداعي بالذكاء الاصطناعي والإنتاج التجاري',

    // Owner controls
    ownerActiveBadge: 'وضع المالك مفعل (محمد مصطفى)',
    ownerClientPreviewNotice: 'معاينة كعميل (أزرار التعديل والإضافة مخفية)',
    ownerExitPreview: 'إنهاء المعاينة',
    ownerPreviewAsClient: 'معاينة كعميل',
    ownerAddProject: '+ إضافة مشروع',
    ownerOpenCms: 'لوحة التحكم (CMS)',
    ownerLogout: 'قفل / تسجيل خروج',
    ownerLoginTitle: 'بوابة المالك (محمد مصطفى)',
    ownerLoginDesc: 'أدخل رمز المرور أو بريدك الإلكتروني للوصول إلى أدوات إضافة وتعديل وإدارة المشاريع.',
    ownerLoginPinPlaceholder: 'أدخل رمز المرور (مثال: 2026)',
    ownerUnlockBtn: 'تفعيل وضع المالك',
    ownerDemoHint: 'رمز المرور الافتراضي: 2026',

    // Quick dock
    dockWhatsApp: 'واتساب مباشر',
    dockEmail: 'إيميل',
    dockCv: 'السيرة الذاتية',
    dockLang: 'English',
    dockTop: 'للأعلى',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('mm_portfolio_lang');
      if (saved === 'ar' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('mm_portfolio_lang', lang);
    } catch {
      // ignore
    }

    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      document.body.classList.add('font-arabic');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      document.body.classList.remove('font-arabic');
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
  };

  const isAr = lang === 'ar';

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage, isAr, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
