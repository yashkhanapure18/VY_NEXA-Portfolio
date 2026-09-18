'use client'

import { motion } from 'framer-motion'
import ProjectCard3D from './ProjectCard3D'
import { projects } from '@/data/projects'

export default function WorkGrid() {
  return (
    <section id="work" className="py-24 bg-[#0A0B0F] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-[#7FA8D9]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#7FA8D9]">
                SELECTED WORK & CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#F2F1ED]">
              Featured Client Projects & Studio Work
            </h2>
          </div>

          <p className="text-sm text-[#8C93A3] font-light max-w-md">
            Featuring production design and WebGL implementations for Forma Studio & Ember & Spice, alongside high-concept digital prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <ProjectCard3D project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
