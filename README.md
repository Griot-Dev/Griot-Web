# GRIOT TECH — Multi-Page Enterprise Architecture

A production-ready, multi-page technology company website for **GRIOT TECH**, an emerging software development startup in Kanyakumari, Tamil Nadu, India.

---

## 🏛 1. Multi-Page Architecture

Built with **React 18 + Vite + TypeScript + React Router v6** featuring route-level code splitting, comprehensive SEO schemas, and enterprise security configurations.

### Complete Route Map
| Route | Page Component | Focus / Technical Description |
|---|---|---|
| `/` | `HomePage` | Full-screen interactive 3D hero, system layers, verified services, process, contact teaser |
| `/about` | `AboutPage` | Origin in Kanyakumari, engineering philosophy, 3 core architecture pillars |
| `/services` | `ServicesDirectoryPage` | Complete catalog of verified digital engineering capabilities |
| `/services/web-development` | `ServiceDetailPage` | React, Next.js, PWAs, WebGL, sub-second Core Web Vitals |
| `/services/software-development` | `ServiceDetailPage` | Full-stack software engineering, distributed systems, clean architecture |
| `/services/python-development` | `ServiceDetailPage` | Python FastAPI, Django REST, Celery, async task pipelines |
| `/services/crm-development` | `ServiceDetailPage` | Custom sales pipelines, multi-tenant RBAC, real-time WebSockets |
| `/services/business-solutions` | `ServiceDetailPage` | Internal workflow automation, ERP tooling, GST ledger engines |
| `/services/digital-marketing` | `ServiceDetailPage` | Semantic SEO, schema engineering, Core Web Vitals, organic search |
| `/projects` | `ProjectsPage` | Portfolio archive of working systems and client case studies |
| `/projects/:slug` | `ProjectDetailPage` | Detailed system blueprints (`crm-sales`, `employee-admin`, `virtual-tryon`, etc.) |
| `/technologies` | `TechnologiesPage` | Complete engineering stack breakdown, runtime guarantees, QA metrics |
| `/team` | `TeamPage` | Direct developer access model, engineering leadership, studio culture |
| `/careers` | `CareersPage` | Open positions, hiring philosophy, engineering culture in Kanyakumari |
| `/contact` | `ContactPage` | Encrypted inquiry form, client communication topology, regional coordinates |
| `/privacy-policy` | `PrivacyPolicyPage` | Data protection, NDA governance, zero-third-party disclosure policy |
| `/terms-and-conditions` | `TermsPage` | Milestone acceptance, full client IP transfer, governing jurisdiction |
| `*` / `/404` | `NotFoundPage` | Interactive 404 recovery with direct navigation links |

---

## 🔒 2. Security Engineering & Hosting Headers

Configured across `public/_headers` (Cloudflare Pages / Netlify) and `vercel.json`:
- **Strict-Transport-Security (HSTS):** `max-age=31536000; includeSubDomains; preload`
- **Content-Security-Policy (CSP):** Strict allowlist for WebGL, Google Fonts, and Cloudflare Turnstile
- **X-Content-Type-Options:** `nosniff`
- **X-Frame-Options:** `DENY`
- **Referrer-Policy:** `strict-origin-when-cross-origin`
- **Permissions-Policy:** Microphones, cameras, and geolocation strictly disabled
- **SPA Fallback:** `public/_redirects` (`/* /index.html 200`) preventing 404s on refresh

---

## 🔍 3. Technical SEO & Schema.org Integration

- **Dynamic SEO Engine (`SEOHead.tsx`):** Injects unique title, meta description, canonical URL, OG, and Twitter card per route.
- **Structured Data (JSON-LD):**
  - `Organization` & `WebSite` schema on Home
  - `BreadcrumbList` schema on all subpages
  - `Service` schema on all service deep-dives
  - `SoftwareApplication` schema on project case studies
- **Search Engine Discovery:**
  - `public/sitemap.xml`: Complete index of 17 canonical URLs
  - `public/robots.txt`: Direct crawl directives and sitemap linkage

---

## 🚀 4. Quick Start & Build Verification

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Production build (Typecheck + Minification)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ⚙️ 5. Google Integrations

1. **Google Search Console (GSC):**
   - Submit `https://griottech.com/sitemap.xml` in Search Console under Sitemaps.
   - Use HTML tag or DNS TXT record for domain ownership verification.
2. **Google Analytics 4 (GA4):**
   - Supply `VITE_GA_MEASUREMENT_ID` in `.env` if event telemetry is desired.
3. **Google Business Profile (GBP):**
   - Ensure local business listing matches address: *Kanyakumari, Tamil Nadu — 629702, India*.
