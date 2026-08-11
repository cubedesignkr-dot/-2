import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOME_IMAGES } from '../constants/homeImages';

export const DEFAULT_HERO_IMAGES = [HOME_IMAGES.ifcMall];

interface HeroBannerProps {
  onOpenPortfolio: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenPortfolio }) => {
  return (
    <section className="relative h-[75vh] min-h-[540px] lg:h-[80vh] lg:min-h-[600px] max-h-[850px] w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none">
      {/* Responsive Picture Tag using Actual DISE IFC Mall Media Image */}
      <picture className="absolute inset-0 w-full h-full block">
        <source
          media="(max-width: 767px)"
          srcSet={HOME_IMAGES.ifcMall}
        />
        <img
          src={HOME_IMAGES.ifcMall}
          alt="여의도 IFC몰 야간 LED 미디어 파사드"
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover [object-position:center_48%] max-md:[object-position:62%_center]"
        />
      </picture>

      {/* Navy/Black Overlay (40% intensity within 35~45% target range) */}
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full flex flex-col items-center">
        {/* Eyebrow - Simple text without pill background or border */}
        <div className="mb-3 sm:mb-4">
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-amber-300 uppercase inline-block">
            DISE HIGH MEDIA · SINCE 2010
          </span>
        </div>

        {/* Main Headline - Font weight 650-700, slightly reduced size */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-3 font-sans">
          THE CITY BECOMES THE MEDIUM
        </h1>

        {/* Korean Headline */}
        <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-slate-100 tracking-tight mb-5 leading-snug">
          도시와 공간을 새로운 미디어로 만듭니다.
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm lg:text-base text-slate-200 max-w-2xl font-normal leading-[1.7] mb-8 whitespace-pre-line font-sans">
          LED 미디어의 기획과 구축부터 자체 CMS 기반 통합관제와 운영까지 하나의 체계로 연결합니다.
        </p>

        {/* Single CTA Button - Restrained border radius and solid blue style */}
        <div>
          <button
            type="button"
            onClick={onOpenPortfolio}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide rounded-sm transition-all shadow-none flex items-center gap-2 group cursor-pointer border border-blue-500/20 active:scale-[0.98]"
          >
            <span>VIEW PROJECTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};



