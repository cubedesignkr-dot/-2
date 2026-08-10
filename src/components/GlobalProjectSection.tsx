import React from 'react';
import { ArrowRight } from 'lucide-react';
import doohOutdoorMediaImg from '../assets/images/dooh_outdoor_media_1785989215681.jpg';

interface GlobalProjectSectionProps {
  onNavigateGlobalProjects: () => void;
}

export const GlobalProjectSection: React.FC<GlobalProjectSectionProps> = ({ onNavigateGlobalProjects }) => {
  return (
    <section className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label - Simple text without pill background */}
        <div className="mb-4 sm:mb-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 inline-block">
            GLOBAL PROJECT
          </span>
        </div>

        {/* Editorial Layout: Left text + Right large real image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2.5">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08] font-sans">
                EXPANDING DIGITAL MEDIA<br />
                INFRASTRUCTURE ACROSS ASIA
              </h2>
              <p className="text-base sm:text-xl font-semibold text-slate-800 tracking-tight pt-1">
                아시아의 도시와 공항으로 확장하는<br className="hidden sm:inline" /> DISE의 미디어 인프라
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-[1.75] font-normal">
              국내 공항급 LED 미디어 구축 및 통합운영 경험을 바탕으로 베트남 주요 도시와 공항으로 사업 영역을 확장하고 있습니다.
            </p>

            {/* Short Location Line */}
            <div className="pt-3 border-t border-slate-200">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest">
                HANOI · NOI BAI INTERNATIONAL AIRPORT
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onNavigateGlobalProjects}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group cursor-pointer border-b border-blue-600/30 hover:border-blue-600 pb-0.5"
              >
                <span>EXPLORE GLOBAL PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Real Vietnam Project Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden border border-slate-200">
              <img
                src={doohOutdoorMediaImg}
                alt="DISE Vietnam Outdoor LED Media Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/85 text-white px-4 py-2.5 text-xs font-mono">
                <span className="font-semibold text-amber-300">VIETNAM GLOBAL PROJECT</span> · HANOI OUTDOOR LED MEDIA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
