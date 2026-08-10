import React from 'react';

export const MetricsSection: React.FC = () => {
  return (
    <section className="bg-white text-[#222831] py-8 sm:py-10 border-y border-[#D9DEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D9DEE3]">
          {/* Column 1 */}
          <div className="py-6 md:py-2 px-4 md:px-8 flex flex-col items-center justify-center text-center space-y-1.5">
            <span className="text-[28px] sm:text-[32px] font-semibold tracking-tight text-[#222831] font-sans leading-none">
              16 YEARS
            </span>
            <span className="text-sm sm:text-base text-[#66717C] font-normal">
              운영 경험
            </span>
          </div>

          {/* Column 2 */}
          <div className="py-6 md:py-2 px-4 md:px-8 flex flex-col items-center justify-center text-center space-y-1.5">
            <span className="text-[28px] sm:text-[32px] font-semibold tracking-tight text-[#222831] font-sans leading-none">
              600+ SCREENS
            </span>
            <span className="text-sm sm:text-base text-[#66717C] font-normal">
              인천공항 통합관리
            </span>
          </div>

          {/* Column 3 */}
          <div className="py-6 md:py-2 px-4 md:px-8 flex flex-col items-center justify-center text-center space-y-1.5">
            <span className="text-[28px] sm:text-[32px] font-semibold tracking-tight text-[#222831] font-sans leading-none">
              IN-HOUSE CMS
            </span>
            <span className="text-sm sm:text-base text-[#66717C] font-normal">
              자체 개발 기술
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
