// GRIOT TECH — Interactive System Architecture Lab & Real-Time Engine
// Replaces generic sci-fi wireframes with real architectural simulation and photorealistic 3D hardware wafer
import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'
import {
  Globe,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  Play,
  RotateCw,
  Sliders,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
} from 'lucide-react'
import styles from './InteractiveSystemLab.module.css'

// ── 3D Titanium & Glass Compute Wafer Model ──
function TitaniumComputeCore() {
  const meshGroup = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const ringRef1 = useRef<THREE.Mesh>(null)
  const ringRef2 = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (meshGroup.current) {
      meshGroup.current.rotation.y += delta * 0.2
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.15
      coreRef.current.rotation.y += delta * 0.25
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.3
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x -= delta * 0.25
    }
  })

  return (
    <group ref={meshGroup}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Central Titanium Processor Block */}
        <mesh ref={coreRef}>
          <boxGeometry args={[1.5, 0.4, 1.5]} />
          <meshStandardMaterial
            color="#1E293B"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Golden Substrate Circuit Contacts */}
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[1.2, 0.05, 1.2]} />
          <meshStandardMaterial
            color="#F47716"
            metalness={0.8}
            roughness={0.2}
            emissive="#F47716"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Upper Crystal Dielectric Layer */}
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.15, 32]} />
          <meshPhysicalMaterial
            color="#38BDF8"
            transmission={0.85}
            opacity={1}
            transparent
            roughness={0.05}
            ior={1.5}
            thickness={1.2}
          />
        </mesh>

        {/* Orbital Gimbal Bus 1 */}
        <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2.0, 0.025, 16, 100]} />
          <meshStandardMaterial color="#F47716" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Orbital Gimbal Bus 2 */}
        <mesh ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[2.4, 0.02, 16, 100]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.9} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  )
}

