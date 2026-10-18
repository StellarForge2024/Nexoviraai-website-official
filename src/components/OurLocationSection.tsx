import React, { useState } from 'react';
import { 
  MapPin, 
  ExternalLink, 
  Navigation, 
  Clock, 
  Mail, 
  Compass, 
  Copy, 
  Check, 
  Building2,
  Calendar
} from 'lucide-react';
import { locationConfig } from '../config/locationConfig';
import { companyData } from '../data/companyData';

export const OurLocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const isEmbedConfigured = 
    locationConfig.isConfigured || 
    (Boolean(locationConfig.embedUrl) && !locationConfig.embedUrl.includes('[PASTE'));

  const isDirectionsConfigured = 
    Boolean(locationConfig.directionsUrl) && !locationConfig.directionsUrl.includes('[PASTE');

  const effectiveDirectionsUrl = isDirectionsConfigured 
    ? locationConfig.directionsUrl 
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${locationConfig.address}, ${locationConfig.cityStateZip}`
      )}`;

  const fullAddressString = `${locationConfig.address}, ${locationConfig.cityStateZip}, ${locationConfig.country}`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddressString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#070b14] relative border-t border-slate-800/80 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2.5 flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Headquarters & In-Person Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Our Location
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Visit our Bengaluru engineering office for scheduled architecture briefings, project discovery sessions, and hands-on technical roadmap reviews.
            </p>
          </div>

          {/* Quick Hub Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-sm self-start md:self-end">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>Bengaluru Tech Corridor · India</span>
          </div>
        </div>

        {/* Main Location Card */}
        <div className="bg-[#0b1222] border border-blue-900/40 rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Map View Area */}
          <div className="relative w-full h-[400px] sm:h-[480px] bg-[#070b14]">
            {isEmbedConfigured ? (
              <iframe
                src={locationConfig.embedUrl}
                title="NEXOVIRA AI Solution Office Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.9] contrast-[1.05]"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-tech-grid relative overflow-hidden">
                <div className="w-20 h-20 rounded-full border border-blue-500/30 bg-blue-950/40 flex items-center justify-center animate-pulse mb-5">
                  <div className="w-12 h-12 rounded-full border border-blue-400/50 bg-blue-600/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  NEXOVIRA AI Solution Headquarters
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-2">
                  {fullAddressString}
                </p>
              </div>
            )}

            {/* Floating Office Badge */}
            <div className="absolute top-4 left-4 z-20 bg-[#070b14]/90 backdrop-blur-md border border-blue-900/50 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide">
                  NEXOVIRA AI Solution
                </div>
                <div className="text-[11px] text-slate-400">
                  Headquarters & Development Center
                </div>
              </div>
            </div>

            {/* Direct Open in Maps Link on Top Right */}
            <div className="absolute top-4 right-4 z-20 hidden sm:block">
              <a
                href={effectiveDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#070b14]/90 hover:bg-blue-600 hover:text-white text-slate-200 border border-white/15 backdrop-blur-md text-xs font-semibold transition-all duration-200 shadow-xl"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Details & Actions Below Map */}
          <div className="p-6 sm:p-10 bg-[#0c1322] border-t border-slate-800/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Address Details (8 cols) */}
              <div className="lg:col-span-8 space-y-5">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-950/80 border border-blue-800/50 text-blue-400 shrink-0 mt-0.5 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                        Registered Office Address
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/25">
                        BTM 2nd Stage · Ring Road
                      </span>
                    </div>

                    <div className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {locationConfig.address}
                    </div>

                    <div className="text-sm sm:text-base font-semibold text-slate-300">
                      {locationConfig.cityStateZip} · {locationConfig.country}
                    </div>

                    {/* Copy Address Button */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Address Copied to Clipboard</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Office Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{locationConfig.visitingHours}</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <a 
                      href={`mailto:${companyData.email}`} 
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {locationConfig.consultationNote}
                </p>
              </div>

              {/* Action Buttons (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href={effectiveDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-900/40 hover:scale-[1.02] flex items-center justify-center gap-2 text-center cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={`mailto:${companyData.email}?subject=In-Person%20Meeting%20Request%20-%20NEXOVIRA%20AI%20Solution`}
                  className="w-full px-5 py-3 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-2 text-center cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Request In-Person Meeting</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
