import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Lightbulb, Code2, Users, Zap, Shield } from 'lucide-react';

const AboutUs: React.FC = () => {
    const values = [
        {
            icon: Heart,
            title: 'Integrity',
            description: 'We uphold the highest standards of honesty and transparency in every interaction.'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We embrace cutting-edge technologies and creative solutions to drive progress.'
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'We believe in the power of teamwork and building strong partnerships.'
        },
        {
            icon: Zap,
            title: 'Excellence',
            description: 'We are committed to delivering exceptional quality in everything we do.'
        }
    ];

    const expertise = [
        {
            icon: Code2,
            title: 'Custom Software Development',
            description: 'Building scalable, robust applications tailored to your business needs.'
        },
        {
            icon: Shield,
            title: 'Enterprise Solutions',
            description: 'Delivering secure, high-performance systems for large-scale operations.'
        },
        {
            icon: Zap,
            title: 'AI & Machine Learning',
            description: 'Leveraging AI to create intelligent, data-driven solutions.'
        },
        {
            icon: Users,
            title: 'Digital Transformation',
            description: 'Guiding businesses through their journey to digital excellence.'
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
                                Discover Our Story
                            </span>
                            <h1 className="text-6xl md:text-8xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                About <span className="text-tech-blue">Dedic Infotech</span>
                            </h1>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
                                Pioneering the future of technology with dedication, innovation, and excellence
                            </p>
                        </div>
                    </div>
                </section>

                {/* Who We Are Section */}
                <section className="section-spacing border-t border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="flex-1 space-y-8">
                                <div className="space-y-6">
                                    <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                        Who We Are
                                    </span>
                                    <h2 className="text-5xl md:text-7xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                        Architects of Digital Excellence
                                    </h2>
                                </div>
                                <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                                    <p>
                                        Dedic is a AI-driven software company that helps businesses grow and succeed in the digital world. Founded in 2025, we started as a small group of people who love building technology, and today we work as a trusted partner for businesses of all sizes.
                                    </p>
                                    <p>
                                        AI-driven thinking is at the heart of what we do. We create smart, scalable, and easy-to-use digital products by bringing together design, artificial intelligence, and engineering. Our focus is simple: solve real problems, deliver real value, and build experiences that users genuinely enjoy - designed to grow over time.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div className="relative rounded-3xl overflow-hidden glass-panel p-12 border-slate-200">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_70%)]"></div>
                                    <img
                                        src="/Public/man-image.png"
                                        alt="Who We Are"
                                        className="w-full object-contain relative z-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="section-spacing">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Mission */}
                            <div className="glass-panel rounded-3xl p-12 space-y-8 hover:shadow-2xl transition-all duration-500 group border-slate-200">
                                <div className="w-20 h-20 bg-tech-blue/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Target size={40} className="text-tech-blue" />
                                </div>
                                <div className="space-y-6">
                                    <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                        Our Mission
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                        Empowering Through Technology
                                    </h3>
                                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                                        To create simple, reliable, and AI-powered digital products that solve real problems, support business growth, and improve user experiences.
                                    </p>
                                </div>
                            </div>

                            {/* Vision */}
                            <div className="glass-panel rounded-3xl p-12 space-y-8 hover:shadow-2xl transition-all duration-500 group border-slate-200">
                                <div className="w-20 h-20 bg-tech-blue/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Eye size={40} className="text-tech-blue" />
                                </div>
                                <div className="space-y-6">
                                    <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                        Our Vision
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                        Leading the Digital Future
                                    </h3>
                                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                                        To be a trusted global technology partner, building smart and human-centered solutions that create long-term value for businesses and people.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="section-spacing border-y border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center space-y-8 mb-20">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                Our Values
                            </span>
                            <h2 className="text-5xl md:text-7xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                What Drives Us
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed font-medium max-w-2xl mx-auto">
                                Our core values guide every decision we make and every solution we deliver
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="glass-panel rounded-2xl p-8 space-y-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group border-slate-200"
                                >
                                    <div className="w-16 h-16 bg-tech-blue/10 rounded-xl flex items-center justify-center group-hover:bg-tech-blue group-hover:scale-110 transition-all">
                                        <value.icon size={32} className="text-tech-blue group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-xl font-black text-app-slate uppercase tracking-wider">
                                            {value.title}
                                        </h4>
                                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Expertise Section */}
                <section className="section-spacing">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center space-y-8 mb-20">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                Our Expertise
                            </span>
                            <h2 className="text-5xl md:text-7xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                What We Excel At
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed font-medium max-w-2xl mx-auto">
                                Delivering world-class solutions across multiple technology domains
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {expertise.map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-panel rounded-3xl p-10 space-y-6 hover:shadow-2xl transition-all duration-500 group border-slate-200"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 bg-tech-blue/10 rounded-xl flex items-center justify-center group-hover:bg-tech-blue group-hover:scale-110 transition-all flex-shrink-0">
                                            <item.icon size={32} className="text-tech-blue group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="space-y-3 flex-1">
                                            <h4 className="text-2xl font-black text-app-slate tracking-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-600 text-base leading-relaxed font-medium">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                    Ready to <span className="text-tech-blue">Partner With Us?</span>
                                </h2>
                                <p className="text-base text-slate-500 font-medium leading-relaxed">
                                    Let's collaborate to bring your vision to life. Our team is ready to help you achieve extraordinary results.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-2">
                                    <Link to="/contact" className="px-10 py-5 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-tech-blue/30 text-sm uppercase tracking-widest group block text-center">
                                        Get Started Today
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

export default AboutUs;
