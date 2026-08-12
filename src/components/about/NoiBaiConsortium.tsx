import React from 'react';
import { Language } from '../../types';

interface NoiBaiConsortiumProps {
  currentLang: Language;
}

export interface ConsortiumCompany {
  num: string;
  nameEn: string;
  nameKo: string;
  roleKo: string;
  roleEn: string;
  logo: string | null;
}

export const consortiumCompanies: ConsortiumCompany[] = [
  {
    num: '01',
    nameEn: 'DISE HI MEDIA',
    nameKo: '다이즈하이미디어',
    roleKo: '운영·매체',
    roleEn: 'MEDIA OPERATION',
    logo: '/images/brand/dise-logo.png',
  },
  {
    num: '02',
    nameEn: 'BIC',
    nameKo: '비아이씨',
    roleKo: '시공·설치',
    roleEn: 'INSTALLATION',
    logo: null,
  },
  {
    num: '03',
    nameEn: 'R2V',
    nameKo: '알투뷔',
    roleKo: '광고대행·영업',
    roleEn: 'ADVERTISING & SALES',
    logo: null,
  },
  {
    num: '04',
    nameEn: 'AXIS',
    nameKo: '액시스',
    roleKo: '광고 콘텐츠·K뷰티',
    roleEn: 'AD CONTENT & K-BEAUTY',
    logo: null,
  },
];

