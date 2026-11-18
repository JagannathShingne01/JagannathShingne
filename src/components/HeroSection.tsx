import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  FileDown,
  GitBranch,
  Linkedin,
  Mail,
  Moon,
  Sun,
} from 'lucide-react';
import { ARCHITECTURE_NODES, HERO_METRICS, PROFILE, RESUME_PDF_URL } from '../data/resume';

interface HeroSectionProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export function HeroSection({ theme, onToggleTheme }: HeroSectionProps) {
  const [selectedNodeId, setSelectedNodeId] = useState(ARCHITECTURE_NODES[2].id);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const activeNode = ARCHITECTURE_NODES.find((node) => node.id === selectedNodeId) ?? ARCHITECTURE_NODES[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Ignore if clipboard API is unavailable
    }
  };

  return (
    <section
      id="hero"
      className="bg-architectural-grid border-b border-zinc-200 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-14 lg:pt-20 lg:pb-20">
        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Typographic Hierarchy & Reference Monochrome Actions */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  <span>{PROFILE.location}</span>
                  <span aria-hidden="true" className="mx-2 text-zinc-400 dark:text-zinc-600">
                    ·
                  </span>
                  <span className="text-zinc-950 dark:text-zinc-100">
                    Available for Tech Opportunities
                  </span>
                </p>

                <button
                  type="button"
                  onClick={onToggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 whitespace-nowrap shrink-0 shadow-xs transition-colors duration-150 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-3.5 w-3.5" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-3.5 w-3.5" />
                      <span>Dark</span>
                    </>
                  )}
                </button>
              </div>

              <h1 className="mt-7 font-display text-4xl font-bold tracking-tight text-[#0A0A0A] text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08] dark:text-zinc-50">
                Hi, I&apos;m{' '}
                <span className="relative inline-block">
                  <span>{PROFILE.name}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 360 14"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-3 w-full text-[#0A0A0A] dark:text-zinc-100"
                  >
                    <path
                      d="M2 8 Q 10 2, 18 8 T 34 8 T 50 8 T 66 8 T 82 8 T 98 8 T 114 8 T 130 8 T 146 8 T 162 8 T 178 8 T 194 8 T 210 8 T 226 8 T 242 8 T 258 8 T 274 8 T 290 8 T 306 8 T 322 8 T 338 8 T 354 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-7 font-display text-xl font-bold text-zinc-800 sm:text-2xl dark:text-zinc-200">
                {PROFILE.role}{' '}
                <span aria-hidden="true" className="font-normal text-zinc-400 dark:text-zinc-600">
                  —
                </span>
              </p>
              <p className="mt-1.5 text-base font-medium text-zinc-600 sm:text-lg dark:text-zinc-400">
                Led end-to-end architecture across microservices, real-time systems, and agentic AI
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                {PROFILE.summary}
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {/* Primary Action Row with direct PDF download */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={RESUME_PDF_URL}
                  download="Jagannath_Shingne_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-5 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-[#09090B]"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-3 font-mono text-xs font-medium text-zinc-900 whitespace-nowrap shrink-0 shadow-xs transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                >
                  <Mail className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
                  <span>{PROFILE.email}</span>
                  {copiedEmail ? (
                    <Check className="h-3.5 w-3.5 text-zinc-950 dark:text-zinc-100" />
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
                  )}
                </button>
              </div>

              {/* Connect Quick Strip */}
              <div className="flex flex-wrap items-center gap-3 border-t border-zinc-200/80 pt-5 dark:border-zinc-800">
                <span className="font-mono text-[11px] font-medium tracking-wider text-zinc-400 dark:text-zinc-500">
                  CONNECT:
                </span>

                <a
                  href="https://www.linkedin.com/in/jagannath-shingne-201aba236"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-zinc-800 whitespace-nowrap shrink-0 shadow-xs transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>

                <a
                  href="https://github.com/JagannathShingne01"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-zinc-800 whitespace-nowrap shrink-0 shadow-xs transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600"
                >
                  <GitBranch className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-zinc-800 whitespace-nowrap shrink-0 shadow-xs transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Monochrome Interactive Architecture Blueprint */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/70">
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
                  <div>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      Production Architecture Blueprint
                    </p>
                    <h2 className="mt-0.5 font-display text-lg font-semibold text-zinc-950 dark:text-zinc-100">
                      End-to-End Stack Topology
                    </h2>
                  </div>
                  <span className="font-mono text-xs font-medium text-zinc-950 dark:text-zinc-200">
                    4 Layers
                  </span>
                </div>

                {/* Interactive Stack Layer Selector */}
                <div className="mt-4 grid grid-cols-1 gap-2" role="tablist" aria-label="Architecture Layers">
                  {ARCHITECTURE_NODES.map((node) => {
                    const isSelected = node.id === activeNode.id;
                    return (
                      <button
                        key={node.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedNodeId(node.id)}
                        className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 cursor-pointer ${
                          isSelected
                            ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950'
                            : 'border-zinc-200 bg-[#FAFAFA] text-zinc-800 hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300 dark:hover:border-zinc-700'
                        }`}
                      >
                        <div className="min-w-0">
                          <span
                            className={`block font-mono text-[11px] ${
                              isSelected
                                ? 'text-zinc-300 dark:text-zinc-600'
                                : 'text-zinc-500 dark:text-zinc-400'
                            }`}
                          >
                            {node.layer}
                          </span>
                          <span className="mt-0.5 block truncate text-sm font-semibold">
                            {node.title}
                          </span>
                        </div>
                        <span
                          className={`font-mono text-xs shrink-0 ${
                            isSelected
                              ? 'text-white dark:text-zinc-950'
                              : 'text-zinc-400 dark:text-zinc-500'
                          }`}
                        >
                          {isSelected ? 'Active' : 'Inspect'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Node Inspection Panel */}
              <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                <p className="font-mono text-xs font-medium text-zinc-950 dark:text-zinc-200">
                  {activeNode.stack}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {activeNode.summary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Strip */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-zinc-200 pt-8 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800">
          {HERO_METRICS.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="font-mono text-2xl font-medium tracking-tight text-[#0A0A0A] sm:text-3xl dark:text-zinc-50">
                {item.value}
              </span>
              <span className="mt-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                {item.label}
              </span>
              <span className="mt-0.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {item.context}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
