import { useState } from 'react';
import { SKILL_GROUPS, type SkillGroup } from '../data/resume';

type ClusterFilter = 'all' | SkillGroup['cluster'];

const CLUSTER_TABS: { id: ClusterFilter; label: string }[] = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & Languages' },
  { id: 'data-messaging', label: 'Databases & Real-Time' },
  { id: 'cloud-ai', label: 'Cloud, DevOps & AI' },
];

export function SkillsSection() {
  const [cluster, setCluster] = useState<ClusterFilter>('all');

  const visibleGroups =
    cluster === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.cluster === cluster);

  return (
    <section
      id="skills"
      className="border-b border-zinc-200 bg-white py-16 lg:py-24 dark:border-zinc-800/80 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
              03. Technical Capabilities
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0A0A0A] text-balance sm:text-4xl dark:text-zinc-50">
              Skills &amp; Engineering Stack
            </h2>
          </div>

          <div
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-zinc-200 bg-[#FAFAFA] p-1 self-start dark:border-zinc-800 dark:bg-zinc-900"
            role="tablist"
            aria-label="Filter skill categories"
          >
            {CLUSTER_TABS.map((tab) => {
              const isActive = cluster === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCluster(tab.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A0A0A] text-white dark:bg-zinc-100 dark:text-zinc-950'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Structural Skill Matrix — No Pill Enclosures */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleGroups.map((group, idx) => (
            <div
              key={group.id}
              className="rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div className="flex items-baseline justify-between gap-4 border-b border-zinc-200 pb-3 dark:border-zinc-800">
                <h3 className="font-display text-base font-semibold text-[#0A0A0A] dark:text-zinc-100">
                  {group.category}
                </h3>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
