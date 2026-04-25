import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Users, Briefcase, Palette, MousePointer2, Smartphone, Play, ChevronDown, ChevronUp, BookOpen, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

const UiUxDesignCoursePage: React.FC = () => {
    const [openModule, setOpenModule] = React.useState<number | null>(null);
    const [previewPlaying, setPreviewPlaying] = React.useState(false);
    const [iframeLoaded, setIframeLoaded] = React.useState(false);
    const [isEnrolled, setIsEnrolled] = React.useState(false);
    const [showFormModal, setShowFormModal] = React.useState(true);
    const { user } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!user) return;
        supabase.from('enrollments').select('id').eq('user_id', user.id).eq('course_id', 'ui-ux-design').maybeSingle()
            .then(({ data }) => { if (data) setIsEnrolled(true); });
    }, [user]);

    const toggleModule = (index: number) => {
        setOpenModule(openModule === index ? null : index);
    };

    const curriculum = [
        {
            title: "Module 1: Introduction UI UX Design",
            lessons: [
                "Why UI UX Design?",
                "UI vs. UX vs. Product Design",
                "UI UX Designer Roles in a Company",
                "Future Scope Of UI UX Designing",
                "UX in Day to Day Things"
            ]
        },
        {
            title: "Module 2: Figma - From The Scratch to Advance",
            lessons: [
                "Figma - Work Flow",
                "Layers & Frames",
                "Shapes Tools",
                "Colors Fill Property",
                "Text Tool & Constraints",
                "Stroke & Effects Property",
                "Boolean & Masking",
                "Layout Guide",
                "Important Plugins",
                "Auto Layout & Grouping Elements",
                "Variables & Components",
                "Atomic UI Framework"
            ]
        },
        {
            title: "Module 3: Working with Miro & Balsamiq",
            lessons: [
                "White Boarding with Miro",
                "Wireframing with Balsamiq"
            ]
        },
        {
            title: "Module 4: UX - Psychology to Research",
            lessons: [
                "UX Design Process",
                "UX Research Methods",
                "Biases in UX Research",
                "Empathize - Survey & Interview",
                "Empathize - Empathy Mapping & User Persona",
                "Empathize - Competitor Audit",
                "Define - Problem & Goal Statement",
                "Define - Affinity Diagram",
                "Ideate - Information Architecture",
                "Ideate - User Flow",
                "Prototype - Low vs. High Fidelity",
                "Test - Usability Testing",
                "Universal, Inclusive & Equity-Focused Design",
                "Assistive Technology (AT) - WCAG",
                "Popular UX Laws",
                "QuickDoc App - Case Study"
            ]
        },
        {
            title: "Module 5: UI - Colors to Prototyping",
            lessons: [
                "Color Theory",
                "Typography",
                "Iconography",
                "Visual Hierarchy",
                "Layouts",
                "Copy Writing",
                "Accessibility in UI",
                "Design Systems",
                "Responsive Web Design",
                "Interaction Cost"
            ]
        },
        {
            title: "Module 6: QuickDoc App - Capstone Project",
            lessons: [
                "QuickDoc App UI - Part 1",
                "QuickDoc App UI - Part 2",
                "QuickDoc App UI - Part 3",
                "QuickDoc App UI - Part 4",
                "QuickDoc App UI - Part 5"
            ]
        },
        {
            title: "Module 7: Vibe Designing with AI",
            lessons: [
                "Ice Cream Shop Website Design",
                "Music Player App UI Design"
            ]
        },
        {
            title: "Module 8: Let’s Crack Interview",
            lessons: [
                "Powerful Resume Building",
                "UI UX Designers Interview Questions (PDF)",
                "Free Websites to Learn UI UX Design (PDF)"
            ]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col selection:bg-tech-blue/20 selection:text-tech-blue">
            {/* Google Form Modal */}
            {showFormModal && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-500">
                    <div className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[85vh] animate-in zoom-in-95 duration-500">
                        <button 
                            onClick={() => setShowFormModal(false)}
                            className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-md hover:bg-slate-100 rounded-full text-slate-800 transition-all z-50 shadow-lg border border-slate-200 group"
                            aria-label="Close"
                        >
                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                        <div className="flex-grow w-full overflow-hidden">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfQNPHsCgVzQqWg2CWN3LJNrICtbxS6IvvxI9iZA2giQBZBuQ/viewform?embedded=true"
                                className="w-full h-full border-0"
                                title="Registration Form"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* Soft Ambient Lighting */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-tech-blue/5 rounded-full blur-[140px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-tech-blue/3 rounded-full blur-[120px] animate-pulse-slow"></div>
            </div>

            <main className="flex-grow z-10 pt-32">


                {/* Demo Video & Pricing Section */}
                <section className="pb-12 md:pb-24 px-4 md:px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="flex flex-col items-center gap-8 md:gap-12">
                            {/* Video */}
                            <div className="w-full max-w-5xl relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl md:shadow-2xl shadow-tech-blue/20 bg-slate-900 aspect-video border border-slate-800">
                                {previewPlaying ? (
                                    <>
                                        {!iframeLoaded && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-20">
                                                <span className="w-10 h-10 border-4 border-tech-blue/30 border-t-tech-blue rounded-full animate-spin"></span>
                                            </div>
                                        )}
                                        <iframe
                                            src="https://drive.google.com/file/d/1yUchsqh3BDWu07-_8T80JG-xnZdqaTgJ/preview"
                                            className="absolute inset-0 w-full h-full border-0"
                                            allow="autoplay; fullscreen"
                                            title="Why UI UX Design? - Course Preview"
                                            onLoad={() => setIframeLoaded(true)}
                                        ></iframe>
                                        <div className="absolute top-0 right-0 w-16 h-14 z-10 bg-slate-900" />
                                    </>
                                ) : (
                                    <div
                                        className="absolute inset-0 cursor-pointer group"
                                        onClick={() => setPreviewPlaying(true)}
                                    >
                                        <img
                                            src="/Public/uiux-course-thumbnail.webp"
                                            alt="Course Preview"
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                                            <div className="w-20 h-20 rounded-full bg-tech-blue/90 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(37,99,235,0.6)]">
                                                <Play className="text-white fill-white ml-1" size={36} />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-white font-black text-lg">Watch Free Preview</p>
                                                <p className="text-slate-300 text-sm font-medium">Why UI UX Design?</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Pricing & CTA */}
                            <div className="w-full max-w-3xl">
                                <div className="glass-panel p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border-slate-200 shadow-xl text-center space-y-6 md:space-y-8">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-tech-blue/10 rounded-full">
                                            <span className="w-2 h-2 rounded-full bg-tech-blue animate-pulse"></span>
                                            <span className="text-tech-blue font-black text-xs uppercase tracking-widest">Limited Time Offer</span>
                                        </div>

                                        <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
                                            <span className="text-slate-400 text-2xl md:text-3xl font-bold line-through decoration-slate-400/50 decoration-2">₹3000</span>
                                            <div className="flex items-center gap-3 md:gap-4">
                                                <span className="text-5xl md:text-6xl font-black text-app-slate tracking-tighter">₹399</span>
                                                <span className="bg-red-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-lg font-bold text-xs md:text-sm transform -rotate-2 shadow-lg shadow-red-500/30">
                                                    87% OFF
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-slate-500 font-medium">
                                            Inclusive of all taxes. One-time payment for lifetime access.
                                        </p>
                                    </div>

                                    <div className="space-y-6 pt-6 border-t border-slate-100">
                                        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                                            Don't just learn design—master it. Join hundreds of students building their dream careers with our industry-standard curriculum.
                                        </p>

                                        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
                                            {[
                                                "Lifetime Access to Course Content",
                                                "Certificate of Completion",
                                                "3 Capstone Projects",
                                                "Mentorship Support"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                                                    <CheckCircle2 size={16} className="text-tech-blue" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
                                            {isEnrolled ? (
                                                <button onClick={() => navigate('/play/ui-ux-design')} className="w-full sm:w-auto inline-flex justify-center px-8 py-4 md:px-12 md:py-6 bg-green-600 hover:bg-green-700 text-white font-black rounded-xl md:rounded-2xl transition-all shadow-xl shadow-green-600/30 text-base md:text-lg uppercase tracking-widest group items-center gap-3 md:gap-4">
                                                    Continue Learning <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            ) : (
                                                <Link to="/checkout/ui-ux-design" className="w-full sm:w-auto inline-flex justify-center px-8 py-4 md:px-12 md:py-6 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-xl md:rounded-2xl transition-all shadow-xl md:shadow-2xl shadow-tech-blue/30 hover:shadow-xl text-base md:text-lg uppercase tracking-widest group items-center gap-3 md:gap-4">
                                                    Enroll Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            )}
                                            <button
                                                onClick={() => setShowFormModal(true)}
                                                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 md:px-10 md:py-6 bg-white border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white font-black rounded-xl md:rounded-2xl transition-all shadow-lg text-base md:text-lg uppercase tracking-widest group"
                                            >
                                                Enquire Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Curriculum */}
                <section className="section-spacing px-4 md:px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-20">
                            <span className="text-tech-blue font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] block">
                                Syllabus
                            </span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-app-slate tracking-tighter">
                                Course Curriculum
                            </h2>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-4">
                            {curriculum.map((module, index) => (
                                <div key={index} className="glass-panel rounded-2xl border border-white/50 overflow-hidden transition-all duration-300 hover:shadow-lg">
                                    <button
                                        onClick={() => toggleModule(index)}
                                        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openModule === index ? 'bg-white/50' : 'hover:bg-white/30'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${openModule === index ? 'bg-tech-blue text-white' : 'bg-tech-blue/10 text-tech-blue'}`}>
                                                <BookOpen size={24} />
                                            </div>
                                            <div>
                                                <h3 className={`text-lg md:text-xl font-bold transition-colors ${openModule === index ? 'text-tech-blue' : 'text-app-slate'}`}>
                                                    {module.title}
                                                </h3>
                                                <p className="text-sm text-slate-500 font-medium mt-1">{module.lessons.length} Lessons</p>
                                            </div>
                                        </div>
                                        <div className={`p-2 rounded-full transition-all duration-300 ${openModule === index ? 'rotate-180 bg-tech-blue/10 text-tech-blue' : 'text-slate-400'}`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>

                                    <div
                                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${openModule === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="p-6 pt-0 border-t border-slate-100/50">
                                                <ul className="grid md:grid-cols-2 gap-3 pt-6">
                                                    {module.lessons.map((lesson, lessonIndex) => (
                                                        <li key={lessonIndex} className="flex items-start gap-3 text-slate-600 font-medium text-sm p-3 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-slate-100">
                                                            <div className="mt-1 min-w-[20px]">
                                                                <CheckCircle2 size={16} className="text-tech-blue" />
                                                            </div>
                                                            <span className="leading-snug">{lesson}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Covered */}
                <section className="section-spacing border-t border-slate-200 bg-white/40 backdrop-blur-sm px-4 md:px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16">
                            <span className="text-tech-blue font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] block">
                                Comprehensive Curriculum
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-app-slate tracking-tighter">
                                Skills You Will <span className="text-tech-blue">Master</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* UX Design Skills */}
                            <div className="glass-panel p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border-slate-200 hover:shadow-xl transition-all">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-tech-blue/10 flex items-center justify-center text-tech-blue">
                                        <Users size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-app-slate">UX Design Skills</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "UX Research", "User Centered Design", "UX Psychology & Laws",
                                        "Information Architecture", "User Flow", "Usability Testing",
                                        "Inclusive Design", "Accessibility", "Assistive Technology",
                                        "Competitor Audit", "UX Case Study"
                                    ].map((skill, i) => (
                                        <span key={i} className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 font-bold text-sm hover:border-tech-blue/30 hover:text-tech-blue transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* UI Design Skills */}
                            <div className="glass-panel p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border-slate-200 hover:shadow-xl transition-all">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                                        <Palette size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-app-slate">UI Design Skills</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "UI Design Principles", "Visual Principles", "Color Theory",
                                        "Visual Hierarchy", "Typography", "Iconography",
                                        "Wireframing & Prototyping", "Responsive Web Design",
                                        "Design Systems", "Interactive Design", "Latest UI Trends"
                                    ].map((skill, i) => (
                                        <span key={i} className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 font-bold text-sm hover:border-purple-500/30 hover:text-purple-600 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div className="glass-panel p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border-slate-200 hover:shadow-xl transition-all">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600">
                                        <MousePointer2 size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-app-slate">Industry Tools</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Figma", "Miro", "Balsamiq", "AI for Design"
                                    ].map((skill, i) => (
                                        <span key={i} className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 font-bold text-sm hover:border-orange-500/30 hover:text-orange-600 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Professional Skills */}
                            <div className="glass-panel p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border-slate-200 hover:shadow-xl transition-all">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600">
                                        <Briefcase size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-app-slate">Professional Skills</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Product Strategy", "Job Readiness", "Resume Building"
                                    ].map((skill, i) => (
                                        <span key={i} className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 font-bold text-sm hover:border-green-500/30 hover:text-green-600 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certificate Section */}
                <section className="section-spacing border-t border-slate-200 bg-white px-4 md:px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="space-y-6 md:space-y-8">
                                <span className="text-tech-blue font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] block">
                                    Certification
                                </span>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-app-slate tracking-tighter">
                                    Get Certified by <span className="text-tech-blue">Industry Experts</span>
                                </h2>
                                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                                    Upon successful completion of the course, you will receive a verified certificate from Dedic Infotech. Add this credential to your resume and LinkedIn profile to stand out to recruiters.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Verified Digital Certificate",
                                        "Shareable on LinkedIn",
                                        "Validated by Industry Professionals"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                                            <div className="w-6 h-6 rounded-full bg-tech-blue/20 flex items-center justify-center text-tech-blue">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-tech-blue/20 rounded-3xl blur-2xl group-hover:bg-tech-blue/30 transition-colors duration-500"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-2">
                                    <img
                                        src="/Public/sample-certificate.webp"
                                        alt="Course Certificate Sample"
                                        className="w-full h-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section-spacing border-t border-slate-200 bg-white/40 backdrop-blur-sm px-4 md:px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-app-slate tracking-tighter">
                                Why Choose <span className="text-tech-blue">Us?</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Industry-Relevant Skills", desc: "Learn exactly what employers are looking for." },
                                { title: "Portfolio Development", desc: "Build professional projects to showcase your abilities." },
                                { title: "Expert Mentorship", desc: "Get personalized feedback from experienced designers." }
                            ].map((benefit, i) => (
                                <div key={i} className="glass-panel p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border-slate-200">
                                    <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 text-tech-blue">
                                        <Award size={32} />
                                    </div>
                                    <h3 className="text-lg font-black text-app-slate mb-3">{benefit.title}</h3>
                                    <p className="text-slate-500 text-sm font-medium">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="section-spacing px-4 md:px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="glass-panel p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-slate-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-transparent"></div>
                            <div className="relative z-10 text-center space-y-6 md:space-y-8">
                                <h2 className="text-2xl md:text-5xl font-extrabold text-app-slate tracking-tighter">
                                    Career Opportunities
                                </h2>
                                <p className="text-slate-600 text-base md:text-lg font-medium">
                                    After completing this course, you will be prepared for roles such as:
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {[
                                        "UI Designer", "UX Designer", "Product Designer",
                                        "Interaction Designer", "UX Researcher", "Information Architect", "UI/UX Consultant"
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


            </main>
        </div>
    );
};

export default UiUxDesignCoursePage;
