import React, { useState, useEffect } from 'react';
import { Quote, Network, Building2, ChevronRight, Award, ShieldCheck, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language, CeoMessage, OrgDepartment, AmsitTech, BusinessPillar } from '../types';
import { AmsitTechSection } from './AmsitTechSection';
import { CompanyHistory } from './CompanyHistory';
import { BusinessFourPillars } from './BusinessFourPillars';
import { OrgChart } from './OrgChart';
import ceoPortraitDriveImg from '../assets/images/ceo_portrait_drive.jpg';
import imgLedBg from '../assets/images/led_display_bg_1785990073226.jpg';
import { t } from '../utils/translations';

export type AboutSubTab = 'overview' | 'ceo' | 'history' | 'business' | 'org';

interface AboutSectionProps {
  currentLang: Language;
  ceoMessages: CeoMessage[];
  orgData: OrgDepartment[];
  techs?: AmsitTech[];
  pillars?: BusinessPillar[];
  selectedSubTab?: AboutSubTab;
  onSelectSubTab?: (tab: AboutSubTab) => void;
  onNavigatePortfolio?: (categoryFilter?: string) => void;
  customLogo?: string | null;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  ceoMessages,
  orgData,
  pillars,
  selectedSubTab = 'overview',
  onSelectSubTab,
  onNavigatePortfolio,
  customLogo,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<AboutSubTab>(selectedSubTab);

  useEffect(() => {
    if (selectedSubTab) {
      setActiveSubTab(selectedSubTab);
    }
  }, [selectedSubTab]);

  const handleTabClick = (tab: AboutSubTab) => {
    setActiveSubTab(tab);
    if (onSelectSubTab) {
      onSelectSubTab(tab);
    }
  };

  const tabs: { id: AboutSubTab; key: string }[] = [
    { id: 'overview', key: 'nav_overview' },
    { id: 'org', key: 'nav_org' },
  ];

