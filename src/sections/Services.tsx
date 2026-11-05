// GRIOT TECH — Engineering Services Showcase (Light, Rich, Architectural)
import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Layers, Server, BarChart3, Database, Cog, CheckCircle2, ArrowRight, type LucideIcon } from 'lucide-react'
import { services, type Service } from '@/data/content'
import { useReducedMotion, gsap } from '@/hooks'
import { TechBadge } from '@/components/ui/TechBadge'
import styles from './Services.module.css'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  Server,
  BarChart3,
  Database,
  Cog,
}

// Slug resolution map
const slugMap: Record<string, string> = {
  'web-dev': 'web-development',
  'fullstack': 'software-development',
  'backend': 'python-development',
  'crm': 'crm-development',
  'database': 'business-solutions',
  'automation': 'digital-marketing',
}

interface ServiceCardProps {
  service: Service
  variant: 'featured' | 'compact'
  telemetry?: { label: string; val: string }[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant, telemetry }) => {
  const IconComponent = iconMap[service.icon] || Globe
  const targetSlug = slugMap[service.id] || 'web-development'

  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div>
        <div className={styles.cardTop}>
          <div className={styles.iconWrap}>
            <IconComponent size={24} strokeWidth={1.75} />
          </div>
          <span className={styles.badgePill}>
            {variant === 'featured' ? 'CORE CAPABILITY' : service.shortTitle}
          </span>
        </div>

        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDescription}>{service.description}</p>

        {/* Deliverables Checklist */}
        <ul className={styles.deliverablesList}>
          {service.details.map((detail, i) => (
            <li key={i} className={styles.deliverableItem}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {/* Optional Telemetry Box for Featured Cards */}
        {telemetry && (
          <div className={styles.telemetryBox}>
            {telemetry.map((t, idx) => (
              <div key={idx} className={styles.telemetryMetric}>
                <span className={styles.telemetryLabel}>{t.label}</span>
                <span className={styles.telemetryVal}>{t.val}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Badges */}
        <div className={styles.techRow}>
          {service.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} variant="light" />
          ))}
        </div>
      </div>

      <Link to={`/services/${targetSlug}`} className={styles.serviceLink}>
        <span>Explore Service Architecture</span>
        <ArrowRight size={15} />
      </Link>
    </div>
  )
}

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()

  const featured = services.slice(0, 2)
  const compact = services.slice(2)

  useEffect(() => {
    if (prefersReduced || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-service-card]', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReduced])

  return (
    <section id="services" ref={sectionRef} className={`section section--light ${styles.services}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">WHAT WE BUILD</span>
          <h2 className="section-heading">Engineering That Serves the Business.</h2>
          <p className="section-subheading">
            Every system is architected for speed, verifiable type safety, and longevity. We do not build throwaway templates—we engineer production platforms.
          </p>
        </div>

        {/* Featured row: 2 rich cards with telemetry */}
        <div className={styles.featuredRow}>
          <div className={styles.featuredLeft} data-service-card>
            <ServiceCard
              service={featured[0]}
              variant="featured"
              telemetry={[
                { label: 'Lighthouse Score', val: '> 98 / 100' },
                { label: 'Type Coverage', val: '100% Strict' },
                { label: 'Bundle Size', val: '< 45kB gzip' },
              ]}
            />
          </div>
          <div className={styles.featuredRight} data-service-card>
            <ServiceCard
              service={featured[1]}
              variant="featured"
              telemetry={[
                { label: 'API P95 Latency', val: '< 35ms' },
                { label: 'Data Integrity', val: 'ACID Compliant' },
                { label: 'Deployments', val: 'Zero Downtime' },
              ]}
            />
          </div>
        </div>

        {/* Compact row: 4 structured cards */}
        <div className={styles.compactRow}>
          {compact.map((service) => (
            <div key={service.id} data-service-card>
              <ServiceCard service={service} variant="compact" />
            </div>
          ))}
        </div>

        {/* Directory Navigation CTA */}
        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <Link
            to="/services"
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
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--electric-orange)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--midnight-navy)')}
          >
            <span>Explore All 6 Engineering Capabilities & Technical Specs</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