export function InteractiveSystemLab() {
  const [activeTab, setActiveTab] = useState<'pipeline' | '3d-core' | 'stress'>('pipeline')
  const [activeNode, setActiveNode] = useState<number>(0)
  const [isDispatching, setIsDispatching] = useState<boolean>(false)
  const [latency, setLatency] = useState<number>(14.2)
  const [requestCount, setRequestCount] = useState<number>(1284)
  const [terminalLog, setTerminalLog] = useState<string>(
    JSON.stringify(
      {
        endpoint: 'POST /api/v1/dispatch/pipeline',
        status: 200,
        latency: '14.2ms',
        tls: 'TLS 1.3 / ChaCha20',
        cache: 'HIT (Redis Edge)',
        security: 'OWASP Sanitized',
      },
      null,
      2
    )
  )

  const architectureNodes = [
    {
      id: 0,
      name: 'Client Gateway',
      role: 'Edge DNS & TLS 1.3',
      icon: Globe,
      tech: 'Cloudflare Edge',
      spec: 'Sub-10ms Anycast routing with zero-trust perimeter defense and DDoS mitigation.',
    },
    {
      id: 1,
      name: 'UI Runtime',
      role: 'Concurrent Presentation',
      icon: Layers,
      tech: 'React 18 + Vite',
      spec: 'Component state isolation, SSR/SSG caching, and sub-second First Contentful Paint.',
    },
    {
      id: 2,
      name: 'Service API',
      role: 'Asynchronous Logic',
      icon: Server,
      tech: 'Python FastAPI',
      spec: 'Non-blocking async request ingestion, Pydantic runtime schema validation.',
    },
    {
      id: 3,
      name: 'Task Queue',
      role: 'Distributed Workers',
      icon: Zap,
      tech: 'Celery & Redis',
      spec: 'Asynchronous job dispatching, pub/sub telemetry, and atomic background queues.',
    },
    {
      id: 4,
      name: 'Data Storage',
      role: 'ACID Persistence',
      icon: Database,
      tech: 'PostgreSQL 16',
      spec: 'Partitioned indexing, foreign key constraints, and point-in-time recovery.',
    },
  ]

  const triggerDispatch = () => {
    setIsDispatching(true)
    let step = 0
    const interval = setInterval(() => {
      step++
      if (step < architectureNodes.length) {
        setActiveNode(step)
      } else {
        clearInterval(interval)
        setIsDispatching(false)
        const randomLatency = +(11 + Math.random() * 8).toFixed(1)
        setLatency(randomLatency)
        setRequestCount((prev) => prev + 1)
        setTerminalLog(
          JSON.stringify(
            {
              endpoint: 'POST /api/v1/dispatch/pipeline',
              status: 200,
              latency: `${randomLatency}ms`,
              tls: 'TLS 1.3 / AES-256-GCM',
              cache: 'HIT (Redis Edge)',
              db_pool: '5 Active / 0 Waiting',
              integrity: '100% Cryptographic Match',
            },
            null,
            2
          )
        )
      }
    }, 280)
  }

  const triggerStressTest = () => {
    setIsDispatching(true)
    setTimeout(() => {
      setIsDispatching(false)
      setRequestCount((prev) => prev + 10000)
      setLatency(19.4)
      setTerminalLog(
        JSON.stringify(
          {
            benchmark: '10,000 Concurrent HTTP/2 Requests',
            concurrency: 500,
            dropped_packets: 0,
            p50_latency: '12.1ms',
            p95_latency: '19.4ms',
            p99_latency: '24.8ms',
            auto_scale_events: '2 Worker Pods Provisioned',
            status: 'All 10,000 Transations Settled (200 OK)',
          },
          null,
          2
        )
      )
    }, 900)
  }

  return (
    <div className={styles.labContainer}>
      {/* Console Header */}
      <div className={styles.labHeader}>
        <div className={styles.titleArea}>
          <div className={styles.indicatorPulse} />
          <div>
            <div className={styles.mainTitle}>System Architecture &amp; Performance Console</div>
            <div className={styles.subTitle}>Live Interactive Engineering Simulator • Kanyakumari Studio</div>
          </div>
        </div>

        <div className={styles.tabControls}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'pipeline' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('pipeline')}
          >
            <Activity size={14} />
            <span>Architecture Flow</span>
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === '3d-core' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('3d-core')}
          >
            <Cpu size={14} />
            <span>3D Hardware Processor</span>
          </button>
        </div>
      </div>

      {/* ── Viewport ── */}
      <div className={styles.viewportArea}>
        {activeTab === 'pipeline' && (
          <div className={styles.pipelineWrapper}>
            <div className={styles.pipelineNodes}>
              {architectureNodes.map((node) => {
                const IconComp = node.icon
                const isSelected = activeNode === node.id
                return (
                  <div
                    key={node.id}
                    className={`${styles.nodeCard} ${isSelected ? styles.nodeCardActive : ''}`}
                    onClick={() => setActiveNode(node.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={styles.nodeIcon}>
                      <IconComp size={22} />
                    </div>
                    <div className={styles.nodeName}>{node.name}</div>
                    <div className={styles.nodeRole}>{node.role}</div>
                    <div className={styles.nodeTag}>{node.tech}</div>
                  </div>
                )
              })}
            </div>

            {/* Selected Node Spec Inspector */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem 1.5rem',
                background: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid var(--light-border)',
                maxWidth: '740px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <CheckCircle2 size={18} color="var(--electric-orange)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.6 }}>
                <strong>{architectureNodes[activeNode].name} ({architectureNodes[activeNode].tech}):</strong>{' '}
                {architectureNodes[activeNode].spec}
              </div>
            </div>

            {/* Interactive Dispatch Controls */}
            <div className={styles.actionRow}>
              <button
                type="button"
                className={styles.actionBtn}
                onClick={triggerDispatch}
                disabled={isDispatching}
              >
                <Play size={14} />
                <span>{isDispatching ? 'Tracing Data Stream...' : 'Execute Live Request Dispatch'}</span>
              </button>

              <button
                type="button"
                className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                onClick={triggerStressTest}
                disabled={isDispatching}
              >
                <Zap size={14} />
                <span>Simulate 10,000 Req/s Burst</span>
              </button>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Latency: <strong style={{ color: 'var(--midnight-navy)' }}>{latency}ms</strong> | Total Dispatched:{' '}
                <strong style={{ color: 'var(--electric-orange)' }}>{requestCount.toLocaleString()}</strong>
              </div>
            </div>

            {/* Telemetry Log Terminal */}
            <div className={styles.telemetryBox}>
              <div className={styles.telemetryTop}>
                <div className={styles.terminalDots}>
                  <div className={styles.tDot} style={{ background: '#EF4444' }} />
                  <div className={styles.tDot} style={{ background: '#F59E0B' }} />
                  <div className={styles.tDot} style={{ background: '#10B981' }} />
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontFamily: 'var(--font-mono)' }}>
                  TERMINAL STREAM — HTTP/2 200 OK
                </div>
              </div>
              <pre className={styles.terminalOutput}>{terminalLog}</pre>
            </div>
          </div>
        )}

        {activeTab === '3d-core' && (
          <div className={styles.threeCanvasWrap}>
            <Canvas
              dpr={[1, 2]}
              camera={{ position: [0, 0, 4.8], fov: 42 }}
              gl={{ antialias: true, alpha: true }}
            >
              <ambientLight intensity={0.7} />
              <directionalLight position={[6, 8, 6]} intensity={1.8} color="#FFFFFF" />
              <directionalLight position={[-6, 4, 4]} intensity={1.2} color="#F47716" />
              <pointLight position={[0, 0, 3]} intensity={1.2} color="#38BDF8" distance={8} />

              <Suspense fallback={null}>
                <TitaniumComputeCore />
              </Suspense>

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate={false}
                dampingFactor={0.05}
              />
            </Canvas>

            <div className={styles.canvasOverlayControls}>
              <RotateCw size={13} />
              <span>DRAG TO ROTATE 360° COMPUTATIONAL PROCESSOR</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
