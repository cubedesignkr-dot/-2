import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onNavigateSolutions: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onNavigateSolutions }) => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 bg-white border border-slate-200 px-3 py-1 rounded-sm inline-block">
            SOLUTIONS
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight font-sans">
            FROM MEDIA INSTALLATION<br />
            TO INTEGRATED OPERATION
          </h2>
          <p className="text-base sm:text-xl font-medium text-slate-600 leading-relaxed">
            기획과 구축부터 콘텐츠 송출, 통합관제와 운영까지 하나의 기술 체계로 연결합니다.
          </p>
        </div>

        {/* 3 Solution Areas - Grid with Numbers & Thin Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-slate-300 divide-y md:divide-y-0 md:divide-x divide-slate-300">
          {/* Solution 01 */}
          <div className="py-10 md:py-12 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-4">
                01 — LED MEDIA
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                LED Media Planning &amp; Installation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                공간과 운영 목적에 맞는 LED 미디어를 기획하고 구축합니다.
              </p>
            </div>
          </div>

          {/* Solution 02 */}
          <div className="py-10 md:py-12 md:px-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-4">
                02 — CONTROL SYSTEM
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                Display &amp; Control System
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                디스플레이와 컨트롤러, 송출 시스템을 안정적으로 구성합니다.
              </p>
            </div>
          </div>

          {/* Solution 03 */}
          <div className="py-10 md:py-12 md:px-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-4">
                03 — CMS &amp; OPERATION
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                Integrated CMS &amp; Operation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                자체 개발 CMS를 기반으로 콘텐츠 송출과 통합관제, 운영을 수행합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Process Bar */}
        <div className="mt-12 bg-white border border-slate-200 p-6 sm:p-8 rounded-none shadow-2xs">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
            INTEGRATED EXECUTION PROCESS
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm font-bold font-mono text-slate-800 tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              PLANNING
            </span>
            <span className="hidden sm:inline text-slate-300">→</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              DESIGN &amp; INSTALLATION
            </span>
            <span className="hidden sm:inline text-slate-300">→</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              CMS
            </span>
            <span className="hidden sm:inline text-slate-300">→</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              INTEGRATED OPERATION
            </span>
          </div>
        </div>

        {/* Link to Solutions */}
        <div className="mt-10">
          <button
            type="button"
            onClick={onNavigateSolutions}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 transition-colors group cursor-pointer border-b-2 border-blue-600/30 hover:border-blue-600 pb-1"
          >
            <span>EXPLORE SOLUTIONS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
