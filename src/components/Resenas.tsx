import { useState } from 'react'
import { reviewLocations, reviews, type Review } from '../data/reviews'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'
import { Carousel } from './Carousel'
import { PillButton } from './PillButton'

function Stars({ rating, className = '' }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={i < rating ? '#C2456B' : 'none'} stroke="#C2456B" strokeWidth="1.2">
          <path
            strokeLinejoin="round"
            d="M10 1.6 12.5 7 18.4 7.8 14.2 11.9 15.2 17.8 10 15 4.8 17.8 5.8 11.9 1.6 7.8 7.5 7Z"
          />
        </svg>
      ))}
    </span>
  )
}

function GoogleMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C33.6 5.4 29 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5 44.5 35.3 44.5 24c0-1.2-.1-2.4-.4-3.5Z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C33.6 5.9 29 4 24 4c-7.5 0-14 4.2-17.7 10.7Z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.3c-2 1.4-4.6 2.3-7.3 2.3-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.8 39.6 16.3 44 24 44Z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.4-2.4 4.4-4.4 5.8h0l6.2 5.3C36.7 39.6 44.5 34 44.5 24c0-1.2-.1-2.4-.4-3.5Z" />
    </svg>
  )
}

const CARD_TONES = [
  { bar: 'bg-accent', quote: 'text-accent', avatar: 'bg-accent' },
  { bar: 'bg-ink', quote: 'text-ink/70', avatar: 'bg-ink' },
  { bar: 'bg-accent-dark', quote: 'text-accent-dark', avatar: 'bg-accent-dark' },
]

function ReviewCard({ review, tone }: { review: Review; tone: (typeof CARD_TONES)[number] }) {
  return (
    <div className="flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-ink/10 bg-bone shadow-[0_14px_32px_rgba(21,21,21,0.08)]">
      <span className={`block h-1.5 w-full ${tone.bar}`} aria-hidden="true" />
      <div className="flex flex-1 flex-col gap-5 px-8 pb-8">
        <span className={`font-serif text-[42px] leading-none ${tone.quote}`}>&ldquo;</span>
        <p className="m-0 -mt-4 flex-1 font-serif text-[19px] italic leading-[1.6] text-ink/80">{review.text}</p>
        <div className="flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
          <div className="flex items-center gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-[14px] text-cream ${tone.avatar}`}>
              {review.author.charAt(0)}
            </span>
            <span className="flex flex-col">
              <span className="text-[14px] font-medium text-ink">{review.author}</span>
              <span className="text-[12px] text-ink/45">{review.date}</span>
            </span>
          </div>
          <Stars rating={review.rating} />
        </div>
      </div>
    </div>
  )
}

export function Resenas() {
  const [locationId, setLocationId] = useState(reviewLocations[0].id)
  const location = reviewLocations.find((l) => l.id === locationId) ?? reviewLocations[0]
  const locationReviews = reviews.filter((r) => r.locationId === locationId)

  return (
    <section className="border-t border-ink/15 bg-cream px-[6vw] py-24 md:py-[100px]">
      <Reveal className="flex flex-col items-center gap-5 text-center">
        <Eyebrow>RESEÑAS</Eyebrow>
        <h2 className="m-0 max-w-[560px] font-serif text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.2] text-ink">
          Lo que dicen quienes ya pasaron por Qaphi.
        </h2>

        <div className="mt-2 inline-flex rounded-full border border-ink/10 bg-bone p-1">
          {reviewLocations.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setLocationId(l.id)}
              aria-pressed={l.id === locationId}
              className={`rounded-full px-5 py-2 text-[13px] font-medium uppercase tracking-[.06em] transition-colors duration-300 ${
                l.id === locationId ? 'bg-accent text-cream' : 'text-ink/60 hover:text-ink'
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
          <GoogleMark className="h-6 w-6" />
          <span className="font-serif text-[26px] leading-none text-ink">{location.rating.toFixed(1)}</span>
          <Stars rating={Math.round(location.rating)} />
          <span className="text-[14px] text-ink/55">· {location.count}+ reseñas en Google</span>
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-14 -mx-[6vw]">
        <Carousel key={locationId} slideClassName="basis-[86%] sm:basis-[54%] lg:basis-[34%]">
          {locationReviews.map((review, i) => (
            <ReviewCard key={review.author} review={review} tone={CARD_TONES[i % CARD_TONES.length]} />
          ))}
        </Carousel>
      </Reveal>

      <Reveal delay={150} className="mt-14 flex justify-center">
        <PillButton variant="outline" href={location.url} target="_blank" rel="noopener noreferrer">
          Ver reseñas de {location.name} en Google
        </PillButton>
      </Reveal>
    </section>
  )
}
