import { useEffect } from 'react';
import { ArrowUpRight, GitBranch, X } from 'lucide-react';
import type { ProjectItem } from '../data/resume';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/70 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl sm:p-8 dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800">
          <div>
            <p className="font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {project.kind}
            </p>
            <h2
              id="project-modal-title"
              className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0A0A0A] dark:text-zinc-50"
            >
              {project.title}
            </h2>
            <p className="mt-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
              {project.stack.join(' · ')}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-[#0A0A0A] dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {project.tagline}
        </p>

        {/* System Architecture Breakdown */}
        <div className="mt-6">
          <h3 className="font-display text-sm font-semibold text-[#0A0A0A] dark:text-zinc-100">
            System Architecture Flow
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.architectureFlow.map((node) => (
              <div
                key={node.step}
                className="rounded-xl border border-zinc-200 bg-[#FAFAFA] p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs font-medium text-[#0A0A0A] dark:text-zinc-200">
                    {node.step}
                  </span>
                  <h4 className="text-sm font-semibold text-[#0A0A0A] dark:text-zinc-100">
                    {node.component}
                  </h4>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {node.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Key Deliverables */}
        <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <h3 className="font-display text-sm font-semibold text-[#0A0A0A] dark:text-zinc-100">
            Engineering Highlights
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.highlights.map((bullet) => (
              <li key={bullet} className="leading-relaxed">
                • {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0A0A0A] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <GitBranch className="h-3.5 w-3.5" />
              <span>View on GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
