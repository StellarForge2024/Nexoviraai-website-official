import React, { useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import { TeamMember } from '../types';

const accentStyles: Record<
  string,
  { glow: string; wash: string; ring: string; chip: string; text: string; orb: string }
> = {
  blue: {
    glow: 'shadow-blue-600/30',
    wash: 'from-blue-500/25 via-blue-600/5 to-transparent',
    ring: 'border-blue-400/70',
    chip: 'border-blue-800/50 bg-blue-950/50 text-blue-200',
    text: 'text-blue-300',
    orb: 'from-blue-400 to-indigo-600',
  },
  cyan: {
    glow: 'shadow-cyan-600/25',
    wash: 'from-cyan-400/20 via-cyan-700/5 to-transparent',
    ring: 'border-cyan-400/60',
    chip: 'border-cyan-800/50 bg-cyan-950/40 text-cyan-200',
    text: 'text-cyan-300',
    orb: 'from-cyan-400 to-blue-600',
  },
  indigo: {
    glow: 'shadow-indigo-600/30',
    wash: 'from-indigo-400/25 via-indigo-700/5 to-transparent',
    ring: 'border-indigo-400/60',
    chip: 'border-indigo-800/50 bg-indigo-950/50 text-indigo-200',
    text: 'text-indigo-300',
    orb: 'from-indigo-400 to-blue-700',
  },
  sky: {
    glow: 'shadow-sky-600/25',
    wash: 'from-sky-400/20 via-sky-700/5 to-transparent',
    ring: 'border-sky-400/60',
    chip: 'border-sky-800/50 bg-sky-950/40 text-sky-200',
    text: 'text-sky-300',
    orb: 'from-sky-400 to-blue-600',
  },
  teal: {
    glow: 'shadow-teal-600/25',
    wash: 'from-teal-400/20 via-teal-700/5 to-transparent',
    ring: 'border-teal-400/60',
    chip: 'border-teal-800/50 bg-teal-950/40 text-teal-200',
    text: 'text-teal-300',
    orb: 'from-teal-400 to-cyan-700',
  },
};

const slideTransition = {
  type: 'spring' as const,
  stiffness: 320,
  damping: 30,
  mass: 0.8,
};

const Portrait: React.FC<{ member: TeamMember; highlighted: boolean }> = ({ member, highlighted }) => {
  const accent = accentStyles[member.accent] ?? accentStyles.blue;

  return (
    <div
      className={`team-square relative overflow-hidden border bg-[#0b1222] bg-tech-grid ${
        highlighted ? `${accent.ring} shadow-2xl ${accent.glow}` : 'border-blue-900/35'
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${accent.wash}`} />
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      {member.image ? (
        <img
          src={member.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`relative rounded-2xl flex items-center justify-center bg-gradient-to-br ${accent.orb} ${
              highlighted ? 'w-24 h-24 sm:w-28 sm:h-28' : 'w-16 h-16 sm:w-20 sm:h-20'
            }`}
          >
            <div className="absolute inset-[3px] rounded-[14px] bg-[#070b14] flex items-center justify-center">
              <span
                className={`font-display font-bold text-white ${
                  highlighted ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'
                }`}
              >
                {member.initials}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070b14] via-[#070b14]/50 to-transparent" />
    </div>
  );
};

export const TeamIntroSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const count = teamMembers.length;
  const active = teamMembers[index];
  const activeAccent = accentStyles[active.accent] ?? accentStyles.blue;

  const goTo = useCallback(
    (nextIndex: number, dir?: number) => {
      const normalized = ((nextIndex % count) + count) % count;
      const inferred = dir ?? (normalized > index || (index === count - 1 && normalized === 0) ? 1 : -1);
      setDirection(inferred);
      setIndex(normalized);
    },
    [count, index]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) next();
    else prev();
  };

  return (
    <section className="py-24 bg-[#050811] relative border-t border-slate-800/80 overflow-hidden">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[520px] h-[240px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
            People Behind the Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Meet Our Team
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Senior engineers and specialists who partner directly with you — from discovery through launch.
          </p>
        </div>

        <div
          className="relative flex items-center gap-2 sm:gap-4"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Previous team member"
            className="shrink-0 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#0b1222] border border-blue-900/40 text-slate-200 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="relative flex-1 h-[340px] sm:h-[380px] overflow-hidden">
            {teamMembers.map((member, memberIndex) => {
              let offset = memberIndex - index;
              if (offset > Math.floor(count / 2)) offset -= count;
              if (offset < -Math.floor(count / 2)) offset += count;

              const highlighted = offset === 0;
              const visible = Math.abs(offset) <= 1;
              const left = offset <= -2 ? '-8%' : offset === -1 ? '18%' : offset === 0 ? '50%' : offset === 1 ? '82%' : '108%';

              return (
                <motion.button
                  key={member.id}
                  type="button"
                  onClick={() => visible && goTo(memberIndex, offset)}
                  aria-current={highlighted}
                  aria-hidden={!visible}
                  tabIndex={visible ? 0 : -1}
                  aria-label={`${member.name}, ${member.role}`}
                  className="absolute bottom-0 flex flex-col items-center bg-transparent border-0 p-0 cursor-pointer"
                  initial={false}
                  animate={{
                    left,
                    x: '-50%',
                    scale: highlighted ? 1.08 : 0.86,
                    opacity: highlighted ? 1 : visible ? 0.42 : 0,
                    zIndex: highlighted ? 20 : visible ? 10 : 0,
                    filter: highlighted ? 'saturate(1)' : 'saturate(0.65)',
                  }}
                  transition={slideTransition}
                >
                  <Portrait member={member} highlighted={highlighted} />
                  <div className="mt-4 w-[168px] sm:w-[196px] text-center">
                    <div
                      className={`font-display font-bold leading-tight ${
                        highlighted ? 'text-white text-lg' : 'text-slate-300 text-sm'
                      }`}
                    >
                      {member.name}
                    </div>
                    <div
                      className={`mt-1 text-xs ${highlighted ? `${activeAccent.text} font-medium` : 'text-slate-500'}`}
                    >
                      {member.role}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next team member"
            className="shrink-0 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#0b1222] border border-blue-900/40 text-slate-200 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {teamMembers.map((member, i) => (
            <button
              key={member.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${member.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? 'w-7 bg-blue-500' : 'w-1.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -48 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0b1222] border border-blue-900/30 rounded-2xl p-6 sm:p-8"
            >
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-500/20 absolute -top-1 -left-1 pointer-events-none" />
                <p className="text-lg sm:text-xl font-display font-semibold text-white leading-snug pl-4">
                  “{active.quote}”
                </p>
              </div>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">{active.bio}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.expertise.map((item) => (
                  <span
                    key={item}
                    className={`text-[11px] font-medium px-3 py-1.5 rounded-md border ${activeAccent.chip}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
