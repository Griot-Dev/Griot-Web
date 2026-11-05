// GRIOT TECH — About Company Page with Rich 3D Bento Showcase & Studio Highlights
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema, organizationSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { TechMarquee } from '@/components/ui/TechMarquee'
import { Process } from '@/sections/Process'
import { BentoSpatialCanvas } from '@/components/three/BentoSpatialCanvas'
import { ErrorBoundary } from '@/components/layout/ErrorBoundary'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Cpu,
  Code2,
  Users2,
  ArrowRight,
  MapPin,
  Compass,
  Award,
  CheckCircle2,
  Sparkles,
  Lock,
  Layers,
  Terminal,
} from 'lucide-react'
import styles from './AboutPage.module.css'

export function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About' },
  ]

  const schema = [
    organizationSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'About', url: 'https://griottech.com/about' },
    ]),
  ]

  return (
    <>
      <SEOHead
        title="About GRIOT TECH — Small Team. Serious Engineering."
        description="Learn about GRIOT TECH, a software engineering studio based in Kanyakumari, Tamil Nadu, India. Direct engineering collaboration, high-reliability architecture, and clean craftsmanship."
        canonicalUrl="https://griottech.com/about"
        schema={schema}
      />

      <PageHero
        eyebrow="ABOUT THE STUDIO"
        title="Small Team. Serious Engineering."
        subtitle="We build reliable digital systems for businesses that value direct engineering access, predictable delivery, and uncompromised code quality."
        breadcrumbs={breadcrumbs}
        statusBadge="SOFTWARE ARCHITECTURE STUDIO / KANYAKUMARI, INDIA"
      />

      <section className={styles.aboutContainer}>
        <div className="container">
          {/* ── Rich Studio Bento Grid (Eliminates Plain/Empty Space) ── */}
          <div className={styles.bentoGrid}>
            {/* Bento 1: Interactive 3D Spatial Computing Canvas */}
            <div className={`${styles.bentoCard} ${styles.spatialCard}`}>
              <div className={styles.spatialHeader}>
                <div className={styles.spatialEyebrow}>
                  <span className={styles.spatialPulse} aria-hidden="true" />
                  <span>INTERACTIVE 3D COMPUTATIONAL ARTIFACT</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 600 }}>
                  Three.js / WebGL
                </div>
              </div>

              <div className={styles.canvasWrapper}>
                <ErrorBoundary name="BentoSpatialCanvas">
                  <BentoSpatialCanvas />
                </ErrorBoundary>
              </div>

              <div className={styles.spatialFooter}>
                <span>DRAG 360° TO INSPECT METALLIC RUNTIME</span>
                <span style={{ color: '#34D399' }}>60 FPS Real-Time</span>
              </div>
            </div>

            {/* Bento 2: Studio Workspace Photography with Live Telemetry */}
            <div className={`${styles.bentoCard} ${styles.photoCard}`}>
              <div className={styles.photoWrap}>
                <img
                  src="/assets/images/studio-office.webp"
                  alt="GRIOT TECH Engineering Studio in Kanyakumari"
                  className={styles.photoImg}
                />
                <div className={styles.photoBadgeOverlay}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: '#34D399',
                      boxShadow: '0 0 8px #34D399',
                    }}
                  />
                  <span>Kanyakumari Studio • 8.0883° N, 77.5385° E</span>
                </div>
              </div>

              <div className={styles.photoBody}>
                <div>
                  <h3 className={styles.photoTitle}>Focused Southern Studio</h3>
                  <p className={styles.photoDesc}>
                    Engineered for deep, uninterrupted technical craft away from congested metro agency bureaucracy. Direct developer pair programming and architecture design.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono, monospace)',
                      color: '#475569',
                      background: '#F1F5F9',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '6px',
                    }}
                  >
                    Direct Developer Access
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono, monospace)',
                      color: '#475569',
                      background: '#F1F5F9',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '6px',
                    }}
                  >
                    100% Client IP
                  </span>
                </div>
              </div>
            </div>

            {/* Bento 3: Direct Engineering Manifesto */}
            <div className={`${styles.bentoCard} ${styles.manifestoCard}`}>
              <div>
                <div className={styles.manifestoEyebrow}>
                  <Code2 size={16} />
                  <span>THE FIRST-PRINCIPLES MANIFESTO</span>
                </div>
                <h3 className={styles.manifestoTitle}>Zero Agency Bloat. Pure Software Craft.</h3>
                <p className={styles.manifestoDesc}>
                  We eliminated sales middlemen, account managers, and offshore contractor farms. When you partner with GRIOT TECH, you communicate directly with the engineers designing your data schemas, writing your backend microservices, and deploying your WebGL applications.
                </p>
              </div>

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} color="var(--electric-orange)" />
                  <span>Strict Type-Safety & Tests</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} color="var(--electric-orange)" />
                  <span>OpenAPI & Schema First</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} color="var(--electric-orange)" />
                  <span>Zero Vendor Lock-In</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} color="var(--electric-orange)" />
                  <span>Sub-200ms Latency SLA</span>
                </div>
              </div>
            </div>

            {/* Bento 4: Telemetry & Production Standards */}
            <div className={`${styles.bentoCard} ${styles.metricsCard}`}>
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.725rem',
                      letterSpacing: '0.08em',
                      color: 'var(--electric-orange)',
                      fontWeight: 700,
                    }}
                  >
                    VERIFIED PRODUCTION SPECIFICATIONS
                  </span>
                  <ShieldCheck size={16} color="#34D399" />
                </div>

                <div className={styles.metricsGrid}>
                  <div className={styles.metricBox}>
                    <div className={styles.metricVal}>100%</div>
                    <div className={styles.metricLabel}>Client IP Ownership Upon Settlement</div>
                  </div>
                  <div className={styles.metricBox}>
                    <div className={styles.metricVal}>&lt; 200ms</div>
                    <div className={styles.metricLabel}>P95 Backend API Latency Target</div>
                  </div>
                  <div className={styles.metricBox}>
                    <div className={styles.metricVal}>99.98%</div>
                    <div className={styles.metricLabel}>System Reliability Target SLA</div>
                  </div>
                  <div className={styles.metricBox}>
                    <div className={styles.metricVal}>0</div>
                    <div className={styles.metricLabel}>Intermediary Sales Account Managers</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.8rem',
                  color: '#94A3B8',
                }}
              >
                <span>Full source code & schemas transferred</span>
                <Link
                  to="/contact"
                  style={{
                    color: 'var(--electric-orange)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <span>Consult Team</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Authentic Studio Photography Gallery ── */}
          <div className={styles.gallerySection}>
            <div className={styles.galleryHeader}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                STUDIO LIFE &amp; CULTURE
              </div>
              <h2 className="section-heading">Inside Our Engineering Practice</h2>
              <p className="section-subheading">
                Take a look at where our software craft happens every day.
              </p>
            </div>

            <div className={styles.galleryGrid}>
              <div className={styles.galleryCard}>
                <img
                  src="/assets/images/studio-office.webp"
                  alt="GRIOT TECH Workspace in Kanyakumari"
                  className={styles.galleryImg}
                />
                <div className={styles.galleryCardBody}>
                  <div className={styles.galleryBadge}>THE WORKSPACE</div>
                  <h3 className={styles.galleryCardTitle}>Focused Southern Studio</h3>
                  <p className={styles.galleryCardDesc}>
                    Designed for deep, uninterrupted engineering focus away from chaotic metro agency culture.
                  </p>
                </div>
              </div>

              <div className={styles.galleryCard}>
                <img
                  src="/assets/images/team-collaboration.webp"
                  alt="GRIOT TECH Team Collaboration"
                  className={styles.galleryImg}
                />
                <div className={styles.galleryCardBody}>
                  <div className={styles.galleryBadge}>THE PRACTICE</div>
                  <h3 className={styles.galleryCardTitle}>Collaborative Problem Solving</h3>
                  <p className={styles.galleryCardDesc}>
                    Continuous pair programming, schema design syncs, and peer review for all pull requests.
                  </p>
                </div>
              </div>

              <div className={styles.galleryCard}>
                <img
                  src="/assets/images/code-architecture.webp"
                  alt="Production Code Architecture"
                  className={styles.galleryImg}
                />
                <div className={styles.galleryCardBody}>
                  <div className={styles.galleryBadge}>THE CODE</div>
                  <h3 className={styles.galleryCardTitle}>Type-Safe Implementations</h3>
                  <p className={styles.galleryCardDesc}>
                    Strict TypeScript, tested Python microservices, and normalized relational databases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Core Principles ── */}
          <div className={styles.sectionBlock}>
            <div className="eyebrow">OUR CORE PRINCIPLES</div>
            <h2 className="section-heading">How We Think About Systems</h2>

            <div className={styles.pillarGrid}>
              <div className={styles.pillarCard}>
                <span className={styles.pillarNumber}>01 / ARCHITECTURE</span>
                <h3 className={styles.pillarTitle}>Architectural Isolation</h3>
                <p className={styles.pillarDesc}>
                  We design modular presentation, business logic, and persistence layers so that components can evolve independently without triggering unexpected regressions across your business workflows.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <span className={styles.pillarNumber}>02 / PERFORMANCE</span>
                <h3 className={styles.pillarTitle}>Speed as a Core Feature</h3>
                <p className={styles.pillarDesc}>
                  Sub-second response times, minimal bundle weights, and optimized database indexing are not afterthoughts. They are built directly into our technical specifications from sprint one.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <span className={styles.pillarNumber}>03 / HONESTY</span>
                <h3 className={styles.pillarTitle}>Radical Transparency</h3>
                <p className={styles.pillarDesc}>
                  No manufactured case studies or artificial vanity metrics. We provide candid technical advice, realistic timelines, and comprehensive documentation for every deliverable.
                </p>
              </div>
            </div>
          </div>

          {/* ── Regional Roots & Location Details ── */}
          <div
            style={{
              marginTop: '5rem',
              padding: '3rem',
              backgroundColor: '#F8FAFC',
              borderRadius: '20px',
              border: '1px solid var(--light-border)',
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="eyebrow">REGIONAL ROOTS</div>
              <h3
                style={{
                  fontSize: '1.85rem',
                  fontWeight: 800,
                  color: 'var(--midnight-navy)',
                  marginBottom: '1rem',
                }}
              >
                Engineering from Kanyakumari, Tamil Nadu
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  marginBottom: '1.25rem',
                  fontSize: '1rem',
                }}
              >
                Located at India's southernmost geographical nexus where three seas converge, GRIOT TECH was established to demonstrate that world-class software engineering thrives outside congested metropolitan software parks.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                Our engineers enjoy deep uninterrupted focus, low turnover, and direct dedication to our client systems. We build software for businesses across Tamil Nadu, pan-India, and global technology enterprises.
              </p>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid var(--light-border)',
                boxShadow: '0 4px 16px rgba(16, 29, 53, 0.04)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '1rem',
                  color: 'var(--electric-orange)',
                }}
              >
                <MapPin size={22} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                  }}
                >
                  STUDIO LOCATION
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.85rem',
                  color: 'var(--midnight-navy)',
                  lineHeight: 1.8,
                }}
              >
                <div>Main Road, Kanyakumari District</div>
                <div>Tamil Nadu — 629702, India</div>
                <div>Serving Pan-India &amp; Global Clients</div>
              </div>
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--light-border)',
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                }}
              >
                <Award size={18} color="var(--electric-orange)" />
                <span style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>
                  Active Regional IT &amp; Startup Ecosystem Participant
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechMarquee />
      <Process />

      <section
        className="section section--dark"
        style={{ textAlign: 'center', borderTop: '1px solid rgba(16, 29, 53, 0.06)' }}
      >
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            START A CONVERSATION
          </div>
          <h2 className="section-heading" style={{ maxWidth: '640px', margin: '0 auto 1.5rem' }}>
            Ready to Build a Reliable System?
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto 2.5rem' }}>
            Discuss your technical requirements directly with our engineering team in Kanyakumari.
          </p>
          <Link
            to="/contact"
            className="btn btn--primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 2rem',
              backgroundColor: 'var(--electric-orange)',
              color: '#fff',
              borderRadius: '9999px',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(244, 119, 22, 0.35)',
            }}
          >
            <span>Consult an Engineer</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
