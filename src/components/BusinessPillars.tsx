import React, { useState, useEffect } from 'react';
import { Cpu, Layers, BrainCircuit, Globe, CheckCircle, Sparkles } from 'lucide-react';
import { Language, BusinessPillar, AmsitTech } from '../types';
import { AmsitTechSection } from './AmsitTechSection';

export type ProductsSubTab = 'products' | 'tech';

interface BusinessPillarsProps {
  currentLang: Language;
  pillars: BusinessPillar[];
  techs?: AmsitTech[];
  selectedSubTab?: string;
  onSelectSubTab?: (tab: ProductsSubTab) => void;
}

export const BusinessPillars: React.FC<BusinessPillarsProps> = ({
  currentLang,
  pillars,
  techs = [],
  selectedSubTab = 'products',
  onSelectSubTab,
}) => {
  const [activeTab, setActiveTab] = useState<ProductsSubTab>(
    selectedSubTab === 'tech' ? 'tech' : 'products'
  );

  useEffect(() => {
    if (selectedSubTab === 'tech' || selectedSubTab === 'products') {
      setActiveTab(selectedSubTab as ProductsSubTab);
    }
  }, [selectedSubTab]);

  const handleTabChange = (tab: ProductsSubTab) => {
    setActiveTab(tab);
    if (onSelectSubTab) {
      onSelectSubTab(tab);
    }
  };

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

  const productTabs: { id: ProductsSubTab; label: string }[] = [
    { id: 'products', label: currentLang === 'ko' ? '주요 제품 라인업' : 'Main Product Lineup' },
    { id: 'tech', label: currentLang === 'ko' ? 'AMSIT 5대 핵심기술' : 'AMSIT 5 Core Tech' },
  ];

  return (
    <section id="pillars" className="py-10 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Panel */}
        <div className="w-full">
          {/* 1. Products Lineup View */}
            {/* 1. Products Lineup View */}
            {activeTab === 'products' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-left mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {currentLang === 'ko' ? '주요 제품 라인업' : 'Main Product Lineup'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    {currentLang === 'ko'
                      ? '초경량 Aero-Flex 하드웨어부터 MW 36K 제어 솔루션, AI 딥러닝 타겟팅 카메라, 글로벌 DOOH 매체 인프라'
                      : 'From ultra-light Aero-Flex hardware and MW 36K control solutions to AI biometrics and global DOOH media.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pillars.map((p) => {
                    const titleText = p.title[currentLang] || p.title.ko;
                    const subTitleText = p.subTitle[currentLang] || p.subTitle.ko;
                    const descText = p.description[currentLang] || p.description.ko;
                    const featuresList = p.features[currentLang] || p.features.ko;
                    const techHighlightText = p.techHighlights[currentLang] || p.techHighlights.ko;

                    return (
                      <div
                        key={p.id}
                        className="rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
                      >
                        <div>
                          {/* Top Image Banner with Overlay */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={p.image}
                              alt={titleText}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                            <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 border border-slate-200 backdrop-blur-md shadow-md">
                              {getIcon(p.iconName)}
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                                {subTitleText}
                              </span>
                              <h3 className="text-2xl font-bold text-white mt-0.5">{titleText}</h3>
                            </div>
                          </div>

                          <div className="p-6">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                              {descText}
                            </p>

                            <div className="space-y-2.5 mb-6">
                              {featuresList.map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                          <span>Key Tech:</span>
                          <span className="text-blue-700 font-bold">{techHighlightText}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. AMSIT Core Technology View */}
            {activeTab === 'tech' && (
              <div className="animate-fadeIn">
                <AmsitTechSection currentLang={currentLang} techs={techs} />
              </div>
            )}
        </div>
      </div>
    </section>
  );
};
