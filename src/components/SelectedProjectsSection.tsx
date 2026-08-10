import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroLedGlassBg from '../assets/images/hero_led_glass_bg_1786019620069.jpg';
import heroLedCityBg from '../assets/images/hero_led_city_bg_1786006096621.jpg';
import doohOutdoorMediaImg from '../assets/images/dooh_outdoor_media_1785989215681.jpg';

interface SelectedProjectsSectionProps {
  onNavigateProjects: () => void;
}

export const SelectedProjectsSection: React.FC<SelectedProjectsSectionProps> = ({ onNavigateProjects }) => {
  const primaryProject = {
    id: 'p1',
    name: 'INCHEON INTERNATIONAL AIRPORT',
    location: 'Incheon, South Korea',
    category: 'AIRPORT LED MEDIA',
    scopeList: [
      'LED Media',
      'In-house CMS',
      '600+ Screens',
      'Integrated Operation',
    ],
    description: '대규모 디지털 사이니지 환경의 콘텐츠 송출과 통합관제를 안정적으로 운영합니다.',
    image: heroLedGlassBg,
  };

  const globalProjects = [
    {
      id: 'p2',
      name: 'HANOI OUTDOOR LED MEDIA',
      location: 'Hanoi, Vietnam',
      category: 'OUTDOOR DIGITAL MEDIA',
      scope: 'Outdoor Digital Media · DISE × MHGROUP',
      image: doohOutdoorMediaImg,
    },
    {
      id: 'p3',
      name: 'NOI BAI INTERNATIONAL AIRPORT',
      location: 'Hanoi, Vietnam',
      category: 'AIRPORT LED MEDIA',
      scope: 'Airport LED Media · DISE · R2V · BIC · AXIS (다이즈 · 알투뷔 · 비아이씨 · 엑시스)',
      image: heroLedCityBg,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#222831] border-b border-[#D9DEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-4 sm:mb-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63] inline-block">
            SELECTED PROJECTS
          </span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#222831] tracking-tight leading-[1.08] font-sans">
            PROVEN AT SCALE
          </h2>
          <p className="text-base sm:text-xl font-semibold text-[#222831] tracking-tight pt-1">
            공항에서 증명한 기술, 아시아로 확장합니다.
          </p>
          <p className="text-sm sm:text-base font-normal text-[#66717C] leading-[1.75] pt-1">
            인천국제공항의 대규모 미디어 통합관리 경험을 기반으로 베트남 주요 도시와 공항으로 사업 영역을 확장하고 있습니다.
          </p>
        </div>

        {/* Asymmetrical Editorial Layout */}
        <div className="space-y-12 sm:space-y-16">
          {/* Part 1 — Flagship Project: Incheon Airport */}
          <div
            onClick={onNavigateProjects}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start border-b border-[#D9DEE3] pb-12"
          >
            {/* Left 65%: Large Image */}
            <div className="lg:col-span-8 overflow-hidden bg-[#F5F6F7] border border-[#D9DEE3] rounded-[2px] aspect-[16/9]">
              <img
                src={primaryProject.image}
                alt={primaryProject.name}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>

            {/* Right 35%: Project Details */}
            <div className="lg:col-span-4 space-y-4 pt-1">
              <div className="text-xs font-mono font-semibold text-[#294A63] uppercase tracking-widest">
                {primaryProject.category}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight group-hover:text-[#294A63] transition-colors leading-snug">
                  {primaryProject.name}
                </h3>
                <p className="text-xs font-mono text-[#66717C] mt-1">
                  {primaryProject.location}
                </p>
              </div>

              {/* Detail Pills/Bullet List */}
              <div className="pt-2 border-t border-[#D9DEE3] space-y-1">
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-mono font-semibold text-[#222831]">
                  {primaryProject.scopeList.map((item, idx) => (
                    <span key={item} className="inline-flex items-center gap-2">
                      {idx > 0 && <span className="text-[#D9DEE3]">·</span>}
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#66717C] font-normal leading-relaxed pt-1">
                {primaryProject.description}
              </p>
            </div>
          </div>

          {/* Part 2 — Global Expansion Subsection */}
          <div className="space-y-6">
            <div className="text-xs font-mono font-bold text-[#222831] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#294A63]"></span>
              <span>GLOBAL EXPANSION</span>
            </div>

            {/* 2 Vietnam Projects in a Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {globalProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={onNavigateProjects}
                  className="group cursor-pointer flex flex-col space-y-3"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F6F7] border border-[#D9DEE3] rounded-[2px]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-mono font-semibold text-[#294A63] uppercase tracking-widest">
                      {project.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight group-hover:text-[#294A63] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-[#66717C]">
                      {project.location}
                    </p>
                    <p className="text-xs sm:text-sm text-[#66717C] font-normal leading-relaxed pt-1">
                      {project.scope}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="mt-12 pt-4">
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
