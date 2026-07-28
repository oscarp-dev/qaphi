import { useEffect, useRef, useState } from 'react'
import { Logo } from './Logo'

const FILL_DURATION = 1400

export function Loader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const pct = Math.min(100, (elapsed / FILL_DURATION) * 100)
      setProgress(pct)
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let hideTimeout: ReturnType<typeof setTimeout> | undefined
    let cancelled = false

    const minTime = new Promise<void>((resolve) => setTimeout(resolve, 1700))
    const pageLoad =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>((resolve) => window.addEventListener('load', () => resolve(), { once: true }))

    Promise.all([minTime, pageLoad]).then(() => {
      if (cancelled) return
      setFading(true)
      hideTimeout = setTimeout(() => {
        setVisible(false)
        document.body.style.overflow = ''
      }, 600)
    })

    return () => {
      cancelled = true
      if (hideTimeout) clearTimeout(hideTimeout)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-cream transition-opacity ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transitionDuration: '600ms' }}
      role="status"
      aria-label="Cargando"
    >
      <div className="relative">
        <Logo className="h-20 sm:h-24 w-auto opacity-[0.14]" />
        <Logo
          className="absolute inset-0 h-20 sm:h-24 w-auto"
          style={{ clipPath: `inset(0 0 ${100 - progress}% 0)` }}
        />
      </div>

      <span className="text-[12px] font-medium uppercase tracking-[.2em] text-ink/50">
        {Math.round(progress)}%
      </span>
    </div>
  )
}
