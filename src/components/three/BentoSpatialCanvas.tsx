// GRIOT TECH — Interactive 3D Bento Spatial Canvas
// Inspired by design.techie & spatialsites.com interactive 3D WebGL artifacts
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function RotatingSpatialArtifact() {
  const meshRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.35
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.4
      coreRef.current.rotation.z -= delta * 0.25
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.5
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.45
    }
  })

  return (
    <group ref={meshRef}>
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
        {/* Core Icosahedron with Metallic PBR */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial
            color="#F47716"
            emissive="#C2540A"
            emissiveIntensity={0.35}
            metalness={0.9}
            roughness={0.15}
            wireframe={false}
          />
        </mesh>

        {/* Outer Wireframe Cage */}
        <mesh>
          <dodecahedronGeometry args={[1.65, 0]} />
          <meshStandardMaterial
            color="#38BDF8"
            wireframe={true}
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Orbital Ring 1 */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.0, 0.025, 16, 80]} />
          <meshStandardMaterial
            color="#FAFAFC"
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* Orbital Ring 2 */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[2.3, 0.02, 16, 80]} />
          <meshStandardMaterial
            color="#F47716"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  )
}

export function BentoSpatialCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '260px', position: 'relative' }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 6, 5]} intensity={1.5} color="#FFFFFF" />
        <directionalLight position={[-4, -3, 3]} intensity={1.0} color="#F47716" />
        <pointLight position={[0, 0, 2]} intensity={1.2} color="#38BDF8" distance={6} />

        <Suspense fallback={null}>
          <RotatingSpatialArtifact />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.9}
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '12px',
          fontSize: '0.675rem',
          fontFamily: 'var(--font-mono, monospace)',
          color: '#94A3B8',
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(8px)',
          padding: '0.2rem 0.55rem',
          borderRadius: '9999px',
          pointerEvents: 'none',
        }}
      >
        3D WEBGL INTERACTIVE
      </div>
    </div>
  )
}
