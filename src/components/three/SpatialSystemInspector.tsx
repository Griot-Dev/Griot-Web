// GRIOT TECH — Spatial 3D System Inspector Component
// Inspired by spatialsites.com spatial computing & interactive technical artifacts
import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'
import { Eye, RotateCw, Layers, ShieldCheck, Cpu } from 'lucide-react'
import styles from './SpatialSystemInspector.module.css'

interface MeshProps {
  wireframe: boolean
  mode: number
}

function DynamicMeshModel({ wireframe, mode }: MeshProps) {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const ringRef1 = useRef<THREE.Mesh>(null)
  const ringRef2 = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25
    }
    if (innerRef.current) {
      innerRef.current.rotation.x += delta * 0.3
      innerRef.current.rotation.z -= delta * 0.2
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.4
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y += delta * 0.35
    }
  })

  // Mode 0: Microservices Mesh
  if (mode === 0) {
    return (
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
          {/* Inner core */}
          <mesh ref={innerRef}>
            <octahedronGeometry args={[1.1, 0]} />
            <meshStandardMaterial
              color="#F47716"
              wireframe={wireframe}
              metalness={0.8}
              roughness={0.2}
              emissive="#F47716"
              emissiveIntensity={0.3}
            />
          </mesh>

          {/* Outer cage */}
          <mesh>
            <icosahedronGeometry args={[1.7, 1]} />
            <meshStandardMaterial
              color="#38BDF8"
              wireframe={true}
              transparent
              opacity={0.4}
            />
          </mesh>

          {/* Orbital Gimbal Ring 1 */}
          <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[2.2, 0.02, 16, 100]} />
            <meshStandardMaterial color="#FAFAFC" wireframe={false} />
          </mesh>

          {/* Orbital Gimbal Ring 2 */}
          <mesh ref={ringRef2} rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
            <torusGeometry args={[2.5, 0.02, 16, 100]} />
            <meshStandardMaterial color="#F47716" wireframe={false} />
          </mesh>
        </Float>
      </group>
    )
  }

  // Mode 1: Edge Dispatcher (Torus Knot)
  if (mode === 1) {
    return (
      <group ref={groupRef}>
        <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
          <mesh ref={innerRef}>
            <torusKnotGeometry args={[1.1, 0.3, 128, 32, 2, 3]} />
            <meshStandardMaterial
              color="#38BDF8"
              wireframe={wireframe}
              metalness={0.9}
              roughness={0.15}
              emissive="#0284C7"
              emissiveIntensity={0.2}
            />
          </mesh>

          <mesh>
            <sphereGeometry args={[2.4, 24, 24]} />
            <meshStandardMaterial
              color="#8C98AA"
              wireframe={true}
              transparent
              opacity={0.15}
            />
          </mesh>
        </Float>
      </group>
    )
  }

  // Mode 2: Neural Cluster (Dodecahedron & Nodes)
  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.5}>
        <mesh ref={innerRef}>
          <dodecahedronGeometry args={[1.3, 0]} />
          <meshStandardMaterial
            color="#34D399"
            wireframe={wireframe}
            metalness={0.85}
            roughness={0.25}
            emissive="#10B981"
            emissiveIntensity={0.25}
          />
        </mesh>

        <mesh ref={ringRef1}>
          <torusGeometry args={[2.1, 0.03, 16, 80]} />
          <meshStandardMaterial color="#34D399" wireframe={true} />
        </mesh>
      </Float>
    </group>
  )
}

export function SpatialSystemInspector() {
  // Initialize with Vector State (Mode 2) & Wireframe on to match the green spatial runtime
  const [activeMode, setActiveMode] = useState<number>(2)
  const [wireframe, setWireframe] = useState<boolean>(true)

  const modes = [
    { id: 0, title: 'Mesh Topology', spec: '12-Node Distributed Microservices' },
    { id: 1, title: 'Edge Stream', spec: 'Low-Latency Event Dispatch Pipeline' },
    { id: 2, title: 'Vector State', spec: 'Persistent ACID Ledger & Cache Sync' },
  ]

  return (
    <div className={styles.inspectorContainer}>
      {/* HUD Header */}
      <div className={styles.hudHeader}>
        <div className={styles.hudTitleGroup}>
          <div className={styles.signalDot} />
          <div>
            <div className={styles.hudTitle}>Spatial System Architecture</div>
            <div className={styles.hudSubtitle}>Interactive 3D Hardware-Accelerated Runtime</div>
          </div>
        </div>

        <div className={styles.hudControls}>
          <button
            type="button"
            className={`${styles.modeBtn} ${wireframe ? styles.modeBtnActive : ''}`}
            onClick={() => setWireframe(!wireframe)}
            title="Toggle Wireframe Shading"
          >
            <Layers size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: -2 }} />
            {wireframe ? 'Solid Mode' : 'Wireframe'}
          </button>

          {modes.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`${styles.modeBtn} ${activeMode === m.id ? styles.modeBtnActive : ''}`}
              onClick={() => setActiveMode(m.id)}
            >
              {m.title}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className={styles.canvasWrapper}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[6, 6, 6]} intensity={1.2} color="#FFFFFF" />
          <directionalLight position={[-6, -4, 4]} intensity={0.5} color="#F47716" />
          <pointLight position={[0, 0, 0]} intensity={1.5} color="#38BDF8" distance={4} />

          <Suspense fallback={null}>
            <DynamicMeshModel wireframe={wireframe} mode={activeMode} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={true}
              autoRotateSpeed={0.8}
              dampingFactor={0.05}
            />
          </Suspense>
        </Canvas>

        <div className={styles.interactiveHint}>
          <RotateCw size={12} />
          <span>DRAG TO ROTATE 360° SPATIAL MODEL</span>
        </div>
      </div>

      {/* HUD Bottom Telemetry */}
      <div className={styles.hudFooter}>
        <div className={styles.telemetryItem}>
          <span className={styles.telemetryLabel}>Active Topology</span>
          <span className={styles.telemetryValue}>{modes[activeMode].spec}</span>
        </div>
        <div className={styles.telemetryItem}>
          <span className={styles.telemetryLabel}>Shading Matrix</span>
          <span className={styles.telemetryValue}>{wireframe ? 'PBR Wireframe (Zero Occlusion)' : 'Full Specular PBR Metallic'}</span>
        </div>
        <div className={styles.telemetryItem}>
          <span className={styles.telemetryLabel}>Renderer</span>
          <span className={styles.telemetryValue}>WebGL 2.0 / R3F Canvas</span>
        </div>
        <div className={styles.telemetryItem}>
          <span className={styles.telemetryLabel}>Status</span>
          <span className={styles.telemetryValue} style={{ color: '#34D399' }}>Synced & Stable (60 FPS)</span>
        </div>
      </div>
    </div>
  )
}
