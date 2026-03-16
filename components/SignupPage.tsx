import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SignupPage: React.FC = () => {
    const { user, signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/dashboard');
    }, [user]);

    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden pt-32">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-tech-blue/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }}></div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-tech-blue transition-colors mb-6 text-sm font-bold uppercase tracking-wider">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h2 className="text-4xl md:text-5xl font-black text-app-slate tracking-tight">Welcome</h2>
                    <p className="mt-4 text-slate-500 text-base md:text-lg font-medium">Log in or sign up to start your learning journey.</p>
                </div>

                <div className="glass-panel py-10 px-6 shadow-2xl rounded-[2rem] border-white/50 bg-white/60 sm:px-10">
                    <div className="relative w-full group cursor-pointer pt-4 pb-2">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] rounded-[1.25rem] blur-lg opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-300 animate-pulse-slow"></div>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-tech-blue to-purple-500 rounded-[1.25rem] opacity-0 group-hover:opacity-40 transition duration-500 group-hover:duration-300"></div>
                        <button
                            type="button"
                            onClick={signInWithGoogle}
                            className="relative w-full flex items-center justify-center gap-3 md:gap-4 px-2 md:px-4 py-5 md:py-6 bg-white border border-slate-100 rounded-2xl shadow-xl transition-all duration-300 group-hover:-translate-y-1 text-[11px] md:text-base font-black text-slate-800 group-hover:text-blue-600 uppercase tracking-wide md:tracking-widest whitespace-nowrap overflow-hidden z-10"
                        >
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-blue-50/50 to-transparent skew-x-12"></div>
                            <svg className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 drop-shadow-sm relative z-20" aria-hidden="true" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
                                <path d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.39 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span className="relative z-20 transition-all duration-300 group-hover:tracking-[0.2em] md:group-hover:tracking-[0.25em]">Log in / Sign up with Google</span>
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-slate-500 text-sm font-medium">
                            Already have an account?{' '}
                            <Link to="/login" className="font-bold text-tech-blue hover:text-blue-700 transition-colors">Sign in with email</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
