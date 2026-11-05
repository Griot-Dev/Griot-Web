// GRIOT TECH — Reusable button component with magnetic hover
import { useRef, useCallback, type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import styles from './Button.module.css'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined
  }

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const magnetRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    magnetRef.current = { x: dx * 4, y: dy * 4 }
    el.style.transform = `translate(${magnetRef.current.x}px, ${magnetRef.current.y}px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    magnetRef.current = { x: 0, y: 0 }
    el.style.transform = 'translate(0px, 0px)'
  }, [])

  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ')

  const sharedProps = {
    className: classNames,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  }

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        {...sharedProps}
        {...anchorRest}
      >
        <span className={styles.label}>{children}</span>
      </a>
    )
  }

  const buttonRest = rest as ButtonAsButton
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      {...sharedProps}
      {...buttonRest}
    >
      <span className={styles.label}>{children}</span>
    </button>
  )
}
