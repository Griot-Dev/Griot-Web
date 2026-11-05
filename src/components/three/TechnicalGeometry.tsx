// GRIOT TECH — High-End Precision Spatial Engineering Artifact for Hero Scene
// Inspired by spatialsites.com spatial computing & metallic PBR rendering
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

interface TechnicalGeometryProps {
  pointerRef: React.MutableRefObject<{ x: number; y: number }>
  reducedMotion?: boolean
}

// ── Satellite Data Node ──
function SatelliteNode({ radius, speed, phase, yOffset, size = 0.035, color = '#F47716' }: {
  radius: number
  speed: number
  phase: number
  yOffset: number
  size?: number
  color?: string
}) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase
    const x = Math.cos(t) * radius
    const z = Math.sin(t) * radius
    meshRef.current.position.set(x, yOffset + Math.sin(t * 1.5) * 0.08, z)
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  )
}

// ── Orbiting Particle Dust ──
function ParticleDust({ count = 40 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      radius: 0.9 + Math.random() * 0.8,
      speed: 0.2 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
      y: (Math.random() - 0.5) * 0.9,
      scale: 0.012 + Math.random() * 0.018,
    }))
  }, [count])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    particles.forEach((p, i) => {
      const angle = t * p.speed + p.phase
      const x = Math.cos(angle) * p.radius
      const z = Math.sin(angle) * p.radius
      const y = p.y + Math.sin(t * 0.8 + p.phase) * 0.05

      dummy.position.set(x, y, z)
      dummy.scale.setScalar(p.scale)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#F47716" transparent opacity={0.7} />
    </instancedMesh>
  )
}

export function TechnicalGeometry({ pointerRef, reducedMotion = false }: TechnicalGeometryProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const coreRef = useRef<THREE.Mesh>(null!)
  const innerCageRef = useRef<THREE.Mesh>(null!)
  const ring1Ref = useRef<THREE.Mesh>(null!)
  const ring2Ref = useRef<THREE.Mesh>(null!)
  const ring3Ref = useRef<THREE.Mesh>(null!)

  // Damped pointer follow
  const currentRotation = useRef({ x: 0, y: 0 })

  useFrame((_, delta) => {
    if (reducedMotion) return

    // Core rotations
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4
      coreRef.current.rotation.x += delta * 0.25
    }

    // Inner wireframe cage counter-rotates
    if (innerCageRef.current) {
      innerCageRef.current.rotation.y -= delta * 0.3
      innerCageRef.current.rotation.z += delta * 0.2
    }

    // Precision gimbal rings rotate on distinct axes
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.35
      ring1Ref.current.rotation.y += delta * 0.15
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.3
      ring2Ref.current.rotation.z -= delta * 0.25
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.4
      ring3Ref.current.rotation.x -= delta * 0.2
    }

    // Smooth pointer parallax
    const targetX = pointerRef.current.y * 0.35
    const targetY = pointerRef.current.x * 0.4
    currentRotation.current.x += (targetX - currentRotation.current.x) * 0.05
    currentRotation.current.y += (targetY - currentRotation.current.y) * 0.05

    if (groupRef.current) {
      groupRef.current.rotation.x = currentRotation.current.x
      groupRef.current.rotation.y = currentRotation.current.y
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* ── Internal Point Light (glowing core illumination) ── */}
        <pointLight position={[0, 0, 0]} intensity={2.5} color="#F47716" distance={3.5} />

        {/* ── Core: Faceted Chrome Prism ── */}
        <mesh ref={coreRef}>
          <octahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial
            color="#FAFAFC"
            metalness={0.95}
            roughness={0.12}
            emissive="#101D35"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* ── Inner Translucent Golden Wireframe Cage ── */}
        <mesh ref={innerCageRef}>
          <icosahedronGeometry args={[0.62, 1]} />
          <meshStandardMaterial
            color="#F47716"
            wireframe
            transparent
            opacity={0.45}
            emissive="#F47716"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* ── Precision Gimbal Ring 1: Brushed Titanium ── */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[0.88, 0.016, 16, 100]} />
          <meshStandardMaterial
            color="#CBD5E1"
            metalness={0.92}
            roughness={0.18}
          />
        </mesh>

        {/* ── Precision Gimbal Ring 2: Electric Orange Luminescent ── */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
          <torusGeometry args={[1.05, 0.012, 16, 100]} />
          <meshStandardMaterial
            color="#F47716"
            emissive="#F47716"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* ── Precision Outer Horizon Ring: Deep Slate Chrome ── */}
        <mesh ref={ring3Ref} rotation={[0, Math.PI / 2.5, Math.PI / 5]}>
          <torusGeometry args={[1.22, 0.014, 16, 100]} />
          <meshStandardMaterial
            color="#1E293B"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>

        {/* ── Satellite Orbiting Data Nodes ── */}
        <SatelliteNode radius={0.88} speed={0.9} phase={0} yOffset={0} color="#F47716" size={0.045} />
        <SatelliteNode radius={1.05} speed={-0.7} phase={1.5} yOffset={0.1} color="#38BDF8" size={0.038} />
        <SatelliteNode radius={1.22} speed={0.6} phase={3.14} yOffset={-0.1} color="#FAFAFC" size={0.042} />
        <SatelliteNode radius={0.7} speed={-1.2} phase={4.2} yOffset={0.15} color="#F47716" size={0.032} />

        {/* ── Orbiting Particle Dust Field ── */}
        {!reducedMotion && <ParticleDust count={40} />}
      </Float>
    </group>
  )
}
