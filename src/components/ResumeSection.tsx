import { Download, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { downloadResumeHtml } from '../utils/resumeDownload';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export default function ResumeSection({ onOpenResumeModal }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-16 sm:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/40 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm text-center relative overflow-hidden">
          
          {/* Subtle icon backdrop */}
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center mb-6">
            <FileText className="w-7 h-7" />
          </div>

          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase mb-2">
            Curriculum Vitae
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            My Resume
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Interested in my technical background and projects?
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={downloadResumeHtml}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 active:scale-95 transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-indigo-500"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 active:scale-95 transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-indigo-500"
            >
              <Eye className="w-4 h-4 text-indigo-500" />
              <span>View Resume</span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              ATS Parsable Format
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Verified Academic Credentials
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Updated 2026/2027 Profile
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
