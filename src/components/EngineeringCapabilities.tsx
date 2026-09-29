import { Layout, Server, Database, Cpu, Check } from 'lucide-react';
import { CAPABILITIES } from '../data/portfolioData';

export default function EngineeringCapabilities() {
  const iconMap: Record<string, typeof Layout> = {
    Layout,
    Server,
    Database,
    Cpu,
  };

  return (
    <section id="engineering" className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/40 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase mb-2">
            Engineering Scope
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            What I Build
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Bridging client interfaces, server logic, database integrity, and modern AI models with clean, maintainable software engineering practices.
          </p>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap) => {
            const Icon = iconMap[cap.iconName] || Layout;
            return (
              <div
                key={cap.title}
                className="p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {cap.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                  {cap.description}
                </p>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/70 space-y-2">
                  {cap.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
