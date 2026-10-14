import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { locations } from '../data/locations'
import { useCookieConsent } from '../context/CookieConsent'
import { Logo } from './Logo'
import { PHONE, PHONE_DISPLAY } from '../lib/contact'

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

export function Footer() {
  const { openPreferences } = useCookieConsent()

  return (
    <footer className="relative overflow-hidden border-t border-ink/15 bg-bone px-[6vw] pt-16 pb-8 text-ink">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] items-start gap-x-10 gap-y-8">
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
          <a href={`tel:${PHONE}`} className="text-[15px] text-ink hover:text-accent transition-colors">
            {PHONE_DISPLAY}
          </a>
        </AnimatedColumn>

        <AnimatedColumn delay={0.2} className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">HORARIO</span>
          <dl className="m-0 flex flex-col gap-2 text-[14px] leading-snug">
            <div>
              <dt className="text-ink/60">Plaza de Toros</dt>
              <dd className="m-0 whitespace-nowrap text-ink">Lun–Sáb 8–13h · Lun–Mié 17–20h</dd>
            </div>
            <div>
              <dt className="text-ink/60">San Blas</dt>
              <dd className="m-0 whitespace-nowrap text-ink">Lun–Sáb 8–13h · Lun–Jue 17–20h</dd>
            </div>
          </dl>
          <span className="text-[14px] text-ink/60">Domingos cerrado</span>
        </AnimatedColumn>

        <AnimatedColumn delay={0.3} className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">REDES</span>
          <a
            href="https://www.instagram.com/qaphi__coffee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] text-ink hover:text-accent transition-colors"
          >
            <InstagramIcon />
            Instagram — @qaphi__coffee
          </a>
        </AnimatedColumn>

        <AnimatedColumn delay={0.4} className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">ENLACES</span>
          <Link to="/carta" className="text-[15px] text-ink hover:text-accent transition-colors">
            La carta
          </Link>
          <a href="/#eventos" className="text-[15px] text-ink hover:text-accent transition-colors">
            Eventos
          </a>
          <a href="/#ubicaciones" className="text-[15px] text-ink hover:text-accent transition-colors">
            Ubicaciones
          </a>
        </AnimatedColumn>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-ink/10 pt-6">
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
