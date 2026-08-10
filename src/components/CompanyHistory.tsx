import React from 'react';
import { Calendar, Award, Globe, Building2, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';
import { Language } from '../types';
import { t } from '../utils/translations';
import { CompanyLogo } from './CompanyLogo';

interface CompanyHistoryProps {
  currentLang: Language;
  customLogo?: string | null;
}

export const CompanyHistory: React.FC<CompanyHistoryProps> = ({ currentLang, customLogo }) => {
  const isKo = currentLang === 'ko';

  // Top horizontal timeline events (2010 - 2026)
  const timelineMilestones = [
    {
      year: '2010',
      tag: 'FOUNDING',
      title: isKo ? '(주)하이미디어 법인 설립' : 'HI MEDIA Co., Ltd. Founded',
      subtitle: isKo ? '직업훈련전문학원 개업' : 'Vocational Training Institute Opened',
    },
    {
      year: '2014',
      tag: 'CMS ENGINE',
      title: isKo ? '영상분석 프로그램 개발' : 'Video Analytics Software R&D',
      subtitle: isKo ? 'CMS 핵심 엔진 확보' : 'Core CMS Engine Secured',
    },
    {
      year: '2015',
      tag: 'AIRPORT',
      title: isKo ? '인천공항 CMS 서버 구축' : 'Incheon Airport CMS Server',
      subtitle: isKo ? '현장 테스트 진입' : 'On-Site Operations Testing',
    },
    {
      year: '2017',
      tag: 'LANDMARK',
      title: isKo ? '인천공항 출국장 LED 4기' : '4 Airport Departure LEDs',
      subtitle: isKo ? '롯데면세점 LED 터널' : 'Lotte Duty Free LED Tunnel',
    },
    {
      year: '2019',
      tag: 'INTEGRATION',
      title: isKo ? '인천공항 FIDS 연동' : 'Incheon Airport FIDS Sync',
      subtitle: isKo ? '시스템 개발 및 구축' : 'System Architecture Deployed',
    },
    {
      year: '2020',
      tag: 'AI SYSTEM',
      title: isKo ? 'AI 열화상 안면인식' : 'AI Facial & Thermal System',
      subtitle: isKo ? '시스템 개발 (코로나)' : 'COVID Safety Module R&D',
    },
    {
      year: '2021',
      tag: 'ENTERPRISE',
      title: isKo ? '포스코 ICT 협약' : 'POSCO ICT Partnership',
      subtitle: isKo ? '공항 4단계 운항통신' : 'Phase 4 Airport Comms',
    },
    {
      year: '2023',
      tag: 'PUBLIC · FIN',
      title: isKo ? '신한은행 DID 시스템' : 'Shinhan Bank DID System',
      subtitle: isKo ? '서초구 양방향 DID' : 'Seocho-gu Interactive DID',
    },
    {
      year: '2024',
      tag: 'GLOBAL',
      title: isKo ? '중국 자은천하 XR 협약' : 'China XR Platform Partnership',
      subtitle: isKo ? '연변 방송국 CMS 협약' : 'Yanbian TV Station CMS Agreement',
    },
    {
      year: '2026',
      tag: 'VIETNAM',
      title: isKo ? 'MHGROUP 베트남 LED' : 'Vietnam MHGROUP LED Network',
      subtitle: isKo ? 'RSL·BIC 컨소시엄' : 'RSL · BIC Consortium',
    },
  ];

  // Chapter Summary (Chapters I - V)
  const chapters = [
    {
      chapter: 'CHAPTER I',
      title: isKo ? '기반 구축' : 'Foundation',
      enTitle: 'FOUNDATION',
      period: '2010 — 2014',
      items: isKo ? [
        '(주)하이미디어 법인 설립',
        '정부 지정 직업훈련학원 운영',
        'ACA·GTQ 국제공인 시험센터 유치',
        '영상분석 CMS 핵심 엔진 개발 완료',
      ] : [
        'Establishment of HI MEDIA Co., Ltd.',
        'Operated Government-Certified Training Center',
        'Hosted ACA & GTQ International Test Centers',
        'Completed Core Engine for Video Analytics CMS',
      ],
      accentColor: 'border-blue-600',
    },
    {
      chapter: 'CHAPTER II',
      title: isKo ? '공항·랜드마크' : 'Airport & Landmark',
      enTitle: 'AIRPORT & LANDMARK',
      period: '2015 — 2017',
      items: isKo ? [
        '인천국제공항 CMS 서버 구축 진입',
        '출국장 LED 전광판 4기 + 서버',
        '롯데면세점 LED 터널 시공',
        '제주 YG카페·광화문 K타워 LED',
      ] : [
        'Deployed Incheon Airport CMS Server',
        '4 Departure Hall LED Screens + Server Infrastructure',
        'Lotte Duty Free LED Media Tunnel',
        'Jeju YG Cafe & Gwanghwamun K-Tower LED Media',
      ],
      accentColor: 'border-blue-700',
    },
    {
      chapter: 'CHAPTER III',
      title: isKo ? '통합·고도화' : 'Integration & Sync',
      enTitle: 'CMS & AI EVOLUTION',
      period: '2018 — 2020',
      items: isKo ? [
        '공항 다목적체육관·밀레니엄홀',
        'FIDS 일반망 연동·긴급메시지',
        '여의도 IFC몰 미디어타워',
        'AI 열화상 안면인식 시스템 개발',
      ] : [
        'Airport Gymnasium & Millennium Hall Displays',
        'FIDS Sync & Emergency Messaging Integration',
        'Yeouido IFC Mall Media Tower Installation',
        'AI Thermal & Facial Recognition System R&D',
      ],
      accentColor: 'border-indigo-600',
    },
    {
      chapter: 'CHAPTER IV',
      title: isKo ? '다각화·확장' : 'B2B & Public Expansion',
      enTitle: 'DIVERSIFICATION',
      period: '2021 — 2023',
      items: isKo ? [
        '포스코 ICT·인천공항 4단계 CMS',
        '서울시·성남시 AI 스마트시스템',
        '신한은행 DID 시스템 구축',
        '서초구 양방향 DID·고속터미널',
      ] : [
        'POSCO ICT Partnership for Airport Phase 4',
        'Seoul & Seongnam AI Smart System Deployment',
        'Shinhan Bank Nationwide Digital Media Rollout',
        'Seocho-gu Interactive Smart DID Deployment',
      ],
      accentColor: 'border-indigo-700',
    },
    {
      chapter: 'CHAPTER V',
      title: isKo ? '해외·차세대' : 'Global Expansion',
      enTitle: 'GLOBAL & NEXT-GEN',
      period: '2024 — 2026',
      items: isKo ? [
        '중국 자은천하 XR 협약',
        '중국 연변 방송국 CMS 협약',
        'MHGROUP 베트남 LED 옥외광고',
        'RSL·BIC 컨소시엄 본격 추진',
      ] : [
        'China XR Virtual Space Platform Partnership',
        'Yanbian TV Station Dedicated CMS License Supply',
        'Vietnam MHGROUP DOOH Media Contract',
        'RSL & BIC Consortium Global Media Expansion',
      ],
      accentColor: 'border-blue-800',
    },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm animate-fadeIn space-y-12">
      {/* 1. Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-6 border-b border-slate-200 gap-4">
        <div className="flex items-center gap-4">
          <div className="h-12 px-3.5 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-center shrink-0 shadow-sm">
            <CompanyLogo customLogo={customLogo} variant="dark" className="h-8 w-auto" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t('company_history_title', currentLang)}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-widest mt-0.5">
              DISEHI MEDIA · CORPORATE CHRONICLE
            </p>
          </div>
        </div>

        <div className="text-left md:text-right">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">PERIOD</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight">
            2010 — 2026
          </div>
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">
            SIXTEEN YEARS UNINTERRUPTED
          </div>
        </div>
      </div>

      {/* 2. Top Timeline Axis (DATE / YEARS) - 2 Rows for Full Visibility without Scroll */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950 text-white text-xs font-mono font-bold">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span>DH</span>
            <span className="text-slate-400">|</span>
            <span>DATE / YEARS</span>
          </div>
          <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
            {t('company_history_record', currentLang)}
          </span>
        </div>

        {/* 2-Row Grid Container (5 items per row, fitting all screens cleanly) */}
        <div className="space-y-8">
          {/* Row 1: 2010 - 2019 */}
          <div className="relative">
            {/* Row 1 Horizontal Line */}
            <div className="hidden sm:block absolute top-8 left-8 right-8 h-1 bg-blue-900/20 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-2 relative z-10">
              {timelineMilestones.slice(0, 5).map((ms, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group p-3 sm:p-1 rounded-xl bg-slate-50/60 sm:bg-transparent border sm:border-0 border-slate-200">
                  {/* Year Number */}
                  <span className="text-base sm:text-lg font-extrabold text-blue-950 font-mono tracking-tight mb-1.5 group-hover:text-blue-600 transition-colors">
                    {ms.year}
                  </span>

                  {/* Dot on Line */}
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-900 border-4 border-white shadow-md mb-2 group-hover:scale-125 transition-transform shrink-0"></div>

                  {/* Tag */}
                  <span className="text-[10px] font-mono font-bold tracking-wider text-blue-800 uppercase bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 mb-1.5 whitespace-nowrap">
                    {ms.tag}
                  </span>

                  {/* Title & Subtitle */}
                  <p className="text-xs font-extrabold text-slate-900 leading-snug break-keep">
                    {ms.title}
                  </p>
                  <p className="text-[11px] text-slate-600 leading-snug mt-1 break-keep">
                    {ms.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: 2020 - 2026 */}
          <div className="relative pt-2 border-t border-slate-100 sm:border-0 sm:pt-0">
            {/* Row 2 Horizontal Line */}
            <div className="hidden sm:block absolute top-8 left-8 right-8 h-1 bg-blue-900/20 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-2 relative z-10">
              {timelineMilestones.slice(5, 10).map((ms, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group p-3 sm:p-1 rounded-xl bg-slate-50/60 sm:bg-transparent border sm:border-0 border-slate-200">
                  {/* Year Number */}
                  <span className="text-base sm:text-lg font-extrabold text-blue-950 font-mono tracking-tight mb-1.5 group-hover:text-blue-600 transition-colors">
                    {ms.year}
                  </span>

                  {/* Dot on Line */}
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-900 border-4 border-white shadow-md mb-2 group-hover:scale-125 transition-transform shrink-0"></div>

                  {/* Tag */}
                  <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-800 uppercase bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200 mb-1.5 whitespace-nowrap">
                    {ms.tag}
                  </span>

                  {/* Title & Subtitle */}
                  <p className="text-xs font-extrabold text-slate-900 leading-snug break-keep">
                    {ms.title}
                  </p>
                  <p className="text-[11px] text-slate-600 leading-snug mt-1 break-keep">
                    {ms.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. CHAPTER SUMMARY (시기별 사업 단계) */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600"></span>
              <span>CHAPTER SUMMARY</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {t('company_history_evolution', currentLang)}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-700 self-start sm:self-auto">
            <span>{t('company_history_phases', currentLang)}</span>
          </div>
        </div>

        {/* Chapters Cards arranged in 2 spacious rows: Row 1 (Ch 1, 2, 3) & Row 2 (Ch 4, 5) */}
        <div className="space-y-5">
          {/* Top Row: CHAPTER I, II, III (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {chapters.slice(0, 3).map((ch, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-500 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between border-t-4 ${ch.accentColor} group`}
              >
                <div>
                  {/* Chapter Title & Period Header */}
                  <div className="pb-3 border-b border-slate-200/80 mb-3 space-y-1">
                    {/* Line 1: CHAPTER Badge + Title */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-mono font-extrabold text-blue-900 bg-blue-100/80 px-2 py-0.5 rounded border border-blue-200/80 uppercase tracking-wider shrink-0">
                        {ch.chapter}
                      </span>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight [word-break:keep-all] group-hover:text-blue-600 transition-colors">
                        {ch.title}
                      </h4>
                    </div>

                    {/* Line 2: Period */}
                    <div className="text-xs font-mono text-blue-800 font-extrabold tracking-tight">
                      {ch.period}
                    </div>

                    {/* English Subtitle */}
                    <p className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                      {ch.enTitle}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {ch.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 leading-relaxed [word-break:keep-all]">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2 group-hover:scale-125 transition-transform"></span>
                        <span className="font-semibold text-slate-800">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: CHAPTER IV, V (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {chapters.slice(3, 5).map((ch, idx) => (
              <div
                key={idx + 3}
                className={`p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-500 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between border-t-4 ${ch.accentColor} group`}
              >
                <div>
                  {/* Chapter Title & Period Header */}
                  <div className="pb-3 border-b border-slate-200/80 mb-3 space-y-1">
                    {/* Line 1: CHAPTER Badge + Title */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-mono font-extrabold text-blue-900 bg-blue-100/80 px-2 py-0.5 rounded border border-blue-200/80 uppercase tracking-wider shrink-0">
                        {ch.chapter}
                      </span>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight [word-break:keep-all] group-hover:text-blue-600 transition-colors">
                        {ch.title}
                      </h4>
                    </div>

                    {/* Line 2: Period */}
                    <div className="text-xs font-mono text-blue-800 font-extrabold tracking-tight">
                      {ch.period}
                    </div>

                    {/* English Subtitle */}
                    <p className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                      {ch.enTitle}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {ch.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 leading-relaxed [word-break:keep-all]">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2 group-hover:scale-125 transition-transform"></span>
                        <span className="font-semibold text-slate-800">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Bottom Key Stats & Brand Bar */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="flex items-center gap-8 text-center md:text-left">
          <div>
            <div className="text-3xl font-black text-white font-mono tracking-tight">16</div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">YEARS</div>
          </div>
          <div className="h-8 w-px bg-slate-800"></div>
          <div>
            <div className="text-3xl font-black text-blue-400 font-mono tracking-tight">600+</div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">SCREENS</div>
          </div>
          <div className="h-8 w-px bg-slate-800"></div>
          <div>
            <div className="text-3xl font-black text-red-500 font-mono tracking-tight">51</div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">PROJECTS</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
          <div className="text-xs font-mono text-slate-300 font-semibold tracking-wider">
            DISPLAY · MEDIA · AI · XR
          </div>
          <div className="flex items-center pl-4 border-l border-slate-800">
            <div className="h-12 px-3.5 py-1.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 shadow-sm">
              <CompanyLogo customLogo={customLogo} variant="dark" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
