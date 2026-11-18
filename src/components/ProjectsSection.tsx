import { useState } from 'react';
import { ArrowUpRight, GitBranch, Layers } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/resume';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type ProjectFilter = 'all' | 'Distributed Systems' | 'Full-Stack Web';

function ProjectDiagramPreview({ type }: { type: ProjectItem['diagramType'] }) {
  if (type === 'searchx') {
    return (
      <svg
        viewBox="0 0 360 140"
        className="h-36 w-full rounded-xl border border-zinc-200 bg-[#FAFAFA] dark:border-zinc-800 dark:bg-zinc-950"
        role="img"
        aria-label="SearchX PostgreSQL, RabbitMQ, Elasticsearch, and Redis autocomplete pipeline"
      >
        <g fill="none" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" strokeWidth="1.2">
          <path d="M90 42 L134 42" />
          <path d="M222 42 L262 42" />
          <path d="M302 60 L302 86" />
          <path d="M262 104 L222 104" />
          <path d="M134 104 L90 104" />
        </g>
        <g>
          <rect x="14" y="24" width="76" height="36" rx="7" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
          <text x="52" y="40" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[9px] font-mono">CRUD API</text>
          <text x="52" y="52" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-[8px] font-mono">PostgreSQL</text>

          <rect x="134" y="24" width="88" height="36" rx="7" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
          <text x="178" y="40" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[9px] font-mono">RabbitMQ</text>
          <text x="178" y="52" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-[8px] font-mono">Worker Sync</text>

          <rect x="262" y="24" width="84" height="36" rx="7" className="fill-[#0A0A0A] stroke-[#0A0A0A] dark:fill-zinc-100 dark:stroke-zinc-100" />
          <text x="304" y="40" textAnchor="middle" className="fill-white dark:fill-zinc-950 text-[9px] font-mono">Elastic</text>
          <text x="304" y="52" textAnchor="middle" className="fill-zinc-300 dark:fill-zinc-600 text-[8px] font-mono">search Index</text>

          <rect x="262" y="86" width="84" height="36" rx="7" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
          <text x="304" y="102" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[9px] font-mono">Search API</text>
          <text x="304" y="114" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-[8px] font-mono">Autocomplete</text>

          <rect x="134" y="86" width="88" height="36" rx="7" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
          <text x="178" y="108" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[9px] font-mono">Redis Cache</text>

          <rect x="14" y="86" width="76" height="36" rx="7" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
          <text x="52" y="108" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[9px] font-mono">Next.js UI</text>
        </g>
      </svg>
    );
  }

  if (type === 'webrtc') {
    return (
      <svg
        viewBox="0 0 360 140"
        className="h-36 w-full rounded-xl border border-zinc-200 bg-[#FAFAFA] dark:border-zinc-800 dark:bg-zinc-950"
        role="img"
        aria-label="WebRTC and WebSocket microservices topology schematic"
      >
        <g fill="none" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" strokeWidth="1.2">
          <path d="M92 48 L150 48" strokeDasharray="3 3" />
          <path d="M210 48 L268 48" />
          <path d="M180 68 L180 94" />
          <path d="M92 108 L150 108" />
          <path d="M210 108 L268 108" />
        </g>
        <g>
          <rect x="20" y="30" width="72" height="36" rx="8" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
          <text x="56" y="52" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px] font-mono">Peer A</text>

          <rect x="150" y="30" width="60" height="36" rx="8" className="fill-[#0A0A0A] stroke-[#0A0A0A] dark:fill-zinc-100 dark:stroke-zinc-100" />
          <text x="180" y="52" textAnchor="middle" className="fill-white dark:fill-zinc-950 text-[10px] font-mono">WebRTC</text>

          <rect x="268" y="30" width="72" height="36" rx="8" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
          <text x="304" y="52" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px] font-mono">Peer B</text>

          <rect x="20" y="90" width="72" height="32" rx="8" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
          <text x="56" y="110" textAnchor="middle" className="fill-zinc-600 dark:fill-zinc-400 text-[9px] font-mono">Auth Svc</text>

          <rect x="142" y="90" width="76" height="32" rx="8" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
          <text x="180" y="110" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[9px] font-mono">WebSockets</text>

          <rect x="268" y="90" width="72" height="32" rx="8" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
          <text x="304" y="110" textAnchor="middle" className="fill-zinc-600 dark:fill-zinc-400 text-[9px] font-mono">Whiteboard</text>
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 360 140"
      className="h-36 w-full rounded-xl border border-zinc-200 bg-[#FAFAFA] dark:border-zinc-800 dark:bg-zinc-950"
      role="img"
      aria-label="Coursify JWT, Razorpay, and Cloudinary architecture schematic"
    >
      <g fill="none" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" strokeWidth="1.2">
        <path d="M96 70 L140 70" />
        <path d="M220 70 L264 44" />
        <path d="M220 70 L264 70" />
        <path d="M220 70 L264 96" />
      </g>
      <g>
        <rect x="18" y="50" width="78" height="40" rx="8" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
        <text x="57" y="74" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px] font-mono">React UI</text>

        <rect x="140" y="48" width="80" height="44" rx="8" className="fill-[#0A0A0A] stroke-[#0A0A0A] dark:fill-zinc-100 dark:stroke-zinc-100" />
        <text x="180" y="68" textAnchor="middle" className="fill-white dark:fill-zinc-950 text-[10px] font-mono">Express</text>
        <text x="180" y="81" textAnchor="middle" className="fill-zinc-300 dark:fill-zinc-600 text-[8.5px] font-mono">JWT Auth</text>

        <rect x="264" y="24" width="78" height="26" rx="6" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
        <text x="303" y="41" textAnchor="middle" className="fill-zinc-700 dark:fill-zinc-300 text-[9px] font-mono">Razorpay</text>

        <rect x="264" y="57" width="78" height="26" rx="6" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
        <text x="303" y="74" textAnchor="middle" className="fill-zinc-700 dark:fill-zinc-300 text-[9px] font-mono">MongoDB</text>

        <rect x="264" y="90" width="78" height="26" rx="6" className="fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700" />
        <text x="303" y="107" textAnchor="middle" className="fill-zinc-700 dark:fill-zinc-300 text-[9px] font-mono">Cloudinary</text>
      </g>
    </svg>
  );
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const visibleProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.kind === filter);

  return (
    <section
      id="projects"
      className="border-b border-zinc-200 bg-[#FAFAFA] py-16 lg:py-24 dark:border-zinc-800/80 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
              02. Personal Engineering Projects
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0A0A0A] text-balance sm:text-4xl dark:text-zinc-50">
              Personal Projects
            </h2>
          </div>

          <div
            className="inline-flex items-center gap-1 rounded-xl border border-zinc-200 bg-white p-1 self-start sm:self-auto dark:border-zinc-800 dark:bg-zinc-900"
            role="tablist"
            aria-label="Filter personal projects"
          >
            {(['all', 'Distributed Systems', 'Full-Stack Web'] as ProjectFilter[]).map(
              (tab) => {
                const isActive = filter === tab;
                const label = tab === 'all' ? 'All Projects' : tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setFilter(tab)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 cursor-pointer ${
                      isActive
                        ? 'bg-[#0A0A0A] text-white dark:bg-zinc-100 dark:text-zinc-950'
                        : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                    }`}
                  >
                    {label}
                  </button>
                );
              },
            )}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors duration-150 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
            >
              <div>
                <p className="font-mono text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                  {project.kind}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-[#0A0A0A] dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.tagline}
                </p>

                <div className="mt-5">
                  <ProjectDiagramPreview type={project.diagramType} />
                </div>

                {/* Unboxed typographic stack list */}
                <p className="mt-4 font-mono text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {project.stack.join(' · ')}
                </p>

                <ul className="mt-4 space-y-2 border-t border-zinc-200 pt-4 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                  {project.highlights.slice(0, 3).map((point) => (
                    <li key={point} className="leading-relaxed">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A0A0A] px-3.5 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 cursor-pointer"
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 whitespace-nowrap shrink-0 transition-colors hover:text-[#0A0A0A] dark:text-zinc-300 dark:hover:text-zinc-50"
                >
                  <GitBranch className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
