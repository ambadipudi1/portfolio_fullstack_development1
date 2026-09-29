import { useState } from 'react';
import {
  X,
  Github,
  Play,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Database,
  Radio,
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  if (!project) return null;

  // State for interactive demos inside the modal
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'demo'>('overview');

  // Demo state for RUPA's Query
  const [sqlQuery, setSqlQuery] = useState("SELECT learner_name, xp_score, current_streak FROM learners WHERE current_streak >= 5 ORDER BY xp_score DESC;");
  const [sqlResult, setSqlResult] = useState<Array<Record<string, string | number>>>([
    { learner_name: 'Ambadipudi Rupavani', xp_score: 1450, current_streak: 14 },
    { learner_name: 'Priya Sharma', xp_score: 1280, current_streak: 9 },
    { learner_name: 'Kiran Kumar', xp_score: 980, current_streak: 6 },
  ]);
  const [aiTutorHint, setAiTutorHint] = useState<string | null>(
    "AI Tutor: Query syntax is optimal. It uses the index on current_streak and correctly orders by xp_score descending."
  );

  // Demo state for IoT Waste Management
  const [binFillLevel, setBinFillLevel] = useState<number>(78);

  // Demo state for StudentPath AI
  const [selectedMilestone, setSelectedMilestone] = useState<number>(1);

  const handleRunSqlQuery = () => {
    if (sqlQuery.toLowerCase().includes('select')) {
      setSqlResult([
        { learner_name: 'Ambadipudi Rupavani', xp_score: 1450, current_streak: 14 },
        { learner_name: 'Priya Sharma', xp_score: 1280, current_streak: 9 },
        { learner_name: 'Kiran Kumar', xp_score: 980, current_streak: 6 },
      ]);
      setAiTutorHint(
        "AI Tutor (Evaluation Mode): Query executed successfully in 4.2ms against SQLite sample schema. All relational constraints satisfied!"
      );
    } else {
      setAiTutorHint("AI Tutor (Debug Mode): Please supply a valid SELECT statement to inspect data.");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800 flex items-start justify-between bg-zinc-50 dark:bg-zinc-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium">
              <span>Full-Stack Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Open Source</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Sub-Nav Tabs */}
        <div className="px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center gap-4 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Problem & Solution</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('workflow')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'workflow'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Workflow & Engineering</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('demo')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'demo'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <Play className="w-3.5 h-3.5 text-indigo-500" />
            <span>Interactive Simulator</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Problem vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-semibold text-xs uppercase font-mono mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>The Real Problem</span>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-semibold text-xs uppercase font-mono mb-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>The Software Solution</span>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-700 dark:text-zinc-300 leading-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: WORKFLOW & ENGINEERING */}
          {activeTab === 'workflow' && (
            <div className="space-y-6">
              
              {/* Engineering Highlights */}
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800">
                <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>Engineering Highlights</span>
                </div>
                <div className="space-y-2.5">
                  {project.engineeringHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold shrink-0">
                        [0{idx + 1}]
                      </span>
                      <p className="leading-relaxed">{hl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Workflow Steps */}
              {project.workflowSteps && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
                    Application Architecture & Execution Workflow
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {project.workflowSteps.map((step) => (
                      <div
                        key={step.step}
                        className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                              STEP {step.step}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 hidden lg:block" />
                          </div>
                          <h4 className="text-xs font-bold text-zinc-900 dark:text-white mb-1">
                            {step.title}
                          </h4>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-normal">
                            {step.description}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[10.5px] font-mono text-zinc-400">
                          {step.tech}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Summary */}
              <div className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/40 p-3 rounded-lg font-mono">
                <span className="font-bold text-zinc-700 dark:text-zinc-300">Stack Synthesis: </span>
                {project.engineering}
              </div>

            </div>
          )}

          {/* TAB 3: INTERACTIVE SIMULATOR */}
          {activeTab === 'demo' && (
            <div className="space-y-4">
              
              {/* Project 1 Simulator: SQL Sandbox */}
              {project.id === 'rupas-query' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                      <Database className="w-4 h-4 text-indigo-500" />
                      Interactive SQL Editor Simulator
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">Target: SQLite (Read-Only Sandbox)</span>
                  </div>

                  {/* SQL Input Area */}
                  <div className="relative">
                    <textarea
                      value={sqlQuery}
                      onChange={(e) => setSqlQuery(e.target.value)}
                      rows={3}
                      className="w-full p-3 font-mono text-xs rounded-lg bg-zinc-950 text-emerald-400 border border-zinc-800 focus:outline-hidden focus:border-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={handleRunSqlQuery}
                      className="absolute right-3 bottom-3 px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      Run Query
                    </button>
                  </div>

                  {/* Tabular Output */}
                  <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                    <div className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/80 text-[11px] font-mono text-zinc-500 flex justify-between">
                      <span>Query Output (3 records matched)</span>
                      <span>Execution: 4.2ms</span>
                    </div>
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                        <tr>
                          <th className="py-2 px-3">learner_name</th>
                          <th className="py-2 px-3">xp_score</th>
                          <th className="py-2 px-3">current_streak</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {sqlResult.map((row, idx) => (
                          <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                            <td className="py-2 px-3 text-zinc-900 dark:text-white font-medium">{row.learner_name}</td>
                            <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400">{row.xp_score} XP</td>
                            <td className="py-2 px-3 text-emerald-600 dark:text-emerald-400">{row.current_streak} days</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* AI Tutor feedback box */}
                  {aiTutorHint && (
                    <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-xs text-indigo-900 dark:text-indigo-200 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{aiTutorHint}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Project 2 Simulator: StudentPath AI */}
              {project.id === 'studentpath-ai' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-indigo-500" />
                      Milestone Progression & AI Guidance Simulator
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">Roadmap: Full Stack Engineer (2027)</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        id: 1,
                        title: 'Foundational CS & DBMS',
                        status: 'Completed',
                        desc: 'Data Structures, Algorithms, SQL Normalization, SQLite schema design',
                      },
                      {
                        id: 2,
                        title: 'Full Stack Web Engineering',
                        status: 'Active Track',
                        desc: 'React SPA, Node/Express REST APIs, JWT authentication, and state management',
                      },
                      {
                        id: 3,
                        title: 'Practical AI Integration',
                        status: 'In Progress',
                        desc: 'Gemini API function calling, prompt templates, and RAG evaluation',
                      },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedMilestone(m.id)}
                        className={`p-3 text-left rounded-lg border transition-all ${
                          selectedMilestone === m.id
                            ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 ring-1 ring-indigo-500'
                            : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400">
                            Phase 0{m.id}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-zinc-600 dark:text-zinc-400">
                            {m.status}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-zinc-900 dark:text-white mb-1">
                          {m.title}
                        </div>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                          {m.desc}
                        </p>
                      </button>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-lg bg-zinc-900 text-zinc-100 text-xs font-mono space-y-2">
                    <div className="flex items-center justify-between text-indigo-400 border-b border-zinc-800 pb-1.5">
                      <span>Gemini Guidance Engine Response (Phase 0{selectedMilestone})</span>
                      <span className="text-zinc-500 text-[10.5px]">Status: 200 OK</span>
                    </div>
                    {selectedMilestone === 1 && (
                      <p className="text-zinc-300">
                        {'> '}Solid foundation in relational databases achieved (9.04 CGPA). Recommended next activity: implement complex joins and transaction isolation in Express REST endpoints.
                      </p>
                    )}
                    {selectedMilestone === 2 && (
                      <p className="text-zinc-300">
                        {'> '}Active milestone velocity on track. Recommendation: verify JWT expiration renewal and bcrypt salt rounds (10+) across Express auth middleware.
                      </p>
                    )}
                    {selectedMilestone === 3 && (
                      <p className="text-zinc-300">
                        {'> '}AI integration goal: construct structured JSON schema output templates for Gemini API calls to ensure zero prompt formatting drift.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Project 3 Simulator: IoT Waste Management */}
              {project.id === 'iot-smart-waste-management' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                      <Radio className="w-4 h-4 text-indigo-500" />
                      IoT Sensor Fill-Level & Threshold Simulator
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">Node.js Telemetry Ingestion</span>
                  </div>

                  <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-4">
                    <div className="flex items-center justify-between">
                      <label htmlFor="fill-slider" className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        Adjust Simulated Bin Fill Level:
                      </label>
                      <span className="text-sm font-bold font-mono text-zinc-900 dark:text-white">
                        {binFillLevel}%
                      </span>
                    </div>

                    <input
                      id="fill-slider"
                      type="range"
                      min="10"
                      max="100"
                      value={binFillLevel}
                      onChange={(e) => setBinFillLevel(Number(e.target.value))}
                      className="w-full accent-indigo-600 cursor-pointer"
                    />

                    {/* Visual Bin Representation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-2">
                      <div className="h-16 w-full bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden relative border border-zinc-300 dark:border-zinc-700 flex items-end">
                        <div
                          style={{ height: `${binFillLevel}%` }}
                          className={`w-full transition-all duration-200 ${
                            binFillLevel >= 90
                              ? 'bg-rose-500'
                              : binFillLevel >= 75
                              ? 'bg-amber-500'
                              : 'bg-emerald-500'
                          }`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold text-zinc-900 dark:text-white drop-shadow-sm">
                          Bin Capacity: {binFillLevel}%
                        </div>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500">System Threshold:</span>
                          <span className="font-mono text-zinc-700 dark:text-zinc-300">Warning @ 75% | Critical @ 90%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500">Dispatch Status:</span>
                          <span
                            className={`font-semibold font-mono ${
                              binFillLevel >= 90
                                ? 'text-rose-600 dark:text-rose-400'
                                : binFillLevel >= 75
                                ? 'text-amber-600 dark:text-amber-400'
                                : 'text-emerald-600 dark:text-emerald-400'
                            }`}
                          >
                            {binFillLevel >= 90
                              ? 'CRITICAL ALERT (Pickup Dispatched)'
                              : binFillLevel >= 75
                              ? 'WARNING (Queued for Next Route)'
                              : 'NORMAL (No Action Required)'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-center justify-between">
          <div className="text-xs text-zinc-500 font-mono">
            Repository: ambadipudi1/{project.id}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View on GitHub</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
