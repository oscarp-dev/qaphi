import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Logo } from '../components/Logo'
import { Reveal } from '../components/Reveal'
import { useSeo } from '../hooks/useSeo'
import cartaImg from '../assets/photos/destacado-matcha.webp'
import partnerImg from '../assets/photos/cafe-detalle.webp'

const OPTIONS = [
  {
    to: '/carta',
    eyebrow: 'Para ti, ahora',
    title: 'La Carta',
    description: 'Café, brunch, batidos y dulces caseros.',
    image: cartaImg,
    position: 'object-center',
  },
  {
    to: '/partner',
    eyebrow: 'Tu propia cafetería',
    title: 'Qaphi Partner',
    description: 'Abre tu cafetería con nuestra marca.',
    image: partnerImg,
    position: 'object-bottom',
  },
]

export function MesaPage() {
  useSeo({
    title: 'Bienvenido a Qaphi',
    description: 'Consulta nuestra carta o descubre Qaphi Partner para abrir tu propia cafetería con nuestra marca.',
    path: '/mesa',
  })

  const reduceMotion = useReducedMotion()

  return (
    <div className="relative px-[6vw] pt-12 pb-20 md:pt-20 md:pb-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent/25 blur-[100px]"
        aria-hidden
      />

      <Reveal className="flex flex-col items-center gap-4 text-center">
        <Logo className="h-14 w-auto sm:h-16" />
        <h1 className="m-0 mt-4 font-script text-[clamp(44px,8vw,72px)] leading-none text-accent">Bienvenido</h1>
        <p className="m-0 max-w-[420px] font-serif text-[clamp(20px,3vw,26px)] leading-[1.3] text-ink">
          ¿Qué te apetece descubrir hoy?
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-[880px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:mt-14">
        {OPTIONS.map((option, i) => (
          <Reveal key={option.to} delay={100 + i * 100}>
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <Link
                to={option.to}
                className="group relative flex aspect-[5/4] flex-col justify-end overflow-hidden rounded-3xl p-6 text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:aspect-[4/5] sm:p-8"
              >
                <img
                  src={option.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover ${option.position} transition-transform duration-700 group-hover:scale-105`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-transparent" aria-hidden />
                <span className="relative flex flex-col gap-1.5">
                  <span className="text-[12px] font-medium uppercase tracking-[.12em] text-cream/75">{option.eyebrow}</span>
                  <span className="font-serif text-[clamp(32px,5vw,42px)] font-medium leading-none">{option.title}</span>
                  <span className="text-[15px] leading-snug text-cream/80">{option.description}</span>
                  <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[.08em] text-cream">
                    Entrar
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </span>
                </span>
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
