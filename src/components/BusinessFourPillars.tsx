import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { ArrowRight } from 'lucide-react';

export const controlSystemImage = "/images/solutions/control-system-placeholder.webp";
export const cmsImage = "/images/solutions/solution-cms-operation-interface.webp";

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

interface SolutionSectionCardProps {
  id: string;
  num: string;
  titleKo: string;
  titleEn: string;
  desc: string;
  coreItemsKo: string[];
  coreItemsEn: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageHeaderLabel?: string;
  imageSubTitle?: string;
  imageNotice?: string;
  imageFitContain?: boolean;
  imageOnLeft?: boolean;
  isKo: boolean;
}

const SolutionSectionCard: React.FC<SolutionSectionCardProps> = ({
  id,
  num,
  titleKo,
  titleEn,
  desc,
  coreItemsKo,
  coreItemsEn,
  imageSrc,
  imageAlt = '',
  imageCaption,
  imageHeaderLabel,
  imageSubTitle,
  imageNotice,
  imageFitContain = false,
  imageOnLeft = true,
  isKo,
}) => {
  const [imageValid, setImageValid] = useState<boolean | null>(null);

  useEffect(() => {
    if (!imageSrc) {
      setImageValid(false);
      return;
    }
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setImageValid(true);
    img.onerror = () => setImageValid(false);
  }, [imageSrc]);

  const showImage = imageValid === true;

  return (
    <section id={id} className="scroll-mt-24 space-y-6 pt-2">
      {showImage ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Container */}
          <div className={`lg:col-span-6 ${imageOnLeft ? 'order-1 lg:order-1' : 'order-2 lg:order-2'} space-y-2`}>
            {/* Header / SubTitle above image if provided */}
            {(imageHeaderLabel || imageSubTitle) && (
              <div className="flex items-center justify-between pb-0.5">
                {imageHeaderLabel && (
                  <span className="text-[11px] font-mono font-bold text-[#294A63] tracking-widest uppercase">
                    {imageHeaderLabel}
                  </span>
                )}
                {imageSubTitle && (
                  <span className="text-[11px] font-bold text-[#334155]">
                    {imageSubTitle}
                  </span>
                )}
              </div>
            )}

            {/* Image Frame */}
            <div className={`w-full aspect-[16/10] overflow-hidden rounded-[2px] ${imageFitContain ? 'bg-[#0F172A]' : 'bg-[#102B42]'} border border-[#E2E8F0] relative flex items-center justify-center p-1 sm:p-2`}>
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                className={`w-full h-full ${imageFitContain ? 'object-contain' : 'object-cover'} object-center transition-transform duration-300`}
              />
            </div>

            {/* Caption / Notice below image */}
            {(imageCaption || imageNotice) && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-0.5">
                {imageCaption && (
                  <span className="text-[11px] font-mono text-[#64748B] tracking-wider uppercase font-medium">
                    {imageCaption}
                  </span>
                )}
                {imageNotice && (
                  <span className="text-[11px] text-[#64748B] font-normal leading-normal">
                    {imageNotice}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Text Container */}
          <div className={`lg:col-span-6 ${imageOnLeft ? 'order-2 lg:order-2' : 'order-1 lg:order-1'} space-y-5`}>
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#D97706] tracking-wider uppercase block">
                {num} SOLUTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                {isKo ? titleKo : titleEn}
              </h2>
              <p className="text-xs font-mono font-semibold text-[#64748B] uppercase tracking-wider">
                {titleEn}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
              {desc}
            </p>

            {/* Core Items */}
            <div className="pt-3 border-t border-[#E2E8F0] space-y-2.5">
              {(isKo ? coreItemsKo : coreItemsEn).map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Text-Only Full Width Layout when image is unavailable */
        <div className="w-full space-y-6 py-2">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono font-bold text-[#D97706] tracking-wider uppercase block">
              {num} SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              {isKo ? titleKo : titleEn}
            </h2>
            <p className="text-xs font-mono font-semibold text-[#64748B] uppercase tracking-wider">
              {titleEn}
            </p>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal pt-1">
              {desc}
            </p>
          </div>

          {/* Core Items in 3-column grid */}
          <div className="pt-4 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(isKo ? coreItemsKo : coreItemsEn).map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-[2px] border border-[#E2E8F0]">
                <span className="w-1.5 h-1.5 bg-[#294A63] rounded-full shrink-0 mt-2" />
                <span className="text-xs sm:text-sm font-semibold text-[#1E293B] leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export const BusinessFourPillars: React.FC<BusinessFourPillarsProps> = ({
  currentLang,
  onNavigateContact,
}) => {
  const isKo = currentLang === 'ko';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 1. Business Domains (4 domains)
  const businessDomains = [
    {
      num: '01',
      titleEn: 'DISPLAY HARDWARE',
      titleKo: '디스플레이 하드웨어',
      descKo: '디스플레이·자체 컨트롤러',
      descEn: 'Display & Proprietary Controller',
    },
    {
      num: '02',
      titleEn: 'DISE PLATFORM',
      titleKo: '다이즈 플랫폼',
      descKo: 'CMS·FIDS 연동·멀티 싱크 운영',
      descEn: 'CMS, FIDS Sync & Multi-Sync Operation',
    },
    {
      num: '03',
      titleEn: 'AI & DEEP LEARNING',
      titleKo: 'AI·딥러닝',
      descKo: 'AI 인식·XR 가상공간',
      descEn: 'AI Recognition & XR Virtual Space',
    },
    {
      num: '04',
      titleEn: 'CONTENT & SERVICE',
      titleKo: '콘텐츠·서비스',
      descKo: '콘텐츠 운영·B2G 안전 솔루션',
      descEn: 'Content Operations & B2G Safety Solutions',
    },
  ];

  // 2. AMSIT Core Technologies (5 techs)
  const amsitCoreTechs = [
    {
      num: '01',
      acronym: 'AFD',
      enName: 'AERO-FLEX DISPLAY',
      koName: '에어로-플렉스 디스플레이',
      descKo: '오픈 메시 기반 LED 디스플레이',
      descEn: 'Open-mesh based LED display',
    },
    {
      num: '02',
      acronym: 'MWC',
      enName: 'MW CONTROLLER',
      koName: 'MW 컨트롤러',
      descKo: '다중 디스플레이 제어',
      descEn: 'Multi-display control',
    },
    {
      num: '03',
      acronym: 'SOF',
      enName: 'STACK-ON-FLOW',
      koName: '스택 온 플로우',
      descKo: '멀티레이어 콘텐츠 구성',
      descEn: 'Multi-layer content composition',
    },
    {
      num: '04',
      acronym: 'IMT',
      enName: 'IMPERATIVE TRIGGER',
      koName: '임페러티브 트리거',
      descKo: '상황 기반 콘텐츠 전환',
      descEn: 'Context-based content switching',
    },
    {
      num: '05',
      acronym: 'TED',
      enName: 'TARGETING ECHO DETECT',
      koName: '타기팅 에코 디텍트',
      descKo: 'AI 기반 인식 기술',
      descEn: 'AI-based recognition technology',
    },
  ];

  // 3. Technology Highlights (3 detail items)
  const techHighlights = [
    {
      num: '01',
      titleEn: 'MULTI-WINDOW SYNCHRONIZATION',
      titleKo: '다중 화면 동기화',
      descKo: '동일한 영상 소스를 여러 디스플레이에 동기화하여 하나의 연결된 미디어 환경으로 운영합니다.',
      descEn: 'Synchronizes the same video source across multiple displays to operate as a single connected media environment.',
    },
    {
      num: '02',
      titleEn: 'AERO-FLEX OPEN-MESH DISPLAY',
      titleKo: '에어로-플렉스 오픈 메시 디스플레이',
      descKo: '후면이 개방된 메시 구조를 적용해 자연 통풍과 효율적인 유지관리 환경을 고려한 LED 디스플레이 기술입니다.',
      descEn: 'LED display technology engineered with an open-mesh rear structure for natural ventilation and efficient maintenance.',
    },
    {
      num: '03',
      titleEn: 'AI BIOMETRIC RECOGNITION',
      titleKo: 'AI 생체 인식 기술',
      descKo: '안면·실루엣·음성 등 다양한 입력을 활용하는 인식 기술과 인터랙티브 환경을 연구·개발합니다.',
      descEn: 'Researching and developing recognition technologies utilizing various inputs such as face, silhouette, and voice for interactive environments.',
    },
  ];

  return (
    <div className="bg-white text-[#222831] font-sans selection:bg-[#294A63] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* 1. PAGE INTRO (페이지 소개) */}
        <div className="space-y-4 pb-6 border-b border-[#D9DEE3]">
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

        {/* 2. BUSINESS DOMAINS (4개 사업영역) */}
        <div className="space-y-4">
          <div className="space-y-1 text-left">
            <span className="text-[11px] font-mono font-bold text-[#D97706] tracking-[0.2em] uppercase block">
              BUSINESS DOMAINS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
              {isKo ? '4개 사업영역' : '4 Business Domains'}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {isKo
                ? '디스플레이 하드웨어부터 자체 플랫폼, AI 기술과 콘텐츠 운영까지 미디어 사업 전반을 연결합니다.'
                : 'Connecting the entire media business from display hardware to proprietary platforms, AI technology, and content operations.'}
            </p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-[2px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
            {businessDomains.map((domain) => (
              <div key={domain.num} className="p-4 sm:p-5 space-y-2 flex flex-col justify-between hover:bg-[#F8FAFC] transition-colors">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#D97706] block">
                    {domain.num}
                  </span>
                  <h3 className="text-xs font-mono font-bold text-[#1E293B] uppercase tracking-wider">
                    {domain.titleEn}
                  </h3>
                  <p className="text-sm font-bold text-[#0F172A]">
                    {isKo ? domain.titleKo : domain.titleEn}
                  </p>
                </div>
                <p className="text-xs text-[#64748B] font-normal leading-normal pt-2 border-t border-[#F1F5F9]">
                  {isKo ? domain.descKo : domain.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* INDEX MENU (핵심 솔루션 가로형 인덱스 메뉴) */}
        <div className="pt-2">
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

        {/* 3. CORE SOLUTIONS (3 INDEPENDENT SECTIONS) */}
        <div className="space-y-16 sm:space-y-20">

          {/* [01 LED 미디어 기획·구축] */}
          <SolutionSectionCard
            id="solution-01"
            num="01"
            titleKo="LED 미디어 기획·구축"
            titleEn="LED Media Planning & Installation"
            desc={isKo
              ? '공간과 운영 목적에 맞는 LED 미디어를 기획하고 구축합니다.'
              : 'Planning and building LED media customized to space specifications and operational requirements.'}
            coreItemsKo={[
              '공간 및 운영환경 분석',
              '디스플레이 시스템 설계',
              '현장 시공 및 시스템 구축',
            ]}
            coreItemsEn={[
              'Spatial & Operational Environment Analysis',
              'Display System Engineering & Design',
              'On-Site Installation & System Building',
            ]}
            imageSrc="/images/about/history-inspire-arena-v2.webp"
            imageAlt="INSPIRE ARENA LED 미디어 프로젝트"
            imageOnLeft={true}
            isKo={isKo}
          />

          <hr className="border-[#E2E8F0]" />

          {/* [02 디스플레이·제어 시스템] */}
          <SolutionSectionCard
            id="solution-02"
            num="02"
            titleKo="디스플레이·제어 시스템"
            titleEn="Display & Control System"
            desc={isKo
              ? '디스플레이와 컨트롤러를 연결해 안정적인 통합 송출 환경을 구성합니다.'
              : 'Connecting displays and controllers to configure a stable integrated playout environment.'}
            coreItemsKo={[
              '다중 디스플레이 통합 제어',
              '화면 동기화 송출',
              '외부 시스템 연동',
            ]}
            coreItemsEn={[
              'Multi-Display Integrated Control',
              'Synchronized Video Output',
              'External System Integration',
            ]}
            imageSrc={controlSystemImage}
            imageAlt="디스플레이 제어 시스템"
            imageOnLeft={false}
            isKo={isKo}
          />

          <hr className="border-[#E2E8F0]" />

          {/* [03 CMS·통합관제 및 운영] */}
          <SolutionSectionCard
            id="solution-03"
            num="03"
            titleKo="CMS·통합관제 및 운영"
            titleEn="CMS & Integrated Operation"
            desc={isKo
              ? '자체 CMS를 기반으로 콘텐츠 송출과 다중 미디어 통합관제를 수행합니다.'
              : 'Conducting content playout and multi-media integrated control based on proprietary CMS.'}
            coreItemsKo={[
              '콘텐츠 등록·편성·송출',
              '원격 통합관제 및 상태 확인',
              '운영 로그 및 유지관리 지원',
            ]}
            coreItemsEn={[
              'Content Management, Scheduling & Playout',
              'Remote Integrated Control & Status Monitoring',
              'Operation Logs & Maintenance Support',
            ]}
            imageSrc={cmsImage}
            imageAlt="CMS 콘텐츠 편성과 다중 디스플레이 통합관제 예시 화면"
            imageHeaderLabel="CMS INTERFACE"
            imageSubTitle={isKo ? '통합 미디어 운영 화면' : 'Integrated Media Operation Display'}
            imageNotice={isKo ? '※ 이해를 돕기 위한 예시 화면입니다.' : '※ Illustrative example screen.'}
            imageFitContain={true}
            imageOnLeft={false}
            isKo={isKo}
          />

        </div>

        {/* 4. AMSIT CORE TECHNOLOGY (AMSIT 5대 핵심 기술) */}
        <div className="space-y-6 pt-6 border-t border-[#E2E8F0]">
          <div className="space-y-1 text-left">
            <span className="text-[11px] font-mono font-bold text-[#294A63] tracking-[0.2em] uppercase block">
              AMSIT CORE TECHNOLOGY
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
              {isKo ? '5대 핵심 기술' : 'AMSIT 5 Core Technologies'}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {isKo
                ? '대규모 미디어 환경의 구축과 운영을 위해 자체적으로 축적한 핵심 기술 체계입니다.'
                : 'Core technology framework accumulated for building and operating large-scale media environments.'}
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
            {amsitCoreTechs.map((tech) => (
              <div key={tech.num} className="p-4 sm:p-5 space-y-3 bg-white hover:bg-[#F1F5F9] transition-colors flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#D97706]">
                      {tech.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">
                      AMSIT
                    </span>
                  </div>
                  
                  <div>
                    <div className="text-2xl sm:text-3xl font-mono font-black text-[#18324A] tracking-tight">
                      {tech.acronym}
                    </div>
                    <div className="text-[10px] font-mono font-semibold text-[#64748B] uppercase tracking-wider pt-0.5">
                      {tech.enName}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug">
                    {isKo ? tech.koName : tech.enName}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F1F5F9]">
                  <p className="text-xs text-[#475569] font-normal leading-normal">
                    {isKo ? tech.descKo : tech.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. TECHNOLOGY HIGHLIGHTS (핵심 기술 상세 3개) */}
        <div className="space-y-6 pt-6 border-t border-[#E2E8F0]">
          <div className="space-y-1 text-left">
            <span className="text-[11px] font-mono font-bold text-[#D97706] tracking-[0.2em] uppercase block">
              TECHNOLOGY HIGHLIGHTS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
              {isKo ? '핵심 기술 상세' : 'Technology Highlights'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
            {techHighlights.map((highlight) => (
              <div key={highlight.num} className="border-t-2 border-[#18324A] pt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#D97706]">
                    {highlight.num}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">
                    {highlight.titleEn}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {isKo ? highlight.titleKo : highlight.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                  {isKo ? highlight.descKo : highlight.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. PROJECT EXECUTION PROCESS (프로젝트 수행 프로세스) */}
        <div className="bg-[#102B42] text-white p-6 sm:p-8 rounded-[2px] space-y-6 shadow-sm">
          <div className="space-y-1 text-left">
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
          <div className="block md:hidden space-y-3 pt-1">
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

        {/* 7. EXTENSION TECHNOLOGY (확장 기술) */}
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

          <div className="pt-1 flex flex-wrap gap-2 sm:gap-3">
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

        {/* 8. CONTACT CTA (문의 CTA) */}
        <div className="bg-[#18324A] text-white p-6 sm:p-8 rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold text-[#D0BE7D] uppercase tracking-widest block">
              PROJECT INQUIRY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {isKo ? '맞춤형 미디어 솔루션 도입 문의' : 'Inquire About Custom Media Solutions'}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
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

      </div>
    </div>
  );
};

