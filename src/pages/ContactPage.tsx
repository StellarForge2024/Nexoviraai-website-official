import React from 'react';
import { Mail, Clock, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { OurLocationSection } from '../components/OurLocationSection';
import { companyData } from '../data/companyData';
import { FaqSection } from '../components/FaqSection';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="min-h-screen bg-[#070b14]">
      
      {/* Header Banner */}
      <section className="relative pt-16 pb-16 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Start a Conversation
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
              Book a Consultation
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Have an upcoming software project, an operational bottleneck, or an AI workflow to discuss? Share your initial requirements below, and our engineering leads will respond with preliminary technical thoughts and availability.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Direct Contact Details Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7 Columns: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right 5 Columns: Direct Contact & What to Expect */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Email Card */}
              <div className="bg-[#0b1222] border border-blue-900/40 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-white font-display">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  You can also email your project brief, RFP, or architecture diagrams directly to our engineering team.
                </p>
                
                <div className="pt-2">
                  <a
                    href={`mailto:${companyData.email}?subject=Project%20Inquiry%20-%20NEXOVIRA%20AI%20Solution`}
                    className="p-4 rounded-xl bg-[#070b14] border border-blue-900/50 hover:border-blue-500/60 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-blue-950/70 border border-blue-800/40 text-blue-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Official Contact Email</div>
                        <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {companyData.email}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>What to Expect After Reaching Out</span>
                </div>

                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">1. Prompt Technical Triage:</strong> A senior engineer reviews your parameters within 24 business hours.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">2. Focused 30-Min Discovery:</strong> We discuss your operational constraints, user flows, and timeline expectations.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">3. Itemized Architecture Proposal:</strong> We provide a transparent scope breakdown with milestones, deliverables, and estimated investments.
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  Strict confidentiality guaranteed. We are happy to execute standard Mutual NDAs prior to in-depth technical disclosures.
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Our Location - Interactive Google Map */}
      <OurLocationSection />

      {/* Consultation Scoping FAQs */}
      <FaqSection 
        title="Consultation & Engagement FAQs"
        subtitle="Frequently asked questions about preparing for your discovery call, confidentiality, and pricing models."
      />

    </div>
  );
};
