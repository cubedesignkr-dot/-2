import React from 'react';
import {
  Lightbulb,
  TrendingUp,
  ShieldCheck,
  Zap,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { Language } from '../types';

interface BusinessFeasibilitySectionProps {
  currentLang: Language;
}

export const BusinessFeasibilitySection: React.FC<BusinessFeasibilitySectionProps> = () => {
  return (
    <section id="feasibility" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
            LED Media Business Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            LED 매체 사업 개요 및 가이드
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            기초 지식이 없어도 쉽게 이해할 수 있는 옥외 LED 디스플레이 미디어 사업의 핵심 원리와 수익 구조
          </p>
        </div>

        {/* Core LED Business Knowledge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. LED 매체 사업이란?</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              유동인구가 많은 공항, 주요 도심 랜드마크, 대형 건물 외벽에 고화질 LED 전광판을 설치하여 
              기업 및 브랜드 광고를 구좌(Slot) 단위로 판매하고 연간/월간 광고료 수익을 창출하는 디지털 옥외광고(DOOH) 인프라 사업입니다.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. 수익 구조 및 특징</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              한번 구축한 LED 스크린에 20~30개의 광고 구좌를 24시간 자동 분할 송출하므로, 
              재고 재사용 손실 없이 일정한 운영비로 높은 이익률을 유지할 수 있는 고부가가치 자산형 인프라 사업입니다.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. 안정성 및 리스크 관리</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              전력 소비와 블랙아웃(화면 멈춤) 장애가 옥외 매체 사업의 주된 리스크입니다. 
              다이즈하이미디어의 AMSIT 기술(Aero-Flex 35% 전력절감 + 안정적인 미디어 인프라 제어)을 통해 운영비를 대폭 줄이고 장비 수명을 극대화합니다.
            </p>
          </div>
        </div>

        {/* Key Success Factors Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-widest">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span>DAIZ High Media Total Solution</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold">기획부터 제조, CMS 관제, 매체 운영까지 토털 지원</h4>
              <p className="text-slate-300 text-xs sm:text-sm font-light max-w-2xl">
                다이즈하이미디어는 인천국제공항 T1/T2 및 해외 국제공항 매체 구축 노하우를 바탕으로 
                사업성 검토, 설계, 시공, 원격 관제까지 일괄 통합 제공합니다.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <span className="block text-xs font-semibold text-slate-200">축적된 기술과 운영 경험</span>
                <span className="block text-sm font-bold text-white">ZERO Claim 운영 실적</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
