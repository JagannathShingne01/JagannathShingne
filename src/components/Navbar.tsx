import { useState } from 'react';
import { FileDown, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/resume';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Social', href: '#connect' },
];

export function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-[#FAFAFA]/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-[#09090B]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Custom JS monogram SVG logo */}
        <a
          href="#hero"
          aria-label={`${PROFILE.name} — Home`}
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-100"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-8.5 w-8.5 shrink-0"
          >
            <rect
              width="34"
              height="34"
              rx="8"
              className="fill-[#0A0A0A] dark:fill-zinc-100"
            />
            <path
              d="M14.2 10.5V19.6C14.2 21.75 12.75 23.2 10.6 23.2C9.4 23.2 8.45 22.75 7.8 22.05L9.15 20.55C9.55 20.95 10.05 21.2 10.6 21.2C11.55 21.2 12.05 20.55 12.05 19.45V10.5H14.2ZM21.55 23.2C19.35 23.2 17.75 22.25 16.95 20.95L18.65 19.6C19.25 20.55 20.3 21.2 21.65 21.2C22.9 21.2 23.7 20.6 23.7 19.65C23.7 18.8 23.15 18.3 21.5 17.85L20.4 17.55C18.3 17 17.25 15.85 17.25 14.05C17.25 11.95 19.05 10.35 21.6 10.35C23.6 10.35 25.05 11.2 25.85 12.35L24.2 13.7C23.6 12.85 22.7 12.35 21.55 12.35C20.35 12.35 19.55 12.95 19.55 13.9C19.55 14.75 20.15 15.2 21.65 15.6L22.75 15.9C25 16.5 26 17.65 26 19.5C26 21.7 24.2 23.2 21.55 23.2Z"
              className="fill-white dark:fill-zinc-950"
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

        {/* Zone 3: Single primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A0A0A] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-[#09090B] cursor-pointer"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>Resume</span>
          </button>

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
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A0A0A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 cursor-pointer"
            >
              <FileDown className="h-4 w-4" />
              <span>Resume</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
