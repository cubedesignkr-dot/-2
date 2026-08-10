export type Language = 'ko' | 'en' | 'vi' | 'zh' | 'ar';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export type GalleryCategory = 'all' | 'airport' | 'commercial' | 'retail' | 'global';

export interface PortfolioItem {
  id: string;
  title: Record<Language, string>;
  category: GalleryCategory;
  categoryLabel: Record<Language, string>;
  imageUrl: string;
  location: Record<Language, string>;
  specs: Record<Language, string>;
  year: string;
  description: Record<Language, string>;
  isFeatured?: boolean;
  screenCount?: number;
  highlightBadge?: string;
}

export interface BusinessPillar {
  id: string;
  title: Record<Language, string>;
  subTitle: Record<Language, string>;
  iconName: string;
  description: Record<Language, string>;
  features: Record<Language, string[]>;
  techHighlights: Record<Language, string>;
  image: string;
}

export interface AmsitTech {
  id: string;
  codeName: string;
  name: Record<Language, string>;
  summary: Record<Language, string>;
  description: Record<Language, string>;
  keyBenefit: Record<Language, string>;
  icon: string;
  specMetric: string;
  demoType: 'weight' | 'resolution' | 'stack' | 'trigger' | 'ai';
}

export interface CeoMessage {
  name: Record<Language, string>;
  title: Record<Language, string>;
  quote: Record<Language, string>;
  body: Record<Language, string>;
  photo: string;
  keyAchievement: Record<Language, string>;
}

export interface OrgDepartment {
  id: string;
  division: Record<Language, string>;
  leadName: Record<Language, string>;
  teams: {
    name: Record<Language, string>;
    role: Record<Language, string>;
    membersCount: number;
  }[];
}

export interface SiteThemeConfig {
  primaryColor: string; // Default deep luxurious dark blue #0b132b / #0f172a
  silverAccent: string; // Brushed silver #e2e8f0 / #cbd5e1
  bluePoint: string; // Point blue #2563eb / #3b82f6
  redPoint: string; // Point red #ef4444 / #dc2626
  fontFamily: 'sans' | 'serif' | 'mono';
  headerBlur: boolean;
  cardRadius: 'sm' | 'md' | 'lg' | 'xl';
  customLogoText: string;
  customLogoSubtext: string;
  logoImageUrl?: string;
}

export interface SeoConfig {
  metaTitle: Record<Language, string>;
  metaDescription: Record<Language, string>;
  metaKeywords: Record<Language, string>;
  ogImageUrl: string;
  canonicalUrl: string;
  author: string;
}

export interface BusinessFeasibilityInputs {
  locationType: string;
  screenSize: string;
  estimatedTraffic: string;
  operatingHours: string;
  initialBudget: string;
}
