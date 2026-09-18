'use client'

import { useState, useEffect } from 'react'
import { PerformanceTier } from './types'

export function usePerformanceTier() {
  const [tier, setTier] = useState<PerformanceTier>('full')
  const [forceTier, setForceTier] = useState<PerformanceTier | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // 1. Check URL query params for explicit manual override during QA (e.g., ?tier=fallback)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const tierParam = params.get('tier') as PerformanceTier | null
      const storedTier = localStorage.getItem('forced_perf_tier') as PerformanceTier | null

      const activeOverride = tierParam || storedTier

      if (activeOverride && ['full', 'reduced', 'fallback'].includes(activeOverride)) {
        setForceTier(activeOverride)
        setTier(activeOverride)
        return
      }

      // 2. Check accessibility settings
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        setTier('fallback')
        return
      }

      // 3. Hardware & Mobile Detection
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isTouch = window.matchMedia('(pointer: coarse)').matches
      const hardwareConcurrency = navigator.hardwareConcurrency || 4
      const deviceMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory || 4

      // Basic WebGL capability test
      let hasWebGL = false
      try {
        const canvas = document.createElement('canvas')
        hasWebGL = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
      } catch {
        hasWebGL = false
      }

      if (!hasWebGL) {
        setTier('fallback')
        return
      }

      // Tier logic
      if (isMobile || isTouch || hardwareConcurrency < 4 || deviceMemory < 4) {
        setTier('reduced')
      } else {
        setTier('full')
      }
    }
  }, [])

  const overrideTier = (newTier: PerformanceTier | null) => {
    if (typeof window !== 'undefined') {
      if (newTier) {
        localStorage.setItem('forced_perf_tier', newTier)
        const url = new URL(window.location.href)
        url.searchParams.set('tier', newTier)
        window.history.replaceState({}, '', url.toString())
      } else {
        localStorage.removeItem('forced_perf_tier')
        const url = new URL(window.location.href)
        url.searchParams.delete('tier')
        window.history.replaceState({}, '', url.toString())
      }
      setForceTier(newTier)
      setTier(newTier || 'full')
    }
  }

  return {
    tier: isMounted ? tier : 'full',
    forceTier,
    overrideTier,
    isMounted,
  }
}
