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
  const [inspireError, setInspireError] = React.useState(false);
  const [sparkError, setSparkError] = React.useState(false);

  const phase01Items = historyItems.filter(item => ["2010", "2014"].includes(item.year));
  const phase02Items = historyItems.filter(item =>
    ["2015", "2017", "2019", "2020"].includes(item.year) ||
    (item.year === "2021" && (item.category === "AIRPORT CMS" || item.category === "ENTERPRISE"))
  );
  const phase03Items = historyItems.filter(item => ["2022", "2023", "2024", "2026"].includes(item.year));

  const phases = [
    {
      phaseNum: "PHASE 01",
      title: "FOUNDATION & TECHNOLOGY",
      period: "2010—2014",
      items: phase01Items,
    },
    {
      phaseNum: "PHASE 02",
      title: "AIRPORT & INTEGRATION",
      period: "2015—2021",
      items: phase02Items,
    },
    {
      phaseNum: "PHASE 03",
      title: "EXPANSION & GLOBAL",
      period: "2022—2026",
      items: phase03Items,
    },
  ];

  return (
    <div className="w-full space-y-12 sm:space-y-16">
      {/* 01 HISTORY Intro Header Section (Full Width) */}
      <div className="space-y-5 pb-8 border-b border-[#D9DEE3]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#294A63]">02</span>
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63]">
            HISTORY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left (~42% / 5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#222831] tracking-tight leading-[1.12] font-sans text-heading-balance">
              <span className="block">FROM TECHNOLOGY</span>
              <span className="block">TO GLOBAL MEDIA</span>
            </h2>

            <h3 className="text-base sm:text-lg font-bold text-[#222831] tracking-tight pt-1 text-heading-balance">
              <span className="block">기술에서 시작해</span>
              <span className="block">도시와 공간을 연결하는 미디어 기업으로</span>
            </h3>
          </div>

          {/* Right (~58% / 7 cols) */}
          <div className="lg:col-span-7 flex items-center lg:pt-1">
            <p className="text-xs sm:text-sm text-[#66717C] font-normal leading-[1.75] text-body-pretty">
              DISE는 자체 CMS 기술을 기반으로 인천국제공항과 주요 상업·공공 공간의 LED 미디어를 구축하고 운영해 왔습니다. 축적된 기술과 운영 경험을 바탕으로 글로벌 미디어 사업으로 영역을 확장하고 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 02 PHASES SECTIONS (CENTERED TIMELINE CONTAINER max-w-[900px]) */}
      <div className="history-timeline-wrap w-full max-w-[900px] mx-auto space-y-16 sm:space-y-20">
        {phases.map((phase) => (
          <div key={phase.phaseNum} className="space-y-10 sm:space-y-12">
            {/* Phase Top Header */}
            <div className="pt-5 pb-3.5 border-t border-[#D9DEE3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#D97706] tracking-wider">
                  {phase.phaseNum}
                </span>
                <span className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-[#222831]">
                  {phase.title}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-mono text-[#66717C] font-semibold">
                {phase.period}
              </span>
            </div>

            {/* Vertical Timeline Items */}
            <div className="space-y-11 sm:space-y-12">
              {phase.items.map((item, idx) => {
                const isLast = idx === phase.items.length - 1;
                return (
                  <div
                    key={item.year + item.category + idx}
                    className="history-timeline-item relative grid grid-cols-[24px_minmax(0,1fr)] md:grid-cols-[100px_32px_minmax(0,1fr)] items-start"
                  >
                    {/* DESKTOP YEAR COLUMN (100px) - RIGHT ALIGNED TO CONNECTOR */}
                    <div className="hidden md:block pt-0.5 pr-3 text-right">
                      <span className="text-xl sm:text-2xl font-mono font-bold text-[#18324A] tracking-tight block">
                        {item.year}
                      </span>
                    </div>

                    {/* TIMELINE CONNECTOR COLUMN (32px on desktop / 24px on mobile) */}
                    <div className="relative flex justify-center items-start h-full">
                      {/* Vertical Connecting Line */}
                      {!isLast && (
                        <div className="absolute top-3.5 bottom-[-44px] sm:bottom-[-48px] w-[1px] bg-[#D9DEE3] left-1/2 -translate-x-1/2" />
                      )}

                      {/* Timeline Point Marker */}
                      <div className="relative z-10 pt-1.5 flex items-center justify-center">
                        {item.status === 'IN PROGRESS' ? (
                          <div className="w-3 h-3 rounded-full bg-[#D97706] ring-4 ring-amber-100" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-[#18324A] border-2 border-white ring-2 ring-[#D9DEE3]" />
                        )}
                      </div>
                    </div>

                    {/* HISTORY CONTENT COLUMN (LEFT ALIGNED, FULL REMAINING WIDTH IN 900PX WRAPPER) */}
                    <div className="pl-3 md:pl-4 space-y-1.5 text-left w-full">
                      {/* Category & Status (Mobile includes Year) */}
                      <div className="flex items-center gap-2.5 flex-wrap text-left">
                        {/* Mobile Year Badge */}
                        <span className="md:hidden text-lg font-mono font-bold text-[#18324A]">
                          {item.year}
                        </span>

                        {/* Category Label */}
                        <span className="text-[11px] font-mono font-bold text-[#294A63] tracking-wider uppercase">
                          {item.category}
                        </span>

                        {item.status && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-[2px] border border-amber-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse inline-block" />
                            {item.status}
                          </span>
                        )}
                      </div>

                      {/* Primary History Title */}
                      <h4 className="text-base sm:text-lg font-bold text-[#222831] leading-snug font-sans text-left text-heading-balance">
                        {item.title}
                      </h4>

                      {/* Secondary Description */}
                      <p className="text-sm sm:text-base text-[#66717C] leading-relaxed font-normal text-left text-body-pretty">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 03 KEY PROJECTS / HISTORY PROJECT STRIP */}
      <div className="pt-10 sm:pt-12 border-t border-[#D9DEE3] space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63] block">
            SELECTED MILESTONES
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight font-sans">
            기술과 운영 경험이 실제 미디어 공간으로 이어집니다.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* PROJECT 1: INSPIRE Arena */}
          <div className="bg-[#F8F9FA] border border-[#D9DEE3] rounded-[2px] overflow-hidden">
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#101418] relative">
              {inspireError ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#F8F9FA] text-[#66717C] text-xs font-mono p-4 text-center">
                  <span>IMAGE UNAVAILABLE</span>
                  <span className="text-[10px] mt-1 text-[#8C98A4]">이미지 준비 중</span>
                </div>
              ) : (
                <img
                  src="/images/about/history-inspire-arena-hq.webp"
                  alt="인스파이어 아레나 LED 미디어 프로젝트"
                  loading="lazy"
                  width={640}
                  height={400}
                  className="w-full h-full object-cover object-center"
                  onError={() => setInspireError(true)}
                />
              )}
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
          <div className="bg-[#F8F9FA] border border-[#D9DEE3] rounded-[2px] overflow-hidden">
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#101418] relative">
              {sparkError ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#F8F9FA] text-[#66717C] text-xs font-mono p-4 text-center">
                  <span>IMAGE UNAVAILABLE</span>
                  <span className="text-[10px] mt-1 text-[#8C98A4]">이미지 준비 중</span>
                </div>
              ) : (
                <img
                  src="/images/about/history-dongseongro-spark-hq.webp"
                  alt="동성로 스파크 대형 LED 미디어 프로젝트"
                  loading="lazy"
                  width={640}
                  height={400}
                  className="w-full h-full object-cover object-center"
                  onError={() => setSparkError(true)}
                />
              )}
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
