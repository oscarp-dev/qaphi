import type { CSSProperties } from 'react'
import logoUrl from '../assets/logo.svg'

export function Logo({
  className,
  style,
  alt = 'Qaphi',
}: {
  className?: string
  style?: CSSProperties
  alt?: string
}) {
  return <img src={logoUrl} alt={alt} className={className} style={style} />
}
