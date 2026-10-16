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
  Building2,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Factory,
  CheckCircle2
} from 'lucide-react';
import { HeroArcVisual } from '../components/HeroArcVisual';
import { ConceptDemonstrations } from '../components/ConceptDemonstrations';
import { ProcessSection } from '../components/ProcessSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { ReviewSection } from '../components/ReviewSection';
import { FaqSection } from '../components/FaqSection';
import { CallToAction } from '../components/CallToAction';
import { TeamIntroSection } from '../components/TeamIntroSection';
import { servicesData } from '../data/servicesData';
import { industriesData } from '../data/industriesData';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-sky-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-400" />;
      default: return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'real-estate': return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'education': return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'ecommerce': return <ShoppingCart className="w-5 h-5 text-sky-400" />;
      case 'professional-services': return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 'manufacturing': return <Factory className="w-5 h-5 text-teal-400" />;
      default: return <Briefcase className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14]">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-24 md:py-28 overflow-hidden bg-tech-grid">
        {/* Soft radial background gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline and Positioning */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
                <span>NEXOVIRA AI Solution</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">Custom Engineering & AI Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.12] text-balance">
                Intelligent Software. Practical AI. Built for Your Business.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                We build custom software, websites, CRM and ERP systems, AI agents, and data solutions that help businesses simplify operations and grow.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-all duration-150 shadow-lg shadow-blue-900/40 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/services')}
                  className="px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Our Services</span>
                </button>
              </div>

              {/* Quiet Core Competencies */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
                <span>Enterprise Applications</span>
                <span className="text-slate-700">·</span>
                <span>Custom CRM/ERP</span>
                <span className="text-slate-700">·</span>
                <span>Autonomous AI Agents</span>
                <span className="text-slate-700">·</span>
                <span>Data Pipelines</span>
              </div>
            </div>

            {/* Right Column: Original Glowing Arc & Orbital Visual */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <HeroArcVisual />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Company Introduction Preview Section */}
      <section className="py-20 bg-[#050811] relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1222] border border-blue-900/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                  Company Introduction
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display">
                  A Technology Partner That Understands Business Requirements
                </h2>
                <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                  NEXOVIRA AI Solution helps startups, small and medium businesses, and enterprises build custom software, develop digital platforms, automate business processes, and use data and AI effectively. We engineer solutions that adapt to your operating realities—delivering practical, maintainable software with full intellectual property ownership.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => navigate('/about-us')}
                    className="px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Read Full Company Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-5 py-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Book a Discovery Call</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#070b14] border border-slate-800/80 rounded-2xl p-6 space-y-3.5 text-xs">
                <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
                  Our Engineering Commitments
                </div>
                <div className="space-y-2.5 text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>100% Code Ownership:</strong> You own all custom repositories, database schemas, and intellectual property.</span>
                  </div>

      {/* 3. Services Overview Section */}
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Zero Per-Seat Fees:</strong> Custom systems that scale with your team without recurring licensing penalties.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Grounded AI Systems:</strong> Enterprise guardrails and private data isolation for safe, reliable automation.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
                Services Overview
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
                Engineered for Business Outcomes
              </h2>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Seven dedicated technology services designed to modernize legacy operations, automate workflows, and create competitive digital advantages.
              </p>
            </div>

            <button
              onClick={() => navigate('/services')}
              className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 group shrink-0 cursor-pointer"
            >
              <span>Explore Services Overview Page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 7 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => navigate(`/services/${service.slug}`)}
                className={`bg-[#0b1222] border border-blue-900/30 rounded-2xl p-7 flex flex-col justify-between group cursor-pointer hover:border-blue-500/50 hover:bg-[#0e172c] transition-all duration-200 ${
                  idx === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800/40 text-blue-400 group-hover:border-blue-500/60 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Learn more</span>
                  <div className="flex items-center gap-1 text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Explore Dedicated Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. What We Can Build (Concept Demonstrations) */}
      <ConceptDemonstrations />

      {/* 5. How We Work */}
      <ProcessSection />

      {/* 6. Why NEXOVIRA AI Solution */}
      <WhyUsSection />

      {/* 7. Team Introduction */}
      <TeamIntroSection />

      {/* 8. Industries & Use Cases Preview */}
      <section className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
                Domain Alignment
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
                Industries and Use Cases
              </h2>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Representative examples of custom platforms, automation engines, and data intelligence tools we discuss and develop for specific verticals.
              </p>
            </div>

            <button
              onClick={() => navigate('/industries')}
              className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 group shrink-0 cursor-pointer"
            >
              <span>Explore All 5 Sectors on Industries Page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                onClick={() => navigate('/industries')}
                className="bg-[#0b1222] border border-blue-900/30 rounded-xl p-6 group cursor-pointer hover:border-blue-500/40 hover:bg-[#0e172c] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 w-fit mb-4 group-hover:border-blue-500/40 transition-colors">
                    {getIndustryIcon(ind.id)}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {ind.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-blue-400 font-medium">
                  <span>View Custom Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Client Reviews & Feedback */}
      <ReviewSection navigate={navigate} />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Final Call to Action */}
      <CallToAction navigate={navigate} />

    </div>
  );
};
