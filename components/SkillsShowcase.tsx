'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Layers, Code2, FileCode, Sparkles, Palette, Cpu, CheckCircle2 } from 'lucide-react'
import Skills3DWrapper from './Skills3DWrapper'
import { skills } from '@/data/skills'
import { PerformanceTier, SkillItem } from '@/lib/types'

const iconMap: Record<string, React.ElementType> = {
  Box,
  Layers,
  Code2,
  FileCode,
  Sparkles,
  Palette,
  Cpu,
}

export default function SkillsShowcase({ tier }: { tier: PerformanceTier }) {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(skills[0])

  return (
    <section id="skills" className="py-24 bg-[#0B0C11] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Copy */}
        <div className="space-y-4 mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7FA8D9]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#7FA8D9]">
              STUDIO TECH STACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#F2F1ED]">
            Technical Stack & 3D Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#8C93A3] font-light">
            Modular framework proficiency, custom GLSL shader pipelines, and performance-first architecture.
          </p>
        </div>

        {tier !== 'fallback' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Pills over Ambient 3D Floating Particle Background Layer */}
            <div className="lg:col-span-7 bg-[#0A0B0F]/90 rounded-2xl border border-white/10 p-6 sm:p-8 relative min-h-[420px] sm:min-h-[480px] flex flex-col justify-between overflow-hidden">
              {/* Background 3D Particle Canvas */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
                <Skills3DWrapper
                  tier={tier}
                  activeSkill={activeSkill}
                  onSelectSkill={(skill) => setActiveSkill(skill)}
                />
              </div>

              {/* Foreground Overlay Content */}
              <div className="relative z-10 space-y-6">
                <div className="text-[10px] font-mono text-[#8C93A3] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7FA8D9] animate-pulse" />
                  BACKGROUND AMBIENT PARTICLE FIELD (SELECT SKILL BELOW)
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {skills.map((skill) => {
                    const isActive = activeSkill?.id === skill.id
                    const IconComponent = iconMap[skill.iconName] || Cpu
                    return (
                      <button
                        key={skill.id}
                        onClick={() => setActiveSkill(skill)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-md ${
                          isActive
                            ? 'bg-[#7FA8D9] text-[#0A0B0F] font-semibold shadow-lg shadow-[#7FA8D9]/20 border border-[#7FA8D9] scale-105'
                            : 'bg-[#0B0C11]/80 text-[#F2F1ED] hover:bg-white/15 border border-white/15 hover:border-[#7FA8D9]/50'
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#0A0B0F]' : 'text-[#7FA8D9]'}`} />
                        <span>{skill.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8C93A3]">
                <span>SELECT ANY PILL TO INSPECT PROFICIENCY</span>
                <span className="text-[#7FA8D9]">7 CORE MODULES</span>
              </div>
            </div>

            {/* Right: Active Skill Detail Card */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {activeSkill && (
                  <motion.div
                    key={activeSkill.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-2xl bg-[#0A0B0F] border border-white/15 space-y-6 shadow-2xl relative"
                  >
                    <div className="flex justify-between items-start">
                      <div className="p-3 rounded-xl bg-[#7FA8D9]/10 border border-[#7FA8D9]/20 text-[#7FA8D9]">
                        {iconMap[activeSkill.iconName] ? (
                          React.createElement(iconMap[activeSkill.iconName], { className: 'w-7 h-7' })
                        ) : (
                          <Cpu className="w-7 h-7" />
                        )}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#7FA8D9]">
                        {activeSkill.level}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[#F2F1ED] mb-1">
                        {activeSkill.name}
                      </h3>
                      <span className="text-xs font-mono text-[#8C93A3] uppercase tracking-wider">
                        {activeSkill.category}
                      </span>
                    </div>

                    <p className="text-sm text-[#8C93A3] font-sans font-light leading-relaxed border-t border-white/10 pt-4">
                      {activeSkill.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#7FA8D9]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>VYNEXA Production Standard</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const IconComponent = iconMap[skill.iconName] || Cpu
              return (
                <div
                  key={skill.id}
                  className="p-6 rounded-2xl bg-[#0A0B0F] border border-white/10 space-y-4 hover:border-[#7FA8D9]/40 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div className="p-3 rounded-xl bg-[#7FA8D9]/10 text-[#7FA8D9]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#7FA8D9] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {skill.level}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#F2F1ED]">{skill.name}</h3>
                    <span className="text-xs font-mono text-[#8C93A3]">{skill.category}</span>
                  </div>
                  <p className="text-xs text-[#8C93A3] font-light leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
