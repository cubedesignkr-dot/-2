import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroLedGlassBg from '../assets/images/hero_led_glass_bg_1786019620069.jpg';
import heroLedCityBg from '../assets/images/hero_led_city_bg_1786006096621.jpg';
import doohOutdoorMediaImg from '../assets/images/dooh_outdoor_media_1785989215681.jpg';

interface FeaturedProjectsSectionProps {
  onNavigateProjects: () => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ onNavigateProjects }) => {
  const primaryProject = {
    id: 'p1',
    name: 'INCHEON INTERNATIONAL AIRPORT',
    location: 'Incheon, South Korea',
    category: 'Airport LED Media',
    scope: 'LED Media · CMS · Integrated Operation',
    image: heroLedGlassBg,
  };

  const secondaryProjects = [
    {
      id: 'p2',
      name: 'HANOI OUTDOOR LED MEDIA',
      location: 'Hanoi, Vietnam',
      category: 'Outdoor Digital Media',
      scope: 'Outdoor Digital Media · DISE × MHGROUP',
      image: doohOutdoorMediaImg,
    },
    {
      id: 'p3',
      name: 'NOI BAI INTERNATIONAL AIRPORT',
      location: 'Hanoi, Vietnam',
      category: 'Airport LED Media',
      scope: 'Airport LED Media · DISE · R2V · BIC · AXIS',
      image: heroLedCityBg,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label - Simple text without pill background */}
        <div className="mb-4 sm:mb-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 inline-block">
            FEATURED PROJECTS
          </span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-2.5">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08] font-sans">
            PROVEN IN COMPLEX,<br />
            HIGH-TRAFFIC ENVIRONMENTS
          </h2>
          <p className="text-sm sm:text-lg font-normal text-slate-600 leading-[1.7]">
            공항과 도시, 주요 상업공간에서 축적한 DISE의 LED 미디어 구축 및 운영 경험을 확인하세요.
          </p>
        </div>

        {/* Editorial Layout: Prominent Main Project + 2 Grid Projects */}
        <div className="space-y-10 sm:space-y-12">
          {/* Main Hero Project: Incheon Airport */}
          <div
            onClick={onNavigateProjects}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center border-b border-slate-200 pb-10"
          >
            <div className="lg:col-span-8 overflow-hidden bg-slate-100 border border-slate-200 aspect-[16/9]">
              <img
                src={primaryProject.image}
                alt={primaryProject.name}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest">
                {primaryProject.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {primaryProject.name}
              </h3>
              <p className="text-xs font-mono text-slate-500">
                {primaryProject.location}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {primaryProject.scope}
              </p>
            </div>
          </div>

          {/* Secondary 2 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                onClick={onNavigateProjects}
                className="group cursor-pointer flex flex-col space-y-3"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest">
                    {project.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    {project.location}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Link to Projects */}
        <div className="mt-12">
          <button
            type="button"
            onClick={onNavigateProjects}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group cursor-pointer border-b border-blue-600/30 hover:border-blue-600 pb-0.5"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
