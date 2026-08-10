import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutDiseSectionProps {
  onNavigateAbout: () => void;
}

export const AboutDiseSection: React.FC<AboutDiseSectionProps> = ({ onNavigateAbout }) => {
  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-sm inline-block">
            ABOUT DISE
          </span>
        </div>

        {/* Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Headlines */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] font-sans">
              DIGITAL MEDIA INFRASTRUCTURE<br />
              BUILT FOR REAL SPACES
            </h2>
            <p className="text-lg sm:text-2xl font-bold text-slate-700 tracking-tight pt-2">
              디지털 사이니지의 구축과 운영을 하나로 연결합니다.
            </p>
          </div>

          {/* Right Column: Body Copy & Action */}
          <div className="lg:col-span-5 space-y-6 lg:pt-2">
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                DISE는 디지털 사이니지와 LED 미디어의 기획, 구축, 운영을 수행하는 전문기업입니다.
              </p>
              <p>
                디스플레이와 컨트롤러, 자체 CMS 기술을 기반으로 공항과 도시, 상업공간의 대규모 미디어 환경을 안정적으로 통합 관리합니다.
              </p>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onNavigateAbout}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 transition-colors group cursor-pointer border-b-2 border-blue-600/30 hover:border-blue-600 pb-1"
              >
                <span>ABOUT DISE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
