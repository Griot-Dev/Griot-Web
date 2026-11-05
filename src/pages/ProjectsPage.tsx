// GRIOT TECH — Projects Directory Page with Rich Visual Cards & Telemetry
import { useState } from 'react'
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema, organizationSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { projects } from '@/data/content'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Zap } from 'lucide-react'
import styles from './ProjectsPage.module.css'

const projectImageMap: Record<string, string> = {
  'crm-sales': '/assets/images/crm-dashboard.webp',
  'employee-admin': '/assets/images/team-collaboration.webp',
  'virtual-tryon': '/assets/images/circuit-tech.webp',
  'tourism-travel': '/assets/images/web-engineering.webp',
  'billing-management': '/assets/images/analytics-platform.webp',
}

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Business Software', 'HR Management', 'Interactive Experience', 'Finance & Billing']

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => {
        if (selectedCategory === 'Finance & Billing') return p.category.includes('Billing') || p.category.includes('Finance')
        return p.category === selectedCategory
      })

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Projects' },
  ]

  const schema = [
    organizationSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Projects', url: 'https://griottech.com/projects' },
    ]),
  ]

  return (
    <>
      <SEOHead
        title="Software Projects & Engineering Case Studies | GRIOT TECH Kanyakumari"
        description="Explore verified software projects engineered by GRIOT TECH: CRM systems, HR portals, WebGL try-on experiences, regional booking platforms, and billing engines."
        canonicalUrl="https://griottech.com/projects"
        schema={schema}
      />

      <PageHero
        eyebrow="ENGINEERED SYSTEMS & CASE STUDIES"
        title="From Requirements to Working Systems."
        subtitle="Explore our verified software architectures, enterprise platforms, and technical case studies engineered for high uptime and smooth user experiences."
        breadcrumbs={breadcrumbs}
        statusBadge="VERIFIED PROJECT ARCHIVES / KANYAKUMARI, INDIA"
      />

      <section className="section section--light">
        <div className="container">
          {/* Engineering Telemetry Banner */}
          <div className={styles.telemetryBanner}>
            <div className={styles.telemetryItem}>
              <span className={styles.telemetryVal}>50k+</span>
              <span className={styles.telemetryLabel}>Concurrent Data Records</span>
            </div>
            <div className={styles.telemetryItem}>
              <span className={styles.telemetryVal}>&lt; 25ms</span>
              <span className={styles.telemetryLabel}>P95 Relational Query Latency</span>
            </div>
            <div className={styles.telemetryItem}>
              <span className={styles.telemetryVal}>99.98%</span>
              <span className={styles.telemetryLabel}>Demonstrated System Reliability</span>
            </div>
            <div className={styles.telemetryItem}>
              <span className={styles.telemetryVal}>0 CVEs</span>
              <span className={styles.telemetryLabel}>Critical Security Vulnerabilities</span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project List */}
          <div className={styles.projectList}>
            {filteredProjects.map((project, idx) => {
              const imgUrl = projectImageMap[project.id] || '/assets/images/code-architecture.webp'
              const isEven = idx % 2 === 1

              return (
                <article
                  key={project.id}
                  className={styles.projectCard}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 0.9fr',
                    gap: '3rem',
                    alignItems: 'center',
                  }}
                >
                  {/* Media Column */}
                  <div
                    style={{
                      order: isEven ? 2 : 1,
                      position: 'relative',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      aspectRatio: '16/10',
                      boxShadow: '0 12px 30px rgba(16, 29, 53, 0.08)',
                      border: '1px solid var(--light-border)',
                      background: '#0F172A',
                    }}
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} — Technical Case Study System Preview`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        background: 'rgba(16, 29, 53, 0.85)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        fontSize: '0.725rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--warm-white)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div className={styles.cardHeader}>
                      <div className={styles.metaGroup}>
                        <span className={styles.category}>{project.category}</span>
                        <span className={styles.statusBadge}>
                          <span className={styles.statusDot} />
                          {project.status}
                        </span>
                      </div>
                      <h2 className={styles.title} style={{ fontSize: '1.85rem' }}>
                        {project.title}
                      </h2>
                      <p className={styles.tagline}>{project.tagline}</p>
                    </div>

                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.metricsRow} style={{ gap: '2rem', padding: '1rem 0' }}>
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className={styles.metricItem}>
                          <span className={styles.metricValue} style={{ fontSize: '1.4rem' }}>
                            {metric.value}
                          </span>
                          <span className={styles.metricLabel}>{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.footerRow}>
                      <div className={styles.techTags}>
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className={styles.tag}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link to={`/projects/${project.id}`} className={styles.caseStudyLink}>
                        <span>Read System Blueprint</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section section--navy" style={{ textAlign: 'center', borderTop: '1px solid var(--light-border)' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>CUSTOM ENGINEERING</div>
          <h2 className="section-heading" style={{ maxWidth: '640px', margin: '0 auto 1.5rem' }}>
            Have a Specific Project in Mind?
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto 2.5rem' }}>
            From high-throughput CRM pipelines to bespoke WebGL experiences, we build reliable software systems for demanding operational challenges.
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
              textDecoration: 'none',
            }}
          >
            <span>Request Architecture Proposal</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
