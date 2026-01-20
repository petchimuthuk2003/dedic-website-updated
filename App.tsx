import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ServicesPage from './components/ServicesPage';
import CoursesPage from './components/CoursesPage';
import InternshipsPage from './components/InternshipsPage';
import TechnologiesPage from './components/TechnologiesPage';
import UiUxDesignCoursePage from './components/UiUxDesignCoursePage';
import WebDevelopmentCoursePage from './components/WebDevelopmentCoursePage';
import MobileAppDevelopmentCoursePage from './components/MobileAppDevelopmentCoursePage';
import FullStackDevelopmentCoursePage from './components/FullStackDevelopmentCoursePage';
import PythonCoursePage from './components/PythonCoursePage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-tech-blue/20 selection:text-tech-blue">
        {/* Soft Ambient Lighting */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-tech-blue/5 rounded-full blur-[140px] animate-pulse-slow"></div>
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/ui-ux-design" element={<UiUxDesignCoursePage />} />
          <Route path="/courses/web-development" element={<WebDevelopmentCoursePage />} />
          <Route path="/courses/mobile-app-development" element={<MobileAppDevelopmentCoursePage />} />
          <Route path="/courses/fullstack-development" element={<FullStackDevelopmentCoursePage />} />
          <Route path="/courses/python" element={<PythonCoursePage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
