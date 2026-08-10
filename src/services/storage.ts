import {
  PortfolioItem,
  BusinessPillar,
  AmsitTech,
  CeoMessage,
  OrgDepartment,
  SiteThemeConfig,
  SeoConfig,
} from '../types';

import {
  INITIAL_PORTFOLIO,
  INITIAL_PILLARS,
  INITIAL_AMSIT_TECHS,
  INITIAL_CEO_MESSAGES,
  INITIAL_ORG,
  DEFAULT_HERO,
  INITIAL_METRICS,
  DEFAULT_THEME_CONFIG,
  DEFAULT_SEO_CONFIG,
} from '../data/initialData';

const KEYS = {
  HERO: 'daiz_hero_v1',
  METRICS: 'daiz_metrics_v1',
  PILLARS: 'daiz_pillars_v1',
  TECHS: 'daiz_techs_v1',
  PORTFOLIO: 'daiz_portfolio_v1',
  CEO_MESSAGES: 'daiz_ceo_v1',
  ORG: 'daiz_org_v1',
  THEME: 'daiz_theme_v1',
  SEO: 'daiz_seo_v1',
  LOGO: 'daiz_custom_logo_v1',
  HERO_IMAGES: 'daiz_hero_images_v1',
};

export const storage = {
  getHero() {
    try {
      const data = localStorage.getItem(KEYS.HERO);
      return data ? JSON.parse(data) : DEFAULT_HERO;
    } catch {
      return DEFAULT_HERO;
    }
  },
  saveHero(data: typeof DEFAULT_HERO) {
    localStorage.setItem(KEYS.HERO, JSON.stringify(data));
  },

  getMetrics() {
    try {
      const data = localStorage.getItem(KEYS.METRICS);
      return data ? JSON.parse(data) : INITIAL_METRICS;
    } catch {
      return INITIAL_METRICS;
    }
  },
  saveMetrics(data: typeof INITIAL_METRICS) {
    localStorage.setItem(KEYS.METRICS, JSON.stringify(data));
  },

  getPillars(): BusinessPillar[] {
    try {
      const data = localStorage.getItem(KEYS.PILLARS);
      return data ? JSON.parse(data) : INITIAL_PILLARS;
    } catch {
      return INITIAL_PILLARS;
    }
  },
  savePillars(data: BusinessPillar[]) {
    localStorage.setItem(KEYS.PILLARS, JSON.stringify(data));
  },

  getTechs(): AmsitTech[] {
    try {
      const data = localStorage.getItem(KEYS.TECHS);
      return data ? JSON.parse(data) : INITIAL_AMSIT_TECHS;
    } catch {
      return INITIAL_AMSIT_TECHS;
    }
  },
  saveTechs(data: AmsitTech[]) {
    localStorage.setItem(KEYS.TECHS, JSON.stringify(data));
  },

  getPortfolio(): PortfolioItem[] {
    try {
      const data = localStorage.getItem(KEYS.PORTFOLIO);
      return data ? JSON.parse(data) : INITIAL_PORTFOLIO;
    } catch {
      return INITIAL_PORTFOLIO;
    }
  },
  savePortfolio(data: PortfolioItem[]) {
    localStorage.setItem(KEYS.PORTFOLIO, JSON.stringify(data));
  },

  getCeoMessages(): CeoMessage[] {
    try {
      const data = localStorage.getItem(KEYS.CEO_MESSAGES);
      if (data) {
        const parsed: CeoMessage[] = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const photo = parsed[0].photo;
          if (!photo || photo.includes('unsplash') || photo.length < 10 || photo.includes('ceo_portrait')) {
            parsed[0].photo = 'https://i.imgur.com/JL7fa9f.png';
          }
          return parsed;
        }
      }
      return INITIAL_CEO_MESSAGES;
    } catch {
      return INITIAL_CEO_MESSAGES;
    }
  },
  saveCeoMessages(data: CeoMessage[]) {
    try {
      localStorage.setItem(KEYS.CEO_MESSAGES, JSON.stringify(data));
    } catch (err) {
      console.error('Failed to save CEO messages:', err);
    }
  },

  getOrg(): OrgDepartment[] {
    try {
      const data = localStorage.getItem(KEYS.ORG);
      return data ? JSON.parse(data) : INITIAL_ORG;
    } catch {
      return INITIAL_ORG;
    }
  },
  saveOrg(data: OrgDepartment[]) {
    localStorage.setItem(KEYS.ORG, JSON.stringify(data));
  },

  getTheme(): SiteThemeConfig {
    try {
      const data = localStorage.getItem(KEYS.THEME);
      return data ? JSON.parse(data) : DEFAULT_THEME_CONFIG;
    } catch {
      return DEFAULT_THEME_CONFIG;
    }
  },
  saveTheme(data: SiteThemeConfig) {
    localStorage.setItem(KEYS.THEME, JSON.stringify(data));
  },

  getSeo(): SeoConfig {
    try {
      const data = localStorage.getItem(KEYS.SEO);
      return data ? JSON.parse(data) : DEFAULT_SEO_CONFIG;
    } catch {
      return DEFAULT_SEO_CONFIG;
    }
  },
  saveSeo(data: SeoConfig) {
    localStorage.setItem(KEYS.SEO, JSON.stringify(data));
  },

  getLogo(): string | null {
    try {
      const item = localStorage.getItem(KEYS.LOGO);
      if (!item || item.length < 10) return 'https://i.imgur.com/M81md58.png';
      return item;
    } catch {
      return 'https://i.imgur.com/M81md58.png';
    }
  },
  saveLogo(logoUrl: string | null) {
    try {
      if (logoUrl) {
        localStorage.setItem(KEYS.LOGO, logoUrl);
      } else {
        localStorage.removeItem(KEYS.LOGO);
      }
    } catch (err) {
      console.error('Failed to save custom logo to LocalStorage:', err);
    }
  },

  getHeroImages(): string[] | null {
    try {
      const data = localStorage.getItem(KEYS.HERO_IMAGES);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.slice(0, 5); // max 5
        }
      }
      return null;
    } catch {
      return null;
    }
  },
  saveHeroImages(images: string[] | null) {
    if (images && images.length > 0) {
      localStorage.setItem(KEYS.HERO_IMAGES, JSON.stringify(images.slice(0, 5)));
    } else {
      localStorage.removeItem(KEYS.HERO_IMAGES);
    }
  },

  resetAll() {
    Object.values(KEYS).forEach((key) => localStorage.removeItem(key));
  },
};
