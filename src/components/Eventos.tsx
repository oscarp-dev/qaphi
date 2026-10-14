import { useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { whatsappUrl } from '../lib/contact'
import { Reveal } from './Reveal'

const EVENT_TYPES: { id: string; label: string; description: string; icon: ReactNode }[] = [
  {
    id: 'cumpleanos',
    label: 'Cumpleaños',
    description: 'Celébralo arriba, con tu gente y algo rico en la mesa.',
    icon: (
      <>
        <path d="M5 21h14v-8H5v8Z" />
        <path d="M5 16c1.5 0 1.5-1.5 3.5-1.5S10 16 12 16s1.5-1.5 3.5-1.5S17.5 16 19 16" />
        <path d="M12 13V9" />
        <path d="M12 6.5c-.8-.6-.8-1.9 0-3 .8 1.1.8 2.4 0 3Z" />
      </>
    ),
  },
  {
    id: 'reuniones',
    label: 'Reuniones',
    description: 'Un espacio tranquilo para equipos, talleres o encuentros.',
    icon: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M3 20c0-3 2.2-5 5-5s5 2 5 5" />
        <path d="M13.5 15.3c.8-.2 1.6-.3 2.5-.3 2.8 0 5 2 5 5" />
      </>
    ),
  },
  {
    id: 'catering',
    label: 'Catering',
    description: 'Nuestro brunch, café y repostería para tu evento.',
    icon: (
      <>
        <path d="M3 18h18" />
        <path d="M5 18a7 7 0 0 1 14 0" />
        <path d="M12 9V7" />
        <path d="M10.5 7h3" />
      </>
    ),
  },
]

const LOCATIONS = ['Plaza de Toros', 'San Blas']

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}

export function Eventos() {
  const reduceMotion = useReducedMotion()
  const [type, setType] = useState(EVENT_TYPES[0].id)
  const [location, setLocation] = useState(LOCATIONS[0])
  const selected = EVENT_TYPES.find((t) => t.id === type) ?? EVENT_TYPES[0]

  const message = `¡Hola Qaphi! Me gustaría pedir información para reservar la planta de arriba de ${location} por la tarde para: ${selected.label.toLowerCase()}.`

  return (
    <section id="eventos" className="relative overflow-hidden scroll-mt-24 bg-ink px-[6vw] py-24 text-cream md:py-[100px]">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-[1180px] flex-wrap items-center gap-14 md:gap-20">
        <Reveal className="flex flex-1 basis-[320px] flex-col gap-6">
          <span className="font-medium text-[13px] tracking-[.12em] text-cream/60">
            <span className="mr-3 inline-block h-px w-7 align-middle bg-accent" aria-hidden="true" />
            EVENTOS
          </span>
          <h2 className="m-0 font-serif font-medium text-[clamp(32px,4vw,52px)] leading-[1.1]">
            Nuestra planta de arriba,
            <br />
            <span className="italic text-accent">para tus tardes</span>.
          </h2>
          <p className="m-0 max-w-[460px] text-[17px] leading-[1.7] text-cream/70">
            En los dos locales tenemos un espacio arriba que puedes reservar por las tardes para cumpleaños,
            reuniones o con nuestro catering. Cuéntanos qué tienes en mente y lo preparamos contigo.
          </p>
          <span className="font-script text-[clamp(28px,3vw,38px)] leading-none text-cream/80">
            Tu celebración, a nuestra manera.
          </span>
        </Reveal>

        <Reveal delay={150} className="flex flex-1 basis-[340px] flex-col gap-6">
          <div className="grid gap-3" role="radiogroup" aria-label="Tipo de evento">
            {EVENT_TYPES.map((t) => {
              const active = t.id === type
              return (
                <button
                  key={t.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setType(t.id)}
                  className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    active ? 'border-accent bg-accent/15' : 'border-cream/15 bg-cream/[0.03] hover:border-cream/35'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      active ? 'bg-accent text-cream' : 'bg-cream/10 text-cream/80'
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {t.icon}
                    </svg>
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-serif text-[22px] font-medium leading-tight">{t.label}</span>
                    <span className="text-[14px] leading-snug text-cream/60">{t.description}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[12px] font-medium uppercase tracking-[.12em] text-cream/50">Local</span>
            <div className="inline-flex rounded-full border border-cream/15 p-1" role="radiogroup" aria-label="Local">
              {LOCATIONS.map((l) => (
                <button
                  key={l}
                  type="button"
                  role="radio"
                  aria-checked={l === location}
                  onClick={() => setLocation(l)}
                  className={`rounded-full px-4 py-1.5 text-[13px] font-medium uppercase tracking-[.06em] transition-colors duration-300 ${
                    l === location ? 'bg-cream text-ink' : 'text-cream/60 hover:text-cream'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <motion.a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="inline-flex items-center justify-center gap-3 self-start rounded-full bg-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[.08em] !text-cream shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <WhatsAppIcon />
            Reservar por WhatsApp
          </motion.a>
          <span className="-mt-2 text-[13px] text-cream/45">Te respondemos con disponibilidad y precios.</span>
        </Reveal>
      </div>
    </section>
  )
}
