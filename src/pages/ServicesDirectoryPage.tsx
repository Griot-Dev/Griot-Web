// GRIOT TECH — Services Directory Page
// Comprehensive engineering capabilities, lifecycle methodology, engagement models, SLAs, and technical FAQ
import { useState } from 'react'
import { SEOHead } from '@/components/seo/SEOHead'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/components/seo/schemaGenerators'
import { PageHero } from '@/components/layout/PageHero'
import { detailedServices } from '@/data/content'
import { Link } from 'react-router-dom'
import {
  Globe,
  Layers,
  Server,
  BarChart3,
  Database,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Lock,
  Zap,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import styles from './ServicesDirectoryPage.module.css'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  Server,
  BarChart3,
  Database,
  TrendingUp,
}

const servicesFaqs = [
  {
    question: 'How does GRIOT TECH differ from traditional digital agencies or freelance shops?',
    answer:
      'We eliminate agency account managers and bureaucratic intermediaries. You collaborate directly with senior software architects and engineers who design, write, test, and deploy your code. We do not use bloated off-the-shelf templates or outsourced offshore contractor farms—every solution is engineered from verified requirements.',
  },
  {
    question: 'Who retains intellectual property (IP) and code ownership?',
    answer:
      'You retain 100% full intellectual property and commercial ownership of all source code, database schemas, CI/CD deployment configurations, and documentation upon project milestone settlement. We never lock clients into proprietary hosting runtimes.',
  },
  {
    question: 'What is your technology stack and architectural philosophy?',
    answer:
      'We specialize in high-performance TypeScript/React frontend architectures, Three.js WebGL graphics, Python (FastAPI/Django) asynchronous backends, Node.js event-driven runtimes, and ACID-compliant PostgreSQL data storage. We prioritize strict type safety, modular microservices, and sub-200ms API response latencies.',
  },
  {
    question: 'Can you work with clients outside of India?',
    answer:
      'Yes. Headquartered in Kanyakumari, Tamil Nadu, India, we maintain asynchronous workflows and overlapping business hours with clients across North America, Europe, the Middle East, and Asia-Pacific. All communication occurs via Slack, GitHub PRs, and weekly video architecture syncs.',
  },
  {
    question: 'How do you guarantee security and compliance?',
    answer:
      'Our codebases comply with OWASP Top 10 security standards, automated SonarQube static code analysis, Dependabot dependency scanning, strict HSTS/CSP headers, and regional data privacy frameworks (DPDP Act 2023, GDPR).',
  },
]

