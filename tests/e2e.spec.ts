import { test, expect } from '@playwright/test'

test.describe('GRIOT TECH — Core Architecture & Multi-Page Navigation', () => {
  test('Homepage renders hero, 3D canvas, navigation, and brand assets', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/GRIOT TECH/i)

    // Verify main brand heading
    const heading = page.locator('h1')
    await expect(heading).toContainText(/Complex Ideas/i)

    // Verify 3D canvas exists
    const canvas = page.locator('canvas').first()
    await expect(canvas).toBeVisible()

    // Verify navigation bar
    const navbar = page.locator('header, nav').first()
    await expect(navbar).toBeVisible()
  })

  test('All primary routes load successfully with unique SEO metadata', async ({ page }) => {
    test.setTimeout(90000)
    const routes = [
      { path: '/about', titlePattern: /About.*GRIOT TECH/i },
      { path: '/services', titlePattern: /Services.*GRIOT TECH/i },
      { path: '/services/web-development', titlePattern: /Web Development.*GRIOT TECH/i },
      { path: '/services/python-development', titlePattern: /Python.*GRIOT TECH/i },
      { path: '/projects', titlePattern: /Projects.*GRIOT TECH/i },
      { path: '/projects/crm-sales', titlePattern: /CRM.*GRIOT TECH/i },
      { path: '/technologies', titlePattern: /Technology Stack/i },
      { path: '/team', titlePattern: /Engineering Team/i },
      { path: '/careers', titlePattern: /Careers/i },
      { path: '/contact', titlePattern: /Contact.*GRIOT TECH/i },
      { path: '/privacy-policy', titlePattern: /Privacy Policy/i },
      { path: '/terms-and-conditions', titlePattern: /Terms.*Conditions.*GRIOT TECH/i },
      { path: '/cookie-policy', titlePattern: /Cookie Policy.*GRIOT TECH/i },
      { path: '/refund-policy', titlePattern: /Refund.*GRIOT TECH/i },
    ]

    for (const route of routes) {
      await page.goto(route.path)
      await expect(page).toHaveTitle(route.titlePattern)

      // Verify page hero or section heading is present
      const mainHeader = page.locator('h1, h2').first()
      await expect(mainHeader).toBeVisible()
    }
  })

  test('Custom 404 page renders for unknown routes with home recovery link', async ({ page }) => {
    await page.goto('/unknown-subsystem-route')
    await expect(page.getByRole('heading', { name: '404' })).toBeVisible()
    await expect(page.locator('text=Return Home')).toBeVisible()

    await page.click('text=Return Home')
    await expect(page).toHaveURL('/')
  })
})

