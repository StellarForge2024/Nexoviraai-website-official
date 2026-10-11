import React from 'react';
import { companyData } from '../data/companyData';
import { Search, Compass, Code2, CheckCircle2, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Search className="w-5 h-5 text-blue-400" />;
      case 1: return <Compass className="w-5 h-5 text-cyan-400" />;
      case 2: return <Code2 className="w-5 h-5 text-sky-400" />;
      case 3: return <CheckCircle2 className="w-5 h-5 text-indigo-400" />;
      case 4: return <Rocket className="w-5 h-5 text-blue-400" />;
      default: return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
            Development Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            How We Work
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            A disciplined, milestone-driven approach ensuring predictable engineering, zero surprises, and continuous architectural alignment.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {companyData.processSteps.map((step, idx) => (
            <div 
              key={step.step}
              className="bg-[#0b1222] border border-blue-900/30 rounded-xl p-6 relative flex flex-col justify-between group hover:border-blue-500/50 hover:bg-[#0e172c] transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">
                    {step.step}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-blue-600/40 transition-colors">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {step.title}
                </h3>
                <div className="text-xs text-blue-400 font-medium mb-3">
                  {step.subtitle}
                </div>
                
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-slate-300">
                Stage {idx + 1} of 5
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
