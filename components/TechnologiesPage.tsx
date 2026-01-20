import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TECH_STACK } from '../constants';

const TechnologiesPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col selection:bg-tech-blue/20 selection:text-tech-blue">
            {/* Soft Ambient Lighting */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-tech-blue/5 rounded-full blur-[140px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-tech-blue/3 rounded-full blur-[120px] animate-pulse-slow"></div>
            </div>

            <main className="flex-grow z-10 pt-32">
                {/* Hero Section */}
                <section className="py-24 px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center space-y-8 max-w-4xl mx-auto">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                Tech Stack
                            </span>
                            <h1 className="text-6xl md:text-8xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                Our <span className="text-tech-blue">Technologies</span>
                            </h1>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
                                We leverage the latest and most robust technologies to build scalable, secure, and high-performance solutions for your business.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technologies Grid */}
                <section className="section-spacing border-t border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {TECH_STACK.map((tech, i) => (
                                <div
                                    key={i}
                                    className="glass-panel p-8 rounded-[2rem] hover:shadow-2xl hover:scale-105 transition-all duration-500 group border-slate-200 flex flex-col items-center justify-center gap-6"
                                >
                                    <div className="w-20 h-20 bg-tech-blue/5 rounded-2xl flex items-center justify-center group-hover:bg-tech-blue/10 transition-colors">
                                        <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                                    </div>
                                    <h3 className="text-xl font-bold text-app-slate text-center group-hover:text-tech-blue transition-colors">
                                        {tech.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why These Tech */}
                <section className="section-spacing px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                    Our Approach
                                </span>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-app-slate tracking-tighter leading-tight">
                                    Choosing the <br />
                                    <span className="text-tech-blue">Right Tools.</span>
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    We don't just use trendy tech. We carefully select technologies that offer the best balance of performance, scalability, and maintainability for your specific needs.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Performance First Architecture',
                                        'Future-Proof Scalability',
                                        'Enterprise-Grade Security',
                                        'Cross-Platform Compatibility'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-app-slate font-bold">
                                            <div className="w-6 h-6 rounded-full bg-tech-blue/10 flex items-center justify-center text-tech-blue text-xs">✓</div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-tech-blue/5 rounded-full blur-[100px]"></div>
                                <div className="glass-panel p-12 rounded-[3rem] relative z-10 border-slate-200/60">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-6 bg-slate-50 rounded-2xl text-center">
                                            <span className="block text-4xl font-extrabold text-tech-blue mb-2">10+</span>
                                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Frameworks</span>
                                        </div>
                                        <div className="p-6 bg-slate-50 rounded-2xl text-center">
                                            <span className="block text-4xl font-extrabold text-tech-blue mb-2">5+</span>
                                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Cloud Platforms</span>
                                        </div>
                                        <div className="p-6 bg-slate-50 rounded-2xl text-center">
                                            <span className="block text-4xl font-extrabold text-tech-blue mb-2">99%</span>
                                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Uptime</span>
                                        </div>
                                        <div className="p-6 bg-slate-50 rounded-2xl text-center">
                                            <span className="block text-4xl font-extrabold text-tech-blue mb-2">24/7</span>
                                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Monitoring</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing CTA */}
                <section className="section-spacing px-6 border-t border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto max-w-4xl">
                        <div className="relative rounded-3xl overflow-hidden glass-panel py-16 px-8 md:px-16 text-center border-slate-200 group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_70%)]"></div>

                            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter leading-none">
                                    Have a specific <span className="text-tech-blue">Tech Stack</span> in mind?
                                </h2>
                                <p className="text-base text-slate-500 font-medium leading-relaxed">
                                    We are flexible and can adapt to your preferred technologies. Let's discuss your requirements.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-2">
                                    <Link to="/contact" className="px-10 py-5 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-tech-blue/30 text-sm uppercase tracking-widest group flex items-center justify-center">
                                        Contact Us Today <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default TechnologiesPage;
