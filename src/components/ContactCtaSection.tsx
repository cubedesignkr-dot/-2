import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactCtaSectionProps {
  onNavigateContact: () => void;
}

export const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({ onNavigateContact }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#18324A] text-white border-b border-[#294A63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] mb-3 font-sans text-white">
          BUILD YOUR MEDIA INFRASTRUCTURE WITH DISE
        </h2>
        <p className="text-sm sm:text-lg font-normal text-slate-300 max-w-2xl mb-8 leading-relaxed">
          LED 미디어 구축과 디지털 사이니지 통합운영 프로젝트를 상담해보세요.
        </p>
        <div>
          <button
            type="button"
            onClick={onNavigateContact}
            className="px-6 py-3 bg-white hover:bg-slate-100 text-[#18324A] font-semibold text-sm tracking-wide rounded-sm transition-all shadow-none flex items-center gap-2 group cursor-pointer border border-white/20 active:scale-[0.98]"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#18324A]" />
          </button>
        </div>
      </div>
    </section>
  );
};
