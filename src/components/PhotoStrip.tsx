import tira1 from '../assets/photos/tira-1.webp'
import tira2 from '../assets/photos/tira-2.webp'
import tira3 from '../assets/photos/tira-3.webp'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'

const PHOTOS = [
  { src: tira1, alt: 'Mesa de brunch Qaphi', caption: 'Brunch de temporada' },
  { src: tira2, alt: 'Bandeja de desayuno Qaphi', caption: 'Para compartir' },
  { src: tira3, alt: 'Huevos benedictinos Qaphi', caption: 'Hecho al momento' },
]

export function PhotoStrip() {
  return (
    <section className="bg-cream border-t border-umber/15 px-[6vw] py-20 md:py-24">
      <Eyebrow className="block mb-10">ASÍ SE VIVE QAPHI</Eyebrow>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {PHOTOS.map((photo, i) => (
          <Reveal key={photo.alt} delay={i * 80} className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
            <img
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 h-full w-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute bottom-5 left-5 right-5 translate-y-2 text-[13px] sm:text-[15px] font-medium uppercase tracking-[.06em] text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {photo.caption}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
