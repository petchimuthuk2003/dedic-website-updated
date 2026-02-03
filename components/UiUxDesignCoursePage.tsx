import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Users, Briefcase, Palette, MousePointer2, Smartphone, Play, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const UiUxDesignCoursePage: React.FC = () => {
    const [openModule, setOpenModule] = React.useState<number | null>(null);

    const toggleModule = (index: number) => {
        setOpenModule(openModule === index ? null : index);
    };

    const curriculum = [
        {
            title: "Module 1: Introduction UI UX Design",
            lessons: [
                "Why UI UX Design? - The Over All View",
                "UI vs. UX vs. Product Design",
                "UI UX Designer Role in a Company",
                "Future Scope Of UI UX Designing",
                "UX in Day to Day Things"
            ]
        },
        {
            title: "Module 2: Figma - From The Scratch to Advance",
            lessons: [
                "Figma - Work Flow",
                "Layers Panel",
                "Shapes Tools & Importing Images",
                "Colors Fill Property",
                "Stroke & Effects Property",
                "Text Tool - Constraints",
                "Pen Tool",
                "Layout Guide",
                "Important Plugins",
                "Auto Layout & Grouping Elements",
                "Variables & Components",
                "Basic Elements & Components",
                "Creating a Mobile App UI",
                "Prototyping Screens with Animation",
                "Capstone Project"
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
                "UX Design Thinking Process - User Centered Design",
                "Research Methods & Biases",
                "Empathize Methods",
                "Define Problem Statement",
                "Ideate with Brainstorming",
                "Competitor Audit",
                "Information Architecture",
                "User Flow - Ideation",
                "Low Fidelity vs. High Fidelity Prototype",
                "Usability Testing",
                "Case Study",
                "Universal, Inclusive, Equity-Focused Design",
                "Assistive Technology (AT) - WCAG",
                "UX Laws & Gestalt Principles",
                "UX Case Study - Capstone Project"
            ]
        },
        {
            title: "Module 5: UI - Principles to Prototyping",
            lessons: [
                "Color Theory",
                "Typography",
                "Iconography",
                "Visual Hierarchy",
                "Layouts and Grid System",
                "Copywriting with ChatGPT",
                "Accessibility in UI",
                "Design System & Design Token",
                "Responsive Web Design",
                "Minimising interaction cost & cognitive load"
            ]
        },
        {
            title: "Module 6: AI - Prompts to Research & Design",
            lessons: [
                "Perplexity - Data Analysis",
                "ChatGPT - Information Architecture",
                "Gemini - for Image Creation",
                "Figma AI",
                "Stitch AI, UIzard, VisilyAI & UXpilot Tools"
            ]
        },
        {
            title: "Module 7: 2026 - Latest UI Trends",
            lessons: [
                "Simple & Clean UI is Ever Green",
                "Glass-morphism",
                "Micro-interactions",
                "3D designs trend"
            ]
        },
        {
            title: "Module 8: Lets Crack Interview",
            lessons: [
                "Resume Building",
                "UI UX Designer Interview Questions",
                "Free Websites To Learn UX UI Design",
                "Cheat-sheet Document"
            ]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col selection:bg-tech-blue/20 selection:text-tech-blue">
            {/* Soft Ambient Lighting */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-tech-blue/5 rounded-full blur-[140px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-tech-blue/3 rounded-full blur-[120px] animate-pulse-slow"></div>
            </div>

            <main className="flex-grow z-10 pt-32">


                {/* Demo Video & Pricing Section */}
                <section className="pb-24 px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="flex flex-col items-center gap-12">
                            {/* Video */}
                            <div className="w-full max-w-5xl relative rounded-[2rem] overflow-hidden shadow-2xl shadow-tech-blue/20 bg-slate-900 aspect-video group cursor-pointer border border-slate-800">
                                {/* Placeholder Image/Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-24 h-24 rounded-full bg-tech-blue/90 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.5)]">
                                        <Play className="text-white fill-white ml-2" size={40} />
                                    </div>
                                </div>
                                <img
                                    src="/Public/uiux-course-thumbnail.webp"
                                    alt="Course Demo"
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-10 transition-transform duration-300 group-hover:translate-y-2">
                                    <h3 className="text-white text-2xl font-bold">Watch Course Preview</h3>
                                    <p className="text-slate-300">See what you'll build and learn in this masterclass.</p>
                                </div>
                            </div>

                            {/* Pricing & CTA */}
                            <div className="w-full max-w-3xl">
                                <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border-slate-200 shadow-xl text-center space-y-8">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-tech-blue/10 rounded-full">
                                            <span className="w-2 h-2 rounded-full bg-tech-blue animate-pulse"></span>
                                            <span className="text-tech-blue font-black text-xs uppercase tracking-widest">Limited Time Offer</span>
                                        </div>

                                        <div className="flex items-center justify-center gap-6 flex-wrap">
                                            <span className="text-slate-400 text-3xl font-bold line-through decoration-slate-400/50 decoration-2">₹3000</span>
                                            <div className="flex items-center gap-4">
                                                <span className="text-5xl md:text-6xl font-black text-app-slate tracking-tighter">₹999</span>
                                                <span className="bg-red-500 text-white px-3 py-1 rounded-lg font-bold text-sm transform -rotate-2 shadow-lg shadow-red-500/30">
                                                    67% OFF
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

                                        <div className="pt-2">
                                            <Link to="/contact" className="inline-flex justify-center px-12 py-6 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-tech-blue/30 hover:shadow-xl text-lg uppercase tracking-widest group items-center gap-4">
                                                Enroll Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Curriculum */}
                <section className="section-spacing px-6 border-t border-slate-200 bg-white/40 backdrop-blur-sm pb-32">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center space-y-8 mb-20">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                Syllabus
                            </span>
                            <h2 className="text-5xl md:text-6xl font-extrabold text-app-slate tracking-tighter">
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
                <section className="section-spacing border-t border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                Comprehensive Curriculum
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter">
                                Skills You Will <span className="text-tech-blue">Master</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* UX Design Skills */}
                            <div className="glass-panel p-8 rounded-3xl border-slate-200 hover:shadow-xl transition-all">
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
                            <div className="glass-panel p-8 rounded-3xl border-slate-200 hover:shadow-xl transition-all">
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
                            <div className="glass-panel p-8 rounded-3xl border-slate-200 hover:shadow-xl transition-all">
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
                            <div className="glass-panel p-8 rounded-3xl border-slate-200 hover:shadow-xl transition-all">
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

                {/* Benefits */}
                <section className="section-spacing border-t border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter">
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
                <section className="section-spacing px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="glass-panel p-12 rounded-[3rem] border-slate-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-transparent"></div>
                            <div className="relative z-10 text-center space-y-8">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-app-slate tracking-tighter">
                                    Career Opportunities
                                </h2>
                                <p className="text-slate-600 text-lg font-medium">
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
