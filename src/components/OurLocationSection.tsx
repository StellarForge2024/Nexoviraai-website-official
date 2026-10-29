import React, { useState } from 'react';
import { 
  MapPin, 
  ExternalLink, 
  Navigation, 
  Clock, 
  Compass, 
  Copy, 
  Check, 
  Building2,
  Calendar
} from 'lucide-react';
import { locationConfig, OfficeLocation } from '../config/locationConfig';
import { companyData } from '../data/companyData';

export const OurLocationSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (office: OfficeLocation) => {
    try {
      const fullText = `${office.address}, ${office.cityStateZip}, ${office.country}`;
      await navigator.clipboard.writeText(fullText);
      setCopiedId(office.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#070b14] relative border-t border-slate-800/80 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1.5 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>Office Hubs & In-Person Engagements</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              Our Locations
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Visit our offices for scheduled architecture briefings, discovery sessions, and hands-on technical reviews.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold self-start sm:self-end shrink-0">
            <Building2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Varanasi · Bengaluru</span>
          </div>
        </div>

        {/* Dual Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {locationConfig.offices.map((office) => {
            const isCopied = copiedId === office.id;
            return (
              <div 
                key={office.id}
                className="bg-[#0b1222] border border-blue-900/35 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-blue-700/50 transition-all duration-300"
              >
                {/* Compact Map Container */}
                <div className="relative w-full h-44 sm:h-48 bg-[#070b14]">
                  <iframe
                    src={office.embedUrl}
                    title={`${office.officeName} Map`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
                  />

                  {/* Floating Tag Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10 bg-[#070b14]/90 backdrop-blur-md border border-white/15 rounded-lg px-2.5 py-1 shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      {office.city} ({office.tag})
                    </span>
                  </div>

                  {/* Open in Maps Icon Link */}
                  <a
                    href={office.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${office.city} in Google Maps`}
                    className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-lg bg-[#070b14]/90 hover:bg-blue-600 hover:text-white text-slate-300 border border-white/15 backdrop-blur-md transition-all shadow-lg cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Details Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5 bg-[#0b1222]">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400">
                        {office.badge}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {office.landmarkArea}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {office.officeName}
                    </h3>

                    <div className="flex items-start gap-2 mt-2 text-xs text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="leading-snug">{office.address}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">
                          {office.cityStateZip} · {office.country}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{office.visitingHours}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleCopy(office)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>

                      <a
                        href={office.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-semibold transition-all shadow-md shadow-blue-900/30 cursor-pointer"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Directions</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Compact In-Person Consultation Footer Bar */}
        <div className="mt-5 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-blue-950/30 via-[#0b1222] to-cyan-950/30 border border-blue-900/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-slate-300">
            <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              {locationConfig.consultationNote}
            </span>
          </div>

          <a
            href={`mailto:${companyData.email}?subject=In-Person%20Meeting%20Request%20-%20NEXOVIRA%20AI%20Solution`}
            className="shrink-0 px-3.5 py-1.5 rounded-lg bg-blue-600/15 hover:bg-blue-600 hover:text-white text-blue-400 border border-blue-500/30 text-xs font-semibold transition-all whitespace-nowrap cursor-pointer"
          >
            Request In-Person Meeting
          </a>
        </div>

      </div>
    </section>
  );
};
