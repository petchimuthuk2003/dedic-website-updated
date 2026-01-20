
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-tech-blue/5 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center mt-24">
        {/*
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-tech-blue/10 border border-tech-blue/20 text-tech-blue text-[11px] font-black mb-20 tracking-[0.4em] uppercase shadow-sm">
          <Zap size={16} fill="currentColor" /> Reimagining Global Systems
        </div> 
*/}


        <h1 className="text-4xl sm:text-5xl md:text-[4.55rem] lg:text-[5.525rem] font-extrabold leading-[0.9] mb-16 text-app-slate tracking-tighter max-w-7xl">
          Tech Built <br />
          <span className="text-gradient">with Dedication.</span>
        </h1>

        <p className="text-base md:text-lg text-slate-500 max-w-3xl mb-24 leading-relaxed font-medium">
          We build custom software designed to help your business grow by turning your unique challenges into powerful, easy-to-use digital solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-8 items-center mb-32 w-full sm:w-auto">
          <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-4 shadow-2xl shadow-tech-blue/20 group text-sm uppercase tracking-widest">
            Contact Us <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-app-slate hover:bg-slate-50 font-black rounded-2xl transition-all flex items-center justify-center gap-4 text-sm uppercase tracking-widest">
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
