import { DEVELOPMENT_APPROACH } from '../data/portfolioData';

export default function DevelopmentApproach() {
  return (
    <section className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase mb-2">
            Engineering Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Development Approach
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A pragmatic engineering workflow focusing on real user requirements, clean system modularity, and disciplined AI adoption.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-8 z-0" />

          {/* Vertical connecting line on mobile */}
          <div className="lg:hidden absolute top-4 bottom-4 left-4 w-0.5 bg-zinc-200 dark:bg-zinc-800 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {DEVELOPMENT_APPROACH.map((item) => (
              <div
                key={item.step}
                className="relative pl-10 lg:pl-0 flex flex-col justify-between"
              >
                {/* Step indicator node */}
                <div className="lg:mb-6 flex items-center">
                  <div className="absolute left-1.5 top-0 lg:static w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center text-[10px] font-mono font-bold shadow-xs">
                    {item.step}
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xs h-full">
                  <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                    STEP {item.step}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
