import React, { useState } from 'react';
import { Star, Quote, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  serviceCategory: 'software' | 'ai' | 'web';
  serviceName: string;
  quote: string;
  outcome: string;
  rating: number;
}

const reviewsData: Review[] = [
  {
    id: 'rev-1',
    name: 'Marcus Vance',
    role: 'Chief Operating Officer',
    company: 'Vanguard Freight & Logistics',
    industry: 'Supply Chain & Transport',
    serviceCategory: 'software',
    serviceName: 'Custom Dispatch & ERP Operations',
    quote: 'Before working with NEXOVIRA AI Solution, our dispatchers were coordinating across multiple disconnected spreadsheets and manual driver check-ins. NEXOVIRA AI Solution architected a centralized operations system tailored to our specific route workflows. The transition was smooth, and our fleet coordinators now manage double the dispatch volume with zero manual double-entry.',
    outcome: 'Eliminated manual spreadsheet reconciliation and unified multi-depot fleet dispatch.',
    rating: 5
  },
  {
    id: 'rev-2',
    name: 'Elena Rostova',
    role: 'VP of Technology & Architecture',
    company: 'Meridian Health Analytics',
    industry: 'Healthcare Technology',
    serviceCategory: 'ai',
    serviceName: 'Custom AI Document Intelligence',
    quote: 'We evaluated several generic AI vendors, but none could meet our strict data privacy standards or handle unstructured clinical forms accurately. NEXOVIRA AI Solution engineered a private, retrieval-grounded extraction tool with deterministic validation rules. It parses hundreds of complex PDF documents weekly with exceptional mathematical accuracy and clear audit trails.',
    outcome: 'Reduced manual document data extraction from 4 hours daily to under 10 minutes.',
    rating: 5
  },
  {
    id: 'rev-3',
    name: 'Julian Thorne',
    role: 'Founder & CEO',
    company: 'CertifyPro Systems',
    industry: 'B2B Compliance SaaS',
    serviceCategory: 'web',
    serviceName: 'Micro-SaaS & Multi-Tenant Core',
    quote: 'NEXOVIRA AI Solution took our concept from technical specification to a production-ready, launchable SaaS product in seven weeks. The team implemented clean tenant isolation, Stripe billing webhooks, and an intuitive client dashboard without technical debt. Their engineering communication and weekly demos kept us completely aligned from day one.',
    outcome: 'Launched production MVP in 7 weeks with fully automated subscription billing.',
    rating: 5
  },
  {
    id: 'rev-4',
    name: 'David Sterling',
    role: 'Managing Director',
    company: 'Sterling & Co. Advisory',
    industry: 'Professional Services',
    serviceCategory: 'software',
    serviceName: 'Custom CRM & Client Collaboration Portal',
    quote: 'Our clients expect white-glove service, but off-the-shelf CRM tools felt clumsy and bloated with features we never needed. NEXOVIRA AI Solution built us a streamlined client portal where document exchange, milestone approvals, and invoice payments happen in one place. Our clients frequently compliment the clarity of the platform.',
    outcome: 'Unified proposal generation, engagement milestones, and client invoicing into one portal.',
    rating: 5
  }
];

export const ReviewSection: React.FC<{ navigate?: (path: string) => void }> = ({ navigate }) => {
  const [filter, setFilter] = useState<'all' | 'software' | 'ai' | 'web'>('all');

  const filteredReviews = reviewsData.filter(
    (r) => filter === 'all' || r.serviceCategory === filter
  );

  return (
    <section className="py-24 bg-[#050811] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Client Perspectives & Results
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Trusted by Growing Organizations
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Read how our custom software, AI agents, and digital platforms help businesses simplify operations, resolve operational bottlenecks, and scale with confidence.
            </p>
          </div>

          {/* Interactive Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-lg border border-slate-800 shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter('software')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                filter === 'software'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Software & ERP
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                filter === 'ai'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Systems
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                filter === 'web'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web & SaaS
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0b1222] border border-blue-900/30 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-blue-500/40 hover:bg-[#0e172c] transition-all duration-200 relative group"
            >
              <div className="space-y-4">
                {/* Rating & Service Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-blue-400 font-medium">
                    {rev.serviceName}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative pt-1">
                  <Quote className="w-8 h-8 text-blue-500/15 absolute -top-2 -left-2 -z-0 pointer-events-none" />
                  <p className="text-sm text-slate-300 leading-relaxed relative z-10 italic">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Key Outcome Highlight */}
                <div className="p-3 rounded-lg bg-[#070b14] border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Delivered Impact:</strong> {rev.outcome}
                  </div>
                </div>
              </div>

              {/* Reviewer Bio */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {rev.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {rev.role} · <span className="text-slate-300 font-medium">{rev.company}</span>
                  </div>
                </div>
                <div className="text-[11px] text-slate-300 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{rev.industry}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        {navigate && (
          <div className="mt-12 p-6 rounded-2xl bg-[#070b14] border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-semibold text-white">
                Have a unique operational challenge in mind?
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                We work directly with founders and operations leads to architect practical, durable solutions.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
