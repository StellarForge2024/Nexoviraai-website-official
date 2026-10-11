import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { companyData } from '../data/companyData';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  customFaqs?: FaqItem[];
  title?: string;
  subtitle?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ 
  customFaqs, 
  title = "Frequently Asked Questions",
  subtitle = "Clear answers about project scoping, engineering workflows, timelines, and collaboration."
}) => {
  const faqsToDisplay = customFaqs || companyData.generalFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
            Practical Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqsToDisplay.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0b1222] border border-blue-900/30 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-md bg-slate-900 text-blue-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
