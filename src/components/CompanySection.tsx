import React from 'react';
import { Language } from '../types';

interface CompanySectionProps {
  currentLang: Language;
}

export const CompanySection: React.FC<CompanySectionProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* 1. COMPANY INTRO */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#222831] tracking-tight leading-[1.08] font-sans text-heading-balance">
              <span className="block">AN LED MEDIA COMPANY</span>
              <span className="block">EXPANDING GLOBALLY</span>
            </h2>
          </div>

          {/* Right Column (~45% / 5 cols) */}
          <div className="lg:col-span-5 space-y-4 pt-1 lg:pt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight leading-snug text-heading-balance">
              {isKo ? '도시와 공간을 새로운 미디어로 만듭니다.' : 'Transforming Cities & Spaces with Next-Gen Media.'}
            </h3>
            <p className="text-sm sm:text-base text-[#66717C] font-normal leading-[1.75] text-body-pretty">
              {isKo
                ? 'DISE는 2010년 설립 이후 LED 미디어의 기획과 구축, 자체 CMS 기반 통합관제와 운영·유지관리까지 수행해 오며, 기술과 운영 경험을 기반으로 글로벌 시장으로 확장하는 LED 미디어 기업입니다.'
                : 'Since its founding in 2010, DISE is an LED media company expanding globally through accumulated technology and operational experience in planning, installation, CMS integrated control, and maintenance.'}
            </p>
          </div>
        </div>

        {/* REPRESENTATIVE MEDIA IMAGE: Incheon International Airport Media Wall */}
        <div className="mt-8 sm:mt-10 space-y-2">
          <div className="w-full max-w-[1200px] mx-auto overflow-hidden bg-[#F8F9FA] border border-[#D9DEE3]">
            <img
              src="/images/about/company-incheon-media-wall.webp"
              alt="인천국제공항 LED 미디어월 구축 사례"
              loading="lazy"
              className="w-full h-auto object-contain block"
            />
          </div>
          <div className="text-left space-y-0.5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#294A63] block">
              INCHEON INTERNATIONAL AIRPORT
            </span>
            <span className="text-xs font-mono text-[#66717C] block">
              LED Media & Integrated Operation
            </span>
          </div>
        </div>

        {/* Thin Horizontal Divider Below Intro */}
        <div className="border-b border-[#D9DEE3] mt-10 sm:mt-12" />
      </div>

      {/* 2. WHAT WE DO */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63] block">
              WHAT WE DO
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight leading-snug text-heading-balance">
              {isKo ? 'LED 미디어를 구축하는 것에서 끝나지 않습니다.' : 'More Than Just Installing LED Media.'}
            </h3>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 pt-1 lg:pt-7">
            <p className="text-sm sm:text-base text-[#66717C] font-normal leading-[1.75] text-body-pretty">
              {isKo
                ? 'DISE는 공간과 환경을 분석해 LED 미디어를 기획하고, 디스플레이 구축과 콘텐츠 운영 환경을 설계합니다. 구축 이후에는 자체 CMS를 기반으로 다수의 미디어를 통합 관리하고 안정적인 운영을 지원합니다.'
                : 'DISE analyzes architectural spaces to plan LED media environments, design display hardware, and structure content workflows. Post-deployment, our proprietary CMS enables seamless multi-display integrated control and stable operations.'}
            </p>
          </div>
        </div>
      </div>

      {/* 3. END-TO-END CAPABILITY LINE */}
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

      {/* 4. COMPANY PROFILE */}
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
                  (주)다이즈하이미디어
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                <span className="text-xs font-mono font-semibold uppercase text-[#66717C] sm:w-28 shrink-0">
                  영문명
                </span>
                <span className="text-sm sm:text-base font-medium text-[#222831]">
                  Disehimedia Co., Ltd.
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                <span className="text-xs font-mono font-semibold uppercase text-[#66717C] sm:w-28 shrink-0">
                  설립일
                </span>
                <span className="text-sm sm:text-base font-medium text-[#222831]">
                  2010.07.16
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                <span className="text-xs font-mono font-semibold uppercase text-[#66717C] sm:w-28 shrink-0">
                  {isKo ? '대표자' : 'Representatives'}
                </span>
                <span className="text-sm sm:text-base font-medium text-[#222831]">
                  {isKo ? '유정우·원종일(각자대표)' : 'Yoo Jeong Woo · Won Jong Il (Independent Representatives)'}
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
  );
};
