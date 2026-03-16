
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut, loading } = useAuth();

  if (location.pathname.includes('/play')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '/about', isRoute: true },
    { name: 'Services', href: '/services', isRoute: true },
    { name: 'Courses', href: '/courses', isRoute: true },
    // { name: 'Internships', href: '/internships', isRoute: true },
    { name: 'Technologies', href: '/technologies', isRoute: true },
    { name: 'Contact', href: '/contact', isRoute: true },
  ];



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 md:px-12 ${isScrolled ? 'py-3' : 'py-8'
        }`}
    >
      <nav
        className={`container mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 ${isScrolled ? 'glass-panel px-8 py-3 rounded-[16px] shadow-xl' : 'bg-transparent'
          }`}
      >
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <img src="/Public/dedic-logo.png" alt="Dedic Infotech" className="h-6 object-contain" />
        </Link>


        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-[12px] font-black text-slate-500 hover:text-tech-blue uppercase tracking-[0.3em] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-blue transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] font-black text-slate-500 hover:text-tech-blue uppercase tracking-[0.3em] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-blue transition-all duration-500 group-hover:w-full"></span>
              </a>
            )
          ))}

          <div className="flex items-center gap-4 ml-4">
            {!loading && (user ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-tech-blue hover:text-tech-blue transition-all">
                  {user.user_metadata?.avatar_url
                    ? <img src={user.user_metadata.avatar_url} className="w-6 h-6 rounded-full" />
                    : <User size={14} />}
                  {user.user_metadata?.full_name?.split(' ')[0] || 'Dashboard'}
                </Link>
                <button onClick={signOut} className="p-2 text-slate-400 hover:text-red-500 transition-colors" title="Logout">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link to="/signup" className="px-8 py-3 bg-tech-blue hover:bg-blue-700 text-white text-[11px] font-black rounded-xl transition-all flex items-center gap-3 shadow-xl shadow-tech-blue/20 uppercase tracking-[0.2em] group">
                Log in / Sign up <User size={14} />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-3 bg-white border border-slate-200 rounded-2xl text-app-slate flex items-center justify-center hover:border-tech-blue/50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-3xl transition-all duration-700 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} flex flex-col items-center justify-center p-8 gap-8 z-[101]`}>
        <button
          className="absolute top-6 right-6 p-4 text-app-slate hover:text-tech-blue transition-colors bg-slate-100 rounded-full"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {navLinks.map((link, i) => (
          link.isRoute ? (
            <Link
              key={link.name}
              to={link.href}
              className={`text-3xl font-extrabold text-app-slate hover:text-tech-blue transition-all tracking-tighter ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ) : (
            <a
              key={link.name}
              href={link.href}
              className={`text-3xl font-extrabold text-app-slate hover:text-tech-blue transition-all tracking-tighter ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          )
        ))}

        <div className="flex flex-col w-full max-w-sm gap-4 mt-8">
          {!loading && (user ? (
            <>
              <Link to="/dashboard" className="w-full py-4 bg-tech-blue text-white font-black text-lg rounded-2xl shadow-2xl uppercase tracking-widest flex items-center justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard
              </Link>
              <button onClick={() => { signOut(); setIsMobileMenuOpen(false); }} className="w-full py-4 border border-red-200 text-red-500 font-black text-lg rounded-2xl uppercase tracking-widest">
                Logout
              </button>
            </>
          ) : (
            <Link to="/signup" className="w-full py-4 bg-tech-blue text-white font-black text-lg rounded-2xl shadow-2xl uppercase tracking-widest flex items-center justify-center" onClick={() => setIsMobileMenuOpen(false)}>
              Log in / Sign up
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
