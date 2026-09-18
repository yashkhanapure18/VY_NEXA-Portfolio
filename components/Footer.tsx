'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A0B0F] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#F2F1ED]/40 flex items-center justify-center font-serif text-xs tracking-tighter text-[#F2F1ED]">
                VY
              </div>
              <span className="font-serif text-lg font-bold uppercase tracking-[0.2em] text-[#F2F1ED]">
                VYNEXA
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7FA8D9] border-l border-white/15 pl-2.5">
                DESIGN STUDIO
              </span>
            </div>
            <p className="text-xs text-[#8C93A3] font-light max-w-sm leading-relaxed">
              {profile.shortBio}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7FA8D9]/10 border border-[#7FA8D9]/30 text-xs font-mono text-[#7FA8D9]">
              <span className="w-2 h-2 rounded-full bg-[#7FA8D9] animate-pulse" />
              <span>{profile.availabilityStatus} for Q4 2026 Projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C93A3] block">
              Studio Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="#services" className="text-[#F2F1ED] hover:text-[#7FA8D9] transition-colors">
                  Services & Capabilities
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-[#F2F1ED] hover:text-[#7FA8D9] transition-colors">
                  Selected Work & Cases
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-[#F2F1ED] hover:text-[#7FA8D9] transition-colors">
                  Studio Methodology
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#F2F1ED] hover:text-[#7FA8D9] transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Studio Info */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C93A3] block">
              Presence & Locations
            </span>
            <p className="text-xs font-mono text-[#F2F1ED]">
              {profile.location}
            </p>
            <div className="flex gap-4 pt-2 text-xs font-mono">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[#8C93A3] hover:text-white">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#8C93A3] hover:text-white">
                LinkedIn
              </a>
              <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="text-[#8C93A3] hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C93A3]">
          <div>
            © 2026 VYNEXA Design Studio. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-[#8C93A3] hover:text-[#7FA8D9] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
