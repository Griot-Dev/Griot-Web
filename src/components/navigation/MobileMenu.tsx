// GRIOT TECH — Multi-Page Mobile Menu Overlay
import { useEffect, useRef, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight } from 'lucide-react'
import { navigationItems } from '@/data/content'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const overlayVariants = {
  closed: { x: '100%', opacity: 0.8 },
  open: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', damping: 30, stiffness: 300 },
  },
  exit: {
    x: '100%',
    opacity: 0.8,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  const prevPathRef = useRef(location.pathname)

  // Only close when path actually changes while open
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname
      onClose()
    }
  }, [location.pathname, onClose])

  // Focus trap & Escape listener
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusableEls = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        )
        const firstEl = focusableEls[0]
        const lastEl = focusableEls[focusableEls.length - 1]

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault()
          lastEl.focus()
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault()
          firstEl.focus()
        }
      }
    },
    [isOpen, onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="mobile-menu"
          className={styles.overlay}
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
        >
          {/* Header */}
          <div className={styles.header}>
            <Link to="/" className={styles.logo} onClick={onClose}>
              <img src="/logo-icon.svg" alt="" width={32} height={32} aria-hidden="true" />
              <span className={styles.logoText}>
                GRIOT<span className={styles.logoAccent}>TECH</span>
              </span>
            </Link>
            <button
              ref={closeButtonRef}
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Links */}
          <nav className={styles.nav} aria-label="Mobile Navigation">
            {navigationItems.map((item, idx) => (
              <div key={item.href} className={styles.menuGroup}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ''}`
                  }
                  end={item.href === '/'}
                  onClick={onClose}
                >
                  <span className={styles.linkNumber}>0{idx + 1}</span>
                  <span className={styles.linkLabel}>{item.label}</span>
                </NavLink>

                {item.subItems && (
                  <div className={styles.subItemsList}>
                    {item.subItems.map((sub) => (
                      <NavLink
                        key={sub.href}
                        to={sub.href}
                        className={({ isActive }) =>
                          `${styles.subLink} ${isActive ? styles.subLinkActive : ''}`
                        }
                        onClick={onClose}
                      >
                        <ChevronRight size={12} />
                        <span>{sub.label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer Coordinates */}
          <div className={styles.footer}>
            <div className={styles.socials}>
              <span className={styles.coordinateLabel}>ENGINEERING STUDIO / KANYAKUMARI, INDIA</span>
              <a
                href="mailto:hello@griottech.com"
                className={styles.socialLink}
              >
                hello@griottech.com
              </a>
            </div>
            <div className={styles.meta}>
              <span className={styles.metaStatus}>STUDIO ACTIVE</span>
              <span className={styles.metaDot} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
