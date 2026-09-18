'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { PerformanceTier, SkillItem } from '@/lib/types'
import { skills } from '@/data/skills'

interface FloatingParticleFieldProps {
  tier: PerformanceTier
}

function FloatingParticleField({ tier }: FloatingParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = tier === 'full' ? 200 : 50

  const [positions, initialY, speeds, offsets] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const initY = new Float32Array(particleCount)
    const spd = new Float32Array(particleCount)
    const off = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 12
      const y = (Math.random() - 0.5) * 8
      const z = -1 - Math.random() * 4 // Placed behind foreground UI
      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z

      initY[i] = y
      spd[i] = 0.08 + Math.random() * 0.12
      off[i] = Math.random() * Math.PI * 2
    }
    return [pos, initY, spd, off]
  }, [particleCount])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (!pointsRef.current) return

    const positionAttribute = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute
    const array = positionAttribute.array as Float32Array

    for (let i = 0; i < particleCount; i++) {
      // Gentle upward drift with slow cycle reset
      let y = array[i * 3 + 1] + speeds[i] * 0.012
      if (y > 4.5) y = -4.5
      array[i * 3 + 1] = y

      // Subtle sideways noise wobble
      array[i * 3] += Math.sin(time * 0.4 + offsets[i]) * 0.0015
    }

    positionAttribute.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#7FA8D9"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

export interface SkillsSceneProps {
  tier: PerformanceTier
  activeSkill: SkillItem | null
  onSelectSkill: (skill: SkillItem) => void
}

export default function SkillsScene({ tier }: SkillsSceneProps) {
  if (tier === 'fallback') {
    return (
      <div className="absolute inset-0 bg-radial from-[#7FA8D9]/10 via-[#0B0C11] to-transparent opacity-60 pointer-events-none" />
    )
  }

  return (
    <div className="relative w-full h-[420px] sm:h-[480px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, tier === 'full' ? 2 : 1]}
      >
        <ambientLight intensity={0.6} />
        <FloatingParticleField tier={tier} />
      </Canvas>
    </div>
  )
}
