import { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Cpu,
  Lock,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, typeof Code> = {
    'Programming Languages': Code,
    Frontend: Layout,
    Backend: Server,
    Databases: Database,
    'AI / ML': Cpu,
    'Authentication & Security': Lock,
    'Tools & Platforms': Wrench,
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.name)];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase mb-2">
              Capabilities & Tooling
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Technical Skills
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
              Practical competencies applied directly in full-stack architecture, backend services, relational data models, and purposeful AI integration.
            </p>
          </div>

          {/* Category Filter Buttons (Interactive filter tabs conforming to frontend skill) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-200/60 dark:bg-zinc-900/80 rounded-lg border border-zinc-300/60 dark:border-zinc-800 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComponent = categoryIcons[cat.name] || Code;
            return (
              <div
                key={cat.name}
                className="rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-6 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-5 leading-normal">
                    {cat.description}
                  </p>

                  {/* Skills List with unboxed metadata discipline */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between py-1.5 px-2.5 rounded-md bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/50 dark:border-zinc-800/60"
                      >
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                          {skill.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Applied in real projects
                  </span>
                  <span className="font-mono">{cat.skills.length} competencies</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
