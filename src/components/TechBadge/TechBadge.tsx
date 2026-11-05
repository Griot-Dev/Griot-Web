// GRIOT TECH — Technology badge component
import React from 'react'
import styles from './TechBadge.module.css'

interface TechBadgeProps {
  label: string
  variant?: 'dark' | 'light'
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label, variant = 'dark' }) => {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {label}
    </span>
  )
}
