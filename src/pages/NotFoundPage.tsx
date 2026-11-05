// GRIOT TECH — 404 Technical Error Page
import { SEOHead } from '@/components/seo/SEOHead'
import { Link } from 'react-router-dom'
import { ArrowLeft, Terminal, Home, Compass } from 'lucide-react'

export function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="404 — Route Not Found | GRIOT TECH"
        description="The requested route or resource does not exist in the GRIOT TECH application architecture."
      />

      <section
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 1.5rem',
          backgroundColor: 'var(--deep-blue)',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '640px',
            width: '100%',
            background: 'var(--glass-dark)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--electric-orange)',
              padding: '4px 12px',
              background: 'rgba(244, 119, 22, 0.1)',
              borderRadius: '999px',
              marginBottom: '1.5rem',
            }}
          >
            <Terminal size={14} />
            <span>ERR_404_ROUTE_UNDEFINED</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1,
              color: 'var(--warm-white)',
              marginBottom: '1rem',
            }}
          >
            404
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--muted-steel)',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            The requested URI path is not registered in our routing architecture or has been restructured.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--electric-orange)',
                color: '#fff',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              <Home size={16} />
              <span>Return Home</span>
            </Link>

            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--warm-white)',
                borderRadius: '8px',
                fontWeight: 500,
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              <Compass size={16} />
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
