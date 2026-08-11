import React, { useState } from 'react';
import { Language } from '../../types';

interface AdheatClusterProps {
  currentLang: Language;
}

export interface ClusterNodeData {
  id: string;
  dataLogo: string;
  number: string;
  role: string;
  roleKo: string;
  company: string;
  companyEn: string;
  descriptionKo: string;
  descriptionEn: string;
  accentColor: string;
  logo: string | null;
}

export const clusterNodes: ClusterNodeData[] = [
  {
    id: 'dise',
    dataLogo: 'dise',
    number: '01',
    role: 'MEDIA',
    roleKo: '매체 운영',
    company: 'DISE HI MEDIA',
    companyEn: 'DISE HI MEDIA',
    descriptionKo: '미디어 기획·구축 및 운영',
    descriptionEn: 'Media Planning, Building & Operation',
    accentColor: '#294A63', // DISE navy blue
    logo: null,
  },
  {
    id: 'r2v',
    dataLogo: 'r2v',
    number: '02',
    role: 'ADVERTISING',
    roleKo: '광고 기획·영업',
    company: 'R2V',
    companyEn: 'R2V',
    descriptionKo: '광고 기획 및 영업',
    descriptionEn: 'Ad Planning & Sales Operations',
    accentColor: '#D97706', // muted orange
    logo: null,
  },
  {
    id: 'bic',
    dataLogo: 'bic',
    number: '03',
    role: 'INSTALLATION',
    roleKo: '미디어 설치·시공',
    company: 'BIC',
    companyEn: 'BIC',
    descriptionKo: '미디어 설치 및 현장 시공',
    descriptionEn: 'Media Installation & Construction',
    accentColor: '#059669', // muted green
    logo: null,
  },
  {
    id: 'axis',
    dataLogo: 'axis',
    number: '04',
    role: 'CONTENT',
    roleKo: '광고 콘텐츠 제작',
    company: 'AXIS',
    companyEn: 'AXIS',
    descriptionKo: '광고 콘텐츠 기획·제작',
    descriptionEn: 'Ad Content Planning & Production',
    accentColor: '#7C3AED', // muted violet
    logo: null,
  },
  {
    id: 'dise-cms',
    dataLogo: 'dise-cms',
    number: '05',
    role: 'CMS & OPERATION',
    roleKo: '콘텐츠 송출·통합관제',
    company: 'DISE PREMIUM CMS',
    companyEn: 'DISE PREMIUM CMS',
    descriptionKo: '콘텐츠 관리 및 통합운영',
    descriptionEn: 'Content Management & Operations',
    accentColor: '#2563EB', // steel blue
    logo: null,
  },
];

