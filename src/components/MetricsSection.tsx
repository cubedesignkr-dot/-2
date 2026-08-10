import React from 'react';

export const MetricsSection: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200 py-8 sm:py-12 text-slate-900 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Item 1 */}
          <div className="py-6 md:py-2 md:px-8 flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-2 font-mono">
              16 YEARS
            </span>
            <span className="text-sm sm:text-base text-slate-600 font-bold tracking-tight">
              운영 경험
            </span>
          </div>

          {/* Item 2 */}
          <div className="py-6 md:py-2 md:px-8 flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-2 font-mono">
              600+ SCREENS
            </span>
            <span className="text-sm sm:text-base text-slate-600 font-bold tracking-tight">
              인천공항 통합관리
            </span>
          </div>

          {/* Item 3 */}
          <div className="py-6 md:py-2 md:px-8 flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-2 font-mono">
              IN-HOUSE CMS
            </span>
            <span className="text-sm sm:text-base text-slate-600 font-bold tracking-tight">
              자체 개발 기술
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


