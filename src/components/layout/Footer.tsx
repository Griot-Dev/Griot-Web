// GRIOT TECH — Multi-Page Enterprise Footer
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.topGrid}>
          {/* Brand Info & Studio Details */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logoWrapper} aria-label="GRIOT TECH Home">
              <img src="/logo.png" alt="GRIOT TECH Logo" className={styles.logoImage} />
            </Link>
            <p className={styles.description}>
              Independent software development startup based in Kanyakumari, Tamil Nadu, India. Engineering high-performance web applications, robust Python APIs, custom CRM systems, and digital business solutions.
            </p>

            <div className={styles.statusPill}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>SYSTEMS FULLY OPERATIONAL</span>
            </div>

            <div className={styles.studioMeta}>
              <div className={styles.studioAddress}>
                Kanyakumari District, Tamil Nadu — 629702, India
              </div>
              <div className={styles.studioContact}>
                <a href="mailto:hello@griottech.com" className={styles.emailLink}>
                  hello@griottech.com
                </a>
                <span className={styles.dotSeparator}>•</span>
                <a href="tel:+919488000000" className={styles.phoneLink}>
                  +91 94880 00000
                </a>
              </div>
            </div>
          </div>

          {/* Core Services Navigation */}
          <div>
            <h4 className={styles.colHeading}>Engineering Services</h4>
            <ul className={styles.navList}>
              <li>
                <Link to="/services/web-development" className={styles.navLink}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/software-development" className={styles.navLink}>
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/python-development" className={styles.navLink}>
                  Python Development
                </Link>
              </li>
              <li>
                <Link to="/services/crm-development" className={styles.navLink}>
                  CRM Development
                </Link>
              </li>
              <li>
                <Link to="/services/business-solutions" className={styles.navLink}>
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className={styles.navLink}>
                  Digital Marketing &amp; SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className={styles.colHeading}>Company &amp; Legal</h4>
            <ul className={styles.navList}>
              <li>
                <Link to="/about" className={styles.navLink}>
                  About GRIOT TECH
                </Link>
              </li>
              <li>
                <Link to="/projects" className={styles.navLink}>
                  Case Studies &amp; Projects
                </Link>
              </li>
              <li>
                <Link to="/technologies" className={styles.navLink}>
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link to="/team" className={styles.navLink}>
                  Engineering Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className={styles.navLink}>
                  Careers &amp; Hiring
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.navLink}>
                  Technical Consultation
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className={styles.navLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className={styles.navLink}>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className={styles.navLink}>
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className={styles.navLink}>
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours & Inquiries */}
          <div>
            <h4 className={styles.colHeading}>Consultation &amp; Support</h4>
            <div className={styles.contactMeta}>
              <div style={{ color: 'var(--warm-white)', fontWeight: 600 }}>
                GRIOT TECH Studio
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                Engineering &amp; Architecture Consulting
              </div>
              <div style={{ marginTop: '0.25rem' }}>
                Operating Hours: Monday – Friday, 09:00 – 18:00 IST
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <a href="mailto:hello@griottech.com" style={{ color: 'var(--electric-orange)', textDecoration: 'none' }}>
                  hello@griottech.com
                </a>
              </div>
              <div>
                <a href="mailto:privacy@griottech.com" style={{ color: '#CBD5E1', fontSize: '0.825rem', textDecoration: 'none' }}>
                  Grievance &amp; Privacy: privacy@griottech.com
                </a>
              </div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#64748B' }}>
                Mutual NDA available prior to technical scoping sessions.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>© {currentYear} GRIOT TECH. All rights reserved. Registered software development studio in Tamil Nadu, India.</div>
          <span>Built with React 18, Three.js, and TypeScript. W3C WCAG 2.1 AA accessible.</span>
        </div>
      </div>
    </footer>
  )
}
