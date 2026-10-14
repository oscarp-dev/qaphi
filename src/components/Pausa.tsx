import sakura from '../assets/photos/sakura.webp'
import { Reveal } from './Reveal'

const PETALS = [
  { left: '8%', delay: '0s', duration: '12s', size: 14 },
  { left: '22%', delay: '4s', duration: '10s', size: 10 },
  { left: '38%', delay: '7s', duration: '13s', size: 12 },
  { left: '57%', delay: '2s', duration: '11s', size: 9 },
  { left: '71%', delay: '5.5s', duration: '12.5s', size: 13 },
  { left: '86%', delay: '1s', duration: '10.5s', size: 11 },
  { left: '94%', delay: '8s', duration: '13.5s', size: 9 },
]

function Petal({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 1 C 16 6, 16 14, 10 19 C 4 14, 4 6, 10 1 Z" fill="#C2456B" opacity="0.45" />
    </svg>
  )
}

export function Pausa() {
  return (
    <section className="relative overflow-hidden bg-bone border-t border-ink/15 min-h-[58vh] flex flex-col items-center justify-center px-[8vw] py-28 md:py-32">
      <div className="pointer-events-none absolute inset-0 motion-reduce:hidden" aria-hidden="true">
        {PETALS.map((p) => (
          <span
            key={p.left}
            className="absolute top-0 animate-petal opacity-0"
            style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration }}
          >
            <Petal size={p.size} />
          </span>
        ))}
      </div>

      <Reveal className="relative flex flex-col items-center">
        <img
          src={sakura}
          alt="Rama de sakura en flor"
          className="w-[min(80%,380px)] h-auto origin-top drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)] animate-sway motion-reduce:animate-none"
          loading="lazy"
        />
        <p className="mt-9 font-script text-[clamp(32px,4.2vw,52px)] text-ink/70 max-w-[380px] text-center leading-relaxed">
          Un momento para nada más que el café.
        </p>
      </Reveal>
    </section>
  )
}
