// GRIOT TECH — Cookie Consent & Data Governance Banner
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Cookie, Check } from 'lucide-react'
import styles from './CookieConsent.module.css'

const STORAGE_KEY = 'griot_cookie_consent_v1'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY)
      if (!consent) {
        // Show after brief delay so user can orient
        const timer = setTimeout(() => setVisible(true), 1200)
        return () => clearTimeout(timer)
      }
    } catch {
      // localStorage may be disabled in private mode
      setVisible(false)
    }
  }, [])

  const handleConsent = (level: 'all' | 'essential') => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ level, timestamp: new Date().toISOString() }))
    } catch {
      // ignore storage failure
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside
      className={styles.cookieBanner}
      role="region"
      aria-label="Cookie and Privacy Consent Preferences"
    >
      <div className={styles.header}>
        <Cookie size={20} className={styles.shieldIcon} aria-hidden="true" />
        <h3 className={styles.title}>Data Privacy & Cookies</h3>
        <span className={styles.badge}>
          <Check size={12} />
          ZERO AD TRACKERS
        </span>
      </div>

      <p className={styles.description}>
        GRIOT TECH collects only strictly necessary technical tokens to guarantee site security and performance. We do not use third-party advertising cookies or cross-site telemetry. Learn more in our{' '}
        <Link to="/cookie-policy" className={styles.policyLink}>
          Cookie Policy
        </Link>{' '}
        and{' '}
        <Link to="/privacy-policy" className={styles.policyLink}>
          Privacy Policy
        </Link>.
      </p>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={() => handleConsent('all')}
          className={styles.acceptBtn}
        >
          Accept Preferences
        </button>
        <button
          type="button"
          onClick={() => handleConsent('essential')}
          className={styles.declineBtn}
        >
          Essential Only
        </button>
      </div>
    </aside>
  )
}
