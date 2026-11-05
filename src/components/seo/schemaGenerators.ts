// Organization, LocalBusiness, WebSite & FAQ Schemas for GRIOT TECH
// Engineered to maximize Google Search rich snippets, Knowledge Graph, and local ranking.

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'GRIOT TECH',
  legalName: 'GRIOT TECH Software Engineering',
  alternateName: ['Griot Tech', 'GriotTech India'],
  url: 'https://griottech.com',
  logo: 'https://griottech.com/logo.svg',
  image: 'https://griottech.com/assets/images/studio-office.webp',
  description:
    'Custom software development studio based in Kanyakumari, Tamil Nadu, India. Specializing in scalable React web applications, Python FastAPI backends, bespoke CRM systems, and high-performance digital platforms.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Main Road',
    addressLocality: 'Kanyakumari',
    addressRegion: 'Tamil Nadu',
    postalCode: '629702',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.0883,
    longitude: 77.5385,
  },
  hasMap: 'https://maps.google.com/?q=Kanyakumari,Tamil+Nadu,India',
  telephone: '+91-94880-00000',
  email: 'hello@griottech.com',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  currenciesAccepted: 'INR, USD, EUR',
  paymentAccepted: 'Bank Transfer, Wire, Card',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'AdministrativeArea', name: 'Global' },
  ],
  knowsAbout: [
    'Custom Web Application Development',
    'Full-Stack Software Engineering',
    'Python FastAPI & Django REST APIs',
    'CRM & Sales Automation Systems',
    'Three.js WebGL 3D Visualization',
    'React and Next.js Architecture',
    'PostgreSQL Database Architecture',
    'Cloud Security and Performance Optimization',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@griottech.com',
    contactType: 'technical sales & customer engineering',
    availableLanguage: ['English', 'Tamil'],
  },
  sameAs: [
    'https://github.com/Griot-web',
    'https://linkedin.com/company/griottech',
    'https://twitter.com/griottech',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GRIOT TECH',
  url: 'https://griottech.com',
  description: 'Complex Ideas. Precisely Engineered. Software Development Studio in Kanyakumari, India.',
  publisher: {
    '@type': 'Organization',
    name: 'GRIOT TECH',
    logo: 'https://griottech.com/logo.svg',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://griottech.com/services?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateServiceSchema(service: {
  title: string
  description: string
  url: string
  category: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    category: service.category,
    provider: {
      '@type': 'ProfessionalService',
      name: 'GRIOT TECH',
      url: 'https://griottech.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kanyakumari',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India',
      },
    },
    url: service.url,
    description: service.description,
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
