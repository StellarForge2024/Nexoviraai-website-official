import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Code2, 
  Globe, 
  BarChart3, 
  Layers, 
  Bot, 
  Cpu, 
  TrendingUp, 
  ChevronRight,
  ShieldCheck,
  FolderKanban
} from 'lucide-react';
import { ServiceItem } from '../types';
import { FaqSection } from '../components/FaqSection';
import { CallToAction } from '../components/CallToAction';

interface ServiceDetailPageProps {
  service: ServiceItem;
  navigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, navigate }) => {
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
      
      {/* 1. Service Hero Banner */}
      <section className="relative pt-16 pb-20 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <button onClick={() => navigate('/services')} className="hover:text-white transition-colors">
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-950/70 border border-blue-800/40 text-blue-400">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                  NEXOVIRA AI Solution Service
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-blue-300 font-medium leading-snug">
                {service.tagline}
              </p>

              <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
                {service.overview}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-all shadow-md shadow-blue-900/40 flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/services')}
                  className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                >
                  <span>Back to Services Overview</span>
                </button>
              </div>
            </div>

            {/* Quick Benefits Sidebar Card */}
            <div className="lg:col-span-4 bg-[#0b1222] border border-blue-900/40 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>Potential Business Benefits</span>
              </div>
              <div className="space-y-3">
                {service.businessBenefits.map((item, bIdx) => (
                  <div key={bIdx} className="p-3 bg-[#070b14] rounded-lg border border-slate-800/80">
                    <div className="text-xs font-bold text-blue-300">{item.metric}</div>
                    <div className="text-xs text-slate-300 mt-1">{item.benefit}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Business Problems Addressed */}
      <section className="py-20 bg-[#050811] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Operational Realities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              Business Problems We Address
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Common bottlenecks, inefficiencies, and risks our custom {service.title} architecture resolves for organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.businessProblems.map((problem, pIdx) => (
              <div 
                key={pIdx}
                className="bg-[#0b1222] border border-blue-900/25 rounded-xl p-5 flex items-start gap-3.5 hover:border-blue-500/30 transition-colors"
              >
                <AlertCircle className="w-5 h-5 text-amber-400/90 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Key Capabilities & Possible Deliverables */}
      <section className="py-20 bg-[#070b14] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
              System Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              Key Capabilities & Possible Deliverables
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Modular components, backend services, and technical deliverables tailored to your scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.keyCapabilities.map((cap, cIdx) => (
              <div 
                key={cIdx}
                className="bg-[#0b1222] border border-blue-900/30 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">
                      {cap.title}
                    </h3>
                    <span className="font-mono text-xs text-blue-400 font-semibold">
                      0{cIdx + 1}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Possible Deliverables
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {cap.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Relevant Example Use Cases */}
      <section className="py-20 bg-[#050811] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Practical Implementation Scenarios
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              Relevant Example Use Cases
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Illustrative scenarios demonstrating how our engineering solves business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.exampleUseCases.map((useCase, uIdx) => (
              <div 
                key={uIdx}
                className="bg-[#0b1222] border border-blue-900/30 rounded-2xl p-7 space-y-4"
              >
                <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <FolderKanban className="w-4 h-4" />
                  <span>Use Case Scenario 0{uIdx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {useCase.title}
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="p-3.5 rounded-lg bg-[#070b14] border border-slate-800/80">
                    <span className="font-semibold text-slate-300 block mb-1">Challenge / Context:</span>
                    <p className="text-slate-400 text-xs leading-relaxed">{useCase.scenario}</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-blue-950/30 border border-blue-900/40">
                    <span className="font-semibold text-blue-300 block mb-1">NEXOVIRA Solution:</span>
                    <p className="text-slate-300 text-xs leading-relaxed">{useCase.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Development Approach */}
      <section className="py-20 bg-[#070b14] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Execution Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              Development Approach for {service.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Structured phases ensuring your requirements are faithfully translated into dependable software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.developmentApproach.map((step, sIdx) => (
              <div 
                key={sIdx}
                className="bg-[#0b1222] border border-blue-900/30 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-950 border border-blue-900 mb-3 inline-block">
                    Phase {step.step}
                  </span>
                  
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Service-Specific FAQs */}
      <FaqSection 
        customFaqs={service.faqs}
        title={`${service.title} FAQs`}
        subtitle={`Common questions regarding engineering, scoping, and maintenance for ${service.title}.`}
      />

      {/* 7. Call To Action with Discuss Your Project */}
      <CallToAction 
        navigate={navigate}
        title={`Ready to scope your ${service.title} project?`}
        subtitle="Contact our engineering team to review requirements, explore architecture options, and receive an itemized proposal."
      />

    </div>
  );
};
