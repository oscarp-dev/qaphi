import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { locations } from '../data/locations'
import { useCookieConsent } from '../context/CookieConsent'
import { Logo } from './Logo'

function AnimatedColumn({ delay = 0, className = '', children }: { delay?: number; className?: string; children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13.5 21v-7.5H16l.5-3H13.5V8.5c0-.87.24-1.46 1.48-1.46H16.5V4.36C16.19 4.32 15.14 4.23 13.92 4.23c-2.53 0-4.27 1.54-4.27 4.37V10.5H7v3h2.65V21h3.85Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Footer() {
  const { openPreferences } = useCookieConsent()

  return (
    <footer className="relative overflow-hidden border-t border-ink/15 bg-bone px-[6vw] pt-24 pb-10 text-ink">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] items-center gap-10">
        <AnimatedColumn className="flex flex-col gap-3.5">
          <Logo className="h-9 w-auto" />
          <span className="text-[14px] font-light text-ink/60 leading-relaxed">
            Plaza de Toros — {locations[0].address}
            <br />
            San Blas — {locations[1].address}
          </span>
        </AnimatedColumn>

        <AnimatedColumn delay={0.1} className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">CONTACTO</span>
          <a href="mailto:hola@qaphi.com" className="text-[16px] text-ink hover:text-accent transition-colors">
            hola@qaphi.com
          </a>
          <a href="tel:+34687288176" className="text-[16px] text-ink hover:text-accent transition-colors">
            +34 687 28 81 76
          </a>
        </AnimatedColumn>

        <AnimatedColumn delay={0.2} className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">HORARIO</span>
          <span className="text-[16px] text-ink">Lun–Vie 8:00–19:00</span>
          <span className="text-[16px] text-ink">Sáb–Dom 9:00–20:00</span>
        </AnimatedColumn>

        <AnimatedColumn delay={0.3} className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">REDES</span>
          <a
            href="https://www.instagram.com/qaphi__coffee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[16px] text-ink hover:text-accent transition-colors"
          >
            <InstagramIcon />
            Instagram — @qaphi__coffee
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-[16px] text-ink hover:text-accent transition-colors">
            <FacebookIcon />
            Facebook
          </a>
        </AnimatedColumn>

        <AnimatedColumn delay={0.4} className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">ENLACES</span>
          <Link to="/carta" className="text-[16px] text-ink hover:text-accent transition-colors">
            La carta
          </Link>
          <a href="/#ubicaciones" className="text-[16px] text-ink hover:text-accent transition-colors">
            Ubicaciones
          </a>
        </AnimatedColumn>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-ink/10 pt-8">
        <span className="text-[12px] font-light text-ink/50">
          © {new Date().getFullYear()} Qaphi. Todos los derechos reservados.
        </span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-light text-ink/50">
          <Link to="/aviso-legal" className="transition-colors hover:text-accent">
            Aviso Legal
          </Link>
          <Link to="/politica-privacidad" className="transition-colors hover:text-accent">
            Política de Privacidad
          </Link>
          <Link to="/politica-cookies" className="transition-colors hover:text-accent">
            Política de Cookies
          </Link>
          <button type="button" onClick={openPreferences} className="transition-colors hover:text-accent">
            Configurar cookies
          </button>
        </div>
      </div>
    </footer>
  )
}
