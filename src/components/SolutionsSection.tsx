import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onNavigateSolutions: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onNavigateSolutions }) => {
  const solutions = [
    {
      num: '01',
      titleKo: 'LED 미디어 기획·구축',
      titleEn: 'LED Media Planning & Installation',
      desc: '공간과 운영 목적에 맞는 LED 미디어를 기획하고 구축합니다.',
    },
    {
      num: '02',
      titleKo: '디스플레이·제어 시스템',
      titleEn: 'Display & Control System',
      desc: '디스플레이와 컨트롤러, 송출 시스템을 안정적으로 구성합니다.',
    },
    {
      num: '03',
      titleKo: 'CMS·통합운영',
      titleEn: 'CMS & Integrated Operation',
      desc: '자체 개발 CMS를 기반으로 콘텐츠 송출과 통합관제를 수행합니다.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      titleKo: '기획·요구사항 분석',
      titleEn: 'Planning & Requirement Analysis',
    },
    {
      step: '02',
      titleKo: '설계·시스템 구축',
      titleEn: 'Design & Installation',
    },
    {
      step: '03',
      titleKo: 'CMS 연동·운영 테스트',
      titleEn: 'CMS Integration & Testing',
    },
    {
      step: '04',
      titleKo: '통합관제·운영',
      titleEn: 'Integrated Operation',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5F6F7] text-[#222831] border-b border-[#D9DEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Solutions Rows Container */}
        <div className="space-y-10 sm:space-y-12">
          {/* Section Label */}
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63] inline-block">
              SOLUTIONS
            </span>
          </div>

          {/* Section Header */}
          <div className="max-w-3xl space-y-2.5">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#222831] tracking-tight leading-[1.08] font-sans">
              FROM MEDIA INSTALLATION<br />
              TO INTEGRATED OPERATION
            </h2>
            <p className="text-sm sm:text-lg font-normal text-[#66717C] leading-[1.7]">
              기획과 구축부터 콘텐츠 송출, 통합관제와 운영까지 하나의 기술 체계로 연결합니다.
            </p>
          </div>

          {/* Centered Solution Rows Grid with max-w-[1100px] */}
          <div className="border-t border-b border-[#D9DEE3] divide-y divide-[#D9DEE3]">
            <div className="max-w-[1100px] mx-auto">
              {solutions.map((item) => (
                <div
                  key={item.num}
                  onClick={onNavigateSolutions}
                  className="py-8 sm:py-9 px-3 sm:px-5 md:px-6 grid grid-cols-1 md:grid-cols-[72px_320px_1fr] gap-4 md:gap-10 items-start md:items-center bg-[#F5F6F7] hover:bg-white transition-colors duration-200 cursor-pointer"
                >
                  {/* Column 1: Number (increased size 34-38px, font-medium, color #294A63) */}
                  <div>
                    <span className="text-[34px] sm:text-[38px] font-mono font-medium text-[#294A63] leading-none tracking-tight">
                      {item.num}
                    </span>
                  </div>

                  {/* Column 2: Titles */}
                  <div className="space-y-0.5">
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#222831] tracking-tight leading-snug">
                      {item.titleKo}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] font-mono font-normal text-[#66717C]">
                      {item.titleEn}
                    </p>
                  </div>

                  {/* Column 3: Description */}
                  <div className="max-w-[480px]">
                    <p className="text-[15px] sm:text-[16px] text-[#66717C] font-normal leading-[1.7]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integrated Execution Process Area — Dark Navy Technical Panel (#18324A) */}
        <div className="mt-16 sm:mt-20 max-w-[1100px] mx-auto bg-[#18324A] text-white rounded-[2px] p-7 sm:p-12 lg:p-14 border border-[#18324A]">
          {/* Process Header */}
          <div className="space-y-3.5 mb-10 sm:mb-12">
            <h3 className="text-[22px] sm:text-[24px] font-semibold text-white tracking-tight">
              프로젝트 수행 프로세스
            </h3>
            <p className="text-sm sm:text-[15px] text-white/70 font-normal leading-[1.65] max-w-2xl">
              프로젝트 상담과 요구사항 분석부터 구축, CMS 연동 및 통합운영까지 다음 4단계로 진행합니다.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative pt-2 pb-2">
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden md:block absolute top-[18px] left-4 right-4 h-[1px] bg-white/20 -z-0" />

            {/* Desktop Grid / Mobile Stack */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-7 md:gap-6 relative z-10">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative flex flex-col items-start space-y-2 pl-6 md:pl-0 border-l border-white/20 md:border-l-0 py-0.5 md:py-0"
                >
                  {/* Node Dot Desktop */}
                  <div className="hidden md:flex items-center justify-center w-2.5 h-2.5 rounded-full bg-white border border-white/40 mb-2 -mt-1.25" />

                  {/* Node Dot Mobile */}
                  <div className="md:hidden absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border border-white/40" />

                  <span className="text-[12px] sm:text-[13px] font-mono font-semibold text-white/60">
                    {step.step}
                  </span>

                  <h4 className="text-[16px] sm:text-[17px] font-semibold text-white tracking-tight leading-snug">
                    {step.titleKo}
                  </h4>

                  <p className="text-[11px] sm:text-[12px] font-mono font-normal text-white/55 leading-[1.45]">
                    {step.titleEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Solutions Link inside Navy Panel (~44-52px spacing) */}
          <div className="mt-11 sm:mt-12 pt-2">
            <button
              type="button"
              onClick={onNavigateSolutions}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-white/80 transition-colors group cursor-pointer border-b border-white/30 hover:border-white pb-0.5"
            >
              <span>EXPLORE SOLUTIONS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
