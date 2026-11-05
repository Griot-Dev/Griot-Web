// GRIOT TECH — Extended Project, Service, and Company Data
// Verified information & comprehensive technical profiles

export interface Project {
  id: string
  title: string
  category: string
  tagline: string
  description: string
  problem: string
  approach: string
  technologies: string[]
  status: 'In Development' | 'Completed' | 'Internal Project'
  features: string[]
  architecture: {
    frontend: string
    backend: string
    database: string
    infrastructure: string
  }
  metrics: { label: string; value: string }[]
  color: string
}

export const projects: Project[] = [
  {
    id: 'crm-sales',
    title: 'CRM & Sales Management System',
    category: 'Business Software',
    tagline: 'High-throughput sales pipeline and customer telemetry platform',
    description: 'A modular, real-time CRM platform built to orchestrate sales leads, client interactions, deal pipelines, and automated follow-ups without the bloat of legacy enterprise suites.',
    problem: 'Fast-moving SMBs and agencies lose prospective revenue through disconnected spreadsheets, manual task management, and opaque communication logs.',
    approach: 'Engineered an event-driven architecture with customizable pipeline stages, automated reminders via queue workers, and role-based client contact histories.',
    technologies: ['React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    status: 'In Development',
    features: [
      'Visual Kanban Deal Pipelines',
      'Automated Lead Qualification Triggers',
      'Unified Customer Interaction Timeline',
      'Real-Time Revenue & Conversion Analytics',
      'Granular Role-Based Access Control (RBAC)'
    ],
    architecture: {
      frontend: 'React with optimistic UI updates and state management via React Query',
      backend: 'Node.js microservices with Express and WebSocket real-time alerts',
      database: 'PostgreSQL partitioned tables with Redis pub/sub caching',
      infrastructure: 'Docker containers orchestrated with automated CI/CD pipelines'
    },
    metrics: [
      { label: 'Query Latency', value: '< 25ms' },
      { label: 'Pipeline Capacity', value: '50k+ Leads' },
      { label: 'Uptime Benchmark', value: '99.9%' }
    ],
    color: '#F47716',
  },
  {
    id: 'employee-admin',
    title: 'Employee Administration & HR Portal',
    category: 'HR Management',
    tagline: 'Automated workforce telemetry, payroll, and compliance management',
    description: 'A centralized human capital management system designed to coordinate attendance, paid leave workflows, document verification, and payroll calculation.',
    problem: 'Decentralized HR records lead to payroll discrepancies, delayed leave approvals, and non-compliance with statutory regulations.',
    approach: 'Designed a normalized relational schema with automated audit logging, integrated time-clock tracking, and deterministic payroll algorithms.',
    technologies: ['React', 'Python', 'Django REST', 'PostgreSQL', 'Docker', 'Celery'],
    status: 'In Development',
    features: [
      'Biometric and Geofenced Attendance Feeds',
      'Multi-Tier Approval Hierarchies for Leave',
      'Automated Tax Deduction & Payslip Generation',
      'Statutory Compliance & Secure Document Vault',
      'Performance Review & Appraisal Tracking'
    ],
    architecture: {
      frontend: 'Type-safe React dashboard with responsive data grids and filter queries',
      backend: 'Django REST framework with Celery distributed task queuing for payroll jobs',
      database: 'PostgreSQL with strict foreign key constraints and temporal tables',
      infrastructure: 'Secure Linux host with encrypted volume backups and HTTPS HSTS'
    },
    metrics: [
      { label: 'Payroll Generation', value: '< 3 mins' },
      { label: 'Audit Trail', value: '100% Immutable' },
      { label: 'Role Segregation', value: '5 Granular Tiers' }
    ],
    color: '#3B82F6',
  },
  {
    id: 'virtual-tryon',
    title: 'Virtual Try-On WebGL Engine',
    category: 'Interactive Experience',
    tagline: 'Real-time computer vision and WebGL product visualization',
    description: 'A web-native augmented reality try-on experience allowing users to preview wearable products and accessories directly in modern mobile and desktop browsers.',
    problem: 'Online fashion and accessory merchants suffer return rates exceeding 30% due to customer sizing uncertainty and poor product visualization.',
    approach: 'Leveraged lightweight browser-side landmark detection in TensorFlow.js coupled with custom WebGL render passes for zero-install instant previews.',
    technologies: ['React', 'Three.js', 'TensorFlow.js', 'WebGL', 'FastAPI', 'Python'],
    status: 'In Development',
    features: [
      '60 FPS Real-Time Facial and Body Mesh Tracking',
      'Physically-Based Rendering (PBR) Materials',
      'Dynamic Occlusion and Ambient Lighting Compensation',
      'Ultra-Low Latency Inference (<15ms per frame)',
      'Cross-Device Mobile WebGL Optimization'
    ],
    architecture: {
      frontend: 'Three.js canvas embedded within React with WebGL shader pipelines',
      backend: 'Python FastAPI services for 3D model asset optimization and compression',
      database: 'Cloudflare R2 Object Storage for GLTF / GLB assets with edge CDN',
      infrastructure: 'Edge CDN caching for low-latency asset delivery worldwide'
    },
    metrics: [
      { label: 'Render Frame Rate', value: '60 FPS' },
      { label: 'Model Load Time', value: '< 1.2s' },
      { label: 'Inference Delay', value: '14ms' }
    ],
    color: '#8B5CF6',
  },
  {
    id: 'tourism-travel',
    title: 'Tourism & Regional Booking System',
    category: 'Travel Platform',
    tagline: 'Comprehensive itinerary builder and local experience orchestration',
    description: 'An integrated booking, local guide management, and travel itinerary system engineered specifically to showcase travel experiences across Kanyakumari and Tamil Nadu.',
    problem: 'Regional travel operators lack modern digital booking engines, forcing travelers into fragmented phone bookings and manual payment reconciliations.',
    approach: 'Created an interactive map-first discovery UI backed by real-time slot scheduling, automated SMS/email booking passes, and digital payment gateways.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Mapbox GL', 'Razorpay', 'Tailwind CSS'],
    status: 'In Development',
    features: [
      'Interactive Geospatial Itinerary Builder',
      'Instant Booking Slot Availability Verification',
      'Automated Ticket & Itinerary Pass Generation (PDF / Wallet)',
      'Regional Guide Allocation & Review Dispatch',
      'Integrated Multi-Currency & UPI Payment Workflows'
    ],
    architecture: {
      frontend: 'Mapbox GL integrated with React for hardware-accelerated map rendering',
      backend: 'Node.js event handlers for booking state machines and payment webhooks',
      database: 'MongoDB geospatial indexes for proximity and regional search',
      infrastructure: 'Serverless webhook ingestion and auto-scaling API containers'
    },
    metrics: [
      { label: 'Map Tile Latency', value: '< 50ms' },
      { label: 'Checkout Duration', value: '< 45s' },
      { label: 'Instant Pass Delivery', value: 'Sub-second' }
    ],
    color: '#10B981',
  },
  {
    id: 'billing-management',
    title: 'Billing & GST Financial Engine',
    category: 'Financial Software',
    tagline: 'Automated invoicing, tax ledgering, and financial reporting',
    description: 'A compliant, precision billing and business management platform designed for freelancers, technical contractors, and growing Indian enterprises.',
    problem: 'Complex GST taxation structures and manual invoicing lead to costly filing errors, late receivables, and chaotic fiscal tracking.',
    approach: 'Engineered an automated tax computation pipeline with recurring invoicing rules, ledger reconciliation, and instant PDF invoice dispatching.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'PDFKit', 'Chart.js'],
    status: 'In Development',
    features: [
      'Automated CGST/SGST/IGST Rule Engine',
      'Customizable Professional Invoice Templates',
      'Payment Tracking with Aging Accounts Receivable Alerts',
      'One-Click Financial Ledger Export (Excel, CSV, PDF)',
      'Secure Client Portal for Invoice Self-Service'
    ],
    architecture: {
      frontend: 'React with strict TypeScript interfaces for deterministic financial inputs',
      backend: 'Node.js microservice generating digitally stamped PDF records',
      database: 'PostgreSQL ACID transactions ensuring zero rounding or calculation drift',
      infrastructure: 'Encrypted storage with daily off-site database snapshots'
    },
    metrics: [
      { label: 'Calculation Precision', value: '100% Deterministic' },
      { label: 'PDF Generation Speed', value: '250ms' },
      { label: 'Tax Rule Coverage', value: 'GST v2.0' }
    ],
    color: '#F59E0B',
  },
]

