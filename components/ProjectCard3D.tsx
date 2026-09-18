'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react'
import { Project } from '@/lib/types'

export default function ProjectCard3D({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotX = ((y - centerY) / centerY) * -8
    const rotY = ((x - centerX) / centerX) * 8

    setRotateX(rotX)
    setRotateY(rotY)

    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100
    setGlarePos({ x: glareX, y: glareY, opacity: 0.12 })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlarePos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div className="perspective-1000">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative rounded-2xl bg-[#0B0C11] border border-white/10 overflow-hidden shadow-2xl hover:border-[#7FA8D9]/50 transition-colors"
      >
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(242,241,237,${glarePos.opacity}), transparent 60%)`,
          }}
        />

        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0A0B0F]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C11] via-[#0B0C11]/40 to-transparent" />

          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <span className="font-mono text-xs text-[#7FA8D9] px-2.5 py-1 rounded-full bg-[#0A0B0F]/80 border border-white/10 backdrop-blur-md">
              {project.number}
            </span>
            {project.isConcept && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#8C93A3] px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                <Sparkles className="w-3 h-3 text-[#7FA8D9]" /> CONCEPT SHOWCASE
              </span>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-4 relative z-10">
          <div>
            <div className="text-xs font-mono text-[#7FA8D9] uppercase tracking-wider mb-1">
              {project.category}
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#F2F1ED] group-hover:text-[#7FA8D9] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[#8C93A3] mt-1">
              {project.subtitle} • {project.year}
            </p>
          </div>

          <p className="text-sm text-[#8C93A3] font-sans font-light leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-[#8C93A3]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
            <Link
              href={project.caseStudyUrl || `/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#7FA8D9] hover:underline shrink-0"
            >
              <span>CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#8C93A3] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#7FA8D9]" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}

              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#8C93A3] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#7FA8D9]" /> Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
