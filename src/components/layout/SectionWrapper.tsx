// GRIOT TECH — Reusable section wrapper with variant backgrounds
import type { ReactNode } from 'react'

interface Props {
  id: string
  variant?: 'dark' | 'navy' | 'light'
  className?: string
  children: ReactNode
  noPadding?: boolean
}

export function SectionWrapper({
  id,
  variant = 'dark',
  className = '',
  children,
  noPadding = false,
}: Props) {
  const sectionClasses = [
    'section',
    `section--${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <section
      id={id}
      className={sectionClasses}
      style={noPadding ? { padding: 0 } : undefined}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
}
