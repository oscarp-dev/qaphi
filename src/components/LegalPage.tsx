import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="px-[6vw] pt-14 pb-24 md:pt-20 md:pb-32">
      <Reveal className="mx-auto flex max-w-[760px] flex-col gap-4">
        <Link
          to="/"
          className="text-[12px] font-medium uppercase tracking-[.1em] text-ink/50 transition-colors hover:text-accent"
        >
          ← Volver al inicio
        </Link>
        <h1 className="m-0 font-serif text-[clamp(34px,5vw,52px)] font-medium leading-[1.1] text-ink">{title}</h1>
      </Reveal>

      <Reveal
        delay={100}
        className="prose-legal mx-auto mt-14 flex max-w-[760px] flex-col gap-8 text-[15px] leading-[1.75] text-ink/70"
      >
        {children}
      </Reveal>
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="m-0 font-serif text-[21px] font-medium text-ink">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  )
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-accent/10 px-1.5 py-0.5 font-medium text-accent-dark">[{children}]</span>
  )
}
