import React from 'react';
import { ArrowRight } from 'lucide-react';
import doohOutdoorMediaImg from '../assets/images/dooh_outdoor_media_1785989215681.jpg';

interface GlobalProjectSectionProps {
  onNavigateGlobalProjects: () => void;
}

export const GlobalProjectSection: React.FC<GlobalProjectSectionProps> = ({ onNavigateGlobalProjects }) => {
  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-sm inline-block">
            GLOBAL PROJECT
          </span>
        </div>

        {/* Editorial Layout: Left text + Right large real image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight font-sans">
                EXPANDING DIGITAL MEDIA<br />
                INFRASTRUCTURE ACROSS ASIA
              </h2>
              <p className="text-lg sm:text-2xl font-bold text-slate-700 tracking-tight">
                아시아의 도시와 공항으로 확장하는 DISE의 미디어 인프라
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              DISE는 국내에서 축적한 LED 미디어 구축 및 통합운영 경험을 바탕으로 베트남을 포함한 글로벌 프로젝트를 확대하고 있습니다.
            </p>

            {/* Project List */}
            <div className="pt-4 space-y-4 border-t border-slate-200">
              <div className="space-y-1">
                <div className="text-sm font-black font-mono text-slate-900 uppercase">
                  HANOI
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  Outdoor LED Media · DISE × MHGROUP
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-black font-mono text-slate-900 uppercase">
                  NOI BAI INTERNATIONAL AIRPORT
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  Airport LED Media · DISE · R2V · BIC · AXIS (다이즈 · 알투뷔 · 비아이씨 · 엑시스)
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-4">
              <button
                type="button"
                onClick={onNavigateGlobalProjects}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 transition-colors group cursor-pointer border-b-2 border-blue-600/30 hover:border-blue-600 pb-1"
              >
                <span>EXPLORE GLOBAL PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Real Vietnam Project Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden border border-slate-200 shadow-md">
              <img
                src={doohOutdoorMediaImg}
                alt="DISE Vietnam Outdoor LED Media Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xs text-white p-4 text-xs font-mono">
                <span className="font-bold text-amber-300">VIETNAM GLOBAL PROJECT</span> · HANOI OUTDOOR LED MEDIA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
