import React from 'react';

export const WhyDiseSection: React.FC = () => {
  const strengths = [
    {
      num: '01',
      title: 'SINCE 2010',
      desc: '축적된 현장 및 운영 경험',
    },
    {
      num: '02',
      title: 'IN-HOUSE CMS',
      desc: '자체 개발 콘텐츠 관리 기술',
    },
    {
      num: '03',
      title: 'AIRPORT-SCALE OPERATION',
      desc: '대규모 미디어 통합관제 역량',
    },
    {
      num: '04',
      title: 'END-TO-END CAPABILITY',
      desc: '기획·구축·운영을 연결하는 수행 체계',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 bg-white border border-slate-200 px-3 py-1 rounded-sm inline-block">
            WHY DISE
          </span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight font-sans">
            TECHNOLOGY THAT CONTINUES<br />
            BEYOND INSTALLATION
          </h2>
          <p className="text-base sm:text-xl font-medium text-slate-600 leading-relaxed">
            구축으로 끝나지 않는 기술과 운영 경험이 DISE의 차이를 만듭니다.
          </p>
        </div>

        {/* Wide Layout Divided by Thin Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-slate-300 divide-y md:divide-y-0 md:divide-x divide-slate-300">
          {strengths.map((item) => (
            <div key={item.num} className="py-10 md:py-12 md:px-8 first:md:pl-0 last:md:pr-0 space-y-4">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block">
                {item.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-sans">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
