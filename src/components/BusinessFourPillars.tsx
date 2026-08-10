import React, { useState, useEffect } from 'react';
import { Cpu, Layers, BrainCircuit, Globe, CheckCircle, X, ZoomIn, Sparkles, ChevronRight } from 'lucide-react';
import { Language, BusinessPillar } from '../types';
import { storage } from '../services/storage';
import { t } from '../utils/translations';
import { AmsitTechSection } from './AmsitTechSection';

import imgHardware from '../assets/images/hardware_controller_1785989182277.jpg';
import imgSoftware from '../assets/images/software_cms_monitor_1785989194504.jpg';
import imgAi from '../assets/images/ai_doorlock_face_1785989205164.jpg';
import imgDooh from '../assets/images/dooh_outdoor_media_1785989215681.jpg';

export type TechSubTab = 'fields' | 'core';

interface BusinessFourPillarsProps {
  currentLang: Language;
  pillars?: BusinessPillar[];
  selectedSubTab?: TechSubTab;
}

export const BusinessFourPillars: React.FC<BusinessFourPillarsProps> = ({
  currentLang,
  pillars,
  selectedSubTab = 'fields',
}) => {
  const displayPillars = pillars && pillars.length > 0 ? pillars : storage.getPillars();
  const [selectedProduct, setSelectedProduct] = useState<BusinessPillar | null>(null);

  // Map 1~4 pillar images to corresponding products
  const pillarImages = [imgHardware, imgSoftware, imgAi, imgDooh];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-indigo-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-emerald-600" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-rose-600" />;
      default:
        return <Cpu className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. SUBTAB: 기술분야 (Field of Technology) */}
      {selectedSubTab === 'fields' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Header Title & Description */}
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              {currentLang === 'ko' ? '기술분야' : 'Field of Technology'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2">
              {currentLang === 'ko'
                ? '하드웨어 개발, 소프트웨어 CMS, AI 딥러닝, 미디어 광고 운영까지 통합 밸류체인 구축'
                : 'Establishing an integrated value chain spanning hardware development, CMS software, AI deep learning, and media ad operations.'}
            </p>
          </div>

          {/* Product Cards Grid using images 1~4 matching the 4 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {displayPillars.map((p, idx) => {
              const titleText = p.title[currentLang] || p.title.ko;
              const techHighlightText = p.techHighlights[currentLang] || p.techHighlights.ko;
              const numStr = `0${idx + 1}`;
              const cardImg = pillarImages[idx % pillarImages.length];

              // Concise key summary for each product
              const getShortSummary = (idPillar: string) => {
                if (currentLang === 'ko') {
                  switch (idPillar) {
                    case 'p1': return '초고해상도 멀티비전 구현 하드웨어 콘트롤러';
                    case 'p2': return '대형 디지털 사이니지망 원격 통합 관리 CMS';
                    case 'p3': return 'AI 딥러닝 얼굴인식 스마트 출입통제 솔루션';
                    case 'p4': return '초고휘도 디스플레이 맞춤형 DOOH 미디어';
                    default: return p.description[currentLang] || p.description.ko;
                  }
                } else {
                  switch (idPillar) {
                    case 'p1': return 'High-resolution Multi-screen Video Wall Controller';
                    case 'p2': return 'Enterprise Digital Signage Remote CMS Software';
                    case 'p3': return 'AI Deep Learning Facial Recognition Access System';
                    case 'p4': return 'Customized High-brightness Outdoor DOOH Media';
                    default: return p.description[currentLang] || p.description.ko;
                  }
                }
              };

              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedProduct({ ...p, image: cardImg })}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shadow-sm cursor-pointer relative"
                >
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Header with Index & Title */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-3">
                          <span className="text-3xl sm:text-4xl font-black text-blue-900 font-mono">{numStr}</span>
                          <h4 className="text-2xl sm:text-3xl font-bold text-blue-950 tracking-tight">{titleText}</h4>
                        </div>
                      </div>

                      {/* Concise Summary line */}
                      <p className="text-base sm:text-lg font-bold text-slate-800 mt-3">
                        {getShortSummary(p.id)}
                      </p>
                    </div>

                    {/* Image Box with Images 1~4 - Increased height to 1.5x (h-72 sm:h-80) */}
                    <div className="rounded-xl overflow-hidden border border-slate-200 relative group/img h-72 sm:h-80 shadow-inner bg-slate-900">
                      <img
                        src={cardImg}
                        alt={titleText}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 opacity-90"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-5 sm:p-6">
                        <span className="text-xs sm:text-sm font-black text-white font-mono tracking-wider drop-shadow-md">
                          {techHighlightText}
                        </span>

                        <div className="flex items-center gap-1.5 bg-blue-600/90 text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-lg backdrop-blur-md shadow-md group-hover/img:bg-blue-600 transition-colors">
                          <ZoomIn className="w-4 h-4" />
                          <span>{currentLang === 'ko' ? '자세히 보기' : 'Click for Details'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. SUBTAB: 핵심기술 (Core Technology - AMIST 5대 기술 영역) */}
      {selectedSubTab === 'core' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              {currentLang === 'ko' ? 'AMIST 5대 기술 영역' : 'AMIST 5 Major Technology Areas'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              {currentLang === 'ko'
                ? '(주)다이즈하이미디어가 보유한 5대 핵심 첨단 기술 역량을 소개합니다.'
                : 'Key advanced technological capabilities powered by Dise HiMedia.'}
            </p>
          </div>

          <AmsitTechSection currentLang={currentLang} />
        </div>
      )}

      {/* Product Detail Modal Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop click listener */}
          <div className="absolute inset-0" onClick={() => setSelectedProduct(null)} />

          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-scaleUp">
            {/* Header Image Banner */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900 shrink-0">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title[currentLang] || selectedProduct.title.ko}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition-transform hover:scale-110 cursor-pointer shadow-lg border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Category Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-2 rounded-xl bg-blue-600/90 text-white backdrop-blur-md shadow-md">
                    {getIcon(selectedProduct.iconName)}
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50">
                    {selectedProduct.subTitle[currentLang] || selectedProduct.subTitle.ko}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedProduct.title[currentLang] || selectedProduct.title.ko}
                </h3>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              {/* Product Description */}
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  {currentLang === 'ko' ? '개요 및 설명' : 'Overview & Description'}
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {selectedProduct.description[currentLang] || selectedProduct.description.ko}
                </p>
              </div>

              {/* Major Features */}
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  {currentLang === 'ko' ? '주요 특징 및 핵심 사양' : 'Key Features & Specifications'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(selectedProduct.features[currentLang] || selectedProduct.features.ko).map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-colors"
                    >
                      <div className="p-1 rounded-full bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Tech Badge Box */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-mono font-bold text-slate-500">Key Technology:</span>
                <span className="font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100">
                  {selectedProduct.techHighlights[currentLang] || selectedProduct.techHighlights.ko}
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-6 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                {currentLang === 'ko' ? '닫기' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
