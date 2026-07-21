import type { AnchorHTMLAttributes } from 'react'

interface PillButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'solid' | 'outline'
}

export function PillButton({ variant = 'solid', className = '', children, ...props }: PillButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs font-normal uppercase tracking-[.08em] ' +
    'transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
  const variants = {
    solid:
      'bg-accent border border-accent text-cream hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20',
    outline:
      'bg-transparent border border-ink text-ink hover:bg-ink hover:text-cream hover:-translate-y-0.5',
  }

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
