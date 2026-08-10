import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onNavigateSolutions: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onNavigateSolutions }) => {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label - Simple text without pill background */}
        <div className="mb-4 sm:mb-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 inline-block">
            SOLUTIONS
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-2.5">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08] font-sans">
            FROM MEDIA INSTALLATION<br />
            TO INTEGRATED OPERATION
          </h2>
          <p className="text-sm sm:text-lg font-normal text-slate-600 leading-[1.7]">
            기획과 구축부터 콘텐츠 송출, 통합관제와 운영까지 하나의 기술 체계로 연결합니다.
          </p>
        </div>

        {/* 3 Solution Areas - Grid with Numbers & Thin Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Solution 01 */}
          <div className="py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest mb-3">
                01 — LED MEDIA
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                LED Media Planning &amp; Installation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-[1.7] font-normal">
                공간과 운영 목적에 맞는 LED 미디어를 기획하고 구축합니다.
              </p>
            </div>
          </div>

          {/* Solution 02 */}
          <div className="py-8 md:py-10 md:px-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest mb-3">
                02 — CONTROL SYSTEM
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                Display &amp; Control System
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-[1.7] font-normal">
                디스플레이와 컨트롤러, 송출 시스템을 안정적으로 구성합니다.
              </p>
            </div>
          </div>

          {/* Solution 03 */}
          <div className="py-8 md:py-10 md:px-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest mb-3">
                03 — CMS &amp; OPERATION
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                Integrated CMS &amp; Operation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-[1.7] font-normal">
                자체 개발 CMS를 기반으로 콘텐츠 송출과 통합관제, 운영을 수행합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Simplified Horizontal Process Line - No Floating Card Box or Heavy Borders */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-widest mb-3">
            INTEGRATED EXECUTION PROCESS
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono font-semibold text-slate-800 tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              PLANNING
            </span>
            <span className="hidden sm:inline text-slate-300">→</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              DESIGN &amp; INSTALLATION
            </span>
            <span className="hidden sm:inline text-slate-300">→</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              CMS
            </span>
            <span className="hidden sm:inline text-slate-300">→</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              INTEGRATED OPERATION
            </span>
          </div>
        </div>

        {/* Link to Solutions */}
        <div className="mt-8">
          <button
            type="button"
            onClick={onNavigateSolutions}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group cursor-pointer border-b border-blue-600/30 hover:border-blue-600 pb-0.5"
          >
            <span>EXPLORE SOLUTIONS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