export const AdheatCluster: React.FC<AdheatClusterProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Helper to render company logo or pending placeholder
  const renderLogoPlaceholder = (node: ClusterNodeData) => {
    if (node.logo) {
      return (
        <div data-logo={node.dataLogo} className="w-full h-11 flex items-center justify-center p-1">
          <img src={node.logo} alt={node.company} className="max-h-full max-w-full object-contain" />
        </div>
      );
    }
    return (
      <div
        data-logo={node.dataLogo}
        className="w-full h-11 border border-dashed border-[#CBD5E1] rounded-[2px] bg-[#F8FAFC] flex flex-col items-center justify-center p-1 transition-colors group-hover:border-[#94A3B8]"
      >
        <span className="text-[11px] font-bold text-[#1E293B] tracking-tight font-mono text-center truncate w-full px-1">
          {node.company}
        </span>
        <span className="text-[9px] font-mono font-medium text-[#94A3B8] tracking-widest uppercase">
          LOGO PENDING
        </span>
      </div>
    );
  };

  return (
    <section className="bg-[#102B42] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full border-t border-b border-white/10 font-sans">
      <div className="max-w-[1200px] mx-auto space-y-12 lg:space-y-16">
        {/* 1. SECTION INTRO HEADER */}
        <div className="space-y-3 text-left max-w-[760px]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D0BE7D] uppercase">
              INTEGRATED BUSINESS NETWORK
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-mono font-semibold text-white/90 tracking-wider uppercase">
            ADHEAT CIRCULAR CLUSTER
          </h3>

          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-[1.3]">
            {isKo
              ? '5개 전문 영역을 연결하는 미디어 사업 생태계'
              : 'A Media Business Ecosystem Connecting 5 Specialized Domains'}
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed pt-1">
            {isKo
              ? '매체 운영부터 광고, 시공, 콘텐츠 제작과 CMS 통합운영까지 하나의 순환 체계로 연결합니다.'
              : 'Connecting media ownership, advertising, construction, content creation, and CMS operations into a unified circular system.'}
          </p>
        </div>

        {/* 2. DESKTOP DIAGRAM (Hidden on tablet and mobile) */}
        <div className="hidden lg:block relative w-full max-w-[1150px] mx-auto h-[780px] bg-[#0C2235] border border-white/10 rounded-[2px] p-6 overflow-hidden shadow-2xl">
          {/* Subtle Background Radial Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

          {/* SVG CONNECTOR LINES & ARROWS OVERLAY */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1000 780"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="arrow-gold"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#D0BE7D" />
              </marker>
              <marker
                id="arrow-active"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#FFFFFF" />
              </marker>
            </defs>

            {/* RADIAL ASSIST LINES (From Central ADHEAT to Outer Nodes) */}
            {/* Center ADHEAT is at (500, 390) */}
            <line x1="500" y1="390" x2="500" y2="105" stroke="rgba(208,190,125,0.3)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="500" y1="390" x2="815" y2="255" stroke="rgba(208,190,125,0.3)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="500" y1="390" x2="710" y2="605" stroke="rgba(208,190,125,0.3)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="500" y1="390" x2="290" y2="605" stroke="rgba(208,190,125,0.3)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="500" y1="390" x2="185" y2="255" stroke="rgba(208,190,125,0.3)" strokeWidth="1" strokeDasharray="3 3" />

            {/* CIRCULAR FLOW ARROWS (01 -> 02 -> 03 -> 04 -> 05 -> 01) */}
            {/* 01 -> 02 */}
            <path
              d="M 620 120 Q 770 140 815 210"
              fill="none"
              stroke={hoveredNode === 'dise' || hoveredNode === 'r2v' ? '#FFFFFF' : 'rgba(208,190,125,0.55)'}
              strokeWidth={hoveredNode === 'dise' || hoveredNode === 'r2v' ? '2.5' : '1.5'}
              markerEnd={hoveredNode === 'dise' || hoveredNode === 'r2v' ? 'url(#arrow-active)' : 'url(#arrow-gold)'}
              className="transition-all duration-300"
            />
            {/* 02 -> 03 */}
            <path
              d="M 830 310 Q 820 480 750 560"
              fill="none"
              stroke={hoveredNode === 'r2v' || hoveredNode === 'bic' ? '#FFFFFF' : 'rgba(208,190,125,0.55)'}
              strokeWidth={hoveredNode === 'r2v' || hoveredNode === 'bic' ? '2.5' : '1.5'}
              markerEnd={hoveredNode === 'r2v' || hoveredNode === 'bic' ? 'url(#arrow-active)' : 'url(#arrow-gold)'}
              className="transition-all duration-300"
            />
            {/* 03 -> 04 */}
            <path
              d="M 610 635 Q 500 660 380 635"
              fill="none"
              stroke={hoveredNode === 'bic' || hoveredNode === 'axis' ? '#FFFFFF' : 'rgba(208,190,125,0.55)'}
              strokeWidth={hoveredNode === 'bic' || hoveredNode === 'axis' ? '2.5' : '1.5'}
              markerEnd={hoveredNode === 'bic' || hoveredNode === 'axis' ? 'url(#arrow-active)' : 'url(#arrow-gold)'}
              className="transition-all duration-300"
            />
            {/* 04 -> 05 */}
            <path
              d="M 250 560 Q 180 480 170 310"
              fill="none"
              stroke={hoveredNode === 'axis' || hoveredNode === 'dise-cms' ? '#FFFFFF' : 'rgba(208,190,125,0.55)'}
              strokeWidth={hoveredNode === 'axis' || hoveredNode === 'dise-cms' ? '2.5' : '1.5'}
              markerEnd={hoveredNode === 'axis' || hoveredNode === 'dise-cms' ? 'url(#arrow-active)' : 'url(#arrow-gold)'}
              className="transition-all duration-300"
            />
            {/* 05 -> 01 */}
            <path
              d="M 185 210 Q 230 140 380 120"
              fill="none"
              stroke={hoveredNode === 'dise-cms' || hoveredNode === 'dise' ? '#FFFFFF' : 'rgba(208,190,125,0.55)'}
              strokeWidth={hoveredNode === 'dise-cms' || hoveredNode === 'dise' ? '2.5' : '1.5'}
              markerEnd={hoveredNode === 'dise-cms' || hoveredNode === 'dise' ? 'url(#arrow-active)' : 'url(#arrow-gold)'}
              className="transition-all duration-300"
            />
          </svg>

          {/* 3. CENTRAL ADHEAT NODE */}
          <div
            tabIndex={0}
            role="region"
            aria-label="ADHEAT MEDIA BUSINESS HUB"
            data-logo="adheat"
            className="absolute top-[390px] left-[500px] -translate-x-1/2 -translate-y-1/2 z-30 w-[300px] h-[300px] rounded-full bg-[#102B42] border border-[#D0BE7D]/60 flex flex-col items-center justify-center p-6 text-center space-y-2 shadow-2xl relative group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D0BE7D]"
          >
            {/* Outer Concentric Circles */}
            <div className="absolute -inset-3 rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute -inset-6 rounded-full border border-[#D0BE7D]/20 pointer-events-none" />

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#D0BE7D] uppercase tracking-widest block">
                MEDIA BUSINESS HUB
              </span>
              <h4 className="text-xl font-mono font-extrabold text-white tracking-wider">
                ADHEAT
              </h4>
              <p className="text-xs font-sans text-white/80 font-medium tracking-tight">
                {isKo ? '미디어 사업 통합 연결 체계' : 'Integrated Media Ecosystem'}
              </p>
            </div>

            {/* Central Logo Placeholder */}
            <div className="w-[180px] pt-1">
              <div
                data-logo="adheat"
                className="w-full h-11 border border-dashed border-white/30 rounded-[2px] bg-white/5 flex flex-col items-center justify-center p-1"
              >
                <span className="text-xs font-bold text-white tracking-widest font-mono">ADHEAT</span>
                <span className="text-[9px] font-mono font-medium text-[#D0BE7D]/80 uppercase tracking-widest">
                  LOGO PENDING
                </span>
              </div>
            </div>
          </div>

          {/* 4. OUTER 5 NODES */}
          {/* Node 01: Top Center (DISE HI MEDIA) */}
          <div
            onMouseEnter={() => setHoveredNode('dise')}
            onMouseLeave={() => setHoveredNode(null)}
            onFocus={() => setHoveredNode('dise')}
            onBlur={() => setHoveredNode(null)}
            tabIndex={0}
            className={`absolute top-[105px] left-[500px] -translate-x-1/2 -translate-y-1/2 z-30 w-[240px] bg-white text-[#17212B] rounded-[2px] p-4 space-y-2.5 shadow-md border-t-[3px] border-t-[#294A63] border-x border-b border-[#D9DEE3] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-[#D0BE7D] ${
              hoveredNode === 'dise' ? '-translate-y-[calc(50%+4px)] scale-[1.02] shadow-xl' : ''
            } ${hoveredNode && hoveredNode !== 'dise' ? 'opacity-70' : 'opacity-100'}`}
          >
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5">
              <span className="text-xs font-mono font-bold text-[#294A63]">NODE 01</span>
              <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">
                MEDIA
              </span>
            </div>
            <div>
              <h5 className="text-sm font-bold text-[#0F172A]">
                {isKo ? clusterNodes[0].roleKo : clusterNodes[0].role}
              </h5>
              <p className="text-[11px] text-[#64748B] leading-snug">
                {isKo ? clusterNodes[0].descriptionKo : clusterNodes[0].descriptionEn}
              </p>
            </div>
            {renderLogoPlaceholder(clusterNodes[0])}
          </div>

          {/* Node 02: Top Right (R2V) */}
          <div
            onMouseEnter={() => setHoveredNode('r2v')}
            onMouseLeave={() => setHoveredNode(null)}
            onFocus={() => setHoveredNode('r2v')}
            onBlur={() => setHoveredNode(null)}
            tabIndex={0}
            className={`absolute top-[255px] left-[815px] -translate-x-1/2 -translate-y-1/2 z-30 w-[240px] bg-white text-[#17212B] rounded-[2px] p-4 space-y-2.5 shadow-md border-t-[3px] border-t-[#D97706] border-x border-b border-[#D9DEE3] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-[#D0BE7D] ${
              hoveredNode === 'r2v' ? '-translate-y-[calc(50%+4px)] scale-[1.02] shadow-xl' : ''
            } ${hoveredNode && hoveredNode !== 'r2v' ? 'opacity-70' : 'opacity-100'}`}
          >
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5">
              <span className="text-xs font-mono font-bold text-[#D97706]">NODE 02</span>
              <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">
                ADVERTISING
              </span>
            </div>
            <div>
              <h5 className="text-sm font-bold text-[#0F172A]">
                {isKo ? clusterNodes[1].roleKo : clusterNodes[1].role}
              </h5>
              <p className="text-[11px] text-[#64748B] leading-snug">
                {isKo ? clusterNodes[1].descriptionKo : clusterNodes[1].descriptionEn}
              </p>
            </div>
            {renderLogoPlaceholder(clusterNodes[1])}
          </div>

          {/* Node 03: Bottom Right (BIC) */}
          <div
            onMouseEnter={() => setHoveredNode('bic')}
            onMouseLeave={() => setHoveredNode(null)}
            onFocus={() => setHoveredNode('bic')}
            onBlur={() => setHoveredNode(null)}
            tabIndex={0}
            className={`absolute top-[605px] left-[710px] -translate-x-1/2 -translate-y-1/2 z-30 w-[240px] bg-white text-[#17212B] rounded-[2px] p-4 space-y-2.5 shadow-md border-t-[3px] border-t-[#059669] border-x border-b border-[#D9DEE3] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-[#D0BE7D] ${
              hoveredNode === 'bic' ? '-translate-y-[calc(50%+4px)] scale-[1.02] shadow-xl' : ''
            } ${hoveredNode && hoveredNode !== 'bic' ? 'opacity-70' : 'opacity-100'}`}
          >
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5">
              <span className="text-xs font-mono font-bold text-[#059669]">NODE 03</span>
              <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">
                INSTALLATION
              </span>
            </div>
            <div>
              <h5 className="text-sm font-bold text-[#0F172A]">
                {isKo ? clusterNodes[2].roleKo : clusterNodes[2].role}
              </h5>
              <p className="text-[11px] text-[#64748B] leading-snug">
                {isKo ? clusterNodes[2].descriptionKo : clusterNodes[2].descriptionEn}
              </p>
            </div>
            {renderLogoPlaceholder(clusterNodes[2])}
          </div>

          {/* Node 04: Bottom Left (AXIS) */}
          <div
            onMouseEnter={() => setHoveredNode('axis')}
            onMouseLeave={() => setHoveredNode(null)}
            onFocus={() => setHoveredNode('axis')}
            onBlur={() => setHoveredNode(null)}
            tabIndex={0}
            className={`absolute top-[605px] left-[290px] -translate-x-1/2 -translate-y-1/2 z-30 w-[240px] bg-white text-[#17212B] rounded-[2px] p-4 space-y-2.5 shadow-md border-t-[3px] border-t-[#7C3AED] border-x border-b border-[#D9DEE3] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-[#D0BE7D] ${
              hoveredNode === 'axis' ? '-translate-y-[calc(50%+4px)] scale-[1.02] shadow-xl' : ''
            } ${hoveredNode && hoveredNode !== 'axis' ? 'opacity-70' : 'opacity-100'}`}
          >
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5">
              <span className="text-xs font-mono font-bold text-[#7C3AED]">NODE 04</span>
              <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">
                CONTENT
              </span>
            </div>
            <div>
              <h5 className="text-sm font-bold text-[#0F172A]">
                {isKo ? clusterNodes[3].roleKo : clusterNodes[3].role}
              </h5>
              <p className="text-[11px] text-[#64748B] leading-snug">
                {isKo ? clusterNodes[3].descriptionKo : clusterNodes[3].descriptionEn}
              </p>
            </div>
            {renderLogoPlaceholder(clusterNodes[3])}
          </div>

          {/* Node 05: Top Left (DISE PREMIUM CMS) */}
          <div
            onMouseEnter={() => setHoveredNode('dise-cms')}
            onMouseLeave={() => setHoveredNode(null)}
            onFocus={() => setHoveredNode('dise-cms')}
            onBlur={() => setHoveredNode(null)}
            tabIndex={0}
            className={`absolute top-[255px] left-[185px] -translate-x-1/2 -translate-y-1/2 z-30 w-[240px] bg-white text-[#17212B] rounded-[2px] p-4 space-y-2.5 shadow-md border-t-[3px] border-t-[#2563EB] border-x border-b border-[#D9DEE3] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-[#D0BE7D] ${
              hoveredNode === 'dise-cms' ? '-translate-y-[calc(50%+4px)] scale-[1.02] shadow-xl' : ''
            } ${hoveredNode && hoveredNode !== 'dise-cms' ? 'opacity-70' : 'opacity-100'}`}
          >
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5">
              <span className="text-xs font-mono font-bold text-[#2563EB]">NODE 05</span>
              <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">
                CMS & OPERATION
              </span>
            </div>
            <div>
              <h5 className="text-sm font-bold text-[#0F172A]">
                {isKo ? clusterNodes[4].roleKo : clusterNodes[4].role}
              </h5>
              <p className="text-[11px] text-[#64748B] leading-snug">
                {isKo ? clusterNodes[4].descriptionKo : clusterNodes[4].descriptionEn}
              </p>
            </div>
            {renderLogoPlaceholder(clusterNodes[4])}
          </div>
        </div>

        {/* 5. TABLET LAYOUT (2-Column Grid with Central ADHEAT on Top) */}
        <div className="hidden md:block lg:hidden space-y-8 bg-[#0C2235] border border-white/10 rounded-[2px] p-8">
          {/* Central Hub Top Banner */}
          <div
            data-logo="adheat"
            className="w-full bg-[#102B42] border border-[#D0BE7D] p-6 rounded-[2px] text-center space-y-3 shadow-lg"
          >
            <span className="text-xs font-mono font-bold text-[#D0BE7D] uppercase tracking-widest block">
              MEDIA BUSINESS HUB
            </span>
            <h4 className="text-2xl font-mono font-extrabold text-white tracking-wider">
              ADHEAT
            </h4>
            <p className="text-sm text-white/80 font-medium">
              {isKo ? '미디어 사업 통합 연결 체계' : 'Integrated Media Ecosystem'}
            </p>
            <div className="max-w-[200px] mx-auto pt-2">
              <div
                data-logo="adheat"
                className="w-full h-10 border border-dashed border-white/30 rounded-[2px] bg-white/5 flex flex-col items-center justify-center p-1"
              >
                <span className="text-xs font-bold text-white tracking-widest font-mono">ADHEAT</span>
                <span className="text-[9px] font-mono font-medium text-[#D0BE7D]/80 uppercase">
                  LOGO PENDING
                </span>
              </div>
            </div>
          </div>

          {/* 2-Column Node Grid */}
          <div className="grid grid-cols-2 gap-4">
            {clusterNodes.map((node) => (
              <div
                key={node.id}
                tabIndex={0}
                className="bg-white text-[#17212B] rounded-[2px] p-5 space-y-3 border-t-[3px] border-x border-b border-[#D9DEE3] focus:outline-none focus:ring-2 focus:ring-[#D0BE7D]"
                style={{ borderTopColor: node.accentColor }}
              >
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-xs font-mono font-bold" style={{ color: node.accentColor }}>
                    NODE {node.number}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase">
                    {node.role}
                  </span>
                </div>
                <div>
                  <h5 className="text-base font-bold text-[#0F172A]">
                    {isKo ? node.roleKo : node.role}
                  </h5>
                  <p className="text-xs text-[#64748B] pt-0.5">
                    {isKo ? node.descriptionKo : node.descriptionEn}
                  </p>
                </div>
                {renderLogoPlaceholder(node)}
              </div>
            ))}
          </div>
        </div>

        {/* 6. MOBILE LAYOUT (Vertical Linear Flow with Return Loop) */}
        <div className="block md:hidden space-y-4">
          {/* Central ADHEAT Header Node */}
          <div
            data-logo="adheat"
            className="w-[240px] mx-auto bg-[#0C2235] border-2 border-[#D0BE7D] rounded-[2px] p-5 text-center space-y-2.5 shadow-lg"
          >
            <span className="text-[10px] font-mono font-bold text-[#D0BE7D] uppercase tracking-widest block">
              MEDIA BUSINESS HUB
            </span>
            <h4 className="text-xl font-mono font-extrabold text-white tracking-wider">
              ADHEAT
            </h4>
            <p className="text-xs font-sans text-white/80 font-medium">
              {isKo ? '미디어 사업 통합 연결 체계' : 'Integrated Media Ecosystem'}
            </p>

            <div
              data-logo="adheat"
              className="w-full h-10 border border-dashed border-white/30 rounded-[2px] bg-white/5 flex flex-col items-center justify-center p-1"
            >
              <span className="text-xs font-bold text-white tracking-widest font-mono">ADHEAT</span>
              <span className="text-[8px] font-mono text-[#D0BE7D]/80 uppercase">LOGO PENDING</span>
            </div>
          </div>

          {/* Down Arrow Indicator */}
          <div className="flex justify-center text-[#D0BE7D] py-1">
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Sequential Nodes */}
          <div className="space-y-3">
            {clusterNodes.map((node, idx) => (
              <React.Fragment key={node.id}>
                <div
                  tabIndex={0}
                  className="bg-white text-[#17212B] rounded-[2px] p-4 space-y-2 border-t-[3px] border-x border-b border-[#D9DEE3] focus:outline-none focus:ring-2 focus:ring-[#D0BE7D]"
                  style={{ borderTopColor: node.accentColor }}
                >
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5">
                    <span className="text-xs font-mono font-bold" style={{ color: node.accentColor }}>
                      NODE {node.number}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase">
                      {node.role}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#0F172A]">
                      {isKo ? node.roleKo : node.role}
                    </h5>
                    <p className="text-xs text-[#64748B] pt-0.5">
                      {isKo ? node.descriptionKo : node.descriptionEn}
                    </p>
                  </div>
                  {renderLogoPlaceholder(node)}
                </div>

                {/* Connector Arrow down to next node or return to ADHEAT */}
                <div className="flex justify-center text-[#D0BE7D] py-0.5">
                  {idx < clusterNodes.length - 1 ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#D0BE7D] py-1 bg-white/5 px-3 rounded-[2px] border border-[#D0BE7D]/30">
                      <span>↺ RE-CIRCULATING TO ADHEAT</span>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 7. HORIZONTAL FLOW SUMMARY STRIP (DESKTOP / TABLET) */}
        <div className="hidden md:block pt-6 border-t border-white/10">
          <div className="flex items-center justify-between gap-2 text-center bg-white/5 border border-white/10 p-4 rounded-[2px]">
            {clusterNodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#D0BE7D] block">
                    {node.number}
                  </span>
                  <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {node.role}
                  </p>
                  <p className="text-[11px] text-white/70 font-sans">
                    {node.company}
                  </p>
                </div>

                {index < clusterNodes.length - 1 && (
                  <span className="text-[#D0BE7D] text-sm font-bold opacity-60">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
