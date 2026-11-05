// GRIOT TECH — Individual Service Deep-Dive Page with Tech Showcase Imagery & Deliverables
import { useParams, Navigate, Link } from 'react-router-dom'
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { TechMarquee } from '@/components/ui/TechMarquee'
import { detailedServices } from '@/data/content'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import styles from './ServiceDetailPage.module.css'

const serviceImageMap: Record<string, string> = {
  'web-development': '/assets/images/web-engineering.webp',
  'software-development': '/assets/images/code-architecture.webp',
  'python-development': '/assets/images/circuit-tech.webp',
  'crm-development': '/assets/images/crm-dashboard.webp',
  'business-solutions': '/assets/images/analytics-platform.webp',
  'digital-marketing': '/assets/images/security-matrix.webp',
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !detailedServices[slug]) {
    return <Navigate to="/services" replace />
  }

  const service = detailedServices[slug]

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.shortTitle },
  ]

  const serviceUrl = `https://griottech.com/services/${service.slug}`
  const bannerImg = serviceImageMap[service.slug] || '/assets/images/code-architecture.webp'

  const schema = [
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Services', url: 'https://griottech.com/services' },
      { name: service.shortTitle, url: serviceUrl },
    ]),
    generateServiceSchema({
      title: service.title,
      description: service.description,
      url: serviceUrl,
      category: 'Software Development',
    }),
    generateFAQSchema(service.faqs),
  ]

  return (
    <>
      <SEOHead
        title={`${service.title} | GRIOT TECH Kanyakumari`}
        description={service.description}
        canonicalUrl={serviceUrl}
        schema={schema}
      />

      <PageHero
        eyebrow="ENGINEERING SPECIFICATION"
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={breadcrumbs}
        statusBadge="VERIFIED TECHNICAL SERVICE / KANYAKUMARI, INDIA"
      />

      <section className={styles.detailContainer}>
        <div className="container">
          {/* Visual Showcase Banner */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              maxHeight: '420px',
              marginBottom: '3.5rem',
              boxShadow: '0 20px 40px rgba(16, 29, 53, 0.08)',
              border: '1px solid var(--light-border)',
            }}
          >
            <img
              src={bannerImg}
              alt={`${service.title} — GRIOT TECH Engineering Capability and Deliverables`}
              style={{ width: '100%', height: '420px', objectFit: 'cover' }}
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
                SPECIALIZED ENGINEERING DISCIPLINE
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>
                {service.title}
              </h3>
            </div>
          </div>

          <div className={styles.overviewGrid}>
            <div>
              <p className={styles.description}>{service.description}</p>

              <h2 className={styles.deliverablesTitle}>Production Deliverables</h2>
              <ul className={styles.deliverablesList}>
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className={styles.deliverableItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.specCard}>
              <div className={styles.specHeader}>Technical Standards</div>

              <div className={styles.archTitle}>Primary Technologies</div>
              <div className={styles.techList}>
                {service.technologies.map((tech) => (
                  <span key={tech} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.archTitle}>Architectural Highlights</div>
              <ul className={styles.archList}>
                {service.architectureHighlights.map((arch, idx) => (
                  <li key={idx} className={styles.archItem}>
                    • {arch}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2.5rem' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '0.85rem',
                    background: 'var(--electric-orange)',
                    color: '#fff',
                    borderRadius: '8px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 14px rgba(244, 119, 22, 0.3)',
                  }}
                >
                  <span>Request Engineering Consultation</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          {service.faqs && service.faqs.length > 0 && (
            <div className={styles.faqSection}>
              <div className="eyebrow">FREQUENTLY ASKED QUESTIONS</div>
              <h2 className="section-heading">Technical FAQ</h2>

              <div className={styles.faqGrid}>
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqCard}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <TechMarquee />

      {/* CTA Band */}
      <section className="section section--dark" style={{ textAlign: 'center', borderTop: '1px solid rgba(16, 29, 53, 0.06)' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>PROJECT ENGAGEMENT</div>
          <h2 className="section-heading" style={{ maxWidth: '640px', margin: '0 auto 1.5rem' }}>
            Have a project requiring {service.shortTitle}?
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto 2.5rem' }}>
            Work directly with our team in Kanyakumari. We deliver verified code, modular architectures, and predictable timelines.
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
            <span>Discuss {service.shortTitle} Requirements</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
