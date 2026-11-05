// GRIOT TECH — Standardized Page Hero with Interactive Grid & Telemetry
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { InteractiveGrid } from '@/components/three/InteractiveGrid'
import styles from './PageHero.module.css'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle: string
  breadcrumbs?: BreadcrumbItem[]
  statusBadge?: string
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  statusBadge,
}: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      <InteractiveGrid opacity={0.5} />
      <div className="container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1
              return (
                <React.Fragment key={crumb.label + idx}>
                  {idx > 0 && <ChevronRight size={12} className={styles.breadcrumbSeparator} />}
                  {isLast || !crumb.href ? (
                    <span className={styles.breadcrumbCurrent} aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link to={crumb.href} className={styles.breadcrumbLink}>
                      {crumb.label}
                    </Link>
                  )}
                </React.Fragment>
              )
            })}
          </nav>
        )}

        <motion.div
          className={styles.headerContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow">{eyebrow}</div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>

          {statusBadge && (
            <div className={styles.statusCoordinate}>
              <span className={styles.statusDot} />
              <span>{statusBadge}</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
