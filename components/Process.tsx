'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Compass, Layout, Code, Zap, Rocket, CheckCircle2 } from 'lucide-react'
import { processSteps } from '@/data/process'

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Layout,
  Code,
  Zap,
  Rocket,
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="py-24 bg-[#0B0C11] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="space-y-4 mb-16 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-[#7FA8D9]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#7FA8D9]">
              STUDIO METHODOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#F2F1ED]">
            How VYNEXA Builds Brand Artifacts
          </h2>
          <p className="text-sm sm:text-base text-[#8C93A3] font-light">
            A disciplined 5-phase methodology combining aesthetic discovery, 3D interactive prototyping, and performance profiling.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-5 gap-4 mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          {processSteps.map((step, idx) => {
            const isActive = idx === activeStep
            const isCompleted = idx < activeStep
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 flex flex-col items-center p-4 rounded-xl border text-center transition-all ${
                  isActive
                    ? 'bg-[#7FA8D9]/10 border-[#7FA8D9] text-[#F2F1ED] shadow-lg shadow-[#7FA8D9]/10'
                    : isCompleted
                    ? 'bg-[#0A0B0F] border-[#7FA8D9]/40 text-[#8C93A3]'
                    : 'bg-[#0A0B0F] border-white/10 text-gray-500 hover:border-white/30'
                }`}
              >
                <span className="font-mono text-xs font-bold mb-1 text-[#7FA8D9]">
                  {step.stepNumber}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  {step.title.split(' ')[0]}
                </span>
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0A0B0F] rounded-2xl border border-white/15 p-8 sm:p-12 shadow-2xl">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#7FA8D9]/10 border border-[#7FA8D9]/30 text-xs font-mono font-bold text-[#7FA8D9]">
                PHASE {processSteps[activeStep].stepNumber}
              </span>
              <span className="text-xs font-mono text-[#8C93A3]">
                TIMELINE: {processSteps[activeStep].duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#F2F1ED]">
              {processSteps[activeStep].title}
            </h3>

            <p className="text-sm font-mono text-[#7FA8D9]">
              {processSteps[activeStep].tagline}
            </p>

            <p className="text-sm sm:text-base text-[#8C93A3] font-sans font-light leading-relaxed">
              {processSteps[activeStep].description}
            </p>

            <div className="space-y-2 border-t border-white/10 pt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8C93A3] block mb-3">
                Studio Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {processSteps[activeStep].deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-mono text-[#F2F1ED]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7FA8D9] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-[#7FA8D9]/20 bg-radial from-[#7FA8D9]/10 via-transparent to-transparent flex items-center justify-center p-8">
              <div className="w-32 h-32 rounded-full border border-white/20 animate-pulse flex items-center justify-center bg-[#0B0C11]">
                {(() => {
                  const Icon = iconMap[processSteps[activeStep].iconName] || Compass
                  return <Icon className="w-12 h-12 text-[#7FA8D9]" />
                })()}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 lg:hidden">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            className="px-4 py-2 rounded-lg bg-[#0A0B0F] border border-white/10 text-xs font-mono text-[#8C93A3] disabled:opacity-40"
          >
            ← PREVIOUS
          </button>
          <span className="text-xs font-mono text-[#8C93A3]">
            {activeStep + 1} / {processSteps.length}
          </span>
          <button
            disabled={activeStep === processSteps.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
            className="px-4 py-2 rounded-lg bg-[#0A0B0F] border border-white/10 text-xs font-mono text-[#8C93A3] disabled:opacity-40"
          >
            NEXT →
          </button>
        </div>
      </div>
    </section>
  )
}