export interface ServiceDetail {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  deliverables: string[]
  technologies: string[]
  architectureHighlights: string[]
  faqs: { question: string; answer: string }[]
  icon: string
}

export const detailedServices: Record<string, ServiceDetail> = {
  'web-development': {
    slug: 'web-development',
    title: 'Custom Web Development Services',
    shortTitle: 'Web Development',
    tagline: 'High-speed, scalable web applications built for reliability and search excellence.',
    description: 'We build responsive, production-ready web applications from the ground up using modern TypeScript, React, Vite, and Next.js. Every interface is designed with architectural discipline—prioritizing sub-second loading speeds, semantic accessibility, and clean component isolation.',
    deliverables: [
      'Single-Page Applications (SPA) and Server-Side Rendered (SSR) architectures',
      'Performance-first responsive layouts across desktop, tablet, and mobile',
      'Modular UI design systems built with clean CSS Modules or Tailwind CSS',
      'Full Core Web Vitals optimization (LCP < 2.5s, INP < 200ms, CLS < 0.1)',
      'Enterprise headless CMS integration (Strapi, Sanity, Contentful)',
      'Interactive 3D WebGL data visualizations and animations'
    ],
    technologies: ['React 18', 'TypeScript', 'Vite', 'Next.js', 'Three.js', 'GSAP', 'HTML5 / CSS3'],
    architectureHighlights: [
      'Component-Driven Architecture with low coupling and strict prop contracts',
      'Client-side and Edge caching strategies for ultra-fast page transitions',
      'Automated Lighthouse CI pipelines to prevent performance regression'
    ],
    faqs: [
      {
        question: 'Why choose custom React web development over template builders like WordPress?',
        answer: 'Custom React web applications provide unmatched execution speed, total security control without vulnerable third-party plugins, custom business workflows, and scalable architectures that grow seamlessly with your company.'
      },
      {
        question: 'Do you ensure websites comply with Google Core Web Vitals?',
        answer: 'Yes. Every project is audited for LCP, INP, and CLS. We employ aggressive asset optimization, code splitting, font sub-setting, and deferred loading to ensure maximum search engine performance.'
      },
      {
        question: 'Where is your web development team located?',
        answer: 'Our core development team is based in Kanyakumari, Tamil Nadu, India, offering direct engineering collaboration to clients across India and globally.'
      }
    ],
    icon: 'Globe'
  },
  'software-development': {
    slug: 'software-development',
    title: 'Full-Stack Software Development',
    shortTitle: 'Software Development',
    tagline: 'End-to-end digital systems engineered for long-term operational resilience.',
    description: 'From system architecture to relational database design and intuitive client interfaces, we engineer full-stack software systems that power real business operations. We build software with clear domain boundaries, robust error recovery, and maintainable codebases.',
    deliverables: [
      'Full-lifecycle enterprise software engineering and architecture design',
      'Scalable client-server distributed application models',
      'Robust domain-driven relational schemas and data access layers',
      'Multi-tenant cloud configurations and automated deployments',
      'Automated integration, unit, and end-to-end testing suites',
      'Legacy system refactoring, modularization, and modernization'
    ],
    technologies: ['React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker', 'Linux'],
    architectureHighlights: [
      'Clean Architecture / Hexagonal Architecture principles isolating business logic',
      'Automated CI/CD workflows testing every commit prior to production rollout',
      'Containerized execution environments ensuring 100% parity across dev and prod'
    ],
    faqs: [
      {
        question: 'How do you structure complex full-stack software projects?',
        answer: 'We divide systems into isolated presentation, API, domain service, and persistence layers. This separation of concerns guarantees that changes in the database or UI do not cause cascading failures across the core business logic.'
      },
      {
        question: 'Do you provide maintenance and ongoing SLA support?',
        answer: 'Yes. We provide contracted engineering maintenance, security patch updates, server health monitoring, and performance scaling as your system grows.'
      }
    ],
    icon: 'Layers'
  },
  'python-development': {
    slug: 'python-development',
    title: 'Python Backend & API Engineering',
    shortTitle: 'Python Development',
    tagline: 'High-performance microservices, REST/GraphQL APIs, and automated data pipelines.',
    description: 'Python is a cornerstone of our backend engineering practice. We leverage FastAPI and Django to construct type-safe asynchronous web services, data processing pipelines, and integration hubs capable of handling intensive computation with predictable memory profiles.',
    deliverables: [
      'High-throughput asynchronous RESTful and GraphQL APIs with FastAPI',
      'Enterprise-grade Django applications with secure ORM patterns',
      'Distributed task queues and scheduled workers using Celery and Redis',
      'Custom data ETL pipelines and document transformation engines',
      'Secure third-party API integration (Payment, Communications, Logistics)',
      'Automated database migrations, indexing, and query tuning'
    ],
    technologies: ['Python 3.12+', 'FastAPI', 'Django REST', 'Celery', 'Redis', 'PostgreSQL', 'Pydantic'],
    architectureHighlights: [
      'Strict schema validation using Pydantic models for bulletproof input hygiene',
      'AsyncIO concurrency patterns for non-blocking I/O operations',
      'Automated OpenAPI documentation generation with interactive API exploration'
    ],
    faqs: [
      {
        question: 'When should our business choose FastAPI over Django?',
        answer: 'FastAPI is optimal for high-performance microservices, real-time data streaming, and asynchronous API hubs requiring lightweight footprint and high throughput. Django is suited for rich administrative portals, relational data modeling, and out-of-the-box authentication hierarchies.'
      },
      {
        question: 'How do you safeguard Python backends against security threats?',
        answer: 'We enforce parameterized queries to eliminate SQL injection, implement rate limiting with Redis token buckets, apply strict CORS policies, and utilize Pydantic schemas to validate and sanitize every payload.'
      }
    ],
    icon: 'Server'
  },
  'crm-development': {
    slug: 'crm-development',
    title: 'Custom CRM Software Development',
    shortTitle: 'CRM Development',
    tagline: 'Tailored customer relationship platforms that mirror your actual sales operations.',
    description: 'Standard enterprise CRMs force businesses into rigid, bloated workflows while charging punitive per-user monthly subscriptions. We architect custom CRM systems designed specifically around your customer lifecycle, pipeline dynamics, and communication channels.',
    deliverables: [
      'Bespoke visual lead and opportunity pipeline management interfaces',
      'Automated client follow-up sequences and internal task delegation',
      'Unified customer communication history (Email, Calls, WhatsApp, Notes)',
      'Custom revenue forecasting, KPI reporting, and team velocity dashboards',
      'Granular role-based permission sets protecting confidential account data',
      'Seamless integration with accounting, invoicing, and messaging systems'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'Chart.js'],
    architectureHighlights: [
      'Event-driven audit logging capturing every stage change and user action',
      'WebSocket feeds providing instantaneous multi-user pipeline synchronization',
      'Optimized indexed queries ensuring dashboard loading in under 100 milliseconds'
    ],
    faqs: [
      {
        question: 'How does a custom CRM save money compared to Salesforce or HubSpot?',
        answer: 'A custom CRM eliminates recurring per-seat subscription fees, allows infinite user accounts, avoids costly add-on charges for custom fields, and focuses strictly on features your team actually uses without unnecessary complexity.'
      },
      {
        question: 'Can you migrate our existing customer data from spreadsheets?',
        answer: 'Yes. We build custom ETL migration scripts to validate, clean, deduplicate, and import your existing contacts, deal history, and notes with zero data loss.'
      }
    ],
    icon: 'BarChart3'
  },
  'business-solutions': {
    slug: 'business-solutions',
    title: 'Custom Business Software Solutions',
    shortTitle: 'Business Solutions',
    tagline: 'Precision workflow automation, ERP tools, and operational digital systems.',
    description: 'We engineer dedicated internal tools and business software systems that replace fragile spreadsheets and disjointed paper procedures. From inventory administration to automated invoicing and staff management, we convert business bottlenecks into efficient software.',
    deliverables: [
      'Custom ERP systems tailored to specific manufacturing or service operations',
      'Billing, invoicing, and GST compliance automation software',
      'Warehouse inventory, purchase order, and vendor management systems',
      'Staff administration, attendance tracking, and payroll computation modules',
      'Customer-facing self-service portals and order tracking interfaces',
      'Real-time executive analytics dashboards and automated executive reports'
    ],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    architectureHighlights: [
      'ACID transactional guarantees across all financial and inventory state transitions',
      'Exportable reporting engines supporting Excel, CSV, and PDF ledger outputs',
      'Responsive, touch-friendly UI for both office desktops and warehouse tablets'
    ],
    faqs: [
      {
        question: 'Can you build software for local businesses in Kanyakumari and Tamil Nadu?',
        answer: 'Yes. We partner directly with regional enterprises across Kanyakumari, Nagercoil, Tirunelveli, and Tamil Nadu, as well as pan-Indian and international clients seeking reliable digital systems.'
      },
      {
        question: 'Do you sign Non-Disclosure Agreements (NDAs)?',
        answer: 'Yes, we sign comprehensive NDAs before reviewing sensitive business workflows and intellectual property.'
      }
    ],
    icon: 'Database'
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Technical Digital Marketing & SEO Engineering',
    shortTitle: 'Digital Marketing & SEO',
    tagline: 'Technical organic search engineering, semantic SEO, and performance marketing systems.',
    description: 'Real digital visibility is grounded in technical excellence, semantic data structures, fast loading speeds, and verified content authority—not spam tactics. We provide technical search optimization, schema engineering, and conversion rate architecture.',
    deliverables: [
      'Technical SEO audits: site architecture, crawlability, and indexing resolution',
      'Structured Data implementation (JSON-LD Organization, LocalBusiness, Service, FAQ)',
      'Local SEO optimization for Kanyakumari, Tamil Nadu, and regional markets',
      'Core Web Vitals remediation (LCP, INP, CLS) to maximize organic search rank',
      'High-intent content strategy and semantic keyword mapping',
      'Conversion Rate Optimization (CRO) and high-converting landing page engineering',
      'Google Analytics 4 (GA4) and Google Search Console setup and tracking'
    ],
    technologies: ['Technical SEO', 'Schema.org JSON-LD', 'Google Search Console', 'GA4', 'Lighthouse', 'Semantics'],
    architectureHighlights: [
      '100% crawlable semantic HTML with proper heading hierarchy and alt tags',
      'Automated XML sitemap and canonical link generation preventing duplicate content',
      'High-performance static delivery ensuring Googlebot indexes pages instantly'
    ],
    faqs: [
      {
        question: 'What is the difference between traditional digital marketing and technical SEO?',
        answer: 'Technical SEO ensures that search engines can cleanly crawl, parse, understand, and render your website without script execution blocks or slow load times. Combined with rich JSON-LD schema, it gives search engines rich contextual knowledge about your business.'
      },
      {
        question: 'How do you target regional searches in Kanyakumari and Tamil Nadu?',
        answer: 'We configure verified LocalBusiness schema, regional geo-tags, clear contact coordinates, and dedicated service pages targeting genuine search intent for software development in southern Tamil Nadu.'
      }
    ],
    icon: 'TrendingUp'
  }
}

