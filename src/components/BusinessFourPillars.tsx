import React from 'react';
import { Language } from '../types';
import { ArrowRight } from 'lucide-react';

export const cmsImage = "/images/solutions/solution-cms-operation-interface.webp";
export const displayControlImage = "/images/solutions/solution-display-control-system.webp";
export const busanLctMediaExhibitionImage = "/images/solutions/solution-busan-lct-media-exhibition.webp";

interface BusinessFourPillarsProps {
  currentLang: Language;
  onNavigateContact?: () => void;
  onNavigateProjects?: (category?: string) => void;
  [key: string]: any;
}

export const BusinessFourPillars: React.FC<BusinessFourPillarsProps> = ({
  currentLang,
  onNavigateContact,
}) => {
  const isKo = currentLang === 'ko';

  // 1. Core Solutions Data
  const coreSolutions = [
    {
      id: 'solution-01',
      num: '01',
      titleKo: 'LED 미디어 기획·구축',
      titleEn: 'LED Media Planning & Installation',
      descKo: '공간과 운영 목적에 맞는 LED 미디어를 기획하고 구축합니다.',
      descEn: 'Planning and building LED media customized to space specifications and operational requirements.',
      itemsKo: [
        '공간 및 운영환경 분석',
        '디스플레이 시스템 설계',
        '현장 시공 및 시스템 구축',
      ],
      itemsEn: [
        'Spatial & Operational Environment Analysis',
        'Display System Engineering & Design',
        'On-Site Installation & System Building',
      ],
      placeholderText: '',
      isCms: false,
      isDisplayControl: false,
      isMediaTower: true,
      textFirstDesktop: true,
    },
    {
      id: 'solution-02',
      num: '02',
      titleKo: '디스플레이·제어 시스템',
      titleEn: 'Display & Control System',
      descKo: '디스플레이와 컨트롤러를 연결해 안정적인 통합 송출 환경을 구성합니다.',
      descEn: 'Connecting displays and controllers to configure a stable integrated playout environment.',
      itemsKo: [
        '다중 디스플레이 통합 제어',
        '화면 동기화 송출',
        '외부 시스템 연동',
      ],
      itemsEn: [
        'Multi-Display Integrated Control',
        'Synchronized Video Output',
        'External System Integration',
      ],
      placeholderText: '',
      isCms: false,
      isDisplayControl: true,
      textFirstDesktop: false, // Desktop: Image Left, Text Right
    },
    {
      id: 'solution-03',
      num: '03',
      titleKo: 'CMS·통합관제 및 운영',
      titleEn: 'CMS & Integrated Operation',
      descKo: '자체 CMS를 기반으로 콘텐츠 송출과 다중 미디어 통합관제를 수행합니다.',
      descEn: 'Conducting content playout and multi-media integrated control based on proprietary CMS.',
      itemsKo: [
        '콘텐츠 등록·편성·송출',
        '원격 통합관제 및 상태 확인',
        '운영 로그 및 유지관리 지원',
      ],
      itemsEn: [
        'Content Management, Scheduling & Playout',
        'Remote Integrated Control & Status Monitoring',
        'Operation Logs & Maintenance Support',
      ],
      placeholderText: '',
      isCms: true,
      textFirstDesktop: true,
    },
  ];

  // 2. How It Works Steps
  const flowSteps = [
    { num: '01', ko: '기획·분석', en: 'Planning & Analysis' },
    { num: '02', ko: '설계·구축', en: 'Design & Building' },
    { num: '03', ko: 'CMS 연동·테스트', en: 'CMS Integration & Testing' },
    { num: '04', ko: '통합관제·운영', en: 'Integrated Control & Operation' },
  ];

  // 3. AMSIT Core Technologies (5 Techs)
  const amsitTechs = [
    {
      num: '01',
      acronym: 'AFD',
      enName: 'Aero-Flex Display',
      koDesc: '오픈 메시 기반 LED 디스플레이',
      enDesc: 'Open-mesh based LED display',
    },
    {
      num: '02',
      acronym: 'MWC',
      enName: 'MW Controller',
      koDesc: '다중 디스플레이 제어',
      enDesc: 'Multi-display control',
    },
    {
      num: '03',
      acronym: 'SOF',
      enName: 'Stack-on-Flow',
      koDesc: '멀티레이어 콘텐츠 구성',
      enDesc: 'Multi-layer content composition',
    },
    {
      num: '04',
      acronym: 'IMT',
      enName: 'Imperative Trigger',
      koDesc: '상황 기반 콘텐츠 전환',
      enDesc: 'Context-based content switching',
    },
    {
      num: '05',
      acronym: 'TED',
      enName: 'Targeting Echo Detect',
      koDesc: 'AI 기반 인식 기술',
      enDesc: 'AI-based recognition technology',
    },
  ];

  return (
    <div className="bg-white text-[#222831] font-sans selection:bg-[#294A63] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16 sm:space-y-24">
        
        {/* =========================================================
            01 HERO
           ========================================================= */}
        <section className="pt-2 sm:pt-6 pb-8 sm:pb-12 border-b border-[#E2E8F0]">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#294A63] tracking-[0.2em] uppercase block">
              SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-[1.2] font-sans text-heading-balance">
              <span className="block">FROM MEDIA INSTALLATION</span>
              <span className="block">TO INTEGRATED OPERATION</span>
            </h1>
            <p className="text-base sm:text-lg text-[#475569] font-normal leading-[1.6] max-w-2xl pt-2 text-body-pretty">
              {isKo
                ? '기획과 구축부터 디스플레이 제어, 콘텐츠 송출과 통합운영까지 하나의 기술 체계로 연결합니다.'
                : 'Connecting planning, installation, display control, content playout, and integrated operations in a unified technology system.'}
            </p>
          </div>
        </section>

        {/* =========================================================
            02 CORE SOLUTIONS (핵심 솔루션 3개)
           ========================================================= */}
        <section className="space-y-12 sm:space-y-16">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#294A63] tracking-[0.2em] uppercase block">
              CORE SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              {isKo ? '미디어 구축부터 통합운영까지' : 'From Media Building to Integrated Operation'}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.6] max-w-2xl font-normal">
              {isKo
                ? '공간과 운영 목적에 맞는 LED 미디어 시스템을 구축하고, 자체 CMS를 기반으로 안정적인 운영 환경을 제공합니다.'
                : 'Building LED media systems tailored to space and operational goals, and providing a stable operation environment based on proprietary CMS.'}
            </p>
          </div>

          {/* 3 Horizontal Row Structures */}
          <div className="space-y-16 sm:space-y-20">
            {coreSolutions.map((sol) => (
              <div
                key={sol.id}
                id={sol.id}
                className="scroll-mt-24 border-t border-[#E2E8F0] pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Text Content Area */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    sol.textFirstDesktop
                      ? 'order-1 lg:order-1'
                      : 'order-1 lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#D97706] tracking-wider uppercase block">
                      {sol.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                      {isKo ? sol.titleKo : sol.titleEn}
                    </h3>
                    <p className="text-xs font-mono text-[#64748B] tracking-wider uppercase font-medium">
                      {sol.titleEn}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#334155] leading-[1.6] font-normal max-w-xl">
                    {isKo ? sol.descKo : sol.descEn}
                  </p>

                  <div className="pt-3 border-t border-[#E2E8F0] space-y-2.5">
                    {(isKo ? sol.itemsKo : sol.itemsEn).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image or Placeholder Area */}
                <div
                  className={`lg:col-span-6 ${
                    sol.textFirstDesktop
                      ? 'order-2 lg:order-2'
                      : 'order-2 lg:order-1'
                  }`}
                >
                  {sol.isCms ? (
                    <div className="space-y-2">
                      <div className="w-full aspect-[16/10] bg-[#0F172A] border border-[#E2E8F0] rounded-[2px] p-1 sm:p-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={cmsImage}
                          alt="CMS 통합 미디어 운영 화면 예시"
                          loading="lazy"
                          className="w-full h-full object-contain object-center"
                        />
                      </div>
                      <div className="pt-0.5 space-y-0.5">
                        <div className="text-[11px] font-mono text-[#64748B] tracking-wider uppercase font-medium">
                          CMS INTERFACE · ILLUSTRATIVE SCREEN
                        </div>
                        <div className="text-[11px] text-[#64748B]">
                          이해를 돕기 위한 예시 화면입니다.
                        </div>
                      </div>
                    </div>
                  ) : sol.isDisplayControl ? (
                    <div className="space-y-2">
                      <div className="w-full aspect-[3/2] bg-[#f4f6f8] border border-[#E2E8F0] rounded-[2px] p-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={displayControlImage}
                          alt="MW-10 디스플레이 제어 시스템"
                          loading="lazy"
                          width={600}
                          height={400}
                          className="w-full h-full object-contain object-center"
                        />
                      </div>
                      <div className="pt-0.5">
                        <span className="text-[11px] font-mono text-[#64748B] tracking-wider uppercase font-medium">
                          MW-10 MEDIA WALL CONTROLLER
                        </span>
                      </div>
                    </div>
                  ) : sol.isMediaTower ? (
                    <div className="space-y-2">
                      <div className="w-full aspect-[3/2] bg-[#f4f6f8] border border-[#E2E8F0] rounded-[2px] overflow-hidden">
                        <img
                          src={busanLctMediaExhibitionImage}
                          alt="부산 엘시티 미디어 전시관 LED 구축 사례"
                          loading="lazy"
                          width={600}
                          height={400}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-0.5">
                        <span className="text-[11px] font-mono text-[#64748B] tracking-wider uppercase font-medium">
                          BUSAN LCT MEDIA EXHIBITION
                        </span>
                        <span className="text-[11px] font-mono text-[#64748B] tracking-wider uppercase font-medium">
                          LED MEDIA INSTALLATION
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/10] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-6 text-center">
                      <span className="text-xs font-mono font-semibold text-[#94A3B8] tracking-widest uppercase">
                        {sol.placeholderText}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            03 HOW IT WORKS (하나의 연결 흐름)
           ========================================================= */}
        <section className="pt-10 sm:pt-14 border-t border-[#E2E8F0] space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#294A63] tracking-[0.2em] uppercase block">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              {isKo ? '하나의 시스템으로 연결되는 운영 흐름' : 'Operational Flow Connected as a Single System'}
            </h2>
          </div>

          {/* Desktop Horizontal Flow (4 Steps) */}
          <div className="hidden md:grid grid-cols-4 gap-6 border-y border-[#E2E8F0] py-8 relative">
            {flowSteps.map((step, idx) => (
              <div key={step.num} className="relative space-y-2 pr-4">
                {idx < flowSteps.length - 1 && (
                  <span className="absolute top-1 right-0 text-[#CBD5E1] text-xs font-mono">→</span>
                )}
                <span className="text-xs font-mono font-bold text-[#D97706] block">
                  {step.num}
                </span>
                <p className="text-base font-bold text-[#0F172A] leading-snug">
                  {isKo ? step.ko : step.en}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Flow (4 Steps) */}
          <div className="grid md:hidden grid-cols-1 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
            {flowSteps.map((step, idx) => (
              <div key={step.num} className="py-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#D97706]">
                    {step.num}
                  </span>
                  <p className="text-sm font-bold text-[#0F172A]">
                    {isKo ? step.ko : step.en}
                  </p>
                </div>
                {idx < flowSteps.length - 1 && (
                  <span className="text-[#94A3B8] text-xs">↓</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            04 AMSIT TECHNOLOGY (기술 체계 요약)
           ========================================================= */}
        <section className="pt-10 sm:pt-14 border-t border-[#E2E8F0] space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#294A63] tracking-[0.2em] uppercase block">
              CORE TECHNOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight leading-snug">
              {isKo ? (
                <>
                  미디어 구축과 운영을 연결하는<br className="hidden sm:inline" /> AMSIT 5대 핵심 기술
                </>
              ) : (
                'AMSIT 5 Core Technologies Connecting Installation & Operation'
              )}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-[1.6] max-w-2xl font-normal">
              {isKo
                ? 'AMSIT는 디스플레이 구축과 제어, 콘텐츠 운영 및 AI 인식 기술을 연결하는 다이즈하이미디어의 핵심 기술 체계입니다.'
                : 'AMSIT is DISE HI MEDIA’s core technology system connecting display installation, control, content operation, and AI recognition.'}
            </p>
          </div>

          {/* 5-Tech List (4-Column Desktop / Single-Column Mobile with Thin Divider Lines) */}
          <div className="border-t border-b border-[#E2E8F0] divide-y divide-[#E2E8F0]">
            {amsitTechs.map((tech) => (
              <div
                key={tech.num}
                className="py-4 sm:py-0 sm:min-h-[86px] px-2 sm:px-4 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-0 hover:bg-[#F8FAFC] transition-colors"
              >
                {/* Mobile: Top row Num + Acronym / Desktop: Col 1 (7%) & Col 2 (13%) */}
                <div className="flex items-center gap-3 sm:contents">
                  <span className="text-xs font-mono font-bold text-[#D97706] sm:w-[7%] shrink-0">
                    {tech.num}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#0F172A] sm:w-[13%] shrink-0">
                    {tech.acronym}
                  </span>
                </div>

                {/* Col 3: English Name (32%) */}
                <span className="text-xs sm:text-sm font-medium text-[#475569] sm:w-[32%] shrink-0">
                  {tech.enName}
                </span>

                {/* Col 4: Role (48%) */}
                <span className="text-xs sm:text-sm font-semibold text-[#1E293B] sm:w-[48%]">
                  {isKo ? tech.koDesc : tech.enDesc}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Auxiliary Info (No Cards/Boxes, Clean 2-Line Layout) */}
          <div className="pt-2 space-y-3.5">
            {/* Line 1: Tech Scope */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-xs font-bold text-[#294A63] w-24 sm:w-28 shrink-0">
                {isKo ? '기술 적용 영역' : 'Tech Scope'}
              </span>
              <span className="text-xs font-medium text-[#64748B] leading-normal">
                {isKo
                  ? '다중 화면 동기화 · 에어로-플렉스 오픈 메시 디스플레이 · AI 생체 인식 기술'
                  : 'Multi-window Synchronization · Aero-Flex Open-Mesh Display · AI Biometric Recognition'}
              </span>
            </div>

            {/* Line 2: Business Domains */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-xs font-bold text-[#294A63] w-24 sm:w-28 shrink-0">
                {isKo ? '사업영역' : 'Business Domains'}
              </span>
              <span className="text-xs font-medium text-[#64748B] leading-normal">
                Display Hardware · DISE Platform · AI & Deep Learning · Content & Service
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            05 PROJECT INQUIRY (문의 CTA)
           ========================================================= */}
        <section className="pt-8 sm:pt-12 border-t border-[#E2E8F0]">
          <div className="bg-[#102B42] text-white p-6 sm:p-8 rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-xs font-mono font-bold text-[#D0BE7D] uppercase tracking-widest block">
                PROJECT INQUIRY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {isKo ? '맞춤형 미디어 솔루션 도입 문의' : 'Inquire About Custom Media Solutions'}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-[1.6] font-normal">
                {isKo
                  ? '공간 특성에 맞춘 LED 구축, CMS 도입 및 미디어 제어 시스템 구축 상담을 지원합니다.'
                  : 'Providing consultation for LED installation, CMS implementation, and media control tailored to your space.'}
              </p>
            </div>

            {onNavigateContact && (
              <button
                type="button"
                onClick={onNavigateContact}
                className="inline-flex items-center gap-2 bg-[#D0BE7D] text-[#0F172A] hover:bg-[#c2af6e] font-bold text-xs sm:text-sm px-6 py-3 rounded-[2px] transition-colors shrink-0 cursor-pointer"
              >
                <span>{isKo ? '프로젝트 문의하기' : 'Contact Us'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};
