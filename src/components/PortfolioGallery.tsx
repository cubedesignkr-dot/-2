import React, { useState, useEffect, useMemo } from 'react';
import { Language } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  getPublishedProjectGalleryItems,
  globalBusinessItems,
} from '../data/projectGallery';

interface PortfolioGalleryProps {
  currentLang: Language;
  portfolio?: any[];
  onOpenAdminGallery?: () => void;
  initialCategory?: string;
}

export interface UnifiedGalleryItem {
  id: string;
  category: 'media' | 'global';
  categoryLabelKo: string;
  categoryLabelEn: string;
  titleKo: string;
  titleEn: string;
  locationKo: string;
  locationEn: string;
  descriptionKo: string;
  descriptionEn: string;
  date?: string;
  status?: string;
  imageType?: string;
  images: Array<{
    src: string;
    altKo: string;
    altEn: string;
    captionKo?: string;
    captionEn?: string;
    objectPosition?: string;
  }>;
}

const TAB_ITEMS: { id: 'all' | 'media' | 'global'; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'media', label: 'MEDIA PROJECTS' },
  { id: 'global', label: 'GLOBAL BUSINESS GALLERY' },
];

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  currentLang,
  onOpenAdminGallery,
  initialCategory = 'all',
}) => {
  // Normalize initial category parameter to allowed values
  const getNormalizedCategory = (cat?: string): 'all' | 'media' | 'global' => {
    if (cat === 'media') return 'media';
    if (cat === 'global') return 'global';
    return 'all';
  };

  const [activeCategory, setActiveCategory] = useState<'all' | 'media' | 'global'>(() =>
    getNormalizedCategory(initialCategory)
  );

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(getNormalizedCategory(initialCategory));
    }
  }, [initialCategory]);

  const [selectedProject, setSelectedProject] = useState<UnifiedGalleryItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Build unified items list combining domestic media projects and global business gallery
  const allGalleryItems = useMemo<UnifiedGalleryItem[]>(() => {
    const publishedProjects = getPublishedProjectGalleryItems();

    const mediaItems: UnifiedGalleryItem[] = publishedProjects.map((item) => ({
      id: item.id,
      category: 'media',
      categoryLabelKo: '국내 미디어 프로젝트',
      categoryLabelEn: 'MEDIA PROJECT',
      titleKo: item.titleKo,
      titleEn: item.titleEn,
      locationKo: item.locationKo,
      locationEn: item.locationEn,
      descriptionKo: item.descriptionKo,
      descriptionEn: item.descriptionEn,
      status: item.status,
      images: [
        {
          src: item.image,
          altKo: item.imageAltKo,
          altEn: item.imageAltEn,
        },
      ],
    }));

    const globalItems: UnifiedGalleryItem[] = globalBusinessItems.map((item) => ({
      id: item.id,
      category: 'global',
      categoryLabelKo: '글로벌 사업 및 활동',
      categoryLabelEn: item.categoryEn || item.category || 'GLOBAL BUSINESS',
      titleKo: item.titleKo,
      titleEn: item.titleEn,
      locationKo: item.locationKo,
      locationEn: item.locationEn,
      descriptionKo: item.descriptionKo,
      descriptionEn: item.descriptionEn,
      date: item.date,
      status: item.status,
      imageType: item.imageType,
      images: item.images.map((img) => ({
        src: img.src,
        altKo: img.altKo,
        altEn: img.altEn,
        captionKo: img.captionKo,
        captionEn: img.captionEn,
        objectPosition: img.objectPosition,
      })),
    }));

    return [...mediaItems, ...globalItems];
  }, []);

  // Filter items based on activeCategory
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return allGalleryItems;
    return allGalleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, allGalleryItems]);

  // Derived project images array for the currently selected modal project
  const projectImages = useMemo(() => {
    if (!selectedProject) return [];
    return selectedProject.images && selectedProject.images.length > 0
      ? selectedProject.images
      : [];
  }, [selectedProject]);

  // Handle Tab Switch without page scroll jump
  const handleTabClick = (category: 'all' | 'media' | 'global') => {
    setActiveCategory(category);
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  // Open Modal
  const handleOpenModal = (item: UnifiedGalleryItem) => {
    setSelectedProject(item);
    setSelectedImageIndex(0);
  };

  // Modal Image Navigation (STRICTLY WITHIN SELECTED PROJECT)
  const handleNext = () => {
    if (!selectedProject || projectImages.length <= 1) return;
    setSelectedImageIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!selectedProject || projectImages.length <= 1) return;
    setSelectedImageIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (projectImages.length <= 1) return;
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || projectImages.length <= 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === 'Escape') setSelectedProject(null);
        if (projectImages.length > 1) {
          if (e.key === 'ArrowLeft') handlePrev();
          if (e.key === 'ArrowRight') handleNext();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, projectImages.length, handleNext, handlePrev]);

  const showAdminButton =
    import.meta.env.DEV || import.meta.env.VITE_ENABLE_GALLERY_ADMIN === 'true';

  return (
    <div className="bg-white text-[#222831] font-sans antialiased min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 sm:space-y-12">

        {/* 1. SECTION HEADER */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#294A63] block">
            PROJECTS
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-[#222831] tracking-tight">
            주요 프로젝트 및 글로벌 갤러리
          </h1>
          <p className="text-sm sm:text-base text-[#66717C] font-normal leading-relaxed">
            다이즈하이미디어가 국내외 공간에 구축·운영해 온 주요 미디어 프로젝트와 글로벌 사업 현황입니다.
          </p>
        </div>

        {/* 2. FILTER TABS (ALL | MEDIA PROJECTS | GLOBAL BUSINESS GALLERY) */}
        <div className="border-b border-[#D9DEE3]">
          <div className="flex items-center gap-8 sm:gap-10 lg:gap-12 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1">
            {TAB_ITEMS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className={`text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-colors relative pb-3 cursor-pointer whitespace-nowrap ${
                    isActive ? 'text-[#18324A]' : 'text-[#64748B] hover:text-[#222831]'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#18324A]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. UNIFIED GALLERY GRID (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const title = currentLang === 'en' ? item.titleEn : item.titleKo;
            const location = currentLang === 'en' ? item.locationEn : item.locationKo;
            const repImage = item.images[0];
            const alt = currentLang === 'en' ? repImage?.altEn : repImage?.altKo;
            const objectPos = repImage?.objectPosition || 'object-center';

            return (
              <div
                key={item.id}
                onClick={() => handleOpenModal(item)}
                className="group cursor-pointer flex flex-col h-full bg-white border border-[#E2E8F0] rounded-[2px] overflow-hidden hover:border-[#18324A]/40 transition-colors"
              >
                {/* Image Container with 3:2 Aspect Ratio */}
                <div className="relative aspect-[3/2] overflow-hidden bg-[#F8FAFC] w-full border-b border-[#E2E8F0]">
                  <img
                    src={repImage?.src}
                    alt={alt || title}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover ${objectPos} group-hover:scale-[1.02] transition-transform duration-300 ease-out`}
                  />

                  {/* Status & Concept Badges (Only on confirmed items) */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    {item.status === 'IN PROGRESS' && (
                      <span className="bg-[#D97706] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-[2px] uppercase tracking-wider shadow-xs">
                        IN PROGRESS
                      </span>
                    )}
                    {item.imageType === 'CONCEPT IMAGE' && (
                      <span className="bg-slate-900/90 text-amber-300 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-[2px] uppercase tracking-wider backdrop-blur-xs border border-amber-400/30 shadow-xs">
                        CONCEPT IMAGE
                      </span>
                    )}
                  </div>

                  {/* Multi-Photo Indicator Badge */}
                  {item.images.length > 1 && (
                    <div className="absolute bottom-2.5 right-2.5 bg-black/75 text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded-[2px] tracking-wider backdrop-blur-xs border border-white/20">
                      1 / {item.images.length} PHOTOS
                    </div>
                  )}
                </div>

                {/* Card Information */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#294A63] uppercase tracking-wider">
                        {item.category === 'media' ? 'MEDIA PROJECT' : (item.categoryLabelEn || 'GLOBAL BUSINESS')}
                      </span>
                      {item.date && (
                        <span className="text-[11px] font-mono text-[#66717C]">
                          · {item.date}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#222831] group-hover:text-[#18324A] transition-colors tracking-tight line-clamp-1">
                      {title}
                    </h3>

                    <p className="text-xs font-mono text-[#66717C] line-clamp-1">
                      {location} · {item.titleEn}
                    </p>

                    <p className="text-xs text-[#66717C] font-normal leading-relaxed line-clamp-2 pt-1">
                      {currentLang === 'en' ? item.descriptionEn : item.descriptionKo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. DEVELOPER ADMIN BUTTON REGION */}
        {showAdminButton && onOpenAdminGallery && (
          <div className="pt-8 border-t border-[#E2E8F0] flex justify-center items-center">
            <button
              type="button"
              onClick={onOpenAdminGallery}
              className="text-[11px] font-mono text-[#94A3B8] hover:text-[#64748B] transition-colors cursor-pointer bg-transparent border-none p-0 tracking-wider uppercase"
            >
              ADMIN GALLERY EDIT — DEVELOPMENT ONLY
            </button>
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white border border-[#D9DEE3] rounded-[2px] max-w-4xl w-full p-4 sm:p-6 relative space-y-4 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-[#66717C] hover:text-[#222831] transition-colors cursor-pointer z-20 bg-white/80 rounded-full sm:bg-transparent"
              aria-label="상세 이미지 닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Active Image Box */}
            {(() => {
              const activeImg = projectImages[selectedImageIndex] || projectImages[0];
              const activeAlt = currentLang === 'en' ? activeImg?.altEn : activeImg?.altKo;
              const activeCaption = currentLang === 'en' ? activeImg?.captionEn : activeImg?.captionKo;
              const activePos = activeImg?.objectPosition || 'object-center';
              const isMultiImage = projectImages.length > 1;

              return (
                <div className="space-y-3">
                  <div
                    className="relative aspect-[3/2] sm:aspect-[16/10] overflow-hidden bg-[#0F172A] rounded-[2px] w-full touch-pan-y"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <img
                      src={activeImg?.src}
                      alt={activeAlt || selectedProject.titleKo}
                      className={`w-full h-full object-cover ${activePos}`}
                    />

                    {/* Status & Concept Image Overlay Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      {selectedProject.status === 'IN PROGRESS' && (
                        <span className="bg-[#D97706] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-[2px] uppercase tracking-wider shadow-xs">
                          IN PROGRESS
                        </span>
                      )}
                      {selectedProject.imageType === 'CONCEPT IMAGE' && (
                        <span className="bg-slate-900/90 text-amber-300 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-[2px] uppercase tracking-wider backdrop-blur-xs border border-amber-400/30 shadow-xs">
                          CONCEPT IMAGE
                        </span>
                      )}
                    </div>

                    {/* Photo Counter Tag (Only if multi-image) */}
                    {isMultiImage && (
                      <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[11px] font-mono font-semibold px-3 py-1 rounded-[2px] tracking-wider backdrop-blur-xs border border-white/20">
                        {selectedImageIndex + 1} / {projectImages.length} PHOTOS
                      </div>
                    )}

                    {/* Left/Right Navigation Arrows (Only if multi-image) */}
                    {isMultiImage && (
                      <>
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-[2px] transition-colors cursor-pointer border border-white/10"
                          aria-label="이전 이미지"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-[2px] transition-colors cursor-pointer border border-white/10"
                          aria-label="다음 이미지"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Row if Multiple Images */}
                  {isMultiImage && (
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {projectImages.map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedImageIndex(i)}
                          className={`relative w-16 h-12 rounded-[2px] overflow-hidden border-2 cursor-pointer flex-shrink-0 ${
                            selectedImageIndex === i ? 'border-[#18324A]' : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img.src} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Image Caption */}
                  {activeCaption && (
                    <div className="bg-[#F8FAFC] border-l-2 border-[#18324A] px-3.5 py-2 text-xs font-sans text-[#334155] font-medium flex items-center gap-2">
                      {isMultiImage && (
                        <span className="text-[10px] font-mono text-[#18324A] font-bold uppercase tracking-wider">
                          CAPTION [{selectedImageIndex + 1}/{projectImages.length}] :
                        </span>
                      )}
                      <span>{activeCaption}</span>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Modal Content Header & Text */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-wider">
                  {selectedProject.category === 'media' ? 'MEDIA PROJECT' : (selectedProject.categoryLabelEn || 'GLOBAL BUSINESS')}
                </span>
                {selectedProject.date && (
                  <span className="text-xs font-mono text-[#66717C]">
                    · {selectedProject.date}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#222831]">
                {currentLang === 'en' ? selectedProject.titleEn : selectedProject.titleKo}
              </h3>

              <p className="text-xs font-mono text-[#66717C]">
                {currentLang === 'en' ? selectedProject.locationEn : selectedProject.locationKo} · {selectedProject.titleEn}
              </p>

              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed pt-3 border-t border-[#E2E8F0]">
                {currentLang === 'en' ? selectedProject.descriptionEn : selectedProject.descriptionKo}
              </p>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-[#E2E8F0] flex justify-end items-center text-xs">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-1.5 bg-[#18324A] text-white text-xs font-bold rounded-[2px] hover:bg-[#294A63] transition-colors cursor-pointer"
                aria-label="상세 이미지 닫기"
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
