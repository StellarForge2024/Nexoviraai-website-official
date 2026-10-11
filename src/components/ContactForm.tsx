import React, { useState } from 'react';
import { Mail, CheckCircle, Send, AlertCircle, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService = '' }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [serviceOfInterest, setServiceOfInterest] = useState(initialService || '');
  const [projectDescription, setProjectDescription] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    name: string;
    email: string;
    service: string;
    timestamp: string;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      errs.email = 'Please provide a valid business email address.';
    }
    if (!companyName.trim()) {
      errs.companyName = 'Please provide your company or organization name.';
    }
    if (!serviceOfInterest) {
      errs.serviceOfInterest = 'Please select a service of interest.';
    }
    if (!projectDescription.trim() || projectDescription.trim().length < 15) {
      errs.projectDescription = 'Please provide a brief description of your project requirements (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic network round-trip and persistence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmissionReceipt({
        name: fullName,
        email: email,
        service: serviceOfInterest,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      // Clear inputs
      setFullName('');
      setEmail('');
      setCompanyName('');
      setProjectDescription('');
      setErrors({});
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmissionReceipt(null);
  };

  return (
    <div className="bg-[#0b1222] border border-blue-900/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
      
      {isSuccess && submissionReceipt ? (
        <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white font-display">
              Inquiry Successfully Received
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{submissionReceipt.name}</strong>. Our senior engineering leads will review your project parameters and respond to <strong className="text-white">{submissionReceipt.email}</strong> within one business day.
            </p>
          </div>

          <div className="bg-[#070b14] border border-slate-800 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-400">
            <div className="flex justify-between">
              <span>Service Category:</span>
              <span className="text-slate-200 font-medium">{submissionReceipt.service}</span>
            </div>
            <div className="flex justify-between">
              <span>Timestamp:</span>
              <span className="text-slate-200 font-medium">{submissionReceipt.timestamp}</span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-emerald-400 font-medium">Queued for Technical Review</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleReset}
              className="px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Submit Another Project Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label 
                htmlFor="fullName" 
                className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
              >
                Full Name <span className="text-blue-400">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors(prev => ({ ...prev, fullName: '' }));
                }}
                placeholder="Sarah Jenkins"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-[#070b14] text-slate-100 placeholder:text-slate-400 text-sm border transition-colors focus:outline-none ${
                  errors.fullName 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-slate-800 focus:border-blue-500'
                }`}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
              >
                Email Address <span className="text-blue-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                }}
                placeholder="sarah@company.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-[#070b14] text-slate-100 placeholder:text-slate-400 text-sm border transition-colors focus:outline-none ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-slate-800 focus:border-blue-500'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Company Name */}
            <div>
              <label 
                htmlFor="companyName" 
                className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
              >
                Company / Organization <span className="text-blue-400">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  if (errors.companyName) setErrors(prev => ({ ...prev, companyName: '' }));
                }}
                placeholder="Apex Industrial Technologies"
                aria-invalid={!!errors.companyName}
                aria-describedby={errors.companyName ? "companyName-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-[#070b14] text-slate-100 placeholder:text-slate-400 text-sm border transition-colors focus:outline-none ${
                  errors.companyName 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-slate-800 focus:border-blue-500'
                }`}
              />
              {errors.companyName && (
                <p id="companyName-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.companyName}
                </p>
              )}
            </div>

            {/* Service of Interest */}
            <div>
              <label 
                htmlFor="serviceOfInterest" 
                className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
              >
                Service of Interest <span className="text-blue-400">*</span>
              </label>
              <select
                id="serviceOfInterest"
                value={serviceOfInterest}
                onChange={(e) => {
                  setServiceOfInterest(e.target.value);
                  if (errors.serviceOfInterest) setErrors(prev => ({ ...prev, serviceOfInterest: '' }));
                }}
                aria-invalid={!!errors.serviceOfInterest}
                aria-describedby={errors.serviceOfInterest ? "serviceOfInterest-error" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-[#070b14] text-slate-100 text-sm border transition-colors focus:outline-none ${
                  errors.serviceOfInterest 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-slate-800 focus:border-blue-500'
                }`}
              >
                <option value="">Select a service category...</option>
                <option value="Software Development">Software Development</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Intelligence">Data Intelligence</option>
                <option value="CRM & ERP Development">CRM & ERP Development</option>
                <option value="Personal & Enterprise AI Agents">Personal & Enterprise AI Agents</option>
                <option value="Custom AI Tools">Custom AI Tools</option>
                <option value="Micro-SaaS Development">Micro-SaaS Development</option>
                <option value="General Technical Consultation">General Technical Consultation</option>
              </select>
              {errors.serviceOfInterest && (
                <p id="serviceOfInterest-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.serviceOfInterest}
                </p>
              )}
            </div>

          </div>

          {/* Project Description */}
          <div>
            <label 
              htmlFor="projectDescription" 
              className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
            >
              Project Description & Requirements <span className="text-blue-400">*</span>
            </label>
            <textarea
              id="projectDescription"
              rows={4}
              value={projectDescription}
              onChange={(e) => {
                setProjectDescription(e.target.value);
                if (errors.projectDescription) setErrors(prev => ({ ...prev, projectDescription: '' }));
              }}
              placeholder="Tell us about the business problem, target users, desired integrations, or timeline objectives..."
              aria-invalid={!!errors.projectDescription}
              aria-describedby={errors.projectDescription ? "projectDescription-error" : undefined}
              className={`w-full px-4 py-3 rounded-lg bg-[#070b14] text-slate-100 placeholder:text-slate-400 text-sm border transition-colors focus:outline-none resize-y ${
                errors.projectDescription 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-slate-800 focus:border-blue-500'
              }`}
            />
            {errors.projectDescription && (
              <p id="projectDescription-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.projectDescription}
              </p>
            )}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 rounded-lg transition-all duration-150 shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Discuss Your Project</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-xs text-slate-300 text-center sm:text-right">
              Prefer direct email? Reach us at{' '}
              <a 
                href={`mailto:${companyData.email}?subject=Project%20Inquiry%20-%20NEXOVIRA%20AI%20Solution`}
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-0.5 underline underline-offset-2"
              >
                <span>{companyData.email}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </form>
      )}

    </div>
  );
};
