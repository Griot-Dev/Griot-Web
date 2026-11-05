// GRIOT TECH — Interactive 3D Spatial System Architecture
import { SpatialSystemInspector } from '@/components/three/SpatialSystemInspector'
import { ErrorBoundary } from '@/components/layout/ErrorBoundary'
import { Box } from 'lucide-react'
import styles from './SpatialShowcase.module.css'

export function SpatialShowcase() {
  return (
    <section className={styles.showcaseSection} aria-label="Interactive 3D Spatial Architecture">
      <div className={styles.glowBackdrop} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <Box size={16} />
            <span>3D HARDWARE-ACCELERATED RUNTIME</span>
          </div>
          <h2 className={styles.title}>Spatial System Architecture</h2>
          <p className={styles.description}>
            Interactive WebGL 3D computational model engineered with Three.js and React Three Fiber. Inspect distributed mesh topology, orbital data streams, and low-latency state synchronization in real-time.
          </p>
        </div>

        <div className={styles.inspectorWrapper}>
          <ErrorBoundary name="SpatialSystemInspector">
            <SpatialSystemInspector />
          </ErrorBoundary>
        </div>
      </div>
    </section>
  )
}
