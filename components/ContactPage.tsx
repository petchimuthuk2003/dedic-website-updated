
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone } from 'lucide-react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
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
                        Get In Touch
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Start the conversation to establish good relationship and business.
                    </p>
                </div>

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

                            <button type="submit" className="w-full py-4 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-xl transition-all shadow-xl shadow-tech-blue/20 flex items-center justify-center gap-3 uppercase tracking-widest group">
                                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
