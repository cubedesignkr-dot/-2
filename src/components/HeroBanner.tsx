import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOME_IMAGES } from '../constants/homeImages';

export const DEFAULT_HERO_IMAGES = [HOME_IMAGES.ifcMall];

interface HeroBannerProps {
  onOpenPortfolio: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenPortfolio }) => {
  return (
    <section className="relative h-[75vh] min-h-[540px] lg:h-[76vh] lg:min-h-[580px] max-h-[800px] w-full flex items-center overflow-hidden bg-slate-950 text-white select-none">
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
          className="w-full h-full object-cover [object-position:center_48%] max-md:[object-position:65%_center]"
        />
      </picture>

      {/* Navy Gradient Overlay: Slightly darker on the left for text legibility, transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1622]/85 via-[#0a1622]/60 to-[#0a1622]/25 pointer-events-none" />

      {/* Main Hero Content - Left aligned & container aligned */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 z-10 w-full text-left">
        <div className="max-w-[820px] flex flex-col items-start space-y-4">
          {/* Eyebrow */}
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-amber-300 uppercase inline-block">
              LED MEDIA · CMS · INTEGRATED OPERATION
            </span>
          </div>

          {/* Main Headline (34px on mobile, 56px on PC, 1.08 line-height) */}
          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] font-bold text-white tracking-tight leading-[1.08] font-sans">
            <span className="block">THE CITY BECOMES</span>
            <span className="block">MEDIUM</span>
          </h1>

          {/* Korean Subtitle */}
          <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-slate-100 tracking-tight leading-snug text-heading-balance">
            도시와 공간을 새로운 미디어로 만듭니다.
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-normal leading-[1.7] pt-1 pb-3 max-w-2xl font-sans text-body-pretty">
            LED 미디어의 기획과 구축부터 자체 CMS 기반 통합관제와 운영까지 하나의 체계로 연결합니다.
          </p>

          {/* CTA Button: White Outline with Max 2px border radius */}
          <div>
            <button
              type="button"
              onClick={onOpenPortfolio}
              className="w-auto inline-flex items-center gap-2 px-5 py-3 border border-white/80 bg-transparent text-white hover:bg-white hover:text-[#18324A] text-xs sm:text-sm font-semibold tracking-wider rounded-[2px] transition-colors group cursor-pointer"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



