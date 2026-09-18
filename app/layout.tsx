import type { Metadata } from 'next'
import './globals.css'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'VYNEXA — DESIGN STUDIO',
  description: profile.positioningStatement,
  keywords: [
    'VYNEXA',
    'Design Studio',
    'Brand Identity',
    '3D Web Design',
    'WebGL Websites',
    'Next.js Studio',
    'Forma Studio',
    'Ember and Spice',
  ],
  authors: [{ name: 'VYNEXA Design Studio' }],
  openGraph: {
    title: 'VYNEXA — DESIGN STUDIO',
    description: profile.positioningStatement,
    url: 'https://vynexa.studio',
    siteName: 'VYNEXA Design Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VYNEXA — DESIGN STUDIO',
    description: profile.positioningStatement,
    creator: '@vynexa_studio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0B0F] text-[#F2F1ED] antialiased selection:bg-[#7FA8D9] selection:text-[#0A0B0F]">
        {children}
      </body>
    </html>
  )
}
