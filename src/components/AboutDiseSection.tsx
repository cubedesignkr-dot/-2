import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutDiseSectionProps {
  onNavigateAbout: () => void;
}

export const AboutDiseSection: React.FC<AboutDiseSectionProps> = ({ onNavigateAbout }) => {
  const strengths = [
    {
      title: 'SINCE 2010',
      desc: '축적된 현장 및 운영 경험',
    },
    {
      title: 'IN-HOUSE CMS',
      desc: '자체 개발 콘텐츠 관리 기술',
    },
    {
      title: 'AIRPORT-SCALE OPERATION',
      desc: '대규모 미디어 통합관제 역량',
    },
    {
      title: 'END-TO-END CAPABILITY',
      desc: '기획·구축·운영을 연결하는 수행 체계',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label - Simple text without pill background */}
        <div className="mb-4 sm:mb-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 inline-block">
            ABOUT DISE
          </span>
        </div>

        {/* Two-Column Intro Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Headlines */}
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08] font-sans">
              DIGITAL MEDIA INFRASTRUCTURE<br />
              BUILT FOR REAL SPACES
            </h2>
            <p className="text-base sm:text-xl font-semibold text-slate-800 tracking-tight pt-1">
              디지털 사이니지의 구축과 운영을 하나로 연결합니다.
            </p>
          </div>

          {/* Right Column: Body Copy & Action Link */}
          <div className="lg:col-span-5 space-y-5 lg:pt-1">
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-[1.75] font-normal">
              <p>
                DISE는 디지털 사이니지와 LED 미디어의 기획, 구축, 운영을 수행하는 전문기업입니다.
              </p>
              <p>
                디스플레이와 컨트롤러, 자체 CMS 기술을 기반으로 공항과 도시, 상업공간의 대규모 미디어 환경을 안정적으로 통합 관리합니다.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onNavigateAbout}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group cursor-pointer border-b border-blue-600/30 hover:border-blue-600 pb-0.5"
              >
                <span>ABOUT DISE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Merged Strengths - Clean Restrained Horizontal Strip with Thin Divider Lines */}
        <div className="mt-14 pt-8 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-8">
          {strengths.map((item) => (
            <div key={item.title} className="py-6 md:py-2 md:px-6 first:md:pl-0 last:md:pr-0 space-y-1.5">
              <div className="text-sm font-mono font-bold text-slate-900 tracking-tight">
                {item.title}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
