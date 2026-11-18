import { ArrowUpRight, Award, GraduationCap } from 'lucide-react';
import { COURSES, EDUCATION } from '../data/resume';

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-b border-zinc-200 bg-[#FAFAFA] py-16 lg:py-24 dark:border-zinc-800/80 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div>
          <p className="font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
            04. Academic Foundation
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0A0A0A] text-balance sm:text-4xl dark:text-zinc-50">
            Education &amp; Certifications
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* University Degree */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-xs lg:col-span-7 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-[#FAFAFA] text-[#0A0A0A] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0A0A0A] dark:text-zinc-50">
                    {EDUCATION.university}
                  </h3>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {EDUCATION.degree}
                  </p>
                </div>
              </div>

              <span className="font-mono text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Class of {EDUCATION.year}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-zinc-200 pt-5 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
              <span>
                GPA:{' '}
                <strong className="font-mono text-[#0A0A0A] dark:text-zinc-100">
                  {EDUCATION.gpa}
                </strong>
              </span>
              <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">
                ·
              </span>
              <span>{EDUCATION.location}</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {EDUCATION.highlight}
            </p>
          </div>

          {/* Courses & Certificates with Google Drive redirect links */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            {COURSES.map((course) => (
              <a
                key={course.id}
                href={course.url}
                target="_blank"
                rel="noreferrer"
                className="group flex-1 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors duration-150 hover:border-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-500"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-[#FAFAFA] text-[#0A0A0A] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
                      <Award className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#0A0A0A] group-hover:underline group-hover:underline-offset-4 dark:text-zinc-50">
                        {course.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-xs font-medium text-zinc-600 dark:text-zinc-400">
                        {course.issuer}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {course.focus}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A] dark:group-hover:text-zinc-100" />
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-zinc-200 pt-3 dark:border-zinc-800">
                  <span className="font-mono text-xs font-medium text-[#0A0A0A] dark:text-zinc-200">
                    View Certificate on Google Drive
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                    drive.google.com
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
