import React, { useState } from 'react';
import { WhatsAppIcon } from './SocialIcons';
import { companyData } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip / Label */}
      <div
        className={`mr-3 px-3.5 py-1.5 rounded-full bg-[#0b1222]/95 border border-emerald-500/30 text-white text-xs font-medium shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none hidden sm:block ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Chat on WhatsApp
        </span>
      </div>

      {/* Button */}
      <a
        href={companyData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-emerald-900/40 hover:shadow-emerald-900/60 transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none group-hover:hidden" />
        <WhatsAppIcon size={26} className="relative z-10" />
      </a>
    </aside>
  );
};
