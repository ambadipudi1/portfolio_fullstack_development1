import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowDown, Download, Terminal, Database, Cpu, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumeHtml } from '../utils/resumeDownload';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'architecture' | 'schema' | 'api'>('architecture');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="home" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Unboxed Metadata kicker (anti-pill rule compliant) */}
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium">
              <span>B.Tech CSE (AI & ML)</span>
              <span aria-hidden="true">·</span>
              <span>Class of 2027</span>
              <span aria-hidden="true">·</span>
              <span>Hyderabad, India</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 active:scale-95 transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={downloadResumeHtml}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700/80 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 underline underline-offset-4 px-2 py-1"
              >
                Quick Preview
              </button>
            </div>

            {/* Social Links & Subtly Displayed Direct Contact */}
            <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-zinc-600 dark:text-zinc-400">
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
                <span className="font-mono">github/ambadipudi1</span>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-mono">linkedin/ambadipudi-rupavani</span>
              </a>

              {/* Email with copy */}
              <div className="inline-flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-zinc-500" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-mono"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  title="Copy email"
                  className="p-1 hover:text-zinc-900 dark:hover:text-zinc-100 text-zinc-400"
                >
                  {copiedItem === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone with copy */}
              <div className="inline-flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-zinc-500" />
                <span className="font-mono">{PERSONAL_INFO.phone}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  title="Copy phone"
                  className="p-1 hover:text-zinc-900 dark:hover:text-zinc-100 text-zinc-400"
                >
                  {copiedItem === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Subtle Technical Visual (Interactive System Architecture & Code Terminal) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 text-zinc-100 shadow-xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-zinc-400 font-sans text-xs">stack-architecture.spec</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>TypeScript 5.x</span>
                </div>
              </div>

              {/* Code Tab Bar */}
              <div className="flex border-b border-zinc-800 bg-zinc-900/90 px-2 text-[11px]">
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'architecture'
                      ? 'border-indigo-400 text-indigo-300 font-medium'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Cpu className="w-3 h-3" />
                  <span>architecture.ts</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('schema')}
                  className={`px-3 py-1.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'schema'
                      ? 'border-indigo-400 text-indigo-300 font-medium'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Database className="w-3 h-3" />
                  <span>schema.sql</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('api')}
                  className={`px-3 py-1.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'api'
                      ? 'border-indigo-400 text-indigo-300 font-medium'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Terminal className="w-3 h-3" />
                  <span>api-routes.ts</span>
                </button>
              </div>

              {/* Code Panel Body */}
              <div className="p-4 overflow-x-auto text-[11.5px] leading-relaxed select-text">
                {activeTab === 'architecture' && (
                  <div className="space-y-1">
                    <p className="text-zinc-500">{'// Full-stack application contract'}</p>
                    <p>
                      <span className="text-purple-400">export interface</span>{' '}
                      <span className="text-amber-300">SoftwareStack</span> {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">frontend:</span>{' '}
                      <span className="text-emerald-300">'React'</span> |{' '}
                      <span className="text-emerald-300">'TypeScript'</span> |{' '}
                      <span className="text-emerald-300">'Tailwind CSS'</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">backend:</span>{' '}
                      <span className="text-emerald-300">'Node.js'</span> |{' '}
                      <span className="text-emerald-300">'Express'</span> |{' '}
                      <span className="text-emerald-300">'Django REST'</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">database:</span>{' '}
                      <span className="text-emerald-300">'SQLite'</span> |{' '}
                      <span className="text-emerald-300">'MySQL'</span> (Relational Normalization);
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">authSecurity:</span>{' '}
                      <span className="text-emerald-300">'JWT'</span> |{' '}
                      <span className="text-emerald-300">'bcrypt'</span> (Role-Based Access);
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">aiIntegration:</span>{' '}
                      <span className="text-emerald-300">'Gemini API'</span> (Tutoring, Hinting, Guidance);
                    </p>
                    <p>{'}'}</p>
                    <p className="pt-2 text-zinc-500">{'// Candidate profile: Practical & reliable'}</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-300">developer</span> = {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">name:</span>{' '}
                      <span className="text-emerald-300">"Ambadipudi Rupavani"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">graduation:</span>{' '}
                      <span className="text-amber-300">2027</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">cgpa:</span>{' '}
                      <span className="text-cyan-300">9.04</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">focus:</span>{' '}
                      <span className="text-emerald-300">"Full Stack + AI/ML Engineering"</span>
                    </p>
                    <p>{'};'}</p>
                  </div>
                )}

                {activeTab === 'schema' && (
                  <div className="space-y-1">
                    <p className="text-zinc-500">{'-- RUPA\'s Query: Schema Design'}</p>
                    <p>
                      <span className="text-purple-400">CREATE TABLE</span>{' '}
                      <span className="text-amber-300">sql_submissions</span> {'('}
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">submission_id</span>{' '}
                      <span className="text-blue-400">INTEGER PRIMARY KEY AUTOINCREMENT</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">user_id</span>{' '}
                      <span className="text-blue-400">INTEGER REFERENCES</span>{' '}
                      <span className="text-amber-300">users</span>(id),
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">query_text</span>{' '}
                      <span className="text-blue-400">TEXT NOT NULL</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">is_correct</span>{' '}
                      <span className="text-blue-400">BOOLEAN DEFAULT 0</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">execution_time_ms</span>{' '}
                      <span className="text-blue-400">REAL</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-300">created_at</span>{' '}
                      <span className="text-blue-400">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>
                    </p>
                    <p>{');'}</p>
                    <p className="pt-2 text-zinc-500">{'-- Normalized indexing for streak tracking'}</p>
                    <p>
                      <span className="text-purple-400">CREATE INDEX</span>{' '}
                      <span className="text-cyan-300">idx_user_submissions</span>{' '}
                      <span className="text-purple-400">ON</span> sql_submissions(user_id, is_correct);
                    </p>
                  </div>
                )}

                {activeTab === 'api' && (
                  <div className="space-y-1">
                    <p className="text-zinc-500">{'// RESTful API route handler'}</p>
                    <p>
                      <span className="text-blue-400">router</span>.
                      <span className="text-amber-300">post</span>(
                      <span className="text-emerald-300">'/api/query/evaluate'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">authenticateJwt</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">async</span> (req, res) =&gt; {'{'}
                    </p>
                    <p className="pl-8">
                      <span className="text-purple-400">const</span> {'{'} query, problemId, mode {'}'} = req.body;
                    </p>
                    <p className="pl-8 text-zinc-500">{'// Isolated sandbox SQL query execution'}</p>
                    <p className="pl-8">
                      <span className="text-purple-400">const</span> result ={' '}
                      <span className="text-purple-400">await</span> executeSafeSql(query, problemId);
                    </p>
                    <p className="pl-8">
                      <span className="text-purple-400">if</span> (!result.passed && mode ==={' '}
                      <span className="text-emerald-300">'hint'</span>) {'{'}
                    </p>
                    <p className="pl-12">
                      <span className="text-purple-400">const</span> hint ={' '}
                      <span className="text-purple-400">await</span> tutorWithGemini(result.error);
                    </p>
                    <p className="pl-12">
                      <span className="text-purple-400">return</span> res.json({'{'} ...result, hint {'}'});
                    </p>
                    <p className="pl-8">{'}'}</p>
                    <p className="pl-8">
                      res.json({'{'} ...result, xpGained: 25 {'}'});
                    </p>
                    <p className="pl-4">{'}'}</p>
                    <p>);</p>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-1.5 bg-zinc-950 border-t border-zinc-800 text-[10.5px] text-zinc-400 flex items-center justify-between">
                <span>Clean Architecture · RESTful · Tested</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Ready to deploy
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
