import React from 'react';
import { Language } from '../types';

interface CeoSectionProps {
  currentLang: Language;
}

export const CeoSection: React.FC<CeoSectionProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';
  const [imgError, setImgError] = React.useState(false);

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
            EXECUTIVE MESSAGE
          </span>
        </div>
      </div>

      {/* 1. YOO JEONG WOO REPRESENTATIVE DIRECTOR BLOCK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-[#D9DEE3]">
        {/* LEFT COLUMN: Official Portrait Frame (~38% / 5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="w-[80%] sm:w-[75%] lg:w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] mx-auto lg:mx-0 aspect-[4/5] overflow-hidden rounded-[2px] bg-[#F8F9FA] border border-[#D9DEE3]">
            {imgError ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#F8F9FA] text-[#66717C] text-xs font-mono p-4 text-center">
                <span>IMAGE UNAVAILABLE</span>
                <span className="text-[10px] mt-1 text-[#8C98A4]">이미지 준비 중</span>
              </div>
            ) : (
              <img
                src="/images/about/ceo-yoo-jeong-woo-hq.webp"
                alt="다이즈하이미디어 유정우 대표이사"
                loading="lazy"
                width={440}
                height={550}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <div className="text-center lg:text-left space-y-1">
            <span className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-wider block">
              CHIEF EXECUTIVE OFFICER
            </span>
            <p className="text-sm font-bold text-[#222831]">
              {isKo ? '유정우 대표이사' : 'YOO JEONG WOO, CEO'}
            </p>
            <span className="text-[11px] font-mono text-[#66717C] block">
              CEO · DISE HI MEDIA
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
                  시장의 언어로 연결합니다.
                </>
              ) : (
                'Connecting Technical Depth with Market Language.'
              )}
            </h2>
          </div>

          {/* CEO MESSAGE BODY PARAGRAPHS */}
          <div className="space-y-4 text-sm sm:text-base text-[#4A5568] font-normal leading-[1.85] font-sans">
            {isKo ? (
              <>
                <p>
                  기술이 깊을수록 그것을 시장의 언어로 옮기는 일이 중요합니다.
                </p>
                <p>
                  DISE가 축적해 온 LED 미디어 기술과 운영 경험을 기반으로 베트남을 비롯한 글로벌 시장으로 사업 영역을 확장하고, 고객과 파트너가 신뢰할 수 있는 사업 구조를 만들어가겠습니다.
                </p>
              </>
            ) : (
              <>
                <p>
                  The deeper the technology, the more crucial it is to translate it into the language of the market.
                </p>
                <p>
                  Based on the LED media technology and operational experience accumulated by DISE, we are expanding our business into global markets including Vietnam, creating a business structure trusted by customers and partners.
                </p>
              </>
            )}
          </div>

          {/* REPRESENTATIVE INFORMATION BLOCK */}
          <div className="pt-6 sm:pt-8 border-t border-[#D9DEE3] space-y-2">
            <p className="text-xs text-[#66717C] font-mono tracking-wider">
              {isKo ? '㈜다이즈하이미디어 대표이사' : 'DISE HI MEDIA Co., Ltd.'}
            </p>
            <p className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight font-sans">
              {isKo ? '유정우 대표이사' : 'YOO JEONG WOO'}
            </p>
            <div className="space-y-0.5 pt-1">
              <p className="text-xs font-mono font-semibold text-[#294A63] tracking-widest uppercase">
                YOO JEONG WOO
              </p>
              <p className="text-xs text-[#66717C] font-mono tracking-wide">
                CEO · DISE HI MEDIA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. WON JONG IL TECHNOLOGY & OPERATION BLOCK (PURE TYPOGRAPHY) */}
      <div className="bg-[#F8F9FA] border border-[#D9DEE3] p-6 sm:p-10 rounded-[2px] space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-[#294A63] uppercase tracking-wider block">
            TECHNOLOGY & OPERATION
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#222831] tracking-tight font-sans">
            {isKo
              ? '축적된 기술과 운영 경험으로 안정적인 미디어 인프라를 만들어갑니다.'
              : 'Building Stable Media Infrastructure with Accumulated Technology & Operational Experience.'}
          </h3>
        </div>

        <div className="space-y-3 text-sm sm:text-base text-[#4A5568] font-normal leading-[1.85] font-sans">
          {isKo ? (
            <>
              <p>
                2010년 영상분석 프로그램 개발을 시작으로 자체 CMS와 디스플레이 제어 기술을 축적해 왔습니다.
              </p>
              <p>
                인천국제공항 LED 스크린 통합운영 경험과 축적된 기술을 기반으로 안정적인 미디어 인프라를 만들어가겠습니다.
              </p>
            </>
          ) : (
            <>
              <p>
                Starting with video analysis software development in 2010, we have accumulated proprietary CMS and display control technology.
              </p>
              <p>
                Based on integrated operational experience with Incheon International Airport LED screens and accumulated technology, we will build a stable media infrastructure.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-[#D9DEE3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <p className="text-base font-bold text-[#222831] font-sans">
              {isKo ? '원종일 각자대표' : 'WON JONG IL'}
            </p>
            <p className="text-xs font-mono text-[#66717C]">
              CO-CEO · DISE HI MEDIA
            </p>
          </div>
          <span className="text-xs font-mono text-[#294A63] font-semibold uppercase tracking-wider">
            TECHNOLOGY & OPERATION
          </span>
        </div>
      </div>
    </div>
  );
};
