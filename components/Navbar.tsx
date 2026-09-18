'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu, Check } from 'lucide-react'
import { PerformanceTier } from '@/lib/types'

interface NavbarProps {
  currentTier: PerformanceTier
  onOverrideTier: (tier: PerformanceTier | null) => void
  forceTier: PerformanceTier | null
}

export default function Navbar({ currentTier, onOverrideTier, forceTier }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [qaMenuOpen, setQaMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0B0F]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Left: VYNEXA Logo with Thin-Stroke VY Monogram & Serif Wordmark & Positioning Line */}
        <Link href="/" className="group flex items-center gap-3.5">
          {/* Thin-stroke circle monogram "VY" */}
          <div className="w-9 h-9 rounded-full border border-[#F2F1ED]/40 flex items-center justify-center font-serif text-xs tracking-tighter text-[#F2F1ED] group-hover:border-[#7FA8D9] group-hover:text-[#7FA8D9] transition-colors">
            VY
          </div>

          <div className="flex items-baseline gap-2.5">
            <span className="font-serif text-lg font-bold uppercase tracking-[0.25em] text-[#F2F1ED] group-hover:text-white transition-colors">
              VYNEXA
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7FA8D9] font-medium border-l border-white/15 pl-2.5">
              DESIGN STUDIO
            </span>
          </div>
        </Link>

        {/* Center / Right Nav Links & Actions */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs font-mono uppercase tracking-widest text-[#8C93A3] hover:text-[#F2F1ED] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-white/10" />

          {/* QA Performance Tier Control */}
          <div className="relative">
            <button
              onClick={() => setQaMenuOpen(!qaMenuOpen)}
              className="flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-[#8C93A3]"
              title="QA Performance Tier Selector"
            >
              <Cpu className="w-3.5 h-3.5 text-[#7FA8D9]" />
              <span className="uppercase">{forceTier ? `QA: ${forceTier}` : `Tier: ${currentTier}`}</span>
            </button>

            <AnimatePresence>
              {qaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 mt-2 w-52 rounded-xl bg-[#0B0C11] border border-white/15 p-2 shadow-2xl z-50 text-xs font-mono"
                >
                  <div className="px-2 py-1 text-[10px] text-[#8C93A3] uppercase border-b border-white/10 mb-1">
                    QA Performance Override
                  </div>
                  <button
                    onClick={() => {
                      onOverrideTier(null)
                      setQaMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-between px-2 py-1.5 rounded text-left hover:bg-white/5 text-[#F2F1ED]"
                  >
                    <span>Auto Detect ({currentTier})</span>
                    {!forceTier && <Check className="w-3.5 h-3.5 text-[#7FA8D9]" />}
                  </button>
                  <button
                    onClick={() => {
                      onOverrideTier('full')
                      setQaMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-between px-2 py-1.5 rounded text-left hover:bg-white/5 text-[#F2F1ED]"
                  >
                    <span>Force Full (High 3D)</span>
                    {forceTier === 'full' && <Check className="w-3.5 h-3.5 text-[#7FA8D9]" />}
                  </button>
                  <button
                    onClick={() => {
                      onOverrideTier('reduced')
                      setQaMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-between px-2 py-1.5 rounded text-left hover:bg-white/5 text-[#F2F1ED]"
                  >
                    <span>Force Reduced (Mobile)</span>
                    {forceTier === 'reduced' && <Check className="w-3.5 h-3.5 text-[#7FA8D9]" />}
                  </button>
                  <button
                    onClick={() => {
                      onOverrideTier('fallback')
                      setQaMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-between px-2 py-1.5 rounded text-left hover:bg-white/5 text-[#F2F1ED]"
                  >
                    <span>Force Fallback (2D)</span>
                    {forceTier === 'fallback' && <Check className="w-3.5 h-3.5 text-[#7FA8D9]" />}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Primary CTA Button: Fill #E7E5E0, Text #0A0B0F */}
          <Link
            href="#contact"
            className="py-2.5 px-5 rounded-lg bg-[#E7E5E0] hover:bg-white text-[#0A0B0F] font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
          >
            Start a project
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#0B0C11] border border-white/10 text-[#F2F1ED]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0C11] border-b border-white/10 overflow-hidden px-6 py-6"
          >
            <ul className="space-y-4 mb-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-mono uppercase tracking-wider text-[#8C93A3] hover:text-[#7FA8D9]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-white/10">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block py-3 rounded-lg bg-[#E7E5E0] text-[#0A0B0F] font-mono text-xs font-semibold text-center uppercase tracking-wider"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
