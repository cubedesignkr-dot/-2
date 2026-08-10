import React from 'react';
import { Language } from '../types';

interface CompanyHistoryProps {
  currentLang: Language;
  customLogo?: string | null;
}

interface Milestone {
  year: string;
  category: string;
  titleKo: string;
  titleEn: string;
  subtitleKo: string;
  subtitleEn: string;
  isInProgress?: boolean;
}

interface Phase {
  phaseNum: string;
  title: string;
  period: string;
  milestones: Milestone[];
}

export const CompanyHistory: React.FC<CompanyHistoryProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  const phases: Phase[] = [
    {
      phaseNum: 'PHASE 01',
      title: 'FOUNDATION & TECHNOLOGY',
      period: '2010—2014',
      milestones: [
        {
          year: '2010',
          category: 'FOUNDING',
          titleKo: '㈜하이미디어 법인 설립',
          titleEn: 'HI MEDIA Co., Ltd. Established',
          subtitleKo: '직업훈련전문학원 개업',
          subtitleEn: 'Vocational Training Academy Opened',
        },
        {
          year: '2014',
          category: 'CMS ENGINE',
          titleKo: '영상분석 프로그램 개발',
          titleEn: 'Video Analytics Software R&D',
          subtitleKo: 'CMS 핵심 엔진 확보',
          subtitleEn: 'Core CMS Engine Secured',
        },
      ],
    },
    {
      phaseNum: 'PHASE 02',
      title: 'AIRPORT & INTEGRATION',
      period: '2015—2021',
      milestones: [
        {
          year: '2015',
          category: 'AIRPORT',
          titleKo: '인천국제공항 CMS 서버 구축',
          titleEn: "Incheon Int'l Airport CMS Server Deployed",
          subtitleKo: '현장 테스트 진입',
          subtitleEn: 'On-site Operations Testing',
        },
        {
          year: '2017',
          category: 'LANDMARK',
          titleKo: '인천국제공항 출국장 LED 4기 구축',
          titleEn: 'Incheon Airport Departure LED Screens (4 Units)',
          subtitleKo: '롯데면세점 LED 터널 시공',
          subtitleEn: 'Lotte Duty Free LED Tunnel Installed',
        },
        {
          year: '2019',
          category: 'INTEGRATION',
          titleKo: '인천국제공항 FIDS 연동',
          titleEn: 'Incheon Airport FIDS System Integration',
          subtitleKo: '시스템 개발 및 구축',
          subtitleEn: 'System Development & Deployment',
        },
        {
          year: '2020',
          category: 'AI SYSTEM',
          titleKo: 'AI 열화상 안면인식 시스템 개발',
          titleEn: 'AI Thermal & Facial Recognition System R&D',
          subtitleKo: '코로나 대응 기술 개발',
          subtitleEn: 'Pandemic Safety Technology Developed',
        },
        {
          year: '2021',
          category: 'ENTERPRISE',
          titleKo: '인천국제공항 4단계 운항통신시설 CMS 구축',
          titleEn: 'Incheon Airport Phase 4 Flight Comms CMS Deployment',
          subtitleKo: '2021.12 구축 · 포스코ICT 협약',
          subtitleEn: 'Dec 2021 Deployment · POSCO ICT Partnership',
        },
      ],
    },
    {
      phaseNum: 'PHASE 03',
      title: 'EXPANSION & GLOBAL',
      period: '2022—2026',
      milestones: [
        {
          year: '2022',
          category: 'FINANCIAL DID',
          titleKo: '신한은행 DID 시스템 구축',
          titleEn: 'Shinhan Bank Branch DID System Built',
          subtitleKo: '2022.05 협약 · 영업점 DID 통합',
          subtitleEn: 'May 2022 Agreement · Branch DID Integration',
        },
        {
          year: '2023',
          category: 'PUBLIC DID',
          titleKo: '서초구 양방향 DID 구축',
          titleEn: 'Seocho-gu Interactive DID System Built',
          subtitleKo: '2023.04 협약 · 시민정보 시스템',
          subtitleEn: 'Apr 2023 Agreement · Citizen Info System',
        },
        {
          year: '2024',
          category: 'GLOBAL',
          titleKo: '중국 자은천하 XR 협약',
          titleEn: 'China XR Platform Strategic Partnership',
          subtitleKo: '중국 연변방송국 미디어 CMS 협약',
          subtitleEn: 'Yanbian TV Station Media CMS Agreement',
        },
        {
          year: '2026',
          category: 'VIETNAM',
          titleKo: '베트남 노이바이국제공항 LED 사업 추진',
          titleEn: "Vietnam Noi Bai Int'l Airport LED Project Expansion",
          subtitleKo: 'MHGROUP 협력 · RSL·BIC 컨소시엄',
          subtitleEn: 'MHGROUP Partnership · RSL & BIC Consortium',
          isInProgress: true,
        },
      ],
    },
  ];

  return (
    <section id="history" className="scroll-mt-28 py-12 sm:py-16 bg-white border-t border-[#D9DEE3]">
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
            {isKo ? '기술에서 시작해' : 'From Core Technology'}<br />
            {isKo ? '도시와 공간을 연결하는 미디어 기업으로' : 'To Connecting Cities & Spaces Through Media'}
          </h3>

          <p className="text-xs sm:text-sm text-[#66717C] font-normal leading-[1.75] pt-1 max-w-md">
            {isKo
              ? 'DISE는 자체 CMS 기술을 기반으로 인천국제공항과 주요 상업·공공 공간의 LED 미디어를 구축하고 운영해 왔습니다. 축적된 기술과 운영 경험을 바탕으로 글로벌 미디어 사업으로 영역을 확장하고 있습니다.'
              : 'Based on proprietary CMS technology, DISE has deployed and operated LED media for Incheon International Airport and major commercial and public spaces. Leveraging accumulated technical expertise, we are expanding globally.'}
          </p>
        </div>

        {/* RIGHT COLUMN: Chronological Timeline (~70% / 8 cols) */}
        <div className="lg:col-span-8 space-y-12 lg:space-y-16">
          {phases.map((phase) => (
            <div key={phase.phaseNum} className="space-y-6">
              
              {/* Phase Header Divider */}
              <div className="border-t border-[#D9DEE3] pt-4 flex items-center justify-between gap-4">
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

              {/* Milestones Container with Vertical Line */}
              <div className="relative pl-2 sm:pl-4 space-y-8 sm:space-y-10">
                {/* Continuous Vertical Line */}
                <div className="absolute left-[78px] sm:left-[98px] top-2 bottom-2 w-[1px] bg-[#D9DEE3] z-0" />

                {phase.milestones.map((m) => (
                  <div key={m.year + m.category} className="relative flex items-start gap-4 sm:gap-6 z-10">
                    
                    {/* Fixed Width Year Column */}
                    <div className="w-14 sm:w-20 shrink-0 text-right pt-0.5">
                      <span className="text-sm sm:text-base font-mono font-bold text-[#294A63] tracking-tight">
                        {m.year}
                      </span>
                    </div>

                    {/* Timeline Node Dot */}
                    <div className="shrink-0 pt-1.5 flex items-center justify-center">
                      <div className={`w-2.5 h-2.5 rounded-full border-2 border-white ring-1 ring-[#D9DEE3] ${
                        m.isInProgress ? 'bg-[#294A63] ring-[#294A63]' : 'bg-[#294A63]'
                      }`} />
                    </div>

                    {/* Milestone Content */}
                    <div className="flex-1 space-y-1 pt-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-mono font-semibold text-[#294A63] uppercase tracking-widest">
                          {m.category}
                        </span>
                        {m.isInProgress && (
                          <span className="text-[10px] font-mono font-semibold text-[#294A63] bg-[#294A63]/10 px-1.5 py-0.5 rounded-[2px] tracking-wider uppercase">
                            IN PROGRESS
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm sm:text-base font-semibold text-[#222831] font-sans leading-snug">
                        {isKo ? m.titleKo : m.titleEn}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#66717C] font-normal leading-relaxed">
                        {isKo ? m.subtitleKo : m.subtitleEn}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
