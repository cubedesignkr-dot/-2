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

  return (
    <section className="py-20 sm:py-24 bg-[#F8F9FA] text-[#222831] border-b border-[#D9DEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="space-y-4 mb-10 sm:mb-14">
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
              LED 미디어의 기획과 구축부터 디스플레이 제어, CMS 기반 통합운영까지 제공합니다.
            </p>
          </div>
        </div>

        {/* Vertical List of Horizontal Rows */}
        <div className="max-w-[1100px] mx-auto border-t border-b border-[#D9DEE3] divide-y divide-[#D9DEE3]">
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

        {/* Bottom Link to Solutions Page */}
        <div className="max-w-[1100px] mx-auto pt-6 flex justify-end">
          <button
            type="button"
            onClick={() => onNavigateSolutions()}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#222831] hover:text-[#294A63] transition-colors group cursor-pointer border-b border-[#222831]/30 hover:border-[#294A63] pb-0.5"
          >
            <span>EXPLORE ALL SOLUTIONS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
