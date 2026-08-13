import quienesSomos from '../assets/photos/quienes-somos.webp'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'

export function QuienesSomos() {
  return (
    <section id="quienes" className="scroll-mt-24 bg-bone border-t border-ink/15 px-[6vw] py-24 md:py-[100px] flex flex-wrap items-center justify-center gap-16 md:gap-20">
      <Reveal className="relative flex-1 basis-[260px] max-w-[380px]">
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_45px_rgba(0,0,0,0.22)]">
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
          Un lugar para quedarnos un poco más.
        </h2>
        <p className="m-0 text-[17px] leading-[1.7] text-ink/70">
          En QAPHI creemos en disfrutar sin prisas. En un buen café, un brunch que apetece compartir y elaboraciones
          hechas con cariño, cuidando cada detalle.
        </p>
        <p className="m-0 text-[17px] leading-[1.7] text-ink/70">
          Creamos sabores y momentos para disfrutar, conversar y sentirse a gusto.
        </p>
        <p className="m-0 font-serif text-[19px] italic leading-[1.6] text-ink">
          Porque hay lugares a los que vienes a tomar algo… y lugares en los que apetece quedarse un poco más.
        </p>
      </Reveal>
    </section>
  )
}
