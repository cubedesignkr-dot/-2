import React, { useState, useEffect } from 'react';
import {
  Image as ImageIcon,
  Search,
  MapPin,
  Maximize2,
  X,
  PlusCircle,
} from 'lucide-react';
import { Language, PortfolioItem, GalleryCategory } from '../types';
import { t } from '../utils/translations';

interface PortfolioGalleryProps {
  currentLang: Language;
  portfolio: PortfolioItem[];
  onOpenAdminGallery: () => void;
  initialCategory?: GalleryCategory;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  currentLang,
  portfolio,
  onOpenAdminGallery,
  initialCategory = 'all',
}) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories: { id: GalleryCategory; label: Record<Language, string> }[] = [
    {
      id: 'all',
      label: {
        ko: '전체 보기',
        en: 'All Projects',
        vi: 'Tất Cả Dự Án',
        zh: '全部项目',
        ar: 'جميع المشاريع',
      },
    },
    {
      id: 'airport',
      label: {
        ko: '공공 · 공항 랜드마크',
        en: 'Public & Airport',
        vi: 'Công Cộng & Sân Bay',
        zh: '公共 · 机场地标',
        ar: 'المطارات والمرافق',
      },
    },
    {
      id: 'commercial',
      label: {
        ko: '상업 · 엔터테인먼트',
        en: 'Commercial & Ent',
        vi: 'Thương Mại & Giải Trí',
        zh: '商业 · 娱乐地标',
        ar: 'المراكز التجارية',
      },
    },
    {
      id: 'retail',
      label: {
        ko: '리테일 · B2B',
        en: 'Retail & B2B',
        vi: 'Bán Lẻ & B2B',
        zh: '零售 · B2B',
        ar: 'شبكات التجزئة',
      },
    },
    {
      id: 'global',
      label: {
        ko: '글로벌 신사업',
        en: 'Global Expansion',
        vi: 'Dự Án Toàn Cầu',
        zh: '全球拓展',
        ar: 'التوسع العالمي',
      },
    },
  ];

  // Filter Logic
  const filteredPortfolio = portfolio.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const titleText = (typeof item.title === 'object' ? (item.title[currentLang] || item.title.ko || '') : (item.title || '')).toLowerCase();
    const locationText = (typeof item.location === 'object' ? (item.location[currentLang] || item.location.ko || '') : (item.location || '')).toLowerCase();
    const specsText = (typeof item.specs === 'object' ? (item.specs[currentLang] || item.specs.ko || '') : (item.specs || '')).toLowerCase();
    const query = searchQuery.toLowerCase().trim();

    const matchesQuery =
      !query ||
      titleText.includes(query) ||
      locationText.includes(query) ||
      specsText.includes(query);

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="portfolio" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
              Representative Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              {currentLang === 'ko' ? '갤러리 (Gallery & Portfolio)' : 'Gallery & Portfolio'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              {currentLang === 'ko'
                ? '공공·공항 랜드마크부터 글로벌 독점 매체, B2B 3,000+ 네트워크 구축 현장'
                : 'From airport landmarks to global media channels and 3,000+ B2B networks.'}
            </p>
          </div>

          <button
            onClick={onOpenAdminGallery}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 transition-all cursor-pointer shadow-sm shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-blue-600" />
            <span>{currentLang === 'ko' ? '사진 업로드 / 갤러리 수정' : 'Upload / Edit Gallery'}</span>
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-3 bg-white rounded-2xl border border-slate-200 mb-10 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            {categories.map((cat) => {
              const labelText = cat.label[currentLang] || cat.label.ko;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {labelText}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'ko' ? '현장명, 위치, 스펙 검색...' : 'Search title, location, specs...'}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredPortfolio.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <ImageIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-500 font-medium text-sm">
              {currentLang === 'ko' ? '검색 조건에 맞는 프로젝트가 없습니다.' : 'No projects match your search.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-100 text-xs text-slate-700 hover:bg-slate-200"
            >
              {currentLang === 'ko' ? '필터 초기화' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => {
              const titleText = typeof item.title === 'object' ? (item.title[currentLang] || item.title.ko || '') : (item.title || '');
              const categoryLabelText = typeof item.categoryLabel === 'object' ? (item.categoryLabel[currentLang] || item.categoryLabel.ko || '') : (item.categoryLabel || '');
              const locationText = typeof item.location === 'object' ? (item.location[currentLang] || item.location.ko || '') : (item.location || '');
              const specsText = typeof item.specs === 'object' ? (item.specs[currentLang] || item.specs.ko || '') : (item.specs || '');
              const descText = typeof item.description === 'object' ? (item.description[currentLang] || item.description.ko || '') : (item.description || '');

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-blue-500 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container with Hover Zoom */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={item.imageUrl}
                        alt={titleText}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>

                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-white/90 border border-slate-200 text-[10px] font-bold text-blue-700 backdrop-blur-md shadow-sm">
                          {categoryLabelText}
                        </span>
                        {item.isFeatured && (
                          <span className="px-2.5 py-1 rounded-md bg-rose-600 text-[10px] font-bold text-white shadow-sm">
                            FEATURED
                          </span>
                        )}
                      </div>

                      <button className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 border border-slate-200 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                      {item.highlightBadge && (
                        <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-white bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur-sm truncate">
                          {item.highlightBadge}
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                        {titleText}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="truncate">{locationText}</span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal mb-4">
                        {descText}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{item.year}</span>
                    <span className="text-blue-700 font-bold truncate max-w-[200px]">{specsText}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Lightbox Modal for Detailed View */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-900">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 border border-slate-200 z-10 cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video bg-black overflow-hidden rounded-t-3xl">
                <img
                  src={selectedItem.imageUrl}
                  alt={typeof selectedItem.title === 'object' ? (selectedItem.title[currentLang] || selectedItem.title.ko) : selectedItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold">
                    {typeof selectedItem.categoryLabel === 'object' ? (selectedItem.categoryLabel[currentLang] || selectedItem.categoryLabel.ko) : selectedItem.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{selectedItem.year}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  {typeof selectedItem.title === 'object' ? (selectedItem.title[currentLang] || selectedItem.title.ko) : selectedItem.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>{typeof selectedItem.location === 'object' ? (selectedItem.location[currentLang] || selectedItem.location.ko) : selectedItem.location}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 space-y-1">
                  <div className="text-xs font-mono text-slate-500 uppercase font-bold">System Specs & Hardware:</div>
                  <div className="text-xs font-mono text-blue-700 font-bold">
                    {typeof selectedItem.specs === 'object' ? (selectedItem.specs[currentLang] || selectedItem.specs.ko) : selectedItem.specs}
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-normal mb-8">
                  {typeof selectedItem.description === 'object' ? (selectedItem.description[currentLang] || selectedItem.description.ko) : selectedItem.description}
                </p>

                <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
                  >
                    {t('close', currentLang)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
