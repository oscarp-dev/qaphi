import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrolled } from '../hooks/useScrolled'
import { PillButton } from './PillButton'
import { Logo } from './Logo'

const NAV_LINKS = [
  { href: '/#quienes', label: 'Nosotros' },
  { href: '/#cafe', label: 'Café' },
  { href: '/carta', label: 'Carta', isRoute: true },
  { href: '/#ubicaciones', label: 'Ubicaciones' },
]

export function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled || open
            ? 'bg-cream/95 border-b border-ink/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
            : 'bg-cream/70 border-b border-transparent'
        }`}
      >
        <div
          className={`flex items-center justify-between gap-6 px-[6vw] transition-[padding] duration-300 ${
            scrolled ? 'py-3' : 'py-[18px]'
          }`}
        >
          <Link to="/" className="flex items-center">
            <Logo className="h-6 w-auto sm:h-7" />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[14px] font-medium uppercase tracking-[.06em] text-ink pb-1 border-b border-transparent hover:text-accent hover:border-accent transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14px] font-medium uppercase tracking-[.06em] text-ink pb-1 border-b border-transparent hover:text-accent hover:border-accent transition-colors"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-4">
            <PillButton to="/carta" className="hidden sm:inline-flex !py-2.5 !px-6 text-[12px]">
              Ver la carta
            </PillButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden relative z-[1] flex flex-col justify-center gap-[5px] w-9 h-9 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`block h-px w-6 bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`md:hidden fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) =>
          link.isRoute ? (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="py-3 font-serif text-[32px] font-medium text-ink hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 font-serif text-[32px] font-medium text-ink hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ),
        )}
        <PillButton to="/carta" onClick={() => setOpen(false)} className="mt-8">
          Ver la carta
        </PillButton>
      </nav>
    </>
  )
}
