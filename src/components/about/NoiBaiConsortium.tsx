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

  const renderLogo = (nameEn: string, logoPath: string | null) => {
    if (!logoPath) {
      return (
        <span className="text-xs font-bold font-mono tracking-wider text-[#18324A]">
          {nameEn}
        </span>
      );
    }

    let imgClasses = "max-w-[120px] sm:max-w-[130px] lg:max-w-[150px] w-auto object-contain object-center";
    let style: React.CSSProperties = {};

    switch (nameEn) {
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
        alt={nameEn}
        className={imgClasses}
        style={style}
      />
    );
  };

  return (
    <section className="bg-white border border-[#E2E8F0] rounded-[2px] p-5 sm:p-7 space-y-6 font-sans w-full max-w-[1200px] mx-auto">
      {/* Section Header (Left Aligned) */}
      <div className="space-y-1.5 border-b border-[#E2E8F0] pb-3.5 text-left">
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

      {/* 4-Column Individual Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 pt-1">
        {consortiumCompanies.map((comp) => (
          <div
            key={comp.num}
            className="bg-white border border-[#E2E8F0]/80 rounded-[2px] p-4 sm:p-5 flex flex-col items-center text-center justify-between h-full space-y-3"
          >
            {/* Top Container (Number, Logo, Names) */}
            <div className="w-full flex flex-col items-center space-y-2.5">
              {/* 1. Number */}
              <span className="text-xs font-mono font-bold text-[#D97706] tracking-wider block">
                {comp.num}
              </span>

              {/* 2. Logo */}
              <div className="w-full max-w-[140px] sm:max-w-[150px] lg:max-w-[170px] h-[68px] sm:h-[74px] lg:h-[80px] flex items-center justify-center overflow-visible my-1">
                {renderLogo(comp.nameEn, comp.logo)}
              </div>

              {/* 3. Korean Name & 4. English Name */}
              <div className="w-full text-center space-y-0.5">
                <h5 className="text-sm sm:text-base font-bold text-[#18324A] tracking-tight leading-snug">
                  {comp.nameKo}
                </h5>
                <p className="text-[11px] font-mono text-[#64748B] tracking-wider uppercase">
                  {comp.nameEn}
                </p>
              </div>
            </div>

            {/* 5. Thin Divider & 6. Core Role */}
            <div className="w-full pt-2.5 border-t border-[#F1F5F9] text-center">
              <p className="text-xs font-medium text-[#475569] leading-relaxed">
                {comp.roleKo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

