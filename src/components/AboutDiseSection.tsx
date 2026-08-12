import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutDiseSectionProps {
  onNavigateAbout: () => void;
}

export const AboutDiseSection: React.FC<AboutDiseSectionProps> = ({ onNavigateAbout }) => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#222831] border-b border-[#D9DEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Top Row — 12 Column Grid with Baseline Alignment */}
        <div>
          {/* Section Label */}
          <div className="mb-4 sm:mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63] inline-block">
              ABOUT DISE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column (~55% / 7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#222831] tracking-tight leading-[1.08] font-sans">
                DIGITAL MEDIA INFRASTRUCTURE<br />
                BUILT FOR REAL SPACES
              </h2>
            </div>

            {/* Right Column (~45% / 5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-3 text-[#66717C] text-sm sm:text-base leading-[1.75] font-normal">
                <p>
                  DISE는 LED 미디어의 기획과 구축, 자체 CMS 기반 통합관제와 운영을 수행하는 전문기업입니다.
                </p>
                <p>
                  공항과 도시, 상업공간의 대규모 미디어 환경을 하나의 기술 체계로 연결합니다.
                </p>
              </div>

              {/* Text link directly below body copy */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onNavigateAbout}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#222831] hover:text-[#294A63] transition-colors group cursor-pointer border-b border-[#222831]/30 hover:border-[#294A63] pb-0.5"
                >
                  <span>ABOUT DISE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#222831] group-hover:text-[#294A63]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row — Incheon Airport Media Tower Photo */}
        <div className="w-full">
          <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#F5F6F7] border border-[#D9DEE3] rounded-[2px]">
            <img
              src="/images/home/home-about-incheon-media-tower.png"
              alt="인천국제공항 내부 LED 미디어타워 구축 사례"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[11px] sm:text-xs font-mono text-[#66717C] tracking-wider uppercase">
            <span>INCHEON INTERNATIONAL AIRPORT</span>
            <span>LED MEDIA TOWER</span>
          </div>
        </div>
      </div>
    </section>
  );
};