export const NoiBaiConsortium: React.FC<NoiBaiConsortiumProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  return (
    <section className="bg-white border border-[#D9DEE3] rounded-[2px] p-6 sm:p-10 space-y-6 font-sans w-full max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="space-y-3 border-b border-[#D9DEE3] pb-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#D97706] font-mono">
            GLOBAL BUSINESS NETWORK
          </span>
          <span className="text-xs font-semibold tracking-wider text-[#294A63] uppercase font-mono">
            FOUR-COMPANY GLOBAL BUSINESS COLLABORATION
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#18324A] tracking-tight">
          {isKo ? '글로벌 사업 4개사 협력 구조' : 'Four-Company Global Business Collaboration'}
        </h3>
        <div className="space-y-1 text-sm text-[#66717C] leading-relaxed max-w-4xl">
          <p>
            {isKo
              ? 'DISE는 글로벌 LED 미디어 사업 추진 과정에서 각 분야의 전문기업과 협력하여 매체 운영, 시공·설치, 광고 영업과 콘텐츠 영역을 연결합니다.'
              : 'In executing global LED media business, DISE connects specialized key capabilities across media operation, installation, advertising sales, and content.'}
          </p>
          <p className="text-xs text-[#294A63] font-medium pt-0.5">
            {isKo
              ? '※ 노이바이공항 LED 사업을 포함한 글로벌 프로젝트를 중심으로 각 회사의 전문역량을 연계하는 업무 협력 구조입니다.'
              : '※ A business collaboration framework linking specialized capabilities of each firm across global projects including the Noi Bai Airport LED project.'}
          </p>
        </div>
      </div>

      {/* Desktop Layout (Secondary Diagram: Center Hub + 4 Partners) */}
      <div className="hidden md:block">
        <div className="bg-[#F8FAFC] border border-[#D9DEE3] rounded-[2px] p-5 lg:p-6">
          <div className="grid grid-cols-12 gap-4 items-center relative">
            
            {/* Left Column: 01 DISE HI MEDIA & 03 R2V */}
            <div className="col-span-4 space-y-4">
              {/* Card 01: DISE HI MEDIA */}
              <div className="bg-white border border-[#D9DEE3] hover:border-[#294A63] rounded-[2px] p-4 space-y-2.5 transition-colors shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706]">
                    {consortiumCompanies[0].num}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    PARTNER 01
                  </span>
                </div>

                <div className="w-full h-11 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  <img
                    src={consortiumCompanies[0].logo!}
                    alt={consortiumCompanies[0].nameEn}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {consortiumCompanies[0].nameEn}
                  </div>
                  <h4 className="text-sm font-bold text-[#18324A]">
                    {consortiumCompanies[0].nameKo}
                  </h4>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1E293B]">
                    {consortiumCompanies[0].roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {consortiumCompanies[0].roleEn}
                  </span>
                </div>
              </div>

              {/* Card 03: R2V */}
              <div className="bg-white border border-[#D9DEE3] hover:border-[#294A63] rounded-[2px] p-4 space-y-2.5 transition-colors shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706]">
                    {consortiumCompanies[2].num}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    PARTNER 03
                  </span>
                </div>

                <div className="w-full h-11 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  <span className="text-sm font-bold font-mono tracking-widest text-[#18324A]">
                    {consortiumCompanies[2].nameEn}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {consortiumCompanies[2].nameEn}
                  </div>
                  <h4 className="text-sm font-bold text-[#18324A]">
                    {consortiumCompanies[2].nameKo}
                  </h4>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1E293B]">
                    {consortiumCompanies[2].roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {consortiumCompanies[2].roleEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Center Column: Global LED Media Business Hub */}
            <div className="col-span-4 flex flex-col items-center justify-center p-2 relative">
              {/* Connector lines behind hub */}
              <div aria-hidden="true" className="absolute inset-0 flex items-center justify-between pointer-events-none px-1">
                <div className="w-full border-t border-dashed border-[#294A63]/30" />
              </div>

              <div className="relative z-10 w-full bg-[#18324A] text-white p-5 border-2 border-[#294A63] text-center space-y-2 rounded-[2px] shadow-sm">
                <span className="text-[10px] font-mono tracking-widest text-[#D0BE7D] uppercase font-bold block">
                  GLOBAL LED MEDIA BUSINESS
                </span>
                <h4 className="text-base lg:text-lg font-bold tracking-tight text-white leading-snug">
                  {isKo ? '글로벌 LED 미디어 사업' : 'Global LED Media Business'}
                </h4>
                <span className="inline-block bg-[#294A63] text-slate-200 text-[9px] font-mono font-semibold px-2.5 py-0.5 rounded-[2px] uppercase tracking-wider">
                  COLLABORATION NETWORK
                </span>
              </div>
            </div>

            {/* Right Column: 02 BIC & 04 AXIS */}
            <div className="col-span-4 space-y-4">
              {/* Card 02: BIC */}
              <div className="bg-white border border-[#D9DEE3] hover:border-[#294A63] rounded-[2px] p-4 space-y-2.5 transition-colors shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706]">
                    {consortiumCompanies[1].num}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    PARTNER 02
                  </span>
                </div>

                <div className="w-full h-11 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  <span className="text-sm font-bold font-mono tracking-widest text-[#18324A]">
                    {consortiumCompanies[1].nameEn}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {consortiumCompanies[1].nameEn}
                  </div>
                  <h4 className="text-sm font-bold text-[#18324A]">
                    {consortiumCompanies[1].nameKo}
                  </h4>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1E293B]">
                    {consortiumCompanies[1].roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {consortiumCompanies[1].roleEn}
                  </span>
                </div>
              </div>

              {/* Card 04: AXIS */}
              <div className="bg-white border border-[#D9DEE3] hover:border-[#294A63] rounded-[2px] p-4 space-y-2.5 transition-colors shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706]">
                    {consortiumCompanies[3].num}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    PARTNER 04
                  </span>
                </div>

                <div className="w-full h-11 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  <span className="text-sm font-bold font-mono tracking-widest text-[#18324A]">
                    {consortiumCompanies[3].nameEn}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {consortiumCompanies[3].nameEn}
                  </div>
                  <h4 className="text-sm font-bold text-[#18324A]">
                    {consortiumCompanies[3].nameKo}
                  </h4>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1E293B]">
                    {consortiumCompanies[3].roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {consortiumCompanies[3].roleEn}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Layout (Stacked Vertical Flow) */}
      <div className="block md:hidden space-y-4">
        {/* Center Node First */}
        <div className="bg-[#18324A] text-white p-4 border-2 border-[#294A63] text-center space-y-2 rounded-[2px]">
          <span className="text-[10px] font-mono tracking-widest text-[#D0BE7D] uppercase font-bold block">
            GLOBAL LED MEDIA BUSINESS
          </span>
          <h4 className="text-base font-bold tracking-tight text-white">
            {isKo ? '글로벌 LED 미디어 사업' : 'Global LED Media Business'}
          </h4>
          <span className="inline-block bg-[#294A63] text-slate-200 text-[9px] font-mono font-semibold px-2 py-0.5 rounded-[2px] uppercase tracking-wider">
            COLLABORATION NETWORK
          </span>
        </div>

        {/* Vertical Divider Line */}
        <div aria-hidden="true" className="flex justify-center">
          <div className="w-[1px] h-4 bg-[#294A63]/40" />
        </div>

        {/* 4 Company Cards Stacked */}
        <div className="space-y-3">
          {consortiumCompanies.map((comp, idx) => (
            <React.Fragment key={comp.num}>
              <div className="bg-[#F8FAFC] border border-[#D9DEE3] rounded-[2px] p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706]">
                    {comp.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    PARTNER {comp.num}
                  </span>
                </div>

                <div className="w-full h-11 bg-white border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  {comp.logo ? (
                    <img
                      src={comp.logo}
                      alt={comp.nameEn}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-sm font-bold font-mono tracking-widest text-[#18324A]">
                      {comp.nameEn}
                    </span>
                  )}
                </div>

                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {comp.nameEn}
                  </div>
                  <h4 className="text-base font-bold text-[#18324A]">
                    {comp.nameKo}
                  </h4>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#1E293B]">
                    {comp.roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {comp.roleEn}
                  </span>
                </div>
              </div>

              {/* Vertical connector line between cards */}
              {idx < consortiumCompanies.length - 1 && (
                <div aria-hidden="true" className="flex justify-center py-0.5">
                  <div className="w-[1px] h-3 bg-[#D9DEE3]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
