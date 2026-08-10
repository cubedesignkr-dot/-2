import React, { useState, useEffect } from 'react';
import { Language, CeoMessage, OrgDepartment, AmsitTech, BusinessPillar } from '../types';
import { CompanyHistory } from './CompanyHistory';
import { OrgChart } from './OrgChart';
import heroLedGlassBg from '../assets/images/hero_led_glass_bg_1786019620069.jpg';
import { t } from '../utils/translations';

export type AboutSubTab = 'overview' | 'history' | 'ceo' | 'org';

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

  const handleNavClick = (tab: AboutSubTab, sectionId: string) => {
    setActiveSubTab(tab);
    if (onSelectSubTab) {
      onSelectSubTab(tab);
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-10 sm:py-16 bg-white text-[#222831] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* COMPACT ANCHOR NAVIGATION */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-[#D9DEE3] mb-10 sm:mb-14">
          <nav className="flex items-center gap-8 overflow-x-auto py-3.5 scrollbar-none">
            <a
              href="#company"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('overview', 'company');
              }}
              className={`text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider transition-colors pb-1 border-b-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'overview'
                  ? 'text-[#222831] border-[#294A63]'
                  : 'text-[#66717C] border-transparent hover:text-[#222831]'
              }`}
            >
              COMPANY
            </a>
            <a
              href="#history"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('history', 'history');
              }}
              className={`text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider transition-colors pb-1 border-b-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'history'
                  ? 'text-[#222831] border-[#294A63]'
                  : 'text-[#66717C] border-transparent hover:text-[#222831]'
              }`}
            >
              HISTORY
            </a>
            <a
              href="#ceo"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('ceo', 'ceo');
              }}
              className={`text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider transition-colors pb-1 border-b-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'ceo'
                  ? 'text-[#222831] border-[#294A63]'
                  : 'text-[#66717C] border-transparent hover:text-[#222831]'
              }`}
            >
              CEO MESSAGE
            </a>
            <a
              href="#org"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('org', 'org');
              }}
              className={`text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider transition-colors pb-1 border-b-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'org'
                  ? 'text-[#222831] border-[#294A63]'
                  : 'text-[#66717C] border-transparent hover:text-[#222831]'
              }`}
            >
              ORGANIZATION
            </a>
          </nav>
        </div>

        {/* MAIN CONTENT AREA - SEQUENTIAL ANCHOR SECTIONS */}
        <div className="w-full space-y-24 sm:space-y-32">

          {/* 1. COMPANY SECTION */}
          <div id="company" className="space-y-16 sm:space-y-20 scroll-mt-28">
            
            {/* 1.1 COMPANY INTRO */}
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column (~55% / 7 cols) */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#294A63]">01</span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63]">
                      COMPANY
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#222831] tracking-tight leading-[1.08] font-sans">
                    A GLOBAL LED<br />
                    MEDIA COMPANY
                  </h2>
                </div>

                {/* Right Column (~45% / 5 cols) */}
                <div className="lg:col-span-5 space-y-4 pt-1 lg:pt-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight leading-snug">
                    도시와 공간을 새로운 미디어로 만듭니다.
                  </h3>
                  <p className="text-sm sm:text-base text-[#66717C] font-normal leading-[1.75]">
                    DISE는 2010년 설립 이후 LED 미디어의 기획과 구축, 자체 CMS 기반 통합관제와 운영·유지관리까지 수행해 온 글로벌 LED 미디어 전문기업입니다.
                  </p>
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-b border-[#D9DEE3] mt-10 sm:mt-12" />
            </div>

            {/* 1.2 REPRESENTATIVE PROJECT IMAGE */}
            <div className="space-y-3">
              <div className="overflow-hidden bg-[#F5F6F7] border border-[#D9DEE3] rounded-[2px] w-full aspect-[16/8] sm:aspect-[16/7]">
                <img
                  src={heroLedGlassBg}
                  alt="Incheon International Airport LED Media Project"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-xs font-mono font-semibold text-[#294A63] uppercase tracking-wider">
                  INCHEON INTERNATIONAL AIRPORT
                </span>
                <span className="text-xs text-[#66717C] font-normal">
                  Integrated LED Media &amp; CMS Operation
                </span>
              </div>
            </div>

            {/* 1.3 WHAT WE DO */}
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column */}
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63] block">
                    WHAT WE DO
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight leading-snug">
                    LED 미디어를 구축하는 것에서 끝나지 않습니다.
                  </h3>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-7 pt-1 lg:pt-7">
                  <p className="text-sm sm:text-base text-[#66717C] font-normal leading-[1.75]">
                    DISE는 공간과 환경을 분석해 LED 미디어를 기획하고, 디스플레이 구축과 콘텐츠 운영 환경을 설계합니다. 구축 이후에는 자체 CMS를 기반으로 다수의 미디어를 통합 관리하고 안정적인 운영을 지원합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 1.4 END-TO-END CAPABILITY LINE */}
            <div className="pt-2">
              <div className="border-t border-[#D9DEE3] pt-10 sm:pt-12 space-y-8">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63] block">
                  END-TO-END CAPABILITY
                </span>

                <div className="relative">
                  {/* Desktop Thin Horizontal Line */}
                  <div className="hidden md:block absolute top-[18px] left-6 right-6 h-[1px] bg-[#D9DEE3] z-0" />

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 relative z-10">
                    {[
                      { num: '01', en: 'PLANNING', ko: '기획' },
                      { num: '02', en: 'BUILD', ko: '구축' },
                      { num: '03', en: 'CMS', ko: '콘텐츠 관리' },
                      { num: '04', en: 'CONTROL', ko: '통합관제' },
                      { num: '05', en: 'OPERATION', ko: '운영·유지관리' },
                    ].map((stage) => (
                      <div
                        key={stage.num}
                        className="relative flex flex-col items-start space-y-1 pl-6 md:pl-0 border-l border-[#D9DEE3] md:border-l-0 py-1 md:py-0"
                      >
                        {/* Desktop Node Dot */}
                        <div className="hidden md:flex items-center justify-center w-2.5 h-2.5 rounded-full bg-[#294A63] border-2 border-white ring-1 ring-[#D9DEE3] mb-3 -mt-1" />

                        {/* Mobile Node Dot */}
                        <div className="md:hidden absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#294A63] border-2 border-white ring-1 ring-[#D9DEE3]" />

                        <span className="text-xs font-mono font-semibold text-[#294A63]">
                          {stage.num}
                        </span>
                        <h4 className="text-sm font-bold text-[#222831] font-sans tracking-wide">
                          {stage.en}
                        </h4>
                        <p className="text-xs font-medium text-[#66717C]">
                          {stage.ko}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 1.5 COMPANY PROFILE */}
            <div className="pt-2">
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight">
                  COMPANY PROFILE
                </h3>

                {/* Ruled Editorial List / Table */}
                <div className="border-t border-b border-[#D9DEE3] divide-y divide-[#D9DEE3]">
                  {/* Row 1 */}
                  <div className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                      <span className="text-xs font-mono font-semibold uppercase text-[#66717C] sm:w-28 shrink-0">
                        회사명
                      </span>
                      <span className="text-sm sm:text-base font-medium text-[#222831]">
                        다이즈하이미디어
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                      <span className="text-xs font-mono font-semibold uppercase text-[#66717C] sm:w-28 shrink-0">
                        영문명
                      </span>
                      <span className="text-sm sm:text-base font-medium text-[#222831]">
                        DISE HIGH MEDIA
                      </span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                      <span className="text-xs font-mono font-semibold uppercase text-[#66717C] sm:w-28 shrink-0">
                        설립
                      </span>
                      <span className="text-sm sm:text-base font-medium text-[#222831]">
                        2010
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                      <span className="text-xs font-mono font-semibold uppercase text-[#66717C] sm:w-28 shrink-0">
                        대표이사
                      </span>
                      <span className="text-sm sm:text-base font-medium text-[#222831]">
                        유정우
                      </span>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                      <span className="text-xs font-mono font-semibold uppercase text-[#66717C] sm:w-28 shrink-0 pt-0.5">
                        주요 사업
                      </span>
                      <span className="text-sm sm:text-base font-medium text-[#222831] leading-relaxed">
                        LED 미디어 기획·구축<br className="hidden sm:inline" />
                        자체 CMS·통합관제<br className="hidden sm:inline" />
                        운영·유지관리
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                      <span className="text-xs font-mono font-semibold uppercase text-[#66717C] sm:w-28 shrink-0 pt-0.5">
                        사업 범위
                      </span>
                      <span className="text-sm sm:text-base font-medium text-[#222831]">
                        국내 및 해외
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 2. HISTORY SECTION (Directly below COMPANY PROFILE) */}
          <CompanyHistory currentLang={currentLang} customLogo={customLogo} />

          {/* 3. CEO MESSAGE SECTION */}
          <div id="ceo" className="max-w-5xl mx-auto scroll-mt-28 border-t border-[#D9DEE3] pt-16">
            <div className="bg-white border border-[#D9DEE3] rounded-[2px] p-6 sm:p-10 shadow-xs w-full">
              {/* Executive Profile Header */}
              <div className="flex flex-col sm:flex-row gap-8 items-start mb-10 pb-8 border-b border-[#D9DEE3]">
                <div className="w-full sm:w-72 shrink-0 rounded-[2px] overflow-hidden border border-[#D9DEE3] bg-[#F5F6F7] flex items-center justify-center p-1">
                  <img
                    src={
                      ceoMessages[0]?.photo && !ceoMessages[0].photo.includes('unsplash')
                        ? ceoMessages[0].photo
                        : 'https://i.imgur.com/JL7fa9f.png'
                    }
                    alt={t('ceo_name', currentLang)}
                    className="w-full h-auto max-h-[480px] object-contain rounded-[2px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.imgur.com/JL7fa9f.png';
                    }}
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#66717C] uppercase font-mono">
                      <span>{t('ceo_founder', currentLang)}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#222831] tracking-wider mt-1">
                      {t('ceo_name', currentLang)}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#66717C] uppercase mt-0.5 font-mono">
                      JOUNG WOO YU
                    </p>
                  </div>

                  <div className="w-full border-t border-[#294A63] my-4" />

                  <div>
                    <h3 className="text-xs sm:text-sm font-bold tracking-widest text-[#294A63] uppercase mb-2 font-mono">
                      {t('ceo_career_title', currentLang)}
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#222831]">
                      <li className="flex items-center gap-2">
                        <span>{t('ceo_career_1', currentLang)}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>{t('ceo_career_2', currentLang)}</span>
                      </li>
                      <li className="flex items-center gap-2 font-bold text-[#222831]">
                        <span>{t('ceo_career_3', currentLang)}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CEO Letter Body */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight">
                  {t('ceo_quote', currentLang)}
                </h3>

                <p className="text-sm sm:text-base text-[#66717C] leading-relaxed">
                  {t('ceo_body_1', currentLang)}
                </p>

                <p className="text-sm sm:text-base text-[#66717C] leading-relaxed">
                  {t('ceo_body_2', currentLang)}
                </p>

                <div className="border-b border-[#D9DEE3] pt-4" />

                <div className="flex items-center justify-end gap-3 pt-4 text-xs sm:text-sm text-[#66717C]">
                  <span className="font-medium tracking-wide">
                    대표이사 · FOUNDER &amp; CEO
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-[#222831] tracking-wider">
                    유 정 우
                  </span>
                  <div className="w-7 h-7 rounded-[2px] border border-[#294A63] text-[#294A63] flex items-center justify-center font-bold text-xs select-none">
                    印
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. ORGANIZATION CHART SECTION */}
          <div id="org" className="scroll-mt-28 border-t border-[#D9DEE3] pt-16">
            <div className="text-center mb-8">
              <span className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-widest bg-[#F5F6F7] px-3.5 py-1.5 rounded-[2px] border border-[#D9DEE3] inline-block mb-2">
                ORGANIZATION CHART
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#222831] tracking-tight">
                {t('nav_org', currentLang)}
              </h3>
            </div>
            <OrgChart currentLang={currentLang} />
          </div>

        </div>
      </div>
    </section>
  );
};
