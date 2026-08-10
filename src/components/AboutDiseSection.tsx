import React from 'react';
import { ArrowRight } from 'lucide-react';
import cmsOperationImg from '../assets/images/software_cms_monitor_1785989194504.jpg';

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
              
              <p className="text-base sm:text-xl font-semibold text-[#222831] tracking-tight pt-1">
                디지털 사이니지의 구축과 운영을 하나로 연결합니다.
              </p>
            </div>

            {/* Right Column (~45% / 5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-3 text-[#66717C] text-sm sm:text-base leading-[1.75] font-normal">
                <p>
                  DISE는 디지털 사이니지와 LED 미디어의 기획, 구축, 운영을 수행하는 전문기업입니다.
                </p>
                <p>
                  디스플레이와 컨트롤러, 자체 CMS 기술을 기반으로 공항과 도시, 상업공간의 대규모 미디어 환경을 안정적으로 통합 관리합니다.
                </p>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[#222831] pt-1">
                기획부터 구축, CMS, 통합운영까지 하나의 체계로 연결합니다.
              </p>

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

        {/* Bottom Row — Full-Width Operation Image */}
        <div className="w-full">
          <div className="relative w-full aspect-[16/5] sm:aspect-[21/7] max-h-[380px] overflow-hidden bg-[#F5F6F7] border border-[#D9DEE3] rounded-[2px]">
            <img
              src={cmsOperationImg}
              alt="DISE Integrated Operation Control Environment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
