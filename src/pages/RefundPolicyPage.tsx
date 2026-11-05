// GRIOT TECH — Refund, Cancellation & Milestone Billing Policy
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { Link } from 'react-router-dom'
import styles from './LegalPages.module.css'

export function RefundPolicyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Refund Policy' },
  ]

  const schema = [
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Refund Policy', url: 'https://griottech.com/refund-policy' },
    ]),
  ]

  return (
    <>
      <SEOHead
        title="Refund & Cancellation Policy | GRIOT TECH"
        description="Transparent refund and cancellation terms for engineering milestones, software contracts, and technical services at GRIOT TECH."
        canonicalUrl="https://griottech.com/refund-policy"
        schema={schema}
      />

      <PageHero
        eyebrow="COMMERCIAL TRANSPARENCY"
        title="Refund Policy."
        subtitle="Zero hidden fees, milestone-based billing, and clear satisfaction criteria. Our engineering engagements are structured for mutual fairness."
        breadcrumbs={breadcrumbs}
      />

      <section className={styles.legalContainer}>
        <div className="container">
          <div className={styles.legalCard}>
            <span className={styles.lastUpdated}>LAST UPDATED: NOVEMBER 2026</span>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>1. Milestone-Based Billing Structure</h2>
              <p className={styles.legalText}>
                GRIOT TECH delivers software engineering services under bilateral Statements of Work (SOW) structured around distinct, verifiable milestones (e.g., Phase 1: Architectural Blueprint; Phase 2: Core API &amp; Database Implementation; Phase 3: UI &amp; Integration; Phase 4: Production Deployment &amp; UAT).
              </p>
              <p className={styles.legalText}>
                Invoices are tied to verifiable technical deliverables, ensuring complete transparency and zero unexpected charges or undisclosed recurring fees.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>2. Cancellation &amp; Deposit Refunds</h2>
              <ul className={styles.legalList}>
                <li className={styles.legalListItem}>
                  <strong>Prior to Sprint Kick-off:</strong> If a client cancels a contracted engagement prior to the commencement of design or coding work, 100% of the initial project deposit is refunded within 5–7 business days.
                </li>
                <li className={styles.legalListItem}>
                  <strong>During an Active Milestone:</strong> If a project is discontinued during an in-progress milestone, billing is calculated on a strict pro-rata basis for completed and verified work artifacts. Any unspent balance from that milestone deposit is returned promptly.
                </li>
                <li className={styles.legalListItem}>
                  <strong>Accepted &amp; Signed-off Milestones:</strong> Once a milestone deliverable passes User Acceptance Testing (UAT) and source code/artifacts are transferred to the client repository, payments for that milestone are deemed fully earned and non-refundable.
                </li>
              </ul>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>3. Remediation &amp; Quality Guarantee</h2>
              <p className={styles.legalText}>
                Every delivered sprint includes an agreed 14-day warranty and remediation window. If any functionality fails to conform to the approved technical specification, our team will remediate and patch the defect at zero additional cost before invoice finalization.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>4. Retainer &amp; SLA Maintenance Plans</h2>
              <p className={styles.legalText}>
                Monthly engineering maintenance and cloud infrastructure retainer contracts may be cancelled by either party with a 14-day written notice. Prepaid retainers are refunded pro-rata for any unused full calendar days remaining in the billing period.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>5. Refund Request Procedure</h2>
              <p className={styles.legalText}>
                To initiate a billing review or refund request, send an email to{' '}
                <a href="mailto:billing@griottech.com" style={{ color: 'var(--electric-orange)' }}>
                  billing@griottech.com
                </a>{' '}
                referencing your project contract ID and invoice number. Approved refunds are credited via the original payment method (bank wire transfer, Stripe, or UPI) within 5–7 business days.
              </p>
              <p className={styles.legalText}>
                For full commercial contract terms, please review our{' '}
                <Link to="/terms-and-conditions" style={{ color: 'var(--electric-orange)', textDecoration: 'underline' }}>
                  Terms and Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
