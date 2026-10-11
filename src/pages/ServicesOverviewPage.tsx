import React from 'react';
import { 
  ArrowRight, 
  Code2, 
  Globe, 
  BarChart3, 
  Layers, 
  Bot, 
  Cpu, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { CallToAction } from '../components/CallToAction';

interface ServicesOverviewPageProps {
  navigate: (path: string) => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ navigate }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-sky-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-400" />;
      case 'Bot': return <Bot className="w-6 h-6 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-blue-400" />;
      default: return <Code2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14]">
      
      {/* Header Banner */}
      <section className="relative pt-16 pb-20 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Capabilities & Architecture
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
              Our Technical Services
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              NEXOVIRA AI Solution provides custom engineering across seven core disciplines. We build systems centered on your business requirements, providing the software and AI capabilities required to simplify operations and scale predictably.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="bg-[#0b1222] border border-blue-900/30 rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Info Column */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800/40 text-blue-400">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-950 border border-blue-900">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm text-blue-300 font-medium">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.overview}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => navigate(`/services/${service.slug}`)}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <span>Explore Dedicated {service.title} Page</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Capabilities Column */}
                <div className="lg:col-span-7 bg-[#070b14] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Core Modules & Key Capabilities
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.keyCapabilities.slice(0, 4).map((cap, cIdx) => (
                      <div key={cIdx} className="space-y-1.5">
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>{cap.title}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pl-6">
                          {cap.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
                    <div className="text-slate-400">
                      Typical Deliverables:{' '}
                      <span className="text-slate-200">
                        {service.keyCapabilities[0]?.deliverables.slice(0, 2).join(' · ')}
                      </span>
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                    >
                      <span>Scope This Service</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <CallToAction navigate={navigate} />

    </div>
  );
};
