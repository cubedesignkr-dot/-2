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
  logo: string | null;
}

export const consortiumCompanies: ConsortiumCompany[] = [
  {
    num: '01',
    nameEn: 'DISE HI MEDIA',
    nameKo: '다이즈하이미디어',
    roleKo: '운영·매체',
    logo: '/images/partners/logo-dise-hi-media.svg',
  },
  {
    num: '02',
    nameEn: 'BIC',
    nameKo: '비아이씨',
    roleKo: '시공·설치',
    logo: '/images/partners/logo-bic.svg',
  },
  {
    num: '03',
    nameEn: 'R2V',
    nameKo: '알투뷔',
    roleKo: '광고대행·영업',
    logo: '/images/partners/logo-r2v.svg',
  },
  {
    num: '04',
    nameEn: 'AXIS',
    nameKo: '액시스',
    roleKo: '광고 콘텐츠·K뷰티',
    logo: '/images/partners/logo-axis.svg',
  },
];

export const NoiBaiConsortium: React.FC<NoiBaiConsortiumProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  const getLogoClass = (nameEn: string) => {
    switch (nameEn) {
      case 'AXIS':
        return 'max-h-8 max-w-[140px] object-contain';
      case 'BIC':
        return 'max-h-7 max-w-[115px] object-contain';
      case 'DISE HI MEDIA':
        return 'max-h-6 max-w-[105px] object-contain';
      case 'R2V':
        return 'max-h-6 max-w-[100px] object-contain';
      default:
        return 'max-h-7 max-w-[120px] object-contain';
    }
  };

  return (
    <section className="bg-white border border-[#E2E8F0] rounded-[2px] p-5 sm:p-7 space-y-5 font-sans w-full max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="space-y-1.5 border-b border-[#E2E8F0] pb-3.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#D97706] font-mono tracking-wider">
            GLOBAL BUSINESS NETWORK
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#18324A] tracking-tight">
          {isKo ? '글로벌 사업 4개사 협력 구조' : 'Four-Company Global Business Collaboration'}
        </h3>
        <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed max-w-4xl">
          {isKo
            ? 'DISE는 글로벌 LED 미디어 사업 추진 과정에서 각 분야의 전문기업과 협력하여 매체 운영, 시공·설치, 광고 영업과 콘텐츠 영역을 연결합니다.'
            : 'In executing global LED media business, DISE connects specialized key capabilities across media operation, installation, advertising sales, and content.'}
        </p>
      </div>

      {/* 4-Column Individual Cards (No Intermediate Enclosing Container/Background) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-3.5 pt-1">
        {consortiumCompanies.map((comp) => (
          <div
            key={comp.num}
            className="bg-white border border-[#E2E8F0] rounded-[2px] p-3.5 space-y-2.5 flex flex-col justify-between"
          >
            <div className="space-y-2">
              {/* Number */}
              <div className="text-xs font-mono font-bold text-[#D97706]">
                {comp.num}
              </div>

              {/* Logo Box */}
              <div className="h-8 flex items-center justify-start">
                {comp.logo ? (
                  <img
                    src={comp.logo}
                    alt={comp.nameEn}
                    className={getLogoClass(comp.nameEn)}
                  />
                ) : (
                  <span className="text-xs font-bold font-mono tracking-wider text-[#18324A]">
                    {comp.nameEn}
                  </span>
                )}
              </div>

              {/* Company Name */}
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-[#18324A]">
                  {comp.nameKo}
                </div>
                <div className="text-[10px] font-mono text-[#64748B]">
                  {comp.nameEn}
                </div>
              </div>
            </div>

            {/* Core Role */}
            <div className="pt-2 border-t border-[#F1F5F9] text-xs font-medium text-[#475569]">
              {comp.roleKo}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

