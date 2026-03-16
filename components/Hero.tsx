
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-tech-blue/5 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center mt-12 md:mt-24">
        {/*
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-tech-blue/10 border border-tech-blue/20 text-tech-blue text-[11px] font-black mb-20 tracking-[0.4em] uppercase shadow-sm">
          <Zap size={16} fill="currentColor" /> Reimagining Global Systems
        </div> 
*/}


        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.525rem] font-extrabold leading-[1] md:leading-[0.9] mb-8 md:mb-16 text-app-slate tracking-tighter max-w-7xl flex flex-col md:block items-center">
          <span>
            Tech Built <span className="md:hidden">with</span>
          </span>
          <br className="hidden md:block" />
          <span className="text-gradient mt-2 md:mt-0 text-6xl sm:text-7xl md:text-6xl lg:text-[5.525rem] md:leading-[0.9]">
            <span className="hidden md:inline">with </span>Dedication.
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-500 max-w-3xl mb-12 md:mb-24 leading-relaxed font-medium">
          We build custom software designed to help your business grow by turning your unique challenges into powerful solutions
        </p>

        <div className="flex flex-row gap-3 sm:gap-8 items-center justify-center mb-16 md:mb-32 w-full sm:w-auto px-2 sm:px-0">
          <Link to="/contact" className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 sm:py-4 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 sm:gap-4 shadow-xl sm:shadow-2xl shadow-tech-blue/20 group text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-widest whitespace-nowrap">
            Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform sm:w-[18px] sm:h-[18px]" />
          </Link>
          <Link to="/portfolio" className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 sm:py-4 bg-white border border-slate-200 text-app-slate hover:bg-slate-50 font-black rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-widest whitespace-nowrap">
            The Portfolio
          </Link>
        </div>


      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden md:block">
        <ChevronDown size={36} strokeWidth={1.5} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;
