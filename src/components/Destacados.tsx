import pancakes from '../assets/photos/hero.webp'
import huevos from '../assets/photos/tira-3.webp'
import matcha from '../assets/photos/destacado-matcha.webp'
import cafeFrio from '../assets/photos/cafe-frio.webp'
import { Eyebrow } from './Eyebrow'
import { PillButton } from './PillButton'
import { Reveal } from './Reveal'

const FEATURED = {
  src: pancakes,
  alt: 'Pancakes con plátano y chocolate',
  name: 'Pancakes de plátano y chocolate',
  price: '8,50 €',
  tag: 'Más pedido',
}

const ITEMS = [
  { src: huevos, alt: 'Huevos benedictinos', name: 'Huevos benedictinos', price: '9,90 €' },
  { src: matcha, alt: 'Matcha latte', name: 'Matcha latte', price: '4,20 €' },
  { src: cafeFrio, alt: 'Café frío', name: 'Café frío', price: '3,80 €' },
]

export function Destacados() {
  return (
    <section id="carta" className="scroll-mt-24 bg-cream px-[6vw] py-24 md:py-[100px]">
      <Eyebrow className="block mb-14">DESTACADOS DE LA CARTA</Eyebrow>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Reveal className="md:col-span-3">
          <a
            href="#"
            className="group relative block aspect-[4/3] sm:aspect-[16/8] overflow-hidden rounded-3xl"
          >
            <img
              src={FEATURED.src}
              alt={FEATURED.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <span className="absolute top-5 left-5 rounded-full bg-accent px-4 py-1.5 text-[11px] font-medium uppercase tracking-[.08em] text-cream">
              {FEATURED.tag}
            </span>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <span className="font-serif text-[clamp(28px,3.4vw,44px)] font-medium leading-tight text-cream">
                {FEATURED.name}
              </span>
              <span className="inline-flex items-center gap-3 rounded-full bg-cream/95 px-5 py-2.5 text-ink">
                <span className="font-serif text-lg">{FEATURED.price}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-cream transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10 L10 2 M4 2 H10 V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </div>
          </a>
        </Reveal>

        {ITEMS.map((item, i) => (
          <Reveal key={item.name} delay={(i + 1) * 80}>
            <a href="#" className="group relative block aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <span className="font-serif text-[22px] font-medium leading-tight text-cream">{item.name}</span>
                <span className="shrink-0 font-serif text-[15px] text-cream/90">{item.price}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="flex justify-center">
        <PillButton href="#" className="mt-16">
          Ver la carta completa
        </PillButton>
      </div>
    </section>
  )
}
