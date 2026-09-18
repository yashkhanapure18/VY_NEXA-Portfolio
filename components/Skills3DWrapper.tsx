'use client'

import dynamic from 'next/dynamic'
import { PerformanceTier, SkillItem } from '@/lib/types'

const DynamicSkillsScene = dynamic(() => import('./3d/SkillsScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border border-white/10 animate-pulse bg-bg-card/40" />
    </div>
  ),
})

export default function Skills3DWrapper({
  tier,
  activeSkill,
  onSelectSkill,
}: {
  tier: PerformanceTier
  activeSkill: SkillItem | null
  onSelectSkill: (skill: SkillItem) => void
}) {
  return (
    <DynamicSkillsScene
      tier={tier}
      activeSkill={activeSkill}
      onSelectSkill={onSelectSkill}
    />
  )
}
