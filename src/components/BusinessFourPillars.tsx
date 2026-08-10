import React, { useState, useRef } from 'react';
import { Language } from '../types';

import imgLedMedia from '../assets/images/led_display_bg_1785990073226.jpg';
import imgControl from '../assets/images/hardware_controller_1785989182277.jpg';
import imgCms from '../assets/images/software_cms_monitor_1785989194504.jpg';
import imgAi from '../assets/images/ai_doorlock_face_1785989205164.jpg';
import imgIntro from '../assets/images/hero_led_glass_bg_1786019620069.jpg';

export const SOLUTION_TABS = [
  {
    id: 'led-media',
    label: 'LED MEDIA',
    koreanLabel: 'LED 미디어',
  },
  {
    id: 'control-system',
    label: 'CONTROL SYSTEM',
    koreanLabel: '제어 시스템',
  },
  {
    id: 'cms-operation',
    label: 'CMS & OPERATION',
    koreanLabel: 'CMS·통합운영',
  },
  {
    id: 'ai-interactive',
    label: 'AI & INTERACTIVE',
    koreanLabel: 'AI·인터랙티브',
  },
] as const;

export type SolutionTabId = (typeof SOLUTION_TABS)[number]['id'];

interface BusinessFourPillarsProps {
  currentLang: Language;
  onNavigateContact?: () => void;
  onNavigateProjects?: (category?: string) => void;
  [key: string]: any;
}

