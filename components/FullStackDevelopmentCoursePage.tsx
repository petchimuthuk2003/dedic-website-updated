import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Database, Code, Globe, Server, Puzzle, Briefcase } from 'lucide-react';

const FullStackDevelopmentCoursePage: React.FC = () => {
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
                                Professional Course
                            </span>
                            <h1 className="text-6xl md:text-8xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                FullStack <span className="text-tech-blue">Development</span>
                            </h1>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
                                Master the complete web development lifecycle from frontend to backend and become an invaluable asset to any engineering team.
                            </p>
                            <div className="flex justify-center pt-8">
                                <Link to="/contact" className="px-10 py-5 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-tech-blue/30 text-sm uppercase tracking-widest group flex items-center gap-3">
                                    Enroll Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Learn Full Stack */}
                <section className="section-spacing border-t border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1 space-y-8">
                                <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                    Course Overview
                                </span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter leading-tight">
                                    Complete <span className="text-tech-blue">Mastery</span>
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    Modern businesses need developers who understand the entire web ecosystem. By mastering both frontend and backend technologies, you gain complete development oversight, versatile skills, and the ability to solve complex architectural problems.
                                </p>
                            </div>
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Layers, text: 'End-to-End Dev' },
                                    { icon: Database, text: 'Database Architecture' },
                                    { icon: Code, text: 'Versatile Skill Set' },
                                    { icon: Puzzle, text: 'Complete Oversight' }
                                ].map((item, idx) => (
                                    <div key={idx} className="glass-panel p-6 rounded-2xl flex items-center gap-4 hover:shadow-lg transition-all border-slate-200">
                                        <div className="w-12 h-12 bg-tech-blue/10 rounded-xl flex items-center justify-center text-tech-blue">
                                            <item.icon size={24} />
                                        </div>
                                        <span className="text-app-slate font-bold">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Curriculum */}
                <section className="section-spacing px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center space-y-8 mb-20">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                Syllabus
                            </span>
                            <h2 className="text-5xl md:text-6xl font-extrabold text-app-slate tracking-tighter">
                                Course Curriculum
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "MERN Stack Development",
                                    desc: "Perfect for modern JavaScript-based web applications.",
                                    topics: ["MongoDB", "Express.js", "React.js", "Node.js"],
                                    icon: Code
                                },
                                {
                                    title: "MEAN Stack Development",
                                    desc: "Preferred for enterprise-level scaleable applications.",
                                    topics: ["MongoDB", "Express.js", "Angular", "Node.js"],
                                    icon: Layers
                                },
                                {
                                    title: "Full-Stack JavaScript",
                                    desc: "Mastery of JavaScript from browser to server APIs.",
                                    topics: ["RESTful APIs", "Database Mgmt", "Server Logic", "Deployment"],
                                    icon: Server
                                }
                            ].map((module, index) => (
                                <div key={index} className="glass-panel rounded-[2.5rem] p-10 border-slate-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 text-[8rem] font-black pointer-events-none text-tech-blue">
                                        {index + 1}
                                    </div>
                                    <div className="relative z-10 space-y-6 flex-grow">
                                        <div className="w-16 h-16 bg-tech-blue/10 rounded-2xl flex items-center justify-center text-tech-blue mb-4">
                                            <module.icon size={32} />
                                        </div>
                                        <h3 className="text-2xl font-black text-app-slate">{module.title}</h3>
                                        <p className="text-slate-600 font-medium leading-relaxed">{module.desc}</p>

                                        <div className="space-y-4 pt-4 border-t border-slate-100">
                                            <h4 className="text-xs font-black uppercase text-tech-blue tracking-widest mb-3">Tech Required</h4>
                                            <ul className="grid grid-cols-2 gap-2">
                                                {module.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-tech-blue"></div> {topic}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section-spacing border-t border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter">
                                Program Benefits
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "End-to-End Skills", desc: "Master UI to Database architecture." },
                                { title: "High Demand", desc: "Become a highly sought-after professional." },
                                { title: "Project Ownership", desc: "Build & deploy apps independently." },
                                { title: "Versatile Career", desc: "Work in frontend, backend, or fullstack roles." }
                            ].map((benefit, i) => (
                                <div key={i} className="glass-panel p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border-slate-200">
                                    <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 text-tech-blue">
                                        <Briefcase size={32} />
                                    </div>
                                    <h3 className="text-lg font-black text-app-slate mb-3">{benefit.title}</h3>
                                    <p className="text-slate-500 text-sm font-medium">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="section-spacing px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="glass-panel p-12 rounded-[3rem] border-slate-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-transparent"></div>
                            <div className="relative z-10 text-center space-y-8">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-app-slate tracking-tighter">
                                    Career Opportunities
                                </h2>
                                <p className="text-slate-600 text-lg font-medium">
                                    This course prepares you for versatile roles such as:
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {[
                                        "Full-Stack Developer", "MERN Stack Developer", "MEAN Stack Developer",
                                        "JavaScript Developer", "Web App Engineer", "Software Engineer", "DevOps Engineer"
                                    ].map((role, i) => (
                                        <span key={i} className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold shadow-sm hover:border-tech-blue hover:text-tech-blue transition-colors">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing CTA */}
                <section className="section-spacing px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="relative rounded-3xl overflow-hidden glass-panel py-16 px-8 md:px-16 text-center border-slate-200 group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_70%)]"></div>

                            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter leading-none">
                                    Ready to <span className="text-tech-blue">Master It All?</span>
                                </h2>
                                <p className="text-base text-slate-500 font-medium leading-relaxed">
                                    Join our next cohort and transform your career with full-stack development skills.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-2">
                                    <Link to="/contact" className="px-10 py-5 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-tech-blue/30 text-sm uppercase tracking-widest group flex items-center justify-center gap-3">
                                        Enroll Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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

export default FullStackDevelopmentCoursePage;
