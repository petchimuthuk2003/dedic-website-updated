import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Smartphone, Palette, Layers, CheckCircle2, ArrowRight, Award, Users, Briefcase } from 'lucide-react';

const InternshipsPage: React.FC = () => {
    const courses = [

        {
            id: '2',
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Master the art of creating intuitive, engaging, and user-centered digital experiences with our comprehensive UI/UX design courses.',
            topics: [
                'UI/UX Design Fundamentals',
                'Advanced UI Design',
                'UX Research & Strategy',
                'Wireframing & Prototyping',
                'Design Systems & Interaction'
            ]
        },
        {
            id: '3',
            icon: Code,
            title: 'Web Development',
            description: 'Build modern, responsive websites and web applications with the latest technologies and frameworks.',
            topics: [
                'HTML5 & CSS3 Mastery',
                'JavaScript (ES6+) Programming',
                'React.js Component Architecture',
                'Responsive & Adaptive Design',
                'Web Performance Optimization'
            ]
        },
        {
            id: '4',
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'Create native and cross-platform mobile applications for iOS and Android with industry-leading frameworks.',
            topics: [
                'React Native Cross-Platform Dev',
                'iOS Development with Swift',
                'Android Development with Kotlin',
                'Mobile UI/UX Best Practices',
                'App Store Deployment'
            ]
        },
        {
            id: '5',
            icon: Layers,
            title: 'FullStack Development',
            description: 'Master both front-end and back-end development to become a complete developer capable of building end-to-end applications.',
            topics: [
                'MERN Stack (MongoDB, Express, React, Node)',
                'RESTful API Design & Integration',
                'Database Modeling & Management',
                'Authentication & Security',
                'Server Deployment & DevOps'
            ]
        },
        {
            id: '6',
            icon: Code,
            title: 'Python Programming',
            description: 'Master Python for web development, data science, machine learning, and more with our comprehensive curriculum.',
            topics: [
                'Core Python Programming',
                'Data Structures & Algorithms',
                'Data Analysis with Pandas',
                'Web Development with Django',
                'Automation & Scripting'
            ]
        }
    ];

    const benefits = [
        {
            icon: Award,
            title: 'Expert-Led',
            description: 'Learn from industry professionals with years of experience'
        },
        {
            icon: Users,
            title: 'Practical Sessions',
            description: 'Hands-on training designed for real-world challenges'
        },
        {
            icon: BookOpen,
            title: 'Up-to-Date',
            description: 'Curriculum updated with latest industry trends'
        },
        {
            icon: Briefcase,
            title: 'Career Ready',
            description: 'Prepare yourself for career advancement opportunities'
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
                {/* Hero Section */}
                <section className="py-24 px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center space-y-8 max-w-4xl mx-auto">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                Learn & Grow
                            </span>
                            <h1 className="text-6xl md:text-8xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                Our <span className="text-tech-blue">Internships</span>
                            </h1>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
                                Enhance your technical skills with our expert-led programming and development internships.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Courses Listing */}
                <section className="section-spacing px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="glass-panel rounded-3xl p-8 md:p-10 border-slate-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
                                >
                                    <div className="space-y-8">
                                        {/* Header */}
                                        <div className="space-y-6">
                                            <div className="w-16 h-16 bg-tech-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-tech-blue group-hover:scale-110 transition-all">
                                                <course.icon size={32} className="text-tech-blue group-hover:text-white transition-colors" />
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-3xl md:text-4xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                                    {course.title}
                                                </h3>
                                                <p className="text-slate-600 text-base leading-relaxed font-medium">
                                                    {course.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Topics Covered */}
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-black text-tech-blue uppercase tracking-[0.3em]">
                                                Topics Covered
                                            </h4>
                                            <div className="space-y-3">
                                                {course.topics.map((topic, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-3 bg-white/60 backdrop-blur-sm py-3 px-4 rounded-xl border border-slate-200/60 hover:border-tech-blue/30 transition-all group"
                                                    >
                                                        <CheckCircle2 size={18} className="text-tech-blue flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                        <span className="text-sm font-medium text-slate-700">{topic}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Enroll Button */}
                                        <div className="pt-4">
                                            <Link
                                                to={course.id === '2' ? "/courses/ui-ux-design" : course.id === '3' ? "/courses/web-development" : course.id === '4' ? "/courses/mobile-app-development" : course.id === '5' ? "/courses/fullstack-development" : course.id === '6' ? "/courses/python" : "/contact"}
                                                className="w-full px-8 py-4 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-xl transition-all shadow-xl shadow-tech-blue/20 text-sm uppercase tracking-widest group flex items-center justify-center gap-3"
                                            >
                                                Enroll Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Course Categories Introduction */}
                <section className="section-spacing border-t border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center space-y-8 mb-16">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                What We Offer
                            </span>
                            <h2 className="text-5xl md:text-6xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                Internship Categories
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-3xl mx-auto">
                                Explore our comprehensive range of development internships designed by industry experts to provide practical, up-to-date programming skills.
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="glass-panel rounded-2xl p-8 space-y-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group border-slate-200"
                                >
                                    <div className="w-16 h-16 bg-tech-blue/10 rounded-xl flex items-center justify-center group-hover:bg-tech-blue group-hover:scale-110 transition-all">
                                        <benefit.icon size={32} className="text-tech-blue group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-xl font-black text-app-slate uppercase tracking-wider">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Fee Structure */}
                <section className="section-spacing px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center space-y-6 mb-12">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                Fee <span className="text-tech-blue">Structure</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
                                Flexible payment options to suit your learning needs and schedule.
                            </p>
                        </div>

                        <div className="glass-panel rounded-3xl overflow-hidden border-slate-200">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="p-6 text-sm font-black text-tech-blue uppercase tracking-widest w-1/2">Duration/Type</th>
                                            <th className="p-6 text-sm font-black text-tech-blue uppercase tracking-widest w-1/2">Fee</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-6 text-slate-700 font-bold text-lg">30 days</td>
                                            <td className="p-6 text-app-slate font-extrabold text-xl">₹4,999</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-6 text-slate-700 font-bold text-lg">60 days</td>
                                            <td className="p-6 text-app-slate font-extrabold text-xl">₹9,999</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-6 text-slate-700 font-bold text-lg">90 days</td>
                                            <td className="p-6 text-app-slate font-extrabold text-xl">₹14,999</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-6 text-slate-700 font-bold text-lg">Personal Consulting</td>
                                            <td className="p-6 text-app-slate font-extrabold text-xl">₹299 <span className="text-sm font-medium text-slate-400">per session</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practical Sessions Note */}
                <section className="section-spacing px-6 border-t border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto max-w-4xl">
                        <div className="relative rounded-3xl overflow-hidden glass-panel py-16 px-8 md:px-16 text-center border-slate-200 group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_70%)]"></div>

                            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                                <div className="w-20 h-20 bg-tech-blue/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-tech-blue group-hover:scale-110 transition-all">
                                    <Award size={40} className="text-tech-blue group-hover:text-white transition-colors" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter leading-none">
                                    Practical Sessions <span className="text-tech-blue">Included</span>
                                </h2>
                                <p className="text-base text-slate-500 font-medium leading-relaxed">
                                    All our internships include practical sessions designed to prepare you for real-world challenges and career advancement.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-2">
                                    <Link to="/contact" className="px-10 py-5 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-tech-blue/30 text-sm uppercase tracking-widest group flex items-center justify-center">
                                        Get Started Today <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
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

export default InternshipsPage;
