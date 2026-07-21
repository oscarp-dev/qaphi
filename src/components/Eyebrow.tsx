import type { ReactNode } from 'react'

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`font-medium text-[13px] text-umber tracking-[.12em] ${className}`}>{children}</span>
}
