import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  getPublishedProjectGalleryItems,
  globalBusinessItems,
  ProjectGalleryItem,
} from '../data/projectGallery';

interface PortfolioGalleryProps {
  currentLang: Language;
  portfolio?: any[];
  onOpenAdminGallery?: () => void;
  initialCategory?: string;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  currentLang,
  onOpenAdminGallery,
}) => {
  const [activeMediaFilter, setActiveMediaFilter] = useState<'ALL' | 'LED MEDIA' | 'DID'>('ALL');
  const [selectedMediaProjectIndex, setSelectedMediaProjectIndex] = useState<number | null>(null);
  const [selectedGlobalItemIndex, setSelectedGlobalItemIndex] = useState<number | null>(null);

  // Load published gallery items from src/data/projectGallery.ts sorted by sortOrder ascending
  const publishedProjects: ProjectGalleryItem[] = getPublishedProjectGalleryItems();

  const filteredMediaProjects = publishedProjects.filter((item) => {
    if (activeMediaFilter === 'ALL') return true;
    return item.category === activeMediaFilter;
  });

  // Admin button visibility condition: Development environment OR VITE_ENABLE_GALLERY_ADMIN === "true"
  const showAdminButton =
    import.meta.env.DEV || import.meta.env.VITE_ENABLE_GALLERY_ADMIN === 'true';

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

  const selectedMediaModal =
    selectedMediaProjectIndex !== null ? filteredMediaProjects[selectedMediaProjectIndex] : null;
  const selectedGlobalModal =
    selectedGlobalItemIndex !== null ? globalBusinessItems[selectedGlobalItemIndex] : null;

  return (
    <div className="bg-white text-[#222831] font-sans antialiased min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">

        {/* 1. MEDIA PROJECTS SECTION */}
        <section className="space-y-8">
          {/* Header */}
          <div className="border-b border-[#D9DEE3] pb-6 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#294A63] block">
              MEDIA PROJECTS
            </span>
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
            {filteredMediaProjects.map((item, idx) => {
              const title = currentLang === 'en' ? item.titleEn : item.titleKo;
              const alt = currentLang === 'en' ? item.imageAltEn : item.imageAltKo;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedMediaProjectIndex(idx)}
                  className="group cursor-pointer space-y-2.5 pb-4 border-b border-[#E2E8F0]"
                >
                  {/* Image Container (3:2 Aspect Ratio, No Box Frame) */}
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[2px] bg-[#F5F6F7] w-full">
                    <img
                      src={item.image}
                      alt={alt}
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
                      {title}
                    </h3>
                    <p className="text-xs font-mono text-[#66717C]">
                      {item.titleEn}
                    </p>
                  </div>
                </div>
              );
            })}
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

        {/* 3. DEVELOPER ADMIN BUTTON REGION (Positioned at bottom of gallery, right above Footer) */}
        {/* TODO: Currently gallery data is stored in src/data/projectGallery.ts and client state/localStorage. Connect with real backend CMS (/admin/gallery) for permanent database persistence in production. */}
        {showAdminButton && onOpenAdminGallery && (
          <div className="pt-8 border-t border-[#E2E8F0] flex justify-center items-center">
            <button
              onClick={onOpenAdminGallery}
              className="text-[11px] font-mono text-[#94A3B8] hover:text-[#64748B] transition-colors cursor-pointer bg-transparent border-none p-0 tracking-wider uppercase"
            >
              ADMIN GALLERY EDIT — DEVELOPMENT ONLY
            </button>
          </div>
        )}

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
                alt={currentLang === 'en' ? selectedMediaModal.imageAltEn : selectedMediaModal.imageAltKo}
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
                {currentLang === 'en' ? selectedMediaModal.titleEn : selectedMediaModal.titleKo}
              </h3>
              <p className="text-xs font-mono text-[#66717C]">
                {selectedMediaModal.titleEn}
              </p>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed pt-2 border-t border-[#E2E8F0]">
                {currentLang === 'en' ? selectedMediaModal.descriptionEn : selectedMediaModal.descriptionKo}
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
