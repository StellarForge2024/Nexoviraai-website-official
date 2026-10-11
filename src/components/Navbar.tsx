import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Code2, 
  Globe, 
  BarChart3, 
  Layers, 
  Bot, 
  Cpu, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'Globe': return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-sky-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-blue-400" />;
      case 'Bot': return <Bot className="w-4 h-4 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-blue-400" />;
      default: return <Code2 className="w-4 h-4 text-blue-400" />;
    }
  };

  const isHomeActive = currentPath === '/' || currentPath === '';
  const isServicesActive = currentPath === '/services' || currentPath.startsWith('/services/');
  const isIndustriesActive = currentPath === '/industries';
  const isAboutActive = currentPath === '/about-us' || currentPath === '/about';
  const isContactActive = currentPath === '/contact';

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-black/40' 
          : 'bg-[#070b14]/70 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="shrink-0">
            <button 
              onClick={() => handleNavClick('/')}
              className="text-left group flex items-center gap-2 focus:outline-none cursor-pointer"
              aria-label="NEXOVIRA AI Solution Home"
            >
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-400 whitespace-nowrap">
                NEXOVIRA <span className="text-blue-500 font-semibold">AI Solution</span>
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {/* Home */}
            <button 
              onClick={() => handleNavClick('/')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-2 ${
                isHomeActive 
                  ? 'text-white font-semibold after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:shadow-[0_0_8px_rgba(59,130,246,0.8)]' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-2 ${
                  isServicesActive 
                    ? 'text-white font-semibold after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:shadow-[0_0_8px_rgba(59,130,246,0.8)]' 
                    : 'text-slate-300 hover:text-white'
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
              </button>

              {/* Polished Services Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[540px] rounded-xl bg-[#0c1322] border border-blue-900/40 p-4 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 z-50"
                  role="menu"
                >
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 px-2">
                    <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Our Technical Services</span>
                    <button
                      onClick={() => handleNavClick('/services')}
                      className="text-xs text-slate-300 hover:text-white flex items-center gap-1 group font-medium cursor-pointer"
                    >
                      <span>Services Overview</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-1.5">
                    {servicesData.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleNavClick(`/services/${service.slug}`)}
                        className={`w-full flex items-start gap-3 p-2.5 rounded-lg text-left transition-colors group cursor-pointer ${
                          currentPath === `/services/${service.slug}`
                            ? 'bg-blue-600/15 border border-blue-500/30'
                            : 'hover:bg-slate-800/60 border border-transparent'
                        }`}
                        role="menuitem"
                      >
                        <div className="mt-0.5 p-1.5 rounded-md bg-blue-950/60 border border-blue-800/30 group-hover:border-blue-600/50 transition-colors shrink-0">
                          {getServiceIcon(service.iconName)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">
                            {service.title}
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                            {service.shortDesc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries */}
            <button 
              onClick={() => handleNavClick('/industries')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-2 ${
                isIndustriesActive 
                  ? 'text-white font-semibold after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:shadow-[0_0_8px_rgba(59,130,246,0.8)]' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Industries
            </button>

            {/* About Us */}
            <button 
              onClick={() => handleNavClick('/about-us')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-2 ${
                isAboutActive 
                  ? 'text-white font-semibold after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:shadow-[0_0_8px_rgba(59,130,246,0.8)]' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              About Us
            </button>

            {/* Contact */}
            <button 
              onClick={() => handleNavClick('/contact')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-2 ${
                isContactActive 
                  ? 'text-white font-semibold after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:shadow-[0_0_8px_rgba(59,130,246,0.8)]' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('/contact')}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-all duration-150 shadow-md shadow-blue-900/40 hover:shadow-blue-600/30 hover:scale-[1.02] whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-blue-900/40 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('/')}
              className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isHomeActive 
                  ? 'bg-blue-600/20 text-blue-400 font-semibold border-l-2 border-blue-500 pl-3' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Home
            </button>

            {/* Mobile Services Section */}
            <div className="pt-2 pb-1 border-t border-slate-800/80">
              <div className="flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <span>Our Services</span>
                <button
                  onClick={() => handleNavClick('/services')}
                  className={`text-xs hover:text-white transition-colors ${isServicesActive ? 'text-blue-300 font-semibold underline' : 'text-slate-400'}`}
                >
                  Overview Page
                </button>
              </div>
              <div className="space-y-1 mt-1 pl-2">
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleNavClick(`/services/${service.slug}`)}
                    className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium flex items-center gap-2.5 transition-colors ${
                      currentPath === `/services/${service.slug}`
                        ? 'bg-blue-600/25 text-blue-300 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    {getServiceIcon(service.iconName)}
                    <span>{service.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('/industries')}
              className={`text-left px-3 py-2.5 rounded-md text-sm font-medium border-t border-slate-800/80 transition-colors ${
                isIndustriesActive 
                  ? 'bg-blue-600/20 text-blue-400 font-semibold border-l-2 border-blue-500 pl-3' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Industries
            </button>

            <button
              onClick={() => handleNavClick('/about-us')}
              className={`text-left px-3 py-2.5 rounded-md text-sm font-medium border-t border-slate-800/80 transition-colors ${
                isAboutActive 
                  ? 'bg-blue-600/20 text-blue-400 font-semibold border-l-2 border-blue-500 pl-3' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`text-left px-3 py-2.5 rounded-md text-sm font-medium border-t border-slate-800/80 transition-colors ${
                isContactActive 
                  ? 'bg-blue-600/20 text-blue-400 font-semibold border-l-2 border-blue-500 pl-3' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Contact
            </button>

            <div className="pt-4">
              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-900/50"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
