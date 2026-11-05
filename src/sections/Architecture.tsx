// GRIOT TECH — Architecture section with layered diagram visualization
import { useEffect, useRef, useState, useCallback } from 'react'
import { useReducedMotion, gsap, ScrollTrigger } from '@/hooks'
import { TechBadge } from '@/components/ui/TechBadge'
import styles from './Architecture.module.css'

interface ArchLayer {
  id: string
  name: string
  shortName: string
  technologies: string[]
  description: string
  offset: number // horizontal offset in px for depth illusion
  bgOpacity: number
}

const layers: ArchLayer[] = [
  {
    id: 'presentation',
    name: 'React Presentation Layer',
    shortName: 'Presentation',
    technologies: ['React', 'TypeScript', 'Vite'],
    description:
      'Component-driven UI with server-side rendering capabilities, responsive design, and accessibility-first architecture.',
    offset: 0,
    bgOpacity: 0.14,
  },
  {
    id: 'api',
    name: 'API & Application Services',
    shortName: 'API Services',
    technologies: ['REST', 'GraphQL', 'WebSocket'],
    description:
      'Request routing, authentication middleware, rate limiting, and API versioning — the bridge between client and server logic.',
    offset: 30,
    bgOpacity: 0.11,
  },
  {
    id: 'backend',
    name: 'Python Backend Services',
    shortName: 'Backend',
    technologies: ['Python', 'FastAPI', 'Django'],
    description:
      'Business logic, data validation, background task processing, and service orchestration for complex workflows.',
    offset: -20,
    bgOpacity: 0.09,
  },
  {
    id: 'database',
    name: 'Database Layer',
    shortName: 'Database',
    technologies: ['PostgreSQL', 'Redis', 'MongoDB'],
    description:
      'Relational and document data storage with caching layers, query optimization, and migration management.',
    offset: 20,
    bgOpacity: 0.06,
  },
  {
    id: 'integrations',
    name: 'External Integrations',
    shortName: 'Integrations',
    technologies: ['Docker', 'CI/CD', 'Cloud'],
    description:
      'Third-party service connectors, deployment pipelines, infrastructure provisioning, and monitoring telemetry.',
    offset: -10,
    bgOpacity: 0.04,
  },
]

export function Architecture() {
  const sectionRef = useRef<HTMLElement>(null)
  const diagramRef = useRef<HTMLDivElement>(null)
  const layerRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRefs = useRef<(SVGPathElement | null)[]>([])
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReduced = useReducedMotion()

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // GSAP ScrollTrigger animations for layers
  useEffect(() => {
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Animate layer cards sliding in from alternating sides
      layerRefs.current.forEach((layer, i) => {
        if (!layer) return
        const fromX = i % 2 === 0 ? -60 : 60

        gsap.fromTo(
          layer,
          { x: fromX, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: diagramRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })

      // Animate SVG connection lines
      lineRefs.current.forEach((path, i) => {
        if (!path) return
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 0.6,
          delay: 0.3 + i * 0.12,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 85%',
            once: true,
          },
        })
      })

      // Animate text content
      const textEl = sectionRef.current?.querySelector(`.${styles.content}`)
      if (textEl) {
        gsap.from(textEl, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReduced])

  const setLayerRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      layerRefs.current[index] = el
    },
    []
  )

  const setLineRef = useCallback(
    (index: number) => (el: SVGPathElement | null) => {
      lineRefs.current[index] = el
    },
    []
  )

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className={`section section--navy ${styles.section}`}
    >
      <div className={`container ${styles.container}`}>
        {/* Text content */}
        <div className={styles.content}>
          <p className="eyebrow">Software Architecture</p>
          <h2 className="section-heading">
            Engineered Beneath
            <br />
            the Interface.
          </h2>
          <p className="section-subheading">
            Every project is built on a deliberate, layered architecture — from
            reactive presentation components down to resilient data systems and
            external integrations. Each layer is independently testable, scalable, and
            designed for long-term maintainability.
          </p>

          {/* Architectural Invariants & Standards Card */}
          <div className={styles.specsCard}>
            <div className={styles.specsTitle}>ARCHITECTURAL INVARIANTS</div>
            <ul className={styles.specsList}>
              <li className={styles.specRow}>
                <span className={styles.specDot} />
                <span>Zero Circular Domain Dependencies</span>
              </li>
              <li className={styles.specRow}>
                <span className={styles.specDot} />
                <span>Contract-First APIs (OpenAPI &amp; Zod Schemas)</span>
              </li>
              <li className={styles.specRow}>
                <span className={styles.specDot} />
                <span>100% Parameterized Relational Queries</span>
              </li>
              <li className={styles.specRow}>
                <span className={styles.specDot} />
                <span>Sub-200ms P95 Latency Performance SLA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Architecture diagram */}
        <div ref={diagramRef} className={styles.diagram}>
          {/* SVG connection lines */}
          <svg
            className={styles.connections}
            viewBox="0 0 520 460"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Connection lines between layers */}
            {layers.slice(0, -1).map((layer, i) => {
              const y1 = 20 + i * 104 + 72
              const y2 = 20 + (i + 1) * 104
              const x1 = 260 + (isMobile ? 0 : layer.offset)
              const x2 = 260 + (isMobile ? 0 : layers[i + 1].offset)
              const midY = (y1 + y2) / 2

              return (
                <path
                  key={`line-${layer.id}`}
                  ref={setLineRef(i)}
                  d={`M${x1},${y1} C${x1},${midY} ${x2},${midY} ${x2},${y2}`}
                  stroke="var(--electric-orange)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity={
                    hoveredLayer
                      ? hoveredLayer === layer.id || hoveredLayer === layers[i + 1].id
                        ? 0.9
                        : 0.15
                      : 0.4
                  }
                  style={{ transition: 'opacity 0.3s ease' }}
                />
              )
            })}
          </svg>

          {/* Layer cards */}
          {layers.map((layer, i) => {
            const isHovered = hoveredLayer === layer.id
            const isDimmed = hoveredLayer !== null && !isHovered

            return (
              <div
                key={layer.id}
                ref={setLayerRef(i)}
                className={`${styles.layer} ${isHovered ? styles.layerHovered : ''} ${
                  isDimmed ? styles.layerDimmed : ''
                }`}
                style={{
                  '--layer-offset': isMobile ? '0px' : `${layer.offset}px`,
                  '--layer-bg-opacity': layer.bgOpacity,
                } as React.CSSProperties}
                onMouseEnter={() => !isMobile && setHoveredLayer(layer.id)}
                onMouseLeave={() => !isMobile && setHoveredLayer(null)}
                role="listitem"
              >
                <div className={styles.layerHeader}>
                  <span className={styles.layerNumber}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={styles.layerName}>
                    {isMobile ? layer.shortName : layer.name}
                  </h3>
                </div>

                <div className={styles.layerBadges}>
                  {layer.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} variant="dark" />
                  ))}
                </div>

                {/* Tooltip on hover */}
                {!isMobile && (
                  <div className={styles.tooltip}>
                    <p>{layer.description}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
