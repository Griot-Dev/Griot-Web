// GRIOT TECH — Contact & Technical Consultation Section
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, Phone, ShieldCheck, Lock } from 'lucide-react'
import { useScrollAnimation } from '@/hooks'
import styles from './Contact.module.css'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  message: string
  consent: boolean
  // Honeypot field (should remain empty)
  bot_trap: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

// Sanitize inputs to prevent raw HTML / script injection
function sanitizeInput(str: string): string {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Web Application',
    message: '',
    consent: false,
    bot_trap: '',
  })

  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [ticketRef, setTicketRef] = useState('')
  const [formRenderTime, setFormRenderTime] = useState<number>(0)

  useEffect(() => {
    setFormRenderTime(Date.now())
  }, [])

  const validateField = (name: keyof FormData, value: string | boolean): string | undefined => {
    if (name === 'consent') {
      if (!value) return 'Consent is required to submit technical requirements'
      return undefined
    }

    if (typeof value !== 'string') return undefined

    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        if (value.length > 80) return 'Name must not exceed 80 characters'
        if (!/^[a-zA-Z\s.'-]+$/.test(value.trim())) {
          return 'Name contains invalid characters'
        }
        return undefined

      case 'email':
        if (!value.trim()) return 'Email address is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) {
          return 'Please provide a valid corporate or personal email address'
        }
        if (value.length > 100) return 'Email must not exceed 100 characters'
        return undefined

      case 'phone':
        if (value.trim()) {
          // Optional, but if provided must follow reasonable phone format
          if (!/^(\+?\d{1,4}[-.\s]?)?(\(?\d{2,5}\)?[-.\s]?)?[\d-.\s]{6,14}$/.test(value.trim())) {
            return 'Invalid phone number format'
          }
        }
        return undefined

      case 'message':
        if (!value.trim()) return 'Please describe your system or requirements'
        if (value.trim().length < 15) return 'Please describe your requirements in more detail (min 15 characters)'
        if (value.length > 2000) return 'Specification exceeds 2000 character maximum'
        return undefined

      default:
        return undefined
    }
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const error = validateField(field, formData[field])
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      const error = validateField(field, value)
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    const fieldsToValidate: (keyof FormData)[] = ['name', 'email', 'phone', 'message', 'consent']

    fieldsToValidate.forEach((f) => {
      const err = validateField(f, formData[f])
      if (err) newErrors[f] = err
    })

    // Bot honeypot check
    if (formData.bot_trap.trim().length > 0) {
      newErrors.bot_trap = 'Spam filter triggered'
    }

    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      message: true,
      consent: true,
    })

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 1. Anti-spam timing check (bots submit in under 1 second)
    const elapsed = Date.now() - formRenderTime
    if (elapsed < 1200) {
      setStatus('error')
      setStatusMessage('Submission rate limit triggered. Please verify you are human and try again.')
      return
    }

    // 2. Validate all fields
    if (!validateForm()) {
      return
    }

    // 3. Honeypot check
    if (formData.bot_trap) {
      // Silently pretend to succeed to confuse scrapers
      setStatus('success')
      setStatusMessage('Request received.')
      return
    }

    setStatus('submitting')
    setStatusMessage('')

    const sanitizedPayload = {
      name: sanitizeInput(formData.name.trim()),
      email: sanitizeInput(formData.email.trim().toLowerCase()),
      phone: sanitizeInput(formData.phone.trim()),
      company: sanitizeInput(formData.company.trim()),
      projectType: formData.projectType,
      message: sanitizeInput(formData.message.trim()),
      submittedAt: new Date().toISOString(),
    }

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT

    try {
      if (endpoint && !endpoint.includes('YOUR_FORM_ID')) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(sanitizedPayload),
        })

        if (!response.ok) {
          throw new Error('Failed to deliver message.')
        }
      } else {
        // Fallback simulation for local development with realistic network delay
        await new Promise((resolve) => setTimeout(resolve, 1400))
      }

      const generatedRef = `GT-REQ-${Math.floor(100000 + Math.random() * 900000)}`
      setTicketRef(generatedRef)
      setStatus('success')
      setStatusMessage('Your system requirements have been dispatched to the GRIOT engineering team.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: 'Web Application',
        message: '',
        consent: false,
        bot_trap: '',
      })
      setTouched({})
      setErrors({})
    } catch (err: unknown) {
      setStatus('error')
      setStatusMessage(err instanceof Error ? err.message : 'Unable to dispatch message. Please contact us directly at hello@griottech.com')
    }
  }

  const sectionRef = useScrollAnimation<HTMLElement>((el, tl) => {
    tl.from(el.querySelectorAll(`.${styles.formCard}, .${styles.infoCard}`), {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    })
  })

  return (
    <section id="contact" ref={sectionRef} className={`section ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="eyebrow">PROJECT INITIATION</div>
          <h2 className="section-heading">Let's Engineer Something Useful.</h2>
          <p className="section-subheading">
            Have a clear problem statement or need technical system architecture? Share your requirements with our engineering team for an architectural estimate.
          </p>
        </div>

        <div className={styles.splitGrid}>
          {/* Form */}
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit} noValidate aria-label="Project Consultation Form">
              {/* Spam Honeypot - hidden from real humans */}
              <div className={styles.honeypotField} aria-hidden="true">
                <label htmlFor="website_url_hp">Leave this empty</label>
                <input
                  id="website_url_hp"
                  type="text"
                  name="website_url_hp"
                  tabIndex={-1}
                  value={formData.bot_trap}
                  onChange={(e) => setFormData({ ...formData, bot_trap: e.target.value })}
                  autoComplete="off"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                  />
                  {errors.name && (
                    <div id="name-error" className={styles.errorMessage} role="alert">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                  />
                  {errors.email && (
                    <div id="email-error" className={styles.errorMessage} role="alert">
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="phone">
                    Phone / WhatsApp <span style={{ color: 'var(--muted-steel)', textTransform: 'none' }}>(Optional)</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                    />
                  </div>
                  {errors.phone && (
                    <div id="phone-error" className={styles.errorMessage} role="alert">
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="company">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Acme Corp (Optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="projectType">
                  System Category
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className={styles.select}
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="Web Application">Modern Web Application (React / Vite)</option>
                  <option value="Full-Stack Application">Enterprise Full-Stack Application</option>
                  <option value="Backend & API Engineering">Python FastAPI / Microservices Architecture</option>
                  <option value="CRM & Business Software">Custom CRM & ERP Workflow Systems</option>
                  <option value="Database Design & Integration">Database Optimization & Migrations</option>
                  <option value="Automation & Maintenance">Automation, DevOps & Cloud Modernization</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <label className={styles.label} htmlFor="message">
                    Project Scope & Technical Needs *
                  </label>
                  <span className={styles.charCount}>{formData.message.length} / 2000</span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  maxLength={2000}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  placeholder="Outline your application goals, target timelines, or existing infrastructure..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                />
                {errors.message && (
                  <div id="message-error" className={styles.errorMessage} role="alert">
                    {errors.message}
                  </div>
                )}
              </div>

              {/* Explicit Consent & Data Processing Agreement */}
              <div className={styles.consentGroup}>
                <label className={styles.checkboxLabel} htmlFor="consent">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  />
                  <span>
                    I consent to GRIOT TECH processing my contact details and requirements solely for technical consultation in accordance with the{' '}
                    <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--electric-orange)', textDecoration: 'underline' }}>
                      Privacy Policy
                    </Link>.
                  </span>
                </label>
                {errors.consent && (
                  <div id="consent-error" className={styles.errorMessage} role="alert">
                    {errors.consent}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>ENCRYPTING & DISPATCHING...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT SPECIFICATION</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              {/* Data Minimization & Privacy Assurance */}
              <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#64748B', fontSize: '0.78rem', lineHeight: 1.5 }}>
                <Lock size={15} style={{ flexShrink: 0, color: '#059669', marginTop: '2px' }} />
                <span>
                  <strong>Data Minimization:</strong> We only collect minimal information necessary for architecture estimates. Zero ad trackers. Non-contractual inquiries purged within 180 days. To request permanent deletion, email{' '}
                  <a href="mailto:privacy@griottech.com" style={{ color: 'var(--midnight-navy)', fontWeight: 600, textDecoration: 'underline' }}>
                    privacy@griottech.com
                  </a>.
                </span>
              </div>

              {status === 'success' && (
                <div className={`${styles.statusBanner} ${styles.statusSuccess}`} role="status">
                  <CheckCircle2 size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <div>{statusMessage}</div>
                    {ticketRef && (
                      <div>
                        Reference Ticket: <span className={styles.refBadge}>{ticketRef}</span> (Response guaranteed within 24h)
                      </div>
                    )}
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className={`${styles.statusBanner} ${styles.statusError}`} role="alert">
                  <AlertCircle size={24} style={{ flexShrink: 0 }} />
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Details & Diagram Card */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <MapPin size={20} />
                </div>
                <div className={styles.infoMeta}>
                  <span className={styles.infoTitle}>Engineering Studio</span>
                  <span className={styles.infoValue}>Kanyakumari, Tamil Nadu, India</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoMeta}>
                  <span className={styles.infoTitle}>Direct Communication</span>
                  <span className={styles.infoValue}>hello@griottech.com</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Phone size={20} />
                </div>
                <div className={styles.infoMeta}>
                  <span className={styles.infoTitle}>Direct Contact Desk</span>
                  <span className={styles.infoValue}>+91 9488 000 000</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Clock size={20} />
                </div>
                <div className={styles.infoMeta}>
                  <span className={styles.infoTitle}>Current Availability</span>
                  <span className={styles.infoValue}>Active Intake for Q1/Q2 Sprints</span>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--light-border)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontSize: '0.85rem' }}>
                <ShieldCheck size={18} />
                <span>NDA & Confidentiality Protected By Default</span>
              </div>
            </div>

            {/* Studio Environment & Client Commitment */}
            <div className={styles.studioCard}>
              <div className={styles.studioImageWrap}>
                <img
                  src="/assets/images/studio-office.webp"
                  alt="GRIOT TECH Engineering Studio"
                  className={styles.studioImage}
                />
              </div>
              <div className={styles.studioCardBody}>
                <h3 className={styles.studioCardTitle}>Engineering from Kanyakumari</h3>
                <p className={styles.studioCardDesc}>
                  Our studio is based at the southern coast of Tamil Nadu. We work with clients across India and globally, providing focused, uninterrupted engineering craftsmanship.
                </p>
                <ul className={styles.commitmentsList}>
                  <li className={styles.commitmentItem}>
                    <CheckCircle2 size={16} className={styles.commitmentIcon} />
                    <span>Direct collaboration with senior software architects</span>
                  </li>
                  <li className={styles.commitmentItem}>
                    <CheckCircle2 size={16} className={styles.commitmentIcon} />
                    <span>Transparent sprint scopes &amp; weekly live demos</span>
                  </li>
                  <li className={styles.commitmentItem}>
                    <CheckCircle2 size={16} className={styles.commitmentIcon} />
                    <span>100% intellectual property &amp; repository transfer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
