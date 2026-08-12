import React from 'react';
import { Language } from '../../types';

interface AdheatClusterProps {
  currentLang: Language;
}

export interface ClusterNodeData {
  id: string;
  step: string;
  company: string;
  companyEn: string;
  roleKo: string;
  roleEn: string;
  logo: string | null;
}

export const clusterNodes: ClusterNodeData[] = [
  {
    id: 'dise',
    step: '01',
    company: '다이즈하이미디어',
    companyEn: 'DISE HI MEDIA',
    roleKo: '매체 기획·구축 및 운영',
    roleEn: 'MEDIA PLANNING & OPERATIONS',
    logo: '/images/brand/dise-logo.png',
  },
  {
    id: 'r2v',
    step: '02',
    company: '알투뷔',
    companyEn: 'R2V',
    roleKo: '광고 기획 및 영업',
    roleEn: 'AD PLANNING & SALES',
    logo: null,
  },
  {
    id: 'bic',
    step: '03',
    company: '비아이씨',
    companyEn: 'BIC',
    roleKo: '미디어 설치 및 시공',
    roleEn: 'INSTALLATION & CONSTRUCTION',
    logo: null,
  },
  {
    id: 'axis',
    step: '04',
    company: '액시스',
    companyEn: 'AXIS',
    roleKo: '광고 콘텐츠 제작',
    roleEn: 'AD CONTENT PRODUCTION',
    logo: null,
  },
  {
    id: 'dise-cms',
    step: '05',
    company: '다이즈 프리미엄 CMS',
    companyEn: 'DISE PREMIUM CMS',
    roleKo: '콘텐츠 송출 및 통합관제',
    roleEn: 'CMS & OPERATIONS',
    logo: '/images/brand/dise-logo.png',
  },
];

