import React, { useState, useEffect } from 'react';
import { ArrowLeft, Menu, ChevronLeft, ChevronRight, MessageSquare, Award, ChevronsRight, CheckCircle2 } from 'lucide-react';
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
      { title: 'Why UI UX Design?',                    driveId: '1yUchsqh3BDWu07-_8T80JG-xnZdqaTgJ' },
      { title: 'UI vs. UX vs. Product Design',         driveId: '1e_buwc-wS9P6a6PdxLxwFyZcS4sDgKRd' },
      { title: 'UI UX Designer Roles in a Company',    driveId: '1wM_Yswqt4nrizwq2cJtw9LNHtjAdpKF9' },
      { title: 'Future Scope Of UI UX Designing',      driveId: '13kXIrbYlilxDhUBEbOmYPiQtDBSjgA9Q' },
      { title: 'UX in Day to Day Things',              driveId: '1mqIxgh6h_HJsZFF00Wo3ZBbgr8me9KJm' },
    ],
  },
  {
    id: 2,
    title: 'Module 2: Figma - From The Scratch to Advance',
    lessons: [
      { title: 'Figma - Work Flow',                    driveId: '1SDCLA6BmeR2UnQBLUW3JQ9385NQt4LWk' },
      { title: 'Layers & Frames',                      driveId: '16dxgb_NlsA31R5QDQOCO2b6DlLCVgT_a' },
      { title: 'Shapes Tools',                         driveId: '1hQmgMu2GWajP6tqtpagFWn16upyd1bXR' },
      { title: 'Colors Fill Property',                 driveId: '1K3TF82Iwdmv87X1sbdIlsz3uLnEq2dfQ' },
      { title: 'Text Tool & Constraints',              driveId: '10E6OMK53h_XXBpJ5tYPw0goUPBTifH8E' },
      { title: 'Stroke & Effects Property',            driveId: '105st_oF0xY4N5U8W8CL_DCK2ZB5NJrHH' },
      { title: 'Boolean & Masking',                    driveId: '1l-2eFQsGiZ9k0g6bm_beY6oRUrUTR7iv' },
      { title: 'Layout Guide',                         driveId: '17KibH8SRU1fa9WKRPxafXYx4ATfdbIrW' },
      { title: 'Important Plugins',                    driveId: '1kLdjc0kU2vi2M5-Vlqp5a0v6BFpdxVfN' },
      { title: 'Auto Layout & Grouping Elements',      driveId: '1Fz3ZpDs9OnlIJefW4b26QutAlWXfJVir' },
      { title: 'Variables & Components',               driveId: '1chnoUrr-28c9sfCQIdady4-StXm3lS8M' },
      { title: 'Atomic UI Framework',                  driveId: '1Iju_qDMrHbvK4CT9Grg2wC8v3LYJ_8M0' },
    ],
  },
  {
    id: 3,
    title: 'Module 3: Working with Miro & Balsamiq',
    lessons: [
      { title: 'White Boarding with Miro',             driveId: '1lUBshPznLx5IHxyMy_H6ajkX4NK8ylwW' },
      { title: 'Wireframing with Balsamiq',            driveId: '1yFjPYBRmyISMTHsstJtZXXIJAXPG_KGv' },
    ],
  },
  {
    id: 4,
    title: 'Module 4: UX - Psychology to Research',
    lessons: [
      { title: 'UX Design Process',                              driveId: '1dkkG-N0e6AdOqjTHEGUKsbiXB-P-D1Dy' },
      { title: 'UX Research Methods',                           driveId: '1HEaLyFRAoBPGjfUc_SPkB6CfW1PhQxsT' },
      { title: 'Biases in UX Research',                         driveId: '1kpHbXqHSvZ5ApkmFjxFEEV7a5HUO0XGG' },
      { title: 'Empathize - Survey & Interview',                driveId: '1GK6f04B6A4nO1LvT9-7UK1GHc2WTcqXH' },
      { title: 'Empathize - Empathy Mapping & User Persona',    driveId: '1MSAVPdJdQs3dDCnq5dygWpVNK_JaZTV5' },
      { title: 'Empathize - Competitor Audit',                  driveId: '1tJMGd2Ac3fhzG_EhLLW7xzUyIxbyXnMk' },
      { title: 'Define - Problem & Goal Statement',             driveId: '19pM3sxJ5Nk7Xt7UpFK6Jeo1eCTmMdDMv' },
      { title: 'Define - Affinity Diagram',                     driveId: '17JHxScSTgRX2gO79_r_u7f9ArbMBkq0_' },
      { title: 'Ideate - Information Architecture',             driveId: '1LUdrznlJxUAVlTJhUGusrTTspyX4pGjq' },
      { title: 'Ideate - User Flow',                            driveId: '1qe11OWkivR-V_PCHBzaoQHBNNJBrmzhf' },
      { title: 'Prototype - Low vs. High Fidelity',             driveId: '16uMw6b72ME7Mhrl65VAN26-LYxRPRmOx' },
      { title: 'Test - Usability Testing',                      driveId: '1Oc3lGKvekJlRtGv7bBVmEYoLSV5_PXmN' },
      { title: 'Universal, Inclusive & Equity-Focused Design',  driveId: '1avsenUuL2r5LL43lv1i-JYlb1EHH_m_N' },
      { title: 'Assistive Technology (AT) - WCAG',              driveId: '1PjkhWRxzVP-PCGm8vqOeYVpJMqfL7879' },
      { title: 'Popular UX Laws',                               driveId: '1EaT73r_3g4oymhx7_Uwz7o-gTnFGfl_z' },
      { title: 'QuickDoc App - Case Study',                     driveId: '1N5FBbtUAtfuL3KwGubKb6t-dqJfZlJcT' },
    ],
  },
  {
    id: 5,
    title: 'Module 5: UI - Colors to Prototyping',
    lessons: [
      { title: 'Color Theory',                         driveId: '1C3gB40O5mGDWHJimaz3FeXGSVopLi5U2' },
      { title: 'Typography',                           driveId: '1Eaum5I4vUeMeyZykvGUNddEfhELQY4ml' },
      { title: 'Iconography',                          driveId: '1Cq5s5KdT6kaEvI30KqiWS-16p-BVdU_B' },
      { title: 'Visual Hierarchy',                     driveId: '1eDKS3WCdVz4bWo77TSazlCdb9OWiNUr6' },
      { title: 'Layouts',                              driveId: '1mi5EXMMXTcb_7DhARzTFqHWNZBoDz0C1' },
      { title: 'Copy Writing',                         driveId: '1AtbiStw3ttacECQBTFOWLb0vDG56AhBD' },
      { title: 'Accessibility in UI',                  driveId: '1TOMuXRM1UINpH8M5k5vuw390XUeicYu3' },
      { title: 'Design Systems',                       driveId: '1RN5nBWxTFhUJSxMdKYvsGSmyUKA-zieq' },
      { title: 'Responsive Web Design',                driveId: '1p5TTVRaqVLbagbhhMbUpwH8tiHsngstg' },
      { title: 'Interaction Cost',                     driveId: '1KBMxQkKW9mVxo9tElzA2Clg5HL9bXfnK' },
    ],
  },
  {
    id: 6,
    title: 'Module 6: QuickDoc App - Capstone Project',
    lessons: [
      { title: 'QuickDoc App UI - Part 1',             driveId: '1ykCaRiELoXavYYVA6KMukgvT5w07gRQ5' },
      { title: 'QuickDoc App UI - Part 2',             driveId: '1SUUZS-VmYyxNLzHo3UzWe6Qf9P-ejlWH' },
      { title: 'QuickDoc App UI - Part 3',             driveId: '15VEUCatcL8ZvTDpxvicS92Fh_HgIjFLQ' },
      { title: 'QuickDoc App UI - Part 4',             driveId: '1T0BqnSYog-hHxv1M8Yc_2CiOTJZ7svmB' },
      { title: 'QuickDoc App UI - Part 5',             driveId: '1V90Le0Sz04m07UtCSvRSDhq7zWSLNEx4' },
    ],
  },
  {
    id: 7,
    title: 'Module 7: Vibe Designing with AI',
    lessons: [
      { title: 'Ice Cream Shop Website Design',        driveId: '111BVIbfcuxAHogAG-FPCI1FDVcTZeyYD' },
      { title: 'Music Player App UI Design',           driveId: '1tATmqYnmuFMeJzwq02r11rYUPn6IBX0p' },
    ],
  },
  {
    id: 8,
    title: 'Module 8: Let\'s Crack Interview',
    lessons: [
      { title: 'Powerful Resume Building',                    driveId: '1UK4qGJQ1WjPoQ7Cl8U75cnF47-MAcBLh' },
      { title: 'UI UX Designers Interview Questions (PDF)',   driveId: '1HijJWlM8diQMBcNxYr6SBmyYPb7-Jko6' },
      { title: 'Free Websites to Learn UI UX Design (PDF)',   driveId: '1rMmcrAXe8vOwtEmsuIDrV2HumIOa45b8' },
    ],
  },
];

