import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
}

export default function Section({
  children,
  className = '',
  containerClassName = '',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}
