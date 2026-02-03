
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: 'Internships', href: '/internships', isRoute: true },
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
            <Link to="/login" className="px-6 py-3 border border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white text-[11px] font-black rounded-xl transition-all uppercase tracking-[0.2em]">
              Login
            </Link>
            <Link to="/signup" className="px-8 py-3 bg-tech-blue hover:bg-blue-700 text-white text-[11px] font-black rounded-xl transition-all flex items-center gap-3 shadow-xl shadow-tech-blue/20 uppercase tracking-[0.2em] group">
              Signup <User size={14} />
            </Link>
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
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-3xl transition-all duration-700 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} flex flex-col items-center justify-center p-8 gap-16 z-[101]`}>
        <button
          className="absolute top-12 right-12 p-5 text-app-slate hover:text-tech-blue transition-colors bg-slate-100 rounded-full"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {navLinks.map((link, i) => (
          link.isRoute ? (
            <Link
              key={link.name}
              to={link.href}
              className={`text-5xl font-extrabold text-app-slate hover:text-tech-blue transition-all tracking-tighter ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ) : (
            <a
              key={link.name}
              href={link.href}
              className={`text-5xl font-extrabold text-app-slate hover:text-tech-blue transition-all tracking-tighter ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          )
        ))}

        <div className="flex flex-col w-full max-w-sm gap-4 mt-8">
          <Link
            to="/login"
            className="w-full py-5 bg-white border border-tech-blue text-tech-blue font-black text-xl rounded-2xl shadow-sm uppercase tracking-widest flex items-center justify-center hover:bg-tech-blue hover:text-white transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="w-full py-5 bg-tech-blue text-white font-black text-xl rounded-2xl shadow-2xl uppercase tracking-widest flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
