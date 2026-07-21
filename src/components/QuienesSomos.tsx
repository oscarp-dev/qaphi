import quienesSomos from '../assets/photos/quienes-somos.webp'
import { Eyebrow } from './Eyebrow'
import { PillButton } from './PillButton'
import { Reveal } from './Reveal'

export function QuienesSomos() {
  return (
    <section id="quienes" className="scroll-mt-24 bg-tan px-[6vw] py-24 md:py-[100px] flex flex-wrap items-center justify-center gap-16 md:gap-20">
      <Reveal className="relative flex-1 basis-[260px] max-w-[380px]">
        <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] bg-cream" aria-hidden="true" />
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2rem] shadow-[0_24px_50px_rgba(59,38,29,0.28)]">
          <img
            src={quienesSomos}
            alt="Barra de Qaphi con café de especialidad y bebidas de matcha"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </Reveal>
      <Reveal delay={150} className="flex-1 basis-[320px] max-w-[520px] flex flex-col gap-6">
        <Eyebrow>QUIÉNES SOMOS</Eyebrow>
        <h2 className="m-0 font-serif font-medium text-[clamp(30px,3.6vw,42px)] leading-[1.2] text-ink">
          Un espacio pequeño, pensado para quedarse.
        </h2>
        <p className="m-0 text-[17px] leading-[1.7] text-umber">
          Nacimos de la obsesión por el detalle. Tostamos en pequeños lotes y cocinamos cada día con producto de
          temporada.
        </p>
        <p className="m-0 text-[17px] leading-[1.7] text-umber">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <PillButton href="#cafe" variant="outline" className="self-start mt-1.5">
          Sobre nosotros
        </PillButton>
      </Reveal>
    </section>
  )
}
