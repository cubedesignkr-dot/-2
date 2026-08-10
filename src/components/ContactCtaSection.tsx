import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactCtaSectionProps {
  onNavigateContact: () => void;
}

export const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({ onNavigateContact }) => {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 font-sans text-white">
          BUILD YOUR MEDIA INFRASTRUCTURE WITH DISE
        </h2>
        <p className="text-base sm:text-xl font-medium text-slate-300 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          LED 미디어 구축과 디지털 사이니지 통합운영 프로젝트를 상담해보세요.
        </p>
        <div>
          <button
            type="button"
            onClick={onNavigateContact}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base tracking-wide rounded-xl transition-all shadow-xl hover:shadow-blue-500/25 flex items-center gap-2.5 group cursor-pointer border border-blue-400/30 active:scale-[0.98]"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
