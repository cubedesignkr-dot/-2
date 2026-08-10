import React, { useState } from 'react';
import { PortfolioItem, Language } from '../types';
import { ArrowRight, Image as ImageIcon, MapPin, ExternalLink } from 'lucide-react';
import { t } from '../utils/translations';

interface PortfolioSliderProps {
  currentLang: Language;
  portfolio: PortfolioItem[];
  onNavigateToGallery: () => void;
}

export const PortfolioSlider: React.FC<PortfolioSliderProps> = ({
  currentLang,
  portfolio,
  onNavigateToGallery,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!portfolio || portfolio.length === 0) return null;

  // Duplicate items to ensure seamless infinite looping marquee
  const sliderItems = [...portfolio, ...portfolio, ...portfolio];

  return (
    <section className="py-28 sm:py-36 bg-slate-900 text-white relative overflow-hidden">
      {/* Top & Bottom Smooth Transition Gradients (Longer & Blending seamlessly into bg-slate-50) */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 md:h-52 bg-gradient-to-b from-slate-50 via-slate-900/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 md:h-52 bg-gradient-to-t from-slate-50 via-slate-900/70 to-transparent z-10 pointer-events-none" />

      {/* Background Subtle Grid Effect */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/90 border border-blue-600/80 text-blue-300 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
              <ImageIcon className="w-4 h-4 text-blue-400" />
              REFERENCE
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight [word-break:keep-all] break-keep leading-tight">
              {t('slider_title', currentLang)}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg md:text-xl mt-3 font-normal [word-break:keep-all] break-keep max-w-3xl">
              {t('slider_subtitle', currentLang)}
            </p>
          </div>

          <button
            onClick={onNavigateToGallery}
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-base font-bold transition-all shadow-lg hover:shadow-blue-900/50 shrink-0 group cursor-pointer self-start md:self-auto border border-blue-700/60"
          >
            <span>{t('slider_view_gallery', currentLang)}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Smooth Continuous Marquee Container */}
      <div 
        className="relative w-full overflow-hidden py-6 z-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left and Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 md:w-60 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 md:w-60 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div 
          className="flex gap-8 w-max animate-marquee"
          style={{
            animationPlayState: isHovered ? 'paused' : 'running',
            animationDuration: `${Math.max(30, portfolio.length * 10)}s`,
          }}
        >
          {sliderItems.map((item, index) => {
            const titleText = typeof item.title === 'object' ? (item.title[currentLang] || item.title.ko) : item.title;
            const locationText = typeof item.location === 'object' ? (item.location?.[currentLang] || item.location?.ko || '') : (item.location || '');
            const specsText = typeof item.specs === 'object' ? (item.specs?.[currentLang] || item.specs?.ko || '') : (item.specs || '');
            const categoryBadgeText =
              typeof item.categoryLabel === 'object' && item.categoryLabel?.[currentLang]
                ? item.categoryLabel[currentLang]
                : item.category === 'global'
                ? t('category_global', currentLang)
                : t('category_domestic', currentLang);

            return (
              <div
                key={`${item.id}-${index}`}
                onClick={onNavigateToGallery}
                className="w-80 sm:w-[420px] md:w-[480px] shrink-0 bg-slate-800/90 rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl hover:border-blue-500 hover:shadow-blue-900/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Image Box (Enlarged Height) */}
                <div className="relative h-60 sm:h-72 md:h-80 overflow-hidden bg-slate-950">
                  <img
                    src={item.imageUrl}
                    alt={titleText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                  {/* Badge & Year */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1.5 rounded-lg bg-blue-950/90 border border-blue-700/80 text-blue-200 text-xs sm:text-sm font-bold backdrop-blur-md shadow-md">
                      {categoryBadgeText}
                    </span>
                    {item.year && (
                      <span className="px-3 py-1 rounded-lg bg-slate-900/90 text-slate-200 text-xs sm:text-sm font-mono backdrop-blur-md shadow-md">
                        {item.year}
                      </span>
                    )}
                  </div>

                  {/* Hover icon indicator */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Details (Enlarged Padding & Typography) */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white group-hover:text-blue-300 transition-colors [word-break:keep-all] break-keep line-clamp-2 leading-snug">
                      {titleText}
                    </h3>
                    
                    {locationText && (
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mt-3 font-medium">
                        <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                        <span className="truncate">{locationText}</span>
                      </div>
                    )}
                  </div>

                  {/* Specs footer */}
                  {specsText && (
                    <div className="mt-5 pt-4 border-t border-slate-700/80 text-xs sm:text-sm font-mono text-slate-300 flex items-center justify-between">
                      <span className="truncate text-slate-300 font-medium">{specsText}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
