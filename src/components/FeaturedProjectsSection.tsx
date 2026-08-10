import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroLedGlassBg from '../assets/images/hero_led_glass_bg_1786019620069.jpg';
import heroLedCityBg from '../assets/images/hero_led_city_bg_1786006096621.jpg';
import doohOutdoorMediaImg from '../assets/images/dooh_outdoor_media_1785989215681.jpg';
import hardwareControllerImg from '../assets/images/hardware_controller_1785989182277.jpg';

interface FeaturedProjectsSectionProps {
  onNavigateProjects: () => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ onNavigateProjects }) => {
  const projects = [
    {
      id: 'p1',
      name: 'INCHEON INTERNATIONAL AIRPORT',
      category: 'Airport LED Media',
      scope: 'LED Media · CMS · Integrated Operation',
      image: heroLedGlassBg,
    },
    {
      id: 'p2',
      name: 'HANOI OUTDOOR LED MEDIA',
      category: 'Outdoor Digital Media',
      scope: 'Outdoor Digital Media · DISE × MHGROUP',
      image: doohOutdoorMediaImg,
    },
    {
      id: 'p3',
      name: 'NOI BAI INTERNATIONAL AIRPORT',
      category: 'Airport LED Media',
      scope: 'Airport LED Media · Four-Company Collaboration (DISE · R2V · BIC · AXIS)',
      image: heroLedCityBg,
    },
    {
      id: 'p4',
      name: 'DOMESTIC LANDMARK PROJECTS',
      category: 'Digital Signage',
      scope: 'Digital Signage · LED Media Installation',
      image: hardwareControllerImg,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-sm inline-block">
            FEATURED PROJECTS
          </span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight font-sans">
            PROVEN IN COMPLEX,<br />
            HIGH-TRAFFIC ENVIRONMENTS
          </h2>
          <p className="text-base sm:text-xl font-medium text-slate-600 leading-relaxed">
            공항과 도시, 주요 상업공간에서 축적한 DISE의 LED 미디어 구축 및 운영 경험을 확인하세요.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={onNavigateProjects}
              className="group cursor-pointer flex flex-col space-y-4"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Minimal Text Info */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
                  {project.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-600 font-mono">
                  {project.scope}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Projects */}
        <div className="mt-16">
          <button
            type="button"
            onClick={onNavigateProjects}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 transition-colors group cursor-pointer border-b-2 border-blue-600/30 hover:border-blue-600 pb-1"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
