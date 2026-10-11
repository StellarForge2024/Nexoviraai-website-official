import React from 'react';
import { 
  ArrowRight, 
  Target, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Users, 
  CheckCircle2, 
  Code2, 
  Mail 
} from 'lucide-react';
import { companyData } from '../data/companyData';
import { WhyUsSection } from '../components/WhyUsSection';
import { ProcessSection } from '../components/ProcessSection';
import { ReviewSection } from '../components/ReviewSection';
import { CallToAction } from '../components/CallToAction';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-[#070b14]">
      
      {/* Header Banner */}
      <section className="relative pt-16 pb-20 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
              About Our Company
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
              About NEXOVIRA AI Solution
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We help startups, small and medium businesses, and enterprises build custom software, develop digital platforms, automate business processes, and use data and AI effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Positioning */}
      <section className="py-20 bg-[#050811] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                Our Mission & Purpose
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
                A Professional Technology Partner Focused on Practical Business Impact
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                NEXOVIRA AI Solution was formed to bridge the divide between theoretical technology and day-to-day organizational operations. In an era where software products frequently force organizations to alter their established ways of working, we advocate for the opposite: engineering software and AI tools designed around your authentic operational realities.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                Whether you need to eliminate repetitive back-office spreadsheet tasks, modernize an aging operational system, build a customized customer engagement portal, or deploy governed AI agents to assist customer operations, we provide the architectural discipline and engineering rigor required to build systems that endure.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your Project With Our Leads</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0b1222] border border-blue-900/40 rounded-2xl p-8 space-y-6 shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Operating Commitments
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Full Intellectual Property Ownership</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Your organization retains 100% of custom code, database models, and assets created during your engagement.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">No Unnecessary Feature Bloat</h3>
                    <p className="text-xs text-slate-400 mt-0.5">We engineer only what directly supports your business goals, keeping codebases fast, maintainable, and cost-effective.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Direct Technical Communication</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Direct collaboration with senior engineers who understand business metrics and prioritize milestone transparency.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Responsible, Governed AI Adoption</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Rigorous data privacy, retrieval grounding, and human-in-the-loop review safeguards protect your corporate data.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                <span>Direct Contact:</span>
                <a href={`mailto:${companyData.email}`} className="text-blue-400 hover:text-blue-300 font-medium">
                  {companyData.email}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <WhyUsSection />

      {/* Engineering Process */}
      <ProcessSection />

      {/* Client Feedback & Reviews */}
      <ReviewSection navigate={navigate} />

      {/* Final Call to Action */}
      <CallToAction navigate={navigate} />

    </div>
  );
};
