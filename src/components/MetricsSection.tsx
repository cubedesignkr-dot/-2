import React from 'react';

export const MetricsSection: React.FC = () => {
  return (
    <section className="bg-[#18324A] text-white py-8 sm:py-10 border-y border-[#294A63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {/* Column 1 */}
          <div className="py-4 md:py-2 md:px-8 first:md:pl-0 flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white font-mono">
              SINCE 2010
            </span>
            <span className="text-sm sm:text-base text-slate-300 font-normal">
              16년 운영 경험
            </span>
          </div>

          {/* Column 2 */}
          <div className="py-4 md:py-2 md:px-8 flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white font-mono">
              600+ MANAGED SCREENS
            </span>
            <span className="text-sm sm:text-base text-slate-300 font-normal">
              인천공항 통합관리
            </span>
          </div>

          {/* Column 3 */}
          <div className="py-4 md:py-2 md:px-8 last:md:pr-0 flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white font-mono">
              PROPRIETARY CMS
            </span>
            <span className="text-sm sm:text-base text-slate-300 font-normal">
              자체 개발·통합관제 기술
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
