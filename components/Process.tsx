
import React, { useState } from 'react';
import { PROCESS_STEPS } from '../constants';

const processImages: Record<string, string> = {
  '01': '/Public/our-methodology/strategy-image.webp',
  '02': '/Public/our-methodology/design-image.webp',
  '03': '/Public/our-methodology/develop-image.webp',
  '04': '/Public/our-methodology/deploy-image.webp'
};

const Process: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="process" className="section-spacing bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(37, 99, 235, 0.5) 2px, rgba(37, 99, 235, 0.5) 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(37, 99, 235, 0.5) 2px, rgba(37, 99, 235, 0.5) 3px)', backgroundSize: '40px 40px' }}></div>
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tech-blue/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[100px]"></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="text-tech-blue font-black text-xs uppercase tracking-[0.4em] mb-8 block">Our Methodology</span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-app-slate tracking-tighter">Engineered for Velocity.</h2>
          <p className="text-slate-600 text-xl mt-8 font-medium max-w-2xl mx-auto">
            Our lifecycle combines precision engineering with rapid delivery cycles for maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((step) => {
            const isHovered = hoveredId === step.number;
            return (
              <div
                key={step.number}
                className="group rounded-3xl shadow-sm aspect-square scale-[0.85] relative"
                onMouseEnter={() => setHoveredId(step.number)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ perspective: '1000px' }}
              >
                <div className={`relative w-full h-full transition-transform duration-700 ${isHovered ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 p-6 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between" style={{ backfaceVisibility: 'hidden' }}>
                    <img src={processImages[step.number]} alt={step.title} className="absolute inset-0 w-full h-full object-cover rounded-3xl" />
                    <div className="relative z-10 mt-auto text-center">
                      <h4 className="text-2xl font-bold text-white drop-shadow-[0_8px_16px_rgba(0,0,0,1)] [text-shadow:_3px_3px_12px_rgb(0_0_0),_0_0_20px_rgb(0_0_0)]">{step.title}</h4>
                    </div>
                  </div>
                  <div className="absolute inset-0 p-6 rounded-3xl bg-white border border-slate-200 hover:border-tech-blue flex flex-col justify-between" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-2xl font-bold text-app-slate">{step.title}</h4>
                      <span className="text-4xl font-black text-slate-100">{step.number}</span>
                    </div>
                    <p className="text-slate-500 text-base leading-relaxed">
                      {step.description}
                    </p>
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

export default Process;
