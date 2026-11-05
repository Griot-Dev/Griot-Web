// GRIOT TECH — Careers & Engineering Opportunities Page
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema, generateFAQSchema, organizationSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { openPositions } from '@/data/content'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Laptop,
  HeartPulse,
  BookOpen,
  DollarSign,
  Coffee,
  Globe2,
} from 'lucide-react'
import styles from './CareersPage.module.css'

const careerFaqs = [
  {
    question: 'Are GRIOT TECH engineering positions remote, hybrid, or on-site?',
    answer:
      'We offer flexible options: on-site in our coastal engineering studio in Kanyakumari, Tamil Nadu, hybrid models for regional talent, or fully remote roles across India for experienced engineers.',
  },
  {
    question: 'What is your technical interview process like?',
    answer:
      'We respect your time. Our process consists of: 1. Asynchronous code sample review -> 2. 45-min system architecture discussion -> 3. Practical 60-min pairing session -> 4. Transparent compensation offer. No leetcode puzzle traps or multi-week delays.',
  },
  {
    question: 'What hardware and developer tooling does GRIOT TECH provide?',
    answer:
      'Every engineer is issued high-spec hardware (Apple Silicon M-series or Linux workstation), secondary 4K displays, mechanical keyboard allowances, and fully expensed developer subscriptions (GitHub Copilot, JetBrains, Figma, Cloud resources).',
  },
]

