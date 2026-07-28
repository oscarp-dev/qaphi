import hero from '../assets/photos/hero-bg.webp'
import { Eyebrow } from './Eyebrow'
import { PillButton } from './PillButton'
import { Logo } from './Logo'
import { useParallax } from '../hooks/useParallax'

export function Hero() {
  const parallaxRef = useParallax<HTMLImageElement>(0.15, 20)

  return (
    <section className="relative h-[calc(100vh-72px)] bg-cream overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={parallaxRef}
          src={hero}
          alt="Mesa de brunch de Qaphi"
          className="absolute -top-[20px] left-0 h-[calc(100%+40px)] w-full object-cover object-top will-change-transform"
          loading="eager"
        />
        <div className="absolute inset-0 bg-cream/55" />
      </div>

      <div className="relative z-[1] flex flex-col items-center justify-center gap-6 px-[6vw] py-24 md:gap-10">
        <div className="flex flex-col items-center gap-4">
          <Eyebrow
            className="!text-ink/65 animate-fade-up motion-reduce:animate-none"
            style={{ animationDelay: '0ms' }}
          >
            ALICANTE
          </Eyebrow>
          <h1 className="m-0 leading-[0.92]">
            <Logo
              className="h-[clamp(72px,20vw,150px)] w-auto md:h-[clamp(56px,7.4vw,120px)] animate-fade-up motion-reduce:animate-none"
              style={{ animationDelay: '120ms' }}
            />
          </h1>
        </div>
        <div
          className="flex flex-wrap items-center justify-center gap-4 mt-2 animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: '260ms' }}
        >
          <PillButton href="#carta" variant="solid">
            Ver la carta
          </PillButton>
          <PillButton href="#ubicaciones" variant="glass">
            Ubicaciones
          </PillButton>
        </div>
      </div>
    </section>
  )
}
