'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Hero3DWrapper from './Hero3DWrapper'
import { PerformanceTier } from '@/lib/types'

export default function Hero({ tier }: { tier: PerformanceTier }) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0A0B0F]">
      {/* Background ambient lighting in faint periwinkle */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7FA8D9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Headline & Editorial Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#7FA8D9] uppercase tracking-widest">
            <span>DESIGN STUDIO</span>
          </div>

          {/* Headline (Large Serif with italic accent on key phrase) */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-[#F2F1ED] leading-[1.1]">
            We build brands that{' '}
            <span className="italic font-normal text-[#7FA8D9] font-serif">
              look like the future.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#8C93A3] font-sans font-light leading-relaxed max-w-xl">
            VYNEXA is a design studio crafting websites, brand identities, and app interfaces for founders who refuse to look ordinary.
          </p>

          {/* Call to Actions (Primary: fill #E7E5E0 text #0A0B0F; Secondary: transparent, 1px border rgba(242,241,237,0.3)) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg bg-[#E7E5E0] hover:bg-white text-[#0A0B0F] font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-lg group"
            >
              <span>View our work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg bg-transparent hover:bg-white/5 border border-[#F2F1ED]/30 text-[#F2F1ED] font-mono text-xs font-medium tracking-wider uppercase transition-colors"
            >
              <span>Get in touch</span>
            </Link>
          </div>

          {/* Studio Metrics bar */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-2xl font-serif font-bold text-[#F2F1ED]">40+</div>
              <div className="text-[11px] font-mono text-[#8C93A3] uppercase tracking-wider">Projects Launched</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#F2F1ED]">100%</div>
              <div className="text-[11px] font-mono text-[#8C93A3] uppercase tracking-wider">Bespoke Code</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#7FA8D9]">60 FPS</div>
              <div className="text-[11px] font-mono text-[#8C93A3] uppercase tracking-wider">WebGL Engine</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Centerpiece Sculpture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 h-[420px] sm:h-[520px] relative flex items-center justify-center"
        >
          <Hero3DWrapper tier={tier} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono text-[#8C93A3] uppercase tracking-widest">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 text-[#7FA8D9]" />
      </motion.div>
    </section>
  )
}
