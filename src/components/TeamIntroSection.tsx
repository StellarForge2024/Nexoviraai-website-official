import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  ShieldCheck, 
  Code2, 
  Bot, 
  Globe, 
  Database, 
  Sparkles, 
  LayoutGrid, 
  Layers, 
  ArrowRight, 
  Calendar,
  CheckCircle2,
  Users
} from 'lucide-react';
import { teamMembers } from '../data/teamData';
import { TeamMember } from '../types';

interface AccentStyle {
  text: string;
  badge: string;
  chip: string;
  ring: string;
  activeBorder: string;
  glow: string;
  glowRgba: string;
  gradientWash: string;
  tabActive: string;
  dotActive: string;
}

const accentMap: Record<string, AccentStyle> = {
  blue: {
    text: 'text-blue-400',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    chip: 'bg-blue-950/40 text-blue-300 border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-900/30',
    ring: 'border-blue-500/60 shadow-[0_0_35px_rgba(59,130,246,0.25)]',
    activeBorder: 'border-blue-500',
    glow: 'from-blue-600/30 via-blue-900/10 to-transparent',
    glowRgba: 'rgba(59, 130, 246, 0.45)',
    gradientWash: 'from-blue-500/15 via-blue-600/5 to-transparent',
    tabActive: 'bg-blue-500/15 text-white border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]',
    dotActive: 'bg-blue-500 w-8 shadow-[0_0_12px_rgba(59,130,246,0.8)]',
  },
  cyan: {
    text: 'text-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    chip: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-900/30',
    ring: 'border-cyan-500/60 shadow-[0_0_35px_rgba(6,182,212,0.25)]',
    activeBorder: 'border-cyan-500',
    glow: 'from-cyan-600/30 via-teal-900/10 to-transparent',
    glowRgba: 'rgba(6, 182, 212, 0.45)',
    gradientWash: 'from-cyan-500/15 via-teal-600/5 to-transparent',
    tabActive: 'bg-cyan-500/15 text-white border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]',
    dotActive: 'bg-cyan-400 w-8 shadow-[0_0_12px_rgba(6,182,212,0.8)]',
  },
  indigo: {
    text: 'text-indigo-400',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    chip: 'bg-indigo-950/40 text-indigo-300 border-indigo-500/20 hover:border-indigo-400/50 hover:bg-indigo-900/30',
    ring: 'border-indigo-500/60 shadow-[0_0_35px_rgba(99,102,241,0.25)]',
    activeBorder: 'border-indigo-500',
    glow: 'from-indigo-600/30 via-purple-900/10 to-transparent',
    glowRgba: 'rgba(99, 102, 241, 0.45)',
    gradientWash: 'from-indigo-500/15 via-purple-600/5 to-transparent',
    tabActive: 'bg-indigo-500/15 text-white border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.3)]',
    dotActive: 'bg-indigo-500 w-8 shadow-[0_0_12px_rgba(99,102,241,0.8)]',
  },
  sky: {
    text: 'text-sky-400',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    chip: 'bg-sky-950/40 text-sky-300 border-sky-500/20 hover:border-sky-400/50 hover:bg-sky-900/30',
    ring: 'border-sky-500/60 shadow-[0_0_35px_rgba(14,165,233,0.25)]',
    activeBorder: 'border-sky-500',
    glow: 'from-sky-600/30 via-blue-900/10 to-transparent',
    glowRgba: 'rgba(14, 165, 233, 0.45)',
    gradientWash: 'from-sky-500/15 via-blue-600/5 to-transparent',
    tabActive: 'bg-sky-500/15 text-white border-sky-500/50 shadow-[0_0_20px_rgba(14,165,233,0.3)]',
    dotActive: 'bg-sky-400 w-8 shadow-[0_0_12px_rgba(14,165,233,0.8)]',
  },
  teal: {
    text: 'text-teal-400',
    badge: 'bg-teal-500/10 text-teal-300 border-teal-500/30',
    chip: 'bg-teal-950/40 text-teal-300 border-teal-500/20 hover:border-teal-400/50 hover:bg-teal-900/30',
    ring: 'border-teal-500/60 shadow-[0_0_35px_rgba(20,184,166,0.25)]',
    activeBorder: 'border-teal-500',
    glow: 'from-teal-600/30 via-emerald-900/10 to-transparent',
    glowRgba: 'rgba(20, 184, 166, 0.45)',
    gradientWash: 'from-teal-500/15 via-emerald-600/5 to-transparent',
    tabActive: 'bg-teal-500/15 text-white border-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.3)]',
    dotActive: 'bg-teal-400 w-8 shadow-[0_0_12px_rgba(20,184,166,0.8)]',
  },
};

