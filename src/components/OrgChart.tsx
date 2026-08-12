import React from 'react';
import { Language } from '../types';

interface OrgChartProps {
  currentLang?: Language;
}

export const OrgChart: React.FC<OrgChartProps> = ({ currentLang = 'ko' }) => {
  const isKo = currentLang === 'ko';

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm animate-fadeIn overflow-x-auto">
      {/* Min-width container for responsive layout */}
      <div className="min-w-[800px] mx-auto space-y-8 py-2">
        
        {/* 1. TOP LEADERSHIP ROW (2 DIVISIONS) */}
        <div className="grid grid-cols-2 gap-8 relative z-10">
          
          {/* LEFT DIVISION: CO-CEO / DEVELOPMENT */}
          <div className="bg-blue-900 text-white rounded-xl shadow-md overflow-hidden border border-blue-800 flex flex-col justify-between">
            <div className="p-6 text-center space-y-2">
              <div className="text-xs font-mono font-bold tracking-widest text-blue-200 uppercase">
                CO-CEO
              </div>
              <h3 className="text-2xl font-black tracking-wider text-white">
                {isKo ? '각 자 대 표' : 'CO-CEO'}
              </h3>
            </div>
            
            {/* Sub Division Bar */}
            <div className="mx-6 mb-6 py-2.5 px-4 rounded border border-blue-400/50 bg-blue-950/60 text-center font-extrabold text-sm tracking-widest text-blue-100 uppercase">
              {isKo ? '개 발 부 문' : 'DEVELOPMENT DIVISION'} <span className="text-xs text-blue-300 font-mono font-normal ml-2">DEVELOPMENT</span>
            </div>
          </div>

          {/* RIGHT DIVISION: CEO / FINANCE & SALES */}
          <div className="bg-blue-900 text-white rounded-xl shadow-md overflow-hidden border border-blue-800 flex flex-col justify-between">
            <div className="p-6 text-center space-y-2">
              <div className="text-xs font-mono font-bold tracking-widest text-blue-200 uppercase">
                CEO
              </div>
              <h3 className="text-2xl font-black tracking-wider text-white">
                {isKo ? '각 자 대 표' : 'CO-CEO'}
              </h3>
            </div>

            {/* Sub Division Bar */}
            <div className="mx-6 mb-6 py-2.5 px-4 rounded border border-blue-400/50 bg-blue-950/60 text-center font-extrabold text-sm tracking-widest text-blue-100 uppercase">
              {isKo ? '재 무 · 영 업 부 문' : 'FINANCE & SALES DIVISION'} <span className="text-xs text-blue-300 font-mono font-normal ml-2">FINANCE & SALES</span>
            </div>
          </div>

        </div>

        {/* CONNECTING HIERARCHY LINES */}
        <div className="relative h-8">
          {/* Stem down from Left Division */}
          <div className="absolute top-0 left-[25%] -translate-x-1/2 w-0.5 h-4 bg-blue-900"></div>
          {/* Stem down from Right Division */}
          <div className="absolute top-0 left-[75%] -translate-x-1/2 w-0.5 h-4 bg-blue-900"></div>

          {/* Left Sub Trunk (Development + Construction) */}
          <div className="absolute top-4 left-[12.5%] right-[62.5%] h-0.5 bg-blue-900"></div>
          {/* Right Sub Trunk (Finance + Sales) */}
          <div className="absolute top-4 left-[62.5%] right-[12.5%] h-0.5 bg-blue-900"></div>

          {/* Vertical drops to 4 teams */}
          <div className="absolute top-4 left-[12.5%] -translate-x-1/2 w-0.5 h-4 bg-blue-900"></div>
          <div className="absolute top-4 left-[37.5%] -translate-x-1/2 w-0.5 h-4 bg-blue-900"></div>
          <div className="absolute top-4 left-[62.5%] -translate-x-1/2 w-0.5 h-4 bg-blue-900"></div>
          <div className="absolute top-4 left-[87.5%] -translate-x-1/2 w-0.5 h-4 bg-blue-900"></div>
        </div>

        {/* 2. CORE FUNCTIONAL TEAMS (4 COLUMNS) */}
        <div className="grid grid-cols-4 gap-4 relative z-10">
          
          {/* TEAM 1: 개발팀 */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 shadow-sm overflow-hidden flex flex-col hover:border-blue-900 hover:bg-white transition-all">
            <div className="bg-blue-900 text-white p-3.5 text-center">
              <h4 className="text-base font-extrabold tracking-wider">{isKo ? '개 발 팀' : 'DEVELOPMENT TEAM'}</h4>
              <p className="text-[10px] font-mono tracking-widest text-blue-200 uppercase mt-0.5">DEVELOPMENT TEAM</p>
            </div>
            
            <div className="p-4 space-y-2 text-center text-xs text-slate-700 font-medium">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? 'SW / HW R&D 연구' : 'SW / HW R&D Lab'}</div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? 'CMS 핵심 엔진 개발' : 'Core CMS Engine R&D'}</div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? 'AI 비전 알고리즘' : 'AI Vision Algorithms'}</div>
            </div>
          </div>

          {/* TEAM 2: 시공팀 */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 shadow-sm overflow-hidden flex flex-col hover:border-blue-900 hover:bg-white transition-all">
            <div className="bg-blue-900 text-white p-3.5 text-center">
              <h4 className="text-base font-extrabold tracking-wider">{isKo ? '시 공 팀' : 'CONSTRUCTION TEAM'}</h4>
              <p className="text-[10px] font-mono tracking-widest text-blue-200 uppercase mt-0.5">CONSTRUCTION TEAM</p>
            </div>

            <div className="p-4 space-y-2 text-center text-xs text-slate-700 font-medium">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? 'LED 디스플레이 설치' : 'LED Display Installation'}</div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? '현장 설계 & 인프라' : 'Site Design & Infra'}</div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? '품질 검수 & 유지보수' : 'Quality Control & Maintenance'}</div>
            </div>
          </div>

          {/* TEAM 3: 재무팀 */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 shadow-sm overflow-hidden flex flex-col hover:border-blue-900 hover:bg-white transition-all">
            <div className="bg-blue-900 text-white p-3.5 text-center">
              <h4 className="text-base font-extrabold tracking-wider">{isKo ? '재 무 팀' : 'FINANCE TEAM'}</h4>
              <p className="text-[10px] font-mono tracking-widest text-blue-200 uppercase mt-0.5">FINANCE TEAM</p>
            </div>

            <div className="p-4 space-y-2 text-center text-xs text-slate-700 font-medium">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? '경영기획 & 자금운용' : 'Corporate Planning & Treasury'}</div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? '회계 & 인사법무' : 'Accounting & Legal / HR'}</div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? '사업 지원 & SCM' : 'Business Support & SCM'}</div>
            </div>
          </div>

          {/* TEAM 4: 영업팀 */}
          <div className="bg-slate-50 rounded-xl border border-slate-300 shadow-sm overflow-hidden flex flex-col hover:border-blue-900 hover:bg-white transition-all">
            <div className="bg-blue-900 text-white p-3.5 text-center">
              <h4 className="text-base font-extrabold tracking-wider">{isKo ? '영 업 팀' : 'SALES TEAM'}</h4>
              <p className="text-[10px] font-mono tracking-widest text-blue-200 uppercase mt-0.5">SALES TEAM</p>
            </div>

            <div className="p-4 space-y-2 text-center text-xs text-slate-700 font-medium">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? 'DOOH 매체 영업' : 'DOOH Media Sales'}</div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? '광고대행 네트워크' : 'Ad Agency Network'}</div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">{isKo ? '글로벌 신사업 수주' : 'Global Project Bidding'}</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