test.describe('GRIOT TECH — Contact Form Security & Validation', () => {
  test('Submissions faster than 1.2s trigger bot rate-limiting protection', async ({ page }) => {
    await page.goto('/contact')
    // Click immediately without waiting
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('text=Submission rate limit triggered')).toBeVisible()
  })

  test('Displays inline validation errors on empty submission at normal pace', async ({ page }) => {
    await page.goto('/contact')
    // Wait past bot detection threshold
    await page.waitForTimeout(1400)

    const submitBtn = page.locator('button[type="submit"]')
    await submitBtn.scrollIntoViewIfNeeded()
    await submitBtn.click()

    // Expect required validation error messages
    await expect(page.locator('text=Full name is required')).toBeVisible()
    await expect(page.locator('text=Email address is required')).toBeVisible()
    await expect(page.locator('text=Please describe your system or requirements')).toBeVisible()
    await expect(page.locator('text=Consent is required to submit technical requirements')).toBeVisible()
  })

  test('Validates email format strictly', async ({ page }) => {
    await page.goto('/contact')
    await page.waitForTimeout(1400)

    const nameInput = page.locator('input#name')
    const emailInput = page.locator('input#email')
    const messageInput = page.locator('textarea#message')
    const submitBtn = page.locator('button[type="submit"]')

    await nameInput.fill('Dr. Alan Turing')
    await emailInput.fill('invalid-email-address')
    await messageInput.fill('Building a cryptanalysis verification pipeline.')

    await submitBtn.click()

    await expect(page.locator('text=Please provide a valid corporate or personal email address')).toBeVisible()
  })

  test('Enforces explicit consent checkbox before submission', async ({ page }) => {
    await page.goto('/contact')
    await page.waitForTimeout(1400)

    await page.locator('input#name').fill('Grace Hopper')
    await page.locator('input#email').fill('grace@navy.mil')
    await page.locator('textarea#message').fill('Compiler architecture optimization and syntax specification inquiry.')

    // Leave consent unchecked and submit
    await page.locator('button[type="submit"]').click()

    await expect(page.locator('text=Consent is required to submit technical requirements')).toBeVisible()
  })

  test('Completes successful submission with reference ticket generation', async ({ page }) => {
    await page.goto('/contact')
    await page.waitForTimeout(1400)

    await page.locator('input#name').fill('Sarah Connor')
    await page.locator('input#email').fill('sarah@cyberdyne.org')
    await page.locator('input#phone').fill('+1-555-0199')
    await page.locator('input#company').fill('Cyberdyne Systems')
    await page.locator('textarea#message').fill('Requesting an architectural security audit for our distributed cluster.')
    await page.locator('input#consent').check()

    await page.locator('button[type="submit"]').click()

    // Verify submission feedback and reference ticket
    await expect(page.locator('text=Reference Ticket:')).toBeVisible({ timeout: 10000 })
    await expect(page.locator('text=GT-REQ-')).toBeVisible()
  })
})

test.describe('GRIOT TECH — Cookie Consent & Accessibility Standards', () => {
  test('Displays cookie consent banner and persists preferences on acceptance', async ({ page }) => {
    await page.goto('/')
    // Cookie banner should appear after timeout
    const banner = page.locator('aside[aria-label="Cookie and Privacy Consent Preferences"]')
    await expect(banner).toBeVisible({ timeout: 5000 })
    await expect(banner.locator('text=ZERO AD TRACKERS')).toBeVisible()

    // Click Accept Preferences
    await banner.locator('button', { hasText: 'Accept Preferences' }).click()
    await expect(banner).not.toBeVisible()

    // Reload page to verify persistence in localStorage
    await page.reload()
    await page.waitForTimeout(1500)
    await expect(banner).not.toBeVisible()
  })

  test('Skip-to-content accessibility link exists and points to main landmark', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.locator('a.skip-link')
    await expect(skipLink).toBeAttached()
    await expect(skipLink).toHaveAttribute('href', '#main-content')
  })
})

test.describe('GRIOT TECH — 3D Spatial System Inspector & Engineering Stack', () => {
  test('Renders 3D Spatial Architecture runtime inspector on home page', async ({ page }) => {
    await page.goto('/')

    // Verify 3D inspector section is present
    const inspector = page.locator('text=Spatial System Architecture').first()
    await expect(inspector).toBeVisible()

    // Verify HUD mode toggles
    await expect(page.locator('button', { hasText: /Solid Mode|Wireframe/i }).first()).toBeVisible()
    await expect(page.locator('button', { hasText: /Vector State/i }).first()).toBeVisible()
    await expect(page.locator('text=Synced & Stable (60 FPS)').first()).toBeVisible()
  })

  test('Renders verified technical stack and disciplined workflow on /technologies', async ({ page }) => {
    await page.goto('/technologies')

    // Verify page title and stack categories
    await expect(page.locator('h1', { hasText: /Disciplined Engineering Stack/i })).toBeVisible()
    await expect(page.locator('text=Frontend Engineering')).toBeVisible()
    await expect(page.locator('text=Backend Services & APIs')).toBeVisible()
    await expect(page.locator('text=How We Write & Ship Code')).toBeVisible()
  })
})
