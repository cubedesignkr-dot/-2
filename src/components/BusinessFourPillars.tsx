import React, { useState } from 'react';
import { Language } from '../types';

export const controlSystemImage = "/images/solutions/control-system-placeholder.webp";
export const cmsImage = "/images/solutions/cms-screen-placeholder.webp";

export const SOLUTION_TABS = [
  {
    id: 'solution-01',
    label: 'LED MEDIA',
    koreanLabel: '01 LED 미디어 기획·구축',
  },
  {
    id: 'solution-02',
    label: 'CONTROL SYSTEM',
    koreanLabel: '02 디스플레이·제어 시스템',
  },
  {
    id: 'solution-03',
    label: 'CMS & OPERATION',
    koreanLabel: '03 CMS·통합관제 및 운영',
  },
] as const;

export type SolutionTabId = (typeof SOLUTION_TABS)[number]['id'];

interface BusinessFourPillarsProps {
  currentLang: Language;
  onNavigateContact?: () => void;
  onNavigateProjects?: (category?: string) => void;
  [key: string]: any;
}

interface SolutionImageProps {
  src: string;
  alt: string;
  placeholderTitle: string;
  placeholderSub?: string;
  aspectRatio?: string;
}

const SolutionImage: React.FC<SolutionImageProps> = ({
  src,
  alt,
  placeholderTitle,
  placeholderSub = 'IMAGE TO BE UPDATED',
  aspectRatio = 'aspect-[16/10]',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`w-full ${aspectRatio} bg-[#102B42] border border-[#294A63] rounded-[2px] flex flex-col items-center justify-center p-6 text-center space-y-2 relative overflow-hidden`}>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="relative z-10 space-y-1.5">
          <span className="text-xs font-mono font-bold text-[#D0BE7D] tracking-widest uppercase block">
            {placeholderTitle}
          </span>
          <span className="text-[10px] font-mono font-medium text-white/60 tracking-wider uppercase block">
            {placeholderSub}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${aspectRatio} overflow-hidden rounded-[2px] bg-[#102B42] border border-[#D9DEE3]`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
      />
    </div>
  );
};

