// GRIOT TECH — Contact & Technical Project Scoping Page
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema, generateFAQSchema, organizationSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { Contact } from '@/sections/Contact'
import { Mail, Phone, MapPin, Clock, ShieldCheck, FileCheck, Award, ArrowRight } from 'lucide-react'
import styles from './ContactPage.module.css'

const contactFaqs = [
  {
    question: 'How quickly does GRIOT TECH respond to new project inquiries?',
    answer:
      'We respond to all technical inquiries within 24 business hours. You receive a preliminary architectural assessment and availability schedule directly from a software engineer.',
  },
  {
    question: 'Can you sign a Mutual Non-Disclosure Agreement (NDA) before we discuss proprietary ideas?',
    answer:
      'Absolutely. We routinely execute bilateral NDAs prior to in-depth technical scoping to guarantee your proprietary intellectual property and business logic are fully protected.',
  },
  {
    question: 'Where is your engineering studio located for in-person meetings?',
    answer:
      'Our primary engineering studio is located in Kanyakumari, Tamil Nadu, India. In-person technical reviews and milestone scoping sessions can be scheduled by prior appointment.',
  },
]

export function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact' },
  ]

  const schema = [
    organizationSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Contact', url: 'https://griottech.com/contact' },
    ]),
    generateFAQSchema(contactFaqs),
  ]

  return (
    <>
      <SEOHead
        title="Contact Engineering Team | GRIOT TECH Kanyakumari, India"
        description="Initiate a software consultation with GRIOT TECH in Kanyakumari, Tamil Nadu. Direct developer access, 24-hour response SLA, mutual NDA protection, and architectural scoping."
        canonicalUrl="https://griottech.com/contact"
        schema={schema}
      />

      <PageHero
        eyebrow="PROJECT CONSULTATION &amp; SCOPING"
        title="Initiate Technical Scoping."
        subtitle="Submit your system requirements or technical challenges directly to our engineering studio in Kanyakumari. We respond with actionable architectural feedback within 24 business hours."
        breadcrumbs={breadcrumbs}
        statusBadge="CONSULTATION DESK / KANYAKUMARI, TAMIL NADU"
      />

      {/* ── Contact Form Section (Front & Center) ── */}
      <Contact />

      {/* ── Direct Channels & Studio Information ── */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <div className={styles.iconCircle}>
                <Mail size={22} />
              </div>
              <h3 className={styles.cardTitle}>Direct Engineering Mail</h3>
              <p className={styles.cardText}>Direct line to our technical directors for project inquiries and RFPs.</p>
              <a href="mailto:hello@griottech.com" className={styles.cardLink}>
                <span>hello@griottech.com</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconCircle}>
                <MapPin size={22} />
              </div>
              <h3 className={styles.cardTitle}>Engineering Studio</h3>
              <p className={styles.cardText}>Main Road, Kanyakumari District, Tamil Nadu 629702, India.</p>
              <a
                href="https://maps.google.com/?q=Kanyakumari,Tamil+Nadu,India"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                <span>View on Google Maps</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconCircle}>
                <Clock size={22} />
              </div>
              <h3 className={styles.cardTitle}>Operating Hours</h3>
              <p className={styles.cardText}>Monday – Friday: 09:00 – 18:00 IST. Response within 24 business hours.</p>
              <span className={styles.cardLink} style={{ color: 'var(--midnight-navy)' }}>
                Direct Engineer Response
              </span>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconCircle}>
                <Phone size={22} />
              </div>
              <h3 className={styles.cardTitle}>Telephone Desk</h3>
              <p className={styles.cardText}>Direct client voice channel for active scoping and contracts.</p>
              <a href="tel:+919488000000" className={styles.cardLink}>
                <span>+91 94880 00000</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Consultation Process Steps */}
          <div className={styles.processBox}>
            <div className={styles.processHeader}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>ENGAGEMENT PROTOCOL</div>
              <h3>What Happens Next?</h3>
            </div>

            <div className={styles.stepsRow}>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>01</div>
                <h4 className={styles.stepTitle}>Requirement Intake</h4>
                <p className={styles.stepDesc}>
                  We review your problem statement, target users, and performance constraints under strict confidentiality.
                </p>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepNum}>02</div>
                <h4 className={styles.stepTitle}>Architecture Sync</h4>
                <p className={styles.stepDesc}>
                  A 30-minute focused consultation with our engineers to map data flows, tech stack, and risk vectors.
                </p>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepNum}>03</div>
                <h4 className={styles.stepTitle}>Milestone Proposal</h4>
                <p className={styles.stepDesc}>
                  We deliver a transparent, itemized engineering plan with fixed timeline estimates and defined deliverables.
                </p>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepNum}>04</div>
                <h4 className={styles.stepTitle}>Sprint Kickoff</h4>
                <p className={styles.stepDesc}>
                  Repository setup, architecture documentation, direct Slack channel invite, and first sprint deployment.
                </p>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className={styles.trustBar}>
              <div className={styles.trustItem}>
                <ShieldCheck size={26} className={styles.trustIcon} />
                <div>
                  <h4 className={styles.trustHeading}>Mutual NDA Enforced</h4>
                  <p className={styles.trustText}>All proprietary concepts, IP, and data models remain 100% confidential.</p>
                </div>
              </div>

              <div className={styles.trustItem}>
                <FileCheck size={26} className={styles.trustIcon} />
                <div>
                  <h4 className={styles.trustHeading}>100% Code Ownership</h4>
                  <p className={styles.trustText}>Complete rights and full repository access transferred upon milestone settlement.</p>
                </div>
              </div>

              <div className={styles.trustItem}>
                <Award size={26} className={styles.trustIcon} />
                <div>
                  <h4 className={styles.trustHeading}>Zero Middlemen</h4>
                  <p className={styles.trustText}>Speak directly with software craftspeople, not junior sales intermediaries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
