import React from 'react';
import { companyData } from '../data/companyData';
import { 
  Target, 
  Cpu, 
  MessageSquare, 
  Puzzle, 
  FileCode2, 
  LifeBuoy 
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0: return <Target className="w-5 h-5 text-blue-400" />;
      case 1: return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 2: return <MessageSquare className="w-5 h-5 text-sky-400" />;
      case 3: return <Puzzle className="w-5 h-5 text-blue-400" />;
      case 4: return <FileCode2 className="w-5 h-5 text-indigo-400" />;
      case 5: return <LifeBuoy className="w-5 h-5 text-teal-400" />;
      default: return <Target className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#050811] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
            Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Why NEXOVIRA AI Solution
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            We operate as your dedicated technical partner. We prioritize clarity, technical durability, and practical business impact over marketing buzzwords.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.whyUsPillars.map((pillar, idx) => (
            <div 
              key={pillar.title}
              className="bg-[#0b1222] border border-blue-900/30 rounded-xl p-6 hover:border-blue-500/40 hover:bg-[#0e172c] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center mb-5">
                  {getPillarIcon(idx)}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                <span>Pillar 0{idx + 1}</span>
                <span className="text-blue-400 font-medium">Core Value</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
