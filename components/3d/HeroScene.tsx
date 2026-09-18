'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'
import { PerformanceTier } from '@/lib/types'

interface WireframeSphereProps {
  tier: PerformanceTier
  mousePos: React.MutableRefObject<[number, number]>
}

function WireframeSphere({ tier, mousePos }: WireframeSphereProps) {
  const outerSphereRef = useRef<THREE.Mesh>(null)
  const innerSphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const [mx, my] = mousePos.current

    // Slow, continuous auto-rotation on Y-axis with gentle mouse tilt
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y = time * 0.08 + mx * 0.15
      outerSphereRef.current.rotation.x = Math.sin(time * 0.04) * 0.05 + my * 0.15
    }

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y = -time * 0.05 - mx * 0.1
      innerSphereRef.current.rotation.z = time * 0.03
    }
  })

  return (
    <group scale={1.2}>
      {/* Primary Wireframe Sphere */}
      <mesh ref={outerSphereRef}>
        <icosahedronGeometry args={[1.8, tier === 'full' ? 3 : 2]} />
        <meshBasicMaterial
          color="#7FA8D9"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Inner Nested Wireframe Core for Subtle Architectural Depth */}
      <mesh ref={innerSphereRef}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial
          color="#7FA8D9"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  )
}

export interface HeroSceneProps {
  tier: PerformanceTier
}

export default function HeroScene({ tier }: HeroSceneProps) {
  const mousePos = useRef<[number, number]>([0, 0])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    mousePos.current = [x, y]
  }

  if (tier === 'fallback') {
    return (
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        {/* Static SVG Wireframe Sphere Fallback */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[#7FA8D9]/30 flex items-center justify-center bg-radial from-[#12141C] via-[#0B0C11] to-transparent shadow-2xl">
          <svg className="w-48 h-48 sm:w-60 sm:h-60 text-[#7FA8D9]/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="50" cy="50" r="45" />
            <ellipse cx="50" cy="50" rx="45" ry="20" />
            <ellipse cx="50" cy="50" rx="20" ry="45" />
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="50" x2="95" y2="50" />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative w-full h-full cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, tier === 'full' ? 2 : 1]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.0} color="#F2F1ED" />

        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
          <WireframeSphere tier={tier} mousePos={mousePos} />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.4}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
