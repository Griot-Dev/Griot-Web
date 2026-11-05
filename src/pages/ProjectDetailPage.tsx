// GRIOT TECH — Individual Project Case Study with System Architecture Diagram & Mockup Image
import { useParams, Navigate, Link } from 'react-router-dom'
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { projects } from '@/data/content'
import { CheckCircle2, ArrowRight, Server, Terminal, Database, Cloud } from 'lucide-react'
import styles from './ProjectDetailPage.module.css'

const projectImageMap: Record<string, string> = {
  'crm-sales': '/assets/images/crm-dashboard.webp',
  'employee-admin': '/assets/images/team-collaboration.webp',
  'virtual-tryon': '/assets/images/circuit-tech.webp',
  'tourism-travel': '/assets/images/web-engineering.webp',
  'billing-management': '/assets/images/analytics-platform.webp',
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  const project = projects.find((p) => p.id === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: project.title },
  ]

  const projectUrl = `https://griottech.com/projects/${project.id}`
  const projectImg = projectImageMap[project.id] || '/assets/images/code-architecture.webp'

  const schema = [
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Projects', url: 'https://griottech.com/projects' },
      { name: project.title, url: projectUrl },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: project.title,
      description: project.description,
      applicationCategory: project.category,
      operatingSystem: 'Cross-platform Web',
      author: {
        '@type': 'Organization',
        name: 'GRIOT TECH',
      },
    },
  ]

  return (
    <>
      <SEOHead
        title={`${project.title} — Technical Case Study | GRIOT TECH`}
        description={project.description}
        canonicalUrl={projectUrl}
        schema={schema}
      />

      <PageHero
        eyebrow="CASE STUDY & SYSTEM BLUEPRINT"
        title={project.title}
        subtitle={project.tagline}
        breadcrumbs={breadcrumbs}
        statusBadge={`STATUS: ${project.status.toUpperCase()} / KANYAKUMARI`}
      />

      <section className={styles.detailSection}>
        <div className="container">
          {/* Hero Image Showcase */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              maxHeight: '480px',
              marginBottom: '3.5rem',
              boxShadow: '0 20px 40px rgba(16, 29, 53, 0.08)',
              border: '1px solid var(--light-border)',
            }}
          >
            <img
              src={projectImg}
              alt={`${project.title} — Software Architecture and System Interface Showcase`}
              style={{ width: '100%', height: '480px', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(16, 29, 53, 0.85) 0%, transparent 100%)',
                padding: '2.5rem 2rem 1.5rem',
                color: '#FFFFFF',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--electric-orange)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                LIVE SYSTEM ARCHITECTURE PREVIEW
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>
                {project.title}
              </h3>
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className={styles.metricsBanner}>
            {project.metrics.map((m, idx) => (
              <div key={idx} className={styles.metricCard}>
                <div className={styles.metricVal}>{m.value}</div>
                <div className={styles.metricLab}>{m.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.twoColGrid}>
            <div>
              <div className={styles.narrativeBlock}>
                <h2 className={styles.blockTitle}>The Problem Statement</h2>
                <p className={styles.blockText}>{project.problem}</p>
              </div>

              <div className={styles.narrativeBlock}>
                <h2 className={styles.blockTitle}>Engineering Approach</h2>
                <p className={styles.blockText}>{project.approach}</p>
              </div>

              <div className={styles.narrativeBlock}>
                <h2 className={styles.blockTitle}>Core Features & Capabilities</h2>
                <ul className={styles.featureList}>
                  {project.features.map((feat, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <CheckCircle2 size={18} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Architecture Topology */}
            <div>
              <div className={styles.archCard}>
                <div className={styles.archHeader}>System Architecture</div>

                <div className={styles.archRow}>
                  <div className={styles.archIcon}>
                    <Terminal size={18} />
                  </div>
                  <div>
                    <div className={styles.archLabel}>Frontend Architecture</div>
                    <div className={styles.archValue}>{project.architecture.frontend}</div>
                  </div>
                </div>

                <div className={styles.archRow}>
                  <div className={styles.archIcon}>
                    <Server size={18} />
                  </div>
                  <div>
                    <div className={styles.archLabel}>Backend Services</div>
                    <div className={styles.archValue}>{project.architecture.backend}</div>
                  </div>
                </div>

                <div className={styles.archRow}>
                  <div className={styles.archIcon}>
                    <Database size={18} />
                  </div>
                  <div>
                    <div className={styles.archLabel}>Database & Persistence</div>
                    <div className={styles.archValue}>{project.architecture.database}</div>
                  </div>
                </div>

                <div className={styles.archRow}>
                  <div className={styles.archIcon}>
                    <Cloud size={18} />
                  </div>
                  <div>
                    <div className={styles.archLabel}>Infrastructure & DevOps</div>
                    <div className={styles.archValue}>{project.architecture.infrastructure}</div>
                  </div>
                </div>

                <div className={styles.techTagsWrapper}>
                  <div className={styles.archLabel} style={{ marginBottom: '0.75rem' }}>
                    Technologies Utilized
                  </div>
                  <div className={styles.tagsContainer}>
                    {project.technologies.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section section--dark" style={{ textAlign: 'center', borderTop: '1px solid rgba(16, 29, 53, 0.06)' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>HAVE A SIMILAR REQUIREMENT?</div>
          <h2 className="section-heading" style={{ maxWidth: '640px', margin: '0 auto 1.5rem' }}>
            Let's Engineer Your System.
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto 2.5rem' }}>
            We build custom, scalable software from Kanyakumari. Direct communication, clean architecture, and reliable execution.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 2rem',
              backgroundColor: 'var(--electric-orange)',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <span>Discuss System Specifications</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
