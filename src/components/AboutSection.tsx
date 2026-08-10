import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { CompanySection } from './CompanySection';
import { HistorySection } from './HistorySection';
import { CeoSection } from './CeoSection';
import { OrgSection } from './OrgSection';

export type AboutSubTab =
  | 'company'
  | 'history'
  | 'ceo-message'
  | 'organization'
  | 'overview'
  | 'ceo'
  | 'org';

interface AboutSectionProps {
  currentLang: Language;
  selectedSubTab?: AboutSubTab | string;
  onSelectSubTab?: (tab: AboutSubTab) => void;
  [key: string]: any;
}

export const ABOUT_TABS = [
  { id: 'company', label: 'COMPANY' },
  { id: 'history', label: 'HISTORY' },
  { id: 'ceo-message', label: 'CEO MESSAGE' },
  { id: 'organization', label: 'ORGANIZATION' },
] as const;

export type AboutTabId = (typeof ABOUT_TABS)[number]['id'];

const normalizeTab = (rawTab?: string): AboutTabId => {
  if (!rawTab) return 'company';
  const clean = rawTab.replace(/^#/, '').trim().toLowerCase();
  if (clean === 'overview' || clean === 'company') return 'company';
  if (clean === 'history') return 'history';
  if (clean === 'ceo' || clean === 'ceo-message' || clean === 'ceomessage') return 'ceo-message';
  if (clean === 'org' || clean === 'organization') return 'organization';
  return 'company';
};

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  selectedSubTab,
  onSelectSubTab,
}) => {
  const [activeAboutTab, setActiveAboutTab] = useState<AboutTabId>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return normalizeTab(window.location.hash);
    }
    return normalizeTab(selectedSubTab);
  });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Update tab if selectedSubTab prop changes externally
  useEffect(() => {
    if (selectedSubTab) {
      const normalized = normalizeTab(selectedSubTab);
      setActiveAboutTab(normalized);
    }
  }, [selectedSubTab]);

  // Optional URL Hash listener
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveAboutTab(normalizeTab(window.location.hash));
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tabId: AboutTabId) => {
    setActiveAboutTab(tabId);
    if (onSelectSubTab) {
      onSelectSubTab(tabId as AboutSubTab);
    }

    // Optional hash update without scroll jump
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${tabId}`);
    }

    // Scroll smoothly to top of tab container if scrolled past
    const container = document.getElementById('about-tab-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      if (rect.top < 80) {
        window.scrollTo({
          top: window.scrollY + rect.top - 80,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentId: AboutTabId) => {
    const currentIndex = ABOUT_TABS.findIndex((t) => t.id === currentId);
    if (currentIndex === -1) return;

    let nextIndex = -1;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % ABOUT_TABS.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + ABOUT_TABS.length) % ABOUT_TABS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = ABOUT_TABS.length - 1;
    }

    if (nextIndex !== -1) {
      const nextTab = ABOUT_TABS[nextIndex];
      handleTabChange(nextTab.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className="bg-white text-[#222831]">
      <div id="about-tab-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* COMPACT CORPORATE TAB NAVIGATION */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-[#D9DEE3] mb-8 sm:mb-12">
          <div
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto py-3.5 scrollbar-none whitespace-nowrap"
            role="tablist"
            aria-label="About DISE"
          >
            {ABOUT_TABS.map((tab, index) => {
              const isActive = activeAboutTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleTabChange(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, tab.id)}
                  className={`text-xs sm:text-sm font-mono tracking-wider uppercase pb-2 transition-colors cursor-pointer border-b-2 whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-[#294A63] ${
                    isActive
                      ? 'text-[#222831] border-[#294A63] font-bold'
                      : 'text-[#66717C] border-transparent hover:text-[#222831] font-semibold'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE TAB PANEL - RENDERS ONLY ACTIVE TAB CONTENT */}
        <div
          id={`panel-${activeAboutTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeAboutTab}`}
          className="about-tab-panel animate-fadeIn"
        >
          {activeAboutTab === 'company' && <CompanySection currentLang={currentLang} />}
          {activeAboutTab === 'history' && <HistorySection currentLang={currentLang} />}
          {activeAboutTab === 'ceo-message' && <CeoSection currentLang={currentLang} />}
          {activeAboutTab === 'organization' && <OrgSection currentLang={currentLang} />}
        </div>
      </div>
    </div>
  );
};
