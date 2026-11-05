// GRIOT TECH — Technical SEO Head Component
// Sets document title, meta descriptions, canonical URLs, OG/Twitter tags, and JSON-LD schemas dynamically.

import { useEffect } from 'react'

export interface SEOProps {
  title: string
  description: string
  canonicalUrl?: string
  ogType?: 'website' | 'article'
  ogImage?: string
  schema?: object | object[]
}

const DEFAULT_TITLE = 'GRIOT TECH — Complex Ideas. Precisely Engineered.'
const DEFAULT_DESC =
  'Custom software development and engineering studio in Kanyakumari, Tamil Nadu, India. Building scalable React web applications, Python APIs, bespoke CRM systems, and full-stack software platforms.'
const SITE_URL = 'https://griottech.com'
const DEFAULT_IMAGE = `${SITE_URL}/logo.svg`

export function SEOHead({
  title,
  description = DEFAULT_DESC,
  canonicalUrl,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title.includes('GRIOT TECH') ? title : `${title} | GRIOT TECH`
    document.title = formattedTitle

    // Helper to update or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let tag = document.querySelector(selector)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attrName, attrVal)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    // Standard meta
    setMetaTag('meta[name="description"]', 'name', 'description', description)

    // OpenGraph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', formattedTitle)
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType)
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage)
    if (canonicalUrl) {
      setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    }

    // Twitter
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', formattedTitle)
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
      }
      canonicalLink.setAttribute('href', canonicalUrl)
    } else if (canonicalLink) {
      canonicalLink.remove()
    }

    // JSON-LD Schema
    const existingSchemaScript = document.getElementById('jsonld-schema')
    if (existingSchemaScript) {
      existingSchemaScript.remove()
    }

    if (schema) {
      const script = document.createElement('script')
      script.id = 'jsonld-schema'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)
    }

    return () => {
      const s = document.getElementById('jsonld-schema')
      if (s) s.remove()
    }
  }, [title, description, canonicalUrl, ogType, ogImage, schema])

  return null
}
