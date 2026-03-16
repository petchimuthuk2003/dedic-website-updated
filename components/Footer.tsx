
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();

  if (location.pathname.includes('/play')) {
    return null;
  }

  return (
    <footer className="pt-12 md:pt-24 pb-8 bg-[#222222]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-10 md:mb-16">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-4">
              <img src="/Public/dedic-logo-white.png" alt="Dedic Infotech" className="h-12" />
            </div>
            <p className="text-white/80 text-base leading-relaxed font-medium">
              We define the cutting edge. Partnering with Dedic Infotech means securing your future in an increasingly complex digital landscape.
            </p>
            <div className="flex gap-4 md:gap-8">
              <a href="https://wa.me/918148376909" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-tech-blue hover:scale-110 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/dedic-infotech/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-tech-blue hover:scale-110 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577554199109" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-tech-blue hover:scale-110 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://www.instagram.com/dedicinfotech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-tech-blue hover:scale-110 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div className="md:pl-8">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-6 md:mb-16 text-white">Pages</h4>
            <ul className="space-y-4 md:space-y-8 text-xs md:text-[13px] text-white/70 font-bold uppercase tracking-wider md:tracking-widest">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/technologies" className="hover:text-white transition-colors">Technologies</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:pl-8">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-6 md:mb-16 text-white">Headquarters</h4>
            <ul className="space-y-4 md:space-y-8 text-xs md:text-sm text-white/70 font-medium">
              <li className="flex items-start gap-3 md:gap-4">
                <MapPin size={22} className="text-white shrink-0 w-[18px] md:w-[22px]" />
                <span> 147A, West Street,<br />Vadavoorpatti, Tirunelveli,<br />TN, India-627152</span>
              </li>
              <li className="flex items-center gap-3 md:gap-4">
                <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:business@dedicinfotech.com" className="hover:text-white transition-colors">business@dedicinfotech.com</a>
              </li>
              <li className="flex items-center gap-3 md:gap-4">
                <Phone size={22} className="text-white w-[18px] md:w-[22px]" />
                <span>+91 8148376909</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-white/60 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-center md:text-left">
          <p className="leading-relaxed">© {new Date().getFullYear()} DEDIC INFOTECH (OPC) PVT LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 md:gap-16">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
