import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroLedGlassBg from '../assets/images/hero_led_glass_bg_1786019620069.jpg';

export const DEFAULT_HERO_IMAGES = [heroLedGlassBg];

interface HeroBannerProps {
  onOpenPortfolio: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenPortfolio }) => {
  return (
    <section className="relative h-[80vh] min-h-[580px] lg:h-[85vh] lg:min-h-[640px] max-h-[900px] w-full flex items-center justify-center overflow-hidden bg-slate-900 text-white select-none">
      {/* Natural Single Real Incheon Airport Image Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
        style={{ backgroundImage: `url(${heroLedGlassBg})` }}
      />

      {/* Subtle Natural Dark Vignette Backdrop for High Legibility without Heavy Blue Tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-slate-950/40" />

      {/* Main Hero Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full flex flex-col items-center">
        {/* Eyebrow */}
        <div className="mb-4 sm:mb-6">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-amber-300 uppercase font-mono px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-md inline-block">
            DISE HIGH MEDIA · SINCE 2010
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-3 sm:mb-4 drop-shadow-lg font-sans">
          THE CITY BECOMES THE MEDIUM
        </h1>

        {/* Korean Headline */}
        <p className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight mb-6 drop-shadow-md">
          도시와 공간을 새로운 미디어로 만듭니다.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl font-medium leading-relaxed mb-8 sm:mb-10 whitespace-pre-line drop-shadow font-sans">
          {`DISE는 LED 미디어의 기획과 구축부터\n자체 CMS 기반 통합관제와 운영까지 수행합니다.`}
        </p>

        {/* Single CTA Button */}
        <div>
          <button
            type="button"
            onClick={onOpenPortfolio}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base tracking-wide rounded-xl transition-all shadow-xl hover:shadow-blue-500/25 flex items-center gap-2.5 group cursor-pointer border border-blue-400/30 active:scale-[0.98]"
          >
            <span>VIEW PROJECTS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};


