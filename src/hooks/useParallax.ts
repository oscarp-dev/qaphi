import { useEffect, useRef } from 'react'

export function useParallax<T extends HTMLElement>(factor = 0.25, maxOffset = 60) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false

    const update = () => {
      const rect = el.getBoundingClientRect()
      const raw = rect.top * factor
      const offset = Math.max(-maxOffset, Math.min(maxOffset, raw))
      el.style.transform = `translate3d(0, ${offset}px, 0)`
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [factor, maxOffset])

  return ref
}
