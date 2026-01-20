
import React, { useState } from 'react';
import { SERVICES, IconMap } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const serviceImages: Record<string, string> = {
  '1': '/Public/what-we-offer/web-developement.webp',
  '2': '/Public/what-we-offer/mobile-app-developement.webp',
  '3': '/Public/what-we-offer/software-development-image.webp',
  '4': '/Public/what-we-offer/digital-marketing.webp',
  '5': '/Public/what-we-offer/uiux-design.webp',
  '6': '/Public/what-we-offer/cloud-solutions.webp'
};

const Services: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="section-spacing relative bg-slate-50/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center gap-16 mb-16">
          <div className="max-w-3xl">
            <span className="text-tech-blue font-black text-xs uppercase tracking-[0.4em] mb-8 block">Core Competencies</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-app-slate tracking-tighter leading-tight">
              What We Do?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => {
            const Icon = IconMap[service.icon] || IconMap.Code2;
            const isHovered = hoveredId === service.id;
            return (
              <div 
                key={service.id}
                className="group rounded-3xl shadow-sm aspect-square scale-[0.85] relative"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ perspective: '1000px' }}
              >
                <div className={`relative w-full h-full transition-transform duration-700 ${isHovered ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 p-6 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between" style={{ backfaceVisibility: 'hidden' }}>
                    <img src={serviceImages[service.id]} alt={service.title} className="absolute inset-0 w-full h-full object-cover rounded-3xl" />
                    <div className="relative z-10 mt-auto text-center">
                      <h4 className="text-2xl font-bold text-white drop-shadow-[0_8px_16px_rgba(0,0,0,1)] [text-shadow:_3px_3px_12px_rgb(0_0_0),_0_0_20px_rgb(0_0_0)]">{service.title}</h4>
                    </div>
                  </div>
                  <div className="absolute inset-0 p-6 rounded-3xl bg-white border border-slate-200 hover:border-tech-blue flex flex-col justify-between" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <h4 className="text-3xl font-bold text-app-slate">
                      {service.title}
                    </h4>
                    <p className="text-slate-500 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <a href="#" className="text-app-slate font-medium text-base flex items-center gap-2 hover:text-tech-blue transition-colors">
                      Explore more <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
