'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { testimonials } from '@/data/process'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[index]

  return (
    <section className="py-24 bg-[#0A0B0F] border-t border-white/10 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7FA8D9]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#7FA8D9]">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#F2F1ED]">
            Partner Endorsements & Founder Feedback
          </h2>
        </div>

        <div className="relative bg-[#0B0C11] rounded-2xl border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-xl text-[#F2F1ED] font-light italic leading-relaxed">
                "{current.text}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#7FA8D9]/30">
                    <Image
                      src={current.avatar}
                      alt={current.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-[#F2F1ED]">
                      {current.author}
                    </h3>
                    <p className="text-xs font-mono text-[#8C93A3]">
                      {current.role} • {current.company}
                    </p>
                  </div>
                </div>

                {current.projectLink && (
                  <Link
                    href={current.projectLink}
                    className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-[#7FA8D9] hover:underline"
                  >
                    <span>{current.relationship}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-end gap-2 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-lg bg-[#0A0B0F] border border-white/10 text-[#8C93A3] hover:text-white hover:border-white/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[#8C93A3] px-2">
              0{index + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-lg bg-[#0A0B0F] border border-white/10 text-[#8C93A3] hover:text-white hover:border-white/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