export function ServicesDirectoryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeHubTab, setActiveHubTab] = useState<number>(0)

  const hubSpecs = [
    {
      title: 'High-Performance Web Applications',
      subtitle: 'React 18 • Next.js • TypeScript • Tailwind CSS',
      desc: 'Component-driven frontend architectures engineered for lightning-fast First Contentful Paint (< 0.8s) and 60 FPS animation fluidity. Zero bloated third-party plugins.',
      metrics: [
        { label: 'Core Web Vitals', val: '100% Green' },
        { label: 'Bundle Size', val: '< 45kB gzip' },
        { label: 'Accessibility', val: 'WCAG 2.1 AA' },
      ],
      codeSnippet: `// Contract-First React 18 Architecture
export const useLiveTelemetry = (endpoint: string) => {
  const query = useQuery(['telemetry', endpoint], fetchMetrics, {
    staleTime: 5000,
    refetchOnWindowFocus: false,
    retry: 2,
  })
  return { metrics: query.data, isSyncing: query.isLoading }
}`,
    },
    {
      title: 'Asynchronous Python Microservices',
      subtitle: 'FastAPI • Pydantic v2 • Celery • PostgreSQL',
      desc: 'Non-blocking I/O microservices and API gateways guaranteeing ACID persistence and sub-35ms p95 response times under heavy concurrent transactional loads.',
      metrics: [
        { label: 'P95 API Latency', val: '< 35ms' },
        { label: 'Schema Validation', val: 'Pydantic Strict' },
        { label: 'Database Integrity', val: 'ACID Compliant' },
      ],
      codeSnippet: `@app.post("/v1/transactions", response_model=TxnResponse)
async def process_transaction(payload: TxnPayload, db: AsyncSession = Depends(get_db)):
    record = await ledger_service.commit_atomic(db, payload)
    await event_bus.emit("txn.committed", record.id)
    return TxnResponse.from_orm(record)`,
    },
    {
      title: 'Custom CRM & Deal Pipelines',
      subtitle: 'Multi-Tenant RBAC • Kanban • Redis Queues',
      desc: 'Bespoke customer relationship management systems built specifically for your sales workflows without the bloat, seat fees, or vendor lock-in of generic SaaS platforms.',
      metrics: [
        { label: 'Pipeline Capacity', val: '50k+ Leads' },
        { label: 'Role-Based Access', val: 'Granular RBAC' },
        { label: 'Vendor Lock-In', val: '0% Proprietary' },
      ],
      codeSnippet: `interface DealStage {
  id: string
  name: string
  weightedValue: number
}
export const transitionLead = async (leadId: string, toStage: DealStage) => {
  await auditLog.record("stage.transition", { leadId, toStage })
}`,
    },
    {
      title: 'Interactive 3D WebGL Experiences',
      subtitle: 'Three.js • React Three Fiber • Custom Shaders',
      desc: 'Hardware-accelerated procedural 3D models and spatial runtime inspectors rendering 60 FPS graphics across desktop and mobile devices without external CDN dependencies.',
      metrics: [
        { label: 'Frame Rate', val: '60 FPS V-Sync' },
        { label: 'Graphics API', val: 'WebGL 2.0 / R3F' },
        { label: 'Asset Fallback', val: 'Procedural Mesh' },
      ],
      codeSnippet: `<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 45 }}>
  <ambientLight intensity={0.6} />
  <RotatingSpatialArtifact wireframe={false} />
  <OrbitControls enableZoom={false} autoRotate speed={0.9} />
</Canvas>`,
    },
  ]

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services' },
  ]

  const schema = [
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://griottech.com/' },
      { name: 'Services', url: 'https://griottech.com/services' },
    ]),
    generateFAQSchema(servicesFaqs),
  ]

  const servicesList = Object.values(detailedServices)

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <>
      <SEOHead
        title="Custom Software Engineering & Web Development Services | GRIOT TECH"
        description="Explore GRIOT TECH's engineering capabilities: custom React web apps, Python FastAPI microservices, bespoke CRM platforms, Three.js 3D web experiences, and enterprise business software in Kanyakumari, India."
        canonicalUrl="https://griottech.com/services"
        schema={schema}
      />

      <PageHero
        eyebrow="ENGINEERING CAPABILITIES"
        title="Services Built on Architectural Rigor."
        subtitle="Explore our specialized digital capabilities—engineered from first principles for performance, durability, and business scalability."
        breadcrumbs={breadcrumbs}
        statusBadge="FULL LIFECYCLE SOFTWARE DEVELOPMENT / KANYAKUMARI, INDIA"
      />

      {/* ── Services Directory Grid ── */}
      <section className="section section--light">
        <div className="container">
          {/* ── Interactive Architecture Hub (Eliminates Plain Space) ── */}
          <div className={styles.architectureHub}>
            <div className={styles.hubHeader}>
              <div className={styles.hubTitleGroup}>
                <div className={styles.hubBeacon} aria-hidden="true" />
                <div>
                  <div className={styles.hubTitle}>Interactive Architecture &amp; Tech Stack Hub</div>
                  <div className={styles.hubSubtitle}>Select an engineering domain to inspect real-world architecture specifications</div>
                </div>
              </div>

              <div className={styles.hubTabs}>
                {hubSpecs.map((spec, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.hubTabBtn} ${activeHubTab === idx ? styles.hubTabBtnActive : ''}`}
                    onClick={() => setActiveHubTab(idx)}
                  >
                    <span>0{idx + 1}.</span>
                    <span>{spec.title.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.hubContentGrid}>
              <div className={styles.hubSpecBox}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', color: 'var(--electric-orange)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {hubSpecs[activeHubTab].subtitle}
                </div>
                <h3 className={styles.hubSpecTitle}>{hubSpecs[activeHubTab].title}</h3>
                <p className={styles.hubSpecDesc}>{hubSpecs[activeHubTab].desc}</p>

                <div className={styles.hubMetricsRow}>
                  {hubSpecs[activeHubTab].metrics.map((m, i) => (
                    <div key={i}>
                      <div className={styles.hubMetricVal}>{m.val}</div>
                      <div className={styles.hubMetricLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--electric-orange)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <span>Request Technical Scoping for This Domain</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className={styles.hubDiagramCard}>
                <div className={styles.hubDiagramHeader}>
                  <span>ARCHITECTURE CODE BLUEPRINT</span>
                  <span style={{ color: '#34D399' }}>STRICT TYPE SAFETY</span>
                </div>
                <pre className={styles.hubCodeSnippet}>
                  <code>{hubSpecs[activeHubTab].codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className={styles.directoryGrid}>
            {servicesList.map((service) => {
              const IconComp = iconMap[service.icon] || Globe
              return (
                <article key={service.slug} className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconWrapper}>
                        <IconComp size={24} />
                      </div>
                      <span className={styles.cardCategory}>ENGINEERING SERVICE</span>
                    </div>

                    <h2 className={styles.cardTitle}>{service.title}</h2>
                    <p className={styles.cardDescription}>{service.description}</p>

                    <ul className={styles.deliverablesList}>
                      {service.deliverables.slice(0, 4).map((item, idx) => (
                        <li key={idx} className={styles.deliverableItem}>
                          <span className={styles.deliverableDot} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.techStack}>
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link to={`/services/${service.slug}`} className={styles.detailsLink}>
                      <span>Explore Technical Specs</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section: Software Engineering Lifecycle ── */}
      <section className={styles.subSection} style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>ENGINEERING METHODOLOGY</div>
            <h2 className={styles.title}>The 4-Stage Software Lifecycle</h2>
            <p className={styles.desc}>
              We replace guesswork and chaos with deterministic engineering milestones, automated tests, and continuous delivery pipelines.
            </p>
          </div>

          <div className={styles.stageGrid}>
            <div className={styles.stageCard}>
              <div className={styles.stageNum}>01</div>
              <h3 className={styles.stageTitle}>Domain & Data Modeling</h3>
              <p className={styles.stageDesc}>
                We analyze your business operations, extract domain invariants, and design normalized PostgreSQL relational schemas and OpenAPI contracts before a single line of frontend code is touched.
              </p>
            </div>

            <div className={styles.stageCard}>
              <div className={styles.stageNum}>02</div>
              <h3 className={styles.stageTitle}>Interactive UI & 3D Prototyping</h3>
              <p className={styles.stageDesc}>
                High-fidelity design execution using React 18, strict TypeScript design tokens, and hardware-accelerated Three.js WebGL graphics. Every component is audited for sub-second LCP.
              </p>
            </div>

            <div className={styles.stageCard}>
              <div className={styles.stageNum}>03</div>
              <h3 className={styles.stageTitle}>Asynchronous Service Layer</h3>
              <p className={styles.stageDesc}>
                High-throughput Python FastAPI or Node.js event microservices with Redis caching, queue workers, and strict payload sanitization adhering to zero-trust security standards.
              </p>
            </div>

            <div className={styles.stageCard}>
              <div className={styles.stageNum}>04</div>
              <h3 className={styles.stageTitle}>Automated CI/CD & Production</h3>
              <p className={styles.stageDesc}>
                Containerized Docker deployments on hardened Linux hosts with automated Playwright end-to-end testing, Cloudflare Edge security, and zero-downtime rolling releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Guarantees & SLAs ── */}
      <section className={styles.subSection} style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>COMMERCIAL ASSURANCES</div>
            <h2 className={styles.title}>Engineering Guarantees & SLAs</h2>
            <p className={styles.desc}>
              We stand behind our code with clear, non-negotiable standards of craftsmanship, uptime, and intellectual property protection.
            </p>
          </div>

          <div className={styles.guaranteesGrid}>
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}>
                <ShieldCheck size={24} />
              </div>
              <h3 className={styles.guaranteeTitle}>100% Code & IP Ownership</h3>
              <p className={styles.guaranteeDesc}>
                All repositories, schemas, migration scripts, and deployment configurations are transferred directly to your organization. Zero vendor lock-in.
              </p>
            </div>

            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}>
                <Zap size={24} />
              </div>
              <h3 className={styles.guaranteeTitle}>Performance SLA (&lt; 200ms)</h3>
              <p className={styles.guaranteeDesc}>
                We optimize databases with indexed query plans and edge caching to ensure P95 backend response times consistently clock under 200ms.
              </p>
            </div>

            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}>
                <Lock size={24} />
              </div>
              <h3 className={styles.guaranteeTitle}>Security Audit & Privacy</h3>
              <p className={styles.guaranteeDesc}>
                Built-in XSS sanitization, CSRF mitigation, parameterized SQL queries, strict CSP headers, and full compliance with DPDP Act 2023 & GDPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Client Engagement Models ── */}
      <section className={styles.subSection} style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>FLEXIBLE COLLABORATION</div>
            <h2 className={styles.title}>Client Engagement Models</h2>
            <p className={styles.desc}>
              Whether you are building a greenfield platform from scratch or scaling an existing production system, choose the model that fits your operational needs.
            </p>
          </div>

          <div className={styles.modelsGrid}>
            <div className={styles.modelCard}>
              <div>
                <div className={styles.modelType}>SCOPED DELIVERY</div>
                <h3 className={styles.modelTitle}>Fixed-Scope Milestone</h3>
                <p className={styles.modelDesc}>
                  Best for well-defined MVPs, specific feature modules, or full website overhauls with defined timelines and deliverables.
                </p>
                <ul className={styles.modelPoints}>
                  <li className={styles.modelPoint}>
                    <CheckCircle2 size={16} color="var(--electric-orange)" />
                    <span>Fixed budget & transparent milestones</span>
                  </li>
                  <li className={styles.modelPoint}>
                    <CheckCircle2 size={16} color="var(--electric-orange)" />
                    <span>Clear acceptance testing criteria</span>
                  </li>
                  <li className={styles.modelPoint}>
                    <CheckCircle2 size={16} color="var(--electric-orange)" />
                    <span>30-day post-launch warranty support</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className={styles.detailsLink}>
                <span>Request Scoped Estimate</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={`${styles.modelCard} ${styles.modelCardFeatured}`}>
              <div className={styles.featuredBadge}>MOST POPULAR</div>
              <div>
                <div className={styles.modelType}>DEDICATED TEAM</div>
                <h3 className={styles.modelTitle}>Dedicated Agile Pod</h3>
                <p className={styles.modelDesc}>
                  An embedded team of full-stack engineers and technical architects working exclusively on your product backlog and sprint cycles.
                </p>
                <ul className={styles.modelPoints}>
                  <li className={styles.modelPoint}>
                    <CheckCircle2 size={16} color="var(--electric-orange)" />
                    <span>Direct Slack & GitHub collaboration</span>
                  </li>
                  <li className={styles.modelPoint}>
                    <CheckCircle2 size={16} color="var(--electric-orange)" />
                    <span>Bi-weekly sprint planning & demos</span>
                  </li>
                  <li className={styles.modelPoint}>
                    <CheckCircle2 size={16} color="var(--electric-orange)" />
                    <span>Flexible monthly scaling</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className={styles.detailsLink}>
                <span>Reserve Engineering Pod</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.modelCard}>
              <div>
                <div className={styles.modelType}>CONSULTING & AUDIT</div>
                <h3 className={styles.modelTitle}>Architecture Review</h3>
                <p className={styles.modelDesc}>
                  Comprehensive technical due diligence of your existing codebase, database bottlenecks, security postures, and cloud infrastructure.
                </p>
                <ul className={styles.modelPoints}>
                  <li className={styles.modelPoint}>
                    <CheckCircle2 size={16} color="var(--electric-orange)" />
                    <span>Written architectural defect audit</span>
                  </li>
                  <li className={styles.modelPoint}>
                    <CheckCircle2 size={16} color="var(--electric-orange)" />
                    <span>Query optimization & index tuning</span>
                  </li>
                  <li className={styles.modelPoint}>
                    <CheckCircle2 size={16} color="var(--electric-orange)" />
                    <span>Prioritized refactoring roadmap</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className={styles.detailsLink}>
                <span>Schedule Audit</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: FAQ Accordion ── */}
      <section className={styles.subSection} style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>FREQUENTLY ASKED QUESTIONS</div>
            <h2 className={styles.title}>Answers to Common Inquiries</h2>
            <p className={styles.desc}>
              Everything you need to know about partnering with GRIOT TECH for your software engineering requirements.
            </p>
          </div>

          <div className={styles.faqList}>
            {servicesFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                        marginLeft: '1rem',
                        color: 'var(--electric-orange)',
                      }}
                    />
                  </button>
                  {isOpen && <div className={styles.faqAnswer}>{faq.answer}</div>}
                </div>
              )
            })}
          </div>

          {/* CTA Box */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Have a Problem Statement? Let's Talk Architecture.</h2>
            <p className={styles.ctaSubtitle}>
              Speak directly with an engineer to analyze your technical requirements, discuss architectural feasibility, and receive a milestone delivery plan.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              <span>Initiate Technical Consultation</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
