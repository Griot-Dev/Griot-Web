// GRIOT TECH — Interactive Tech Icon Cloud / Marquee Component
import React from 'react'
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Server,
  Shield,
  Smartphone,
  Terminal,
  Zap,
  Cloud,
  Lock,
} from 'lucide-react'

const techIcons = [
  { name: 'React 18', icon: Globe, category: 'Frontend' },
  { name: 'TypeScript', icon: Code2, category: 'Language' },
  { name: 'Python 3.12', icon: Terminal, category: 'Backend' },
  { name: 'FastAPI', icon: Zap, category: 'API' },
  { name: 'Three.js / WebGL', icon: Cpu, category: '3D Graphics' },
  { name: 'PostgreSQL', icon: Database, category: 'Database' },
  { name: 'Docker', icon: Layers, category: 'DevOps' },
  { name: 'Cloudflare Edge', icon: Cloud, category: 'Security' },
  { name: 'Node.js', icon: Server, category: 'Runtime' },
  { name: 'Next.js', icon: Smartphone, category: 'Fullstack' },
  { name: 'HSTS / CSP 256', icon: Lock, category: 'Security' },
  { name: 'Audit Zero-Trust', icon: Shield, category: 'Integrity' },
]

export function TechMarquee() {
  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        padding: '2.5rem 0',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(16, 29, 53, 0.06)',
        borderBottom: '1px solid rgba(16, 29, 53, 0.06)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          width: 'max-content',
          animation: 'marqueeScroll 35s linear infinite',
        }}
      >
        {/* Render twice for continuous loop */}
        {[...techIcons, ...techIcons].map((tech, idx) => {
          const Icon = tech.icon
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '0.75rem 1.4rem',
                background: '#F8FAFC',
                border: '1px solid rgba(16, 29, 53, 0.08)',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(16, 29, 53, 0.03)',
                whiteSpace: 'nowrap',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(244, 119, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--electric-orange)',
                }}
              >
                <Icon size={18} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--midnight-navy)',
                  }}
                >
                  {tech.name}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.675rem',
                    color: 'var(--muted-steel)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {tech.category}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
