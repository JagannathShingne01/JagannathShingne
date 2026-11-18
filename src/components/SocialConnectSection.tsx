import { useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  FileText,
  GitBranch,
  Linkedin,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/resume';

interface SocialConnectSectionProps {
  onOpenResume: () => void;
}

export function SocialConnectSection({ onOpenResume }: SocialConnectSectionProps) {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | 'message' | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleCopy = async (text: string, field: 'email' | 'phone' | 'message') => {
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

  const handleComposeMailto = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${senderName.trim() || 'Visitor'}`,
    );
    const body = encodeURIComponent(
      `${messageText.trim()}\n\n---\nFrom: ${senderName.trim() || 'N/A'}\nReply-to: ${senderEmail.trim() || 'N/A'}`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const getSocialIcon = (id: string) => {
    if (id === 'github') return <GitBranch className="h-5 w-5" />;
    if (id === 'linkedin') return <Linkedin className="h-5 w-5" />;
    return <Code2 className="h-5 w-5" />;
  };

  return (
    <section id="connect" className="bg-white py-16 lg:py-24 dark:bg-[#09090B]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Social Media & Direct Channels */}
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
              05. Social Media &amp; Contact
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0A0A0A] text-balance sm:text-4xl dark:text-zinc-50">
              Connect Across Platforms
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Open to full-stack software engineering roles, distributed backend systems work, and AI automation collaborations.
            </p>

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

            {/* Direct Contact Row (Email, Phone, Resume) */}
            <div className="mt-6 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-[#FAFAFA] dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/40">
              <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="h-4 w-4 shrink-0 text-[#0A0A0A] dark:text-zinc-200" />
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Direct Email</p>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="block truncate font-mono text-sm font-medium text-[#0A0A0A] hover:underline hover:underline-offset-4 dark:text-zinc-100"
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
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
                <div className="flex items-center gap-3 min-w-0">
                  <Phone className="h-4 w-4 shrink-0 text-[#0A0A0A] dark:text-zinc-200" />
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Phone</p>
                    <a
                      href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                      className="block font-mono text-sm font-medium text-[#0A0A0A] hover:underline hover:underline-offset-4 dark:text-zinc-100"
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
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="h-4 w-4 shrink-0 text-[#0A0A0A] dark:text-zinc-200" />
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Curriculum Vitae</p>
                    <p className="text-sm font-medium text-[#0A0A0A] dark:text-zinc-100">
                      Jagannath Shingne — SDE 1 Resume (PDF)
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A0A0A] px-3.5 py-1.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 cursor-pointer"
                >
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Client-Side Email Composer */}
          <div className="lg:col-span-5">
            <form
              onSubmit={handleComposeMailto}
              className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-[#0A0A0A] dark:text-zinc-50">
                  Send a Message
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Draft an inquiry to open directly in your email client or copy to clipboard.
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Recruiter or Engineering Lead"
                      className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#0A0A0A] focus:outline-none focus:ring-1 focus:ring-[#0A0A0A] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-400 dark:focus:ring-zinc-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#0A0A0A] focus:outline-none focus:ring-1 focus:ring-[#0A0A0A] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-400 dark:focus:ring-zinc-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Role details, system architecture project, or interview scheduling..."
                      className="mt-1.5 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#0A0A0A] focus:outline-none focus:ring-1 focus:ring-[#0A0A0A] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-400 dark:focus:ring-zinc-400"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0A0A0A] px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Open Email App</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      `To: ${PROFILE.email}\nFrom: ${senderName || 'Visitor'} (${senderEmail || 'N/A'})\n\n${messageText}`,
                      'message',
                    )
                  }
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-xs font-medium text-zinc-800 whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
                >
                  {copiedField === 'message' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#0A0A0A] dark:text-zinc-100" />
                      <span>Copied Draft</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
