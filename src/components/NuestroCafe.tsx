import cafeBolsa from '../assets/photos/cafe-bolsa.webp'
import cafeDetalle from '../assets/photos/cafe-detalle.webp'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'
import { RotatingBadge } from './RotatingBadge'

const SPECS = [
  { label: 'Procedencia', value: 'Colombia · Brasil · Honduras · Etiopía' },
  { label: 'Notas de cata', value: 'Frutos rojos · Caramelo · Cuerpo balanceado' },
]

export function NuestroCafe() {
  return (
    <section
      id="cafe"
      className="scroll-mt-24 bg-cream px-[6vw] py-24 md:py-[100px] flex flex-wrap-reverse items-center justify-center gap-16 md:gap-20"
    >
      <Reveal className="flex-1 basis-[280px] max-w-[380px] flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <Eyebrow>NUESTRO CAFÉ</Eyebrow>
          <h3 className="m-0 font-serif font-medium text-[clamp(30px,3.4vw,42px)] leading-[1.15] text-ink">
            Un tueste con carácter propio.
          </h3>
          <p className="m-0 text-[17px] leading-[1.7] text-umber">
            Cada lote pasa por nuestras manos con calma: el tiempo necesario para desarrollarse, la personalidad que
            lo distingue y el respeto que merece la materia prima.
          </p>
          <p className="m-0 text-[17px] leading-[1.7] text-umber">
            Así conseguimos un tueste propio a partir de 4 orígenes distintos, buscando el equilibrio y la
            complejidad que definen a nuestro blend en cada taza.
          </p>
        </div>

        <dl className="flex flex-col gap-5 pt-8 border-t border-umber/30">
          {SPECS.map((spec) => (
            <div key={spec.label} className="flex flex-col gap-1.5">
              <dt className="text-[11px] font-medium text-umber tracking-[.12em] uppercase">{spec.label}</dt>
              <dd className="m-0 font-serif text-[20px] text-ink">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={150} className="relative flex-none w-[min(58vw,600px)] max-w-full">
        <div className="relative aspect-square overflow-hidden border border-umber">
          <img
            src={cafeBolsa}
            alt="Bolsa de café Qaphi — The Original Coffee"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -right-[10%] -bottom-[14%] w-[52%] aspect-[4/5] overflow-hidden border-[6px] border-cream shadow-[0_18px_40px_rgba(59,38,29,0.25)]">
          <img
            src={cafeDetalle}
            alt="Bolsas de café Qaphi y tazas en barra"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <RotatingBadge className="absolute -top-6 -left-6 w-24 h-24 md:w-28 md:h-28 z-10" />
      </Reveal>
    </section>
  )
}
