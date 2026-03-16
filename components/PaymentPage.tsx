import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

declare global {
    interface Window { Razorpay: any; }
}

const loadScript = (src: string) => new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
});

const COURSE = {
    id: 'ui-ux-design',
    name: 'UI/UX Design Master Course with AI',
    amount: 999,
};

const PaymentPage: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { user, loading } = useAuth();
    const [profile, setProfile] = useState({ fullName: '', email: '', phone: '' });

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

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="w-8 h-8 border-4 border-tech-blue/30 border-t-tech-blue rounded-full animate-spin"></span>
        </div>
    );

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            setIsLoading(false);
            return;
        }

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: COURSE.amount * 100,
            currency: 'INR',
            name: 'Dedic Infotech',
            description: COURSE.name,
            image: '/Public/uiux-course-thumbnail.webp',
            handler: async function (response: any) {
                // Save enrollment to Supabase
                const { error } = await supabase.from('enrollments').insert({
                    user_id: user!.id,
                    course_id: COURSE.id,
                    course_name: COURSE.name,
                    payment_id: response.razorpay_payment_id,
                    amount: COURSE.amount,
                });

                if (error) {
                    console.error('Enrollment save failed:', error);
                    alert('Payment done but enrollment save failed. Contact support.');
                    return;
                }

                // Send confirmation email via Supabase Edge Function
                await supabase.functions.invoke('send-enrollment-email', {
                    body: {
                        to: user!.email,
                        name: user!.user_metadata?.full_name || 'Student',
                        courseName: COURSE.name,
                        paymentId: response.razorpay_payment_id,
                    },
                });

                navigate('/dashboard?enrolled=true');
            },
            prefill: {
                name: profile.fullName,
                email: profile.email,
                contact: (document.getElementById('phone') as HTMLInputElement)?.value || profile.phone,
            },
            theme: { color: '#2563EB' },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.on('payment.failed', function (response: any) {
            alert(`Payment Failed. Reason: ${response.error.description}`);
            setIsLoading(false);
        });

        paymentObject.open();
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col selection:bg-tech-blue/20 selection:text-tech-blue pt-32 pb-12">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-tech-blue/5 rounded-full blur-[140px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-tech-blue/3 rounded-full blur-[120px] animate-pulse-slow"></div>
            </div>

            <main className="flex-grow z-10 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-tech-blue font-semibold mb-8 transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Course
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Billing Details */}
                        <div className="lg:col-span-7 space-y-8">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-extrabold text-app-slate tracking-tighter mb-4">Secure Checkout</h1>
                                <p className="text-slate-500 font-medium text-lg">Please enter your billing details to complete the purchase.</p>
                            </div>

                            <form id="checkout-form" onSubmit={handlePayment} className="glass-panel p-6 md:p-10 rounded-[2rem] border-slate-200 shadow-xl space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-app-slate">Billing Information</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="fullname" className="text-sm font-bold text-slate-700">Full Name</label>
                                            <input id="fullname" required type="text" value={profile.fullName} onChange={e => setProfile(p => ({ ...p, fullName: e.target.value }))} placeholder="e.g. John Doe"
                                                className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-tech-blue/10 focus:border-tech-blue transition-all font-medium text-slate-800 placeholder:text-slate-400" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                                            <input id="phone" required type="tel" value={profile.phone} onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))} placeholder="+91 98765 43210"
                                                className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-tech-blue/10 focus:border-tech-blue transition-all font-medium text-slate-800 placeholder:text-slate-400" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                                        <input id="email" required type="email" value={profile.email} onChange={e => setProfile(p => ({ ...p, email: e.target.value }))} placeholder="john@example.com"
                                            className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-tech-blue/10 focus:border-tech-blue transition-all font-medium text-slate-800 placeholder:text-slate-400" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="address" className="text-sm font-bold text-slate-700">Address (Optional)</label>
                                        <textarea id="address" rows={3} placeholder="Your address details..."
                                            className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-tech-blue/10 focus:border-tech-blue transition-all resize-none font-medium text-slate-800 placeholder:text-slate-400"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Order Summary */}
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
                                        <span className="text-green-500 font-bold bg-green-50 px-2 py-0.5 rounded-lg">- ₹2001 (67% OFF)</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-600 font-bold text-lg pt-2 mt-2 border-t border-slate-50/50">
                                        <span>Subtotal</span>
                                        <span>₹{COURSE.amount}</span>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-100">
                                    <div className="flex justify-between items-end mb-8">
                                        <span className="text-xl font-black text-app-slate">Total Amount</span>
                                        <div className="text-right">
                                            <span className="text-sm text-slate-500 font-bold block mb-1">Including GST</span>
                                            <span className="text-5xl font-black text-tech-blue tracking-tighter">₹{COURSE.amount}</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-5 mb-8 border border-blue-100/50 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center text-tech-blue flex-shrink-0">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-800 text-lg">Payment via Razorpay</p>
                                            <p className="text-sm text-slate-500 font-medium mt-0.5">UPI, Cards, NetBanking, Wallets</p>
                                        </div>
                                    </div>

                                    <button type="submit" form="checkout-form" disabled={isLoading}
                                        className="w-full py-5 bg-tech-blue hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] text-xl flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1">
                                        {isLoading ? (
                                            <span className="flex items-center gap-3">
                                                <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                Connecting securely...
                                            </span>
                                        ) : (
                                            <>Pay ₹{COURSE.amount} Now <CheckCircle2 size={24} className="group-hover:scale-110 group-hover:rotate-12 transition-transform" /></>
                                        )}
                                    </button>
                                </div>

                                <div className="text-center pt-2">
                                    <p className="text-sm text-slate-400 font-bold flex items-center justify-center gap-2 bg-slate-50 py-2 rounded-xl">
                                        <ShieldCheck size={16} className="text-green-500" />
                                        100% Encrypted & Secure Payment
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
