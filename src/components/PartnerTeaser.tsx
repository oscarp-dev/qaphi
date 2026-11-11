import { Eyebrow } from './Eyebrow'
import { PillButton } from './PillButton'
import { Reveal } from './Reveal'
import partnerImg from '../assets/photos/coffee-2.webp'

const HIGHLIGHTS = ['Marca QAPHI', 'Recetas', 'Proveedores', 'Formación']

export function PartnerTeaser() {
  return (
    <section id="partner" className="scroll-mt-24 bg-bone px-[6vw] py-24 md:py-[100px]">
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16 lg:gap-20">
        <Reveal className="mx-auto w-full max-w-[460px]">
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <img
              src={partnerImg}
              alt="Vaso de Qaphi frente al logo de la marca"
              className="absolute inset-0 h-full w-full object-cover object-[center_80%]"
              loading="lazy"
            />
            <span className="absolute top-5 left-5 rounded-full bg-cream/90 px-4 py-2 text-[11px] font-medium uppercase tracking-[.1em] text-ink backdrop-blur-sm">
              Sin royalties mensuales
            </span>
          </div>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-6">
          <Eyebrow>QAPHI PARTNER</Eyebrow>
          <h2 className="m-0 font-serif font-medium text-[clamp(32px,4vw,50px)] leading-[1.1] text-ink">
            Abre tu propia cafetería
            <br />
            <span className="italic text-accent">con nuestra marca</span>.
          </h2>
          <p className="m-0 max-w-[480px] text-[17px] leading-[1.7] text-ink/70">
            Te damos acceso a nuestro modelo de cafetería: recetas, procedimientos, proveedores y formación
            profesional. Sin porcentajes sobre tu facturación.
          </p>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h}
                className="rounded-full border border-accent/20 bg-accent/[0.06] px-3.5 py-1.5 font-serif text-[15px] text-ink"
              >
                {h}
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <PillButton to="/partner">Descubre Qaphi Partner</PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
