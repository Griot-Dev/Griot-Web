// GRIOT TECH — Home Page with Spatial 3D Experience, Video Reel, Tech Marquee, and Architecture
import { SEOHead } from '@/components/seo/SEOHead'
import { organizationSchema, websiteSchema, generateFAQSchema } from '@/components/seo/schemaGenerators'
import { Hero } from '@/sections/Hero'
import { TechMarquee } from '@/components/ui/TechMarquee'
import { TechVideoReel } from '@/components/ui/TechVideoReel'
import { Architecture } from '@/sections/Architecture'
import { Services } from '@/sections/Services'
import { SpatialShowcase } from '@/sections/SpatialShowcase'
import { Projects } from '@/sections/Projects'
import { Process } from '@/sections/Process'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'

const homePageFaqs = [
  {
    question: 'What services does GRIOT TECH provide in Kanyakumari, India?',
    answer:
      'GRIOT TECH specializes in custom React web applications, Python FastAPI backend APIs, bespoke CRM platforms, 3D WebGL interactive experiences, and full-stack enterprise software systems.',
  },
  {
    question: 'Where is GRIOT TECH headquartered?',
    answer:
      'GRIOT TECH is an independent software engineering studio based in Kanyakumari, Tamil Nadu, India, serving clients across Tamil Nadu, pan-India, and global technology enterprises.',
  },
  {
    question: 'How do I start a software project consultation with GRIOT TECH?',
    answer:
      'You can submit your system requirements through our secure consultation channel or email hello@griottech.com. An engineer will respond within 24 business hours with an architectural scoping estimate.',
  },
]

export function HomePage() {
  return (
    <>
      <SEOHead
        title="GRIOT TECH — Software Engineering Studio | Kanyakumari, India"
        description="Custom software development studio in Kanyakumari, Tamil Nadu, India. Specializing in scalable React web applications, Python FastAPI backends, bespoke CRM platforms, and full-stack digital architectures."
        canonicalUrl="https://griottech.com/"
        schema={[organizationSchema, websiteSchema, generateFAQSchema(homePageFaqs)]}
      />
      <div>
        <Hero />
        <TechMarquee />
        <Architecture />
        <Services />
        <SpatialShowcase />
        <TechVideoReel />
        <Projects />
        <Process />
        <About />
        <Contact />
      </div>
    </>
  )
}
