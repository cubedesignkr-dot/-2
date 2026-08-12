import React from 'react';
import { Language } from '../types';
import { AdheatCluster } from './about/AdheatCluster';
import { NoiBaiConsortium } from './about/NoiBaiConsortium';

interface OrgSectionProps {
  currentLang: Language;
}

export const OrgSection: React.FC<OrgSectionProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  return (
    <div className="space-y-16 sm:space-y-20 text-[#222831]">
      {/* 1. ORGANIZATION INTRO */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#D9DEE3]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#294A63]">04</span>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63]">
              ORGANIZATION
            </span>
          </div>
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#66717C]">
            ONE SYSTEM, CONNECTED EXPERTISE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-2">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#222831] tracking-tight leading-[1.25] font-sans">
              {isKo ? (
                <>
                  전문 조직과 관계사 네트워크가<br />
                  하나의 미디어 사업을 완성합니다.
                </>
              ) : (
                'Specialized teams and affiliate networks completing one integrated media ecosystem.'
              )}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm sm:text-base text-[#66717C] font-normal leading-[1.8] font-sans">
              {isKo
                ? 'DISE는 기술 개발과 미디어 구축, 운영 및 사업 관리를 전문 기능별 조직으로 수행합니다. 각 분야의 관계사와 협력하여 LED 미디어의 구축부터 광고와 콘텐츠 운영까지 연결된 사업 체계를 제공합니다.'
                : 'DISE operates specialized functional units covering technology development, media construction, operation, and management. In partnership with domain affiliates, we deliver a connected business framework from LED installation to ad and content deployment.'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. PUBLIC ORGANIZATION STRUCTURE */}
      <div className="space-y-6 pt-4">
        <div className="text-xs font-mono font-semibold text-[#294A63] uppercase tracking-widest">
          {isKo ? '다이즈하이미디어 본사 조직 체계' : 'CORPORATE ORGANIZATIONAL HIERARCHY'}
        </div>

        {/* Tree Container */}
        <div className="bg-[#F8F9FA] border border-[#D9DEE3] rounded-[2px] p-6 sm:p-10 space-y-8">
          {/* Top: Representative / CEO */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-white border-2 border-[#294A63] px-6 py-3.5 rounded-[2px] min-w-[220px] shadow-xs space-y-1">
              <span className="text-[11px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                {isKo ? '대표이사' : 'CHIEF EXECUTIVE OFFICER'}
              </span>
              <p className="text-lg font-bold text-[#222831] tracking-tight">
                {isKo ? '유정우' : 'YOO JEONG WOO'}
              </p>
              <p className="text-[11px] font-mono text-[#66717C]">
                CEO · DISE HI MEDIA
              </p>
            </div>

            {/* Vertical Line from CEO */}
            <div className="w-[1px] h-8 bg-[#294A63] my-1" />
          </div>

          {/* Functional Teams (Horizontal Connector on Desktop, Stacked on Mobile) */}
          <div className="relative">
            {/* Desktop Horizontal Line connecting 4 columns */}
            <div className="hidden md:block absolute top-0 left-[12.5%] right-[12.5%] h-[1px] bg-[#294A63]" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 pt-0 md:pt-6">
              {/* Team 01: Development */}
              <div className="relative flex flex-col items-center">
                <div className="hidden md:block absolute -top-6 w-[1px] h-6 bg-[#294A63]" />
                <div className="w-full bg-white border border-[#D9DEE3] p-4 sm:p-5 rounded-[2px] text-center space-y-2 h-full">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] tracking-wider uppercase block">
                      DEV TEAM
                    </span>
                    <h4 className="text-base font-bold text-[#222831]">
                      {isKo ? '개발팀' : 'Development Team'}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66717C] font-normal leading-relaxed">
                    {isKo ? 'CMS·통합관제 시스템 및 미디어 기술 개발' : 'CMS, Control System & Media Tech R&D'}
                  </p>
                </div>
              </div>

              {/* Team 02: Construction */}
              <div className="relative flex flex-col items-center">
                <div className="hidden md:block absolute -top-6 w-[1px] h-6 bg-[#294A63]" />
                <div className="w-full bg-white border border-[#D9DEE3] p-4 sm:p-5 rounded-[2px] text-center space-y-2 h-full">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] tracking-wider uppercase block">
                      CONSTRUCTION
                    </span>
                    <h4 className="text-base font-bold text-[#222831]">
                      {isKo ? '시공팀' : 'Construction Team'}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66717C] font-normal leading-relaxed">
                    {isKo ? 'LED 미디어 구축·현장 품질 및 유지관리' : 'LED Installation, Field Quality & Maintenance'}
                  </p>
                </div>
              </div>

              {/* Team 03: Finance */}
              <div className="relative flex flex-col items-center">
                <div className="hidden md:block absolute -top-6 w-[1px] h-6 bg-[#294A63]" />
                <div className="w-full bg-white border border-[#D9DEE3] p-4 sm:p-5 rounded-[2px] text-center space-y-2 h-full">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] tracking-wider uppercase block">
                      FINANCE
                    </span>
                    <h4 className="text-base font-bold text-[#222831]">
                      {isKo ? '재무팀' : 'Finance Team'}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66717C] font-normal leading-relaxed">
                    {isKo ? '경영관리·재무 및 사업 운영 지원' : 'Corporate Management, Finance & Ops Support'}
                  </p>
                </div>
              </div>

              {/* Team 04: Sales */}
              <div className="relative flex flex-col items-center">
                <div className="hidden md:block absolute -top-6 w-[1px] h-6 bg-[#294A63]" />
                <div className="w-full bg-white border border-[#D9DEE3] p-4 sm:p-5 rounded-[2px] text-center space-y-2 h-full">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] tracking-wider uppercase block">
                      SALES
                    </span>
                    <h4 className="text-base font-bold text-[#222831]">
                      {isKo ? '영업팀' : 'Sales Team'}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66717C] font-normal leading-relaxed">
                    {isKo ? '국내외 프로젝트 개발 및 고객·파트너 협력' : 'Domestic/Global Projects & Partner Relations'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ADHEAT CIRCULAR CLUSTER */}
      <AdheatCluster currentLang={currentLang} />

      {/* 3. GLOBAL BUSINESS CONSORTIUM */}
      <NoiBaiConsortium currentLang={currentLang} />
    </div>
  );
};
