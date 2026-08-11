import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onNavigateSolutions: (subTab?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onNavigateSolutions }) => {
  const solutions = [
    {
      num: '01',
      titleKo: 'LED 미디어 기획·구축',
      titleEn: 'LED Media Planning & Installation',
      desc: '공간과 운영 목적에 맞는 LED 미디어를 기획하고 구축합니다.',
      tabId: 'led-media',
    },
    {
      num: '02',
      titleKo: '디스플레이·제어 시스템',
      titleEn: 'Display & Control System',
      desc: '디스플레이와 컨트롤러, 송출 시스템을 안정적으로 구성합니다.',
      tabId: 'control-system',
    },
    {
      num: '03',
      titleKo: 'CMS·통합운영',
      titleEn: 'CMS & Integrated Operation',
      desc: '자체 개발 CMS를 기반으로 콘텐츠 송출과 통합관제를 수행합니다.',
      tabId: 'cms-operation',
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
    <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#222831] border-b border-[#D9DEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="space-y-4 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#294A63]">
              SOLUTIONS
            </span>
          </div>
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222831] tracking-tight leading-[1.15] font-sans">
              FROM MEDIA INSTALLATION<br />
              TO INTEGRATED OPERATION
            </h2>
            <p className="text-sm sm:text-base font-normal text-[#66717C] leading-relaxed font-sans">
              기획과 구축부터 콘텐츠 송출, 통합관제와 운영까지 하나의 기술 체계로 연결합니다.
            </p>
          </div>
        </div>

        {/* Vertical List of Horizontal Rows */}
        <div className="max-w-[1100px] mx-auto border-t border-b border-[#D9DEE3] divide-y divide-[#D9DEE3] mb-16 sm:mb-20">
          {solutions.map((item) => (
            <div
              key={item.num}
              onClick={() => onNavigateSolutions(item.tabId)}
              className="py-7 sm:py-9 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-[72px_320px_1fr_32px] gap-4 md:gap-8 items-start md:items-center bg-white hover:bg-[#F1F5F9] transition-colors duration-200 cursor-pointer group"
            >
              {/* Number - DISE Brand Navy */}
              <div>
                <span className="text-3xl sm:text-4xl font-mono font-bold text-[#294A63] tracking-tight">
                  {item.num}
                </span>
              </div>

              {/* Titles - Korean First, English Mono */}
              <div className="space-y-0.5">
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight leading-snug group-hover:text-[#18324A] transition-colors">
                  {item.titleKo}
                </h3>
                <p className="text-xs font-mono font-medium text-[#66717C]">
                  {item.titleEn}
                </p>
              </div>

              {/* One-Line Description */}
              <div>
                <p className="text-sm sm:text-base text-[#4A5568] font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Subtle Right Arrow on Hover */}
              <div className="hidden md:flex justify-end items-center text-[#66717C] group-hover:text-[#294A63] group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Project Execution Process Section */}
        <div className="max-w-[1100px] mx-auto bg-[#18324A] text-white rounded-[2px] p-7 sm:p-12 border border-[#18324A]">
          {/* Header */}
          <div className="space-y-2 mb-10 pb-6 border-b border-white/15">
            <span className="text-xs font-mono font-bold text-[#294A63] bg-white/10 px-2 py-0.5 rounded-[2px] tracking-[0.15em] uppercase inline-block text-amber-300">
              HOW WE WORK
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              프로젝트 수행 프로세스
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-2xl">
              프로젝트 상담과 요구사항 분석부터 구축, CMS 연동 및 통합운영까지 다음 4단계로 진행합니다.
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div className="relative pt-2">
            {/* Horizontal Line on Desktop */}
            <div className="hidden md:block absolute top-[16px] left-4 right-4 h-[1px] bg-white/20 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative flex flex-col items-start space-y-2 pl-6 md:pl-0 border-l border-white/20 md:border-l-0 py-1 md:py-0"
                >
                  {/* Dot Desktop */}
                  <div className="hidden md:flex items-center justify-center w-2.5 h-2.5 rounded-full bg-white border-2 border-[#18324A] mb-2 -mt-1 shadow-xs" />
                  {/* Dot Mobile */}
                  <div className="md:hidden absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#18324A]" />

                  <span className="text-xs font-mono font-bold text-amber-300 tracking-wider">
                    {step.step}
                  </span>

                  <h4 className="text-base font-bold text-white tracking-tight">
                    {step.titleKo}
                  </h4>

                  <p className="text-[11px] font-mono font-medium text-white/60">
                    {step.titleEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Link to Solutions Page */}
          <div className="mt-10 pt-6 border-t border-white/15 flex justify-between items-center">
            <button
              type="button"
              onClick={() => onNavigateSolutions()}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-amber-300 transition-colors group cursor-pointer border-b border-white/30 hover:border-amber-300 pb-0.5"
            >
              <span>EXPLORE ALL SOLUTIONS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
