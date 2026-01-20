import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Zap, Brain, Heart } from 'lucide-react';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import Process from './Process';
import { TECH_STACK } from '../constants';

const Home: React.FC = () => {
    return (
        <main className="flex-grow z-10">
            <Hero />

            {/* Tech Ecosystem Section */}
            <section id="tech" className="py-24 border-y border-slate-200 bg-white/40 backdrop-blur-sm overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col items-center gap-16">
                        <span className="text-[11px] font-black text-tech-blue tracking-[0.4em] uppercase">Enterprise Technology Stack</span>
                        <div className="relative w-full overflow-hidden">
                            <div className="flex items-center gap-8 animate-[scroll_8s_linear_infinite] whitespace-nowrap">
                                {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                                    <div key={i} className="flex items-center gap-4 group cursor-default transition-all duration-300 hover:scale-110 flex-shrink-0 bg-white border border-slate-200 rounded-xl px-6 py-2 shadow-sm">
                                        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                                        <span className="text-xs font-bold text-slate-900 tracking-[0.1em] uppercase">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Services />

            {/* Why Partner With Us - Unique Centerpiece Layout */}
            <section className="relative py-32 overflow-hidden bg-slate-50/50">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tech-blue/5 rounded-full blur-[120px] -z-10"></div>

                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Section Header */}
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block mb-6">The Engineering Advantage</span>
                        <h2 className="text-5xl md:text-7xl font-extrabold text-black tracking-tighter leading-[1.05] mb-8">
                            Why Dedic?
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                            We blend next-gen AI with proven engineering to build fast, reliable software that accelerates your growth.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

                        {/* Left Column - Cards */}
                        <div className="space-y-8 flex flex-col justify-center">
                            <div className="group p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-tech-blue/10 hover:border-tech-blue/20 transition-all duration-500 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-tech-blue/10 rounded-2xl flex items-center justify-center text-tech-blue mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Heart size={28} fill="currentColor" className="opacity-20 absolute" />
                                    <Heart size={28} className="relative z-10" />
                                </div>
                                <h3 className="text-xl font-bold text-app-slate mb-3">Driven by Dedication</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Our commitment goes beyond code. We treat your product with the same care as our own.
                                </p>
                            </div>

                            <div className="group p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-tech-blue/10 hover:border-tech-blue/20 transition-all duration-500 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-tech-blue/10 rounded-2xl flex items-center justify-center text-tech-blue mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Brain size={28} className="relative z-10" />
                                </div>
                                <h3 className="text-xl font-bold text-app-slate mb-3">AI-Enhanced Workflows</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Leveraging modern AI to speed up development and ensure cutting-edge solutions.
                                </p>
                            </div>
                        </div>

                        {/* Center Column - Image */}
                        <div className="relative order-first lg:order-none mb-12 lg:mb-0">
                            <div className="relative z-10 animate-float">
                                <img
                                    src="/Public/man-image.png"
                                    alt="Why Dedic"
                                    className="w-full max-w-sm mx-auto object-contain drop-shadow-2xl"
                                />
                            </div>
                            {/* Decorative Rings behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-200/60 rounded-full -z-10"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-slate-100 rounded-full -z-20"></div>
                        </div>

                        {/* Right Column - Cards */}
                        <div className="space-y-8 flex flex-col justify-center">
                            <div className="group p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-tech-blue/10 hover:border-tech-blue/20 transition-all duration-500 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-tech-blue/10 rounded-2xl flex items-center justify-center text-tech-blue mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Shield size={28} className="relative z-10" />
                                </div>
                                <h3 className="text-xl font-bold text-app-slate mb-3">Enterprise Security</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Built with top-tier security standards to keep your data and users safe at all times.
                                </p>
                            </div>

                            <div className="group p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-tech-blue/10 hover:border-tech-blue/20 transition-all duration-500 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-tech-blue/10 rounded-2xl flex items-center justify-center text-tech-blue mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Zap size={28} className="relative z-10" />
                                </div>
                                <h3 className="text-xl font-bold text-app-slate mb-3">Fast without Compromise</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Optimized performance that doesn't sacrifice quality or reliability.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Process />

            <Testimonials />

            {/* Closing CTA */}
            <section className="section-spacing px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="relative rounded-3xl overflow-hidden glass-panel py-16 px-8 md:px-16 text-center border-slate-200 group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_70%)]"></div>

                        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter leading-none">
                                Ready to <span className="text-tech-blue">Evolve?</span>
                            </h2>
                            <p className="text-base text-slate-500 font-medium leading-relaxed">
                                Transform your technological foundation with Dedic Infotech. Our expert team is ready to scale your vision.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-2">
                                <Link to="/contact" className="px-10 py-5 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-tech-blue/30 text-sm uppercase tracking-widest group flex items-center justify-center">
                                    Connect with Us <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
