'use client'

import { useState } from 'react'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SkillsShowcase from '@/components/SkillsShowcase'
import WorkGrid from '@/components/WorkGrid'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { usePerformanceTier } from '@/lib/usePerformanceTier'

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false)
  const { tier, forceTier, overrideTier } = usePerformanceTier()

  return (
    <main className="min-h-screen bg-bg-dark text-surface-50 relative selection:bg-accent-amber selection:text-bg-dark">
      {/* Preloader overlay */}
      {!loaderComplete && <Loader onComplete={() => setLoaderComplete(true)} />}

      {/* Main Page Content */}
      <Navbar
        currentTier={tier}
        forceTier={forceTier}
        onOverrideTier={overrideTier}
      />

      <Hero tier={tier} />
      <About tier={tier} />
      <SkillsShowcase tier={tier} />
      <WorkGrid />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
