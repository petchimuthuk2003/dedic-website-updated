import React, { useState, useEffect } from 'react';
import { ArrowLeft, Menu, ChevronLeft, ChevronRight, MessageSquare, Award, ChevronsRight, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

const curriculum = [
  { id: 1, title: 'Getting Started with UI/UX', lessons: ['Introduction to UI/UX', 'Understanding the User'] },
  { id: 2, title: 'Design Principles & Theory', lessons: ['Color Theory', 'Typography rules', 'Spacing & Layouts'] },
  { id: 3, title: 'Figma Mastery', lessons: ['Figma Interface Overview', 'Auto Layout Magic', 'Components & Variants'] },
  { id: 4, title: 'Wireframing', lessons: ['Low fidelity wireframing', 'High fidelity design'] },
  { id: 5, title: 'Bonus', lessons: ['AI tools for designers', 'Interview Prep'] },
];

const ALL_LESSONS = curriculum.flatMap(m => m.lessons);

const CoursePlayerPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeModule, setActiveModule] = useState<number | null>(3);
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [enrollmentId, setEnrollmentId] = useState<string | null>(null);
    const { user } = useAuth();
    const navigate = useNavigate();

    const progress = Math.round((completedLessons.length / ALL_LESSONS.length) * 100);
    const isCourseComplete = completedLessons.length === ALL_LESSONS.length;

    useEffect(() => {
        const handleResize = () => setIsSidebarOpen(window.innerWidth >= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!user) return;
        supabase.from('enrollments').select('id, completed_lessons').eq('user_id', user.id).eq('course_id', 'ui-ux-design').single().then(({ data }) => {
            if (data) {
                setEnrollmentId(data.id);
                setCompletedLessons(data.completed_lessons || []);
            }
        });
    }, [user]);

    const toggleLesson = async (lesson: string) => {
        const updated = completedLessons.includes(lesson)
            ? completedLessons.filter(l => l !== lesson)
            : [...completedLessons, lesson];
        setCompletedLessons(updated);
        if (!enrollmentId) return;
        const isNowComplete = updated.length === ALL_LESSONS.length;
        const certId = isNowComplete ? `DEDIC-${enrollmentId.slice(0, 8).toUpperCase()}` : null;
        await supabase.from('enrollments').update({
            completed_lessons: updated,
            ...(isNowComplete ? { completed_at: new Date().toISOString(), certificate_id: certId } : {}),
        }).eq('id', enrollmentId);
        if (isNowComplete) navigate('/dashboard?tab=certificates');
    };

    return (
        <div className="flex flex-col h-screen bg-white font-sans overflow-hidden">
            {/* Top Navigation */}
            <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 z-30 shrink-0">
                <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                    <Link to="/courses/ui-ux-design" className="text-slate-500 hover:text-tech-blue transition-colors flex-shrink-0">
                        <ArrowLeft size={20} />
                    </Link>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-500 hover:text-tech-blue flex-shrink-0">
                        <Menu size={24} />
                    </button>
                    <h1 className="text-sm md:text-lg font-extrabold text-app-slate truncate hidden sm:block ml-2">
                        UI/UX Design Master Course with AI
                    </h1>
                </div>
                
                <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                    <button className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 text-tech-blue font-bold text-xs md:text-sm hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-tech-blue/20">
                        <ChevronLeft size={16} /> <span className="hidden sm:inline">Previous</span>
                    </button>
                    <button className="flex items-center gap-1 md:gap-2 px-4 md:px-6 py-1.5 md:py-2 bg-tech-blue text-white font-bold text-xs md:text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-tech-blue/20">
                        <span className="hidden sm:inline">Next</span> <ChevronRight size={16} />
                    </button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden relative">
                {/* Sidebar */}
                <aside 
                    className={`absolute md:relative z-40 h-full bg-white border-r border-slate-200 flex flex-col transition-all duration-300 ease-in-out ${
                        isSidebarOpen ? 'w-[280px] md:w-[320px] translate-x-0' : 'w-[280px] md:w-0 -translate-x-full'
                    }`}
                >
                    <div className="flex-1 overflow-y-auto overflow-x-hidden min-w-[280px] md:min-w-[320px] scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                        
                        {/* Progress */}
                        <div className="p-6 border-b border-slate-200">
                            <div className="w-full bg-slate-200 rounded-full h-1.5 mb-3 overflow-hidden">
                                <div className="bg-tech-blue h-1.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                            </div>
                            <p className="text-xs md:text-sm font-black text-app-slate text-center">{progress}% completed ({completedLessons.length}/{ALL_LESSONS.length} lessons)</p>
                        </div>

                        {/* Course Discussions */}
                        <div className="p-4 border-b border-slate-200 hover:bg-slate-50 cursor-pointer flex justify-between items-center text-app-slate font-bold transition-colors">
                            <div className="flex items-center gap-3">
                                <MessageSquare size={16} className="text-tech-blue" />
                                <span className="text-sm">Course Discussions</span>
                            </div>
                            <ExternalLinkIcon />
                        </div>

                        {/* Modules */}
                        <div className="pb-4">
                            {curriculum.map((module) => (
                                <div key={module.id} className="border-b border-slate-100 last:border-0">
                                    <button 
                                        className="w-full px-5 py-4 flex justify-between items-start hover:bg-slate-50 transition-colors text-left group"
                                        onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                                    >
                                        <div className="flex items-start gap-4">
                                            <ChevronsRight size={14} className={`mt-1 flex-shrink-0 transition-all ${activeModule === module.id ? 'rotate-90 text-tech-blue' : 'text-slate-400 group-hover:text-tech-blue'}`} />
                                            <span className={`text-[13px] font-black leading-tight ${activeModule === module.id ? 'text-tech-blue' : 'text-slate-700'}`}>
                                                {module.title}
                                            </span>
                                        </div>
                                    </button>
                                    
                                    {/* Lessons */}
                                    {activeModule === module.id && (
                                        <div className="bg-slate-50/50 py-2">
                                            {module.lessons.map((lesson, idx) => (
                                                <div key={idx} onClick={() => toggleLesson(lesson)} className="pl-12 pr-5 py-2.5 hover:bg-slate-100 cursor-pointer flex items-center gap-3 transition-colors">
                                                    <CheckCircle2 size={14} className={completedLessons.includes(lesson) ? 'text-green-500' : 'text-slate-300'} />
                                                    <span className={`text-xs font-medium ${completedLessons.includes(lesson) ? 'text-green-600 line-through' : 'text-slate-600'}`}>
                                                        {lesson}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certificate */}
                    <div onClick={() => isCourseComplete && navigate('/dashboard?tab=certificates')}
                        className={`p-4 md:p-6 border-t border-slate-200 min-w-[280px] flex items-center gap-3 font-black transition-colors ${
                            isCourseComplete ? 'bg-green-50 hover:bg-green-100 cursor-pointer text-green-700' : 'bg-white text-slate-400 cursor-not-allowed'
                        }`}>
                        <Award size={20} className={isCourseComplete ? 'text-green-600' : 'text-slate-300'} />
                        <span className="text-sm">{isCourseComplete ? '🎉 Get Certificate' : `Certificate (${progress}%)`}</span>
                    </div>
                </aside>

                {/* Mobile Backdrop */}
                {isSidebarOpen && (
                    <div 
                        className="absolute inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm" 
                        onClick={() => setIsSidebarOpen(false)} 
                    />
                )}

                {/* Video Area */}
                <main className="flex-1 flex flex-col bg-slate-50 overflow-y-auto w-full relative z-20 p-4 md:p-8">
                    <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col pt-4 md:pt-0">
                        {/* Mobile Title display (since it's hidden in header) */}
                        <h2 className="text-lg font-black text-app-slate mb-4 sm:hidden">
                            UI/UX Design Master Course with AI
                        </h2>

                        <div className="relative w-full aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl mb-8">
                            <iframe 
                                src="https://drive.google.com/file/d/1yUchsqh3BDWu07-_8T80JG-xnZdqaTgJ/preview" 
                                className="absolute top-0 left-0 w-full h-full border-0" 
                                allow="autoplay; fullscreen" 
                                title="UI/UX Design Master Course Video"
                            ></iframe>
                        </div>
                        
                        {/* Video Information below player */}
                        <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl md:text-2xl font-black text-app-slate mb-3">Auto Layout Magic</h3>
                            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-4xl">
                                In this lesson, we will dive deep into Figma's Auto Layout feature. You'll learn how to create responsive components that automatically adapt to their contents and resize gracefully across different device frames. Mastering Auto Layout is essential for modern UI design.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

// Tiny external link icon used in discussions
const ExternalLinkIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
)

export default CoursePlayerPage;
