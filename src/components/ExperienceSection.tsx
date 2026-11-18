import { useState } from 'react';
import { EXPERIENCE } from '../data/resume';

type FilterCategory = 'all' | 'architecture' | 'ai-async' | 'devops-testing';

const FILTER_TABS: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Highlights' },
  { id: 'architecture', label: 'Architecture & APIs' },
  { id: 'ai-async', label: 'AI & Async Pipelines' },
  { id: 'devops-testing', label: 'DevOps & Testing' },
];

export function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredHighlights =
    activeFilter === 'all'
      ? EXPERIENCE.highlights
      : EXPERIENCE.highlights.filter((item) => item.category === activeFilter);

  return (
    <section
      id="experience"
      className="border-b border-zinc-200 bg-white py-16 lg:py-24 dark:border-zinc-800/80 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Summary Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
                01. Work Experience
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0A0A0A] text-balance sm:text-4xl dark:text-zinc-50">
                {EXPERIENCE.company}
              </h2>

              <div className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <p className="font-semibold text-zinc-900 dark:text-zinc-200">
                  {EXPERIENCE.role}
                </p>
                <p className="font-mono text-xs">
                  {EXPERIENCE.period}
                  <span aria-hidden="true" className="mx-2 text-zinc-400 dark:text-zinc-600">
                    ·
                  </span>
                  {EXPERIENCE.location}
                </p>
              </div>

              <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Flagship Product
                </p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-200">
                  {EXPERIENCE.flagship}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <div>
                  <span className="font-mono text-xl font-semibold text-[#0A0A0A] dark:text-zinc-50">
                    70–80%
                  </span>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Async latency drop
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xl font-semibold text-[#0A0A0A] dark:text-zinc-50">
                    25% / 30%
                  </span>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Faster API / less load
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Engineering Log Column */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800">
              <div
                className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-zinc-200 bg-[#FAFAFA] p-1 dark:border-zinc-800 dark:bg-zinc-900"
                role="tablist"
                aria-label="Filter experience highlights"
              >
                {FILTER_TABS.map((tab) => {
                  const isActive = activeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveFilter(tab.id)}
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

              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {filteredHighlights.length} deliverables
              </span>
            </div>

            <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
              {filteredHighlights.map((item, idx) => (
                <article
                  key={item.id}
                  className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:gap-6"
                >
                  <div className="sm:col-span-4">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-sm font-semibold text-[#0A0A0A] dark:text-zinc-100">
                        {item.title}
                      </h3>
                    </div>
                    {item.metric && (
                      <p className="mt-1 pl-6 font-mono text-xs font-medium text-zinc-900 dark:text-zinc-200">
                        {item.metric}
                      </p>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-600 sm:col-span-8 dark:text-zinc-400">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
