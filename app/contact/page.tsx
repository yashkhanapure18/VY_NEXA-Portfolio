import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-dark text-surface-50 selection:bg-accent-amber selection:text-bg-dark">
      <header className="fixed top-0 left-0 right-0 z-40 bg-bg-dark/85 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-accent-amber transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>
          <span className="text-xs font-mono text-accent-amber uppercase">INITIATE COLLABORATION</span>
        </div>
      </header>

      <div className="pt-20">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
