import { Link } from 'react-router-dom'
import { menu, type MenuItem } from '../data/menu'
import { Eyebrow } from './Eyebrow'
import { PillButton } from './PillButton'
import { Reveal } from './Reveal'
import { Carousel } from './Carousel'

const BESTSELLERS = menu
  .flatMap((category) => category.groups.flatMap((group) => group.items))
  .filter((item): item is MenuItem & { image: string } => item.tag === 'Más vendido' && Boolean(item.image))

const HERO = BESTSELLERS.find((item) => item.name === 'Qaphi Garden') ?? BESTSELLERS[0]
const REST = BESTSELLERS.filter((item) => item !== HERO)

function PhotoSpotlight({ item }: { item: MenuItem & { image: string } }) {
  return (
    <Link to="/carta" className="group relative block aspect-[4/5] overflow-hidden rounded-3xl">
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      {item.tag && (
        <span className="absolute top-5 left-5 rounded-full bg-accent px-4 py-1.5 text-[11px] font-medium uppercase tracking-[.08em] text-cream">
          {item.tag}
        </span>
      )}
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
        <span className="font-serif text-[22px] font-medium leading-tight text-cream">{item.name}</span>
        <span className="shrink-0 font-serif text-[15px] text-cream/90">{item.price}</span>
      </div>
    </Link>
  )
}

export function Destacados() {
  return (
    <section id="destacados" className="scroll-mt-24 bg-cream border-t border-ink/15 py-24 md:py-[100px]">
      <Eyebrow className="block mb-14 px-[6vw]">DESTACADOS DE LA CARTA</Eyebrow>

      <Reveal className="px-[6vw]">
        <Link to="/carta" className="group relative block aspect-[16/9] overflow-hidden rounded-3xl sm:aspect-[21/9]">
          <img
            src={HERO.image}
            alt={HERO.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
          {HERO.tag && (
            <span className="absolute top-5 left-5 rounded-full bg-accent px-4 py-1.5 text-[11px] font-medium uppercase tracking-[.08em] text-cream">
              {HERO.tag}
            </span>
          )}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <span className="font-serif text-[clamp(28px,3.4vw,44px)] font-medium leading-tight text-cream">
              {HERO.name}
            </span>
            <span className="inline-flex items-center gap-3 rounded-full bg-cream/95 px-5 py-2.5 text-ink">
              <span className="font-serif text-lg">{HERO.price}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-cream transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10 L10 2 M4 2 H10 V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </div>
        </Link>
      </Reveal>

      <Reveal delay={80} className="mt-5">
        <Carousel slideClassName="basis-[78%] sm:basis-[42%] lg:basis-[27%]">
          {REST.map((item) => (
            <PhotoSpotlight key={item.name} item={item} />
          ))}
        </Carousel>
      </Reveal>

      <Reveal delay={120} className="flex flex-col items-center gap-5 px-[6vw] pt-16 text-center">
        <p className="m-0 max-w-[420px] text-[15px] leading-relaxed text-ink/60">
          Esto es solo un adelanto — descubre el resto de la carta.
        </p>
        <PillButton to="/carta" className="px-10 py-4 text-[13px]">
          Ver la carta completa
        </PillButton>
      </Reveal>
    </section>
  )
}
