import React from 'react';
import { Language } from '../../types';

interface AdheatClusterProps {
  currentLang: Language;
}

export interface ClusterNodeData {
  step: string;
  companyEn: string;
  companyKo: string;
  roleKo: string;
  logo: string | null;
}

export const clusterNodes: ClusterNodeData[] = [
  {
    step: '01',
    companyEn: 'DISE HI MEDIA',
    companyKo: '다이즈하이미디어',
    roleKo: '매체 기획·구축 및 운영',
    logo: '/images/partners/logo-dise-hi-media.svg',
  },
  {
    step: '02',
    companyEn: 'R2V',
    companyKo: '알투뷔',
    roleKo: '광고 기획 및 영업',
    logo: '/images/partners/logo-r2v.svg',
  },
  {
    step: '03',
    companyEn: 'BIC',
    companyKo: '비아이씨',
    roleKo: '미디어 설치 및 시공',
    logo: '/images/partners/logo-bic.svg',
  },
  {
    step: '04',
    companyEn: 'AXIS',
    companyKo: '액시스',
    roleKo: '광고 콘텐츠 제작',
    logo: '/images/partners/logo-axis.svg',
  },
  {
    step: '05',
    companyEn: 'DISE PREMIUM CMS',
    companyKo: '다이즈 프리미엄 CMS',
    roleKo: '콘텐츠 송출 및 통합관제',
    logo: null, // DISE HI MEDIA 로고 대신 워드마크 사용
  },
];

