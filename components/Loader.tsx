'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsDismissed(true)
            onComplete()
          }, 300)
          return 100
        }
        const increment = Math.floor(Math.random() * 18) + 8
        return Math.min(prev + increment, 100)
      })
    }, 110)

    return () => clearInterval(interval)
  }, [onComplete])

  const handleSkip = () => {
    setProgress(100)
    setIsDismissed(true)
    onComplete()
  }

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 bg-[#0A0B0F] flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none text-[#F2F1ED]"
        >
          {/* Top header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7FA8D9] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#8C93A3]">
                Studio Engine Initializing
              </span>
            </div>
            <button
              onClick={handleSkip}
              className="text-xs font-mono text-[#8C93A3] hover:text-[#F2F1ED] transition-colors flex items-center gap-1 py-1 px-3 rounded-full border border-white/10 hover:border-white/30"
              aria-label="Skip intro loader animation"
            >
              Skip Intro <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Center Brand Title & Counter */}
          <div className="my-auto max-w-2xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#7FA8D9]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VYNEXA WebGL Engine 2026</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#F2F1ED]/40 flex items-center justify-center font-serif text-base tracking-tighter text-[#F2F1ED]">
                  VY
                </div>
                <h1 className="text-5xl sm:text-7xl font-serif font-bold uppercase tracking-[0.2em] text-[#F2F1ED]">
                  VYNEXA
                </h1>
              </div>

              <p className="text-[#8C93A3] text-sm sm:text-base font-light max-w-md font-sans">
                We build brands that look like the future.
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-8 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-[#8C93A3]">
                <span>PRELOADING 3D ASSETS</span>
                <span className="text-[#7FA8D9] font-semibold">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#7FA8D9]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                />
              </div>
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex justify-between items-end text-xs font-mono text-[#8C93A3] border-t border-white/5 pt-4">
            <div>DESIGN STUDIO</div>
            <div>FLAGSHIP 3D ENGINE</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
