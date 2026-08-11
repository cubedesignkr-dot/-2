import React from 'react';
import { Language } from '../types';

interface HistorySectionProps {
  currentLang: Language;
}

export interface HistoryItem {
  year: string;
  category: string;
  title: string;
  description: string;
  status?: string;
}

export const historyItems: HistoryItem[] = [
  {
    year: "2010",
    category: "FOUNDING",
    title: "㈜하이미디어 법인 설립",
    description: "직업훈련전문학원 개업"
  },
  {
    year: "2014",
    category: "CMS ENGINE",
    title: "영상분석 프로그램 개발",
    description: "CMS 핵심 엔진 확보"
  },
  {
    year: "2015",
    category: "AIRPORT",
    title: "인천국제공항 CMS 서버 구축",
    description: "현장 테스트 진입"
  },
  {
    year: "2017",
    category: "LANDMARK",
    title: "인천국제공항 출국장 LED 4기 구축",
    description: "롯데면세점 LED 터널 시공"
  },
  {
    year: "2019",
    category: "INTEGRATION",
    title: "인천국제공항 FIDS 연동",
    description: "시스템 개발 및 구축"
  },
  {
    year: "2020",
    category: "AI SYSTEM",
    title: "AI 열화상 안면인식 시스템 개발",
    description: "코로나 대응 기술 개발"
  },
  {
    year: "2021",
    category: "AIRPORT CMS",
    title: "인천국제공항 4단계 운항통신시설 CMS 구축",
    description: "2021.12 구축"
  },
  {
    year: "2021",
    category: "ENTERPRISE",
    title: "포스코ICT 협약",
    description: "전략적 사업 협약 체결"
  },
  {
    year: "2022",
    category: "FINANCIAL DID",
    title: "신한은행 DID 시스템 구축",
    description: "2022.05 협약 · 영업점 DID 통합"
  },
  {
    year: "2023",
    category: "PUBLIC DID",
    title: "서초구 양방향 DID 구축",
    description: "2023.04 협약 · 시민정보 시스템"
  },
  {
    year: "2024",
    category: "GLOBAL",
    title: "중국 자은천하 XR 협약",
    description: "중국 연변방송국 미디어 CMS 협약"
  },
  {
    year: "2026",
    category: "VIETNAM",
    title: "베트남 노이바이국제공항 LED 사업 추진",
    description: "MHGROUP 협력 · RSL·BIC 컨소시엄",
    status: "IN PROGRESS"
  }
];

interface PhaseDivider {
  phaseNum: string;
  title: string;
  period: string;
  startYear: string;
}

const phaseDividers: PhaseDivider[] = [
  {
    phaseNum: "PHASE 01",
    title: "FOUNDATION & TECHNOLOGY",
    period: "2010—2014",
    startYear: "2010"
  },
  {
    phaseNum: "PHASE 02",
    title: "AIRPORT & INTEGRATION",
    period: "2015—2021",
    startYear: "2015"
  },
  {
    phaseNum: "PHASE 03",
    title: "EXPANSION & GLOBAL",
    period: "2022—2026",
    startYear: "2022"
  }
];

