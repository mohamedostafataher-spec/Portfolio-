export interface DeckSlide {
  slideNumber: number;
  title: string;
  category?: string;
  highlight?: string;
  points: string[];
  metrics?: { label: string; value: string }[];
}

export type PortfolioTrack =
  | 'Content Creation'
  | 'AI Content'
  | 'Videos'
  | 'Dubbing & Audio'
  | 'Photography'
  | 'Marketing Strategy';

export interface Project {
  id: string;
  title: string;
  clientOrSpec: 'Commercial Campaign' | 'Client Project' | 'Brand Launch' | 'Strategic Blueprint' | 'Concept Campaign' | 'Spec Project' | 'Academic & Practical';
  subtitle: string;
  category: PortfolioTrack | 'Market Research & Audit' | 'Brand Presentation & Deck' | 'AI Commercial' | 'Food Advertising' | 'Fashion & Identity' | 'Short-Form Video';
  tracks?: PortfolioTrack[];
  description: string;
  skills: string[];
  objective: string;
  concept: string;
  myRole: string;
  whatIDid?: string[];
  projectType?: string;
  tools: string[];
  process: { step: string; detail: string }[];
  finalResult: string;
  image: string;
  videoUrl?: string;
  videoPreviewUrl?: string;
  aspectRatio?: '16:9' | '9:16' | '4:3';
  stats?: { label: string; value: string }[];
  featured?: boolean;
  tagline?: string;
  reelImage?: string;
  year?: string;
  date?: string;
  metrics?: { label: string; value: string; note?: string }[];
  voiceoverScript?: { time: string; ar: string; en: string }[];
  storyboard?: { scene: string; visual: string; focus: string }[];
  galleryImages?: string[];
  audioUrl?: string;
  audioTitle?: string;
  deckSlides?: DeckSlide[];
  deckDownloadUrl?: string;
  pdfDownloadUrl?: string;
  pdfFileName?: string;
  deckFileName?: string;
  driveFolderUrl?: string;
  evidenceStatus?: 'Drive-backed' | 'Coursework' | 'Spec Concept' | 'Video Sample';
  evidenceLabelAr?: string;
  guardrailNote?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  readTime: string;
  date: string;
  category: 'AI Advertising' | 'Content Strategy' | 'Video Production' | 'Marketing Psychology';
  excerpt: string;
  tags: string[];
  content: string[];
  keyTakeaways: string[];
}

export interface Certification {
  id: string;
  title: string;
  platform: string;
  year: string;
  skills: string[];
  verifyUrl?: string;
  credentialId?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ToolItem {
  name: string;
  purpose: string;
  category: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface ExperienceItem {
  title: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
}