export function CareersPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Careers' },
  ]

  const schema = [
    organizationSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Careers', url: 'https://griottech.com/careers' },
    ]),
    generateFAQSchema(careerFaqs),
  ]

  return (
    <>
      <SEOHead
        title="Careers & Engineering Opportunities | GRIOT TECH Kanyakumari"
        description="Explore software engineering careers at GRIOT TECH in Kanyakumari, Tamil Nadu. We hire talented React, Node.js, Python FastAPI, and Three.js developers with high autonomy."
        canonicalUrl="https://griottech.com/careers"
        schema={schema}
      />

      <PageHero
        eyebrow="ENGINEERING OPPORTUNITIES"
        title="Build Serious Systems."
        subtitle="We offer high autonomy, transparent engineering culture, and challenging technical problems. No bureaucracy—just clean craftsmanship."
        breadcrumbs={breadcrumbs}
        statusBadge="OPEN POSITIONS / HYBRID & REMOTE IN INDIA"
      />

      <section className="section section--light">
        <div className="container">
          {/* Culture Intro */}
          <div className={styles.introBox}>
            <h2 className={styles.introHeading}>Why Engineer at GRIOT TECH?</h2>
            <div className={styles.perksGrid}>
              <div className={styles.perk}>
                <div className={styles.perkNum}>01</div>
                <h3 className={styles.perkTitle}>Autonomy & Direct Impact</h3>
                <p className={styles.perkDesc}>
                  Own entire features from database schema design to frontend delivery. No artificial layers between you and production.
                </p>
              </div>

              <div className={styles.perk}>
                <div className={styles.perkNum}>02</div>
                <h3 className={styles.perkTitle}>Modern Stack & Zero Bloat</h3>
                <p className={styles.perkDesc}>
                  We work with React 18, TypeScript, Python 3.12, FastAPI, and Three.js. You will not be asked to maintain decade-old legacy CMS templates.
                </p>
              </div>

              <div className={styles.perk}>
                <div className={styles.perkNum}>03</div>
                <h3 className={styles.perkTitle}>Regional Roots, Global Standard</h3>
                <p className={styles.perkDesc}>
                  Headquartered at the southern tip of India in Kanyakumari, providing an exceptional coastal lifestyle with world-class engineering standards.
                </p>
              </div>
            </div>
          </div>

          {/* ── Active Roles ── */}
          <div className={styles.positionsSection}>
            <div className="eyebrow">ACTIVE OPENINGS</div>
            <h2 className="section-heading">Open Roles</h2>

            <div className={styles.positionsList}>
              {openPositions.map((role) => (
                <div key={role.id} className={styles.roleCard}>
                  <div className={styles.roleHeader}>
                    <div>
                      <h3 className={styles.roleTitle}>{role.title}</h3>
                      <div className={styles.roleMeta}>
                        <span className={styles.metaBadge}>
                          <Briefcase size={12} />
                          {role.type}
                        </span>
                        <span className={styles.metaBadge}>
                          <MapPin size={12} />
                          {role.location}
                        </span>
                        <span className={styles.deptBadge}>{role.department}</span>
                      </div>
                    </div>

                    <a
                      href={`mailto:careers@griottech.com?subject=Application: ${encodeURIComponent(role.title)}`}
                      className={styles.applyBtn}
                    >
                      <span>Apply via Email</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  <p className={styles.roleDesc}>{role.description}</p>

                  <div className={styles.reqsBlock}>
                    <div className={styles.reqsTitle}>Required Competencies</div>
                    <ul className={styles.reqList}>
                      {role.requirements.map((req, i) => (
                        <li key={i} className={styles.reqItem}>
                          <CheckCircle2 size={16} className={styles.checkIcon} />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section: Transparent Hiring Steps ── */}
          <div className={styles.hiringSection}>
            <div style={{ textAlign: 'center' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>HIRING PROCESS</div>
              <h3 className="section-heading" style={{ fontSize: '2rem' }}>How We Review Candidates</h3>
              <p className="section-subheading" style={{ margin: '0 auto', maxWidth: '620px' }}>
                We believe interviews should reflect daily engineering work. No whiteboard puzzles or trick questions.
              </p>
            </div>

            <div className={styles.hiringStepsGrid}>
              <div className={styles.hiringStepCard}>
                <div className={styles.hiringStepNum}>01</div>
                <h4 className={styles.hiringStepTitle}>Code Review</h4>
                <p className={styles.hiringStepDesc}>
                  We look at your existing GitHub PRs, personal projects, or open source contributions to evaluate your clean code hygiene.
                </p>
              </div>

              <div className={styles.hiringStepCard}>
                <div className={styles.hiringStepNum}>02</div>
                <h4 className={styles.hiringStepTitle}>System Deep-Dive</h4>
                <p className={styles.hiringStepDesc}>
                  A 45-minute conversation with a lead engineer discussing architecture trade-offs, state management, and API design.
                </p>
              </div>

              <div className={styles.hiringStepCard}>
                <div className={styles.hiringStepNum}>03</div>
                <h4 className={styles.hiringStepTitle}>Practical Pairing</h4>
                <p className={styles.hiringStepDesc}>
                  A 60-minute interactive session where we debug a real component or extend an API endpoint together in real-time.
                </p>
              </div>

              <div className={styles.hiringStepCard}>
                <div className={styles.hiringStepNum}>04</div>
                <h4 className={styles.hiringStepTitle}>Transparent Offer</h4>
                <p className={styles.hiringStepDesc}>
                  Within 48 hours, we present a competitive offer package including compensation, equipment budget, and growth roadmap.
                </p>
              </div>
            </div>
          </div>

          {/* ── Section: Benefits & Compensation ── */}
          <div>
            <div className="eyebrow">COMPENSATION & BENEFITS</div>
            <h3 className="section-heading" style={{ fontSize: '2rem' }}>Engineered for Deep Work</h3>

            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <DollarSign size={24} />
                </div>
                <h4 className={styles.benefitTitle}>Competitive Compensation</h4>
                <p className={styles.benefitDesc}>
                  Top-of-market regional compensation benchmarked against leading Indian product studios, with bi-annual performance reviews.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <Laptop size={24} />
                </div>
                <h4 className={styles.benefitTitle}>High-End Hardware</h4>
                <p className={styles.benefitDesc}>
                  Choose an Apple Silicon MacBook Pro or high-spec Linux workstation, paired with ergonomic desk accessories and 4K monitors.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <BookOpen size={24} />
                </div>
                <h4 className={styles.benefitTitle}>Continuous Learning Budget</h4>
                <p className={styles.benefitDesc}>
                  Annual budget for developer books, specialized video courses, conference tickets, and cloud certification exams.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <HeartPulse size={24} />
                </div>
                <h4 className={styles.benefitTitle}>Comprehensive Health Coverage</h4>
                <p className={styles.benefitDesc}>
                  Full medical insurance covering hospitalization, outpatient care, and wellness support for you and your dependents.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <Globe2 size={24} />
                </div>
                <h4 className={styles.benefitTitle}>Remote & Hybrid Flexibility</h4>
                <p className={styles.benefitDesc}>
                  Work from our scenic Kanyakumari studio or collaborate asynchronously from home. We measure results, not desk hours.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <Coffee size={24} />
                </div>
                <h4 className={styles.benefitTitle}>Balanced Pacing</h4>
                <p className={styles.benefitDesc}>
                  Generous paid time off, mandatory rest intervals, and zero weekend crunch culture. Sustainable software requires clear minds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section section--navy" style={{ textAlign: 'center', borderTop: '1px solid var(--light-border)' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>GENERAL APPLICATION</div>
          <h2 className="section-heading" style={{ maxWidth: '640px', margin: '0 auto 1.5rem' }}>
            Don't See Your Exact Role?
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto 2.5rem' }}>
            If you are an exceptional engineer with demonstrated passion for clean architecture, we want to hear from you.
          </p>
          <a
            href="mailto:careers@griottech.com?subject=Open Engineering Application"
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
            <span>Send Open Application</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  )
}
