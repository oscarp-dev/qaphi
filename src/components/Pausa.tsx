import sakura from '../assets/photos/sakura.webp'
import { Reveal } from './Reveal'

export function Pausa() {
  return (
    <section className="bg-bone border-t border-ink/15 min-h-[58vh] flex flex-col items-center justify-center px-[8vw] py-28 md:py-32">
      <Reveal className="flex flex-col items-center">
        <img
          src={sakura}
          alt="Rama de sakura en flor"
          className="w-[min(80%,380px)] h-auto drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
          loading="lazy"
        />
        <p className="mt-9 font-script text-[clamp(32px,4.2vw,52px)] text-ink/70 max-w-[380px] text-center leading-relaxed">
          Un momento para nada más que el café.
        </p>
      </Reveal>
    </section>
  )
}
