// GRIOT TECH — Modern Trending Floating Pill Navigation Bar
import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Globe,
  Code2,
  Terminal,
  Database,
  Cpu,
  TrendingUp,
} from 'lucide-react'
import { navigationItems } from '@/data/content'
import { MobileMenu } from './MobileMenu'
import styles from './Navbar.module.css'

// Service item descriptors for the premium flyout
const serviceMeta: Record<string, { desc: string; icon: typeof Globe }> = {
  '/services/web-development': {
    desc: 'High-performance React & Next.js web applications',
    icon: Globe,
  },
  '/services/software-development': {
    desc: 'Full-stack enterprise architectures & distributed services',
    icon: Code2,
  },
  '/services/python-development': {
    desc: 'Asynchronous FastAPI, Django & backend services',
    icon: Terminal,
  },
  '/services/crm-development': {
    desc: 'Custom deal pipelines, RBAC & client portals',
    icon: Database,
  },
  '/services/business-solutions': {
    desc: 'Automated workflows, ERP & internal tooling',
    icon: Cpu,
  },
  '/services/digital-marketing': {
    desc: 'Technical SEO, Core Web Vitals & organic growth',
    icon: TrendingUp,
  },
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleOpenMobile = useCallback(() => {
    setMobileOpen(true)
  }, [])

  const handleCloseMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <header
        className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className={styles.inner}>
          {/* Brand Logo & Studio Availability */}
          <div className={styles.brandGroup}>
            <Link to="/" className={styles.logo} aria-label="GRIOT TECH — Return to Home">
              <img
                src="/logo-icon.svg"
                alt="GRIOT TECH Emblem"
                width={32}
                height={28}
                className={styles.logoIcon}
              />
              <span className={styles.logoText}>
                GRIOT<span className={styles.logoBadge}>TECH</span>
              </span>
            </Link>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.availabilityBadge} title="Engineering team accepting new client projects">
              <span className={styles.livePulse} aria-hidden="true" />
              <span className={styles.availabilityText}>Available for Projects</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Primary Navigation">
            {navigationItems.map((item) => {
              if (item.subItems) {
                const isServicesActive = location.pathname.startsWith('/services')
                return (
                  <div
                    key={item.href}
                    className={styles.navItem}
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive || isServicesActive ? styles.navLinkActive : ''}`
                      }
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`${styles.chevron} ${servicesDropdownOpen ? styles.chevronOpen : ''}`}
                      />
                    </NavLink>

                    {/* Premium Mega-Dropdown Flyout */}
                    {servicesDropdownOpen && (
                      <div className={styles.dropdown} role="menu">
                        <div className={styles.dropdownHeader}>
                          <span className={styles.dropdownEyebrow}>CORE ENGINEERING DISCIPLINES</span>
                          <span className={styles.dropdownMeta}>Production-Ready Architectures</span>
                        </div>
                        <div className={styles.dropdownGrid}>
                          {item.subItems.map((sub) => {
                            const meta = serviceMeta[sub.href] || {
                              desc: 'Full-cycle engineering implementation',
                              icon: Code2,
                            }
                            const IconComp = meta.icon

                            return (
                              <NavLink
                                key={sub.href}
                                to={sub.href}
                                className={({ isActive }) =>
                                  `${styles.dropdownCard} ${isActive ? styles.dropdownCardActive : ''}`
                                }
                                role="menuitem"
                              >
                                <div className={styles.cardIconBox}>
                                  <IconComp size={16} />
                                </div>
                                <div className={styles.cardContent}>
                                  <div className={styles.cardTitle}>
                                    <span>{sub.label}</span>
                                    <ArrowRight size={13} className={styles.cardArrow} />
                                  </div>
                                  <div className={styles.cardDesc}>{meta.desc}</div>
                                </div>
                              </NavLink>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                  end={item.href === '/'}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className={styles.actions}>
            <Link to="/contact" className={styles.cta}>
              <span>Start a Project</span>
              <ArrowRight size={14} className={styles.ctaArrow} />
            </Link>

            <button
              className={styles.hamburger}
              onClick={handleOpenMobile}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileOpen}
              type="button"
            >
              <Menu size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={handleCloseMobile} />
    </>
  )
}
