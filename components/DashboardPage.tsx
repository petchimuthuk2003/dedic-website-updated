import React, { useState } from 'react';
import { User, BookOpen, Award, LogOut, ChevronRight, GraduationCap } from 'lucide-react';

const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const [userData, setUserData] = useState({
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        location: 'New York, USA'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    // Dummy Data
    const enrolledCourses = [
        {
            id: 1,
            name: 'UI/UX Design Master Course',
            progress: 75,
            image: '/Public/uiux-course-thumbnail.webp', // Assuming this exists or using a placeholder if not, but user mentioned it before
            nextLesson: 'Prototyping in Figma',
        },
        {
            id: 2,
            name: 'Full Stack Web Development',
            progress: 30,
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop', // Placeholder
            nextLesson: 'React Hooks Deep Dive',
        }
    ];

    const certificates = [
        {
            id: 1,
            name: 'Introduction to Python',
            date: 'Jan 15, 2026',
            id_code: 'DEDIC-PY-2026-001'
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative">
            {/* Background Elements */}
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
                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="glass-panel p-6 rounded-3xl sticky top-32 border border-white/50 shadow-xl backdrop-blur-xl bg-white/60">
                            <div className="flex items-center gap-4 mb-8 p-4 bg-white/50 rounded-2xl border border-slate-100">
                                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center text-tech-blue">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-app-slate">John Doe</h3>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Student</p>
                                </div>
                            </div>

                            <nav className="space-y-2">
                                <button
                                    onClick={() => setActiveTab('profile')}
                                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl transition-all font-bold text-sm uppercase tracking-wider ${activeTab === 'profile'
                                        ? 'bg-tech-blue text-white shadow-lg shadow-tech-blue/30'
                                        : 'text-slate-500 hover:bg-white hover:text-tech-blue'
                                        }`}
                                >
                                    <User size={18} /> Profile
                                </button>
                                <button
                                    onClick={() => setActiveTab('courses')}
                                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl transition-all font-bold text-sm uppercase tracking-wider ${activeTab === 'courses'
                                        ? 'bg-tech-blue text-white shadow-lg shadow-tech-blue/30'
                                        : 'text-slate-500 hover:bg-white hover:text-tech-blue'
                                        }`}
                                >
                                    <BookOpen size={18} /> Enrolled Courses
                                </button>
                                <button
                                    onClick={() => setActiveTab('certificates')}
                                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl transition-all font-bold text-sm uppercase tracking-wider ${activeTab === 'certificates'
                                        ? 'bg-tech-blue text-white shadow-lg shadow-tech-blue/30'
                                        : 'text-slate-500 hover:bg-white hover:text-tech-blue'
                                        }`}
                                >
                                    <Award size={18} /> Certificates
                                </button>

                            </nav>

                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <button className="w-full flex items-center gap-3 px-6 py-4 rounded-xl transition-all font-bold text-sm uppercase tracking-wider text-red-500 hover:bg-red-50">
                                    <LogOut size={18} /> Logout
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:w-3/4">

                        {/* Profile Section */}
                        {activeTab === 'profile' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="glass-panel p-8 rounded-3xl border border-white/50 shadow-xl bg-white/60">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl font-black text-app-slate tracking-tight flex items-center gap-3">
                                            <User className="text-tech-blue" /> Personal Information
                                        </h2>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={userData.fullName}
                                                    onChange={handleInputChange}
                                                    className="w-full p-4 bg-white rounded-xl border border-slate-100 font-semibold text-app-slate focus:outline-none focus:border-tech-blue transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={userData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full p-4 bg-white rounded-xl border border-slate-100 font-semibold text-app-slate focus:outline-none focus:border-tech-blue transition-colors"
                                                />
                                            </div>

                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Location</label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={userData.location}
                                                    onChange={handleInputChange}
                                                    className="w-full p-4 bg-white rounded-xl border border-slate-100 font-semibold text-app-slate focus:outline-none focus:border-tech-blue transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={userData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full p-4 bg-white rounded-xl border border-slate-100 font-semibold text-app-slate focus:outline-none focus:border-tech-blue transition-colors"
                                                />
                                            </div>


                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-end">
                                        <button className="px-8 py-3 bg-tech-blue text-white font-bold rounded-xl shadow-lg shadow-tech-blue/20 hover:bg-blue-700 transition-all text-sm uppercase tracking-wider">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>

                                <div className="glass-panel p-8 rounded-3xl border border-white/50 shadow-xl bg-white/60">
                                    <h2 className="text-2xl font-black text-app-slate tracking-tight flex items-center gap-3 mb-6">
                                        <BookOpen className="text-tech-blue" /> Learning Stats
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                                            <div className="text-3xl font-black text-tech-blue mb-1">2</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Courses Active</div>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-center">
                                            <div className="text-3xl font-black text-green-600 mb-1">1</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Completed</div>
                                        </div>
                                        <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 text-center">
                                            <div className="text-3xl font-black text-purple-600 mb-1">12</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Hours Learned</div>
                                        </div>
                                        <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 text-center">
                                            <div className="text-3xl font-black text-orange-600 mb-1">1</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Certificates</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Enrolled Courses Section */}
                        {activeTab === 'courses' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-3xl font-black text-app-slate mb-6">My Courses</h2>
                                <div className="grid gap-6">
                                    {enrolledCourses.map(course => (
                                        <div key={course.id} className="glass-panel p-6 rounded-3xl border border-white/50 shadow-xl bg-white/60 hover:shadow-2xl transition-all group">
                                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                                <div className="w-full md:w-48 h-auto aspect-video rounded-2xl bg-slate-200 overflow-hidden flex-shrink-0">
                                                    {/* Use a real image if available, else color block */}
                                                    <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-grow w-full">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="text-xl font-bold text-app-slate group-hover:text-tech-blue transition-colors">{course.name}</h3>
                                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full">In Progress</span>
                                                    </div>
                                                    <p className="text-slate-500 text-sm mb-4">Next Lesson: <span className="font-semibold text-app-slate">{course.nextLesson}</span></p>

                                                    <div className="mb-2 flex justify-between text-xs font-bold text-slate-500">
                                                        <span>Progress</span>
                                                        <span>{course.progress}%</span>
                                                    </div>
                                                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                                        <div className="h-full bg-tech-blue rounded-full" style={{ width: `${course.progress}%` }}></div>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                                                    <button className="w-full md:w-auto px-6 py-3 bg-tech-blue text-white font-bold rounded-xl shadow-lg shadow-tech-blue/20 hover:bg-blue-700 transition-all text-xs uppercase tracking-wider">
                                                        Continue
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Certificates Section */}
                        {activeTab === 'certificates' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-3xl font-black text-app-slate mb-6">My Certificates</h2>

                                {certificates.length > 0 ? (
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {certificates.map(cert => (
                                            <div key={cert.id} className="glass-panel p-1 rounded-3xl border border-white/50 shadow-xl bg-white/60 hover:scale-[1.02] transition-transform">
                                                <div className="bg-white rounded-[20px] p-6 border border-slate-100 h-full flex flex-col items-center text-center relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                                        <Award size={100} />
                                                    </div>
                                                    <div className="w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4">
                                                        <GraduationCap size={32} />
                                                    </div>
                                                    <h3 className="text-lg font-bold text-app-slate mb-2">{cert.name}</h3>
                                                    <p className="text-slate-500 text-sm mb-6">Completed on {cert.date}</p>

                                                    <div className="mt-auto w-full">
                                                        <div className="text-xs text-slate-400 font-mono mb-4">{cert.id_code}</div>
                                                        <button className="w-full px-4 py-3 border border-slate-200 text-slate-600 font-bold rounded-xl hover:border-tech-blue hover:text-tech-blue transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2">
                                                            Download PDF <ChevronRight size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="glass-panel p-12 rounded-3xl border border-white/50 shadow-xl bg-white/60 text-center">
                                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                                            <Award size={40} />
                                        </div>
                                        <h3 className="text-xl font-bold text-app-slate mb-2">No Certificates Yet</h3>
                                        <p className="text-slate-500 max-w-md mx-auto">Complete your enrolled courses to earn certificates and showcase your skills.</p>
                                        <button onClick={() => setActiveTab('courses')} className="mt-6 px-6 py-3 bg-tech-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-xs uppercase tracking-wider">
                                            Go to Courses
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
