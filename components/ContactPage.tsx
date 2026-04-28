
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { supabase } from '../lib/supabase';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const { error } = await supabase.from('contacts').insert({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
            });
            if (error) throw error;

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    title: formData.subject,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                PUBLIC_KEY
            );

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-blue/10 rounded-full blur-[80px] -z-10"></div>
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-app-slate to-tech-blue tracking-tighter mb-6 uppercase">
                        Book a Free Strategy Call
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Tell us about your business. We'll share tailored ideas on how to grow your leads and revenue — no commitment required.
                    </p>
                </div>

                <p className="text-center text-sm text-slate-400 font-medium -mt-12 mb-12">
                    Engagements typically start from <span className="text-tech-blue font-black">₹50,000</span>. We work with businesses serious about growth.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-tech-blue/5">
                            <h3 className="text-2xl font-bold text-app-slate mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-tech-blue/10 flex items-center justify-center text-tech-blue group-hover:bg-tech-blue group-hover:text-white transition-colors duration-300 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-app-slate mb-1">Our Location</h4>
                                        <p className="text-slate-500 leading-relaxed">
                                            147A, West Street,<br />
                                            Vadavoorpatti, Tirunelveli,<br />
                                            TN, India-627152
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-tech-blue/10 flex items-center justify-center text-tech-blue group-hover:bg-tech-blue group-hover:text-white transition-colors duration-300 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-app-slate mb-1">Email Us</h4>
                                        <a href="mailto:business@dedicinfotech.com" className="text-slate-500 hover:text-tech-blue transition-colors">
                                            business@dedicinfotech.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-tech-blue/10 flex items-center justify-center text-tech-blue group-hover:bg-tech-blue group-hover:text-white transition-colors duration-300 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-app-slate mb-1">Call Us</h4>
                                        <a href="tel:+918148376909" className="text-slate-500 hover:text-tech-blue transition-colors">
                                            +91 8148376909
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 relative group">
                            <iframe
                                title="Location Map"
                                src="https://maps.google.com/maps?q=Dedic+Infotech+Vadavoorpatti&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-tech-blue/5">
                        <h3 className="text-2xl font-bold text-app-slate mb-8">Send a Message</h3>

                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-black text-app-slate mb-2">Message Sent!</h4>
                                <p className="text-slate-500 mb-8">Thanks for reaching out. We'll get back to you soon.</p>
                                <button onClick={() => setStatus('idle')} className="px-8 py-3 bg-tech-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-sm uppercase tracking-wider">
                                    Send Another
                                </button>
                            </div>
                        ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-app-slate ml-1">Name</label>
                                    <div className="relative">
                                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all placeholder:text-slate-400 font-medium"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-app-slate ml-1">Phone</label>
                                    <div className="relative">
                                        <Smartphone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your Phone"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-app-slate ml-1">Email</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all placeholder:text-slate-400 font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-app-slate ml-1">Subject</label>
                                <div className="relative">
                                    <MessageSquare size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all placeholder:text-slate-400 font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-app-slate ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all placeholder:text-slate-400 font-medium resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" disabled={status === 'sending'} className="w-full py-4 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-xl transition-all shadow-xl shadow-tech-blue/20 flex items-center justify-center gap-3 uppercase tracking-widest group disabled:opacity-70">
                                {status === 'sending' ? <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Sending...</> : <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                            </button>
                            {status === 'success' && <p className="text-green-500 font-bold text-center text-sm">✅ Message sent! We'll get back to you soon.</p>}
                            {status === 'error' && <p className="text-red-500 font-bold text-center text-sm">❌ Failed to send. Please try again or email us directly.</p>}
                        </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
