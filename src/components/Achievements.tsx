import { Award, Zap, Code } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Zap;
      case 1:
        return Award;
      case 2:
        return Code;
      default:
        return Award;
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/40 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase mb-2">
            Continuous Learning & Initiatives
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Achievements & Learning
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Active engagement in developer programs, enterprise technical cohorts, and team-based hackathon problem solving.
          </p>
        </div>

        {/* Achievements Grid: Exactly the 3 requested items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {item.organizer}
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  Focus: {item.focus}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
