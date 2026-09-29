import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase mb-2">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Rigorous foundations in computer science, software engineering principles, database architectures, and machine learning.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6 max-w-4xl">
          {EDUCATION.map((edu, idx) => (
            <div
              key={edu.institution}
              className="p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                      {idx === 0 ? 'UNDERGRADUATE DEGREE' : 'HIGHER SECONDARY (12TH)'}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-0.5">
                    {edu.degree}
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.score}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1 text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.timeline}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>{edu.location}</span>
              </div>

              {edu.highlights && (
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-1.5">
                  {edu.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                      <span className="text-indigo-500 font-bold">·</span>
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
