import React from 'react';
import { Language } from '../types';
import ceoPortraitDriveImg from '../assets/images/ceo_portrait_drive.jpg';

interface CeoSectionProps {
  currentLang: Language;
}

export const CeoSection: React.FC<CeoSectionProps> = ({ currentLang }) => {
  const isKo = currentLang === 'ko';

  return (
    <div className="space-y-8 sm:space-y-10">
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
            MESSAGE FROM THE CEO
          </span>
        </div>
      </div>

      {/* MOBILE HEADLINE (Shown before portrait on mobile) */}
      <div className="block lg:hidden">
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

      {/* TWO-COLUMN EDITORIAL LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-[#D9DEE3]">
        {/* LEFT COLUMN: Official Portrait (~38% / 5 cols) */}
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-[2px] bg-[#F5F6F7]">
            <img
              src={ceoPortraitDriveImg}
              alt="대표이사 유정우"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://i.imgur.com/JL7fa9f.png';
              }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Desktop Headline, Message & Representative Info (~62% / 7 cols) */}
        <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[#D9DEE3] space-y-6 sm:space-y-8">
          {/* DESKTOP HEADLINE */}
          <div className="hidden lg:block">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#222831] tracking-tight leading-[1.3] font-sans">
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
          <div className="pt-6 sm:pt-8 border-t border-[#D9DEE3] space-y-3">
            <div className="space-y-1">
              <p className="text-xs text-[#66717C] font-mono tracking-wider">
                {isKo ? '㈜다이즈하이미디어 대표이사' : 'DISE HIGH MEDIA Co., Ltd.'}
              </p>
              <p className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight font-sans">
                {isKo ? '유정우' : 'YOO JEONG WOO'}
              </p>
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-mono font-semibold text-[#294A63] tracking-widest uppercase">
                YOO JEONG WOO
              </p>
              <p className="text-xs text-[#66717C] font-mono tracking-wide">
                CEO · DISE HIGH MEDIA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
