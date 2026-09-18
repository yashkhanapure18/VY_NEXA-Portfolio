'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, FileText, Send } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$5k - $10k',
    message: '',
  })

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-[#0B0C11] border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7FA8D9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Copy & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-px bg-[#7FA8D9]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#7FA8D9]">
                  INITIATE COLLABORATION
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#F2F1ED]">
                Let’s Build Something Extraordinary.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#8C93A3] font-sans font-light leading-relaxed">
              Have an ambitious brand site, flagship 3D project, or web application requirement? Reach out directly to VYNEXA Studio or submit your brief below.
            </p>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#0A0B0F] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#8C93A3] uppercase tracking-wider block">
                Direct Studio Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-lg font-mono font-semibold text-[#7FA8D9] hover:underline break-all"
                >
                  {profile.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#8C93A3] transition-colors shrink-0"
                  aria-label="Copy studio email address to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social & Studio Credentials */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#8C93A3] uppercase tracking-wider block">
                Studio Channels & Deck
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#0A0B0F] border border-white/10 hover:border-white/30 text-xs font-mono text-[#8C93A3] hover:text-white flex items-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4 text-[#7FA8D9] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#0A0B0F] border border-white/10 hover:border-white/30 text-xs font-mono text-[#8C93A3] hover:text-white flex items-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4 text-[#7FA8D9] fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#0A0B0F] border border-white/10 hover:border-white/30 text-xs font-mono text-[#8C93A3] hover:text-white flex items-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4 text-[#7FA8D9] fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X / Twitter
                </a>
                <a
                  href="#"
                  className="px-4 py-2.5 rounded-xl bg-[#0A0B0F] border border-[#7FA8D9]/30 text-xs font-mono text-[#7FA8D9] flex items-center gap-2 transition-colors hover:bg-[#7FA8D9]/10"
                >
                  <FileText className="w-4 h-4" /> Capabilities Deck (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form with Primary Button #E7E5E0 */}
          <div className="lg:col-span-7">
            <div className="bg-[#0A0B0F] rounded-2xl border border-white/15 p-8 sm:p-10 shadow-2xl space-y-6">
              <h3 className="text-xl font-serif font-bold text-[#F2F1ED]">
                Project Scope Inquiry
              </h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-[#7FA8D9]/10 border border-[#7FA8D9]/30 text-center space-y-3"
                >
                  <Check className="w-10 h-10 text-[#7FA8D9] mx-auto" />
                  <h4 className="text-lg font-serif font-bold text-[#F2F1ED]">Inquiry Received</h4>
                  <p className="text-xs text-[#8C93A3] font-mono">
                    Thank you! VYNEXA Studio will review your project brief and respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-[#8C93A3] uppercase tracking-wider block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Rostova"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0C11] border border-white/10 text-[#F2F1ED] font-sans text-sm focus:outline-none focus:border-[#7FA8D9] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-[#8C93A3] uppercase tracking-wider block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@studio.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0C11] border border-white/10 text-[#F2F1ED] font-sans text-sm focus:outline-none focus:border-[#7FA8D9] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#8C93A3] uppercase tracking-wider block">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C11] border border-white/10 text-[#F2F1ED] font-mono text-sm focus:outline-none focus:border-[#7FA8D9] transition-colors"
                    >
                      <option value="$5k - $10k">$5,000 – $10,000</option>
                      <option value="$10k - $20k">$10,000 – $20,000</option>
                      <option value="$20k+">$20,000+ (Flagship 3D Suite)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#8C93A3] uppercase tracking-wider block">
                      Project Details & Vision
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your brand goals, timeline, and 3D experience vision..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C11] border border-white/10 text-[#F2F1ED] font-sans text-sm focus:outline-none focus:border-[#7FA8D9] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#E7E5E0] hover:bg-white text-[#0A0B0F] font-mono text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-white/5"
                  >
                    <span>SUBMIT PROJECT BRIEF</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
