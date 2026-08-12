import React from 'react';
import { Language } from '../../types';

interface AdheatClusterProps {
  currentLang: Language;
}

export interface ClusterNodeData {
  id: string;
  step: string;
  company: string;
  companyEn: string;
  roleKo: string;
  roleEn: string;
  logo: string | null;
}

export const clusterNodes: ClusterNodeData[] = [
  {
    id: 'dise',
    step: '01',
    company: 'DISE HI MEDIA',
    companyEn: 'DISE HI MEDIA',
    roleKo: '매체 기획·구축 및 운영',
    roleEn: 'Media Planning & Operations',
    logo: null,
  },
  {
    id: 'r2v',
    step: '02',
    company: 'R2V',
    companyEn: 'R2V',
    roleKo: '광고 기획 및 영업',
    roleEn: 'Ad Planning & Sales',
    logo: null,
  },
  {
    id: 'bic',
    step: '03',
    company: 'BIC',
    companyEn: 'BIC',
    roleKo: '미디어 설치 및 시공',
    roleEn: 'Installation & Construction',
    logo: null,
  },
  {
    id: 'axis',
    step: '04',
    company: 'AXIS',
    companyEn: 'AXIS',
    roleKo: '광고 콘텐츠 제작',
    roleEn: 'Ad Content Production',
    logo: null,
  },
  {
    id: 'dise-cms',
    step: '05',
    company: 'DISE PREMIUM CMS',
    companyEn: 'DISE PREMIUM CMS',
    roleKo: '콘텐츠 송출 및 통합관제',
    roleEn: 'CMS & Operations',
    logo: null,
  },
];

export const AdheatCluster: React.FC<AdheatClusterProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  return (
    <section className="bg-white border border-[#D9DEE3] rounded-[2px] p-6 sm:p-10 space-y-8 font-sans w-full max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="space-y-2 border-b border-[#D9DEE3] pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#D97706] font-mono">
            CIRCULAR NETWORK
          </span>
          <span className="text-xs font-semibold tracking-wider text-[#294A63] uppercase">
            ADHEAT CIRCULAR CLUSTER
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#18324A] tracking-tight">
          {isKo ? '5개사 순환 클러스터' : '5-Company Circular Cluster'}
        </h3>
        <p className="text-sm text-[#66717C] leading-relaxed">
          {isKo
            ? '매체 운영부터 광고, 시공, 콘텐츠 제작과 CMS 통합운영까지 하나의 순환 체계로 연결합니다.'
            : 'Connecting media operation, advertising, installation, content production, and CMS into a single circular ecosystem.'}
        </p>
      </div>

      {/* Desktop Layout: Single Horizontal Circular Flow (5 Columns) */}
      <div className="hidden md:block space-y-6">
        <div className="grid grid-cols-5 gap-3 lg:gap-4 items-stretch relative">
          {clusterNodes.map((node, index) => (
            <div key={node.id} className="relative h-full flex flex-col">
              {/* Card Container */}
              <div className="bg-[#F8FAFC] border border-[#D9DEE3] rounded-[2px] p-4 lg:p-5 flex flex-col justify-between h-full space-y-4 hover:border-[#294A63] transition-colors">
                
                {/* Header with Step Number & Logo Placeholder */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#D97706] font-mono">
                      {node.step}
                    </span>
                  </div>

                  {/* 1. 로고 자리 */}
                  <div className="w-full h-12 bg-white border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                    {node.logo ? (
                      <img src={node.logo} alt={node.company} className="max-h-full max-w-full object-contain" />
                    ) : (
                      <span className="text-[10px] font-medium text-[#94A3B8] tracking-widest">
                        LOGO
                      </span>
                    )}
                  </div>
                </div>

                {/* Info Text: 2. 회사명, 3. 핵심 역할 한글, 4. 짧은 영문 역할 */}
                <div className="space-y-1.5 flex-1 flex flex-col justify-start">
                  <h4 className="text-sm font-bold text-[#18324A] leading-snug">
                    {node.company}
                  </h4>
                  <p className="text-xs font-semibold text-[#222831]">
                    {isKo ? node.roleKo : node.roleEn}
                  </p>
                  <p className="text-[11px] text-[#66717C] leading-tight">
                    {isKo ? node.roleEn : node.roleKo}
                  </p>
                </div>
              </div>

              {/* Thin connector line with small arrow between cards */}
              {index < clusterNodes.length - 1 && (
                <div className="absolute -right-2.5 lg:-right-3 top-1/2 -translate-y-1/2 z-10 text-[#294A63] bg-white rounded-full p-0.5 border border-[#D9DEE3]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Circular Return Connector (05 -> 01) */}
        <div className="pt-2">
          <div className="w-full bg-[#F8FAFC] border border-dashed border-[#CBD5E1] rounded-[2px] py-2.5 px-4 flex items-center justify-center gap-2 text-xs text-[#66717C]">
            <span className="text-[#D97706] font-bold text-sm">↺</span>
            <span className="font-medium">
              {isKo
                ? '05 DISE PREMIUM CMS에서 01 DISE HI MEDIA로 연결되는 순환 사업 구조'
                : 'Circular loop connecting Node 05 back to Node 01'}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Layout: Vertical Flow (Stacked) */}
      <div className="block md:hidden space-y-3">
        {clusterNodes.map((node, index) => (
          <React.Fragment key={node.id}>
            <div className="bg-[#F8FAFC] border border-[#D9DEE3] rounded-[2px] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#D97706] font-mono">
                  {node.step}
                </span>
              </div>

              {/* 1. 로고 자리 */}
              <div className="w-full h-12 bg-white border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                {node.logo ? (
                  <img src={node.logo} alt={node.company} className="max-h-full max-w-full object-contain" />
                ) : (
                  <span className="text-[10px] font-medium text-[#94A3B8] tracking-widest">
                    LOGO
                  </span>
                )}
              </div>

              {/* 2. 회사명, 3. 핵심 역할 한글, 4. 짧은 영문 역할 */}
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#18324A]">
                  {node.company}
                </h4>
                <p className="text-xs font-semibold text-[#222831]">
                  {isKo ? node.roleKo : node.roleEn}
                </p>
                <p className="text-[11px] text-[#66717C]">
                  {isKo ? node.roleEn : node.roleKo}
                </p>
              </div>
            </div>

            {/* Vertical connector arrow */}
            {index < clusterNodes.length - 1 && (
              <div className="flex justify-center text-[#294A63] py-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Mobile Return Connector */}
        <div className="pt-2">
          <div className="w-full bg-[#F8FAFC] border border-dashed border-[#CBD5E1] rounded-[2px] py-2.5 px-4 flex items-center justify-center gap-2 text-xs text-[#66717C] text-center">
            <span className="text-[#D97706] font-bold text-sm">↺</span>
            <span className="font-medium">
              {isKo
                ? '05 → 01 순환 연결 체계'
                : 'Node 05 → Node 01 Circular Loop'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
