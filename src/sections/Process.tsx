// GRIOT TECH — Interactive Development Process Section
import React, { useRef } from 'react'
import { processSteps } from '@/data/content'
import { useScrollAnimation } from '@/hooks'
import styles from './Process.module.css'

export function Process() {
  const pathRef = useRef<SVGPathElement>(null)

  const sectionRef = useScrollAnimation<HTMLElement>((el, tl) => {
    // Reveal cards sequentially
    tl.from(el.querySelectorAll(`.${styles.stepCard}`), {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    })

    // Animate line draw if present
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      pathRef.current.style.strokeDasharray = `${length}`
      pathRef.current.style.strokeDashoffset = `${length}`

      tl.to(
        pathRef.current,
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: 'power2.out',
        },
        '-=0.6'
      )
    }
  })

  return (
    <section id="process" ref={sectionRef} className={`section ${styles.processSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="eyebrow">DEVELOPMENT METHODOLOGY</div>
          <h2 className="section-heading">A Clear Path from Idea to System.</h2>
          <p className="section-subheading">
            Engineering discipline over guesswork. Our 4-stage technical lifecycle guarantees predictability, modularity, and maintainable software.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          {/* Desktop SVG connection path */}
          <svg className={styles.pathSvg} viewBox="0 0 1200 60" fill="none">
            <path
              ref={pathRef}
              d="M 120 30 H 1080"
              stroke="#F47716"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.4"
            />
          </svg>

          <div className={styles.stepsGrid}>
            {processSteps.map((step) => (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepNumberBg}>{step.number}</div>

                <div className={styles.stepIndicator}>
                  <div className={styles.stepNode} />
                  <span className={styles.stepCode}>STAGE {step.number}</span>
                </div>

                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                <div className={styles.stepDetails}>{step.details}</div>
              </div>
            ))}
          </div>

          {/* Quality Gates & Client Milestone Deliverables */}
          <div className={styles.deliverablesStrip}>
            <div className={styles.stripCard}>
              <div className={styles.stripStage}>STAGE 01 DELIVERABLES</div>
              <div className={styles.stripTitle}>Discovery &amp; Schemas</div>
              <ul className={styles.stripItems}>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>OpenAPI 3.1 REST Contracts</span>
                </li>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>Normalized PostgreSQL ERD</span>
                </li>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>Zero-Trust Threat Model</span>
                </li>
              </ul>
            </div>

            <div className={styles.stripCard}>
              <div className={styles.stripStage}>STAGE 02 DELIVERABLES</div>
              <div className={styles.stripTitle}>Interface &amp; 3D Assets</div>
              <ul className={styles.stripItems}>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>Clickable High-Fidelity UI</span>
                </li>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>WebGL Shader Prototypes</span>
                </li>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>WCAG AAA Accessible Tokens</span>
                </li>
              </ul>
            </div>

            <div className={styles.stripCard}>
              <div className={styles.stripStage}>STAGE 03 DELIVERABLES</div>
              <div className={styles.stripTitle}>Service Pipelines</div>
              <ul className={styles.stripItems}>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>FastAPI / Node Microservices</span>
                </li>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>Redis Job Queues &amp; Caching</span>
                </li>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>Playwright Automated Test Suite</span>
                </li>
              </ul>
            </div>

            <div className={styles.stripCard}>
              <div className={styles.stripStage}>STAGE 04 DELIVERABLES</div>
              <div className={styles.stripTitle}>Production &amp; IP</div>
              <ul className={styles.stripItems}>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>Hardened Docker Manifests</span>
                </li>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>HSTS / TLS 1.3 Proxy Config</span>
                </li>
                <li className={styles.stripItem}>
                  <span className={styles.stripDot} />
                  <span>100% Repository &amp; IP Transfer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
