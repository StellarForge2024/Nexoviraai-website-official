import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { getServiceBySlug } from './data/servicesData';
import { AlertTriangle } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Synchronize browser history and popstate navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Normalize path (handle trailing slashes cleanly)
  const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/') 
    ? currentPath.slice(0, -1) 
    : currentPath;

  // Sync document title dynamically across pages
  useEffect(() => {
    const baseTitle = 'NEXOVIRA AI Solution';
    if (normalizedPath === '/' || normalizedPath === '') {
      document.title = `${baseTitle} | Intelligent Software & Practical AI`;
    } else if (normalizedPath === '/services') {
      document.title = `Technical Services | ${baseTitle}`;
    } else if (normalizedPath.startsWith('/services/')) {
      const slug = normalizedPath.replace('/services/', '');
      const service = getServiceBySlug(slug);
      if (service) {
        document.title = `${service.title} | ${baseTitle}`;
      } else {
        document.title = `Services | ${baseTitle}`;
      }
    } else if (normalizedPath === '/industries') {
      document.title = `Industries & Use Cases | ${baseTitle}`;
    } else if (normalizedPath === '/about-us' || normalizedPath === '/about') {
      document.title = `About Us | ${baseTitle}`;
    } else if (normalizedPath === '/contact') {
      document.title = `Book a Consultation | ${baseTitle}`;
    } else {
      document.title = `404 - Page Not Found | ${baseTitle}`;
    }
  }, [normalizedPath]);

  // Route dispatcher rendering distinct pages with their own complete content
  const renderCurrentPage = () => {
    if (normalizedPath === '/' || normalizedPath === '') {
      return <HomePage navigate={navigate} />;
    }

    if (normalizedPath === '/services') {
      return <ServicesOverviewPage navigate={navigate} />;
    }

    if (normalizedPath.startsWith('/services/')) {
      const slug = normalizedPath.replace('/services/', '');
      const service = getServiceBySlug(slug);
      if (service) {
        return <ServiceDetailPage service={service} navigate={navigate} />;
      }
    }

    if (normalizedPath === '/industries') {
      return <IndustriesPage navigate={navigate} />;
    }

    if (normalizedPath === '/about-us' || normalizedPath === '/about') {
      return <AboutPage navigate={navigate} />;
    }

    if (normalizedPath === '/contact') {
      return <ContactPage navigate={navigate} />;
    }

    // 404 Fallback for unknown URLs
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 text-center">
        <div className="max-w-md mx-auto space-y-5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/30">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-white font-display">Page Not Found</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The requested destination could not be located. You can return to our homepage or explore our core technical services below.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              Return Home
            </button>
            <button
              onClick={() => navigate('/services')}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Browse Services
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar currentPath={normalizedPath} navigate={navigate} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