export const BusinessFourPillars: React.FC<BusinessFourPillarsProps> = ({
  currentLang,
  onNavigateContact,
  onNavigateProjects,
}) => {
  const [activeSolutionTab, setActiveSolutionTab] = useState<SolutionTabId>('led-media');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isKo = currentLang === 'ko';

  const handleKeyDown = (e: React.KeyboardEvent, currentId: SolutionTabId) => {
    const currentIndex = SOLUTION_TABS.findIndex((t) => t.id === currentId);
    if (currentIndex === -1) return;

    let nextIndex = -1;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % SOLUTION_TABS.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + SOLUTION_TABS.length) % SOLUTION_TABS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = SOLUTION_TABS.length - 1;
    }

    if (nextIndex !== -1) {
      const nextTab = SOLUTION_TABS[nextIndex];
      setActiveSolutionTab(nextTab.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className="bg-white text-[#222831]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        {/* 1. SOLUTIONS INTRO */}
        <div className="space-y-6 pb-8 border-b border-[#D9DEE3]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#D9DEE3]">
            <span className="text-xs font-mono font-bold text-[#294A63] tracking-[0.2em] uppercase">
              SOLUTIONS
            </span>
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#66717C]">
              FROM DISPLAY TO INTEGRATED OPERATION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#222831] tracking-tight leading-[1.25] font-sans">
                {isKo ? (
                  <>
                    구축부터 통합관제까지,<br />
                    하나의 시스템으로 연결합니다.
                  </>
                ) : (
                  'Connecting media construction to integrated control in one unified system.'
                )}
              </h1>
              <p className="text-sm sm:text-base text-[#66717C] font-normal leading-[1.8] font-sans max-w-2xl">
                {isKo
                  ? 'DISE는 LED 미디어 하드웨어와 디스플레이 제어 기술, 자체 CMS 및 통합운영 시스템을 통해 대규모 미디어 환경을 안정적으로 구축하고 운영합니다.'
                  : 'DISE reliably constructs and operates large-scale media environments through LED media hardware, display control technology, in-house CMS, and integrated management systems.'}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-[#F8F9FA] border border-[#D9DEE3]">
                <img
                  src={imgIntro}
                  alt="DISE Integrated Media Environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. TAB NAVIGATION */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-[#D9DEE3]">
          <div
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto py-3.5 scrollbar-none whitespace-nowrap"
            role="tablist"
            aria-label="DISE Solutions Navigation"
          >
            {SOLUTION_TABS.map((tab, index) => {
              const isActive = activeSolutionTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`sol-tab-${tab.id}`}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`sol-panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveSolutionTab(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, tab.id)}
                  className={`text-xs sm:text-sm font-mono tracking-wider uppercase pb-2 transition-colors cursor-pointer border-b-2 whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-[#294A63] ${
                    isActive
                      ? 'text-[#222831] border-[#294A63] font-bold'
                      : 'text-[#66717C] border-transparent hover:text-[#222831] font-semibold'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 text-[11px] font-sans font-normal opacity-70">
                    ({tab.koreanLabel})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. ACTIVE SOLUTION PANEL */}
        <div
          id={`sol-panel-${activeSolutionTab}`}
          role="tabpanel"
          aria-labelledby={`sol-tab-${activeSolutionTab}`}
          className="animate-fadeIn space-y-12"
        >
          {/* TAB 01: LED MEDIA */}
          {activeSolutionTab === 'led-media' && (
            <div className="space-y-10">
              {/* Header & Main Grid */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#294A63]">
                  <span>01</span>
                  <span className="uppercase tracking-widest">LED MEDIA PLANNING & INSTALLATION</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#222831] tracking-tight leading-[1.3]">
                      {isKo ? (
                        <>
                          공간의 목적과 환경에 맞는<br />
                          LED 미디어를 설계하고 구축합니다.
                        </>
                      ) : (
                        'Designing and installing LED media tailored to space purpose and environment.'
                      )}
                    </h2>
                    <p className="text-sm sm:text-base text-[#4A5568] leading-[1.85]">
                      {isKo
                        ? 'DISE는 공간 분석과 미디어 기획부터 디스플레이 설계, 현장 시공과 유지관리까지 LED 미디어 구축 전 과정을 수행합니다. 공항과 복합상업시설, 도시 옥외공간 등 다양한 환경에 맞춰 운영 안정성과 공간 경험을 함께 고려합니다.'
                        : 'DISE executes the entire LED media construction cycle, from spatial analysis and planning to display engineering, field installation, and ongoing maintenance.'}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#F8F9FA] border border-[#D9DEE3]">
                      <img
                        src={imgLedMedia}
                        alt="LED Media Installation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities Table */}
              <div className="pt-6 border-t border-[#D9DEE3] space-y-4">
                <h3 className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-widest">
                  CAPABILITIES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      SPACE ANALYSIS
                    </span>
                    <p className="text-xs text-[#222831] font-medium">공간·동선 및 운영 목적 분석</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      MEDIA PLANNING
                    </span>
                    <p className="text-xs text-[#222831] font-medium">LED 규격·위치·운영 방식 설계</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      INSTALLATION
                    </span>
                    <p className="text-xs text-[#222831] font-medium">디스플레이·전원·통신 환경 구축</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      MAINTENANCE
                    </span>
                    <p className="text-xs text-[#222831] font-medium">현장 점검 및 유지관리</p>
                  </div>
                </div>
              </div>

              {/* Core Tech & Proven Application */}
              <div className="pt-6 border-t border-[#D9DEE3] grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                    RELATED CORE TECHNOLOGY
                  </span>
                  <h4 className="text-lg font-bold text-[#222831]">
                    AFD · AERO-FLEX DISPLAY
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed">
                    개방형 메시 구조를 기반으로 후면 통풍과 장시간 운영 안정성을 고려한 LED 디스플레이 기술
                  </p>
                </div>
                <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#D9DEE3] pt-4 md:pt-0 md:pl-8">
                  <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                    REPRESENTATIVE APPLICATION
                  </span>
                  <h4 className="text-lg font-bold text-[#222831]">
                    INSPIRE ARENA LINK
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66717C]">
                    영종도 인스파이어 통합리조트 LED 미디어 구축
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 02: CONTROL SYSTEM */}
          {activeSolutionTab === 'control-system' && (
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#294A63]">
                  <span>02</span>
                  <span className="uppercase tracking-widest">CONTROL SYSTEM SYNCHRONIZED DISPLAY CONTROL</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#222831] tracking-tight leading-[1.3]">
                      {isKo ? (
                        <>
                          서로 다른 디스플레이를<br />
                          하나의 화면처럼 제어합니다.
                        </>
                      ) : (
                        'Controlling multiple distinct displays synchronized as one seamless screen.'
                      )}
                    </h2>
                    <p className="text-sm sm:text-base text-[#4A5568] leading-[1.85]">
                      {isKo
                        ? '대형 LED 미디어는 여러 디스플레이와 플레이어가 동일한 콘텐츠를 정확하게 출력할 수 있어야 합니다. DISE는 자체 제어 기술을 통해 다수의 디스플레이와 고해상도 콘텐츠를 안정적으로 동기화합니다.'
                        : 'Large-scale LED media requires exact playback synchronization across multiple displays and media players. DISE synchronizes high-resolution media seamlessly via proprietary controller tech.'}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#F8F9FA] border border-[#D9DEE3]">
                      <img
                        src={imgControl}
                        alt="Hardware Controller System"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="pt-6 border-t border-[#D9DEE3] space-y-4">
                <h3 className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-widest">
                  CAPABILITIES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      MULTI-DISPLAY CONTROL
                    </span>
                    <p className="text-xs text-[#222831] font-medium">다중 디스플레이 통합제어</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      FRAME SYNCHRONIZATION
                    </span>
                    <p className="text-xs text-[#222831] font-medium">프레임 단위 영상 동기화</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      HIGH-RESOLUTION OUTPUT
                    </span>
                    <p className="text-xs text-[#222831] font-medium">고해상도 콘텐츠 통합 송출</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      SYSTEM INTEGRATION
                    </span>
                    <p className="text-xs text-[#222831] font-medium">FIDS·운항통신 등 외부 시스템 연동</p>
                  </div>
                </div>
              </div>

              {/* Core Tech & Supporting Labels */}
              <div className="pt-6 border-t border-[#D9DEE3] grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                    RELATED CORE TECHNOLOGY
                  </span>
                  <h4 className="text-lg font-bold text-[#222831]">
                    MWC · MW CONTROLLER
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed">
                    다수의 디스플레이와 플레이어를 연결하고 고해상도 콘텐츠를 동기화하는 자체 제어 기술
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="bg-[#F8F9FA] border border-[#D9DEE3] text-[10px] font-mono text-[#294A63] px-2 py-0.5 rounded-[2px]">
                      MULTI-WINDOW SYNCHRONIZATION
                    </span>
                    <span className="bg-[#F8F9FA] border border-[#D9DEE3] text-[10px] font-mono text-[#294A63] px-2 py-0.5 rounded-[2px]">
                      16K·30K HIGH-RESOLUTION OPERATION
                    </span>
                    <span className="bg-[#F8F9FA] border border-[#D9DEE3] text-[10px] font-mono text-[#294A63] px-2 py-0.5 rounded-[2px]">
                      FIDS LINK
                    </span>
                  </div>
                </div>
                <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#D9DEE3] pt-4 md:pt-0 md:pl-8">
                  <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                    PROVEN APPLICATION
                  </span>
                  <h4 className="text-lg font-bold text-[#222831]">
                    SYNCHRONIZED DISPLAY CONTROL
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66717C]">
                    국내 대형 미디어 타워 및 관제 디스플레이 통합 동기화 제어
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03: CMS & OPERATION */}
          {activeSolutionTab === 'cms-operation' && (
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#294A63]">
                  <span>03</span>
                  <span className="uppercase tracking-widest">CMS & OPERATION INTEGRATED MEDIA MANAGEMENT</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#222831] tracking-tight leading-[1.3]">
                      {isKo ? (
                        <>
                          콘텐츠 송출부터 통합관제까지<br />
                          하나의 플랫폼에서 관리합니다.
                        </>
                      ) : (
                        'Managing from content scheduling to integrated control on a single platform.'
                      )}
                    </h2>
                    <p className="text-sm sm:text-base text-[#4A5568] leading-[1.85]">
                      {isKo
                        ? 'DISE의 자체 CMS는 다수의 미디어와 콘텐츠를 하나의 운영 환경에서 편성하고 관리합니다. 콘텐츠 예약 송출과 디스플레이 상태 확인, 긴급 메시지 전환 및 운영 로그 관리를 통해 대규모 미디어 환경의 안정적인 운영을 지원합니다.'
                        : 'DISE’s proprietary CMS schedules and manages multiple media assets across unified operating environments, handling remote monitoring, emergency overrides, and logging.'}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#F8F9FA] border border-[#D9DEE3]">
                      <img
                        src={imgCms}
                        alt="CMS Monitor & Control System"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="pt-6 border-t border-[#D9DEE3] space-y-4">
                <h3 className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-widest">
                  CAPABILITIES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-3.5 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      SCHEDULING
                    </span>
                    <p className="text-xs text-[#222831] font-medium">콘텐츠 편성·예약 송출</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-3.5 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      GROUP CONTROL
                    </span>
                    <p className="text-xs text-[#222831] font-medium">디스플레이 그룹 통합관리</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-3.5 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      MONITORING
                    </span>
                    <p className="text-xs text-[#222831] font-medium">운영 상태 원격 확인</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-3.5 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      EMERGENCY
                    </span>
                    <p className="text-xs text-[#222831] font-medium">긴급 콘텐츠 일괄 전환</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-3.5 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      LOG CONTROL
                    </span>
                    <p className="text-xs text-[#222831] font-medium">표출 이력 및 운영 로그 관리</p>
                  </div>
                </div>
              </div>

              {/* PROOF INFORMATION STRIP (Horizontal Ruled Table) */}
              <div className="bg-[#0B192C] text-white p-6 rounded-[2px] border-l-4 border-[#294A63] space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#D97706] uppercase tracking-widest block">
                  PROVEN DEPLOYMENT PROOF
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 border-t border-white/10">
                  <div className="space-y-1">
                    <span className="text-lg font-mono font-bold text-white">600+ SCREENS</span>
                    <p className="text-xs text-slate-300">인천공항 통합관리</p>
                  </div>
                  <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-4">
                    <span className="text-lg font-mono font-bold text-white">FIDS INTEGRATION</span>
                    <p className="text-xs text-slate-300">운항정보 실시간 연동</p>
                  </div>
                  <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-4">
                    <span className="text-lg font-mono font-bold text-white">INTEGRATED OPERATION</span>
                    <p className="text-xs text-slate-300">다수 시설 및 미디어 통합운영</p>
                  </div>
                </div>
              </div>

              {/* Core Tech & Representative Application */}
              <div className="pt-6 border-t border-[#D9DEE3] grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                    RELATED CORE TECHNOLOGIES
                  </span>
                  <h4 className="text-lg font-bold text-[#222831]">
                    DISE PREMIUM CMS
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="bg-[#F8F9FA] border border-[#D9DEE3] text-[10px] font-mono text-[#294A63] px-2 py-0.5 rounded-[2px]">
                      SOF · STACK-ON-FLOW
                    </span>
                    <span className="bg-[#F8F9FA] border border-[#D9DEE3] text-[10px] font-mono text-[#294A63] px-2 py-0.5 rounded-[2px]">
                      IMT · IMPERATIVE TRIGGER
                    </span>
                    <span className="bg-[#F8F9FA] border border-[#D9DEE3] text-[10px] font-mono text-[#294A63] px-2 py-0.5 rounded-[2px]">
                      FIDS LINK
                    </span>
                  </div>
                </div>
                <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#D9DEE3] pt-4 md:pt-0 md:pl-8">
                  <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                    REPRESENTATIVE APPLICATION
                  </span>
                  <h4 className="text-lg font-bold text-[#222831]">
                    INCHEON INTERNATIONAL AIRPORT
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66717C]">
                    인천국제공항 T1 / T2 600여 개 사이니지 통합관제 및 FIDS 연동 운영
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 04: AI & INTERACTIVE */}
          {activeSolutionTab === 'ai-interactive' && (
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#294A63]">
                  <span>04</span>
                  <span className="uppercase tracking-widest">AI & INTERACTIVE RESPONSIVE MEDIA TECHNOLOGY</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#222831] tracking-tight leading-[1.3]">
                      {isKo ? (
                        <>
                          사람과 공간의 반응을 인식하는<br />
                          지능형 미디어 환경을 만듭니다.
                        </>
                      ) : (
                        'Creating intelligent media environments responsive to people and space.'
                      )}
                    </h2>
                    <p className="text-sm sm:text-base text-[#4A5568] leading-[1.85]">
                      {isKo
                        ? 'DISE는 안면과 실루엣, 음성 등 다양한 정보를 인식해 사용자와 공간의 상황에 반응하는 미디어 기술을 개발합니다. 보안과 출입관리, 인터랙티브 콘텐츠와 스마트 공간 시스템에 적용할 수 있습니다.'
                        : 'DISE develops media technologies recognizing biometric silhouettes and spatial inputs to react interactively for security, access management, and smart space setups.'}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#F8F9FA] border border-[#D9DEE3]">
                      <img
                        src={imgAi}
                        alt="AI Biometric Face Recognition"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="pt-6 border-t border-[#D9DEE3] space-y-4">
                <h3 className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-widest">
                  CAPABILITIES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      BIOMETRIC RECOGNITION
                    </span>
                    <p className="text-xs text-[#222831] font-medium">안면·실루엣·음성 인식</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      LIVENESS DETECTION
                    </span>
                    <p className="text-xs text-[#222831] font-medium">위조방지 판별 기술</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      INTERACTIVE MEDIA
                    </span>
                    <p className="text-xs text-[#222831] font-medium">사용자 반응형 콘텐츠</p>
                  </div>
                  <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-4 rounded-[2px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase block">
                      XR PLATFORM
                    </span>
                    <p className="text-xs text-[#222831] font-medium">가상공간·미디어 연동</p>
                  </div>
                </div>
              </div>

              {/* Core Tech & Verified Applications */}
              <div className="pt-6 border-t border-[#D9DEE3] grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                    RELATED CORE TECHNOLOGY
                  </span>
                  <h4 className="text-lg font-bold text-[#222831]">
                    TED · TARGETING ECHO DETECT
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed">
                    AI 기반 생체 인식, 안면 실루엣 분석 및 사용자 반응 인터랙티브 기술
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="bg-[#F8F9FA] border border-[#D9DEE3] text-[10px] font-mono text-[#294A63] px-2 py-0.5 rounded-[2px]">
                      AI BIOMETRIC RECOGNITION
                    </span>
                    <span className="bg-[#F8F9FA] border border-[#D9DEE3] text-[10px] font-mono text-[#294A63] px-2 py-0.5 rounded-[2px]">
                      LIVENESS DETECTION
                    </span>
                    <span className="bg-[#F8F9FA] border border-[#D9DEE3] text-[10px] font-mono text-[#294A63] px-2 py-0.5 rounded-[2px]">
                      MULTIMODAL RECOGNITION
                    </span>
                    <span className="bg-[#F8F9FA] border border-[#D9DEE3] text-[10px] font-mono text-[#294A63] px-2 py-0.5 rounded-[2px]">
                      XR PLATFORM
                    </span>
                  </div>
                </div>
                <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#D9DEE3] pt-4 md:pt-0 md:pl-8">
                  <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                    VERIFIED APPLICATIONS
                  </span>
                  <ul className="text-xs sm:text-sm text-[#222831] space-y-1 font-medium">
                    <li>· 포스코ICT AI 안면인식 시스템</li>
                    <li>· 부산 엘시티 미디어 전시관</li>
                    <li>· 공공 스마트 솔루션 및 출입통제</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4. AMSIT CORE TECHNOLOGY (Common Section Below Active Panel) */}
        <div className="pt-12 border-t border-[#D9DEE3] space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-widest bg-[#294A63]/10 px-2 py-0.5 rounded-[2px]">
                AMSIT CORE TECHNOLOGY
              </span>
              <span className="text-xs font-mono font-semibold text-[#66717C] uppercase tracking-wider">
                5 CORE TECHNOLOGIES
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#222831] tracking-tight">
              {isKo
                ? '대규모 미디어 운영 경험을 통해 축적한 DISE의 통합 미디어 기술 체계'
                : 'DISE integrated media technology framework built through extensive operational experience.'}
            </h3>
          </div>

          {/* Connected Linear Matrix on Desktop / Stacked on Mobile */}
          <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-6 sm:p-8 rounded-[2px]">
            {/* DESKTOP MATRIX (Hidden on mobile) */}
            <div className="hidden lg:grid grid-cols-5 gap-4 relative">
              {/* Connector Line behind nodes */}
              <div className="absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#D9DEE3] z-0" />

              {/* Node 1: AFD */}
              <div
                className={`relative z-10 bg-white border p-4 rounded-[2px] space-y-2 text-center transition-all ${
                  activeSolutionTab === 'led-media'
                    ? 'border-[#294A63] shadow-xs'
                    : 'border-[#D9DEE3]'
                }`}
              >
                <span className="text-xs font-mono font-bold text-[#294A63] block">AFD</span>
                <p className="text-xs font-mono font-semibold text-[#222831]">AERO-FLEX DISPLAY</p>
                <p className="text-[11px] text-[#66717C] font-sans">개방형 LED 디스플레이 구조</p>
                <span className="text-[9px] font-mono text-[#294A63] bg-[#294A63]/5 px-1.5 py-0.5 rounded-[2px] block">
                  DISPLAY
                </span>
              </div>

              {/* Node 2: MWC */}
              <div
                className={`relative z-10 bg-white border p-4 rounded-[2px] space-y-2 text-center transition-all ${
                  activeSolutionTab === 'control-system'
                    ? 'border-[#294A63] shadow-xs'
                    : 'border-[#D9DEE3]'
                }`}
              >
                <span className="text-xs font-mono font-bold text-[#294A63] block">MWC</span>
                <p className="text-xs font-mono font-semibold text-[#222831]">MW CONTROLLER</p>
                <p className="text-[11px] text-[#66717C] font-sans">다중 디스플레이 제어·동기화</p>
                <span className="text-[9px] font-mono text-[#294A63] bg-[#294A63]/5 px-1.5 py-0.5 rounded-[2px] block">
                  CONTROL
                </span>
              </div>

              {/* Node 3: SOF */}
              <div
                className={`relative z-10 bg-white border p-4 rounded-[2px] space-y-2 text-center transition-all ${
                  activeSolutionTab === 'cms-operation'
                    ? 'border-[#294A63] shadow-xs'
                    : 'border-[#D9DEE3]'
                }`}
              >
                <span className="text-xs font-mono font-bold text-[#294A63] block">SOF</span>
                <p className="text-xs font-mono font-semibold text-[#222831]">STACK-ON-FLOW</p>
                <p className="text-[11px] text-[#66717C] font-sans">다중 콘텐츠 레이어 편성</p>
                <span className="text-[9px] font-mono text-[#294A63] bg-[#294A63]/5 px-1.5 py-0.5 rounded-[2px] block">
                  CONTENT
                </span>
              </div>

              {/* Node 4: IMT */}
              <div
                className={`relative z-10 bg-white border p-4 rounded-[2px] space-y-2 text-center transition-all ${
                  activeSolutionTab === 'cms-operation'
                    ? 'border-[#294A63] shadow-xs'
                    : 'border-[#D9DEE3]'
                }`}
              >
                <span className="text-xs font-mono font-bold text-[#294A63] block">IMT</span>
                <p className="text-xs font-mono font-semibold text-[#222831]">IMPERATIVE TRIGGER</p>
                <p className="text-[11px] text-[#66717C] font-sans">긴급 메시지·일괄 송출</p>
                <span className="text-[9px] font-mono text-[#294A63] bg-[#294A63]/5 px-1.5 py-0.5 rounded-[2px] block">
                  TRIGGER
                </span>
              </div>

              {/* Node 5: TED */}
              <div
                className={`relative z-10 bg-white border p-4 rounded-[2px] space-y-2 text-center transition-all ${
                  activeSolutionTab === 'ai-interactive'
                    ? 'border-[#294A63] shadow-xs'
                    : 'border-[#D9DEE3]'
                }`}
              >
                <span className="text-xs font-mono font-bold text-[#294A63] block">TED</span>
                <p className="text-xs font-mono font-semibold text-[#222831]">TARGETING ECHO DETECT</p>
                <p className="text-[11px] text-[#66717C] font-sans">AI 기반 인식·반응 기술</p>
                <span className="text-[9px] font-mono text-[#294A63] bg-[#294A63]/5 px-1.5 py-0.5 rounded-[2px] block">
                  INTELLIGENCE
                </span>
              </div>
            </div>

            {/* MOBILE VERTICAL SEQUENCE */}
            <div className="block lg:hidden space-y-3">
              <div className="bg-white border border-[#D9DEE3] p-3.5 rounded-[2px] flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#294A63]">AFD</span>
                  <p className="text-xs font-mono font-semibold text-[#222831]">AERO-FLEX DISPLAY</p>
                  <p className="text-[11px] text-[#66717C]">개방형 LED 디스플레이 구조</p>
                </div>
                <span className="text-[9px] font-mono text-[#294A63] bg-[#294A63]/10 px-2 py-0.5 rounded-[2px]">DISPLAY</span>
              </div>
              <div className="text-center text-xs text-[#294A63]">↓</div>

              <div className="bg-white border border-[#D9DEE3] p-3.5 rounded-[2px] flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#294A63]">MWC</span>
                  <p className="text-xs font-mono font-semibold text-[#222831]">MW CONTROLLER</p>
                  <p className="text-[11px] text-[#66717C]">다중 디스플레이 제어·동기화</p>
                </div>
                <span className="text-[9px] font-mono text-[#294A63] bg-[#294A63]/10 px-2 py-0.5 rounded-[2px]">CONTROL</span>
              </div>
              <div className="text-center text-xs text-[#294A63]">↓</div>

              <div className="bg-white border border-[#D9DEE3] p-3.5 rounded-[2px] flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#294A63]">SOF</span>
                  <p className="text-xs font-mono font-semibold text-[#222831]">STACK-ON-FLOW</p>
                  <p className="text-[11px] text-[#66717C]">다중 콘텐츠 레이어 편성</p>
                </div>
                <span className="text-[9px] font-mono text-[#294A63] bg-[#294A63]/10 px-2 py-0.5 rounded-[2px]">CONTENT</span>
              </div>
              <div className="text-center text-xs text-[#294A63]">↓</div>

              <div className="bg-white border border-[#D9DEE3] p-3.5 rounded-[2px] flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#294A63]">IMT</span>
                  <p className="text-xs font-mono font-semibold text-[#222831]">IMPERATIVE TRIGGER</p>
                  <p className="text-[11px] text-[#66717C]">긴급 메시지·일괄 송출</p>
                </div>
                <span className="text-[9px] font-mono text-[#294A63] bg-[#294A63]/10 px-2 py-0.5 rounded-[2px]">TRIGGER</span>
              </div>
              <div className="text-center text-xs text-[#294A63]">↓</div>

              <div className="bg-white border border-[#D9DEE3] p-3.5 rounded-[2px] flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#294A63]">TED</span>
                  <p className="text-xs font-mono font-semibold text-[#222831]">TARGETING ECHO DETECT</p>
                  <p className="text-[11px] text-[#66717C]">AI 기반 인식·반응 기술</p>
                </div>
                <span className="text-[9px] font-mono text-[#294A63] bg-[#294A63]/10 px-2 py-0.5 rounded-[2px]">INTELLIGENCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. APPLICATION AREAS (Common Section Below AMSIT) */}
        <div className="pt-10 border-t border-[#D9DEE3] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-widest block">
              APPLICATION AREAS
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#222831]">
              {isKo ? '다양한 공간과 운영 환경에 적용합니다.' : 'Deploying across diverse space & operational environments.'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              onClick={() => onNavigateProjects?.('airport')}
              className="bg-[#F8F9FA] border border-[#D9DEE3] p-5 rounded-[2px] space-y-2 cursor-pointer hover:border-[#294A63] transition-colors"
            >
              <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                AREA 01
              </span>
              <h4 className="text-base font-bold text-[#222831]">AIRPORT & TRANSPORTATION</h4>
              <p className="text-xs text-[#66717C] font-medium">공항·교통시설</p>
            </div>

            <div
              onClick={() => onNavigateProjects?.('landmark')}
              className="bg-[#F8F9FA] border border-[#D9DEE3] p-5 rounded-[2px] space-y-2 cursor-pointer hover:border-[#294A63] transition-colors"
            >
              <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                AREA 02
              </span>
              <h4 className="text-base font-bold text-[#222831]">COMMERCIAL & LANDMARK</h4>
              <p className="text-xs text-[#66717C] font-medium">복합상업시설·랜드마크</p>
            </div>

            <div
              onClick={() => onNavigateProjects?.('retail')}
              className="bg-[#F8F9FA] border border-[#D9DEE3] p-5 rounded-[2px] space-y-2 cursor-pointer hover:border-[#294A63] transition-colors"
            >
              <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                AREA 03
              </span>
              <h4 className="text-base font-bold text-[#222831]">PUBLIC & FINANCIAL</h4>
              <p className="text-xs text-[#66717C] font-medium">공공기관·금융·리테일</p>
            </div>

            <div
              onClick={() => onNavigateProjects?.('global')}
              className="bg-[#F8F9FA] border border-[#D9DEE3] p-5 rounded-[2px] space-y-2 cursor-pointer hover:border-[#294A63] transition-colors"
            >
              <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                AREA 04
              </span>
              <h4 className="text-base font-bold text-[#222831]">GLOBAL MEDIA</h4>
              <p className="text-xs text-[#66717C] font-medium">해외 LED 미디어 사업</p>
            </div>
          </div>
        </div>

        {/* 6. CONTACT CTA (One CTA at bottom) */}
        <div className="pt-10 border-t border-[#D9DEE3]">
          <div className="bg-[#0B192C] text-white p-8 sm:p-12 rounded-[2px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-4 border-[#294A63]">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold text-[#D97706] uppercase tracking-widest block">
                BUILD YOUR MEDIA INFRASTRUCTURE WITH DISE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {isKo
                  ? 'LED 미디어 구축과 통합운영 환경에 대해 상담해보세요.'
                  : 'Consult with DISE for LED media infrastructure & integrated operations.'}
              </h3>
            </div>
            {onNavigateContact && (
              <button
                type="button"
                onClick={onNavigateContact}
                className="px-6 py-3 bg-[#294A63] hover:bg-[#1f384c] text-white font-mono text-xs sm:text-sm font-bold tracking-wider rounded-[2px] transition-colors whitespace-nowrap cursor-pointer shrink-0 border border-white/10"
              >
                CONTACT US →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
