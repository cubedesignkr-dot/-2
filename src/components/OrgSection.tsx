import React from 'react';
import { Language } from '../types';

interface OrgSectionProps {
  currentLang: Language;
}

export const OrgSection: React.FC<OrgSectionProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  return (
    <div className="space-y-16 sm:space-y-20 text-[#222831]">
      {/* 1. ORGANIZATION INTRO */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#D9DEE3]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#294A63]">04</span>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63]">
              ORGANIZATION
            </span>
          </div>
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#66717C]">
            ONE SYSTEM, CONNECTED EXPERTISE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-2">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#222831] tracking-tight leading-[1.25] font-sans">
              {isKo ? (
                <>
                  전문 조직과 관계사 네트워크가<br />
                  하나의 미디어 사업을 완성합니다.
                </>
              ) : (
                'Specialized teams and affiliate networks completing one integrated media ecosystem.'
              )}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm sm:text-base text-[#66717C] font-normal leading-[1.8] font-sans">
              {isKo
                ? 'DISE는 기술 개발과 미디어 구축, 운영 및 사업 관리를 전문 기능별 조직으로 수행합니다. 각 분야의 관계사와 협력하여 LED 미디어의 구축부터 광고와 콘텐츠 운영까지 연결된 사업 체계를 제공합니다.'
                : 'DISE operates specialized functional units covering technology development, media construction, operation, and management. In partnership with domain affiliates, we deliver a connected business framework from LED installation to ad and content deployment.'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. PUBLIC ORGANIZATION STRUCTURE */}
      <div className="space-y-6 pt-4">
        <div className="text-xs font-mono font-semibold text-[#294A63] uppercase tracking-widest">
          {isKo ? '다이즈하이미디어 본사 조직 체계' : 'CORPORATE ORGANIZATIONAL HIERARCHY'}
        </div>

        {/* Tree Container */}
        <div className="bg-[#F8F9FA] border border-[#D9DEE3] rounded-[2px] p-6 sm:p-10 space-y-8">
          {/* Top: Representative / CEO */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-white border-2 border-[#294A63] px-6 py-3.5 rounded-[2px] min-w-[220px] shadow-xs space-y-1">
              <span className="text-[11px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                {isKo ? '대표이사' : 'CHIEF EXECUTIVE OFFICER'}
              </span>
              <p className="text-lg font-bold text-[#222831] tracking-tight">
                {isKo ? '유정우' : 'YOO JEONG WOO'}
              </p>
              <p className="text-[11px] font-mono text-[#66717C]">
                CEO · DISE HIGH MEDIA
              </p>
            </div>

            {/* Vertical Line from CEO */}
            <div className="w-[1px] h-8 bg-[#294A63] my-1" />
          </div>

          {/* Functional Teams (Horizontal Connector on Desktop, Stacked on Mobile) */}
          <div className="relative">
            {/* Desktop Horizontal Line connecting 4 columns */}
            <div className="hidden md:block absolute top-0 left-[12.5%] right-[12.5%] h-[1px] bg-[#294A63]" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 pt-0 md:pt-6">
              {/* Team 01: Development */}
              <div className="relative flex flex-col items-center">
                <div className="hidden md:block absolute -top-6 w-[1px] h-6 bg-[#294A63]" />
                <div className="w-full bg-white border border-[#D9DEE3] p-4 sm:p-5 rounded-[2px] text-center space-y-2 h-full">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] tracking-wider uppercase block">
                      DEV TEAM
                    </span>
                    <h4 className="text-base font-bold text-[#222831]">
                      {isKo ? '개발팀' : 'Development Team'}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66717C] font-normal leading-relaxed">
                    {isKo ? 'CMS·통합관제 시스템 및 미디어 기술 개발' : 'CMS, Control System & Media Tech R&D'}
                  </p>
                </div>
              </div>

              {/* Team 02: Construction */}
              <div className="relative flex flex-col items-center">
                <div className="hidden md:block absolute -top-6 w-[1px] h-6 bg-[#294A63]" />
                <div className="w-full bg-white border border-[#D9DEE3] p-4 sm:p-5 rounded-[2px] text-center space-y-2 h-full">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] tracking-wider uppercase block">
                      CONSTRUCTION
                    </span>
                    <h4 className="text-base font-bold text-[#222831]">
                      {isKo ? '시공팀' : 'Construction Team'}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66717C] font-normal leading-relaxed">
                    {isKo ? 'LED 미디어 구축·현장 품질 및 유지관리' : 'LED Installation, Field Quality & Maintenance'}
                  </p>
                </div>
              </div>

              {/* Team 03: Finance */}
              <div className="relative flex flex-col items-center">
                <div className="hidden md:block absolute -top-6 w-[1px] h-6 bg-[#294A63]" />
                <div className="w-full bg-white border border-[#D9DEE3] p-4 sm:p-5 rounded-[2px] text-center space-y-2 h-full">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] tracking-wider uppercase block">
                      FINANCE
                    </span>
                    <h4 className="text-base font-bold text-[#222831]">
                      {isKo ? '재무팀' : 'Finance Team'}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66717C] font-normal leading-relaxed">
                    {isKo ? '경영관리·재무 및 사업 운영 지원' : 'Corporate Management, Finance & Ops Support'}
                  </p>
                </div>
              </div>

              {/* Team 04: Sales */}
              <div className="relative flex flex-col items-center">
                <div className="hidden md:block absolute -top-6 w-[1px] h-6 bg-[#294A63]" />
                <div className="w-full bg-white border border-[#D9DEE3] p-4 sm:p-5 rounded-[2px] text-center space-y-2 h-full">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#294A63] tracking-wider uppercase block">
                      SALES
                    </span>
                    <h4 className="text-base font-bold text-[#222831]">
                      {isKo ? '영업팀' : 'Sales Team'}
                    </h4>
                  </div>
                  <p className="text-xs text-[#66717C] font-normal leading-relaxed">
                    {isKo ? '국내외 프로젝트 개발 및 고객·파트너 협력' : 'Domestic/Global Projects & Partner Relations'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ADHEAT INTEGRATED NETWORK INTRO */}
      <div className="pt-8 border-t border-[#D9DEE3] space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#294A63] bg-[#294A63]/10 px-2 py-0.5 rounded-[2px]">
            INTEGRATED BUSINESS NETWORK
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-2">
            <h3 className="text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider">
              ADHEAT FIVE-PARTY CIRCULAR CLUSTER
            </h3>
            <h4 className="text-2xl sm:text-3xl font-semibold text-[#222831] tracking-tight leading-snug">
              {isKo ? '5개 전문 영역을 연결하는\n실시간 미디어 운영 네트워크' : 'Real-time media operation network connecting 5 specialized domains.'}
            </h4>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm sm:text-base text-[#66717C] font-normal leading-[1.8] font-sans">
              {isKo
                ? 'ADHEAT는 매체 운영, 광고 영업, 시공, 콘텐츠 제작, CMS 통합관제를 하나의 순환 구조로 연결합니다. 각 전문 주체의 실행 결과는 ADHEAT를 중심으로 통합되어 미디어 슬롯과 콘텐츠 운영 현황을 실시간으로 관리합니다.'
                : 'ADHEAT connects media ownership, ad sales, construction, content production, and CMS control into one circular ecosystem. Execution results are integrated around ADHEAT to manage ad slots and content status in real time.'}
            </p>
          </div>
        </div>
      </div>

      {/* 4. ADHEAT FIVE-PARTY CIRCULAR CLUSTER DIAGRAM */}
      <div className="space-y-6">
        {/* DESKTOP CIRCULAR CLUSTER (Hidden on mobile) */}
        <div className="hidden lg:block relative bg-[#F8F9FA] border border-[#D9DEE3] rounded-[2px] p-8 min-h-[620px] overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#294A63_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none" />

          {/* SVG Connector Lines Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 620" preserveAspectRatio="none">
            <defs>
              <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#D97706" />
              </marker>
              <marker id="arrow-[#294A63]" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#294A63" />
              </marker>
            </defs>

            {/* Circular Path Arrows (Node 1 -> 2 -> 3 -> 4 -> 5 -> 1) */}
            {/* 1 (500,75) -> 2 (820,200) */}
            <path d="M 580 85 Q 730 110 800 170" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow-gold)" />
            {/* 2 (820,220) -> 3 (750,510) */}
            <path d="M 830 270 Q 820 420 770 480" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow-gold)" />
            {/* 3 (750,530) -> 4 (250,530) */}
            <path d="M 680 540 Q 500 570 320 540" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow-gold)" />
            {/* 4 (250,510) -> 5 (180,220) */}
            <path d="M 230 480 Q 180 420 170 270" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow-gold)" />
            {/* 5 (180,200) -> 1 (500,75) */}
            <path d="M 200 170 Q 270 110 420 85" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow-gold)" />

            {/* Radial Lines to Center ADHEAT (500,310) */}
            <line x1="500" y1="130" x2="500" y2="230" stroke="#294A63" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
            <line x1="750" y1="220" x2="620" y2="280" stroke="#294A63" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
            <line x1="700" y1="480" x2="580" y2="380" stroke="#294A63" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
            <line x1="300" y1="480" x2="420" y2="380" stroke="#294A63" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
            <line x1="250" y1="220" x2="380" y2="280" stroke="#294A63" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
          </svg>

          {/* CENTRAL ADHEAT COMMAND CENTER */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 w-80 bg-[#0B192C] text-white border-2 border-[#D97706] p-5 rounded-[2px] shadow-lg space-y-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#D97706] uppercase">
                  ADHEAT PLATFORM
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-400">COMMAND CENTER</span>
            </div>

            <div className="text-center space-y-1 py-1">
              <h4 className="text-xl font-mono font-bold text-white tracking-wider">
                ADHEAT
              </h4>
              <p className="text-[11px] font-mono text-amber-400 tracking-wide font-semibold">
                REAL-TIME SLOT COMMAND CENTER
              </p>
              <p className="text-xs font-sans text-slate-300 font-medium">
                {isKo ? '실시간 슬롯 통합관제' : 'Real-time Slot Control'}
              </p>
            </div>

            {/* Schematic Slot Control Interface */}
            <div className="bg-[#1E293B] border border-white/10 p-2.5 rounded-[2px] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 border-b border-white/5 pb-1">
                <span>ACTIVE SLOTS: 12/12</span>
                <span className="text-emerald-400">SYNC 100%</span>
              </div>
              <div className="grid grid-cols-6 gap-1">
                {Array.from({ length: 12 }).map((_, idx) => (
                  <div key={idx} className="h-2 bg-[#294A63] border border-amber-500/40 rounded-[1px] flex items-center justify-center">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-0.5">
                <span>INCHEON AIRPORT T1/T2</span>
                <span>600+ DISPLAYS</span>
              </div>
            </div>
          </div>

          {/* NODE 01: 다이즈하이미디어 (Media Owner) - TOP */}
          <div className="absolute top-[4%] left-[50%] -translate-x-1/2 z-20 w-64 bg-white border-2 border-[#294A63] p-4 rounded-[2px] shadow-sm space-y-1.5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1">
              <span className="text-[10px] font-mono font-bold text-[#294A63]">NODE 01</span>
              <span className="text-[10px] font-mono font-semibold text-[#294A63] bg-[#294A63]/10 px-1.5 py-0.5 rounded-[2px]">
                {isKo ? '매체사' : 'MEDIA OWNER'}
              </span>
            </div>
            <h5 className="text-base font-bold text-[#222831]">
              {isKo ? '다이즈하이미디어' : 'DISE HIGH MEDIA'}
            </h5>
            <p className="text-xs text-[#66717C]">
              {isKo ? '지면 보유 · 슬롯 개방' : 'Inventory Ownership & Slot Release'}
            </p>
          </div>

          {/* NODE 02: 알투뷔 (Ad Agency) - TOP RIGHT */}
          <div className="absolute top-[26%] right-[4%] z-20 w-64 bg-white border-2 border-[#C2410C] p-4 rounded-[2px] shadow-sm space-y-1.5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1">
              <span className="text-[10px] font-mono font-bold text-[#C2410C]">NODE 02</span>
              <span className="text-[10px] font-mono font-semibold text-[#C2410C] bg-[#C2410C]/10 px-1.5 py-0.5 rounded-[2px]">
                {isKo ? '광고대행사' : 'AD AGENCY'}
              </span>
            </div>
            <h5 className="text-base font-bold text-[#222831]">
              알투뷔 <span className="text-xs font-mono font-normal text-[#66717C]">(R2V)</span>
            </h5>
            <p className="text-xs text-[#66717C]">
              {isKo ? '광고 영업 · 수주 · 청약' : 'Ad Sales, Contracts & Subscriptions'}
            </p>
          </div>

          {/* NODE 03: 비아이씨 (Installation) - BOTTOM RIGHT */}
          <div className="absolute bottom-[6%] right-[8%] z-20 w-64 bg-white border-2 border-[#15803D] p-4 rounded-[2px] shadow-sm space-y-1.5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1">
              <span className="text-[10px] font-mono font-bold text-[#15803D]">NODE 03</span>
              <span className="text-[10px] font-mono font-semibold text-[#15803D] bg-[#15803D]/10 px-1.5 py-0.5 rounded-[2px]">
                {isKo ? '시공사' : 'INSTALLATION'}
              </span>
            </div>
            <h5 className="text-base font-bold text-[#222831]">
              비아이씨 <span className="text-xs font-mono font-normal text-[#66717C]">(BIC)</span>
            </h5>
            <p className="text-xs text-[#66717C]">
              {isKo ? '설치 · 전원 · 현장 유지관리' : 'Installation, Power & Field Ops'}
            </p>
          </div>

          {/* NODE 04: 엑시스 (Ad Content) - BOTTOM LEFT */}
          <div className="absolute bottom-[6%] left-[8%] z-20 w-64 bg-white border-2 border-[#6B21A8] p-4 rounded-[2px] shadow-sm space-y-1.5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1">
              <span className="text-[10px] font-mono font-bold text-[#6B21A8]">NODE 04</span>
              <span className="text-[10px] font-mono font-semibold text-[#6B21A8] bg-[#6B21A8]/10 px-1.5 py-0.5 rounded-[2px]">
                {isKo ? '광고콘텐츠사' : 'AD CONTENT'}
              </span>
            </div>
            <h5 className="text-base font-bold text-[#222831]">
              엑시스 <span className="text-xs font-mono font-normal text-[#66717C]">(AXIS)</span>
            </h5>
            <p className="text-xs text-[#66717C]">
              {isKo ? '광고 소재 제작 · 심의' : 'Ad Content Creation & Audit'}
            </p>
          </div>

          {/* NODE 05: DISE PREMIUM CMS (CMS Operation) - TOP LEFT */}
          <div className="absolute top-[26%] left-[4%] z-20 w-64 bg-white border-2 border-[#0F172A] p-4 rounded-[2px] shadow-sm space-y-1.5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1">
              <span className="text-[10px] font-mono font-bold text-[#0F172A]">NODE 05</span>
              <span className="text-[10px] font-mono font-semibold text-[#0F172A] bg-[#0F172A]/10 px-1.5 py-0.5 rounded-[2px]">
                {isKo ? 'CMS 운영' : 'CMS OPERATION'}
              </span>
            </div>
            <h5 className="text-base font-bold text-[#222831]">
              DISE PREMIUM CMS
            </h5>
            <p className="text-xs text-[#66717C]">
              {isKo ? '편성 · 표출 · 로그 관리' : 'Scheduling, Playback & Log Control'}
            </p>
          </div>

          {/* PROCESS CONNECTION LABELS (Placed along the circular paths) */}
          {/* Process 01: 01 -> 02 */}
          <div className="absolute top-[13%] right-[22%] z-30 bg-[#FFFBEB] border border-[#FCD34D] px-2.5 py-1 rounded-[2px] text-[10px] font-mono text-[#92400E] shadow-xs">
            <span className="font-bold">01</span> 슬롯 개방 · 단가 확정
          </div>
          {/* Process 02: 02 -> 03 */}
          <div className="absolute top-[60%] right-[10%] z-30 bg-[#FFFBEB] border border-[#FCD34D] px-2.5 py-1 rounded-[2px] text-[10px] font-mono text-[#92400E] shadow-xs">
            <span className="font-bold">02</span> 수주 확정 · 시공 발주
          </div>
          {/* Process 03: 03 -> 04 */}
          <div className="absolute bottom-[2%] left-[50%] -translate-x-1/2 z-30 bg-[#FFFBEB] border border-[#FCD34D] px-2.5 py-1 rounded-[2px] text-[10px] font-mono text-[#92400E] shadow-xs">
            <span className="font-bold">03</span> 면 확인 · 소재 의뢰
          </div>
          {/* Process 04: 04 -> 05 */}
          <div className="absolute top-[60%] left-[10%] z-30 bg-[#FFFBEB] border border-[#FCD34D] px-2.5 py-1 rounded-[2px] text-[10px] font-mono text-[#92400E] shadow-xs">
            <span className="font-bold">04</span> 소재 납품 · 심의
          </div>
          {/* Process 05: 05 -> 01 */}
          <div className="absolute top-[13%] left-[22%] z-30 bg-[#FFFBEB] border border-[#FCD34D] px-2.5 py-1 rounded-[2px] text-[10px] font-mono text-[#92400E] shadow-xs">
            <span className="font-bold">05</span> 표출 실적 · 정산 회신
          </div>
        </div>

        {/* MOBILE VERTICAL SEQUENCE (Shown on small / medium screens) */}
        <div className="block lg:hidden space-y-4">
          {/* ADHEAT Command Center Header */}
          <div className="bg-[#0B192C] text-white p-5 rounded-[2px] border-2 border-[#D97706] space-y-3 text-center">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#D97706] uppercase block">
              ADHEAT PLATFORM
            </span>
            <h4 className="text-xl font-mono font-bold text-white">ADHEAT</h4>
            <p className="text-xs font-mono text-amber-400 font-semibold">REAL-TIME SLOT COMMAND CENTER</p>
            <p className="text-xs text-slate-300">{isKo ? '실시간 슬롯 통합관제' : 'Real-time Slot Control'}</p>
          </div>

          {/* 5 Vertical Nodes in Order */}
          <div className="space-y-3">
            {/* 01 */}
            <div className="bg-white border-2 border-[#294A63] p-4 rounded-[2px] space-y-1">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-100 pb-1">
                <span className="font-bold text-[#294A63]">NODE 01</span>
                <span className="text-[#294A63] font-semibold">{isKo ? '매체사' : 'MEDIA OWNER'}</span>
              </div>
              <h5 className="text-base font-bold text-[#222831] pt-1">다이즈하이미디어 (DISE HIGH MEDIA)</h5>
              <p className="text-xs text-[#66717C]">{isKo ? '지면 보유 · 슬롯 개방' : 'Inventory Ownership & Slot Release'}</p>
            </div>

            <div className="flex items-center justify-center text-xs font-mono text-[#D97706] gap-1 font-semibold py-1 bg-amber-50 rounded-[2px]">
              <span>01 ↓ 슬롯 개방 · 단가 확정</span>
            </div>

            {/* 02 */}
            <div className="bg-white border-2 border-[#C2410C] p-4 rounded-[2px] space-y-1">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-100 pb-1">
                <span className="font-bold text-[#C2410C]">NODE 02</span>
                <span className="text-[#C2410C] font-semibold">{isKo ? '광고대행사' : 'AD AGENCY'}</span>
              </div>
              <h5 className="text-base font-bold text-[#222831] pt-1">알투뷔 (R2V)</h5>
              <p className="text-xs text-[#66717C]">{isKo ? '광고 영업 · 수주 · 청약' : 'Ad Sales & Contracts'}</p>
            </div>

            <div className="flex items-center justify-center text-xs font-mono text-[#D97706] gap-1 font-semibold py-1 bg-amber-50 rounded-[2px]">
              <span>02 ↓ 수주 확정 · 시공 발주</span>
            </div>

            {/* 03 */}
            <div className="bg-white border-2 border-[#15803D] p-4 rounded-[2px] space-y-1">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-100 pb-1">
                <span className="font-bold text-[#15803D]">NODE 03</span>
                <span className="text-[#15803D] font-semibold">{isKo ? '시공사' : 'INSTALLATION'}</span>
              </div>
              <h5 className="text-base font-bold text-[#222831] pt-1">비아이씨 (BIC)</h5>
              <p className="text-xs text-[#66717C]">{isKo ? '설치 · 전원 · 현장 유지관리' : 'Installation & Field Ops'}</p>
            </div>

            <div className="flex items-center justify-center text-xs font-mono text-[#D97706] gap-1 font-semibold py-1 bg-amber-50 rounded-[2px]">
              <span>03 ↓ 면 확인 · 소재 의뢰</span>
            </div>

            {/* 04 */}
            <div className="bg-white border-2 border-[#6B21A8] p-4 rounded-[2px] space-y-1">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-100 pb-1">
                <span className="font-bold text-[#6B21A8]">NODE 04</span>
                <span className="text-[#6B21A8] font-semibold">{isKo ? '광고콘텐츠사' : 'AD CONTENT'}</span>
              </div>
              <h5 className="text-base font-bold text-[#222831] pt-1">엑시스 (AXIS)</h5>
              <p className="text-xs text-[#66717C]">{isKo ? '광고 소재 제작 · 심의' : 'Content Creation & Audit'}</p>
            </div>

            <div className="flex items-center justify-center text-xs font-mono text-[#D97706] gap-1 font-semibold py-1 bg-amber-50 rounded-[2px]">
              <span>04 ↓ 소재 납품 · 심의</span>
            </div>

            {/* 05 */}
            <div className="bg-white border-2 border-[#0F172A] p-4 rounded-[2px] space-y-1">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-100 pb-1">
                <span className="font-bold text-[#0F172A]">NODE 05</span>
                <span className="text-[#0F172A] font-semibold">{isKo ? 'CMS 운영' : 'CMS OPERATION'}</span>
              </div>
              <h5 className="text-base font-bold text-[#222831] pt-1">DISE PREMIUM CMS</h5>
              <p className="text-xs text-[#66717C]">{isKo ? '편성 · 표출 · 로그 관리' : 'Scheduling & Log Control'}</p>
            </div>

            <div className="flex items-center justify-center text-xs font-mono text-[#D97706] gap-1 font-semibold py-1 bg-amber-50 rounded-[2px]">
              <span>05 ↺ 표출 실적 · 정산 회신 → 다시 매체 운영으로 연결</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. EXTERNAL ADVERTISERS AND PARTNERS */}
      <div className="pt-8 border-t border-[#D9DEE3] space-y-6">
        <div className="text-xs font-mono font-semibold text-[#294A63] uppercase tracking-widest">
          {isKo ? '외부 고객 및 협력 네트워크' : 'EXTERNAL ADVERTISERS & PARTNER NETWORK'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GROUP 01: ADVERTISERS */}
          <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-6 rounded-[2px] space-y-3">
            <div className="flex items-center justify-between border-b border-[#D9DEE3] pb-3">
              <h4 className="text-lg font-bold text-[#222831]">
                {isKo ? '광고주' : 'ADVERTISERS'}
              </h4>
              <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider bg-[#294A63]/10 px-2 py-0.5 rounded-[2px]">
                CLIENT NETWORK
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isKo
                ? '광고 청약과 소재 전달, 광고 표출 현황을 확인하는 외부 고객 네트워크'
                : 'External advertiser network submitting bookings, delivering creatives, and monitoring live playback status.'}
            </p>

            <div className="pt-2 border-t border-slate-200/60">
              <span className="text-[11px] font-mono font-semibold text-[#294A63] tracking-wide block mb-1.5">
                {isKo ? '대표 업종' : 'Key Industry Sectors'}
              </span>
              <p className="text-xs text-[#66717C] font-medium">
                {isKo ? '항공 · 면세 · 금융 · 리조트 브랜드' : 'Airlines, Duty Free, Finance & Resort Brands'}
              </p>
            </div>
          </div>

          {/* GROUP 02: PARTNERS */}
          <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-6 rounded-[2px] space-y-3">
            <div className="flex items-center justify-between border-b border-[#D9DEE3] pb-3">
              <h4 className="text-lg font-bold text-[#222831]">
                {isKo ? '협력사' : 'PARTNERS'}
              </h4>
              <span className="text-[10px] font-mono font-bold text-[#294A63] uppercase tracking-wider bg-[#294A63]/10 px-2 py-0.5 rounded-[2px]">
                SPECIALIZED PARTNERS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isKo
                ? '현지 인허가, 시공, 운영과 유지보수를 지원하는 분야별 전문 협력 네트워크'
                : 'Domain-specific partner network supporting local permits, construction, operation, and field maintenance.'}
            </p>

            <div className="pt-2 border-t border-slate-200/60 space-y-1">
              <span className="text-[11px] font-mono font-semibold text-[#294A63] tracking-wide block">
                {isKo ? '전문 분야' : 'Operational Domains'}
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs text-[#66717C]">
                <span className="bg-white border border-[#D9DEE3] px-2 py-0.5 rounded-[2px]">현지 인허가 · 전력 · 통신</span>
                <span className="bg-white border border-[#D9DEE3] px-2 py-0.5 rounded-[2px]">소재 번역 · 현지 심의</span>
                <span className="bg-white border border-[#D9DEE3] px-2 py-0.5 rounded-[2px]">유동 측정 · 리포팅</span>
                <span className="bg-white border border-[#D9DEE3] px-2 py-0.5 rounded-[2px]">법무 · 세무 · 통관</span>
                <span className="bg-white border border-[#D9DEE3] px-2 py-0.5 rounded-[2px]">현장 유지보수</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. SHORT NETWORK SUMMARY */}
      <div className="p-6 bg-[#0B192C] text-white rounded-[2px] text-center space-y-2 border-t-2 border-[#D97706]">
        <p className="text-sm sm:text-base font-sans font-medium leading-relaxed tracking-tight">
          {isKo
            ? '기획과 매체 운영, 광고 영업, 현장 시공, 콘텐츠 제작, CMS 통합관제를 하나의 연결된 체계로 운영합니다.'
            : 'Operating planning, media management, ad sales, field construction, content creation, and CMS control in one unified system.'}
        </p>
      </div>
    </div>
  );
};
