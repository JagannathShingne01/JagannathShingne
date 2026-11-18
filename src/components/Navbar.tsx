import { useState } from 'react';
import { FileDown, Menu, X } from 'lucide-react';
import { PROFILE, RESUME_PDF_URL } from '../data/resume';

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Social', href: '#connect' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-[#FAFAFA]/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-[#09090B]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Architectural Geometric JS Monogram Emblem */}
        <a
          href="#hero"
          aria-label={`${PROFILE.name} — Home`}
          className="group inline-flex items-center gap-3 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-100"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-9 w-9 shrink-0 transition-transform duration-150 group-hover:scale-[1.03]"
          >
            {/* Outer framed architectural badge */}
            <rect
              x="1"
              y="1"
              width="34"
              height="34"
              rx="9"
              className="fill-[#0A0A0A] stroke-zinc-800 dark:fill-zinc-100 dark:stroke-zinc-300"
              strokeWidth="1"
            />
            {/* Inner subtle corner hairline cut */}
            <path
              d="M7 9.5V7H9.5M26.5 7H29V9.5M7 26.5V29H9.5M26.5 29H29V26.5"
              className="stroke-zinc-600 dark:stroke-zinc-400"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            {/* Geometric J stroke */}
            <path
              d="M15.2 11.5V20.2C15.2 22.4 13.75 23.8 11.6 23.8C10.35 23.8 9.45 23.35 8.85 22.7"
              className="stroke-white dark:stroke-zinc-950"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Geometric S stroke */}
            <path
              d="M25.6 13.3C24.85 12.1 23.55 11.5 22.05 11.5C19.95 11.5 18.55 12.7 18.55 14.35C18.55 16.05 19.95 16.9 22.15 17.5C24.45 18.12 25.95 19 25.95 20.85C25.95 22.65 24.4 23.85 22.1 23.85C20.35 23.85 18.95 23.1 18.1 21.85"
              className="stroke-white dark:stroke-zinc-950"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-mono text-sm font-semibold tracking-tight text-[#0A0A0A] dark:text-zinc-100">
            jagannath<span className="text-zinc-400 dark:text-zinc-500">.dev</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 rounded-full border border-zinc-200/90 bg-white px-5 py-2 text-xs font-medium text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 rounded-sm dark:hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Direct link to Resume PDF */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A0A0A] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-[#09090B]"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 md:hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 md:hidden dark:border-zinc-800 dark:bg-[#09090B]">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A0A0A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <FileDown className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
