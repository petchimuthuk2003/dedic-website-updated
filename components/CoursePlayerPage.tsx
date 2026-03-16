import React, { useState, useEffect } from 'react';
import { ArrowLeft, Menu, ChevronLeft, ChevronRight, MessageSquare, Award, ChevronsRight, CheckCircle2, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

// ─── Curriculum with Google Drive file IDs ───────────────────────────────────
// Replace the placeholder IDs with your real Drive file IDs
const curriculum = [
  {
    id: 1,
    title: 'Module 1: Introduction UI UX Design',
    lessons: [
      { title: 'Why UI UX Design? - The Over All View',  driveId: 'DRIVE_FILE_ID_1' },
      { title: 'UI vs. UX vs. Product Design',           driveId: 'DRIVE_FILE_ID_2' },
      { title: 'UI UX Designer Role in a Company',       driveId: 'DRIVE_FILE_ID_3' },
      { title: 'Future Scope Of UI UX Designing',        driveId: 'DRIVE_FILE_ID_4' },
      { title: 'UX in Day to Day Things',                driveId: 'DRIVE_FILE_ID_5' },
    ],
  },
  {
    id: 2,
    title: 'Module 2: Figma - From The Scratch to Advance',
    lessons: [
      { title: 'Figma - Work Flow',                      driveId: 'DRIVE_FILE_ID_6' },
      { title: 'Layers Panel',                           driveId: 'DRIVE_FILE_ID_7' },
      { title: 'Shapes Tools & Importing Images',        driveId: 'DRIVE_FILE_ID_8' },
      { title: 'Colors Fill Property',                   driveId: 'DRIVE_FILE_ID_9' },
      { title: 'Stroke & Effects Property',              driveId: 'DRIVE_FILE_ID_10' },
      { title: 'Text Tool - Constraints',                driveId: 'DRIVE_FILE_ID_11' },
      { title: 'Pen Tool',                               driveId: 'DRIVE_FILE_ID_12' },
      { title: 'Layout Guide',                           driveId: 'DRIVE_FILE_ID_13' },
      { title: 'Important Plugins',                      driveId: 'DRIVE_FILE_ID_14' },
      { title: 'Auto Layout & Grouping Elements',        driveId: '1yUchsqh3BDWu07-_8T80JG-xnZdqaTgJ' },
      { title: 'Variables & Components',                 driveId: 'DRIVE_FILE_ID_16' },
      { title: 'Basic Elements & Components',            driveId: 'DRIVE_FILE_ID_17' },
      { title: 'Creating a Mobile App UI',               driveId: 'DRIVE_FILE_ID_18' },
      { title: 'Prototyping Screens with Animation',     driveId: 'DRIVE_FILE_ID_19' },
      { title: 'Capstone Project',                       driveId: 'DRIVE_FILE_ID_20' },
    ],
  },
  {
    id: 3,
    title: 'Module 3: Working with Miro & Balsamiq',
    lessons: [
      { title: 'White Boarding with Miro',   driveId: 'DRIVE_FILE_ID_21' },
      { title: 'Wireframing with Balsamiq',  driveId: 'DRIVE_FILE_ID_22' },
    ],
  },
  {
    id: 4,
    title: 'Module 4: UX - Psychology to Research',
    lessons: [
      { title: 'UX Design Thinking Process - User Centered Design', driveId: 'DRIVE_FILE_ID_23' },
      { title: 'Research Methods & Biases',                         driveId: 'DRIVE_FILE_ID_24' },
      { title: 'Empathize Methods',                                 driveId: 'DRIVE_FILE_ID_25' },
      { title: 'Define Problem Statement',                          driveId: 'DRIVE_FILE_ID_26' },
      { title: 'Ideate with Brainstorming',                         driveId: 'DRIVE_FILE_ID_27' },
      { title: 'Competitor Audit',                                  driveId: 'DRIVE_FILE_ID_28' },
      { title: 'Information Architecture',                          driveId: 'DRIVE_FILE_ID_29' },
      { title: 'User Flow - Ideation',                              driveId: 'DRIVE_FILE_ID_30' },
      { title: 'Low Fidelity vs. High Fidelity Prototype',          driveId: 'DRIVE_FILE_ID_31' },
      { title: 'Usability Testing',                                 driveId: 'DRIVE_FILE_ID_32' },
      { title: 'Case Study',                                        driveId: 'DRIVE_FILE_ID_33' },
      { title: 'Universal, Inclusive, Equity-Focused Design',       driveId: 'DRIVE_FILE_ID_34' },
      { title: 'Assistive Technology (AT) - WCAG',                  driveId: 'DRIVE_FILE_ID_35' },
      { title: 'UX Laws & Gestalt Principles',                      driveId: 'DRIVE_FILE_ID_36' },
      { title: 'UX Case Study - Capstone Project',                  driveId: 'DRIVE_FILE_ID_37' },
    ],
  },
  {
    id: 5,
    title: 'Module 5: UI - Principles to Prototyping',
    lessons: [
      { title: 'Color Theory',                              driveId: 'DRIVE_FILE_ID_38' },
      { title: 'Typography',                                driveId: 'DRIVE_FILE_ID_39' },
      { title: 'Iconography',                               driveId: 'DRIVE_FILE_ID_40' },
      { title: 'Visual Hierarchy',                          driveId: 'DRIVE_FILE_ID_41' },
      { title: 'Layouts and Grid System',                   driveId: 'DRIVE_FILE_ID_42' },
      { title: 'Copywriting with ChatGPT',                  driveId: 'DRIVE_FILE_ID_43' },
      { title: 'Accessibility in UI',                       driveId: 'DRIVE_FILE_ID_44' },
      { title: 'Design System & Design Token',              driveId: 'DRIVE_FILE_ID_45' },
      { title: 'Responsive Web Design',                     driveId: 'DRIVE_FILE_ID_46' },
      { title: 'Minimising interaction cost & cognitive load', driveId: 'DRIVE_FILE_ID_47' },
    ],
  },
  {
    id: 6,
    title: 'Module 6: AI - Prompts to Research & Design',
    lessons: [
      { title: 'Perplexity - Data Analysis',                    driveId: 'DRIVE_FILE_ID_48' },
      { title: 'ChatGPT - Information Architecture',            driveId: 'DRIVE_FILE_ID_49' },
      { title: 'Gemini - for Image Creation',                   driveId: 'DRIVE_FILE_ID_50' },
      { title: 'Figma AI',                                      driveId: 'DRIVE_FILE_ID_51' },
      { title: 'Stitch AI, UIzard, VisilyAI & UXpilot Tools',  driveId: 'DRIVE_FILE_ID_52' },
    ],
  },
  {
    id: 7,
    title: 'Module 7: 2026 - Latest UI Trends',
    lessons: [
      { title: 'Simple & Clean UI is Ever Green', driveId: 'DRIVE_FILE_ID_53' },
      { title: 'Glass-morphism',                  driveId: 'DRIVE_FILE_ID_54' },
      { title: 'Micro-interactions',              driveId: 'DRIVE_FILE_ID_55' },
      { title: '3D designs trend',                driveId: 'DRIVE_FILE_ID_56' },
    ],
  },
  {
    id: 8,
    title: 'Module 8: Lets Crack Interview',
    lessons: [
      { title: 'Resume Building',                      driveId: 'DRIVE_FILE_ID_57' },
      { title: 'UI UX Designer Interview Questions',   driveId: 'DRIVE_FILE_ID_58' },
      { title: 'Free Websites To Learn UX UI Design',  driveId: 'DRIVE_FILE_ID_59' },
      { title: 'Cheat-sheet Document',                 driveId: 'DRIVE_FILE_ID_60' },
    ],
  },
];

const ALL_LESSONS = curriculum.flatMap(m => m.lessons);

const CoursePlayerPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen]   = useState(true);
    const [activeModule, setActiveModule]     = useState<number | null>(1);
    const [activeLessonIdx, setActiveLessonIdx] = useState(0);
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [enrollmentId, setEnrollmentId]     = useState<string | null>(null);
    const [isEnrolled, setIsEnrolled]         = useState<boolean | null>(null); // null = loading
    const { user, loading: authLoading }      = useAuth();
    const navigate = useNavigate();

    const activeLesson = ALL_LESSONS[activeLessonIdx];
    const progress     = Math.round((completedLessons.length / ALL_LESSONS.length) * 100);
    const isCourseComplete = completedLessons.length === ALL_LESSONS.length;

    // ── Responsive sidebar ──────────────────────────────────────────────────
    useEffect(() => {
        const handleResize = () => setIsSidebarOpen(window.innerWidth >= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ── Auth + enrollment gate ──────────────────────────────────────────────
    useEffect(() => {
        if (authLoading) return;
        if (!user) { navigate('/login'); return; }

        supabase
            .from('enrollments')
            .select('id, completed_lessons')
            .eq('user_id', user.id)
            .eq('course_id', 'ui-ux-design')
            .maybeSingle()
            .then(({ data, error }) => {
                if (error) { console.error('Enrollment fetch error:', error); }
                if (!data) { setIsEnrolled(false); return; }
                setIsEnrolled(true);
                setEnrollmentId(data.id);
                setCompletedLessons(data.completed_lessons || []);
                console.log('Enrollment loaded:', data.id, 'completed:', data.completed_lessons?.length ?? 0);
            });
    }, [user, authLoading]);

    // ── Redirect non-enrolled users ─────────────────────────────────────────
    useEffect(() => {
        if (isEnrolled === false) navigate('/checkout/ui-ux-design');
    }, [isEnrolled]);

    const [saving, setSaving] = useState(false);

    const toggleComplete = async (lessonTitle: string) => {
        if (!enrollmentId) return;
        const updated = completedLessons.includes(lessonTitle)
            ? completedLessons.filter(l => l !== lessonTitle)
            : [...completedLessons, lessonTitle];
        setCompletedLessons(updated);
        setSaving(true);
        const isNowComplete = updated.length === ALL_LESSONS.length;
        const certId = isNowComplete ? `DEDIC-${enrollmentId.slice(0, 8).toUpperCase()}` : null;
        const { error } = await supabase.from('enrollments').update({
            completed_lessons: updated,
            ...(isNowComplete ? { completed_at: new Date().toISOString(), certificate_id: certId } : {}),
        }).eq('id', enrollmentId);
        setSaving(false);
        if (error) {
            console.error('Failed to save progress:', error);
            setCompletedLessons(completedLessons); // revert on failure
            return;
        }
        console.log('Progress saved:', updated.length, 'lessons completed');
        if (isNowComplete) navigate('/dashboard?tab=certificates');
    };

    const selectLesson = (idx: number) => {
        setActiveLessonIdx(idx);
        let count = 0;
        for (const mod of curriculum) {
            if (idx < count + mod.lessons.length) { setActiveModule(mod.id); break; }
            count += mod.lessons.length;
        }
        if (window.innerWidth < 768) setIsSidebarOpen(false);
    };

    // ── Loading state ───────────────────────────────────────────────────────
    if (authLoading || isEnrolled === null) return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="w-8 h-8 border-4 border-tech-blue/30 border-t-tech-blue rounded-full animate-spin"></span>
        </div>
    );

    // ── Lesson offset helper ────────────────────────────────────────────────
    const lessonGlobalIdx = (modId: number, lessonIdx: number) => {
        let offset = 0;
        for (const m of curriculum) {
            if (m.id === modId) return offset + lessonIdx;
            offset += m.lessons.length;
        }
        return 0;
    };

    return (
        <div className="flex flex-col h-screen bg-white font-sans overflow-hidden">
            {/* ── Top Navigation ── */}
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
                    <button
                        disabled={activeLessonIdx === 0}
                        onClick={() => selectLesson(activeLessonIdx - 1)}
                        className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 text-tech-blue font-bold text-xs md:text-sm hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-tech-blue/20 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={16} /> <span className="hidden sm:inline">Previous</span>
                    </button>
                    <button
                        disabled={activeLessonIdx === ALL_LESSONS.length - 1}
                        onClick={() => selectLesson(activeLessonIdx + 1)}
                        className="flex items-center gap-1 md:gap-2 px-4 md:px-6 py-1.5 md:py-2 bg-tech-blue text-white font-bold text-xs md:text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-tech-blue/20 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        <span className="hidden sm:inline">Next</span> <ChevronRight size={16} />
                    </button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden relative">
                {/* ── Sidebar ── */}
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

                                    {activeModule === module.id && (
                                        <div className="bg-slate-50/50 py-2">
                                            {module.lessons.map((lesson, idx) => {
                                                const globalIdx = lessonGlobalIdx(module.id, idx);
                                                const isActive  = globalIdx === activeLessonIdx;
                                                const isDone    = completedLessons.includes(lesson.title);
                                                return (
                                                    <div
                                                        key={idx}
                                                        className={`pl-12 pr-5 py-2.5 cursor-pointer flex items-center gap-3 transition-colors ${isActive ? 'bg-tech-blue/10' : 'hover:bg-slate-100'}`}
                                                        onClick={() => selectLesson(globalIdx)}
                                                    >
                                                        <CheckCircle2
                                                            size={14}
                                                            className={isDone ? 'text-green-500' : isActive ? 'text-tech-blue' : 'text-slate-300'}
                                                            onClick={(e) => { e.stopPropagation(); toggleComplete(lesson.title); }}
                                                        />
                                                        <span className={`text-xs font-medium ${isDone ? 'text-green-600 line-through' : isActive ? 'text-tech-blue font-bold' : 'text-slate-600'}`}>
                                                            {lesson.title}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certificate */}
                    <div
                        onClick={() => isCourseComplete && navigate('/dashboard?tab=certificates')}
                        className={`p-4 md:p-6 border-t border-slate-200 min-w-[280px] flex items-center gap-3 font-black transition-colors ${
                            isCourseComplete ? 'bg-green-50 hover:bg-green-100 cursor-pointer text-green-700' : 'bg-white text-slate-400 cursor-not-allowed'
                        }`}
                    >
                        <Award size={20} className={isCourseComplete ? 'text-green-600' : 'text-slate-300'} />
                        <span className="text-sm">{isCourseComplete ? '🎉 Get Certificate' : `Certificate (${progress}%)`}</span>
                    </div>
                </aside>

                {/* Mobile Backdrop */}
                {isSidebarOpen && (
                    <div className="absolute inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
                )}

                {/* ── Video Area ── */}
                <main className="flex-1 flex flex-col bg-slate-50 overflow-y-auto w-full relative z-20 p-4 md:p-8">
                    <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col pt-4 md:pt-0">
                        <h2 className="text-lg font-black text-app-slate mb-4 sm:hidden">
                            UI/UX Design Master Course with AI
                        </h2>

                        {/* Video player with Drive blocker overlay */}
                        <div className="relative w-full aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl mb-8">
                            <iframe
                                key={activeLesson.driveId}
                                src={`https://drive.google.com/file/d/${activeLesson.driveId}/preview`}
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allow="autoplay; fullscreen"
                                title={activeLesson.title}
                            ></iframe>

                            {/* Blocks the Google Drive "open in Drive / download" icon in the top-right corner */}
                            <div className="absolute top-0 right-0 w-16 h-14 z-10 bg-white" />
                        </div>

                        {/* Lesson info */}
                        <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-slate-200 flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <p className="text-xs font-bold text-tech-blue uppercase tracking-widest mb-1">
                                    Lesson {activeLessonIdx + 1} of {ALL_LESSONS.length}
                                </p>
                                <h3 className="text-xl md:text-2xl font-black text-app-slate mb-3">{activeLesson.title}</h3>
                            </div>
                            <button
                                onClick={() => toggleComplete(activeLesson.title)}
                                disabled={saving}
                                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-colors disabled:opacity-60 ${
                                    completedLessons.includes(activeLesson.title)
                                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                        : 'bg-slate-100 text-slate-600 hover:bg-tech-blue/10 hover:text-tech-blue'
                                }`}
                            >
                                {saving
                                    ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    : <CheckCircle2 size={16} />}
                                {saving ? 'Saving...' : completedLessons.includes(activeLesson.title) ? 'Completed' : 'Mark Complete'}
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

const ExternalLinkIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

export default CoursePlayerPage;
