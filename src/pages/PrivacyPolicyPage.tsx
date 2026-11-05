// GRIOT TECH — Comprehensive Privacy Policy & Data Governance
// Compliant with India DPDP Act 2023, EU GDPR & California CCPA
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { Link } from 'react-router-dom'
import { Shield, Lock, Trash2, Mail, CheckCircle2, UserCheck, EyeOff } from 'lucide-react'
import styles from './LegalPages.module.css'

export function PrivacyPolicyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy' },
  ]

  const schema = [
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Privacy Policy', url: 'https://griottech.com/privacy-policy' },
    ]),
  ]

  return (
    <>
      <SEOHead
        title="Privacy Policy & Data Protection | GRIOT TECH"
        description="GRIOT TECH's privacy policy. Data minimization, DPDP Act 2023 & GDPR compliance, zero advertising trackers, data deletion rights, and child safety safeguards."
        canonicalUrl="https://griottech.com/privacy-policy"
        schema={schema}
      />

      <PageHero
        eyebrow="GOVERNANCE & TRUST"
        title="Privacy Policy."
        subtitle="We treat data privacy with strict architectural discipline: strict data minimization, zero advertising trackers, and transparent user control."
        breadcrumbs={breadcrumbs}
      />

      <section className={styles.legalContainer}>
        <div className="container">
          <div className={styles.legalCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--light-border)', paddingBottom: '1rem' }}>
              <span className={styles.lastUpdated}>LAST UPDATED: NOVEMBER 2026</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#059669', background: 'rgba(52, 211, 153, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>
                DPDP ACT 2023 &amp; GDPR COMPLIANT
              </span>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>1. Data Minimization Philosophy</h2>
              <p className={styles.legalText}>
                GRIOT TECH adheres to a strict principle of <strong>data minimization</strong>. We only collect the minimal personal information necessary to deliver technical estimates, manage project communications, and fulfill contractual obligations. We collect:
              </p>
              <ul className={styles.legalList}>
                <li className={styles.legalListItem}><strong>Full Name:</strong> To address you formally in technical communications.</li>
                <li className={styles.legalListItem}><strong>Corporate / Personal Email:</strong> To dispatch project scoping notes, estimates, and architectural responses.</li>
                <li className={styles.legalListItem}><strong>Phone / WhatsApp (Optional):</strong> Only when provided by you for direct scheduling.</li>
                <li className={styles.legalListItem}><strong>Company Name (Optional):</strong> To contextualize business system constraints.</li>
                <li className={styles.legalListItem}><strong>Project Technical Requirements:</strong> Scope outlines and architecture problem statements.</li>
              </ul>
              <p className={styles.legalText}>
                We do not collect sensitive personal data such as financial account credentials, biometric information, government IDs (except where mandated for commercial contracts and GST invoices in India), or personal browsing histories.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>2. Third-Party SDK &amp; Tracker Audit</h2>
              <p className={styles.legalText}>
                Our codebase is audited regularly to prevent third-party surveillance and data leakage:
              </p>
              <ul className={styles.legalList}>
                <li className={styles.legalListItem}><strong>Zero Ad Pixels:</strong> We do not load Meta/Facebook Pixel, TikTok Pixel, Google AdSense, or retargeting scripts.</li>
                <li className={styles.legalListItem}><strong>Zero Data Brokers:</strong> We do not sell, rent, monetize, or trade client information to data aggregators under any circumstances.</li>
                <li className={styles.legalListItem}><strong>Edge Infrastructure:</strong> Cloudflare provides DDoS protection and edge TLS encryption without logging personal user payloads.</li>
              </ul>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>3. Children's Data Protection &amp; Age of Consent</h2>
              <p className={styles.legalText}>
                GRIOT TECH provides enterprise and commercial software engineering services. Our website and services are intended exclusively for individuals aged 18 and older (or the applicable age of digital majority in your jurisdiction).
              </p>
              <p className={styles.legalText}>
                In compliance with the Indian Digital Personal Data Protection (DPDP) Act 2023, the Children's Online Privacy Protection Act (COPPA), and GDPR Article 8, we do not knowingly collect, process, or store personal data from minors. If you believe a minor has submitted personal information through our contact endpoints, please contact <a href="mailto:privacy@griottech.com" style={{ color: 'var(--electric-orange)' }}>privacy@griottech.com</a>, and we will purge the record immediately.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>4. Data Deletion Requests &amp; Your Rights</h2>
              <p className={styles.legalText}>
                Regardless of your geographic location, you possess the following actionable rights regarding your personal data:
              </p>
              <ul className={styles.legalList}>
                <li className={styles.legalListItem}><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request the permanent deletion of your contact records and communication history.</li>
                <li className={styles.legalListItem}><strong>Right of Access &amp; Portability:</strong> Request a complete copy of all data points associated with your email address in JSON or text format.</li>
                <li className={styles.legalListItem}><strong>Right to Correction:</strong> Rectify inaccurate or outdated corporate information.</li>
                <li className={styles.legalListItem}><strong>Right to Withdraw Consent:</strong> Revoke consent for processing at any time without penalty.</li>
              </ul>
              <div style={{ padding: '1.25rem', background: '#F8FAFC', border: '1px solid var(--light-border)', borderRadius: '10px', marginTop: '1rem' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--midnight-navy)', fontFamily: 'var(--font-mono)' }}>
                  HOW TO SUBMIT A DATA DELETION / SAR REQUEST:
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  Email <a href="mailto:privacy@griottech.com?subject=Data%20Deletion%20Request" style={{ color: 'var(--electric-orange)', fontWeight: 600 }}>privacy@griottech.com</a> with the subject line <code>[DATA DELETION REQUEST]</code> from the email address you wish to have removed.
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted-steel)' }}>
                  Our Data Protection Officer will verify identity and confirm permanent erasure across all database backups within <strong>30 calendar days</strong>, providing written confirmation.
                </p>
              </div>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>5. Email Communications &amp; Unsubscribe Policy</h2>
              <p className={styles.legalText}>
                We maintain a strict anti-spam policy. We do not dispatch unsolicited mass marketing emails. When you receive correspondence regarding technical updates, newsletters, or project estimates:
              </p>
              <ul className={styles.legalList}>
                <li className={styles.legalListItem}>Every email contains a clear, 1-click <strong>Unsubscribe</strong> mechanism in the footer.</li>
                <li className={styles.legalListItem}>You may also opt out at any time by replying with &quot;UNSUBSCRIBE&quot; to any direct email from our domain.</li>
                <li className={styles.legalListItem}>Unsubscribe requests are honored immediately and within a maximum of 24 business hours.</li>
              </ul>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>6. Licensed Fonts &amp; Digital Assets</h2>
              <p className={styles.legalText}>
                All assets utilized across this website comply with open-source and commercial licensing requirements:
              </p>
              <ul className={styles.legalList}>
                <li className={styles.legalListItem}><strong>Space Grotesk:</strong> Licensed under the SIL Open Font License (OFL).</li>
                <li className={styles.legalListItem}><strong>Inter:</strong> Licensed under the SIL Open Font License (OFL).</li>
                <li className={styles.legalListItem}><strong>JetBrains Mono:</strong> Licensed under the Apache License 2.0.</li>
                <li className={styles.legalListItem}><strong>Photography &amp; Visuals:</strong> Royalty-free licensed commercial media (Unsplash &amp; Pexels Commercial Licenses).</li>
              </ul>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>7. Data Retention Schedule</h2>
              <p className={styles.legalText}>
                Inquiry submissions that do not progress to an active commercial agreement are retained for a maximum of <strong>180 days</strong> for reference, after which they are automatically purged. Client project archives for active engagements are maintained throughout the contract term plus statutory tax and accounting retention requirements under Indian law (7 years).
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>8. Grievance Officer &amp; Contact Details</h2>
              <p className={styles.legalText}>
                In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, the Grievance Officer for GRIOT TECH is:
              </p>
              <div style={{ padding: '1rem', background: '#F8FAFC', borderRadius: '8px', border: '1px solid var(--light-border)', fontSize: '0.875rem' }}>
                <strong>Grievance &amp; Privacy Officer:</strong> Technical Operations Directorate<br />
                <strong>Entity:</strong> GRIOT TECH<br />
                <strong>Location:</strong> Kanyakumari District, Tamil Nadu — 629702, India<br />
                <strong>Email:</strong> <a href="mailto:privacy@griottech.com" style={{ color: 'var(--electric-orange)' }}>privacy@griottech.com</a> / <a href="mailto:grievance@griottech.com" style={{ color: 'var(--electric-orange)' }}>grievance@griottech.com</a><br />
                <strong>Response Window:</strong> Initial acknowledgment within 24 hours; resolution within 15–30 days.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
