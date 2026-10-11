import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  ShoppingCart, 
  Briefcase, 
  Factory, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { CallToAction } from '../components/CallToAction';

interface IndustriesPageProps {
  navigate: (path: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ navigate }) => {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'real-estate': return <Building2 className="w-6 h-6 text-blue-400" />;
      case 'education': return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'ecommerce': return <ShoppingCart className="w-6 h-6 text-sky-400" />;
      case 'professional-services': return <Briefcase className="w-6 h-6 text-indigo-400" />;
      case 'manufacturing': return <Factory className="w-6 h-6 text-teal-400" />;
      default: return <Briefcase className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14]">
      
      {/* Header Banner */}
      <section className="relative pt-16 pb-20 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Industry Verticals & Custom Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
              Industries and Use Cases
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Every vertical operates under distinct compliance rules, transaction cadences, and operational constraints. Here are representative examples of custom applications, portals, and AI systems NEXOVIRA AI Solution discusses and develops for key business sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Breakdown List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industriesData.map((ind, idx) => (
            <div
              key={ind.id}
              id={ind.id}
              className="bg-[#0b1222] border border-blue-900/30 rounded-2xl p-8 sm:p-10 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Info Column */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800/40 text-blue-400">
                      {getIndustryIcon(ind.id)}
                    </div>
                    <span className="font-mono text-xs text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-950 border border-blue-900">
                      Sector 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                      {ind.name}
                    </h2>
                    <p className="mt-1 text-sm text-blue-300 font-medium">
                      {ind.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {ind.overview}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Common Sector Bottlenecks We Address
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {ind.challenges.map((chal, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400/90 shrink-0 mt-0.5" />
                          <span>{chal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => navigate('/contact')}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <span>Discuss Your {ind.name} Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Solutions & Deliverables Column */}
                <div className="lg:col-span-7 bg-[#070b14] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Custom Solutions We Can Discuss & Build
                  </div>

                  <div className="space-y-4">
                    {ind.customSolutions.map((sol, sIdx) => (
                      <div key={sIdx} className="p-4 bg-slate-900/60 rounded-lg border border-slate-800/80 space-y-1">
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span>{sol.title}</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed pl-3.5">
                          {sol.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Example Deliverables & Modules
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {ind.deliverableExamples.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <CallToAction 
        navigate={navigate}
        title="Don’t see your exact industry listed?"
        subtitle="Our core competency is mapping bespoke software and AI architectures to unique operational models. Contact us to discuss your requirements."
      />

    </div>
  );
};
