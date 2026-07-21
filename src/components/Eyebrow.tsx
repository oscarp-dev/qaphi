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
    <span className={`font-medium text-[13px] text-umber tracking-[.12em] ${className}`} style={style}>
      {children}
    </span>
  )
}