export const teamMembers = [
  {
    name: 'Anish A.',
    role: 'Lead Architect & Founder',
    focus: 'Full-Stack Engineering & System Architecture',
    bio: 'Software engineer specializing in high-performance React applications, distributed Python services, and precision database design.',
    location: 'Kanyakumari, Tamil Nadu',
    skills: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Architecture']
  },
  {
    name: 'GRIOT Engineering Core',
    role: 'Technical Development Team',
    focus: 'Frontend Engineering, Backend APIs & Cloud Deployment',
    bio: 'An agile team of dedicated software craftsmen committed to writing maintainable, tested, and reliable business software.',
    location: 'Kanyakumari, Tamil Nadu',
    skills: ['Node.js', 'Three.js', 'Django', 'Docker', 'UI/UX Systems', 'DevOps']
  }
]

export const openPositions = [
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Developer (React + Node / Python)',
    type: 'Full-Time / Contract',
    location: 'Kanyakumari (Hybrid / Remote)',
    department: 'Software Engineering',
    description: 'We are seeking an ambitious software engineer proficient in modern React, TypeScript, and Python or Node.js to engineer client business applications.',
    requirements: [
      'Proficiency in React, TypeScript, and modern CSS architectures',
      'Experience building APIs with Node.js (Express/Fastify) or Python (FastAPI/Django)',
      'Understanding of relational database modeling (PostgreSQL)',
      'Clean coding practices and comfort with Git version control'
    ]
  },
  {
    id: 'frontend-ui-dev',
    title: 'Creative Frontend & Three.js Engineer',
    type: 'Project-Based / Freelance',
    location: 'Remote / Kanyakumari',
    department: 'Creative Technology',
    description: 'Help us craft world-class interactive web experiences utilizing Three.js, React Three Fiber, WebGL shaders, and GSAP motion choreography.',
    requirements: [
      'Demonstrated experience with Three.js, R3F, and WebGL rendering fundamentals',
      'Expertise in smooth animation choreography (GSAP, Framer Motion)',
      'Strong eye for typography, glassmorphism, and performance optimization'
    ]
  }
]

