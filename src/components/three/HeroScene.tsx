// GRIOT TECH — Hero 3D Spatial Canvas Scene
// High-spec PBR lighting, metallic reflections, and responsive parallax
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { TechnicalGeometry } from './TechnicalGeometry'

interface HeroSceneProps {
  pointerRef: React.MutableRefObject<{ x: number; y: number }>
  reducedMotion?: boolean
  hasGPU?: boolean
}

export function HeroScene({
  pointerRef,
  reducedMotion = false,
  hasGPU = true,
}: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 3.4], fov: 42 }}
      style={{ width: '100%', height: '100%' }}
      gl={{
        antialias: hasGPU, // Disable antialiasing on integrated/low-end GPUs
        alpha: true,
        powerPreference: hasGPU ? 'high-performance' : 'low-power',
      }}
    >
      {/* Self-contained procedural lighting (100% offline, zero external CDN dependencies) */}
      <ambientLight intensity={0.8} />
      <hemisphereLight groundColor="#0A1628" color="#FFFFFF" intensity={0.7} />
      <directionalLight
        position={[6, 8, 6]}
        intensity={1.8}
        color="#FFFFFF"
      />
      <directionalLight
        position={[-5, 3, 4]}
        intensity={1.2}
        color="#F47716"
      />
      <directionalLight
        position={[2, -4, 3]}
        intensity={0.6}
        color="#38BDF8"
      />
      <pointLight position={[0, 0, 2.5]} intensity={1.2} color="#FFFFFF" distance={7} />

      <Suspense fallback={null}>
        {/* High-end precision spatial engineering artifact */}
        <TechnicalGeometry
          pointerRef={pointerRef}
          reducedMotion={reducedMotion}
        />
      </Suspense>
    </Canvas>
  )
}
