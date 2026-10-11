import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Overview (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => navigate('/')} 
              className="text-left group inline-block focus:outline-none"
            >
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                NEXOVIRA <span className="text-blue-500 font-semibold">AI Solution</span>
              </span>
            </button>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              We help startups, small and medium businesses, and enterprises build custom software, develop digital platforms, automate business processes, and use data and AI effectively.
            </p>

            <div className="pt-2">
              <a 
                href={`mailto:${companyData.email}`}
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{companyData.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => navigate('/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Services Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/industries')}
                  className="hover:text-white transition-colors text-left"
                >
                  Industries & Use Cases
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/about-us')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services 1-4 */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => navigate(`/services/${service.slug}`)}
                    className="hover:text-white transition-colors text-left line-clamp-1"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services 5-7 & Capabilities */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              AI & Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(4).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => navigate(`/services/${service.slug}`)}
                    className="hover:text-white transition-colors text-left line-clamp-1"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 group"
                >
                  <span>Request Custom Architecture</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} NEXOVIRA AI Solution. All rights reserved.</p>
          <p className="text-slate-300">
            Professional Technology Partner · Custom Software · Data & AI Systems
          </p>
        </div>
      </div>
    </footer>
  );
};