export const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    subItems: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Software Development', href: '/services/software-development' },
      { label: 'Python Development', href: '/services/python-development' },
      { label: 'CRM Development', href: '/services/crm-development' },
      { label: 'Business Solutions', href: '/services/business-solutions' },
      { label: 'Digital Marketing & SEO', href: '/services/digital-marketing' },
    ]
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]


export interface Service {
  id: string
  title: string
  shortTitle: string
  description: string
  details: string[]
  technologies: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Custom Web Development',
    shortTitle: 'Web Development',
    description: 'Responsive, performant websites and web applications built with modern frameworks and clean architecture.',
    details: [
      'Single-page and multi-page applications',
      'Progressive Web Apps (PWA)',
      'Interactive data visualizations',
      'Content management integrations',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind'],
    icon: 'Globe',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Application Development',
    shortTitle: 'Full-Stack Apps',
    description: 'End-to-end application development from database design to polished user interfaces.',
    details: [
      'Modular application architecture',
      'Real-time data synchronization',
      'Role-based access control',
      'Scalable deployment configurations',
    ],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
    icon: 'Layers',
  },
  {
    id: 'backend',
    title: 'Backend & API Engineering',
    shortTitle: 'Backend & APIs',
    description: 'Reliable server-side systems, RESTful APIs, and data processing pipelines.',
    details: [
      'RESTful and GraphQL API design',
      'Authentication and authorization systems',
      'Data processing and transformation',
      'Third-party service integrations',
    ],
    technologies: ['Node.js', 'Python', 'FastAPI', 'Django', 'Redis'],
    icon: 'Server',
  },
  {
    id: 'crm',
    title: 'CRM & Business Management Software',
    shortTitle: 'Business Software',
    description: 'Custom business management tools tailored to specific operational workflows.',
    details: [
      'Sales pipeline management',
      'Client relationship tracking',
      'Automated reporting and analytics',
      'Workflow automation',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js'],
    icon: 'BarChart3',
  },
  {
    id: 'database',
    title: 'Database Design & Integration',
    shortTitle: 'Database Design',
    description: 'Structured data modeling, migration strategies, and database performance optimization.',
    details: [
      'Schema design and normalization',
      'Data migration and ETL pipelines',
      'Query optimization',
      'Backup and recovery planning',
    ],
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Prisma'],
    icon: 'Database',
  },
  {
    id: 'automation',
    title: 'Automation & Technical Maintenance',
    shortTitle: 'Automation',
    description: 'Automated testing, deployment pipelines, monitoring, and ongoing system maintenance.',
    details: [
      'CI/CD pipeline configuration',
      'Automated testing frameworks',
      'System monitoring and alerting',
      'Scheduled maintenance and updates',
    ],
    technologies: ['GitHub Actions', 'Docker', 'Jest', 'Playwright', 'Linux'],
    icon: 'Cog',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand requirements and business objectives.',
    details: 'We begin by thoroughly understanding your business context, user needs, technical constraints, and project goals. This phase establishes the foundation for every decision that follows.',
  },
  {
    number: '02',
    title: 'ARCHITECT',
    description: 'Plan the system, data model, integrations, and scope.',
    details: 'We design the system architecture, define data models, plan integrations, and establish clear scope. Technical decisions are documented and validated before development begins.',
  },
  {
    number: '03',
    title: 'ENGINEER',
    description: 'Develop, test, review, and refine the application.',
    details: 'We build the application iteratively with continuous testing and code review. Each component is developed to specification, tested in isolation, and integrated systematically.',
  },
  {
    number: '04',
    title: 'DELIVER',
    description: 'Deploy the agreed solution and provide contracted support.',
    details: 'We deploy the completed application, verify production performance, and provide the agreed level of post-launch support and maintenance.',
  },
]

export const navLinks = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
