import { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Database, Sparkles, Radio, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import ProjectDetailsModal from './ProjectDetailsModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'rupas-query':
        return Database;
      case 'studentpath-ai':
        return Sparkles;
      case 'iot-smart-waste-management':
        return Radio;
      default:
        return Database;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase mb-2">
            Selected Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Practical Software Projects
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Full-stack applications designed around genuine engineering needs: interactive database learning, structured student roadmaps, and sensor data processing.
          </p>
        </div>

        {/* Projects Grid: Exactly 3 Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const Icon = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                className="group rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 flex flex-col justify-between overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-200 hover:shadow-md"
              >
                {/* Project Header & Visual Block */}
                <div>
                  {/* Subtle technical visual banner representing the project's domain */}
                  <div className="p-6 bg-zinc-50 dark:bg-zinc-950/80 border-b border-zinc-100 dark:border-zinc-800/80 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 font-semibold">
                        0{idx + 1} // FULL STACK
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Unboxed Technology Badges */}
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Feature Highlights */}
                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                        Core Capabilities
                      </div>
                      <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                        {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/30 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors py-2 focus-visible:outline-hidden"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal for Project Deep Dive */}
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
