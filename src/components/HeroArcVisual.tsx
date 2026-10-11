import React, { useEffect, useState } from 'react';

export const HeroArcVisual: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div 
      className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-blue-600/15 rounded-full blur-3xl transform scale-75 animate-pulse-glow" />
      <div className="absolute inset-10 bg-cyan-500/10 rounded-full blur-2xl" />

      {/* Primary SVG Animated Orbital Arc System */}
      <svg 
        viewBox="0 0 600 600" 
        className="w-full h-full relative z-10 overflow-visible"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="arcGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="arcGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="coreGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="centerOrb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#1e40af" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#070b14" stopOpacity="0" />
          </radialGradient>

          {/* Glow Filters */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Orbit Track */}
        <circle 
          cx="300" 
          cy="300" 
          r="260" 
          fill="none" 
          stroke="rgba(59, 130, 246, 0.12)" 
          strokeWidth="1.5" 
          strokeDasharray="4 8"
        />

        {/* Outer Rotating Group */}
        <g className={prefersReducedMotion ? '' : 'animate-orbit'}>
          {/* Segmented Arc 1 */}
          <path 
            d="M 300 40 A 260 260 0 0 1 560 300" 
            fill="none" 
            stroke="url(#arcGrad1)" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            filter="url(#glow)"
          />
          {/* Orbital Node 1 */}
          <circle cx="300" cy="40" r="5" fill="#38bdf8" filter="url(#glow)" />
          <circle cx="300" cy="40" r="2.5" fill="#ffffff" />
          
          {/* Secondary Arc on same ring */}
          <path 
            d="M 300 560 A 260 260 0 0 1 120 480" 
            fill="none" 
            stroke="url(#arcGrad2)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
          />
          <circle cx="120" cy="480" r="3.5" fill="#60a5fa" />
        </g>

        {/* Middle Orbit Track */}
        <circle 
          cx="300" 
          cy="300" 
          r="190" 
          fill="none" 
          stroke="rgba(96, 165, 250, 0.18)" 
          strokeWidth="1.5" 
        />

        {/* Middle Counter-Rotating Group */}
        <g className={prefersReducedMotion ? '' : 'animate-orbit-reverse'}>
          {/* Glowing Arc 2 */}
          <path 
            d="M 300 110 A 190 190 0 0 1 490 300" 
            fill="none" 
            stroke="url(#arcGrad1)" 
            strokeWidth="3" 
            strokeLinecap="round"
            filter="url(#glow)"
          />
          <circle cx="490" cy="300" r="4.5" fill="#60a5fa" filter="url(#glow)" />
          <circle cx="490" cy="300" r="2" fill="#ffffff" />

          {/* Opposing Arc */}
          <path 
            d="M 110 300 A 190 190 0 0 1 200 135" 
            fill="none" 
            stroke="url(#arcGrad2)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <circle cx="200" cy="135" r="3" fill="#38bdf8" />
        </g>

        {/* Inner Geometric Shield / Coordinate Lines */}
        <circle 
          cx="300" 
          cy="300" 
          r="120" 
          fill="none" 
          stroke="rgba(147, 197, 253, 0.25)" 
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />

        {/* Diagonal Cross-hairs */}
        <line x1="240" y1="240" x2="360" y2="360" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />
        <line x1="240" y1="360" x2="360" y2="240" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />

        {/* Fast Core Ring */}
        <g className={prefersReducedMotion ? '' : 'animate-orbit'}>
          <path 
            d="M 300 180 A 120 120 0 0 1 420 300" 
            fill="none" 
            stroke="#60a5fa" 
            strokeWidth="3" 
            strokeLinecap="round"
            filter="url(#subtleGlow)"
          />
          <circle cx="420" cy="300" r="4" fill="#93c5fd" />
        </g>

        {/* Central Glowing Core Orb */}
        <circle 
          cx="300" 
          cy="300" 
          r="65" 
          fill="url(#centerOrb)" 
          filter="url(#glow)"
        />
        
        <circle 
          cx="300" 
          cy="300" 
          r="30" 
          fill="none" 
          stroke="rgba(255, 255, 255, 0.4)" 
          strokeWidth="1.5" 
        />
        
        <circle 
          cx="300" 
          cy="300" 
          r="8" 
          fill="#ffffff" 
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
};
