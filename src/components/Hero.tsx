import hero from '../assets/photos/tira-1.webp'
import { Eyebrow } from './Eyebrow'
import { PillButton } from './PillButton'
import { useParallax } from '../hooks/useParallax'

export function Hero() {
  const parallaxRef = useParallax<HTMLImageElement>(0.15, 50)

  return (
    <section className="relative min-h-screen bg-cream md:grid md:grid-cols-[1fr_1.3fr]">
      <div className="absolute inset-0 overflow-hidden md:relative md:inset-auto md:order-2">
        <img
          ref={parallaxRef}
          src={hero}
          alt="Mesa de brunch de Qaphi"
          className="absolute -top-[50px] left-0 h-[calc(100%+100px)] w-full object-cover object-bottom will-change-transform"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent md:hidden" />
        <svg
          viewBox="0 0 200 100"
          width="120"
          height="60"
          className="absolute bottom-7 right-7 overflow-visible hidden md:block"
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

      <div className="relative z-[1] flex min-h-screen flex-col justify-end gap-6 px-[6vw] pb-16 pt-24 md:min-h-0 md:order-1 md:justify-center md:gap-10 md:py-[9vw]">
        <Eyebrow
          className="!text-cream [text-shadow:0_2px_16px_rgba(59,38,29,0.45)] md:!text-umber md:[text-shadow:none] animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: '0ms' }}
        >
          ALICANTE
        </Eyebrow>
        <h1
          className="m-0 font-serif font-normal leading-[0.92] text-cream text-[clamp(56px,15vw,140px)] [text-shadow:0_6px_24px_rgba(59,38,29,0.45)] md:text-ink md:text-[clamp(64px,8.2vw,140px)] md:[text-shadow:none] animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: '120ms' }}
        >
          QAPHI
        </h1>
        <p
          className="m-0 max-w-[340px] text-[clamp(20px,2.2vw,26px)] leading-relaxed text-cream/95 [text-shadow:0_2px_12px_rgba(59,38,29,0.4)] md:text-umber md:[text-shadow:none] animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: '260ms' }}
        >
          Coffee, brunch and sweets.
        </p>
        <PillButton
          href="#carta"
          className="self-start mt-2 animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: '400ms' }}
        >
          Ver la carta
        </PillButton>
      </div>
    </section>
  )
}
