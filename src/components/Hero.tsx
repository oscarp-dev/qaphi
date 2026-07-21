import hero from '../assets/photos/tira-1.webp'
import { Eyebrow } from './Eyebrow'
import { PillButton } from './PillButton'

export function Hero() {
  return (
    <section className="relative grid grid-cols-1 md:min-h-screen md:grid-cols-[1fr_1.3fr] bg-cream">
      <div className="relative flex flex-col justify-center gap-8 md:gap-10 px-[6vw] py-20 md:py-[9vw] z-[1]">
        <Eyebrow>ALICANTE</Eyebrow>
        <h1 className="m-0 font-serif font-normal leading-[0.92] text-ink text-[clamp(56px,15vw,140px)] md:text-[clamp(64px,8.2vw,140px)]">
          QAPHI
        </h1>
        <p className="m-0 max-w-[340px] text-[clamp(20px,2.2vw,26px)] leading-relaxed text-umber">
          Coffee, brunch and sweets.
        </p>
        <PillButton href="#carta" className="self-start mt-2">
          Ver la carta
        </PillButton>
      </div>

      <div className="relative overflow-hidden min-h-[50vh] md:min-h-0">
        <img
          src={hero}
          alt="Mesa de brunch de Qaphi"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <svg
          viewBox="0 0 200 100"
          width="120"
          height="60"
          className="absolute bottom-7 right-7 overflow-visible hidden sm:block"
        >
          <path d="M4,84 C42,66 66,46 100,36 C130,28 158,16 196,6" stroke="#F5EBDD" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <g fill="#F5EBDD">
            <circle cx="30" cy="70" r="3" />
            <circle cx="58" cy="52" r="3.2" />
            <circle cx="86" cy="40" r="2.6" />
            <circle cx="118" cy="30" r="3" />
            <circle cx="150" cy="20" r="2.8" />
            <circle cx="182" cy="10" r="3.2" />
          </g>
        </svg>
      </div>

      <a
        href="#quienes"
        className="absolute left-6 bottom-7 z-[2] hidden sm:flex items-center gap-2.5 text-ink group"
      >
        <span className="text-[11px] uppercase tracking-[.12em]">Sigue bajando</span>
        <svg width="18" height="10" viewBox="0 0 18 10" className="transition-transform duration-300 group-hover:translate-y-1">
          <path d="M1,1 L9,9 L17,1" stroke="#3B261D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
