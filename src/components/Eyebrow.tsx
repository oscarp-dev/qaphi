import type { CSSProperties, ReactNode } from 'react'

export function Eyebrow({
  children,
  className = '',
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <span className={`font-medium text-[13px] text-ink/60 tracking-[.12em] ${className}`} style={style}>
      <span className="mr-3 inline-block h-px w-7 align-middle bg-accent" aria-hidden="true" />
      {children}
    </span>
  )
}
