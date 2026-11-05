// GRIOT TECH — Technology badge component
import styles from './TechBadge.module.css'

interface TechBadgeProps {
  label: string
  variant?: 'dark' | 'light'
  dotColor?: string
}

export function TechBadge({ label, variant = 'dark', dotColor }: TechBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {dotColor && (
        <span
          className={styles.dot}
          style={{ backgroundColor: dotColor }}
          aria-hidden="true"
        />
      )}
      {label}
    </span>
  )
}
