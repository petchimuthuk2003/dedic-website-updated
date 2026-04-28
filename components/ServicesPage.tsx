import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Code2, Users, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const ServicesPage: React.FC = () => {
    const services = [
                        {
                            id: '1',
                            icon: Globe,
                            title: 'Web Development',
                            description: 'Conversion-focused websites designed to turn visitors into paying customers. We build fast, scalable sites that generate real leads for your business.',
                            image: '/Public/what-we-offer/web-developement.webp',
                            features: [
                                'Conversion-Optimised Landing Pages',
                                'SEO-Optimized Architecture',
                                'Lightning-Fast Performance',
                                'Mobile-First Responsive Design',
                                'Modern Frameworks (React, Next.js)',
                                'Analytics & Lead Tracking Setup'
                            ],
                            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
                        },
                        {
                            id: '2',
                            icon: Smartphone,
                            title: 'Web Applications',
                            description: 'Scalable platforms built to streamline your operations and support business growth. From booking systems to client portals — we build it right.',
                            image: '/Public/what-we-offer/mobile-app-developement.webp',
                            features: [
                                'Custom Business Logic & Workflows',
                                'Real-Time Data & Dashboards',
                                'API Development & Integration',
                                'Role-Based Access Control',
                                'Cross-Platform (Web & Mobile)',
                                'Automated Notifications & Alerts'
                            ],
                            technologies: ['React Native', 'Flutter', 'Node.js', 'Firebase', 'PostgreSQL']
                        },
                        {
                            id: '3',
                            icon: Users,
                            title: 'UI/UX Optimisation',
                            description: 'Improve user experience and increase conversion rates with modern, research-backed design. Better UX means more customers completing the actions you want.',
                            image: '/Public/what-we-offer/uiux-design.webp',
                            features: [
                                'Conversion Rate Optimisation (CRO)',
                                'User Research & Heatmap Analysis',
                                'Wireframing & Prototyping',
                                'Visual Design Systems',
                                'Accessibility Compliance',
                                'A/B Testing & Iteration'
                            ],
                            technologies: ['Figma', 'Adobe XD', 'Hotjar', 'Photoshop', 'Illustrator']
                        },
                        {
                            id: '4',
                            icon: Code2,
                            title: 'Maintenance & Growth',
                            description: 'Continuous support to ensure your digital presence keeps performing. We monitor, optimise, and evolve your platform so you never fall behind.',
                            image: '/Public/what-we-offer/software-development-image.webp',
                            features: [
                                'Performance Monitoring & Uptime',
                                'Security Updates & Patching',
                                'Feature Additions & Iterations',
                                'SEO & Speed Optimisation',
                                'Monthly Reporting & Insights',
                                'Priority Support'
                            ],
                            technologies: ['AWS', 'Vercel', 'Cloudflare', 'Google Analytics', 'Sentry']
                        },
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
                                What We Deliver
                            </span>
                            <h1 className="text-6xl md:text-8xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                Our <span className="text-tech-blue">Services</span>
                            </h1>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
                                We help service-based businesses increase leads through high-performance websites and web applications — built to attract, engage, and convert.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section-spacing border-t border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="space-y-32">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        } items-center gap-16 lg:gap-20`}
                                >
                                    {/* Image Side */}
                                    <div className="flex-1 relative">
                                        <div className="relative rounded-3xl overflow-hidden glass-panel border-slate-200 group">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_70%)]"></div>
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-[400px] object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20"></div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex-1 space-y-8">
                                        <div className="space-y-6">
                                            <div className="space-y-4">
                                                <h2 className="text-4xl md:text-5xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                                    {service.title}
                                                </h2>
                                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-black text-tech-blue uppercase tracking-[0.3em]">
                                                Key Features
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {service.features.map((feature, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-3 bg-white/60 backdrop-blur-sm py-3 px-4 rounded-xl border border-slate-200/60 hover:border-tech-blue/30 transition-all group"
                                                    >
                                                        <CheckCircle2 size={18} className="text-tech-blue flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                        <span className="text-sm font-medium text-slate-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Our Services */}
                <section className="section-spacing border-y border-slate-200 bg-white/40 backdrop-blur-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center space-y-8 mb-20">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em] block">
                                The Dedic Advantage
                            </span>
                            <h2 className="text-5xl md:text-7xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                                Why Choose Us?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Sparkles,
                                    title: 'AI-Powered',
                                    description: 'Leveraging artificial intelligence to create smarter, more efficient solutions'
                                },
                                {
                                    icon: CheckCircle2,
                                    title: 'Quality First',
                                    description: 'Rigorous testing and quality assurance for flawless delivery'
                                },
                                {
                                    icon: Users,
                                    title: 'Expert Team',
                                    description: 'Experienced professionals dedicated to your success'
                                },
                                {
                                    icon: ArrowRight,
                                    title: 'Fast Delivery',
                                    description: 'Agile methodology ensuring quick turnaround times'
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-panel rounded-2xl p-8 space-y-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group border-slate-200"
                                >
                                    <div className="w-16 h-16 bg-tech-blue/10 rounded-xl flex items-center justify-center group-hover:bg-tech-blue group-hover:scale-110 transition-all">
                                        <item.icon size={32} className="text-tech-blue group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-xl font-black text-app-slate uppercase tracking-wider">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
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
                                    Let's Discuss How We Can <span className="text-tech-blue">Grow Your Business</span>
                                </h2>
                                <p className="text-base text-slate-500 font-medium leading-relaxed">
                                    Book a free strategy call and we'll share tailored ideas for your business — no commitment, no fluff.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-2">
                                    <Link to="/contact" className="px-10 py-5 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-tech-blue/30 text-sm uppercase tracking-widest group flex items-center justify-center">
                                        Book a Free Strategy Call <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
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

export default ServicesPage;
