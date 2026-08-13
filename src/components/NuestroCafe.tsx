import { motion, useReducedMotion } from 'framer-motion'
import cafeBolsas from '../assets/photos/cafe-bolsas.webp'
import cafeBolsa from '../assets/photos/cafe-bolsa.webp'
import cafeDetalle from '../assets/photos/cafe-detalle.webp'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'
import { RotatingBadge } from './RotatingBadge'

const ORIGINS = ['Colombia', 'Brasil', 'Honduras', 'Etiopía']

export function NuestroCafe() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="cafe"
      className="scroll-mt-24 bg-cream border-t border-ink/15 px-[6vw] py-24 md:py-[100px] flex flex-wrap-reverse items-center justify-center gap-16 md:gap-20"
    >
      <Reveal className="flex-1 basis-[280px] max-w-[380px] flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <Eyebrow>NUESTRO CAFÉ</Eyebrow>
          <h3 className="m-0 font-serif font-medium text-[clamp(32px,3.6vw,46px)] leading-[1.1] text-ink">
            Un tueste con
            <br />
            carácter <span className="italic text-accent">propio</span>.
          </h3>
          <p className="m-0 text-[17px] leading-[1.7] text-ink/70">
            Cada lote pasa por nuestras manos con calma: el tiempo que necesita para revelarse, el carácter que lo
            distingue y el respeto que merece la materia prima.
          </p>
          <p className="m-0 text-[17px] leading-[1.7] text-ink/70">
            Así conseguimos un tueste propio a partir de <span className="font-serif italic text-ink">4 orígenes</span> distintos,
            buscando el equilibrio y la complejidad que definen a nuestro blend en cada taza.
          </p>
        </div>

        <dl className="flex flex-col gap-6 pt-8 border-t border-ink/15">
          <div className="flex flex-col gap-2.5">
            <dt className="text-[11px] font-medium text-ink/70 tracking-[.12em] uppercase">Procedencia</dt>
            <dd className="m-0 flex flex-wrap gap-2">
              {ORIGINS.map((origin) => (
                <span
                  key={origin}
                  className="rounded-full border border-accent/20 bg-accent/[0.06] px-3.5 py-1.5 font-serif text-[15px] text-ink"
                >
                  {origin}
                </span>
              ))}
            </dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="text-[11px] font-medium text-ink/70 tracking-[.12em] uppercase">Notas de cata</dt>
            <dd className="m-0 font-serif text-[21px] italic leading-snug text-ink">
              Frutos rojos · Caramelo · Cuerpo balanceado
            </dd>
          </div>
        </dl>
      </Reveal>

      <Reveal delay={150} className="relative flex-none w-[min(48vw,440px)] max-w-full">
        <div className="relative aspect-[4/5] overflow-hidden border border-ink/15">
          <img
            src={cafeBolsas}
            alt="Bolsas de café Qaphi — The Original Coffee"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <motion.div
          initial={{ rotate: -4 }}
          whileHover={reduceMotion ? undefined : { rotate: 0, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="absolute -left-[9%] -bottom-[11%] w-[46%] aspect-[4/5] overflow-hidden border-[6px] border-cream shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
        >
          <img
            src={cafeDetalle}
            alt="Bolsas de café Qaphi y tazas en barra"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ rotate: 5 }}
          whileHover={reduceMotion ? undefined : { rotate: 0, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="hidden sm:block absolute -right-[7%] -top-[8%] w-[34%] aspect-square overflow-hidden border-[6px] border-cream shadow-[0_14px_30px_rgba(0,0,0,0.22)]"
        >
          <img
            src={cafeBolsa}
            alt="Bolsa de café Qaphi — The Original Coffee"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <RotatingBadge className="absolute -top-6 -left-6 w-24 h-24 md:w-28 md:h-28 z-10" />

        <span className="absolute -bottom-5 right-[4%] z-10 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-2 text-[12px] font-medium text-ink shadow-[0_10px_24px_rgba(0,0,0,0.15)]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Tueste artesanal
        </span>
      </Reveal>
    </section>
  )
}
