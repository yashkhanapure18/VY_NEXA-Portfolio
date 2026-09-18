import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react'
import { getProjectBySlug, getNextProject, projects } from '@/data/projects'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const nextProject = getNextProject(project.slug)

  return (
    <div className="min-h-screen bg-bg-dark text-surface-50 selection:bg-accent-amber selection:text-bg-dark">
      {/* Header Back Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-bg-dark/85 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-accent-amber transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <div className="text-xs font-mono text-accent-amber uppercase tracking-wider hidden sm:block">
            {project.number} / CASE STUDY
          </div>
        </div>
      </header>

      {/* Main Case Study Content */}
      <main className="pt-28 pb-24">
        <article className="max-w-6xl mx-auto px-6 sm:px-12 space-y-16">
          {/* Header Title Section */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/30 text-xs font-mono text-accent-amber">
                {project.category}
              </span>
              <span className="text-xs font-mono text-gray-400">
                {project.year} • {project.client}
              </span>
              {project.isConcept && (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-gray-300 px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                  <Sparkles className="w-3 h-3 text-accent-amber" /> CONCEPT SHOWCASE
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-surface-50 font-sans uppercase">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 font-mono font-light">
              {project.subtitle}
            </p>

            {project.tagline && (
              <p className="text-lg text-accent-amber font-mono italic">
                "{project.tagline}"
              </p>
            )}

            {/* Direct Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-accent-amber text-bg-dark font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent-amber/90 transition-all shadow-lg shadow-accent-amber/15"
                >
                  <span>VISIT LIVE DEMO</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-bg-card hover:bg-bg-elevated border border-white/15 text-surface-50 font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-accent-amber" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>VIEW ON GITHUB</span>
                </a>
              )}
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative h-[380px] sm:h-[540px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />
          </div>

          {/* Metrics bar */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-2xl bg-bg-card border border-white/10">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <div className="text-3xl font-mono font-bold text-accent-amber">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-surface-50 uppercase font-semibold">
                    {metric.label}
                  </div>
                  {metric.description && (
                    <div className="text-xs text-gray-400 font-light">
                      {metric.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Concept & Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-white/10">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-accent-amber">
                EXECUTIVE OVERVIEW
              </h2>
              <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack List */}
              <div className="space-y-3 pt-4">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                  Technologies Deployed:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-bg-card rounded-2xl border border-white/10 p-8 space-y-6">
              <h3 className="text-xl font-bold text-surface-50 font-sans">
                {project.concept.title}
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {project.concept.text}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-amber block">
                  Key Architectural Accomplishments:
                </span>
                <ul className="space-y-2">
                  {project.concept.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5 text-xs text-gray-300 font-mono">
                      <CheckCircle2 className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Gallery Showcase */}
          <div className="space-y-8 pt-8 border-t border-white/10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-surface-50 font-sans">
                Interface & Spatial Gallery
              </h2>
              <p className="text-xs font-mono text-gray-400">
                Visual captures from the production build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((item, idx) => (
                <div key={idx} className="space-y-3 group">
                  <div className="relative h-72 rounded-xl overflow-hidden border border-white/10 bg-bg-card">
                    <Image
                      src={item.url}
                      alt={item.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-xs font-mono text-gray-400">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Project Footer Bar */}
          <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" /> ALL PROJECTS
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-3 p-4 rounded-xl bg-bg-card border border-white/10 hover:border-accent-amber/50 text-right group transition-all"
            >
              <div>
                <div className="text-[10px] font-mono text-accent-amber uppercase">NEXT CASE STUDY →</div>
                <div className="text-sm font-bold text-surface-50 group-hover:text-accent-amber transition-colors font-sans">
                  {nextProject.title}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-accent-amber group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
