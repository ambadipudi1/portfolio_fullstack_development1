import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';
import { downloadResumeHtml } from '../utils/resumeDownload';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
    >
      <div className="relative w-full max-w-4xl bg-white text-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Controls Header (Hidden during actual print) */}
        <div className="no-print px-6 py-4 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
              ATS-Standard Developer Resume
            </span>
            <span className="text-xs text-zinc-500">· Ambadipudi Rupavani</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded-md hover:bg-zinc-100 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={downloadResumeHtml}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download HTML</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted ATS Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans leading-relaxed text-zinc-900 select-text bg-white">
          
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-4 mb-6">
            <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-zinc-900">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-indigo-700 mt-1">
              {PERSONAL_INFO.headline}
            </p>
            
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-600 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-zinc-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-zinc-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-indigo-600 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3 h-3 text-zinc-400" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                  github.com/ambadipudi1
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-zinc-400" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                  linkedin.com/in/ambadipudi-rupavani
                </a>
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase font-bold text-zinc-900 tracking-wider border-b border-zinc-300 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu) => (
                <div key={edu.institution} className="text-xs">
                  <div className="flex justify-between font-bold text-zinc-900 text-sm">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-xs font-normal text-zinc-600">{edu.location}</span>
                  </div>
                  <div className="flex justify-between text-zinc-700 mt-0.5">
                    <span>{edu.degree}</span>
                    <span className="font-mono font-semibold text-zinc-900">{edu.timeline} · {edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase font-bold text-zinc-900 tracking-wider border-b border-zinc-300 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.name} className="flex flex-col sm:flex-row sm:items-baseline">
                  <span className="font-semibold text-zinc-900 sm:w-48 shrink-0">{cat.name}:</span>
                  <span className="text-zinc-700">{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase font-bold text-zinc-900 tracking-wider border-b border-zinc-300 pb-1 mb-3">
              Technical Projects
            </h2>
            <div className="space-y-4 text-xs">
              {PROJECTS.map((p) => (
                <div key={p.id}>
                  <div className="flex justify-between font-bold text-zinc-900 text-sm">
                    <span>{p.title} &mdash; <span className="font-normal text-xs text-zinc-600">{p.subtitle}</span></span>
                    <span className="font-mono text-[11px] text-indigo-700">{p.githubUrl.replace('https://', '')}</span>
                  </div>
                  <div className="text-zinc-600 font-mono text-[11px] mb-1">
                    <strong>Tech:</strong> {p.technologies.join(', ')}
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-zinc-700 leading-relaxed">
                    <li><strong>Problem & Solution:</strong> {p.solution}</li>
                    <li><strong>Key Features:</strong> {p.keyFeatures.slice(0, 3).join('; ')}.</li>
                    <li><strong>Engineering:</strong> {p.engineeringHighlights[0]}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-zinc-900 tracking-wider border-b border-zinc-300 pb-1 mb-3">
              Achievements & Learning Tracks
            </h2>
            <ul className="list-disc pl-4 space-y-1.5 text-xs text-zinc-700 leading-relaxed">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach.title}>
                  <strong>{ach.title}</strong> ({ach.organizer}): {ach.focus} &ndash; {ach.description}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
