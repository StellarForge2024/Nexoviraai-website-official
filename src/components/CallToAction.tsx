import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { companyData } from '../data/companyData';

interface CallToActionProps {
  navigate: (path: string) => void;
  title?: string;
  subtitle?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({ 
  navigate,
  title = "Have a project in mind? Let’s build the right solution for your business.",
  subtitle = "Whether you are modernizing existing operational systems, launching an MVP, or deploying governed AI agents, we architect software that delivers measurable value."
}) => {
  return (
    <section className="py-24 bg-[#050811] relative border-t border-slate-800/80 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="bg-[#0b1222] border border-blue-900/40 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-3">
            Start Your Engagement
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display max-w-2xl mx-auto leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-all duration-150 shadow-lg shadow-blue-900/40 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${companyData.email}`}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{companyData.email}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
