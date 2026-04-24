import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

declare global {
    interface Window { Razorpay: any; }
}

const COURSE = {
    id: 'ui-ux-design',
    name: 'UI/UX Design Master Course with AI',
    amount: 399,
};

const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

const PaymentPage: React.FC = () => {
    const navigate = useNavigate();
    const { user, loading } = useAuth();
    const [profile, setProfile] = useState({ fullName: '', email: '', phone: '' });
    const [paying, setPaying] = useState(false);

    useEffect(() => {
        if (!loading && !user) navigate('/login');
    }, [user, loading]);

    useEffect(() => {
        if (!user) return;
        supabase.from('profiles').select('*').eq('id', user.id).single().then(({ data }) => {
            setProfile({
                fullName: data?.full_name || user.user_metadata?.full_name || '',
                email: data?.email || user.email || '',
                phone: data?.phone || '',
            });
        });
    }, [user]);

    // Load Razorpay script dynamically
    useEffect(() => {
        if (window.Razorpay) return;
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="w-8 h-8 border-4 border-tech-blue/30 border-t-tech-blue rounded-full animate-spin"></span>
        </div>
    );

    const handlePayment = () => {
        if (!window.Razorpay) { alert('Payment gateway not loaded. Please refresh.'); return; }
        if (!profile.fullName || !profile.email || !profile.phone) {
            alert('Please fill in your name, email and phone number.'); return;
        }
        setPaying(true);

        const options = {
            key: RAZORPAY_KEY,
            amount: COURSE.amount * 100, // paise
            currency: 'INR',
            name: 'Dedic Infotech',
            description: COURSE.name,
            image: '/Public/dedic-logo.png',
            prefill: {
                name: profile.fullName,
                email: profile.email,
                contact: profile.phone,
            },
            theme: { color: '#2563eb' },
            handler: async (response: any) => {
                // Payment successful — auto enroll
                const { error } = await supabase.from('enrollments').insert({
                    user_id: user!.id,
                    course_id: COURSE.id,
                    course_name: COURSE.name,
                    payment_id: response.razorpay_payment_id,
                    amount: COURSE.amount,
                    enrolled_at: new Date().toISOString(),
                    completed_lessons: [],
                });

                setPaying(false);
                if (error) {
                    console.error('Enrollment error:', error);
                    alert(`Payment received (${response.razorpay_payment_id}) but enrollment failed: ${error.message}\n\nPlease contact support with this payment ID.`);
                    return;
                }
                navigate('/play/ui-ux-design');
            },
            modal: {
                ondismiss: () => setPaying(false),
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', (response: any) => {
            setPaying(false);
            alert('Payment failed: ' + response.error.description);
        });
        rzp.open();
    };

    return (
        <div className="min-h-screen flex flex-col selection:bg-tech-blue/20 selection:text-tech-blue pt-32 pb-12">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-tech-blue/5 rounded-full blur-[140px] animate-pulse-slow"></div>
            </div>

            <main className="flex-grow z-10 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-tech-blue font-semibold mb-8 transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Course
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Left — Details form */}
                        <div className="lg:col-span-7 space-y-8">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-extrabold text-app-slate tracking-tighter mb-4">Complete Enrollment</h1>
                                <p className="text-slate-500 font-medium text-lg">Fill in your details and pay securely via Razorpay.</p>
                            </div>

                            <div className="glass-panel p-6 md:p-10 rounded-[2rem] border-slate-200 shadow-xl space-y-6">
                                <h3 className="text-2xl font-black text-app-slate">Your Details</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                                        <input type="text" value={profile.fullName} onChange={e => setProfile(p => ({ ...p, fullName: e.target.value }))} placeholder="Your full name"
                                            className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-tech-blue/10 focus:border-tech-blue transition-all font-medium text-slate-800 placeholder:text-slate-400" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                        <input type="tel" value={profile.phone} onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))} placeholder="+91 98765 43210"
                                            className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-tech-blue/10 focus:border-tech-blue transition-all font-medium text-slate-800 placeholder:text-slate-400" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                                    <input type="email" value={profile.email} onChange={e => setProfile(p => ({ ...p, email: e.target.value }))} placeholder="john@example.com"
                                        className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-tech-blue/10 focus:border-tech-blue transition-all font-medium text-slate-800 placeholder:text-slate-400" />
                                </div>

                                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3">
                                    <Zap size={20} className="text-tech-blue flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-blue-700 font-medium">Instant access — your course unlocks immediately after payment.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right — Order Summary */}
                        <div className="lg:col-span-5">
                            <div className="glass-panel p-6 md:p-8 rounded-[2rem] border-slate-200 shadow-2xl sticky top-32 space-y-8">
                                <div>
                                    <h3 className="text-2xl font-black text-app-slate mb-6">Order Summary</h3>
                                    <div className="flex gap-5 items-center bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="w-20 h-20 rounded-xl bg-slate-900 flex-shrink-0 overflow-hidden relative shadow-inner">
                                            <img src="/Public/uiux-course-thumbnail.webp" alt="Course Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-app-slate leading-snug text-lg">{COURSE.name}</h4>
                                            <p className="text-sm text-slate-500 font-medium mt-1">Lifetime Access</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6 border-t border-slate-100">
                                    <div className="flex justify-between items-center text-slate-500 font-semibold text-lg">
                                        <span>Original Price</span>
                                        <span className="line-through decoration-slate-400 decoration-2">₹3000</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-600 font-semibold text-lg">
                                        <span>Discount</span>
                                        <span className="text-green-500 font-bold bg-green-50 px-2 py-0.5 rounded-lg">- ₹2601 (87% OFF)</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                                        <span className="text-slate-600 font-bold text-lg">Total</span>
                                        <span className="text-4xl font-black text-tech-blue">₹{COURSE.amount}</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-100 space-y-4">
                                    <ul className="space-y-2">
                                        {['Instant Course Access', 'Certificate of Completion', '3 Capstone Projects', 'Mentorship Support'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                                                <CheckCircle2 size={16} className="text-tech-blue" /> {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <button onClick={handlePayment} disabled={paying}
                                        className="w-full py-5 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] text-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1">
                                        {paying ? (
                                            <span className="flex items-center gap-3">
                                                <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                Opening Payment...
                                            </span>
                                        ) : (
                                            <>Pay ₹{COURSE.amount} Securely</>
                                        )}
                                    </button>

                                    <p className="text-sm text-slate-400 font-bold flex items-center justify-center gap-2 bg-slate-50 py-2 rounded-xl">
                                        <ShieldCheck size={16} className="text-green-500" />
                                        Secured by Razorpay
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PaymentPage;
