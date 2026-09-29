import { GraduationCap, MapPin, Award, BookOpen, Layers, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      label: 'Academic Program',
      value: 'B.Tech CSE – AI & ML',
      detail: 'Malla Reddy College of Engineering and Technology (MRCET)',
      icon: GraduationCap,
    },
    {
      label: 'Graduation Timeline',
      value: 'Expected 2027',
      detail: 'Currently in pre-final year studies',
      icon: BookOpen,
    },
    {
      label: 'Academic Standing',
      value: 'CGPA: 9.04 / 10',
      detail: 'Top percentile in core engineering coursework',
      icon: Award,
    },
    {
      label: 'Current Location',
      value: 'Hyderabad, India',
      detail: 'Telangana, India (Open to local & remote opportunities)',
      icon: MapPin,
    },
  ];

  const focusAreas = [
    {
      title: 'Full Stack Development',
      desc: 'Building responsive React user interfaces that connect seamlessly with Node.js and Express REST services.',
      icon: Layers,
    },
    {
      title: 'Backend & SQL Databases',
      desc: 'Writing normalized database schemas, optimizing complex SQL queries, and handling secure JWT authentication.',
      icon: Terminal,
    },
    {
      title: 'Purposeful AI Integration',
      desc: 'Applying Gemini API for structured tasks such as tutoring, code debugging, and educational guidance.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase mb-2">
            Background & Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-4 space-y-3 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p>{PERSONAL_INFO.bio1}</p>
            <p>{PERSONAL_INFO.bio2}</p>
          </div>
        </div>

        {/* Highlighted Academic & Location Facts */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </span>
                </div>
                <div className="text-base font-bold text-zinc-900 dark:text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Areas of Interest */}
        <div className="mt-12 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-6">
            Primary Engineering Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area) => {
              const AreaIcon = area.icon;
              return (
                <div
                  key={area.title}
                  className="p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    <AreaIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
                    {area.title}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
