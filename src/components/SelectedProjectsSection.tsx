import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOME_IMAGES } from '../constants/homeImages';

interface SelectedProjectsSectionProps {
  onNavigateProjects: () => void;
}

export const SelectedProjectsSection: React.FC<SelectedProjectsSectionProps> = ({ onNavigateProjects }) => {
  const featuredProjects = [
    {
      id: 'p1',
      title: '인천국제공항 미디어타워',
      subtitle: 'INCHEON INTERNATIONAL AIRPORT',
      location: 'Incheon, South Korea',
      category: 'AIRPORT MEDIA INFRASTRUCTURE',
      scopes: ['In-house CMS', 'Integrated Operation', 'Signage Control'],
      description: '30K 초고해상도 미디어타워를 PC 9~12대 멀티 싱크 방식으로 통합송출합니다.',
      image: HOME_IMAGES.incheonAirport,
      alt: '인천국제공항 내부 수직 LED 미디어타워',
    },
    {
      id: 'p2',
      title: '인스파이어 아레나',
      subtitle: 'INSPIRE ARENA MEDIA CUBE',
      location: 'Incheon, South Korea',
      category: 'ARENA & ENTERTAINMENT MEDIA',
      scopes: ['Central LED Cube', 'Performance Media', 'CMS Control'],
      description: '인스파이어 통합리조트의 17 Player 기반 LED 미디어와 16K 동기화 시스템을 통합운영합니다.',
      image: HOME_IMAGES.inspireArena,
      alt: '인스파이어 아레나 공연장 LED 미디어',
    },
    {
      id: 'p3',
      title: '동성로 스파크',
      subtitle: 'DONGSEONGRO SPARK FACADE',
      location: 'Daegu, South Korea',
      category: 'COMMERCIAL OUTDOOR LED',
      scopes: ['Outdoor Media Facade', 'Curved LED Display', 'Urban Media'],
      description: '외벽 LED와 내부 미디어를 17 Player 기반으로 통합운영하고 듀얼 스크린을 동기화합니다.',
      image: HOME_IMAGES.dongseongroSpark,
      alt: '동성로 스파크 외벽 LED 미디어',
    },
    {
      id: 'p4',
      title: 'IFC몰 LED 미디어',
      subtitle: 'YEOUIDO IFC MALL MEDIA TOWER',
      location: 'Seoul, South Korea',
      category: 'COMMERCIAL LANDMARK MEDIA',
      scopes: ['Vertical LED Tower', 'Commercial CMS', 'Atrium Display'],
      description: '여의도 IFC몰 LED 미디어타워를 구축하고 에어로-플렉스 오픈 메시 기반으로 운영합니다.',
      image: HOME_IMAGES.ifcMall,
      alt: '여의도 IFC몰 야간 LED 미디어 파사드',
    },
  ];

  const globalProjects = [
    {
      id: 'g1',
      title: '하노이 도심 사업',
      subtitle: 'HANOI URBAN DOOH BUSINESS',
      location: 'Hanoi, Vietnam',
      category: 'GLOBAL BUSINESS',
      scopes: ['DISE × MHGROUP', 'STRATEGIC PARTNERSHIP', 'URBAN DOOH'],
      description: '하노이 도심 후보지를 중심으로 옥외 LED 미디어 사업을 추진하고 있습니다.',
      image: HOME_IMAGES.hanoi,
      alt: '하노이 도심 건물 곡면 LED 미디어',
      status: 'IN PROGRESS',
      isConceptImage: false,
    },
    {
      id: 'g2',
      title: '노이바이공항 사업',
      subtitle: 'NOI BAI AIRPORT MEDIA CONCEPT',
      location: 'Hanoi, Vietnam',
      category: 'GLOBAL BUSINESS',
      scopes: ['NOI BAI AIRPORT', 'LED CONCEPT', 'IN PROGRESS'],
      description: '노이바이 국제공항 내 LED 미디어 설치 예정 콘셉트로 사업을 추진하고 있습니다.',
      image: HOME_IMAGES.noiBai,
      alt: '노이바이공항 LED 설치 예정 콘셉트',
      status: 'IN PROGRESS',
      isConceptImage: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#222831] border-b border-[#D9DEE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* 1. FEATURED PROJECTS SECTION */}
        <div className="space-y-10 sm:space-y-12">
          {/* Section Header */}
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

          {/* 4 Featured Projects Grid (1 column on mobile, 2 columns on tablet and desktop: 2x2 grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12 lg:gap-x-12 lg:gap-y-14">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={onNavigateProjects}
                className="group cursor-pointer flex flex-col space-y-3"
              >
                {/* Image Container with 16:10 Aspect Ratio */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F6F7] border border-[#D9DEE3] rounded-[2px]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content Section */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono font-semibold text-[#294A63] uppercase tracking-wider">
                    {project.category}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight leading-snug group-hover:text-[#294A63] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#66717C] mt-0.5">
                      {project.location}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#66717C] font-normal leading-[1.6] line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="pt-2">
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

        {/* 2. GLOBAL BUSINESS SECTION */}
        <div className="pt-8 border-t border-[#D9DEE3] space-y-10 sm:space-y-12">
          <div>
            <div className="mb-4 sm:mb-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63] inline-block">
                GLOBAL BUSINESS
              </span>
            </div>

            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#222831] tracking-tight leading-[1.08] font-sans">
                GLOBAL EXPANSION
              </h2>
              <p className="text-base sm:text-xl font-semibold text-[#222831] tracking-tight pt-1">
                아시아 주요 거점으로 확장하는 미디어 인프라
              </p>
            </div>
          </div>

          {/* Global Projects Grid (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12 lg:gap-x-12 lg:gap-y-14">
            {globalProjects.map((project) => (
              <div
                key={project.id}
                onClick={onNavigateProjects}
                className="group cursor-pointer flex flex-col space-y-3"
              >
                {/* Image Container with 16:10 Aspect Ratio */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F6F7] border border-[#D9DEE3] rounded-[2px]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                  {project.isConceptImage && (
                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-[#102B42]/80 text-slate-200 border border-white/10 text-[10px] font-mono font-medium px-2 py-0.5 rounded-[2px] uppercase tracking-wider backdrop-blur-xs">
                      CONCEPT IMAGE
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold text-[#294A63] uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.status === 'IN PROGRESS' && (
                      <>
                        <span className="text-[#D9DEE3]">•</span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-amber-700 uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                          IN PROGRESS
                        </span>
                      </>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight leading-snug group-hover:text-[#294A63] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#66717C] mt-0.5">
                      {project.location}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#66717C] font-normal leading-[1.6] line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

