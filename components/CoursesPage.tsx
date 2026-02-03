import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CoursesPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-blue/10 rounded-full blur-[80px] -z-10"></div>
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-app-slate to-tech-blue tracking-tighter mb-6">
                        MASTER COURSES
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Elevate your skills with our cutting-edge curriculum designed for the future of technology.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* UI/UX Design Master Course with AI */}
                    <div className="group relative bg-white rounded-3xl p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-tech-blue/10 border border-slate-100 hover:border-tech-blue/30 overflow-hidden">

                        {/* Image Area */}
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src="/Public/uiux-course-thumbnail.webp"
                                alt="UI/UX Design Master Course with AI"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="px-2 pb-4">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-2xl font-bold text-app-slate leading-tight group-hover:text-tech-blue transition-colors">
                                    <Link to="/courses/ui-ux-design" className="hover:underline focus:outline-none">
                                        UI/UX Design Master Course with AI
                                    </Link>
                                </h3>
                            </div>

                            <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">
                                Master the art of user interface and experience design supercharged by Artificial Intelligence tools. Learn to create stunning, intuitive, and data-driven designs 10x faster.
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-tech-blue/10 group-hover:text-tech-blue transition-colors">
                                        <Sparkles size={14} />
                                    </span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Beginner to Pro</span>
                                </div>

                                <Link
                                    to="/courses/ui-ux-design"
                                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-app-slate group-hover:bg-tech-blue group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-tech-blue/30 scale-100 active:scale-95"
                                >
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
