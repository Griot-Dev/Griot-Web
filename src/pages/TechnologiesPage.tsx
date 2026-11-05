// GRIOT TECH — Technology Stack & Engineering Standards
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema, organizationSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { Link } from 'react-router-dom'
import { Code2, Server, Database, Cloud, ShieldCheck, ArrowRight, GitBranch, CheckCircle2 } from 'lucide-react'
import styles from './TechnologiesPage.module.css'

export function TechnologiesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Technologies' },
  ]

  const schema = [
    organizationSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Technologies', url: 'https://griottech.com/technologies' },
    ]),
  ]

  const techCategories = [
    {
      title: 'Frontend Engineering',
      icon: Code2,
      description: 'Component-driven, highly optimized user interfaces built with strict typing and accessibility standards.',
      tools: [
        { name: 'React 18', desc: 'Concurrent rendering and declarative UI architecture' },
        { name: 'TypeScript', desc: 'Compile-time type contracts and defect prevention' },
        { name: 'Three.js / R3F', desc: 'Hardware-accelerated 3D WebGL graphics and procedural shaders' },
        { name: 'Vite / Next.js', desc: 'High-speed bundling, tree-shaking, and SSR/SSG capabilities' },
        { name: 'GSAP & Framer Motion', desc: 'Physics-based animations and performant scroll triggers' },
      ],
    },
    {
      title: 'Backend Services & APIs',
      icon: Server,
      description: 'Asynchronous, high-throughput service models designed for non-blocking I/O and low latency.',
      tools: [
        { name: 'Python (FastAPI / Django)', desc: 'Type-safe asynchronous microservices and API gateways' },
        { name: 'Node.js (Express / Fastify)', desc: 'High-concurrency event-driven network services' },
        { name: 'Celery & Redis', desc: 'Distributed asynchronous task queues and job orchestration' },
        { name: 'GraphQL & REST', desc: 'Strict API contracts with automated OpenAPI / Swagger documentation' },
        { name: 'Pydantic / Zod', desc: 'Runtime payload schema validation and sanitization' },
      ],
    },
    {
      title: 'Data Architecture & Storage',
      icon: Database,
      description: 'Normalized, highly indexed persistence layers guaranteeing ACID transactional integrity.',
      tools: [
        { name: 'PostgreSQL', desc: 'Enterprise relational data modeling with partitioned indexing' },
        { name: 'Redis', desc: 'Sub-millisecond in-memory caching and session synchronization' },
        { name: 'MongoDB', desc: 'Document store with geospatial querying capabilities' },
        { name: 'Prisma / SQLAlchemy', desc: 'Type-safe object-relational mapping and schema migrations' },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      icon: Cloud,
      description: 'Zero-trust infrastructure configurations, automated CI/CD pipelines, and proactive defense.',
      tools: [
        { name: 'Docker Containers', desc: 'Isolated, immutable runtime environments across dev and prod' },
        { name: 'GitHub Actions', desc: 'Automated linting, testing, and zero-downtime deployment workflows' },
        { name: 'Cloudflare Edge', desc: 'DDoS mitigation, CDN caching, and Turnstile bot protection' },
        { name: 'Linux / Nginx', desc: 'Hardened web server proxies with strict HSTS, CSP, and TLS 1.3' },
      ],
    },
  ]

  return (
    <>
      <SEOHead
        title="Technology Stack & Standards | GRIOT TECH"
        description="Review GRIOT TECH's engineering stack: React, TypeScript, Python FastAPI, Django, Node.js, PostgreSQL, Docker, and Three.js WebGL graphics."
        canonicalUrl="https://griottech.com/technologies"
        schema={schema}
      />

      <PageHero
        eyebrow="TECHNICAL FOUNDATIONS"
        title="Disciplined Engineering Stack."
        subtitle="We choose proven, robust technologies with deep ecosystems. Every tool in our stack is selected for performance, type safety, and maintainability."
        breadcrumbs={breadcrumbs}
        statusBadge="VERIFIED TECHNICAL STACK / PRODUCTION TESTED"
      />

      <section className="section section--light">
        <div className="container">
          <div className={styles.stackGrid}>
            {techCategories.map((cat, idx) => {
              const IconComp = cat.icon
              return (
                <div key={idx} className={styles.catCard}>
                  <div className={styles.catHeader}>
                    <div className={styles.iconBox}>
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h2 className={styles.catTitle}>{cat.title}</h2>
                      <p className={styles.catDesc}>{cat.description}</p>
                    </div>
                  </div>

                  <div className={styles.toolList}>
                    {cat.tools.map((t) => (
                      <div key={t.name} className={styles.toolItem}>
                        <div className={styles.toolName}>{t.name}</div>
                        <div className={styles.toolDesc}>{t.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Software Engineering Lifecycle & Real Tooling Workflow */}
          <div className={styles.workflowBox}>
            <div className={styles.workflowGrid}>
              <div className={styles.workflowContent}>
                <div className="eyebrow">ENGINEERING PRACTICE</div>
                <h3 className="section-heading" style={{ fontSize: '1.85rem', marginBottom: '0.75rem' }}>
                  How We Write &amp; Ship Code
                </h3>
                <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  We follow a disciplined engineering workflow from requirements definition to production deployment.
                </p>

                <div className={styles.workflowList}>
                  <div className={styles.workflowItem}>
                    <div className={styles.workflowNum}>01</div>
                    <div>
                      <div className={styles.workflowItemTitle}>Contract-First Specification</div>
                      <div className={styles.workflowItemDesc}>
                        We define database schemas and OpenAPI 3.1 endpoints before writing implementation code, preventing costly architecture rewrites.
                      </div>
                    </div>
                  </div>

                  <div className={styles.workflowItem}>
                    <div className={styles.workflowNum}>02</div>
                    <div>
                      <div className={styles.workflowItemTitle}>Peer-Reviewed Pull Requests</div>
                      <div className={styles.workflowItemDesc}>
                        Every line of code is reviewed by a senior engineer. Automated CI checks enforce TypeScript compilation and linting rules.
                      </div>
                    </div>
                  </div>

                  <div className={styles.workflowItem}>
                    <div className={styles.workflowNum}>03</div>
                    <div>
                      <div className={styles.workflowItemTitle}>Automated Regression Harness</div>
                      <div className={styles.workflowItemDesc}>
                        Integration tests and Playwright end-to-end browser suites guarantee that existing user journeys never break during releases.
                      </div>
                    </div>
                  </div>

                  <div className={styles.workflowItem}>
                    <div className={styles.workflowNum}>04</div>
                    <div>
                      <div className={styles.workflowItemTitle}>Containerized Deployments</div>
                      <div className={styles.workflowItemDesc}>
                        Multi-stage Docker builds ensure reproducible runtime environments with zero dependency drift between staging and production.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.workflowImageWrap}>
                <img
                  src="/assets/images/code-architecture.webp"
                  alt="GRIOT TECH Code Architecture and Developer Workflow"
                  className={styles.workflowImage}
                />
              </div>
            </div>
          </div>

          {/* Quality Assurances */}
          <div className={styles.qualityBox}>
            <div className={styles.qualityHeader}>
              <ShieldCheck size={28} className={styles.qualityIcon} />
              <h3 className={styles.qualityTitle}>Engineering Standards &amp; Deliverables</h3>
            </div>

            <div className={styles.qualityGrid}>
              <div className={styles.qualityItem}>
                <div className={styles.qualityItemTitle}>Strict Compile-Time Types</div>
                <div className={styles.qualityItemDesc}>
                  Zero `any` type shortcuts. TypeScript and Pydantic validation ensure end-to-end runtime safety across the stack.
                </div>
              </div>

              <div className={styles.qualityItem}>
                <div className={styles.qualityItemTitle}>W3C Accessibility Compliance</div>
                <div className={styles.qualityItemDesc}>
                  Semantic HTML, full keyboard navigation support, and WCAG 2.1 AA color contrast compliance built into every component.
                </div>
              </div>

              <div className={styles.qualityItem}>
                <div className={styles.qualityItemTitle}>100% Client Sovereignty</div>
                <div className={styles.qualityItemDesc}>
                  You own all source code, commit history, deployment manifests, and architectural blueprints upon project completion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section section--navy" style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>TECHNICAL INQUIRY</div>
          <h2 className="section-heading" style={{ maxWidth: '640px', margin: '0 auto 1.5rem' }}>
            Looking for a Stack Consultation?
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto 2.5rem' }}>
            We help founders and technical leaders evaluate architecture decisions, data modeling, and performance bottlenecks.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 2rem',
              backgroundColor: 'var(--electric-orange)',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <span>Talk to an Architect</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
