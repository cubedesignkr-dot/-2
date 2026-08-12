import React from 'react';
import { Language, AmsitTech } from '../types';

interface AmsitTechSectionProps {
  currentLang?: Language;
  techs?: AmsitTech[];
}

const GoldenWreath = ({ letter }: { letter: string }) => (
  <div className="relative w-20 h-20 mx-auto flex items-center justify-center my-1 shrink-0">
    <svg className="w-full h-full text-amber-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow circle */}
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
      {/* Left Leaf Clusters */}
      <path d="M 28 32 C 22 28 16 32 14 38 C 20 40 26 36 28 32 Z" fill="currentColor" />
      <path d="M 22 46 C 16 43 11 48 10 54 C 16 54 21 50 22 46 Z" fill="currentColor" />
      <path d="M 24 60 C 18 60 14 66 16 72 C 20 70 24 64 24 60 Z" fill="currentColor" />
      <path d="M 32 72 C 28 75 26 82 30 86 C 34 82 35 76 32 72 Z" fill="currentColor" />
      {/* Right Leaf Clusters */}
      <path d="M 72 32 C 78 28 84 32 86 38 C 80 40 74 36 72 32 Z" fill="currentColor" />
      <path d="M 78 46 C 84 43 89 48 90 54 C 84 54 79 50 78 46 Z" fill="currentColor" />
      <path d="M 76 60 C 82 60 86 66 84 72 C 80 70 76 64 76 60 Z" fill="currentColor" />
      <path d="M 68 72 C 72 75 74 82 70 86 C 66 82 65 76 68 72 Z" fill="currentColor" />
    </svg>
    <span className="absolute text-2xl font-black text-white tracking-widest drop-shadow-md">
      {letter}
    </span>
  </div>
);

export const AmsitTechSection: React.FC<AmsitTechSectionProps> = ({ currentLang = 'ko' }) => {
  const isKo = currentLang === 'ko';

  const amsitItems = [
    {
      id: 'a',
      letter: 'A',
      dots: 'A · F · D',
      title: isKo ? '에어로-플렉스 디스플레이' : 'Aero-Flex Display',
      subTitle: 'AERO-FLEX DISPLAY',
      highlightHeader: isKo ? '이종디스플레이 통합 동기화' : 'Multi-Display Sync Engine',
      highlightDesc: isKo ? '25개 모니터 1 프레임 무오차' : '25 Monitors 0-Frame Lag',
    },
    {
      id: 'm',
      letter: 'M',
      dots: 'M · W · C',
      title: isKo ? 'MW 컨트롤러' : 'MW Controller',
      subTitle: 'MW CONTROLLER',
      highlightHeader: isKo ? 'PC 1대 = 36K · 외산 1/3 가격' : '1 PC = 36K Resolution',
      highlightDesc: isKo ? '가성비 자체 개발 컨트롤러' : 'In-house Cost-Effective Processor',
    },
    {
      id: 's',
      letter: 'S',
      dots: 'S · O · F',
      title: isKo ? '스택온 플로우' : 'Stack-On-Flow',
      subTitle: 'STACK-ON-FLOW',
      highlightHeader: isKo ? '팔레트없앤 무중단 자유 적층' : 'Seamless Dynamic Overlay',
      highlightDesc: isKo ? '광고·자막·시세 즉시 교체' : 'Instant Ad & Data Switching',
    },
    {
      id: 'i',
      letter: 'I',
      dots: 'I · M · T',
      title: isKo ? '임페러티브 트리거' : 'Imperative Trigger',
      subTitle: 'IMPERATIVE TRIGGER',
      highlightHeader: isKo ? '원클릭 일제 송출' : '1-Click Universal Override',
      highlightDesc: isKo ? 'B2G 안전 의무 솔루션 · 광고주 신뢰' : 'B2G Emergency Safety & Ad Trust',
    },
    {
      id: 't',
      letter: 'T',
      dots: 'T · E · D',
      title: isKo ? 'TED 생체 인식' : 'TED Biometrics',
      subTitle: 'TARGETING ECHO DETECT',
      highlightHeader: isKo ? '안면·실루엣·음성 멀티모달' : 'Multimodal Face & Silhouette AI',
      highlightDesc: isKo ? '반응형 광고 · 도어락 응용' : 'Interactive Ads & Doorlock Integration',
    },
  ];

  return (
    <section id="tech" className="py-6 text-slate-900 bg-white">
      {/* Title Header Banner matching exact wording from reference screenshot */}
      <div className="text-center mb-8 max-w-4xl mx-auto px-4">
        <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug tracking-tight [word-break:keep-all] break-keep">
          {isKo ? (
            <>
              <span className="text-[#294A63] font-black">2010년 이후 축적해 온 기술과 대형 미디어 인프라 운영 경험</span>으로 검증된 통합 미디어 플랫폼 기술 체계
            </>
          ) : (
            <>
              Integrated Media Platform Tech Core Proven by <span className="text-[#294A63] font-black">Extensive Operational Experience Since 2010</span>
            </>
          )}
        </h2>
      </div>

      {/* 5 AMSIT Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {amsitItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#111c38] text-white rounded-xl shadow-lg border border-slate-800 border-t-4 border-t-[#c81e1e] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-t-red-500"
          >
            {/* Top Card Area */}
            <div className="p-6 text-center space-y-3 flex-1 flex flex-col items-center justify-start">
              {/* Laurel Wreath Emblem with Code Letter */}
              <GoldenWreath letter={item.letter} />

              {/* Dots Code */}
              <div className="text-[11px] font-mono font-bold tracking-[0.22em] text-amber-300/90 uppercase">
                {item.dots}
              </div>

              {/* Main Title */}
              <h3 className="text-lg font-black tracking-tight text-white leading-tight mt-1 [word-break:keep-all] break-keep">
                {item.title}
              </h3>

              {/* English Subtitle */}
              <p className="text-[10px] font-mono tracking-widest text-slate-300/80 uppercase">
                {item.subTitle}
              </p>
            </div>

            {/* Bottom Highlight Box matching the dark sub-box in the reference screenshot */}
            <div className="m-4 mt-2 p-4 rounded-lg bg-[#18264d] border border-slate-700/60 text-center space-y-1.5 flex flex-col justify-center min-h-[88px]">
              <div className="text-xs sm:text-sm font-black text-white leading-snug [word-break:keep-all] break-keep">
                {item.highlightHeader}
              </div>
              <div className="text-[11px] text-slate-300 font-normal leading-relaxed [word-break:keep-all] break-keep">
                {item.highlightDesc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
