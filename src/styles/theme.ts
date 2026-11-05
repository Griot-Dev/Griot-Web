// GRIOT TECH — Design Tokens
// Centralized brand palette, typography, spacing, and animation constants.

export const colors = {
  // Brand core
  midnightNavy: '#101D35',
  deepBlue: '#081321',
  electricOrange: '#F47716',
  warmWhite: '#FAFAFC',
  mutedSteel: '#8C98AA',

  // Extended palette
  orangeLight: '#F69A4F',
  orangeDark: '#D4650F',
  navyLight: '#1A2D4D',
  navyMid: '#142440',
  steel50: 'rgba(140, 152, 170, 0.5)',
  steel30: 'rgba(140, 152, 170, 0.3)',
  steel10: 'rgba(140, 152, 170, 0.1)',

  // Glass surfaces
  glassDark: 'rgba(16, 29, 53, 0.6)',
  glassLight: 'rgba(250, 250, 252, 0.08)',
  glassWhite: 'rgba(255, 255, 255, 0.06)',
  glassBorder: 'rgba(255, 255, 255, 0.08)',
  glassBorderLight: 'rgba(255, 255, 255, 0.12)',

  // Functional
  success: '#34D399',
  error: '#EF4444',
  warning: '#FBBF24',
} as const

export const fonts = {
  heading: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const

export const fontSizes = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem',// 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem',  // 72px
  '8xl': '6rem',    // 96px
} as const

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
  section: '7rem',
  sectionMobile: '4rem',
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const zIndex = {
  behind: -1,
  base: 0,
  above: 10,
  nav: 100,
  modal: 1000,
  overlay: 2000,
} as const

export const transitions = {
  fast: '0.15s ease',
  base: '0.3s ease',
  slow: '0.5s ease',
  spring: '0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  smooth: '0.8s cubic-bezier(0.16, 1, 0.3, 1)',
} as const

export const glassMorphism = {
  dark: {
    background: 'rgba(16, 29, 53, 0.6)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
  },
  light: {
    background: 'rgba(250, 250, 252, 0.7)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
  },
  subtle: {
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
  },
} as const
