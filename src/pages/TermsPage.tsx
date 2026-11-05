// GRIOT TECH — Terms and Conditions
// Transparent Engineering Contracts & Commercial Safeguards
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { Link } from 'react-router-dom'
import styles from './LegalPages.module.css'

export function TermsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Terms and Conditions' },
  ]

  const schema = [
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Terms and Conditions', url: 'https://griottech.com/terms-and-conditions' },
    ]),
  ]

  return (
    <>
      <SEOHead
        title="Terms and Conditions | GRIOT TECH"
        description="Terms and conditions governing engineering services, project contracts, transparent pricing, and intellectual property ownership at GRIOT TECH in Kanyakumari, India."
        canonicalUrl="https://griottech.com/terms-and-conditions"
        schema={schema}
      />

      <PageHero
        eyebrow="COMMERCIAL TRANSPARENCY"
        title="Terms and Conditions."
        subtitle="Transparent technical contracts, verified milestone deliverables, clear code ownership, and zero hidden fees."
        breadcrumbs={breadcrumbs}
      />

      <section className={styles.legalContainer}>
        <div className="container">
          <div className={styles.legalCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--light-border)', paddingBottom: '1rem' }}>
              <span className={styles.lastUpdated}>LAST UPDATED: NOVEMBER 2026</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#059669', background: 'rgba(52, 211, 153, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>
                ZERO HIDDEN FEES POLICY
              </span>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>1. Scope of Engineering Services</h2>
              <p className={styles.legalText}>
                GRIOT TECH provides software architecture, web development, Python API engineering, custom CRM systems, and cloud infrastructure consulting under mutually signed Statements of Work (SOW). All engagements are governed by defined technical requirements and acceptance criteria.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>2. Transparent Pricing &amp; No Hidden Fees</h2>
              <p className={styles.legalText}>
                We maintain an absolute commitment to commercial transparency:
              </p>
              <ul className={styles.legalList}>
                <li className={styles.legalListItem}><strong>Itemized Estimates:</strong> All project proposals feature explicit itemization for engineering hours, infrastructure requirements, and third-party API dependencies.</li>
                <li className={styles.legalListItem}><strong>Zero Undisclosed Costs:</strong> We never charge administrative setup fees, undisclosed maintenance penalties, or surprise renewal premiums.</li>
                <li className={styles.legalListItem}><strong>Formal Change Orders:</strong> Any addition to the agreed project scope during development is quoted and approved in writing prior to commencing work.</li>
              </ul>
              <p className={styles.legalText}>
                For details on milestone cancellation and deposit terms, consult our{' '}
                <Link to="/refund-policy" style={{ color: 'var(--electric-orange)', textDecoration: 'underline' }}>
                  Refund Policy
                </Link>.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>3. Intellectual Property &amp; Code Ownership</h2>
              <p className={styles.legalText}>
                Upon full settlement of milestone invoices, the client receives exclusive, irrevocable copyright and full ownership rights to all custom source code, documentation, schema files, and design assets authored specifically for their project.
              </p>
              <p className={styles.legalText}>
                Standard open-source libraries (e.g. React, Three.js, FastAPI, PostgreSQL drivers) remain subject to their respective open-source licenses (MIT, Apache 2.0, BSD).
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>4. User Acceptance Testing &amp; Warranty</h2>
              <p className={styles.legalText}>
                Every delivered sprint includes an agreed 14-day User Acceptance Testing (UAT) period. If any delivered component fails to function according to the agreed technical specification, GRIOT TECH will patch and remediate the defect at zero additional charge.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>5. Ethical Standards &amp; Anti-Dark Patterns</h2>
              <p className={styles.legalText}>
                GRIOT TECH operates with developer integrity. We do not incorporate deceptive design patterns, artificial scarcity timers, forced recurring subscriptions, or undisclosed background data telemetry into client software or our own web platforms.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
              <p className={styles.legalText}>
                To the maximum extent permitted by applicable law, GRIOT TECH's total aggregate liability arising out of or related to an engineering engagement shall not exceed the total fees paid by the client under the specific Statement of Work giving rise to the claim. Neither party shall be liable for indirect, consequential, or punitive damages.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>7. Governing Law &amp; Jurisdiction</h2>
              <p className={styles.legalText}>
                These terms and any bilateral project contracts executed with GRIOT TECH are governed by the laws of India and the State of Tamil Nadu. The competent courts in Kanyakumari / Nagercoil, Tamil Nadu, India, shall have exclusive jurisdiction over any disputes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