  return (
    <section id="about" className="py-10 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Area */}
        <div className="w-full">
          {/* 1. 회사개요 View (Company Overview + Company History Combined) */}
            {(activeSubTab === 'overview' || activeSubTab === 'history') && (
              <div className="space-y-12 animate-fadeIn">
                {/* Intro Hero Box (LED Background Theme - Expanded Height) */}
                <div className="py-16 sm:py-28 px-8 sm:px-14 min-h-[400px] sm:min-h-[500px] flex flex-col justify-center rounded-2xl text-white relative overflow-hidden shadow-xl group border border-slate-800">
                  {/* LED Background Image with subtle zoom hover */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${imgLedBg})` }}
                  />
                  {/* Dark gradient overlay for high contrast text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-blue-950/70" />

                  <div className="relative z-10 max-w-4xl space-y-4">
                    <div>
                      <span className="text-xs sm:text-sm font-mono text-blue-300 font-bold uppercase tracking-wider bg-blue-950/90 px-3.5 py-1.5 rounded-full border border-blue-700/80 shadow-sm">
                        {t('about_badge', currentLang)}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-snug sm:leading-tight tracking-tight text-white drop-shadow-md pt-2">
                      {t('about_hero_title1', currentLang)}<br />
                      <span className="text-blue-400 font-extrabold">{t('about_hero_title2', currentLang)}</span>
                    </h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal border-t border-slate-700/70 pt-6 max-w-3xl drop-shadow-xs">
                      {t('about_hero_desc', currentLang)}
                    </p>
                  </div>
                </div>

                {/* 4 Core Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                  {/* Card 1 */}
                  <div className="py-10 sm:py-12 px-6 sm:px-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-500/80 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between min-h-[280px] sm:min-h-[320px] group">
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-blue-700 tracking-tight group-hover:scale-105 transition-transform origin-left">
                        16 Years
                      </div>
                      <div className="text-[11px] font-mono font-semibold text-blue-600/80 tracking-widest uppercase mt-1">
                        UNINTERRUPTED EXPERTISE
                      </div>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-4 mb-2 tracking-tight">
                        {t('card1_title', currentLang)}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal [word-break:keep-all] break-keep pt-3 border-t border-slate-200/60">
                      {t('card1_desc', currentLang)}
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="py-10 sm:py-12 px-6 sm:px-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-500/80 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between min-h-[280px] sm:min-h-[320px] group">
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-blue-700 tracking-tight group-hover:scale-105 transition-transform origin-left">
                        5 Core
                      </div>
                      <div className="text-[11px] font-mono font-semibold text-blue-600/80 tracking-widest uppercase mt-1">
                        PROPRIETARY PATENTS
                      </div>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-4 mb-2 tracking-tight">
                        {t('card2_title', currentLang)}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal [word-break:keep-all] break-keep pt-3 border-t border-slate-200/60">
                      {t('card2_desc', currentLang)}
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="py-10 sm:py-12 px-6 sm:px-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-500/80 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between min-h-[280px] sm:min-h-[320px] group">
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-blue-700 tracking-tight group-hover:scale-105 transition-transform origin-left">
                        3,000+
                      </div>
                      <div className="text-[11px] font-mono font-semibold text-blue-600/80 tracking-widest uppercase mt-1">
                        GLOBAL PROJECTS
                      </div>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-4 mb-2 tracking-tight">
                        {t('card3_title', currentLang)}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal [word-break:keep-all] break-keep pt-3 border-t border-slate-200/60">
                      {t('card3_desc', currentLang)}
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="py-10 sm:py-12 px-6 sm:px-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-500/80 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between min-h-[280px] sm:min-h-[320px] group">
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-blue-700 tracking-tight group-hover:scale-105 transition-transform origin-left">
                        0 Claims
                      </div>
                      <div className="text-[11px] font-mono font-semibold text-blue-600/80 tracking-widest uppercase mt-1">
                        ZERO TECHNICAL DISPUTES
                      </div>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-4 mb-2 tracking-tight">
                        {t('card4_title', currentLang)}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal [word-break:keep-all] break-keep pt-3 border-t border-slate-200/60">
                      {t('card4_desc', currentLang)}
                    </p>
                  </div>
                </div>

                {/* 회사 연혁 (Company History) Section Placement below Company Overview */}
                <div className="pt-4">
                  <CompanyHistory currentLang={currentLang} customLogo={customLogo} />
                </div>
              </div>
            )}

            {/* 2. Organization & CEO View (CEO 인사말 + 조직도) */}
            {(activeSubTab === 'org' || activeSubTab === 'ceo') && (
              <div className="space-y-12 animate-fadeIn max-w-5xl mx-auto">
                {/* CEO 인사말 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm w-full">
                  {/* Top Header Section: Photo + Executive Profile */}
                  <div className="flex flex-col sm:flex-row gap-8 items-start mb-10 pb-8 border-b border-slate-200">
                    {/* Profile Photo */}
                    <div className="w-full sm:w-72 shrink-0 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 flex items-center justify-center p-1">
                      <img
                        src={
                          ceoMessages[0]?.photo && !ceoMessages[0].photo.includes('unsplash')
                            ? ceoMessages[0].photo
                            : 'https://i.imgur.com/JL7fa9f.png'
                        }
                        alt={t('ceo_name', currentLang)}
                        className="w-full h-auto max-h-[480px] object-contain rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://i.imgur.com/JL7fa9f.png';
                        }}
                      />
                    </div>

                    {/* Executive Details */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-slate-600 uppercase">
                          <span>{t('ceo_founder', currentLang)}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-wider mt-1">
                          {t('ceo_name', currentLang)}
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold tracking-widest text-slate-500 uppercase mt-0.5">
                          WON JONG IL
                        </p>
                      </div>

                      {/* Navy Accent Divider Line */}
                      <div className="w-full border-t-2 border-blue-900 my-4"></div>

                      {/* Career Summary */}
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold tracking-widest text-blue-900 uppercase mb-2">
                          {t('ceo_career_title', currentLang)}
                        </h3>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                          <li className="flex items-center gap-2">
                            <span>{t('ceo_career_1', currentLang)}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>{t('ceo_career_2', currentLang)}</span>
                          </li>
                          <li className="flex items-center gap-2 font-bold text-slate-900">
                            <span>{t('ceo_career_3', currentLang)}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Body Section: Statement Header & Letter */}
                  <div className="space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {t('ceo_quote', currentLang)}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {t('ceo_body_1', currentLang)}
                    </p>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {t('ceo_body_2', currentLang)}
                    </p>

                    {/* Underline separator */}
                    <div className="border-b border-slate-300 pt-4"></div>

                    {/* Signature & Stamp Footer */}
                    <div className="flex items-center justify-end gap-3 pt-4 text-xs sm:text-sm text-slate-700">
                      <span className="font-medium tracking-wide">
                        대표이사 · FOUNDER & CEO
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-wider">
                        원 종 일
                      </span>
                      <div className="w-7 h-7 rounded border-2 border-blue-900 text-blue-900 flex items-center justify-center font-bold text-xs select-none shadow-sm">
                        印
                      </div>
                    </div>
                  </div>
                </div>

                {/* 조직도 (Organization Chart) with Section Title */}
                <div className="pt-4">
                  <div className="text-center mb-8">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-100/80 inline-block mb-2 font-mono">
                      ORGANIZATION CHART
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {t('nav_org', currentLang)}
                    </h3>
                  </div>
                  <OrgChart currentLang={currentLang} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };
