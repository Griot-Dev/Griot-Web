// GRIOT TECH — Interactive Tech Video Reel / Showcase Component
import React, { useState } from 'react'
import { Play, Shield, Terminal, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function TechVideoReel() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#F8FAFC',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            ENGINEERING WORKFLOW TELEMETRY
          </div>
          <h2 className="section-heading">How We Build Systems in Real-Time</h2>
          <p className="section-subheading" style={{ margin: '0 auto' }}>
            From high-throughput Python backends to hardware-accelerated 3D WebGL interfaces, see our actual development workflow in action.
          </p>
        </div>

        {/* Video / Interactive Media Frame */}
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(16, 29, 53, 0.15)',
            border: '1px solid rgba(16, 29, 53, 0.1)',
            background: '#081321',
            aspectRatio: '16/9',
            maxHeight: '620px',
            margin: '0 auto',
          }}
        >
          {/* Real Canvas / SVG Code Matrix Animated Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/assets/images/code-architecture.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.85,
              transition: 'transform 0.5s ease',
            }}
          />

          {/* Gradient Darkening Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(8, 19, 33, 0.95) 10%, rgba(8, 19, 33, 0.4) 60%, rgba(8, 19, 33, 0.8) 100%)',
            }}
          />

          {/* Video HUD Top Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              padding: '1.25rem 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 3,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(8, 19, 33, 0.5)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#34D399',
                  boxShadow: '0 0 8px #34D399',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#FFFFFF',
                  letterSpacing: '0.08em',
                }}
              >
                LIVE STREAM // REPO TELEMETRY
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#94A3B8',
                }}
              >
                NODE V20 • PY 3.12 • PROD READY
              </span>
            </div>
          </div>

          {/* Center Play Interaction / Info */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'rgba(244, 119, 22, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 0 35px rgba(244, 119, 22, 0.6)',
                cursor: 'pointer',
                marginBottom: '1.5rem',
                transition: 'transform 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Play size={32} fill="#FFFFFF" style={{ marginLeft: '4px' }} />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Architected for Performance & Security
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#CBD5E1',
                maxWidth: '560px',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              Watch how our engineers in Kanyakumari structure microservices, run automated vulnerability scans, and benchmark Core Web Vitals.
            </p>

            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.65rem 1.4rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span>EXPLORE ALL 6 SERVICES</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
