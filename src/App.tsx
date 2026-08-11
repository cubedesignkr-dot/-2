import React, { useState, useEffect } from 'react';
import { Language, GalleryCategory } from './types';
import { storage } from './services/storage';
import { t } from './utils/translations';

import { Header, ActivePage } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { MetricsSection } from './components/MetricsSection';
import { AboutDiseSection } from './components/AboutDiseSection';
import { SolutionsSection } from './components/SolutionsSection';
import { SelectedProjectsSection } from './components/SelectedProjectsSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { AboutSection, AboutSubTab } from './components/AboutSection';
import { BusinessFourPillars } from './components/BusinessFourPillars';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { ContactModal } from './components/ContactModal';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ko');
  const [activePage, setActivePage] = useState<ActivePage>('home');

  // SubTab & SubCategory Navigation States
  const [aboutSubTab, setAboutSubTab] = useState<AboutSubTab>('overview');
  const [techSubTab, setTechSubTab] = useState<'fields' | 'core'>('fields');
  const [galleryCategory, setGalleryCategory] = useState<GalleryCategory>('all');

  // CMS Site States
  const [hero, setHero] = useState(storage.getHero());
  const [metrics, setMetrics] = useState(storage.getMetrics());
  const [pillars, setPillars] = useState(storage.getPillars());
  const [techs, setTechs] = useState(storage.getTechs());
  const [portfolio, setPortfolio] = useState(storage.getPortfolio());
  const [ceoMessages, setCeoMessages] = useState(storage.getCeoMessages());
  const [orgData, setOrgData] = useState(storage.getOrg());
  const [theme, setTheme] = useState(storage.getTheme());
  const [seo, setSeo] = useState(storage.getSeo());
  const [logoUrl, setLogoUrl] = useState<string | null>(storage.getLogo());
  const [heroImages, setHeroImages] = useState<string[] | null>(storage.getHeroImages());

  // Modal Controls
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Handle RTL for Arabic
  useEffect(() => {
    document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    const titleText = seo.metaTitle[currentLang] || seo.metaTitle.ko;
    document.title = titleText;
  }, [currentLang, seo]);

  // Global Hash Router Synchronizer
  useEffect(() => {
    const syncRouteWithHash = () => {
      const hash = window.location.hash.replace(/^#/, '').trim().toLowerCase();
      if (!hash) return;

      if (['about', 'company', 'overview'].includes(hash)) {
        setActivePage('about');
        setAboutSubTab('company');
      } else if (hash === 'history') {
        setActivePage('about');
        setAboutSubTab('history');
      } else if (['ceo', 'ceo-message', 'ceomessage'].includes(hash)) {
        setActivePage('about');
        setAboutSubTab('ceo-message');
      } else if (['org', 'organization'].includes(hash)) {
        setActivePage('about');
        setAboutSubTab('organization');
      } else if (['solutions', 'pillars', 'led-media', 'control-system', 'cms-operation', 'ai-interactive', 'solution-01', 'solution-02', 'solution-03'].includes(hash)) {
        setActivePage('pillars');
      } else if (['projects', 'portfolio', 'gallery'].includes(hash)) {
        setActivePage('portfolio');
      } else if (hash === 'contact') {
        setActivePage('contact');
      } else if (hash === 'home') {
        setActivePage('home');
      }
    };

    // Sync on initial load
    syncRouteWithHash();

    // Sync on hash change
    window.addEventListener('hashchange', syncRouteWithHash);
    return () => window.removeEventListener('hashchange', syncRouteWithHash);
  }, []);

  // Scroll to top automatically when active page or subTab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, aboutSubTab, techSubTab]);

  const handlePageChange = (page: ActivePage, subTab?: string, portfolioFilter?: string) => {
    setActivePage(page);

    if (page === 'about') {
      const normalizedSubTab = (subTab as AboutSubTab) || 'company';
      setAboutSubTab(normalizedSubTab);
      if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
        const targetHash = normalizedSubTab === 'overview' ? 'company' : normalizedSubTab;
        window.history.replaceState(null, '', `#${targetHash}`);
      }
    } else if (page === 'pillars') {
      if (subTab === 'core' || subTab === 'fields') {
        setTechSubTab(subTab);
      } else {
        setTechSubTab('fields');
      }
      if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#solutions`);
      }
    } else if (page === 'portfolio') {
      if (portfolioFilter === 'global') {
        setGalleryCategory('global');
      } else if (!portfolioFilter) {
        setGalleryCategory('all');
      }
      if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#projects`);
      }
    } else if (page === 'contact') {
      if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#contact`);
      }
    } else if (page === 'home') {
      if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#home`);
      }
    }
    window.scrollTo(0, 0);
  };

  // Save Handlers
  const handleSaveHero = (data: any) => {
    setHero(data);
    storage.saveHero(data);
  };

  const handleSavePortfolio = (items: any) => {
    setPortfolio(items);
    storage.savePortfolio(items);
  };

  const handleSaveCeoMessages = (items: any) => {
    setCeoMessages(items);
    storage.saveCeoMessages(items);
  };

  const handleSaveTheme = (newTheme: any) => {
    setTheme(newTheme);
    storage.saveTheme(newTheme);
  };

  const handleSaveSeo = (newSeo: any) => {
    setSeo(newSeo);
    storage.saveSeo(newSeo);
  };

  const handleSaveLogo = (newLogoUrl: string | null) => {
    setLogoUrl(newLogoUrl);
    storage.saveLogo(newLogoUrl);
  };

  const handleSaveHeroImages = (newImages: string[] | null) => {
    setHeroImages(newImages);
    storage.saveHeroImages(newImages);
  };

  const handleResetAllData = () => {
    storage.resetAll();
    setHero(storage.getHero());
    setMetrics(storage.getMetrics());
    setPillars(storage.getPillars());
    setTechs(storage.getTechs());
    setPortfolio(storage.getPortfolio());
    setCeoMessages(storage.getCeoMessages());
    setOrgData(storage.getOrg());
    setTheme(storage.getTheme());
    setSeo(storage.getSeo());
    setLogoUrl(storage.getLogo());
    setHeroImages(storage.getHeroImages());
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      {/* Top Fixed Header with Clean GNB & Logo Home Action */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        theme={theme}
        activePage={activePage}
        onPageChange={handlePageChange}
        customLogo={logoUrl}
      />

      {/* Main Content Area based on Active Menu */}
      <main className="flex-1">
        {/* 1. HOME TAB */}
        {activePage === 'home' && (
          <div className="animate-fadeIn">
            {/* 2. HERO */}
            <HeroBanner
              onOpenPortfolio={() => handlePageChange('portfolio')}
            />
            
            {/* 3. METRIC STRIP */}
            <MetricsSection />

            {/* 4. ABOUT DISE */}
            <AboutDiseSection
              onNavigateAbout={() => handlePageChange('about', 'overview')}
            />

            {/* 5. SOLUTIONS */}
            <SolutionsSection
              onNavigateSolutions={(subTab) => handlePageChange('pillars', subTab)}
            />

            {/* 6. SELECTED PROJECTS (Combines Featured & Global Projects) */}
            <SelectedProjectsSection
              onNavigateProjects={() => handlePageChange('portfolio')}
            />

            {/* 7. CONTACT CTA */}
            <ContactCtaSection
              onNavigateContact={() => handlePageChange('contact')}
            />
          </div>
        )}

        {/* 2. ABOUT TAB (Company & Core Tech Integrated) */}
        {activePage === 'about' && (
          <div className="animate-fadeIn">
            <AboutSection
              currentLang={currentLang}
              ceoMessages={ceoMessages}
              orgData={orgData}
              techs={techs}
              pillars={pillars}
              selectedSubTab={aboutSubTab}
              onSelectSubTab={(tab) => setAboutSubTab(tab)}
              customLogo={logoUrl}
              onNavigatePortfolio={(cat) => {
                if (cat === 'global') {
                  handlePageChange('portfolio', 'overview', 'global');
                } else {
                  handlePageChange('portfolio');
                }
              }}
            />
          </div>
        )}

        {/* 3. SOLUTIONS TAB */}
        {activePage === 'pillars' && (
          <div className="animate-fadeIn min-h-[60vh]">
            <BusinessFourPillars
              currentLang={currentLang}
              onNavigateContact={() => handlePageChange('contact')}
              onNavigateProjects={(cat) => handlePageChange('portfolio', 'overview', cat)}
            />
          </div>
        )}

        {/* 4. GALLERY TAB */}
        {activePage === 'portfolio' && (
          <div className="animate-fadeIn">
            <PortfolioGallery
              currentLang={currentLang}
              portfolio={portfolio}
              onOpenAdminGallery={() => setIsAdminOpen(true)}
              initialCategory={galleryCategory}
            />
          </div>
        )}

        {/* 5. CONTACT TAB */}
        {activePage === 'contact' && (
          <div className="animate-fadeIn">
            <ContactSection currentLang={currentLang} />
          </div>
        )}
      </main>

      {/* Footer at very bottom */}
      <Footer
        theme={theme}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onNavigate={handlePageChange}
        customLogo={logoUrl}
      />

      {/* Admin Dashboard Overlay Modal */}
      {isAdminOpen && (
        <AdminDashboard
          currentLang={currentLang}
          onClose={() => setIsAdminOpen(false)}
          hero={hero}
          onSaveHero={handleSaveHero}
          heroImages={heroImages}
          onSaveHeroImages={handleSaveHeroImages}
          portfolio={portfolio}
          onSavePortfolio={handleSavePortfolio}
          ceoMessages={ceoMessages}
          onSaveCeoMessages={handleSaveCeoMessages}
          theme={theme}
          onSaveTheme={handleSaveTheme}
          seo={seo}
          onSaveSeo={handleSaveSeo}
          customLogo={logoUrl}
          onSaveLogo={handleSaveLogo}
          onResetAllData={handleResetAllData}
        />
      )}

      {/* Contact Modal */}
      {isContactOpen && (
        <ContactModal
          currentLang={currentLang}
          onClose={() => setIsContactOpen(false)}
        />
      )}
    </div>
  );
}
