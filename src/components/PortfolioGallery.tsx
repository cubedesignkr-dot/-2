import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECT_IMAGES } from '../constants/projectImages';

// Assets for Global Business & Activities (kept intact per requirements)
import doohOutdoorMediaImg from '../assets/images/dooh_outdoor_media_1785989215681.jpg';
import heroLedCityBg from '../assets/images/hero_led_city_bg_1786006096621.jpg';
import softwareCmsMonitorImg from '../assets/images/software_cms_monitor_1785989194504.jpg';
import hardwareControllerImg from '../assets/images/hardware_controller_1785989182277.jpg';
import heroLedGlassBg from '../assets/images/hero_led_glass_bg_1786019620069.jpg';
import inspireResortImg from '../assets/images/led_display_bg_1785990073226.jpg';

interface PortfolioGalleryProps {
  currentLang: Language;
  portfolio?: any[];
  onOpenAdminGallery?: () => void;
  initialCategory?: string;
}

export interface MediaProjectItem {
  id: string;
  title: string;
  titleEn: string;
  image: string;
  alt: string;
  category: 'LED MEDIA' | 'DID';
}

export const mediaProjects: MediaProjectItem[] = [
  {
    id: "incheon-airport-media-tower",
    title: "인천국제공항 미디어타워",
    titleEn: "Incheon International Airport Media Tower",
    image: PROJECT_IMAGES.incheonAirport,
    alt: "인천국제공항 내부 수직 LED 미디어타워",
    category: "LED MEDIA",
  },
  {
    id: "inspire-arena",
    title: "인스파이어 아레나",
    titleEn: "Inspire Arena",
    image: PROJECT_IMAGES.inspireArena,
    alt: "인스파이어 아레나 공연장 LED 미디어",
    category: "LED MEDIA",
  },
  {
    id: "dongseongro-spark",
    title: "동성로 스파크",
    titleEn: "Dongseongro Spark",
    image: PROJECT_IMAGES.dongseongroSpark,
    alt: "동성로 스파크 외벽 LED 미디어",
    category: "LED MEDIA",
  },
  {
    id: "ifc-mall",
    title: "여의도 IFC몰 LED 미디어",
    titleEn: "Yeouido IFC Mall LED Media",
    image: PROJECT_IMAGES.ifcMall,
    alt: "여의도 IFC몰 야간 LED 미디어 파사드",
    category: "LED MEDIA",
  },
  {
    id: "emart24-did",
    title: "이마트24 매장 DID",
    titleEn: "eMart24 Store DID",
    image: PROJECT_IMAGES.emart24Did,
    alt: "이마트24 매장 카운터 DID 디스플레이",
    category: "DID",
  },
  {
    id: "busan-lct-exhibition",
    title: "부산 엘시티 미디어 전시관",
    titleEn: "Busan LCT Media Exhibition",
    image: PROJECT_IMAGES.busanLctExhibition,
    alt: "부산 엘시티 몰입형 LED 미디어 전시 공간",
    category: "LED MEDIA",
  },
  {
    id: "tour-bus-shelter-led",
    title: "투어버스 쉘터 LED 매체",
    titleEn: "Tour Bus Shelter LED Media",
    image: PROJECT_IMAGES.tourBusShelterLed,
    alt: "도심 보행 공간의 투어버스 쉘터 LED 매체",
    category: "LED MEDIA",
  },
  {
    id: "civil-service-did",
    title: "양방향 민원 서비스 DID",
    titleEn: "Interactive Civil Service DID",
    image: PROJECT_IMAGES.civilServiceDid,
    alt: "공공기관 민원 창구에 설치된 양방향 DID 단말기",
    category: "DID",
  },
];

interface GlobalGalleryItem {
  id: string;
  type: 'GLOBAL' | 'ACTIVITIES';
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  image: string;
  status?: 'CANDIDATE SITE' | 'IN PROGRESS';
  description: string;
}

