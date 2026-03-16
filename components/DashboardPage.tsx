import React, { useState, useEffect } from 'react';
import { User, BookOpen, Award, LogOut, ChevronRight, GraduationCap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Enrollment {
    id: string;
    course_id: string;
    course_name: string;
    payment_id: string;
    amount: number;
    enrolled_at: string;
}

const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const { user, signOut, loading } = useAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
    const [userData, setUserData] = useState({ fullName: '', email: '', phone: '', location: '' });
    const [saving, setSaving] = useState(false);
    const [saveMsg, setSaveMsg] = useState('');

    useEffect(() => {
        if (loading) return;
        if (!user) { navigate('/login'); return; }
        supabase.from('enrollments').select('*').eq('user_id', user.id).then(({ data }) => {
            if (data) setEnrollments(data);
        });
        // Load saved profile
        supabase.from('profiles').select('*').eq('id', user.id).single().then(({ data }) => {
            if (data) setUserData({ fullName: data.full_name || '', email: data.email || user.email || '', phone: data.phone || '', location: data.location || '' });
            else setUserData({ fullName: user.user_metadata?.full_name || '', email: user.email || '', phone: '', location: '' });
        });
        if (searchParams.get('enrolled') === 'true') setActiveTab('courses');
    }, [user, loading]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="w-8 h-8 border-4 border-tech-blue/30 border-t-tech-blue rounded-full animate-spin"></span>
        </div>
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        if (!user) return;
        setSaving(true);
        setSaveMsg('');
        const { error } = await supabase.from('profiles').upsert({
            id: user.id,
            full_name: userData.fullName,
            email: userData.email,
            phone: userData.phone,
            location: userData.location,
            updated_at: new Date().toISOString(),
        });
        setSaving(false);
        setSaveMsg(error ? 'Failed to save. Try again.' : 'Saved successfully!');
        setTimeout(() => setSaveMsg(''), 3000);
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative">
            <div className="absolute top-20 left-10 w-96 h-96 bg-tech-blue/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto max-w-7xl">
                <h1 className="text-4xl md:text-5xl font-black text-app-slate mb-2 tracking-tight">
                    Student <span className="text-tech-blue">Dashboard</span>
                </h1>
                <p className="text-slate-500 text-lg mb-12 max-w-2xl">
                    Track your progress, manage your profile, and view your earned certificates all in one place.
                </p>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="glass-panel p-6 rounded-3xl sticky top-32 border border-white/50 shadow-xl backdrop-blur-xl bg-white/60">
                            <div className="flex items-center gap-4 mb-8 p-4 bg-white/50 rounded-2xl border border-slate-100">
                                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center text-tech-blue overflow-hidden">
                                    {user?.user_metadata?.avatar_url
                                        ? <img src={user.user_metadata.avatar_url} className="w-full h-full object-cover" />
                                        : <User size={24} />}
                                </div>
                                <div>
                                    <h3 className="font-bold text-app-slate">{user?.user_metadata?.full_name || user?.email}</h3>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Student</p>
                                </div>
                            </div>

                            <nav className="space-y-2">
                                {[
                                    { id: 'profile', icon: <User size={18} />, label: 'Profile' },
                                    { id: 'courses', icon: <BookOpen size={18} />, label: 'Enrolled Courses' },
                                    { id: 'certificates', icon: <Award size={18} />, label: 'Certificates' },
                                ].map(tab => (
                                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl transition-all font-bold text-sm uppercase tracking-wider ${activeTab === tab.id ? 'bg-tech-blue text-white shadow-lg shadow-tech-blue/30' : 'text-slate-500 hover:bg-white hover:text-tech-blue'}`}>
                                        {tab.icon} {tab.label}
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <button onClick={() => { signOut(); navigate('/'); }}
                                    className="w-full flex items-center gap-3 px-6 py-4 rounded-xl transition-all font-bold text-sm uppercase tracking-wider text-red-500 hover:bg-red-50">
                                    <LogOut size={18} /> Logout
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4">

                        {/* Profile */}
                        {activeTab === 'profile' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="glass-panel p-8 rounded-3xl border border-white/50 shadow-xl bg-white/60">
                                    <h2 className="text-2xl font-black text-app-slate tracking-tight flex items-center gap-3 mb-6">
                                        <User className="text-tech-blue" /> Personal Information
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                                                <input type="text" name="fullName" value={userData.fullName} onChange={handleInputChange}
                                                    className="w-full p-4 bg-white rounded-xl border border-slate-100 font-semibold text-app-slate focus:outline-none focus:border-tech-blue transition-colors" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                                                <input type="email" name="email" value={userData.email} onChange={handleInputChange}
                                                    className="w-full p-4 bg-white rounded-xl border border-slate-100 font-semibold text-app-slate focus:outline-none focus:border-tech-blue transition-colors" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Location</label>
                                                <input type="text" name="location" value={userData.location} onChange={handleInputChange}
                                                    className="w-full p-4 bg-white rounded-xl border border-slate-100 font-semibold text-app-slate focus:outline-none focus:border-tech-blue transition-colors" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                                                <input type="tel" name="phone" value={userData.phone} onChange={handleInputChange}
                                                    className="w-full p-4 bg-white rounded-xl border border-slate-100 font-semibold text-app-slate focus:outline-none focus:border-tech-blue transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-end items-center gap-4">
                                        {saveMsg && <p className={`text-sm font-bold ${saveMsg.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>{saveMsg}</p>}
                                        <button onClick={handleSave} disabled={saving}
                                            className="px-8 py-3 bg-tech-blue text-white font-bold rounded-xl shadow-lg shadow-tech-blue/20 hover:bg-blue-700 transition-all text-sm uppercase tracking-wider disabled:opacity-70">
                                            {saving ? 'Saving...' : 'Save Changes'}
                                        </button>
                                    </div>
                                </div>

                                <div className="glass-panel p-8 rounded-3xl border border-white/50 shadow-xl bg-white/60">
                                    <h2 className="text-2xl font-black text-app-slate tracking-tight flex items-center gap-3 mb-6">
                                        <BookOpen className="text-tech-blue" /> Learning Stats
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                                            <div className="text-3xl font-black text-tech-blue mb-1">{enrollments.length}</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Courses Enrolled</div>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-center">
                                            <div className="text-3xl font-black text-green-600 mb-1">0</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Completed</div>
                                        </div>
                                        <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 text-center">
                                            <div className="text-3xl font-black text-purple-600 mb-1">0</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Hours Learned</div>
                                        </div>
                                        <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 text-center">
                                            <div className="text-3xl font-black text-orange-600 mb-1">0</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Certificates</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Enrolled Courses */}
                        {activeTab === 'courses' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-3xl font-black text-app-slate mb-6">My Courses</h2>
                                <div className="grid gap-6">
                                    {enrollments.length === 0 ? (
                                        <div className="glass-panel p-12 rounded-3xl border border-white/50 shadow-xl bg-white/60 text-center">
                                            <BookOpen size={40} className="mx-auto text-slate-300 mb-4" />
                                            <h3 className="text-xl font-bold text-app-slate mb-2">No Courses Yet</h3>
                                            <p className="text-slate-500 mb-6">You haven't enrolled in any courses yet.</p>
                                            <button onClick={() => navigate('/courses')}
                                                className="px-6 py-3 bg-tech-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-xs uppercase tracking-wider">
                                                Browse Courses
                                            </button>
                                        </div>
                                    ) : enrollments.map(enrollment => (
                                        <div key={enrollment.id} className="glass-panel p-6 rounded-3xl border border-white/50 shadow-xl bg-white/60 hover:shadow-2xl transition-all group">
                                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                                <div className="w-full md:w-48 h-auto aspect-video rounded-2xl bg-slate-200 overflow-hidden flex-shrink-0">
                                                    <img src="/Public/uiux-course-thumbnail.webp" alt={enrollment.course_name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-grow w-full">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="text-xl font-bold text-app-slate group-hover:text-tech-blue transition-colors">{enrollment.course_name}</h3>
                                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full">Enrolled</span>
                                                    </div>
                                                    <p className="text-slate-500 text-sm">Enrolled on: <span className="font-semibold text-app-slate">{new Date(enrollment.enrolled_at).toLocaleDateString()}</span></p>
                                                    <p className="text-slate-400 text-xs mt-1 font-mono">Payment ID: {enrollment.payment_id}</p>
                                                </div>
                                                <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                                                    <button onClick={() => navigate('/play/ui-ux-design')}
                                                        className="w-full md:w-auto px-6 py-3 bg-tech-blue text-white font-bold rounded-xl shadow-lg shadow-tech-blue/20 hover:bg-blue-700 transition-all text-xs uppercase tracking-wider">
                                                        Continue
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Certificates */}
                        {activeTab === 'certificates' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-3xl font-black text-app-slate mb-6">My Certificates</h2>
                                <div className="glass-panel p-12 rounded-3xl border border-white/50 shadow-xl bg-white/60 text-center">
                                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                                        <Award size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold text-app-slate mb-2">No Certificates Yet</h3>
                                    <p className="text-slate-500 max-w-md mx-auto">Complete your enrolled courses to earn certificates and showcase your skills.</p>
                                    <button onClick={() => setActiveTab('courses')}
                                        className="mt-6 px-6 py-3 bg-tech-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-xs uppercase tracking-wider">
                                        Go to Courses
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
