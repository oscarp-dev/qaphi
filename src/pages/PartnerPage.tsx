import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { Eyebrow } from '../components/Eyebrow'
import { useSeo } from '../hooks/useSeo'
import { WhatsAppIcon } from '../components/Eventos'
import { PARTNER_PHONE, whatsappUrl } from '../lib/contact'
import heroImg from '../assets/photos/cafe-bolsas.webp'

const INCLUDES = [
  { title: 'Uso de la marca QAPHI', description: 'Abre bajo nuestro nombre, imagen y estilo.' },
  { title: 'Recetas y fichas técnicas', description: 'Cada bebida y cada plato, tal y como los servimos.' },
  { title: 'Manuales y procedimientos', description: 'Cómo trabajamos día a día, paso a paso.' },
  { title: 'Proveedores seleccionados', description: 'Los mismos con los que trabajamos nosotros.' },
  { title: 'Formación profesional', description: 'Para ti y tu equipo, desde el primer café.' },
  { title: 'Asesoramiento inicial', description: 'Te acompañamos en la puesta en marcha.' },
]

export function PartnerPage() {
  useSeo({
    title: 'Qaphi Partner — Abre tu propia cafetería con nuestra marca',
    description:
      'Accede al modelo de cafetería Qaphi: marca, recetas, procedimientos, proveedores y formación. Sin royalties mensuales ni porcentajes sobre tu facturación.',
    path: '/partner',
  })

  const reduceMotion = useReducedMotion()

  return (
    <div className="pt-14 pb-24 md:pt-20 md:pb-32">
      <section className="relative px-[6vw]">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent/25 blur-[100px] sm:h-[420px] sm:w-[420px]"
          aria-hidden
        />
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <Link
            to="/mesa"
            className="text-[12px] font-medium uppercase tracking-[.1em] text-ink/50 transition-colors hover:text-accent"
          >
            ← Volver
          </Link>
          <h1 className="m-0 font-script text-[clamp(52px,9vw,96px)] leading-none text-accent">Qaphi Partner</h1>
          <p className="m-0 max-w-[620px] [text-wrap:balance] font-serif font-medium text-[clamp(26px,3.8vw,40px)] leading-[1.15] text-ink">
            Abre tu propia cafetería <span className="italic">con nuestra marca</span>.
          </p>
          <p className="m-0 max-w-[520px] text-[15px] leading-[1.7] text-ink/65 sm:text-[16px]">
            Te damos acceso a nuestro modelo de cafetería con recetas, procedimientos, proveedores y formación
            profesional.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 items-center gap-12 px-[6vw] md:mt-24 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16 lg:gap-20">
        <Reveal className="mx-auto w-full max-w-[440px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <img src={heroImg} alt="Bolsas de café de Qaphi" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>EL MODELO</Eyebrow>
            <h2 className="m-0 font-serif font-medium text-[clamp(32px,4vw,48px)] leading-[1.1] text-ink">
              ¿Qué <span className="italic text-accent">incluye</span>?
            </h2>
          </div>
          <ol className="m-0 grid list-none gap-0 p-0">
            {INCLUDES.map((item, i) => (
              <li key={item.title} className="flex items-start gap-5 border-b border-ink/10 py-4 last:border-b-0">
                <span className="w-7 shrink-0 pt-1 font-serif text-[15px] tabular-nums text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-serif text-[20px] font-medium leading-tight text-ink">{item.title}</span>
                  <span className="text-[14px] leading-relaxed text-ink/60">{item.description}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="px-[6vw]">
        <Reveal className="relative mx-auto mt-16 max-w-[1180px] overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center text-cream md:mt-24 md:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <p className="relative m-0 font-serif font-medium text-[clamp(30px,5vw,56px)] uppercase leading-[1.05] tracking-[.02em]">
            Sin royalties mensuales
          </p>
          <p className="relative m-0 mt-3 font-serif text-[clamp(20px,2.6vw,28px)] italic text-cream/75">
            Sin porcentajes sobre tu facturación.
          </p>
        </Reveal>
      </section>

      <Reveal className="mt-16 flex flex-col items-center gap-8 px-[6vw] text-center md:mt-24">
        <p className="m-0 font-script text-[clamp(34px,5vw,56px)] leading-tight text-ink">
          Tu negocio. Nuestra experiencia.
        </p>
        <span className="h-px w-16 bg-accent" aria-hidden />
        <div className="flex flex-col items-center gap-3">
          <span className="text-[12px] font-medium uppercase tracking-[.12em] text-ink/50">Solicita información</span>
          <motion.a
            href={whatsappUrl('¡Hola Qaphi! Me gustaría recibir información sobre Qaphi Partner.', PARTNER_PHONE)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[.08em] !text-cream shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <WhatsAppIcon />
            Escríbenos por WhatsApp
          </motion.a>
          <span className="text-[13px] text-ink/45">Te contamos todos los detalles sin compromiso.</span>
        </div>
      </Reveal>
    </div>
  )
}
