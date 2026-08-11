import React from 'react';
import { Language } from '../types';

interface CeoSectionProps {
  currentLang: Language;
}

export const CeoSection: React.FC<CeoSectionProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* SECTION HEADER & TOP DIVIDER */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#D9DEE3]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#294A63]">03</span>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#294A63]">
              CEO MESSAGE
            </span>
          </div>
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#66717C]">
            MESSAGE FROM CO-CEOS
          </span>
        </div>
      </div>

      {/* 1. YOO JEONG WOO CO-CEO BLOCK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-[#D9DEE3]">
        {/* LEFT COLUMN: Official Portrait Frame (~38% / 5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="w-[80%] sm:w-[75%] lg:w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] mx-auto lg:mx-0 aspect-[4/5] overflow-hidden rounded-[2px] bg-[#F8F9FA] border border-[#D9DEE3]">
            <img
              src="/images/about/ceo-yoo-jeong-woo-v2.webp"
              alt="다이즈하이미디어 유정우 각자대표"
              loading="lazy"
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: 'center top' }}
            />
          </div>
          <div className="text-center lg:text-left space-y-1">
            <span className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-wider block">
              CO-CHIEF EXECUTIVE OFFICER
            </span>
            <p className="text-sm font-bold text-[#222831]">
              {isKo ? '유정우 각자대표' : 'YOO JEONG WOO, CO-CEO'}
            </p>
            <span className="text-[11px] font-mono text-[#66717C] block">
              CO-CEO · DISE HIGH MEDIA
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Desktop Headline, Message & Representative Info (~62% / 7 cols) */}
        <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[#D9DEE3] space-y-6 sm:space-y-8">
          {/* HEADLINE */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#222831] tracking-tight leading-[1.3] font-sans">
              {isKo ? (
                <>
                  기술의 깊이를<br />
                  시장의 확장으로 연결합니다.
                </>
              ) : (
                'Bridging Technical Depth with Market Expansion.'
              )}
            </h2>
          </div>

          {/* CEO MESSAGE BODY PARAGRAPHS */}
          <div className="space-y-4 text-sm sm:text-base text-[#4A5568] font-normal leading-[1.85] font-sans">
            {isKo ? (
              <>
                <p>
                  기술이 깊을수록, 그것을 시장의 언어로 옮기는 일이 중요합니다.
                </p>
                <p>
                  DISE는 2010년부터 축적해 온 LED 미디어 기술과 운영 경험을 국내 주요 공간을 넘어 글로벌 시장으로 확장하고 있습니다.
                </p>
                <p>
                  검증된 기술을 기반으로 새로운 미디어 환경을 설계하고, 고객과 파트너가 신뢰할 수 있는 지속 가능한 사업 구조를 만들어가겠습니다.
                </p>
                <p>
                  DISE의 다음 도약을 함께해 주시기 바랍니다.
                </p>
              </>
            ) : (
              <>
                <p>
                  The deeper the technology, the more crucial it is to translate it into the language of the market.
                </p>
                <p>
                  Since 2010, DISE has built extensive LED media technology and operational expertise, expanding from major domestic landmarks into the global market.
                </p>
                <p>
                  Based on proven technology, we design innovative media environments and establish sustainable business models trusted by clients and partners.
                </p>
                <p>
                  We invite you to join DISE on our next leap forward.
                </p>
              </>
            )}
          </div>

          {/* REPRESENTATIVE INFORMATION BLOCK */}
          <div className="pt-6 sm:pt-8 border-t border-[#D9DEE3] space-y-2">
            <p className="text-xs text-[#66717C] font-mono tracking-wider">
              {isKo ? '㈜다이즈하이미디어 각자대표' : 'DISE HIGH MEDIA Co., Ltd.'}
            </p>
            <p className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight font-sans">
              {isKo ? '유정우 각자대표' : 'YOO JEONG WOO'}
            </p>
            <div className="space-y-0.5 pt-1">
              <p className="text-xs font-mono font-semibold text-[#294A63] tracking-widest uppercase">
                YOO JEONG WOO
              </p>
              <p className="text-xs text-[#66717C] font-mono tracking-wide">
                CO-CEO · DISE HIGH MEDIA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. WON JONG IL CO-CEO & CTO BLOCK (PURE TYPOGRAPHY - NO PHOTO / NO PLACEHOLDER) */}
      <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-6 sm:p-10 rounded-[2px] space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-wider block">
            CO-CEO & CTO
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight font-sans">
            {isKo ? '자체 CMS와 원천 기술로 무중단 미디어 인프라를 지탱합니다.' : 'Sustaining Uninterrupted Media Infrastructure with Proprietary CMS & Core Technology.'}
          </h3>
        </div>

        <div className="space-y-3 text-sm sm:text-base text-[#4A5568] font-normal leading-[1.85] font-sans">
          {isKo ? (
            <>
              <p>
                16년간 무중단 운영 실적으로 검증된 자체 CMS 및 디스플레이 제어 원천 기술은 DISE의 가장 강력한 자산입니다.
              </p>
              <p>
                인천국제공항 600개 이상의 스크린 통합 관제부터 복합 미디어 공간 연동까지, 기술적 안정성을 바탕으로 흔들림 없는 미디어 환경을 구현해 가겠습니다.
              </p>
            </>
          ) : (
            <>
              <p>
                Proven by 16 years of uninterrupted operation, our proprietary CMS and display control core technologies represent DISE's core strength.
              </p>
              <p>
                From integrated control of 600+ screens at Incheon International Airport to complex venue media syncing, we deliver rock-solid media environments through technical reliability.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-[#D9DEE3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <p className="text-base font-bold text-[#222831] font-sans">
              {isKo ? '원종일 각자대표 겸 기술총괄' : 'JONG-IL WON'}
            </p>
            <p className="text-xs font-mono text-[#66717C]">
              CO-CEO & CTO · DISE HIGH MEDIA
            </p>
          </div>
          <span className="text-xs font-mono text-[#294A63] font-semibold uppercase tracking-wider">
            R&D & TECHNICAL ARCHITECTURE
          </span>
        </div>
      </div>
    </div>
  );
};
