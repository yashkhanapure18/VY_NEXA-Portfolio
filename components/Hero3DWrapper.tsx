'use client'

import dynamic from 'next/dynamic'
import { PerformanceTier } from '@/lib/types'

const DynamicHeroScene = dynamic(() => import('./3d/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-white/10 animate-pulse flex items-center justify-center bg-bg-card/40">
        <div className="w-24 h-24 rounded-full border border-accent-amber/30 animate-ping" />
      </div>
    </div>
  ),
})

export default function Hero3DWrapper({ tier }: { tier: PerformanceTier }) {
  return <DynamicHeroScene tier={tier} />
}
