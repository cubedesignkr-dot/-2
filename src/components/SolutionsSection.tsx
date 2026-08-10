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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Header & Solutions Rows */}
        <div className="space-y-10 sm:space-y-12">
          {/* Section Label */}
          <div className="mb-4 sm:mb-6">
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

          {/* Full-width Horizontal Solution Rows */}
          <div className="border-t border-b border-[#D9DEE3] divide-y divide-[#D9DEE3]">
            {solutions.map((item) => (
              <div
                key={item.num}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center"
              >
                {/* Column 1: Number (2 cols) */}
                <div className="md:col-span-2">
                  <span className="text-2xl sm:text-3xl font-mono font-medium text-[#294A63]">
                    {item.num}
                  </span>
                </div>

                {/* Column 2: Titles (5 cols) */}
                <div className="md:col-span-5 space-y-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight">
                    {item.titleKo}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#66717C]">
                    {item.titleEn}
                  </p>
                </div>

                {/* Column 3: Description (5 cols) */}
                <div className="md:col-span-5">
                  <p className="text-sm sm:text-base text-[#66717C] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Execution Process Area */}
        <div className="space-y-6 pt-4 border-t border-[#D9DEE3]">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight">
              프로젝트 수행 프로세스
            </h3>
            <p className="text-xs sm:text-sm text-[#66717C] mt-1 font-normal">
              프로젝트 상담과 요구사항 분석부터 구축, CMS 연동 및 통합운영까지 다음 4단계로 진행합니다.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative pt-4 pb-2">
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden md:block absolute top-[21px] left-4 right-4 h-[1px] bg-[#D9DEE3] -z-0" />

            {/* Desktop Grid / Mobile Stack */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative flex flex-col items-start space-y-2 pl-6 md:pl-0 border-l-2 md:border-l-0 border-[#D9DEE3] md:border-transparent py-1 md:py-0"
                >
                  {/* Node Dot */}
                  <div className="hidden md:flex items-center justify-center w-3 h-3 rounded-full bg-[#294A63] border-2 border-white ring-1 ring-[#D9DEE3] mb-2 -mt-1.5" />

                  {/* Mobile Node Dot */}
                  <div className="md:hidden absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#294A63] border-2 border-white ring-1 ring-[#D9DEE3]" />

                  <span className="text-xs font-mono font-bold text-[#294A63]">
                    {step.step}
                  </span>

                  <h4 className="text-sm font-bold text-[#222831] tracking-tight leading-snug">
                    {step.titleKo}
                  </h4>

                  <p className="text-[11px] font-mono text-[#66717C] leading-snug">
                    {step.titleEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Solutions Link */}
          <div className="pt-4">
            <button
              type="button"
              onClick={onNavigateSolutions}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#222831] hover:text-[#294A63] transition-colors group cursor-pointer border-b border-[#222831]/30 hover:border-[#294A63] pb-0.5"
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
