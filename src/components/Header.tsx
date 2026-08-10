import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Language, LanguageOption, SiteThemeConfig } from '../types';
import { LANGUAGES } from '../data/initialData';
import { CompanyLogo } from './CompanyLogo';

export type ActivePage = 'home' | 'about' | 'pillars' | 'portfolio' | 'contact';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  theme: SiteThemeConfig;
  activePage: ActivePage;
  onPageChange: (page: ActivePage, subTab?: string, portfolioFilter?: string) => void;
  customLogo?: string | null;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activePage,
  onPageChange,
  customLogo,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'lang' | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavClick = (page: ActivePage, subTab?: string, portfolioFilter?: string) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    onPageChange(page, subTab, portfolioFilter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: ActivePage; label: string; subTab?: string }[] = [
    { id: 'about', label: 'ABOUT', subTab: 'overview' },
    { id: 'pillars', label: 'SOLUTIONS', subTab: 'fields' },
    { id: 'portfolio', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 relative">
        {/* Brand Logo (Clicking logo goes Home) */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group shrink-0 z-10 py-1"
          title="HOME"
        >
          <CompanyLogo customLogo={customLogo} variant="dark" className="h-9 sm:h-10 w-auto group-hover:scale-[1.02] transition-transform" />
        </div>

        {/* Desktop & Tablet Navigation (Exactly ABOUT, SOLUTIONS, PROJECTS, CONTACT - No Dropdowns) */}
        <nav className="hidden lg:flex items-center gap-1 lg:gap-3 xl:gap-6 absolute left-1/2 -translate-x-1/2 z-10">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id, item.subTab)}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold tracking-wider transition-colors cursor-pointer whitespace-nowrap border-b-2 ${
                  isActive
                    ? 'text-blue-600 border-blue-600 font-bold'
                    : 'text-slate-800 border-transparent hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Compact Language Selector Right Action */}
        <div className="flex items-center gap-2 z-10">
          {(() => {
            const activeLangObj = LANGUAGES.find((l: LanguageOption) => l.code === currentLang) || LANGUAGES[0];
            return (
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(openDropdown === 'lang' ? null : 'lang');
                  }}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-sm border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-medium transition-all cursor-pointer"
                  aria-label="Language Select"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-500" />
                  <span className="uppercase font-mono tracking-wider font-semibold text-[11px]">{activeLangObj.code}</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${openDropdown === 'lang' ? 'rotate-180' : ''}`} />
                </button>

                {/* Language Dropdown Menu */}
                {openDropdown === 'lang' && (
                  <div className="absolute right-0 top-full mt-1.5 w-32 z-50 bg-white border border-slate-200 rounded-xl shadow-xl p-1 space-y-0.5 animate-fadeIn">
                    {LANGUAGES.map((lang: LanguageOption) => {
                      const isSelected = currentLang === lang.code;
                      return (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => {
                            onLanguageChange(lang.code);
                            setOpenDropdown(null);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-blue-50 text-blue-700 font-extrabold'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span className="uppercase font-mono">{lang.code}</span>
                          <span className="text-[11px] font-normal text-slate-500">{lang.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })()}

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Simple direct links - No Dropdowns) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 animate-fadeIn shadow-lg">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id, item.subTab)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold tracking-wider transition-colors ${
                  isActive ? 'bg-blue-600 text-white' : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
