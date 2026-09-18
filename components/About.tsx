'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Eye, Compass } from 'lucide-react'
import { PerformanceTier } from '@/lib/types'

export default function About({ tier }: { tier: PerformanceTier }) {
  const services = [
    {
      icon: Eye,
      title: 'Brand Identity & Strategy',
      text: 'Visual luxury isn’t surface decoration. We craft enduring brand systems, typography rules, and spatial identities that stand out.',
    },
    {
      icon: Cpu,
      title: '3D & WebGL Engineering',
      text: 'Custom GLSL shaders, camera choreography, and interactive 3D viewports that elevate websites into immersive digital artifacts.',
    },
    {
      icon: ShieldCheck,
      title: 'High-Conversion Web Apps',
      text: 'Production Next.js App Router architecture engineered for 60 FPS performance, mobile responsiveness, and SEO dominance.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#0A0B0F] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Rotating Studio Sculpture Node */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-[#0B0C11] border border-white/10 p-8 flex flex-col items-center justify-center text-center overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-radial from-[#7FA8D9]/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="w-32 h-32 rounded-2xl border border-[#7FA8D9]/30 animate-spin-slow flex items-center justify-center rotate-45 mb-6 bg-white/5 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-xl border border-white/20 -rotate-45 flex items-center justify-center bg-[#7FA8D9]/15">
                  <Compass className="w-8 h-8 text-[#7FA8D9]" />
                </div>
              </div>

              <div className="text-xs font-mono text-[#7FA8D9] uppercase tracking-widest mb-1">
                STUDIO DISCIPLINE
              </div>
              <div className="text-sm text-[#8C93A3] font-light">
                VYNEXA Studio Architecture
              </div>
            </div>
          </div>

          {/* Right Column: Studio Services & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-px bg-[#7FA8D9]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#7FA8D9]">
                  SERVICES & CAPABILITIES
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#F2F1ED]">
                Crafting Digital Products That Refuse To Look Ordinary.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#8C93A3] font-sans font-light leading-relaxed">
              VYNEXA bridges visionary aesthetic direction with high-precision engineering. Every pixel and vertex is designed to communicate value, inspire trust, and convert visitors into long-term partners.
            </p>

            {/* Core Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-5 rounded-xl bg-[#0B0C11] border border-white/10 hover:border-[#7FA8D9]/40 transition-colors space-y-3"
                >
                  <service.icon className="w-6 h-6 text-[#7FA8D9]" />
                  <h3 className="text-sm font-serif font-semibold text-[#F2F1ED]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#8C93A3] font-sans font-light leading-relaxed">
                    {service.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
