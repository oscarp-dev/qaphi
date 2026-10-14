import { motion, useReducedMotion } from 'framer-motion'
import quienesSomos from '../assets/photos/quienes-somos.webp'
import caramelLatte from '../assets/photos/coffee-1.webp'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'

const VALUES = [
  {
    label: 'Café de tueste propio',
    icon: (
      <path d="M12 3c-3.6 0-6 4-6 9s2.4 9 6 9 6-4 6-9-2.4-9-6-9Zm0 0c-1.8 3-1.8 15 0 18" />
    ),
  },
  {
    label: 'Brunch para compartir',
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4.5" />
      </>
    ),
  },
  {
    label: 'Hecho con cariño',
    icon: (
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
    ),
  },
]

export function QuienesSomos() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="quienes" className="scroll-mt-24 bg-bone border-t border-ink/15 px-[6vw] py-24 md:py-[100px] flex flex-wrap items-center justify-center gap-16 md:gap-24">
      <Reveal className="relative flex-1 basis-[260px] max-w-[380px] mr-[10%] md:mr-0">
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_45px_rgba(0,0,0,0.22)] group">
          <img
            src={quienesSomos}
            alt="Barra de Qaphi con café y bebidas de matcha"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <motion.div
          initial={{ rotate: 6 }}
          whileHover={reduceMotion ? undefined : { rotate: 0, scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="absolute -right-[12%] md:-right-[18%] -bottom-[8%] w-[44%] md:w-[48%] aspect-[3/4] overflow-hidden rounded-2xl border-[6px] border-cream shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
        >
          <img
            src={caramelLatte}
            alt="Caramel Ice Latte en vaso de Qaphi"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </Reveal>

      <Reveal delay={150} className="flex-1 basis-[320px] max-w-[520px] flex flex-col gap-6">
        <Eyebrow>QUIÉNES SOMOS</Eyebrow>
        <h2 className="m-0 font-serif font-medium text-[clamp(30px,3.6vw,42px)] leading-[1.2] text-ink">
          Un lugar para quedarnos <span className="italic text-accent">un poco más</span>.
        </h2>
        <p className="m-0 text-[17px] leading-[1.7] text-ink/70">
          En QAPHI creemos en disfrutar sin prisas. En un buen café, un brunch que apetece compartir y elaboraciones
          hechas con cariño, cuidando cada detalle.
        </p>
        <p className="m-0 text-[17px] leading-[1.7] text-ink/70">
          Creamos sabores y momentos para disfrutar, conversar y sentirse a gusto.
        </p>

        <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
          {VALUES.map((value) => (
            <li
              key={value.label}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-cream px-4 py-2 text-[14px] text-ink shadow-[0_6px_16px_rgba(0,0,0,0.05)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {value.icon}
              </svg>
              {value.label}
            </li>
          ))}
        </ul>

        <blockquote className="relative m-0 mt-2 border-l-2 border-accent pl-6">
          <span className="absolute -top-5 left-4 font-serif text-[64px] leading-none text-accent/25" aria-hidden="true">
            &ldquo;
          </span>
          <p className="relative m-0 font-serif text-[21px] italic leading-[1.55] text-ink">
            Porque hay lugares a los que vienes a tomar algo… y lugares en los que apetece quedarse un poco más.
          </p>
        </blockquote>
      </Reveal>
    </section>
  )
}
