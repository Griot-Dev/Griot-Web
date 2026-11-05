// GRIOT TECH — Hero section with split layout and 3D scene
import { useRef, lazy, Suspense, useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePointerPosition, useReducedMotion, useDeviceCapabilities } from '@/hooks'
import { Button } from '@/components/ui/Button'
import { ErrorBoundary } from '@/components/layout/ErrorBoundary'
import styles from './Hero.module.css'

const HeroScene = lazy(() =>
  import('@/components/three/HeroScene').then((mod) => ({ default: mod.HeroScene }))
)

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function Hero() {
  const pointerRef = usePointerPosition(0.06)
  const reducedMotion = useReducedMotion()
  const { hasGPU } = useDeviceCapabilities()
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className={styles.hero} id="hero">
      {/* Subtle background grid */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.container}>
        {/* ── Left: text content ── */}
        <div className={styles.content}>
          <motion.span
            className="eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Engineering Digital Systems
          </motion.span>

          <motion.h1
            className={styles.headline}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Complex Ideas.{'\n'}
            <span className={styles.headlineAccent}>Precisely</span> Engineered.
          </motion.h1>

          <motion.p
            className={styles.description}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            We design and build custom software systems — from business platforms
            to interactive experiences — with meticulous attention to architecture,
            performance, and craft.
          </motion.p>

          <motion.div
            className={styles.ctas}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Button variant="primary" size="lg" href="#contact">
              Discuss a Project
            </Button>
            <Button variant="outline" size="lg" href="#projects">
              Explore Our Work
            </Button>
          </motion.div>

          <motion.div
            className={styles.statusLine}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <span className={styles.statusDot} />
            Software Engineering Studio / Kanyakumari, Tamil Nadu
          </motion.div>

          {/* Hero Performance & Reliability Proof Metrics */}
          <motion.div
            className={styles.metricsBar}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>99.98%</span>
              <span className={styles.metricLabel}>System Reliability SLA</span>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>&lt; 200ms</span>
              <span className={styles.metricLabel}>P95 API Latency</span>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>100%</span>
              <span className={styles.metricLabel}>Client IP Ownership</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right: 3D scene ── */}
        <div className={styles.scene}>
          <ErrorBoundary
            fallback={
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    border: '2px dashed var(--electric-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--electric-orange)' }}>
                    WebGL2
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted-steel)' }}>
                  HARDWARE ACCELERATION COMPATIBLE
                </div>
              </div>
            }
          >
            <Suspense
              fallback={
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--muted-steel)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  INITIALIZING 3D ENGINE...
                </div>
              }
            >
              <HeroScene
                pointerRef={pointerRef}
                reducedMotion={reducedMotion}
                hasGPU={hasGPU}
              />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  )
}