export const globalBusinessItems: GlobalGalleryItem[] = [
  {
    id: 'global-01',
    type: 'GLOBAL',
    title: '하노이 도심 LED 미디어 사업',
    titleEn: 'HANOI URBAN LED MEDIA (TRANG TIEN)',
    category: 'GLOBAL BUSINESS',
    categoryEn: 'GLOBAL BUSINESS',
    status: 'CANDIDATE SITE',
    image: doohOutdoorMediaImg,
    description: 'DISE는 국내에서 축적한 LED 미디어 구축과 운영 경험을 바탕으로 글로벌 시장으로 사업 영역을 확장하고 있습니다. 하노이 도심 주요 거점(장띠엔) 대상 옥외 LED 미디어 사업 후보지입니다.',
  },
  {
    id: 'global-02',
    type: 'GLOBAL',
    title: '하노이 QCD Plaza 후보지',
    titleEn: 'HANOI QCD PLAZA',
    category: 'GLOBAL BUSINESS',
    categoryEn: 'GLOBAL BUSINESS',
    status: 'CANDIDATE SITE',
    image: heroLedCityBg,
    description: '하노이 도심 핵심 상업거점인 QCD Plaza를 대상으로 추진하는 옥외 LED 미디어 사업 후보지입니다.',
  },
  {
    id: 'global-03',
    type: 'GLOBAL',
    title: '노이바이국제공항 LED 사업',
    titleEn: 'NOI BAI INTERNATIONAL AIRPORT LED PROJECT',
    category: 'GLOBAL BUSINESS',
    categoryEn: 'GLOBAL BUSINESS',
    status: 'IN PROGRESS',
    image: heroLedCityBg,
    description: '노이바이국제공항 LED 미디어 사업을 위한 현지 협력 체계와 사업 추진 기반을 구축하고 있습니다.',
  },
  {
    id: 'activity-01',
    type: 'ACTIVITIES',
    title: '1차 베트남 방문 및 사업 미팅',
    titleEn: '1ST VIETNAM BUSINESS VISIT',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: hardwareControllerImg,
    description: '베트남 주요 미디어 및 공항 관계기관과의 1차 현지 사업 협력 미팅 진행.',
  },
  {
    id: 'activity-02',
    type: 'ACTIVITIES',
    title: '2차 베트남 방문 및 현장 조사',
    titleEn: '2ND VIETNAM BUSINESS VISIT',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: softwareCmsMonitorImg,
    description: '하노이 주요 거점 및 노이바이국제공항 LED 입지 현장 실사 및 기술 조사.',
  },
  {
    id: 'activity-03',
    type: 'ACTIVITIES',
    title: '민항회장 한국 방문',
    titleEn: 'KOREA BUSINESS VISIT',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: doohOutdoorMediaImg,
    description: '베트남 민항 대표단 한국 본사 방문 및 국내 공항 LED 미디어 현장 시찰.',
  },
  {
    id: 'activity-04',
    type: 'ACTIVITIES',
    title: 'DISE–MHGROUP 협력 체결',
    titleEn: 'VIETNAM BUSINESS PARTNERSHIP',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: heroLedGlassBg,
    description: '베트남 글로벌 LED 미디어 인프라 사업 추진을 위한 DISE와 MHGROUP 간 상호 협력 체결.',
  },
  {
    id: 'activity-05',
    type: 'ACTIVITIES',
    title: 'DISE–MHGROUP 미팅',
    titleEn: 'VIETNAM BUSINESS MEETING',
    category: 'BUSINESS ACTIVITIES',
    categoryEn: 'BUSINESS ACTIVITIES',
    image: inspireResortImg,
    description: '베트남 현지 미디어 운영 및 CMS 시스템 구축을 위한 세부 사업 실행 계획 논의.',
  },
];

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onOpenAdminGallery,
}) => {
  const [activeMediaFilter, setActiveMediaFilter] = useState<'ALL' | 'LED MEDIA' | 'DID'>('ALL');
  const [selectedMediaProjectIndex, setSelectedMediaProjectIndex] = useState<number | null>(null);
  const [selectedGlobalItemIndex, setSelectedGlobalItemIndex] = useState<number | null>(null);

  const filteredMediaProjects = mediaProjects.filter((item) => {
    if (activeMediaFilter === 'ALL') return true;
    return item.category === activeMediaFilter;
  });

  // Modal keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMediaProjectIndex !== null) {
        if (e.key === 'Escape') setSelectedMediaProjectIndex(null);
        if (e.key === 'ArrowLeft') {
          setSelectedMediaProjectIndex((prev) =>
            prev === null ? null : (prev - 1 + filteredMediaProjects.length) % filteredMediaProjects.length
          );
        }
        if (e.key === 'ArrowRight') {
          setSelectedMediaProjectIndex((prev) =>
            prev === null ? null : (prev + 1) % filteredMediaProjects.length
          );
        }
      } else if (selectedGlobalItemIndex !== null) {
        if (e.key === 'Escape') setSelectedGlobalItemIndex(null);
        if (e.key === 'ArrowLeft') {
          setSelectedGlobalItemIndex((prev) =>
            prev === null ? null : (prev - 1 + globalBusinessItems.length) % globalBusinessItems.length
          );
        }
        if (e.key === 'ArrowRight') {
          setSelectedGlobalItemIndex((prev) =>
            prev === null ? null : (prev + 1) % globalBusinessItems.length
          );
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMediaProjectIndex, selectedGlobalItemIndex, filteredMediaProjects.length]);

  const selectedMediaModal = selectedMediaProjectIndex !== null ? filteredMediaProjects[selectedMediaProjectIndex] : null;
  const selectedGlobalModal = selectedGlobalItemIndex !== null ? globalBusinessItems[selectedGlobalItemIndex] : null;

  return (
    <div className="bg-white text-[#222831] font-sans antialiased min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">

        {/* 1. MEDIA PROJECTS SECTION */}
        <section className="space-y-8">
          {/* Header */}
          <div className="border-b border-[#D9DEE3] pb-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#294A63] block">
                MEDIA PROJECTS
              </span>
              {onOpenAdminGallery && (
                <button
                  onClick={onOpenAdminGallery}
                  className="text-xs font-mono text-[#66717C] hover:text-[#294A63] transition-colors border-b border-[#D9DEE3] pb-0.5 cursor-pointer"
                >
                  ADMIN GALLERY EDIT
                </button>
              )}
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#222831] tracking-tight">
              주요 미디어 구축 프로젝트
            </h1>
            <p className="text-sm sm:text-base text-[#66717C] font-normal leading-relaxed pt-1">
              공간과 운영 목적에 맞춰 구축한 주요 LED 미디어 및 DID 프로젝트입니다.
            </p>
          </div>

          {/* Filter Tabs (ALL / LED MEDIA / DID) */}
          <div className="flex items-center gap-6 border-b border-[#D9DEE3] pb-3 overflow-x-auto">
            {(['ALL', 'LED MEDIA', 'DID'] as const).map((filter) => {
              const isActive = activeMediaFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveMediaFilter(filter)}
                  className={`text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-colors relative pb-3 cursor-pointer whitespace-nowrap ${
                    isActive ? 'text-[#294A63]' : 'text-[#66717C] hover:text-[#222831]'
                  }`}
                >
                  <span>{filter}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#294A63]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 2-Column Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {filteredMediaProjects.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedMediaProjectIndex(idx)}
                className="group cursor-pointer space-y-2.5 pb-4 border-b border-[#E2E8F0]"
              >
                {/* Image Container (3:2 Aspect Ratio, No Box Frame) */}
                <div className="relative aspect-[3/2] overflow-hidden rounded-[2px] bg-[#F5F6F7] w-full">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                  />
                </div>

                {/* Text Info Below Image */}
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#222831] group-hover:text-[#294A63] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#66717C]">
                    {item.titleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. GLOBAL BUSINESS GALLERY & BUSINESS ACTIVITIES */}
        <section className="space-y-8 pt-6 border-t border-[#D9DEE3]">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#294A63] block">
              GLOBAL BUSINESS GALLERY
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#222831] tracking-tight">
              글로벌 사업 및 주요 활동
            </h2>
            <p className="text-sm text-[#66717C]">
              아시아 거점 도시를 중심으로 추진 중인 옥외 미디어 사업과 현지 파트너십 활동입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalBusinessItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedGlobalItemIndex(idx)}
                className="group cursor-pointer space-y-2.5 pb-4 border-b border-[#E2E8F0]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-[#F5F6F7] w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                  />
                  {item.status && (
                    <div className="absolute top-2.5 left-2.5">
                      {item.status === 'CANDIDATE SITE' ? (
                        <span className="bg-black/80 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wider">
                          CANDIDATE SITE
                        </span>
                      ) : (
                        <span className="bg-[#D97706] text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wider">
                          IN PROGRESS
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                    {item.categoryEn}
                  </span>
                  <h3 className="text-base font-bold text-[#222831] group-hover:text-[#294A63] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#66717C]">
                    {item.titleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Lightbox Modal for Media Projects */}
      {selectedMediaModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#D9DEE3] rounded-[2px] max-w-3xl w-full p-6 relative space-y-4">
            <button
              onClick={() => setSelectedMediaProjectIndex(null)}
              className="absolute top-4 right-4 p-2 text-[#66717C] hover:text-[#222831] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[3/2] overflow-hidden bg-[#F5F6F7] rounded-[2px] w-full">
              <img
                src={selectedMediaModal.image}
                alt={selectedMediaModal.alt}
                className="w-full h-full object-cover object-center"
              />
              <button
                onClick={() =>
                  setSelectedMediaProjectIndex((prev) =>
                    prev === null ? null : (prev - 1 + filteredMediaProjects.length) % filteredMediaProjects.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-[2px] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setSelectedMediaProjectIndex((prev) =>
                    prev === null ? null : (prev + 1) % filteredMediaProjects.length
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-[2px] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1 pt-1">
              <span className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                {selectedMediaModal.category}
              </span>
              <h3 className="text-xl font-bold text-[#222831]">
                {selectedMediaModal.title}
              </h3>
              <p className="text-xs font-mono text-[#66717C]">
                {selectedMediaModal.titleEn}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] flex justify-between items-center">
              <span className="text-[11px] text-[#66717C]">
                {selectedMediaProjectIndex! + 1} / {filteredMediaProjects.length}
              </span>
              <button
                onClick={() => setSelectedMediaProjectIndex(null)}
                className="px-4 py-1.5 bg-[#18324A] text-white text-xs font-bold rounded-[2px] hover:bg-[#294A63] transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Global Business Items */}
      {selectedGlobalModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#D9DEE3] rounded-[2px] max-w-3xl w-full p-6 relative space-y-4">
            <button
              onClick={() => setSelectedGlobalItemIndex(null)}
              className="absolute top-4 right-4 p-2 text-[#66717C] hover:text-[#222831] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F6F7] rounded-[2px] w-full">
              <img
                src={selectedGlobalModal.image}
                alt={selectedGlobalModal.title}
                className="w-full h-full object-cover object-center"
              />
              <button
                onClick={() =>
                  setSelectedGlobalItemIndex((prev) =>
                    prev === null ? null : (prev - 1 + globalBusinessItems.length) % globalBusinessItems.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-[2px] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setSelectedGlobalItemIndex((prev) =>
                    prev === null ? null : (prev + 1) % globalBusinessItems.length
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-[2px] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1 pt-1">
              <span className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                {selectedGlobalModal.categoryEn}
              </span>
              <h3 className="text-xl font-bold text-[#222831]">
                {selectedGlobalModal.title}
              </h3>
              <p className="text-xs font-mono text-[#66717C]">
                {selectedGlobalModal.titleEn}
              </p>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed pt-2 border-t border-[#E2E8F0]">
                {selectedGlobalModal.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] flex justify-between items-center">
              <span className="text-[11px] text-[#66717C]">
                {selectedGlobalItemIndex! + 1} / {globalBusinessItems.length}
              </span>
              <button
                onClick={() => setSelectedGlobalItemIndex(null)}
                className="px-4 py-1.5 bg-[#18324A] text-white text-xs font-bold rounded-[2px] hover:bg-[#294A63] transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