export const BusinessFourPillars: React.FC<BusinessFourPillarsProps> = ({
  currentLang,
}) => {
  const isKo = currentLang === 'ko';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white text-[#222831] font-sans selection:bg-[#294A63] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
        
        {/* 1. PAGE INTRO (페이지 인트로) */}
        <div className="space-y-6 pb-6 border-b border-[#D9DEE3]">
          <div className="space-y-3 text-left">
            <span className="text-xs font-mono font-bold text-[#294A63] tracking-[0.2em] uppercase block">
              SOLUTIONS
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-[#18324A] tracking-tight leading-[1.2]">
              FROM MEDIA INSTALLATION TO INTEGRATED OPERATION
            </h1>

            <p className="text-sm sm:text-base text-[#4A5568] font-normal leading-relaxed max-w-2xl pt-1">
              {isKo
                ? '기획과 구축부터 디스플레이 제어, 콘텐츠 송출과 통합운영까지 하나의 기술 체계로 연결합니다.'
                : 'Connecting planning, installation, display control, content playout, and integrated operations in a unified technology system.'}
            </p>
          </div>

          {/* INDEX MENU (가로형 메뉴) */}
          <div className="pt-4">
            <nav
              className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D9DEE3] border-y border-[#D9DEE3]"
              aria-label="Solutions Index"
            >
              <button
                type="button"
                onClick={() => scrollToSection('solution-01')}
                className="py-3.5 px-4 text-left hover:bg-[#F8FAFC] transition-colors group flex items-center justify-between cursor-pointer"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono text-[#D97706] font-bold block">01</span>
                  <span className="text-xs sm:text-sm font-bold text-[#1E293B] group-hover:text-[#294A63] transition-colors">
                    {isKo ? 'LED 미디어 기획·구축' : 'LED Media Planning & Installation'}
                  </span>
                </div>
                <span className="text-[#94A3B8] group-hover:text-[#294A63] text-sm group-hover:translate-x-0.5 transition-transform">→</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('solution-02')}
                className="py-3.5 px-4 text-left hover:bg-[#F8FAFC] transition-colors group flex items-center justify-between cursor-pointer"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono text-[#D97706] font-bold block">02</span>
                  <span className="text-xs sm:text-sm font-bold text-[#1E293B] group-hover:text-[#294A63] transition-colors">
                    {isKo ? '디스플레이·제어 시스템' : 'Display & Control System'}
                  </span>
                </div>
                <span className="text-[#94A3B8] group-hover:text-[#294A63] text-sm group-hover:translate-x-0.5 transition-transform">→</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('solution-03')}
                className="py-3.5 px-4 text-left hover:bg-[#F8FAFC] transition-colors group flex items-center justify-between cursor-pointer"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono text-[#D97706] font-bold block">03</span>
                  <span className="text-xs sm:text-sm font-bold text-[#1E293B] group-hover:text-[#294A63] transition-colors">
                    {isKo ? 'CMS·통합관제 및 운영' : 'CMS & Integrated Operation'}
                  </span>
                </div>
                <span className="text-[#94A3B8] group-hover:text-[#294A63] text-sm group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </nav>
          </div>
        </div>

        {/* 2. CORE SOLUTIONS (3 INDEPENDENT SECTIONS) */}
        <div className="space-y-20 sm:space-y-28">

          {/* [01 LED 미디어 기획·구축] */}
          <section id="solution-01" className="scroll-mt-24 space-y-6 pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Image Left */}
              <div className="lg:col-span-6 order-1">
                <SolutionImage
                  src="/images/about/history-inspire-arena-v2.webp"
                  alt="INSPIRE ARENA LED 미디어 프로젝트"
                  placeholderTitle="LED MEDIA INSTALLATION"
                />
              </div>

              {/* Text Right */}
              <div className="lg:col-span-6 order-2 space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#D97706] tracking-wider uppercase block">
                    01 SOLUTIONS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                    {isKo ? 'LED 미디어 기획·구축' : 'LED Media Planning & Installation'}
                  </h2>
                  <p className="text-xs font-mono font-semibold text-[#64748B] uppercase tracking-wider">
                    LED MEDIA PLANNING &amp; INSTALLATION
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
                  {isKo
                    ? '공간과 운영 목적에 맞는 LED 미디어를 기획하고 구축합니다.'
                    : 'Planning and building LED media customized to space specifications and operational requirements.'}
                </p>

                {/* Core Items (3 max) */}
                <div className="pt-3 border-t border-[#E2E8F0] space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                      {isKo ? '공간 및 운영환경 분석' : 'Spatial & Operational Environment Analysis'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                      {isKo ? '디스플레이 시스템 설계' : 'Display System Engineering & Design'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                      {isKo ? '현장 시공 및 시스템 구축' : 'On-Site Installation & System Building'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-[#E2E8F0]" />

          {/* [02 디스플레이·제어 시스템] */}
          <section id="solution-02" className="scroll-mt-24 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Left */}
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#D97706] tracking-wider uppercase block">
                    02 SOLUTIONS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                    {isKo ? '디스플레이·제어 시스템' : 'Display & Control System'}
                  </h2>
                  <p className="text-xs font-mono font-semibold text-[#64748B] uppercase tracking-wider">
                    DISPLAY &amp; CONTROL SYSTEM
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
                  {isKo
                    ? '디스플레이와 컨트롤러를 연결해 안정적인 통합 송출 환경을 구성합니다.'
                    : 'Connecting displays and controllers to configure a stable integrated playout environment.'}
                </p>

                {/* Core Items (3 max) */}
                <div className="pt-3 border-t border-[#E2E8F0] space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                      {isKo ? '다중 디스플레이 통합 제어' : 'Multi-Display Integrated Control'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                      {isKo ? '화면 동기화 송출' : 'Synchronized Video Output'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                      {isKo ? '외부 시스템 연동' : 'External System Integration'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Right */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <SolutionImage
                  src={controlSystemImage}
                  alt="디스플레이 제어 시스템"
                  placeholderTitle="DISPLAY & CONTROL SYSTEM"
                  placeholderSub="IMAGE TO BE UPDATED"
                />
              </div>
            </div>
          </section>

          <hr className="border-[#E2E8F0]" />

          {/* [03 CMS·통합관제 및 운영] */}
          <section id="solution-03" className="scroll-mt-24 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Image Left */}
              <div className="lg:col-span-6 order-1">
                <SolutionImage
                  src={cmsImage}
                  alt="CMS 통합관제 화면"
                  placeholderTitle="CMS OPERATION SCREEN"
                  placeholderSub="IMAGE TO BE UPDATED"
                />
              </div>

              {/* Text Right */}
              <div className="lg:col-span-6 order-2 space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#D97706] tracking-wider uppercase block">
                    03 SOLUTIONS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                    {isKo ? 'CMS·통합관제 및 운영' : 'CMS & Integrated Operation'}
                  </h2>
                  <p className="text-xs font-mono font-semibold text-[#64748B] uppercase tracking-wider">
                    CMS &amp; INTEGRATED OPERATION
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
                  {isKo
                    ? '자체 CMS를 기반으로 콘텐츠 송출과 다중 미디어 통합관제를 수행합니다.'
                    : 'Conducting content playout and multi-media integrated control based on proprietary CMS.'}
                </p>

                {/* Core Items (3 max) */}
                <div className="pt-3 border-t border-[#E2E8F0] space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                      {isKo ? '콘텐츠 등록·편성·송출' : 'Content Management, Scheduling & Playout'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                      {isKo ? '원격 통합관제 및 상태 확인' : 'Remote Integrated Control & Status Monitoring'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                      {isKo ? '운영 로그 및 유지관리 지원' : 'Operation Logs & Maintenance Support'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* 3. PROJECT EXECUTION PROCESS (프로젝트 수행 프로세스) */}
        <div className="bg-[#102B42] text-white p-6 sm:p-10 rounded-[2px] space-y-8 shadow-sm">
          <div className="space-y-2 text-left">
            <span className="text-xs font-mono font-bold text-[#D0BE7D] uppercase tracking-widest block">
              PROCESS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {isKo ? '프로젝트 수행 프로세스' : 'Project Execution Process'}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-normal">
              {isKo
                ? '기획부터 구축, CMS 연동 및 통합운영까지 4단계로 진행합니다.'
                : 'Executed in 4 streamlined steps from planning to installation, CMS integration, and control.'}
            </p>
          </div>

          {/* 4 Steps Horizontal Line (Desktop) / Vertical Timeline (Mobile) */}
          <div className="hidden md:grid grid-cols-4 gap-4 relative pt-2">
            {/* Horizontal connecting line */}
            <div className="absolute top-[28px] left-8 right-8 h-[1px] bg-white/20 pointer-events-none" />

            <div className="relative space-y-2 pr-2">
              <div className="w-8 h-8 rounded-full bg-[#18324A] border border-[#D0BE7D] text-[#D0BE7D] font-mono text-xs font-bold flex items-center justify-center relative z-10">
                01
              </div>
              <p className="text-xs sm:text-sm font-bold text-white pt-1">
                {isKo ? '기획·요구사항 분석' : '01 Planning & Requirements'}
              </p>
            </div>

            <div className="relative space-y-2 pr-2">
              <div className="w-8 h-8 rounded-full bg-[#18324A] border border-[#D0BE7D] text-[#D0BE7D] font-mono text-xs font-bold flex items-center justify-center relative z-10">
                02
              </div>
              <p className="text-xs sm:text-sm font-bold text-white pt-1">
                {isKo ? '시스템 설계·구축' : '02 System Design & Installation'}
              </p>
            </div>

            <div className="relative space-y-2 pr-2">
              <div className="w-8 h-8 rounded-full bg-[#18324A] border border-[#D0BE7D] text-[#D0BE7D] font-mono text-xs font-bold flex items-center justify-center relative z-10">
                03
              </div>
              <p className="text-xs sm:text-sm font-bold text-white pt-1">
                {isKo ? 'CMS 연동·운영 테스트' : '03 CMS Integration & Testing'}
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#18324A] border border-[#D0BE7D] text-[#D0BE7D] font-mono text-xs font-bold flex items-center justify-center relative z-10">
                04
              </div>
              <p className="text-xs sm:text-sm font-bold text-white pt-1">
                {isKo ? '통합관제·운영' : '04 Integrated Control & Operation'}
              </p>
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="block md:hidden space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#18324A] border border-[#D0BE7D] text-[#D0BE7D] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                01
              </span>
              <p className="text-xs font-bold text-white">
                {isKo ? '기획·요구사항 분석' : 'Planning & Requirements'}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#18324A] border border-[#D0BE7D] text-[#D0BE7D] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                02
              </span>
              <p className="text-xs font-bold text-white">
                {isKo ? '시스템 설계·구축' : 'System Design & Installation'}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#18324A] border border-[#D0BE7D] text-[#D0BE7D] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                03
              </span>
              <p className="text-xs font-bold text-white">
                {isKo ? 'CMS 연동·운영 테스트' : 'CMS Integration & Testing'}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#18324A] border border-[#D0BE7D] text-[#D0BE7D] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                04
              </span>
              <p className="text-xs font-bold text-white">
                {isKo ? '통합관제·운영' : 'Integrated Control & Operation'}
              </p>
            </div>
          </div>
        </div>

        {/* 4. EXTENSION TECH AREA (확장 기술) */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 rounded-[2px] space-y-4">
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-bold text-[#64748B] uppercase tracking-wider block">
              TECHNOLOGY EXTENSION
            </span>
            <h3 className="text-lg font-bold text-[#0F172A]">
              {isKo ? '확장 기술' : 'Extension Technology'}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {isKo
                ? '디지털 사이니지와 CMS 기술을 기반으로 AI, XR 및 인터랙티브 미디어 분야로 기술 영역을 확장하고 있습니다.'
                : 'Expanding technology into AI, XR, and interactive media based on digital signage and CMS technologies.'}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 sm:gap-3">
            <div className="bg-white border border-[#CBD5E1] px-3.5 py-2 rounded-[2px] text-xs font-semibold text-[#1E293B]">
              {isKo ? 'AI 인식 기술' : 'AI Recognition Technology'}
            </div>
            <div className="bg-white border border-[#CBD5E1] px-3.5 py-2 rounded-[2px] text-xs font-semibold text-[#1E293B]">
              {isKo ? 'XR 미디어' : 'XR Media'}
            </div>
            <div className="bg-white border border-[#CBD5E1] px-3.5 py-2 rounded-[2px] text-xs font-semibold text-[#1E293B]">
              {isKo ? '인터랙티브 미디어' : 'Interactive Media'}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
