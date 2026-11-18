import { useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { RESUME_PDF_URL } from '../data/resume';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/75 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
          <div>
            <h2
              id="resume-modal-title"
              className="font-display text-lg font-bold text-[#0A0A0A] dark:text-zinc-50"
            >
              Jagannath Shingne — Resume (PDF)
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Full Stack Developer · Mumbai, Maharashtra
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={RESUME_PDF_URL}
              download="Jagannath_Shingne_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A0A0A] px-3.5 py-2 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume viewer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-[#0A0A0A] dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-zinc-100 dark:bg-zinc-900">
          <iframe
            src={RESUME_PDF_URL}
            title="Jagannath Shingne Resume PDF"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
