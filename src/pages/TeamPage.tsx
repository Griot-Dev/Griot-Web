// GRIOT TECH — Engineering Team & Culture Page
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema, organizationSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { teamMembers } from '@/data/content'
import { Link } from 'react-router-dom'
import { MapPin, Code2, ArrowRight, ShieldCheck, Cpu, Terminal, GitBranch, Zap, Sparkles } from 'lucide-react'
import styles from './TeamPage.module.css'

export function TeamPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Team' },
  ]

  const schema = [
    organizationSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Team', url: 'https://griottech.com/team' },
    ]),
  ]

  return (
    <>
      <SEOHead
        title="Engineering Team & Leadership | GRIOT TECH Kanyakumari"
        description="Meet the core software developers and architects behind GRIOT TECH in Kanyakumari, Tamil Nadu. Full-stack developers, Python backend engineers, and WebGL specialists."
        canonicalUrl="https://griottech.com/team"
        schema={schema}
      />

      <PageHero
        eyebrow="ENGINEERING COLLECTIVE"
        title="Direct Developer Access."
        subtitle="We are a focused group of software craftspeople based in southern Tamil Nadu. No account managers or sales intermediaries—you speak directly with the engineers building your code."
        breadcrumbs={breadcrumbs}
        statusBadge="VERIFIED ENGINEERING TEAM / KANYAKUMARI, INDIA"
      />

      <section className="section section--light">
        <div className="container">
          <div className={styles.teamGrid}>
            {teamMembers.map((member, idx) => (
              <div key={idx} className={styles.memberCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatarCircle}>
                    {idx === 0 ? <Terminal size={24} /> : idx === 1 ? <Cpu size={24} /> : <Code2 size={24} />}
                  </div>
                  <div>
                    <h2 className={styles.memberName}>{member.name}</h2>
                    <div className={styles.memberRole}>{member.role}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '8px' }}>
                  <div className={styles.locationTag} style={{ marginBottom: 0 }}>
                    <MapPin size={14} className={styles.pinIcon} />
                    <span>{member.location}</span>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.725rem',
                      color: '#10B981',
                      background: 'rgba(16, 185, 129, 0.08)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981' }} />
                    <span>Active Engineer</span>
                  </div>
                </div>

                <p className={styles.memberBio}>{member.bio}</p>

                <div className={styles.skillsSection}>
                  <div className={styles.skillsHeading}>Core Competencies &amp; Tooling</div>
                  <div className={styles.skillsList}>
                    {member.skills.map((skill) => (
                      <span key={skill} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Studio Culture Philosophy */}
          <div className={styles.cultureBox}>
            <div className="eyebrow">STUDIO PHILOSOPHY</div>
            <h3 className={styles.cultureTitle}>The Craft of Software Engineering</h3>
            <p className={styles.cultureText}>
              We maintain a rigorous engineering environment. Every pull request is peer-reviewed, data schemas are strictly modeled before implementation, and automated test suites are written alongside feature logic. We believe that small, focused teams building with precision will consistently outperform bloated agencies.
            </p>
          </div>

          {/* ── Engineering Values ── */}
          <div style={{ margin: '4rem 0' }}>
            <div className="eyebrow">OUR CORE CODE</div>
            <h3 className="section-heading" style={{ fontSize: '2rem' }}>How We Work Everyday</h3>

            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueNum}>01</div>
                <h4 className={styles.valueTitle}>Direct Engineer Interface</h4>
                <p className={styles.valueDesc}>
                  Our clients speak directly with the architects writing their schemas and components. This prevents translation errors, accelerates iteration, and respects your timeline.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueNum}>02</div>
                <h4 className={styles.valueTitle}>No Disposable Prototypes</h4>
                <p className={styles.valueDesc}>
                  We design data contracts, error bounds, and database models to endure. Every system we deploy is structured to scale cleanly as your business metrics grow.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueNum}>03</div>
                <h4 className={styles.valueTitle}>Uncompromising Integrity</h4>
                <p className={styles.valueDesc}>
                  We tell the truth about technical debt, timeline realities, and architectural trade-offs. No buzzwords or false promises—just disciplined software execution.
                </p>
              </div>
            </div>
          </div>

          {/* ── Standards Checklist ── */}
          <div style={{ margin: '4rem 0 2rem' }}>
            <div className="eyebrow">QUALITY CRITERIA</div>
            <h3 className="section-heading" style={{ fontSize: '2rem' }}>Every Commit Meets These Standards</h3>

            <div className={styles.standardsGrid}>
              <div className={styles.standardCard}>
                <ShieldCheck size={24} className={styles.standardIcon} />
                <div>
                  <h4 className={styles.standardTitle}>OWASP Top 10 Sanitization</h4>
                  <p className={styles.standardDesc}>
                    Strict input encoding, parameterized queries, and CSRF protection on every exposed HTTP boundary.
                  </p>
                </div>
              </div>

              <div className={styles.standardCard}>
                <Cpu size={24} className={styles.standardIcon} />
                <div>
                  <h4 className={styles.standardTitle}>Zero Runtime Type Coercion</h4>
                  <p className={styles.standardDesc}>
                    Strict TypeScript compilation with zero `any` escapes across shared frontend and backend contracts.
                  </p>
                </div>
              </div>

              <div className={styles.standardCard}>
                <Zap size={24} className={styles.standardIcon} />
                <div>
                  <h4 className={styles.standardTitle}>Automated Regression Test Suite</h4>
                  <p className={styles.standardDesc}>
                    Continuous integration checks verifying unit tests and Playwright E2E flows on every branch merge.
                  </p>
                </div>
              </div>

              <div className={styles.standardCard}>
                <GitBranch size={24} className={styles.standardIcon} />
                <div>
                  <h4 className={styles.standardTitle}>Total Documentation Parity</h4>
                  <p className={styles.standardDesc}>
                    Interactive OpenAPI/Swagger documentation, ER diagrams, and setup runbooks delivered alongside code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--navy" style={{ textAlign: 'center', borderTop: '1px solid var(--light-border)' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>JOIN THE CREW</div>
          <h2 className="section-heading" style={{ maxWidth: '640px', margin: '0 auto 1.5rem' }}>
            Want to Engineer with Us?
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto 2.5rem' }}>
            We're always looking for disciplined full-stack and 3D web developers in Kanyakumari and across India.
          </p>
          <Link
            to="/careers"
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
            <span>View Open Positions</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