const getRoleIcon = (id: string, className = 'w-4 h-4') => {
  switch (id) {
    case 'krishna-upadhyay':
      return <ShieldCheck className={className} />;
    case 'software-engineering':
      return <Code2 className={className} />;
    case 'ai-systems':
      return <Bot className={className} />;
    case 'web-platforms':
      return <Globe className={className} />;
    case 'data-intelligence':
      return <Database className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

export const TeamIntroSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>('spotlight');
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});
  const touchStartX = useRef<number | null>(null);

  const count = teamMembers.length;
  const active = teamMembers[index];
  const accent = accentMap[active.accent] ?? accentMap.blue;

  const goTo = useCallback(
    (nextIndex: number, dir?: number) => {
      const normalized = ((nextIndex % count) + count) % count;
      const inferred = dir ?? (normalized > index ? 1 : -1);
      setDirection(inferred);
      setIndex(normalized);
    },
    [count, index]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'spotlight') return;
      if (e.key === 'ArrowRight') {
        next();
      } else if (e.key === 'ArrowLeft') {
        prev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev, viewMode]);

  // Touch gesture handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 45) return;
    if (delta < 0) next();
    else prev();
  };

  const handleConsultation = () => {
    window.history.pushState({}, '', '/contact');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-32 bg-[#050811] relative border-t border-slate-800/80 overflow-hidden">
      {/* Dynamic Ambient Background Lights */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[150px] rounded-full pointer-events-none transition-all duration-700 opacity-25"
        style={{ background: accent.glowRgba }}
      />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
              <Users className="w-3.5 h-3.5" />
              <span>Core Technical Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              The Engineers Behind the Architecture
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Direct technical access to principal engineers and AI researchers who collaborate directly with your team — from initial discovery through production deployment.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 bg-[#0b1222]/90 border border-slate-800 p-1 rounded-xl backdrop-blur-md self-start md:self-end shrink-0 shadow-lg">
            <button
              type="button"
              onClick={() => setViewMode('spotlight')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                viewMode === 'spotlight'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Spotlight</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All Leaders ({count})</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: SPOTLIGHT SHOWCASE */}
        {viewMode === 'spotlight' ? (
          <div className="space-y-8">
            {/* Top Team Selector Tabs (Horizontal Dock) */}
            <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 pt-1 scrollbar-none">
              {teamMembers.map((member, i) => {
                const isSelected = i === index;
                const memberAccent = accentMap[member.accent] ?? accentMap.blue;
                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border transition-all duration-300 shrink-0 cursor-pointer select-none ${
                      isSelected
                        ? `${memberAccent.tabActive}`
                        : 'bg-[#0b1222]/80 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-[#0e1628]'
                    }`}
                  >
                    {/* Small avatar or initials thumbnail */}
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-white/10 bg-[#070b14] flex items-center justify-center">
                      {member.image && !imgErrorMap[member.id] ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          onError={() => setImgErrorMap(prev => ({ ...prev, [member.id]: true }))}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <span className={`text-[11px] font-bold ${memberAccent.text}`}>
                          {member.initials}
                        </span>
                      )}
                    </div>

                    <div className="text-left">
                      <div className="text-xs font-bold leading-tight text-white flex items-center gap-1.5">
                        <span>{member.name}</span>
                        {isSelected && (
                          <span className={`w-1.5 h-1.5 rounded-full ${memberAccent.text} bg-current animate-pulse`} />
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight truncate max-w-[120px]">
                        {member.role}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Featured Hero Showcase Card */}
            <div 
              className="relative"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#0b1222]/95 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl"
                >
                  {/* Internal ambient corner glow */}
                  <div 
                    className="absolute -top-32 -right-32 w-96 h-96 blur-[120px] rounded-full pointer-events-none transition-all duration-700"
                    style={{ background: accent.glowRgba }}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                    
                    {/* Left Column: Premium Portrait Card */}
                    <div className="lg:col-span-5 flex flex-col items-center">
                      <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[28px] overflow-hidden border border-slate-700/60 bg-[#070b14] shadow-2xl group">
                        
                        {/* Dynamic backlighting halo */}
                        <div 
                          className="absolute inset-0 opacity-40 blur-2xl -z-10 transition-colors duration-500"
                          style={{ background: accent.glowRgba }}
                        />

                        {active.image && !imgErrorMap[active.id] ? (
                          <>
                            <img
                              src={active.image}
                              alt={active.name}
                              onError={() => setImgErrorMap(prev => ({ ...prev, [active.id]: true }))}
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Subtle dark vignettes to ensure badges read clearly */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/30 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/40 via-transparent to-transparent pointer-events-none" />
                          </>
                        ) : (
                          /* High-Tech Monogram Fallback */
                          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#0e1628] to-[#070b14] p-8">
                            <div className="absolute inset-0 bg-tech-grid opacity-30" />
                            <div 
                              className="w-36 h-36 rounded-full blur-2xl absolute -z-0 opacity-50"
                              style={{ background: accent.glowRgba }}
                            />
                            <div className="relative z-10 w-28 h-28 rounded-2xl border border-white/20 bg-slate-900/80 flex items-center justify-center shadow-xl">
                              <span className={`text-5xl font-black font-display ${accent.text}`}>
                                {active.initials}
                              </span>
                            </div>
                            <div className="relative z-10 mt-6 text-center">
                              <span className="text-sm font-semibold text-slate-300">
                                {active.name}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Top floating pill */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070b14]/80 border border-white/15 backdrop-blur-md text-[11px] font-semibold text-emerald-400 shadow-md">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Direct Client Partner</span>
                          </div>
                          <div className={`p-2 rounded-xl bg-[#070b14]/80 border border-white/15 backdrop-blur-md ${accent.text} shadow-md`}>
                            {getRoleIcon(active.id, 'w-4 h-4')}
                          </div>
                        </div>

                        {/* Bottom Overlay Info */}
                        <div className="absolute bottom-4 inset-x-4">
                          <div className="p-3.5 rounded-2xl bg-[#0b1222]/90 border border-white/10 backdrop-blur-md shadow-lg">
                            <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                              Core Focus
                            </div>
                            <div className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5 line-clamp-2">
                              {active.focus}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Action Button */}
                      <button
                        type="button"
                        onClick={handleConsultation}
                        className="mt-6 w-full max-w-[340px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-600/30 cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Schedule Discovery with {active.name.split(' ')[0]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Right Column: Narrative, Philosophy & Credentials */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                      
                      {/* Member Identity & Tag */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${accent.badge}`}>
                            {getRoleIcon(active.id, 'w-3.5 h-3.5')}
                            <span>{active.role}</span>
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            LEADERSHIP #{index + 1} OF {count}
                          </span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
                          {active.name}
                        </h3>
                        <p className={`text-base font-semibold ${accent.text} mt-1`}>
                          {active.focus}
                        </p>
                      </div>

                      {/* Philosophy Quote Callout Card */}
                      <div className="relative bg-[#070b14]/70 border border-slate-800 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
                        <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                          <Quote className="w-4 h-4 text-blue-400" />
                        </div>
                        <p className="text-base sm:text-lg font-display font-medium text-slate-100 italic leading-relaxed pl-8">
                          “{active.quote}”
                        </p>
                      </div>

                      {/* Deep-Dive Biography */}
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                          Background & Engagement Role
                        </h4>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          {active.bio}
                        </p>
                      </div>

                      {/* Specialized Competencies */}
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                          <span>Key Deliverables & Expertise</span>
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                          {active.expertise.map((skill) => (
                            <span
                              key={skill}
                              className={`text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-all duration-200 cursor-default ${accent.chip}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="hidden sm:inline">Navigate leaders:</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[10px]">←</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[10px]">→</span>
                <span className="text-slate-500">or swipe on mobile</span>
              </div>

              {/* Progress Indicator Dots */}
              <div className="flex items-center gap-2">
                {teamMembers.map((member, i) => {
                  const isActive = i === index;
                  const dotAccent = accentMap[member.accent] ?? accentMap.blue;
                  return (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Go to ${member.name}`}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? `${dotAccent.dotActive}`
                          : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Previous / Next Arrow Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous leadership member"
                  className="w-11 h-11 rounded-xl bg-[#0b1222] border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/15 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono text-slate-400 px-1">
                  <span className="text-white font-bold">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-slate-600"> / </span>
                  <span>{String(count).padStart(2, '0')}</span>
                </div>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next leadership member"
                  className="w-11 h-11 rounded-xl bg-[#0b1222] border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/15 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* VIEW 2: COMPREHENSIVE 5-CARD GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => {
              const memberAccent = accentMap[member.accent] ?? accentMap.blue;
              return (
                <div
                  key={member.id}
                  className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-[#0e1628] transition-all duration-300 shadow-xl group relative overflow-hidden"
                >
                  {/* Top subtle highlight */}
                  <div 
                    className="absolute top-0 inset-x-0 h-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                    style={{ background: memberAccent.glowRgba }}
                  />

                  <div>
                    {/* Header: Photo + Info */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-700 bg-[#070b14] shadow-md group-hover:scale-105 transition-transform duration-300">
                        {member.image && !imgErrorMap[member.id] ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            onError={() => setImgErrorMap(prev => ({ ...prev, [member.id]: true }))}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-bold text-lg text-white bg-slate-900">
                            {member.initials}
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-semibold border mb-1.5" style={{ borderColor: memberAccent.glowRgba }}>
                          {getRoleIcon(member.id, 'w-3 h-3')}
                          <span className={memberAccent.text}>{member.role}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {member.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                          {member.focus}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="bg-[#070b14]/70 border border-slate-800/80 rounded-xl p-3.5 mb-4 text-xs text-slate-300 italic leading-relaxed">
                      “{member.quote}”
                    </div>

                    {/* Bio snippet */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Expertise chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {member.expertise.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/60"
                        >
                          {item}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="text-[10px] text-slate-500 self-center">
                          +{member.expertise.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIndex(i);
                        setViewMode('spotlight');
                      }}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>Explore Spotlight</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={handleConsultation}
                      className="px-3 py-1.5 rounded-lg bg-blue-600/15 hover:bg-blue-600 hover:text-white text-blue-400 text-xs font-semibold transition-all duration-150 border border-blue-500/30 cursor-pointer"
                    >
                      Connect
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Direct Partnership Guarantee Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-950/40 via-[#0b1222] to-cyan-950/40 border border-blue-900/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-display">
                Zero Delegation to Junior or Outsourced Staff
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                From initial technical discovery to system rollout, your project is planned and executed by these principal engineers.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleConsultation}
            className="shrink-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-900/40 hover:shadow-blue-600/30 whitespace-nowrap cursor-pointer"
          >
            Start Technical Discovery Call
          </button>
        </div>

      </div>
    </section>
  );
};
