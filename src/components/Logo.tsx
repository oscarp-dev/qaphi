import type { CSSProperties } from 'react'
import logoUrl from '../assets/logo.svg'

export function Logo({ className, style }: { className?: string; style?: CSSProperties }) {
  return <img src={logoUrl} alt="Qaphi" className={className} style={style} />
}
