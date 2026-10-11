import React from 'react';
import { 
  MapPin, 
  ExternalLink, 
  Navigation, 
  Clock, 
  Mail, 
  Compass, 
  Info 
} from 'lucide-react';
import { locationConfig } from '../config/locationConfig';
import { companyData } from '../data/companyData';

export const OurLocationSection: React.FC = () => {
  const isEmbedConfigured = 
    locationConfig.isConfigured || 
    (Boolean(locationConfig.embedUrl) && !locationConfig.embedUrl.includes('[PASTE'));

  const isDirectionsConfigured = 
    Boolean(locationConfig.directionsUrl) && !locationConfig.directionsUrl.includes('[PASTE');

  // Fallback directions URL to Google Maps search if address is specified
  const effectiveDirectionsUrl = isDirectionsConfigured 
    ? locationConfig.directionsUrl 
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        locationConfig.address.includes('[ENTER') 
          ? 'NEXOVIRA AI Solution' 
          : locationConfig.address
      )}`;

  const isAddressPlaceholder = locationConfig.address.includes('[ENTER');

  return (
    <section className="py-20 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2 flex items-center gap-2">
            <Compass className="w-4 h-4 text-blue-400" />
            <span>Physical Presence & Meetings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Our Location
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Visit our team for scheduled architectural briefings, project discovery sessions, and technology roadmap reviews.
          </p>
        </div>

        {/* Main Location Container */}
        <div className="bg-[#0b1222] border border-blue-900/30 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Map View Area */}
          <div className="relative w-full h-[400px] sm:h-[460px] bg-[#070b14]">
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
                className="w-full h-full filter saturate-[0.85] contrast-[1.1]"
              />
            ) : (
              /* Unconfigured State Graphic */
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-tech-grid relative overflow-hidden">
                {/* Radial glow */}
                <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />

                {/* Simulated Radar / Map Center Graphic */}
                <div className="relative z-10 mb-5">
                  <div className="w-20 h-20 rounded-full border border-blue-500/30 bg-blue-950/40 flex items-center justify-center animate-pulse">
                    <div className="w-12 h-12 rounded-full border border-blue-400/50 bg-blue-600/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 max-w-md space-y-2">
                  <h3 className="text-lg font-bold text-white font-display">
                    Interactive Map Embed Pending Configuration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    The interactive Google Map is prepared and waiting for your location details. Update your office address, embed URL, and directions link in <code className="text-blue-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">src/config/locationConfig.ts</code>.
                  </p>
                </div>

                <div className="relative z-10 mt-5 inline-flex items-center gap-2 text-xs text-blue-400/90 bg-blue-950/60 border border-blue-800/40 px-3.5 py-1.5 rounded-lg">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>Configured via clearly labeled parameters in locationConfig.ts</span>
                </div>
              </div>
            )}

            {/* Floating Office Badge */}
            <div className="absolute top-4 left-4 z-20 bg-[#070b14]/90 backdrop-blur-md border border-blue-900/40 rounded-xl px-4 py-2.5 shadow-lg hidden sm:flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <div>
                <div className="text-xs font-semibold text-white">NEXOVIRA AI Solution</div>
                <div className="text-[11px] text-slate-400">Engineering & Operations Office</div>
              </div>
            </div>
          </div>

          {/* Details & Actions Below Map */}
          <div className="p-6 sm:p-10 bg-[#0c1322] border-t border-slate-800/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Address Details (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-950/70 border border-blue-800/40 text-blue-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                      Office Address
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white leading-snug">
                      {isAddressPlaceholder ? (
                        <span className="text-slate-400 italic">
                          [Office Address to be configured in locationConfig.ts]
                        </span>
                      ) : (
                        locationConfig.address
                      )}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1">
                      {locationConfig.cityStateZip} · {locationConfig.country}
                    </div>
                  </div>
                </div>

                {/* Additional Office Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80 text-xs">
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

                <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                  {locationConfig.consultationNote}
                </p>
              </div>

              {/* Action Buttons (4 cols) */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <a
                  href={effectiveDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-all shadow-lg shadow-blue-900/40 hover:scale-[1.02] flex items-center justify-center gap-2 text-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={`mailto:${companyData.email}?subject=In-Person%20Meeting%20Request%20-%20NEXOVIRA%20AI%20Solution`}
                  className="w-full px-5 py-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Schedule In-Person Meeting</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
