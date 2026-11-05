// GRIOT TECH — Project Showcase Section
import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Layers, CheckCircle2, Clock } from 'lucide-react'
import { projects, type Project } from '@/data/content'
import { TechBadge } from '@/components/ui/TechBadge'
import { useScrollAnimation } from '@/hooks'
import styles from './Projects.module.css'

// ── SVG Mockup Components ──

function CRMMockup() {
  return (
    <div className={styles.mockupWrapper}>
      <div className={styles.mockupHeader}>
        <div className={styles.mockupDot} style={{ background: '#EF4444' }} />
        <div className={styles.mockupDot} style={{ background: '#FBBF24' }} />
        <div className={styles.mockupDot} style={{ background: '#34D399' }} />
        <span style={{ fontSize: '0.65rem', color: '#8C98AA', marginLeft: '6px', fontFamily: 'var(--font-mono)' }}>
          pipeline.griot / active-deals
        </span>
      </div>
      <div className={styles.mockupBody}>
        {/* Pipeline stage header */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
          {['Qualified', 'Proposal', 'Review', 'Won'].map((col, i) => (
            <div
              key={col}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.03)',
                padding: '4px 6px',
                borderRadius: '4px',
                fontSize: '0.6rem',
                color: i === 0 ? '#F47716' : '#8C98AA',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {col}
            </div>
          ))}
        </div>
        {/* Pipeline deal cards */}
        <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ background: 'rgba(244, 119, 22, 0.1)', border: '1px solid rgba(244, 119, 22, 0.3)', borderRadius: '4px', padding: '6px' }}>
              <div style={{ width: '60%', height: '5px', background: '#FAFAFC', borderRadius: '2px', marginBottom: '4px' }} />
              <div style={{ width: '40%', height: '4px', background: '#8C98AA', borderRadius: '2px' }} />
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '4px', padding: '6px' }}>
              <div style={{ width: '70%', height: '5px', background: '#8C98AA', borderRadius: '2px' }} />
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '4px', padding: '6px' }}>
              <div style={{ width: '80%', height: '5px', background: '#8C98AA', borderRadius: '2px', marginBottom: '4px' }} />
              <div style={{ width: '50%', height: '4px', background: '#8C98AA', borderRadius: '2px' }} />
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '4px', padding: '6px' }}>
              <div style={{ width: '75%', height: '5px', background: '#FAFAFC', borderRadius: '2px' }} />
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '4px', padding: '6px' }}>
              <div style={{ width: '60%', height: '5px', background: '#34D399', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmployeeAdminMockup() {
  return (
    <div className={styles.mockupWrapper}>
      <div className={styles.mockupHeader}>
        <div className={styles.mockupDot} />
        <div className={styles.mockupDot} />
        <div className={styles.mockupDot} />
        <span style={{ fontSize: '0.65rem', color: '#8C98AA', marginLeft: '6px', fontFamily: 'var(--font-mono)' }}>
          admin.griot / staff-records
        </span>
      </div>
      <div className={styles.mockupBody}>
        {/* Table rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
            <div style={{ width: '30%', height: '6px', background: '#8C98AA', borderRadius: '2px' }} />
            <div style={{ width: '20%', height: '6px', background: '#34D399', borderRadius: '2px' }} />
            <div style={{ width: '20%', height: '6px', background: '#8C98AA', borderRadius: '2px' }} />
          </div>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 8px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: n === 1 ? '#3B82F6' : 'rgba(140, 152, 170, 0.3)' }} />
                <div style={{ width: '60px', height: '5px', background: 'rgba(255,255,255,0.7)', borderRadius: '2px' }} />
              </div>
              <div style={{ width: '35px', height: '5px', background: n % 2 === 0 ? '#34D399' : '#FBBF24', borderRadius: '2px' }} />
              <div style={{ width: '45px', height: '5px', background: 'rgba(140, 152, 170, 0.4)', borderRadius: '2px' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VirtualTryOnMockup() {
  return (
    <div className={styles.mockupWrapper}>
      <div className={styles.mockupHeader}>
        <div className={styles.mockupDot} />
        <div className={styles.mockupDot} />
        <div className={styles.mockupDot} />
        <span style={{ fontSize: '0.65rem', color: '#8C98AA', marginLeft: '6px', fontFamily: 'var(--font-mono)' }}>
          vision.griot / real-time-tracking
        </span>
      </div>
      <div className={styles.mockupBody} style={{ alignItems: 'center', justifyContent: 'center' }}>
        {/* AR Tracking Viewport */}
        <div style={{ position: 'relative', width: '180px', height: '120px', border: '1px dashed #8B5CF6', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Target Reticle */}
          <div style={{ position: 'absolute', top: 4, left: 4, width: 8, height: 8, borderTop: '2px solid #8B5CF6', borderLeft: '2px solid #8B5CF6' }} />
          <div style={{ position: 'absolute', top: 4, right: 4, width: 8, height: 8, borderTop: '2px solid #8B5CF6', borderRight: '2px solid #8B5CF6' }} />
          <div style={{ position: 'absolute', bottom: 4, left: 4, width: 8, height: 8, borderBottom: '2px solid #8B5CF6', borderLeft: '2px solid #8B5CF6' }} />
          <div style={{ position: 'absolute', bottom: 4, right: 4, width: 8, height: 8, borderBottom: '2px solid #8B5CF6', borderRight: '2px solid #8B5CF6' }} />
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(139, 92, 246, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6' }} />
          </div>
          <span style={{ position: 'absolute', bottom: '8px', fontSize: '0.55rem', color: '#8B5CF6', fontFamily: 'var(--font-mono)' }}>
            FPS: 60 • MESH LOCKED
          </span>
        </div>
      </div>
    </div>
  )
}

function TourismMockup() {
  return (
    <div className={styles.mockupWrapper}>
      <div className={styles.mockupHeader}>
        <div className={styles.mockupDot} />
        <div className={styles.mockupDot} />
        <div className={styles.mockupDot} />
        <span style={{ fontSize: '0.65rem', color: '#8C98AA', marginLeft: '6px', fontFamily: 'var(--font-mono)' }}>
          geo.griot / itinerary-map
        </span>
      </div>
      <div className={styles.mockupBody}>
        {/* Geo vector route */}
        <svg viewBox="0 0 200 90" style={{ width: '100%', height: '100%' }}>
          <path d="M 20 70 Q 60 20 100 50 T 180 30" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="20" cy="70" r="4" fill="#10B981" />
          <circle cx="100" cy="50" r="4" fill="#FAFAFC" />
          <circle cx="180" cy="30" r="5" fill="#F47716" />
          <text x="18" y="85" fill="#8C98AA" fontSize="7" fontFamily="var(--font-mono)">Start</text>
          <text x="90" y="65" fill="#8C98AA" fontSize="7" fontFamily="var(--font-mono)">Waypoint</text>
          <text x="160" y="22" fill="#F47716" fontSize="7" fontFamily="var(--font-mono)">Destination</text>
        </svg>
      </div>
    </div>
  )
}

function BillingMockup() {
  return (
    <div className={styles.mockupWrapper}>
      <div className={styles.mockupHeader}>
        <div className={styles.mockupDot} />
        <div className={styles.mockupDot} />
        <div className={styles.mockupDot} />
        <span style={{ fontSize: '0.65rem', color: '#8C98AA', marginLeft: '6px', fontFamily: 'var(--font-mono)' }}>
          ledger.griot / invoice-summary
        </span>
      </div>
      <div className={styles.mockupBody}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div>
            <div style={{ width: '50px', height: '6px', background: '#FAFAFC', borderRadius: '2px', marginBottom: '3px' }} />
            <div style={{ width: '30px', height: '4px', background: '#8C98AA', borderRadius: '2px' }} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>
              GST APPROVED
            </span>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[1, 2, 3].map((r) => (
            <div key={r} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', color: '#8C98AA' }}>
              <span>Item 0{r}</span>
              <span style={{ color: '#FAFAFC' }}>₹ {(r * 12500).toLocaleString('en-IN')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mockupMap: Record<string, () => JSX.Element> = {
  'crm-sales': CRMMockup,
  'employee-admin': EmployeeAdminMockup,
  'virtual-tryon': VirtualTryOnMockup,
  'tourism-travel': TourismMockup,
  'billing-management': BillingMockup,
}

// ── Interactive Project Card ──

interface ProjectCardProps {
  project: Project
  isFeatured?: boolean
}

function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setRotate({
      x: -(y / (rect.height / 2)) * 4,
      y: (x / (rect.width / 2)) * 4,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 })
  }, [])

  const Mockup = mockupMap[project.id] || CRMMockup

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isFeatured ? styles.featuredCard : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles.cardInner}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        <div className={styles.previewContainer}>
          <Mockup />
        </div>

        <div className={styles.contentWrapper}>
          <div>
            <div className={styles.cardMeta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.statusBadge}>
                <span className={project.status === 'Completed' ? styles.statusDotGreen : styles.statusDot} />
                {project.status}
              </span>
            </div>

            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.tagline}>{project.tagline}</p>

            <div className={styles.techRow}>
              {project.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} variant="dark" />
              ))}
            </div>
          </div>

          <div className={styles.actionRow}>
            <button
              className={styles.toggleBtn}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? (
                <>
                  <span>COLLAPSE SPECIFICATION</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span>VIEW TECHNICAL SPECS</span>
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={styles.expandedDetails}
          >
            <div className={styles.detailGrid}>
              <div className={styles.detailBlock}>
                <h4>Problem Statement</h4>
                <p>{project.problem}</p>
              </div>
              <div className={styles.detailBlock}>
                <h4>Technical Approach</h4>
                <p>{project.approach}</p>
              </div>
            </div>

            <div className={styles.detailBlock}>
              <h4 style={{ marginBottom: '0.75rem' }}>Engineered Capabilities</h4>
              <div className={styles.featureList}>
                {project.features.map((feature) => (
                  <span key={feature} className={styles.featureTag}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Projects Section ──

export function Projects() {
  const sectionRef = useScrollAnimation<HTMLElement>((el, tl) => {
    tl.from(el.querySelectorAll(`.${styles.card}`), {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    })
  })

  return (
    <section id="projects" ref={sectionRef} className={`section ${styles.projectsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="eyebrow">SELECTED PROJECTS</div>
          <h2 className="section-heading">From Requirements to Working Systems.</h2>
          <p className="section-subheading">
            Every project preview reflects our real-world software engineering practice: resilient APIs, intuitive interfaces, and robust data workflows.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Featured Full-Width Project */}
          {projects.length > 0 && (
            <ProjectCard project={projects[0]} isFeatured={true} />
          )}

          {/* Side by side row 1 */}
          <div className={styles.twoColumnRow}>
            {projects.slice(1, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {/* Side by side row 2 */}
          <div className={styles.twoColumnRow}>
            {projects.slice(3, 5).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>

        {/* Deliverables Assurance Matrix */}
        <div className={styles.deliverablesAssurance}>
          <div className={styles.assuranceHeader}>
            <div className={styles.assuranceTitle}>
              <CheckCircle2 size={18} color="var(--electric-orange)" />
              <span>Production Handover &amp; Deliverables Guarantee</span>
            </div>
            <div className={styles.assuranceBadge}>
              100% Client Ownership Guarantee
            </div>
          </div>
          <div className={styles.assuranceGrid}>
            <div className={styles.assuranceItem}>
              <div className={styles.assuranceItemTitle}>Dockerized Microservices</div>
              <div className={styles.assuranceItemDesc}>
                Immutable multi-stage Alpine Dockerfiles with minimal attack surfaces and pinned dependencies.
              </div>
            </div>
            <div className={styles.assuranceItem}>
              <div className={styles.assuranceItemTitle}>OpenAPI 3.1 &amp; Postman</div>
              <div className={styles.assuranceItemDesc}>
                Contract-first REST &amp; GraphQL schema documentation with automated client SDK generators.
              </div>
            </div>
            <div className={styles.assuranceItem}>
              <div className={styles.assuranceItemTitle}>Playwright E2E Harness</div>
              <div className={styles.assuranceItemDesc}>
                Continuous automated regression tests covering desktop, mobile, and critical transaction flows.
              </div>
            </div>
            <div className={styles.assuranceItem}>
              <div className={styles.assuranceItemTitle}>100% IP Assignment</div>
              <div className={styles.assuranceItemDesc}>
                Complete transfer of source code, commit history, architectural diagrams, and production configs.
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <a
            href="/projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.85rem 2.25rem',
              backgroundColor: 'var(--midnight-navy)',
              color: '#FFFFFF',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              border: '1px solid var(--light-border)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--electric-orange)'
              e.currentTarget.style.borderColor = 'var(--electric-orange)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--midnight-navy)'
              e.currentTarget.style.borderColor = 'var(--light-border)'
            }}
          >
            <span>Explore Complete Case Studies Archive &amp; System Blueprints</span>
            <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
          </a>
        </div>
      </div>
    </section>
  )
}
