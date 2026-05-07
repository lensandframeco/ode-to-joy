import { ReactNode } from 'react'

interface ContentSectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  background?: 'white' | 'gray'
  className?: string
  id?: string
}

export function ContentSection({
  title,
  subtitle,
  children,
  background = 'white',
  className = '',
  id,
}: ContentSectionProps) {
  const bgClass = background === 'gray' ? 'bg-neutral-50' : 'bg-white'

  return (
    <section id={id} className={`${bgClass} py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
