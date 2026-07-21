import { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { PillButton } from './PillButton'

const NAV_LINKS = [
  { href: '#quienes', label: 'Nosotros' },
  { href: '#cafe', label: 'Café' },
  { href: '#carta', label: 'Carta' },
  { href: '#ubicaciones', label: 'Ubicaciones' },
]

export function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream/95 border-b border-ink/10 shadow-[0_8px_24px_rgba(59,38,29,0.08)]'
          : 'bg-cream/70 border-b border-transparent'
      }`}
    >
      <div
        className={`flex items-center justify-between gap-6 px-[6vw] transition-[padding] duration-300 ${
          scrolled ? 'py-3' : 'py-[18px]'
        }`}
      >
        <a href="#" className="flex items-baseline gap-0.5 font-serif text-[21px] font-medium tracking-wide text-ink">
          QAPHI<span className="text-accent text-2xl leading-none">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium uppercase tracking-[.06em] text-ink pb-1 border-b border-transparent hover:text-accent hover:border-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <PillButton href="#carta" className="hidden sm:inline-flex !py-2.5 !px-6 text-[12px]">
            Ver la carta
          </PillButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}
      >
        <div className="flex flex-col gap-1 px-[6vw] pb-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[15px] font-medium uppercase tracking-[.06em] text-ink border-b border-ink/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
