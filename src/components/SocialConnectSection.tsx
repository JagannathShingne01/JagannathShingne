import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Download,
  FileText,
  GitBranch,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';
import { PROFILE, RESUME_PDF_URL } from '../data/resume';

export function SocialConnectSection() {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (text: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2000);
    } catch {
      // Fallback ignored if clipboard permissions are restricted
    }
  };

  const getSocialIcon = (id: string) => {
    if (id === 'github') return <GitBranch className="h-5 w-5" />;
    if (id === 'linkedin') return <Linkedin className="h-5 w-5" />;
    return <Code2 className="h-5 w-5" />;
  };

  return (
    <section id="connect" className="bg-[#FAFAFA] py-16 lg:py-24 dark:bg-[#09090B]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
            06. Social Media &amp; Contact
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0A0A0A] text-balance sm:text-4xl dark:text-zinc-50">
            Connect Across Platforms
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Open to full-stack software engineering roles, distributed backend systems work, and AI automation collaborations.
          </p>
        </div>

        {/* Social Media Profile Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PROFILE.socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-5 transition-colors duration-150 hover:border-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-400"
            >
              <div className="flex items-center justify-between text-[#0A0A0A] dark:text-zinc-200">
                {getSocialIcon(social.id)}
                <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A] dark:group-hover:text-zinc-100" />
              </div>

              <div className="mt-5">
                <h3 className="font-display text-base font-bold text-[#0A0A0A] dark:text-zinc-50">
                  {social.label}
                </h3>
                <p className="mt-0.5 truncate font-mono text-xs font-medium text-zinc-800 dark:text-zinc-300">
                  @{social.handle}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {social.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Direct Contact & Resume PDF Row */}
        <div className="mt-6 grid grid-cols-1 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-[#FAFAFA] lg:grid-cols-3 lg:divide-x lg:divide-y-0 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="flex items-center gap-3 min-w-0">
              <Mail className="h-4 w-4 shrink-0 text-[#0A0A0A] dark:text-zinc-200" />
              <div className="min-w-0">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Direct Email</p>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="block truncate font-mono text-xs font-medium text-[#0A0A0A] hover:underline hover:underline-offset-4 dark:text-zinc-100"
                >
                  {PROFILE.email}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(PROFILE.email, 'email')}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
            >
              {copiedField === 'email' ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#0A0A0A] dark:text-zinc-100" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="flex items-center gap-3 min-w-0">
              <Phone className="h-4 w-4 shrink-0 text-[#0A0A0A] dark:text-zinc-200" />
              <div className="min-w-0">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Phone</p>
                <a
                  href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                  className="block font-mono text-xs font-medium text-[#0A0A0A] hover:underline hover:underline-offset-4 dark:text-zinc-100"
                >
                  {PROFILE.phone}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(PROFILE.phone, 'phone')}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
            >
              {copiedField === 'phone' ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#0A0A0A] dark:text-zinc-100" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="flex items-center gap-3 min-w-0">
              <FileText className="h-4 w-4 shrink-0 text-[#0A0A0A] dark:text-zinc-200" />
              <div className="min-w-0">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Resume (PDF)</p>
                <a
                  href={RESUME_PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block truncate text-xs font-semibold text-[#0A0A0A] hover:underline hover:underline-offset-4 dark:text-zinc-100"
                >
                  Open PDF in Browser
                </a>
              </div>
            </div>
            <a
              href={RESUME_PDF_URL}
              download="Jagannath_Shingne_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A0A0A] px-3.5 py-1.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
