import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroLedGlassBg from '../assets/images/hero_led_glass_bg_1786019620069.jpg';
import inspireResortImg from '../assets/images/led_display_bg_1785990073226.jpg';
import doohOutdoorMediaImg from '../assets/images/dooh_outdoor_media_1785989215681.jpg';

interface SelectedProjectsSectionProps {
  onNavigateProjects: () => void;
}

export const SelectedProjectsSection: React.FC<SelectedProjectsSectionProps> = ({ onNavigateProjects }) => {
  const flagshipProject = {
    id: 'p1',
    name: 'INCHEON INTERNATIONAL AIRPORT',
    location: 'Incheon, South Korea',
    category: 'AIRPORT MEDIA INFRASTRUCTURE',
    scopes: ['600+ Managed Screens', 'In-house CMS', 'Integrated Operation'],
    description: '대규모 디지털 사이니지 환경의 콘텐츠 송출과 통합관제를 안정적으로 운영합니다.',
    image: heroLedGlassBg,
  };

  const secondaryProjects = [
    {
      id: 'p2',
      name: 'INSPIRE ARENA LINK',
      location: 'Yeongjongdo, Incheon · 2024',
      category: 'INTEGRATED RESORT MEDIA',
      scopes: ['17 Player Integrated Operation', '16K Synchronization', 'Multi-zone Media Control'],
      description: '외부 LED와 내부 엘리베이터홀, 필로티를 연동하고 공연·이벤트·광고 콘텐츠를 다중 구역에 통합 송출합니다.',
      image: inspireResortImg,
    },
    {
      id: 'p3',
      name: 'HANOI OUTDOOR LED MEDIA',
      location: 'Hanoi, Vietnam',
      category: 'OUTDOOR DIGITAL MEDIA',
      scopes: ['DISE × MHGROUP'],
      description: '도시 옥외공간을 위한 대형 LED 미디어 구축과 글로벌 사업 확장 사례입니다.',
      image: doohOutdoorMediaImg,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#222831] border-b border-[#D9DEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Label & Header */}
        <div>
          <div className="mb-4 sm:mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63] inline-block">
              SELECTED PROJECTS
            </span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#222831] tracking-tight leading-[1.08] font-sans">
              PROVEN ACROSS SPACES
            </h2>
            <p className="text-base sm:text-xl font-semibold text-[#222831] tracking-tight pt-1">
              공항에서 복합리조트와 도시 미디어까지
            </p>
            <p className="text-sm sm:text-base font-normal text-[#66717C] leading-[1.75] pt-1">
              대규모 통합관제 기술을 기반으로 공항과 복합상업공간, 도시 옥외미디어까지 다양한 환경의 프로젝트를 수행합니다.
            </p>
          </div>
        </div>

        {/* Flagship Project — Full-Width Image & Top-Divided Information Row */}
        <div>
          {/* Full-width Image */}
          <div
            onClick={onNavigateProjects}
            className="group cursor-pointer overflow-hidden bg-[#F5F6F7] border border-[#D9DEE3] rounded-[2px] w-full aspect-[16/9] sm:aspect-[16/7] mb-5 sm:mb-6"
          >
            <img
              src={flagshipProject.image}
              alt={flagshipProject.name}
              className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-500 ease-out"
            />
          </div>

          {/* Flagship Information Row with Top Divider (No Bottom Line) */}
          <div
            onClick={onNavigateProjects}
            className="group cursor-pointer pt-5 sm:pt-6 border-t border-[#D9DEE3] grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
          >
            {/* Left Side (~45% / 5 cols) */}
            <div className="md:col-span-5 space-y-2.5">
              <div className="text-xs font-mono font-semibold text-[#294A63] uppercase tracking-widest">
                {flagshipProject.category}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight group-hover:text-[#294A63] transition-colors">
                  {flagshipProject.name}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-[#66717C] mt-1.5">
                  {flagshipProject.location}
                </p>
              </div>
            </div>

            {/* Right Side (~55% / 7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold text-[#222831]">
                {flagshipProject.scopes.map((scope, idx) => (
                  <span key={scope} className="inline-flex items-center gap-2">
                    {idx > 0 && <span className="text-[#D9DEE3]">·</span>}
                    <span>{scope}</span>
                  </span>
                ))}
              </div>
              <p className="text-sm sm:text-base text-[#66717C] font-normal leading-[1.7]">
                {flagshipProject.description}
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Projects — Two Equal Columns with Matching Top Divider Rule */}
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                onClick={onNavigateProjects}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container (16:10) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F6F7] border border-[#D9DEE3] rounded-[2px] w-full mb-5 sm:mb-6">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Caption Details with Top Divider Line (20-24px gap, 20-24px top padding) */}
                <div className="pt-5 sm:pt-6 border-t border-[#D9DEE3] space-y-4">
                  <div className="text-xs font-mono font-semibold text-[#294A63] uppercase tracking-widest">
                    {project.category}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight group-hover:text-[#294A63] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#66717C] mt-1 font-normal">
                      {project.location}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold text-[#222831]">
                    {project.scopes.map((scope, idx) => (
                      <span key={scope} className="inline-flex items-center gap-2">
                        {idx > 0 && <span className="text-[#D9DEE3]">·</span>}
                        <span>{scope}</span>
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-[#66717C] font-normal leading-[1.7]">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects CTA Link */}
        <div className="pt-4">
          <button
            type="button"
            onClick={onNavigateProjects}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#222831] hover:text-[#294A63] transition-colors group cursor-pointer border-b border-[#222831]/30 hover:border-[#294A63] pb-0.5"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
