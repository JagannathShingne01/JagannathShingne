import { ArrowUpRight, BookOpen } from 'lucide-react';
import { TECH_BLOGS } from '../data/resume';

export function BlogsSection() {
  return (
    <section
      id="blogs"
      className="border-b border-zinc-200 bg-white py-16 lg:py-24 dark:border-zinc-800/80 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
              05. Technical Writing
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0A0A0A] text-balance sm:text-4xl dark:text-zinc-50">
              Tech Blogs &amp; Engineering Guides
            </h2>
          </div>

          <a
            href="https://dev.to/jagannathshingne01"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-zinc-700 whitespace-nowrap shrink-0 transition-colors hover:text-[#0A0A0A] dark:text-zinc-300 dark:hover:text-zinc-50"
          >
            <span>dev.to/jagannathshingne01</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {TECH_BLOGS.map((post, idx) => (
            <article
              key={post.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-6 transition-colors duration-150 hover:border-[#0A0A0A] dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-600"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-2 font-mono">
                    <BookOpen className="h-3.5 w-3.5 text-[#0A0A0A] dark:text-zinc-200" />
                    <span>{post.platform}</span>
                  </span>
                  <span className="font-mono text-zinc-400 dark:text-zinc-600">
                    Article {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-[#0A0A0A] dark:text-zinc-50">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 rounded-sm"
                  >
                    {post.title}
                  </a>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {post.summary}
                </p>

                <p className="mt-4 font-mono text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {post.topics.join(' · ')}
                </p>
              </div>

              <div className="mt-6 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0A0A0A] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  <span>Read on DEV Community</span>
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