export const HistorySection: React.FC<HistorySectionProps> = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      {/* LEFT COLUMN: Section Intro (~30% / 4 cols) */}
      <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-[#294A63]">02</span>
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63]">
            HISTORY
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#222831] tracking-tight leading-[1.12] font-sans">
          FROM TECHNOLOGY<br />
          TO GLOBAL MEDIA
        </h2>

        <h3 className="text-base sm:text-lg font-bold text-[#222831] tracking-tight pt-1">
          기술에서 시작해<br />
          도시와 공간을 연결하는 미디어 기업으로
        </h3>

        <p className="text-xs sm:text-sm text-[#66717C] font-normal leading-[1.75] pt-1 max-w-md">
          DISE는 자체 CMS 기술을 기반으로 인천국제공항과 주요 상업·공공 공간의 LED 미디어를 구축하고 운영해 왔습니다. 축적된 기술과 운영 경험을 바탕으로 글로벌 미디어 사업으로 영역을 확장하고 있습니다.
        </p>
      </div>

      {/* RIGHT COLUMN: Chronological Timeline (~70% / 8 cols) */}
      <div className="lg:col-span-8 space-y-8">
        <div className="relative pl-2 sm:pl-4 space-y-8">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[78px] sm:left-[98px] top-3 bottom-3 w-[1px] bg-[#D9DEE3] z-0" />

          {historyItems.map((item) => {
            const phase = phaseDividers.find(p => p.startYear === item.year);

            return (
              <React.Fragment key={item.year + item.category}>
                {/* Typographic Phase Divider */}
                {phase && (
                  <div className="relative z-10 pt-4 pb-2 border-t border-[#D9DEE3] flex items-center justify-between gap-4 -ml-2 sm:-ml-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#294A63]">
                        {phase.phaseNum}
                      </span>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#222831]">
                        {phase.title}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#66717C]">
                      {phase.period}
                    </span>
                  </div>
                )}

                {/* Milestone Entry */}
                <div className="relative flex items-start gap-4 sm:gap-6 z-10">
                  {/* Fixed Width Year Column */}
                  <div className="w-14 sm:w-20 shrink-0 text-right pt-0.5">
                    <span className="text-sm sm:text-base font-mono font-bold text-[#294A63] tracking-tight">
                      {item.year}
                    </span>
                  </div>

                  {/* Timeline Node Dot */}
                  <div className="shrink-0 pt-1.5 flex items-center justify-center">
                    <div className={`w-2.5 h-2.5 rounded-full border-2 border-white ring-1 ${
                      item.status ? 'bg-[#294A63] ring-[#294A63]' : 'bg-[#294A63] ring-[#D9DEE3]'
                    }`} />
                  </div>

                  {/* Milestone Text */}
                  <div className="flex-1 space-y-1 pt-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-mono font-semibold text-[#294A63] uppercase tracking-widest">
                        {item.category}
                      </span>
                      {item.status && (
                        <span className="text-[10px] font-mono font-semibold text-[#294A63] bg-[#294A63]/10 px-1.5 py-0.5 rounded-[2px] tracking-wider uppercase">
                          {item.status}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-[#222831] font-sans leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#4A5568] font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* KEY PROJECTS / HISTORY PROJECT STRIP */}
      <div className="lg:col-span-12 pt-12 sm:pt-16 border-t border-[#D9DEE3] space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63] block">
            SELECTED MILESTONES
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight font-sans">
            기술과 운영 경험이 실제 미디어 공간으로 이어집니다.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* PROJECT 1: INSPIRE Arena */}
          <div className="bg-[#F8F9FA] border border-[#D9DEE3] rounded-[2px] overflow-hidden group">
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#101418] relative">
              <img
                src="/images/about/history-inspire-arena-v2.webp"
                alt="INSPIRE Arena LED 미디어 프로젝트"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4 sm:p-5 space-y-1 bg-white border-t border-[#D9DEE3]">
              <span className="text-[11px] font-mono font-semibold text-[#294A63] uppercase tracking-wider block">
                INTEGRATED MEDIA
              </span>
              <h4 className="text-base font-bold text-[#222831] font-sans">
                INSPIRE Arena
              </h4>
            </div>
          </div>

          {/* PROJECT 2: 동성로 SPARK */}
          <div className="bg-[#F8F9FA] border border-[#D9DEE3] rounded-[2px] overflow-hidden group">
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#101418] relative">
              <img
                src="/images/about/history-dongseongro-spark-v2.webp"
                alt="동성로 SPARK 대형 LED 미디어 프로젝트"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4 sm:p-5 space-y-1 bg-white border-t border-[#D9DEE3]">
              <span className="text-[11px] font-mono font-semibold text-[#294A63] uppercase tracking-wider block">
                URBAN LED MEDIA
              </span>
              <h4 className="text-base font-bold text-[#222831] font-sans">
                동성로 SPARK
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