export const AdheatCluster: React.FC<AdheatClusterProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  const renderLogo = (companyEn: string, logoPath: string | null) => {
    if (!logoPath) {
      return (
        <div className="flex flex-col items-center justify-center text-center py-1">
          <span className="text-xs sm:text-sm font-bold font-mono tracking-wider text-[#18324A] block">
            DISE PREMIUM
          </span>
          <span className="text-[11px] font-mono font-bold text-[#D97706] tracking-widest block mt-0.5 uppercase">
            CMS
          </span>
        </div>
      );
    }

    let imgClasses = "max-w-[120px] sm:max-w-[130px] lg:max-w-[150px] w-auto object-contain object-center";
    let style: React.CSSProperties = {};

    switch (companyEn) {
      case 'DISE HI MEDIA':
        imgClasses += " max-h-[44px] sm:max-h-[50px] lg:max-h-[54px]";
        break;
      case 'R2V':
        imgClasses += " max-h-[46px] sm:max-h-[52px] lg:max-h-[56px]";
        break;
      case 'BIC':
        imgClasses += " max-h-[46px] sm:max-h-[52px] lg:max-h-[56px]";
        break;
      case 'AXIS':
        imgClasses += " max-h-[48px] sm:max-h-[54px] lg:max-h-[58px]";
        style = { transform: 'scale(1.3)', transformOrigin: 'center' };
        break;
      default:
        imgClasses += " max-h-[44px] sm:max-h-[50px] lg:max-h-[54px]";
        break;
    }

    return (
      <img
        src={logoPath}
        alt={companyEn}
        className={imgClasses}
        style={style}
      />
    );
  };

  return (
    <section className="bg-white border border-[#E2E8F0] rounded-[2px] p-5 sm:p-7 space-y-6 font-sans w-full max-w-[1200px] mx-auto">
      {/* 1. Section Header (Left Aligned) */}
      <div className="space-y-1.5 border-b border-[#E2E8F0] pb-3.5 text-left">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#D97706] font-mono tracking-wider">
            CIRCULAR BUSINESS SYSTEM
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#18324A] tracking-tight">
          {isKo ? '5개사 순환 클러스터' : '5-Company Circular Cluster'}
        </h3>
        <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed max-w-3xl">
          {isKo
            ? '매체 기획부터 광고 영업, 시공, 콘텐츠 제작과 CMS 통합운영까지 5개 전문영역을 하나의 운영 체계로 연결합니다.'
            : 'Connecting 5 specialized business areas—from media planning to ad sales, installation, content creation, and CMS operation—into a unified operating system.'}
        </p>
      </div>

      {/* 2. ADHEAT Overview Header Area (Left Aligned) */}
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-3.5 sm:p-4 rounded-[2px] text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6">
          {/* Left: ADHEAT Name & Titles Hierarchy */}
          <div className="space-y-0.5 shrink-0">
            <div className="text-[11px] font-mono font-bold text-[#D97706] tracking-wider uppercase">
              ADHEAT
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#18324A] tracking-tight">
              {isKo ? '통합 미디어 운영 체계' : 'Integrated Media Operation System'}
            </h4>
            <div className="text-[10px] font-mono text-[#64748B] tracking-wider uppercase">
              INTEGRATED MEDIA OPERATION SYSTEM
            </div>
          </div>

          {/* Right: Functional Description & Keyword Line */}
          <div className="space-y-1 md:text-right md:max-w-lg">
            <p className="text-xs text-[#475569] leading-relaxed">
              {isKo
                ? '5개사의 매체 기획, 광고 영업, 시공, 콘텐츠 제작과 CMS 운영 정보를 연결하는 통합관제 체계입니다.'
                : 'A unified control system linking planning, ad sales, installation, content creation, and CMS operations.'}
            </p>
            <div className="text-[11px] font-semibold text-[#18324A] tracking-wide">
              {isKo
                ? '업무 연계 · 통합관제 · 운영 관리'
                : 'Operations Linkage · Integrated Control · Management'}
            </div>
          </div>
        </div>
      </div>

      {/* 3. 5-Step Process Flow (Desktop: 5 Columns / Mobile: 1 Column Stack) */}
      <div className="py-2">
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
          {clusterNodes.map((item, idx) => (
            <div
              key={item.step}
              className={`relative py-4 md:py-1 ${
                idx === 0
                  ? 'md:pl-0 md:pr-3'
                  : idx === clusterNodes.length - 1
                  ? 'md:pl-3 md:pr-0'
                  : 'md:px-3'
              } flex flex-col items-center text-center justify-between h-full`}
            >
              {/* Horizontal Arrow on Desktop (Center aligned vertically) */}
              {idx < clusterNodes.length - 1 && (
                <div
                  className="hidden md:flex absolute -right-2.5 top-[38%] -translate-y-1/2 text-xs font-mono font-bold text-[#D97706] z-10 bg-white px-0.5 select-none"
                  aria-hidden="true"
                >
                  →
                </div>
              )}

              {/* Top & Middle Content Container */}
              <div className="w-full flex flex-col items-center space-y-2.5">
                {/* 1. Step Number */}
                <span className="text-xs font-mono font-extrabold text-[#D97706] tracking-wider block text-center">
                  {item.step}
                </span>

                {/* 2. Logo Area */}
                <div className="w-full max-w-[140px] sm:max-w-[150px] lg:max-w-[170px] h-[68px] sm:h-[74px] lg:h-[80px] flex items-center justify-center overflow-visible my-1">
                  {renderLogo(item.companyEn, item.logo)}
                </div>

                {/* 3. Company Name */}
                <div className="w-full text-center">
                  <h5 className="text-xs sm:text-sm font-bold text-[#18324A] tracking-tight leading-snug">
                    {item.companyKo}
                  </h5>
                </div>
              </div>

              {/* Down Arrow on Mobile */}
              {idx < clusterNodes.length - 1 && (
                <div className="md:hidden my-2 text-xs font-mono font-bold text-[#D97706]" aria-hidden="true">
                  ↓
                </div>
              )}

              {/* 4. Thin Divider & 5. Core Role */}
              <div className="w-full pt-2.5 mt-2.5 border-t border-[#F1F5F9] text-center">
                <p className="text-xs font-medium text-[#475569] leading-relaxed line-clamp-2">
                  {item.roleKo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Cycle Indicator (Left Aligned) */}
      <div className="pt-3 border-t border-[#E2E8F0] space-y-0.5 text-xs text-[#64748B] text-left">
        <div className="flex items-center gap-1.5 text-[#18324A] font-medium flex-wrap">
          <span className="text-[#D97706] font-bold font-mono">05 → 01</span>
          <span>
            {isKo
              ? 'CMS 통합운영 결과는 다음 매체 기획과 운영으로 다시 연결됩니다.'
              : 'CMS operation results directly inform the next media planning cycle.'}
          </span>
        </div>
        <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider">
          CONTINUOUS OPERATION CYCLE
        </div>
      </div>
    </section>
  );
};

