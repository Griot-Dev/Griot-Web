// GRIOT TECH — Cookie Policy & Transparent Telemetry Governance
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { Link } from 'react-router-dom'
import styles from './LegalPages.module.css'

export function CookiePolicyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Cookie Policy' },
  ]

  const schema = [
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Cookie Policy', url: 'https://griottech.com/cookie-policy' },
    ]),
  ]

  return (
    <>
      <SEOHead
        title="Cookie Policy & Telemetry Audit | GRIOT TECH"
        description="GRIOT TECH's cookie policy. Review our audit of strictly necessary cookies, performance storage, and zero third-party advertising trackers."
        canonicalUrl="https://griottech.com/cookie-policy"
        schema={schema}
      />

      <PageHero
        eyebrow="TRANSPARENCY & DATA PRIVACY"
        title="Cookie Policy."
        subtitle="We operate with architectural transparency: zero marketing cookies, zero ad network trackers, and strictly necessary storage only."
        breadcrumbs={breadcrumbs}
      />

      <section className={styles.legalContainer}>
        <div className="container">
          <div className={styles.legalCard}>
            <span className={styles.lastUpdated}>LAST AUDITED: NOVEMBER 2026</span>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>1. What Are Cookies and Local Storage?</h2>
              <p className={styles.legalText}>
                Cookies and browser storage mechanisms (such as <code>localStorage</code>) are small text items stored on your device by your browser to retain technical state, prevent CSRF attacks, and respect user interface preferences.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>2. Our Cookie Inventory & Classification</h2>
              <p className={styles.legalText}>
                In strict adherence to data minimization standards under the Indian Digital Personal Data Protection (DPDP) Act 2023, EU GDPR, and California Consumer Privacy Act (CCPA), our domain sets only the following itemized cookies:
              </p>

              <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', fontFamily: 'var(--font-mono)' }}>
                  <thead>
                    <tr style={{ background: '#F1F5F9', borderBottom: '2px solid var(--light-border)', textAlign: 'left' }}>
                      <th style={{ padding: '0.75rem 1rem' }}>Storage Key</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Classification</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Purpose & Expiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--light-border)' }}>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--midnight-navy)', fontWeight: 600 }}>griot_cookie_consent_v1</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#059669' }}>Strictly Necessary</td>
                      <td style={{ padding: '0.75rem 1rem' }}>Retains user's cookie banner selection (Accept / Essential). Persists for 365 days.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--light-border)' }}>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--midnight-navy)', fontWeight: 600 }}>__cf_bm / cf_clearance</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#059669' }}>Security / Cloudflare Edge</td>
                      <td style={{ padding: '0.75rem 1rem' }}>Automated bot traffic filtering, DDoS rate limiting, and Turnstile challenge management. Session / 30 mins.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ padding: '1rem', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '8px', color: '#047857', fontSize: '0.875rem' }}>
                <strong>No Third-Party Advertising:</strong> GRIOT TECH does not load Google Analytics advertising signals, Meta/Facebook Pixel, TikTok Pixel, or any third-party marketing trackers. Your visit remains private.
              </div>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>3. How to Manage and Clear Cookies</h2>
              <p className={styles.legalText}>
                You can configure your browser to block or alert you about all cookies. If you block all cookies, certain security verifications may require manual confirmation:
              </p>
              <ul className={styles.legalList}>
                <li className={styles.legalListItem}><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-party cookies</li>
                <li className={styles.legalListItem}><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection</li>
                <li className={styles.legalListItem}><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Block all cookies</li>
                <li className={styles.legalListItem}><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies</li>
              </ul>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>4. Contact for Privacy Questions</h2>
              <p className={styles.legalText}>
                For queries regarding our technical data footprint, contact our security officer at{' '}
                <a href="mailto:privacy@griottech.com" style={{ color: 'var(--electric-orange)' }}>
                  privacy@griottech.com
                </a>
                . Review our complete{' '}
                <Link to="/privacy-policy" style={{ color: 'var(--electric-orange)', textDecoration: 'underline' }}>
                  Privacy Policy
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
