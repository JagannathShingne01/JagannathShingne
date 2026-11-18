import { useEffect, useState } from 'react';
import { BlogsSection } from './components/BlogsSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { SocialConnectSection } from './components/SocialConnectSection';
import { PROFILE, RESUME_PDF_URL, type ProjectItem } from './data/resume';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] dark:bg-[#09090B] dark:text-zinc-100">
      <Navbar />

      <main>
        <HeroSection theme={theme} onToggleTheme={toggleTheme} />
        <ExperienceSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <SkillsSection />
        <EducationSection />
        <BlogsSection />
        <SocialConnectSection />
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8 dark:border-zinc-800/80 dark:bg-[#09090B]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-xs text-zinc-500 sm:flex-row sm:items-center dark:text-zinc-400">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. {PROFILE.location}.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            {PROFILE.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
              >
                {social.label}
              </a>
            ))}
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-zinc-900 transition-colors hover:underline hover:underline-offset-4 dark:text-zinc-200"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
