import tira1 from '../assets/photos/tira-1.webp'
import tira2 from '../assets/photos/tira-2.webp'
import tira3 from '../assets/photos/tira-3.webp'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'
import { Carousel } from './Carousel'

const PHOTOS = [
  { src: tira1, alt: 'Mesa de brunch Qaphi', caption: 'Mesa lista para ti' },
  { src: tira2, alt: 'Bandeja de desayuno Qaphi', caption: 'Para compartir' },
  { src: tira3, alt: 'Huevos benedictinos Qaphi', caption: 'Hecho al momento' },
]

function Photo({ photo }: { photo: (typeof PHOTOS)[number] }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 h-full w-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
      <span className="absolute bottom-5 left-5 right-5 text-[13px] sm:text-[15px] font-medium uppercase tracking-[.06em] text-cream">
        {photo.caption}
      </span>
    </div>
  )
}

export function PhotoStrip() {
  return (
    <section className="bg-bone border-t border-ink/15 py-20 md:py-24">
      <Eyebrow className="block mb-10 px-[6vw]">ASÍ SE VIVE QAPHI</Eyebrow>

      <Reveal className="sm:hidden">
        <Carousel>
          {PHOTOS.map((photo) => (
            <Photo key={photo.alt} photo={photo} />
          ))}
        </Carousel>
      </Reveal>

      <div className="hidden sm:grid grid-cols-3 gap-5 px-[6vw]">
        {PHOTOS.map((photo, i) => (
          <Reveal key={photo.alt} delay={i * 80}>
            <Photo photo={photo} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
