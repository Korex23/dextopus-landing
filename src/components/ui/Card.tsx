import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  bordered?: boolean
}

export default function Card({
  children,
  className = '',
  bordered = true,
}: CardProps) {
  return (
    <div
      className={`p-6 rounded-2xl bg-background-dark ${bordered ? 'border border-border' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