export const AdheatCluster: React.FC<AdheatClusterProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  return (
    <section className="bg-white border border-[#D9DEE3] rounded-[2px] p-6 sm:p-10 space-y-8 font-sans w-full max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="space-y-3 border-b border-[#D9DEE3] pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#D97706] font-mono">
            CIRCULAR NETWORK
          </span>
          <span className="text-xs font-semibold tracking-wider text-[#294A63] uppercase font-mono">
            ADHEAT CIRCULAR CLUSTER
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#18324A] tracking-tight">
          {isKo ? '5개사 순환 클러스터' : '5-Company Circular Cluster'}
        </h3>
        <p className="text-sm text-[#66717C] leading-relaxed max-w-3xl">
          {isKo
            ? '매체 운영부터 광고, 시공, 콘텐츠 제작과 CMS 통합운영까지 하나의 순환 체계로 연결합니다.'
            : 'Connecting media operation, advertising, installation, content production, and CMS into a single circular ecosystem.'}
        </p>
      </div>

      {/* Desktop Diagram Layout (Center ADHEAT Hub + Circular Orbit 01 -> 02 -> 03 -> 04 -> 05 -> 01) */}
      <div className="hidden md:block space-y-4">
        <div className="bg-[#F8FAFC] border border-[#D9DEE3] rounded-[2px] p-6 lg:p-8 relative">
          
          {/* Main Diagram Grid */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6 items-center relative z-10">

            {/* Row 1 Left: 01 DISE HI MEDIA */}
            <div className="col-span-4">
              <div className="bg-white border-2 border-[#294A63]/30 hover:border-[#294A63] rounded-[2px] p-4 lg:p-5 space-y-3 transition-colors shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706] bg-amber-500/10 px-2 py-0.5 rounded-[2px]">
                    01
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    PLANNING & OPS
                  </span>
                </div>
                <div className="w-full h-11 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  <img
                    src={clusterNodes[0].logo!}
                    alt={clusterNodes[0].companyEn}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {clusterNodes[0].companyEn}
                  </div>
                  <h4 className="text-base font-bold text-[#18324A]">
                    {clusterNodes[0].company}
                  </h4>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1E293B]">
                    {clusterNodes[0].roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {clusterNodes[0].roleEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Step 01 -> 02 Connector Badge */}
            <div className="col-span-4 flex items-center justify-center">
              <div className="flex items-center gap-2 bg-white border border-[#D9DEE3] px-3 py-1.5 rounded-[2px] text-xs font-mono font-bold text-[#294A63] shadow-xs">
                <span>01</span>
                <span className="text-[#D97706]">→</span>
                <span>02</span>
                <span className="text-[10px] font-sans font-normal text-[#64748B] ml-1">
                  {isKo ? '기획·영업 연계' : 'Planning-Sales'}
                </span>
              </div>
            </div>

            {/* Row 1 Right: 02 R2V */}
            <div className="col-span-4">
              <div className="bg-white border-2 border-[#294A63]/30 hover:border-[#294A63] rounded-[2px] p-4 lg:p-5 space-y-3 transition-colors shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706] bg-amber-500/10 px-2 py-0.5 rounded-[2px]">
                    02
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    AD SALES
                  </span>
                </div>
                <div className="w-full h-11 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  <span className="text-sm font-bold font-mono tracking-widest text-[#18324A]">
                    {clusterNodes[1].companyEn}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {clusterNodes[1].companyEn}
                  </div>
                  <h4 className="text-base font-bold text-[#18324A]">
                    {clusterNodes[1].company}
                  </h4>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1E293B]">
                    {clusterNodes[1].roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {clusterNodes[1].roleEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Row 2 Left: 05 DISE PREMIUM CMS */}
            <div className="col-span-4">
              <div className="bg-white border-2 border-[#294A63]/30 hover:border-[#294A63] rounded-[2px] p-4 lg:p-5 space-y-3 transition-colors shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706] bg-amber-500/10 px-2 py-0.5 rounded-[2px]">
                    05
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    CMS & SYSTEM
                  </span>
                </div>
                <div className="w-full h-11 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  <img
                    src={clusterNodes[4].logo!}
                    alt={clusterNodes[4].companyEn}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {clusterNodes[4].companyEn}
                  </div>
                  <h4 className="text-base font-bold text-[#18324A]">
                    {clusterNodes[4].company}
                  </h4>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1E293B]">
                    {clusterNodes[4].roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {clusterNodes[4].roleEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Row 2 Center: ADHEAT INTEGRATED MEDIA OPERATION HUB */}
            <div className="col-span-4 flex flex-col items-center justify-center p-2 my-2">
              <div className="w-full bg-[#18324A] text-white p-5 lg:p-6 border-2 border-[#294A63] text-center space-y-3 rounded-[2px] shadow-md relative">
                <div className="inline-block bg-[#D97706] text-white text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-[2px] uppercase tracking-widest">
                  INTEGRATED CONTROL HUB
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl lg:text-2xl font-black tracking-wider text-white">
                    ADHEAT
                  </h4>
                  <p className="text-[10px] font-mono tracking-widest text-[#D0BE7D] uppercase font-semibold">
                    INTEGRATED MEDIA OPERATION
                  </p>
                </div>
                <div className="pt-2 border-t border-white/20 text-xs font-semibold text-slate-200">
                  {isKo ? '통합관제 · 업무 연계' : 'Integrated Control & Operations Linkage'}
                </div>
              </div>
            </div>

            {/* Row 2 Right: 03 BIC */}
            <div className="col-span-4">
              <div className="bg-white border-2 border-[#294A63]/30 hover:border-[#294A63] rounded-[2px] p-4 lg:p-5 space-y-3 transition-colors shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706] bg-amber-500/10 px-2 py-0.5 rounded-[2px]">
                    03
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    INSTALLATION
                  </span>
                </div>
                <div className="w-full h-11 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  <span className="text-sm font-bold font-mono tracking-widest text-[#18324A]">
                    {clusterNodes[2].companyEn}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {clusterNodes[2].companyEn}
                  </div>
                  <h4 className="text-base font-bold text-[#18324A]">
                    {clusterNodes[2].company}
                  </h4>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1E293B]">
                    {clusterNodes[2].roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {clusterNodes[2].roleEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3 Connector 05 <- 04 */}
            <div className="col-span-4 flex items-center justify-center">
              <div className="flex items-center gap-2 bg-white border border-[#D9DEE3] px-3 py-1.5 rounded-[2px] text-xs font-mono font-bold text-[#294A63] shadow-xs">
                <span>04</span>
                <span className="text-[#D97706]">→</span>
                <span>05</span>
                <span className="text-[10px] font-sans font-normal text-[#64748B] ml-1">
                  {isKo ? '콘텐츠 송출' : 'Content CMS'}
                </span>
              </div>
            </div>

            {/* Row 3 Center: 04 AXIS */}
            <div className="col-span-4">
              <div className="bg-white border-2 border-[#294A63]/30 hover:border-[#294A63] rounded-[2px] p-4 lg:p-5 space-y-3 transition-colors shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706] bg-amber-500/10 px-2 py-0.5 rounded-[2px]">
                    04
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    AD CREATIVE
                  </span>
                </div>
                <div className="w-full h-11 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  <span className="text-sm font-bold font-mono tracking-widest text-[#18324A]">
                    {clusterNodes[3].companyEn}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {clusterNodes[3].companyEn}
                  </div>
                  <h4 className="text-base font-bold text-[#18324A]">
                    {clusterNodes[3].company}
                  </h4>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1E293B]">
                    {clusterNodes[3].roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {clusterNodes[3].roleEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3 Connector 03 -> 04 */}
            <div className="col-span-4 flex items-center justify-center">
              <div className="flex items-center gap-2 bg-white border border-[#D9DEE3] px-3 py-1.5 rounded-[2px] text-xs font-mono font-bold text-[#294A63] shadow-xs">
                <span>03</span>
                <span className="text-[#D97706]">→</span>
                <span>04</span>
                <span className="text-[10px] font-sans font-normal text-[#64748B] ml-1">
                  {isKo ? '시공·제작 연계' : 'Construct-Creative'}
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Loop Indicator (05 -> 01 Return) */}
          <div className="mt-6 pt-4 border-t border-[#D9DEE3] flex items-center justify-between text-xs text-[#294A63] font-mono">
            <div className="flex items-center gap-2 font-bold">
              <span className="text-[#D97706] text-sm">↻</span>
              <span>05 DISE PREMIUM CMS</span>
              <span className="text-[#D97706]">→</span>
              <span>01 DISE HI MEDIA</span>
              <span className="font-sans font-normal text-[#64748B]">
                {isKo ? '(연속 순환 체계)' : '(Continuous Loop)'}
              </span>
            </div>
            <span className="text-[11px] text-[#64748B] font-sans">
              {isKo
                ? '※ 5개 영역이 통합관제(ADHEAT)를 중심으로 순환 운영됩니다.'
                : '※ 5 Entities operating continuously around ADHEAT Integrated Control Hub.'}
            </span>
          </div>

        </div>
      </div>

      {/* Mobile Diagram Layout (Stacked Vertical Flow) */}
      <div className="block md:hidden space-y-4 font-sans">
        {/* Top: Central ADHEAT Hub */}
        <div className="bg-[#18324A] text-white p-5 border-2 border-[#294A63] text-center space-y-2 rounded-[2px]">
          <span className="inline-block bg-[#D97706] text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-widest">
            INTEGRATED CONTROL HUB
          </span>
          <h4 className="text-xl font-extrabold tracking-wider text-white">
            ADHEAT
          </h4>
          <p className="text-[10px] font-mono tracking-widest text-[#D0BE7D] uppercase font-semibold">
            INTEGRATED MEDIA OPERATION
          </p>
          <div className="pt-1.5 border-t border-white/20 text-xs font-medium text-slate-200">
            {isKo ? '통합관제 · 업무 연계' : 'Integrated Control & Operations Linkage'}
          </div>
        </div>

        {/* Vertical Divider */}
        <div aria-hidden="true" className="flex justify-center">
          <div className="w-[1px] h-4 bg-[#294A63]/40" />
        </div>

        {/* 1-Column Stack 01 -> 05 */}
        <div className="space-y-3">
          {clusterNodes.map((node, idx) => (
            <React.Fragment key={node.id}>
              <div className="bg-[#F8FAFC] border border-[#D9DEE3] rounded-[2px] p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D97706] bg-amber-500/10 px-2 py-0.5 rounded-[2px]">
                    {node.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    STEP {node.step}
                  </span>
                </div>

                <div className="w-full h-11 bg-white border border-[#E2E8F0] rounded-[2px] flex items-center justify-center p-2">
                  {node.logo ? (
                    <img
                      src={node.logo}
                      alt={node.companyEn}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-sm font-bold font-mono tracking-widest text-[#18324A]">
                      {node.companyEn}
                    </span>
                  )}
                </div>

                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#294A63]">
                    {node.companyEn}
                  </div>
                  <h4 className="text-base font-bold text-[#18324A]">
                    {node.company}
                  </h4>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#1E293B]">
                    {node.roleKo}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {node.roleEn}
                  </span>
                </div>
              </div>

              {/* Vertical connector line */}
              {idx < clusterNodes.length - 1 && (
                <div aria-hidden="true" className="flex items-center justify-center gap-2 py-0.5 text-xs font-mono text-[#294A63]">
                  <div className="w-[1px] h-3 bg-[#294A63]" />
                  <span className="text-[10px] text-[#D97706] font-bold">
                    {node.step} → {clusterNodes[idx + 1].step}
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Return Loop Indicator */}
        <div className="p-3 bg-[#F8FAFC] border border-dashed border-[#D9DEE3] rounded-[2px] text-center space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-[#294A63]">
            <span className="text-[#D97706]">↺ BACK TO 01</span>
            <span>(05 → 01)</span>
          </div>
          <p className="text-[11px] text-[#64748B]">
            {isKo
              ? '다이즈 프리미엄 CMS에서 다이즈하이미디어로 연결되는 순환 체계'
              : 'Continuous loop from Node 05 back to Node 01'}
          </p>
        </div>
      </div>
    </section>
  );
};