const ALL_LESSONS = curriculum.flatMap(m => m.lessons);

const CoursePlayerPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen]       = useState(true);
    const [activeModule, setActiveModule]         = useState<number | null>(1);
    const [activeLessonIdx, setActiveLessonIdx]   = useState(0);
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [enrollmentId, setEnrollmentId]         = useState<string | null>(null);
    const [isEnrolled, setIsEnrolled]             = useState<boolean | null>(null);
    const [autoNextCountdown, setAutoNextCountdown] = useState<number | null>(null);
    const countdownRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
    const { user, loading: authLoading }          = useAuth();
    const navigate = useNavigate();

    const activeLesson    = ALL_LESSONS[activeLessonIdx];
    const progress        = Math.round((completedLessons.length / ALL_LESSONS.length) * 100);
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

    const saveProgress = async (updated: string[], enrollId: string) => {
        const isNowComplete = updated.length === ALL_LESSONS.length;
        const certId = isNowComplete ? `DEDIC-${enrollId.slice(0, 8).toUpperCase()}` : null;
        const { error } = await supabase.from('enrollments').update({
            completed_lessons: updated,
            ...(isNowComplete ? { completed_at: new Date().toISOString(), certificate_id: certId } : {}),
        }).eq('id', enrollId);
        if (!error && isNowComplete) navigate('/dashboard?tab=certificates');
        return !error;
    };

    const toggleComplete = async (lessonTitle: string) => {
        if (!enrollmentId) return;
        const updated = completedLessons.includes(lessonTitle)
            ? completedLessons.filter(l => l !== lessonTitle)
            : [...completedLessons, lessonTitle];
        setCompletedLessons(updated);
        setSaving(true);
        const ok = await saveProgress(updated, enrollmentId);
        setSaving(false);
        if (!ok) setCompletedLessons(completedLessons);
    };

    const cancelAutoNext = () => {
        if (countdownRef.current) clearInterval(countdownRef.current);
        setAutoNextCountdown(null);
    };

    const selectLesson = (idx: number) => {
        cancelAutoNext();
        setActiveLessonIdx(idx);
        let count = 0;
        for (const mod of curriculum) {
            if (idx < count + mod.lessons.length) { setActiveModule(mod.id); break; }
            count += mod.lessons.length;
        }
        if (window.innerWidth < 768) setIsSidebarOpen(false);
    };

    const handleNext = async () => {
        const lesson = ALL_LESSONS[activeLessonIdx];
        const nextIdx = activeLessonIdx + 1;
        // Mark current lesson complete if not already
        if (enrollmentId && !completedLessons.includes(lesson.title)) {
            const updated = [...completedLessons, lesson.title];
            setCompletedLessons(updated);
            setSaving(true);
            await saveProgress(updated, enrollmentId);
            setSaving(false);
        }
        if (nextIdx >= ALL_LESSONS.length) return;
        // 5s countdown then auto-advance
        setAutoNextCountdown(5);
        countdownRef.current = setInterval(() => {
            setAutoNextCountdown(prev => {
                if (prev === null) return null;
                if (prev <= 1) {
                    clearInterval(countdownRef.current!);
                    selectLesson(nextIdx);
                    return null;
                }
                return prev - 1;
            });
        }, 1000);
    };

    useEffect(() => () => { if (countdownRef.current) clearInterval(countdownRef.current); }, []);

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
                        onClick={handleNext}
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

                {/* Auto-next countdown toast */}
                {autoNextCountdown !== null && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl">
                        <CheckCircle2 size={18} className="text-green-400" />
                        <span className="text-sm font-bold">Lesson complete! Next in <span className="text-tech-blue">{autoNextCountdown}s</span></span>
                        <button onClick={cancelAutoNext} className="text-xs font-bold text-slate-400 hover:text-white transition-colors ml-2">Cancel</button>
                    </div>
                )}

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
