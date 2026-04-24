import React, { useState } from 'react';
import { CheckCircle2, Star, ArrowRight, MessageCircle, Zap, Shield, TrendingUp } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210'; // Replace with actual WhatsApp number

const portfolioItems = [
    {
        title: 'Book My Festive',
        description: 'Festive event booking platform — increased bookings by 3x',
        image: '/Public/bookmyfestive.webp',
        link: 'https://bookmyfestive.com/',
    },
    {
        title: 'Customine',
        description: 'Custom solutions platform — launched in under 30 days',
        image: '/Public/customine.webp',
        link: 'http://customine.in/',
    },
];

const testimonials = [
    {
        name: 'Rajesh Kumar',
        role: 'Founder, BookMyFestive',
        text: 'Dedic delivered our platform on time and it looked better than we imagined. Our bookings tripled within 2 months.',
        rating: 5,
    },
    {
        name: 'Priya Sharma',
        role: 'CEO, Customine',
        text: 'Professional team, fast delivery, and they actually understood what we needed. Highly recommend.',
        rating: 5,
    },
    {
        name: 'Arun Selvam',
        role: 'Business Owner, Chennai',
        text: 'Got a full website with SEO setup in just 5 days. Already getting calls from Google searches.',
        rating: 5,
    },
];

const FreeWebsiteDesignPage: React.FC = () => {
    const [form, setForm] = useState({ name: '', phone: '', business: '' });

    const handleWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = encodeURIComponent(
            `Hi Dedic! I want a FREE website design demo.\n\nName: ${form.name}\nPhone: ${form.phone}\nBusiness: ${form.business}`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    };

    const whatsAppDirect = () => {
        const msg = encodeURIComponent("Hi Dedic! I'm interested in the FREE website design offer.");
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    };

    return (
        <div className="min-h-screen flex flex-col selection:bg-tech-blue/20 selection:text-tech-blue">
            {/* Ambient bg */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-tech-blue/5 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-tech-blue/3 rounded-full blur-[120px]"></div>
            </div>

            <main className="flex-grow z-10 pt-28">

                {/* ── Hero ── */}
                <section className="py-20 px-6">
                    <div className="container mx-auto max-w-5xl text-center space-y-8">
                        <span className="inline-block bg-green-100 text-green-700 text-xs font-black uppercase tracking-[0.4em] px-4 py-2 rounded-full">
                            🎁 Limited Time Offer
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-app-slate tracking-tighter leading-[1.05]">
                            Get a <span className="text-tech-blue">FREE</span> Website<br />Design Demo
                        </h1>
                        <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            We&apos;ll design a custom homepage mockup for your business — completely free, no strings attached. See exactly what your new website will look like before you pay a single rupee.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                            <button
                                onClick={whatsAppDirect}
                                className="flex items-center justify-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white font-black rounded-2xl transition-all shadow-2xl shadow-green-500/30 text-sm uppercase tracking-widest"
                            >
                                <MessageCircle size={20} />
                                Claim Free Design on WhatsApp
                            </button>
                            <a
                                href="#get-started"
                                className="flex items-center justify-center gap-2 px-10 py-5 border-2 border-tech-blue text-tech-blue font-black rounded-2xl hover:bg-tech-blue hover:text-white transition-all text-sm uppercase tracking-widest"
                            >
                                Fill Quick Form <ArrowRight size={16} />
                            </a>
                        </div>
                        <p className="text-slate-400 text-sm">⚡ Response within 2 hours · No credit card required</p>
                    </div>
                </section>

                {/* ── What You Get ── */}
                <section className="py-16 px-6 bg-white/50 backdrop-blur-sm border-y border-slate-100">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-app-slate tracking-tighter mb-12">
                            What's Included — <span className="text-tech-blue">100% Free</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: Zap, title: 'Custom Homepage Mockup', desc: 'A real design made specifically for your business, not a template.' },
                                { icon: TrendingUp, title: 'SEO Strategy Snapshot', desc: "We'll show you exactly how to rank on Google for your local keywords." },
                                { icon: Shield, title: '₹999 Website Audit', desc: 'Full review of your current site (or competitor sites) — included free.' },
                            ].map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 text-center space-y-4">
                                    <div className="w-14 h-14 bg-tech-blue/10 rounded-2xl flex items-center justify-center text-tech-blue mx-auto">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="font-bold text-app-slate text-lg">{title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Portfolio ── */}
                <section className="py-20 px-6">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-12 space-y-3">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em]">Our Work</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-app-slate tracking-tighter">
                                Real Projects. Real Results.
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {portfolioItems.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:border-tech-blue/30 hover:shadow-xl hover:shadow-tech-blue/10 transition-all duration-500"
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="p-6 space-y-2">
                                        <h3 className="font-bold text-app-slate text-xl group-hover:text-tech-blue transition-colors">{item.title}</h3>
                                        <p className="text-slate-500 text-sm">{item.description}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Testimonials ── */}
                <section className="py-20 px-6 bg-slate-50/60 border-y border-slate-100">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-12 space-y-3">
                            <span className="text-tech-blue font-black text-[11px] uppercase tracking-[0.5em]">Client Stories</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-app-slate tracking-tighter">
                                What Our Clients Say
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {testimonials.map((t) => (
                                <div key={t.name} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 space-y-4">
                                    <div className="flex gap-1">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">"{t.text}"</p>
                                    <div>
                                        <p className="font-bold text-app-slate text-sm">{t.name}</p>
                                        <p className="text-slate-400 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Lead Form ── */}
                <section id="get-started" className="py-20 px-6">
                    <div className="container mx-auto max-w-xl">
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-10 space-y-8">
                            <div className="text-center space-y-3">
                                <h2 className="text-3xl font-extrabold text-app-slate tracking-tighter">
                                    Get Your Free Design
                                </h2>
                                <p className="text-slate-500 text-sm">Fill in your details and we&apos;ll WhatsApp you the mockup within 24 hours.</p>
                            </div>
                            <form onSubmit={handleWhatsApp} className="space-y-4">
                                <input
                                    required
                                    type="text"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 text-app-slate placeholder-slate-400 focus:outline-none focus:border-tech-blue text-sm font-medium"
                                />
                                <input
                                    required
                                    type="tel"
                                    placeholder="WhatsApp Number"
                                    value={form.phone}
                                    onChange={e => setForm({ ...form, phone: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 text-app-slate placeholder-slate-400 focus:outline-none focus:border-tech-blue text-sm font-medium"
                                />
                                <input
                                    required
                                    type="text"
                                    placeholder="Your Business / Industry"
                                    value={form.business}
                                    onChange={e => setForm({ ...form, business: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 text-app-slate placeholder-slate-400 focus:outline-none focus:border-tech-blue text-sm font-medium"
                                />
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 py-5 bg-green-500 hover:bg-green-600 text-white font-black rounded-2xl transition-all shadow-xl shadow-green-500/30 text-sm uppercase tracking-widest"
                                >
                                    <MessageCircle size={18} />
                                    Send via WhatsApp
                                </button>
                            </form>
                            <div className="flex flex-col gap-2 pt-2">
                                {['No payment required', 'Get mockup in 24 hours', 'No obligation to buy'].map(item => (
                                    <div key={item} className="flex items-center gap-2 text-slate-500 text-sm">
                                        <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Sticky WhatsApp CTA (mobile) ── */}
                <div className="fixed bottom-6 right-6 z-50 md:hidden">
                    <button
                        onClick={whatsAppDirect}
                        className="flex items-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-black rounded-2xl shadow-2xl shadow-green-500/40 text-sm transition-all"
                    >
                        <MessageCircle size={20} />
                        WhatsApp Us
                    </button>
                </div>

            </main>
        </div>
    );
};

export default FreeWebsiteDesignPage;
