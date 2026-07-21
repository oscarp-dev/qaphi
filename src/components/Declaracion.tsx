import { Reveal } from './Reveal'

export function Declaracion() {
  return (
    <section className="bg-tan text-ink px-[8vw] py-32 md:py-40">
      <Reveal>
        <h2 className="m-0 max-w-[900px] w-full break-words font-serif font-medium uppercase tracking-wide leading-[1.08] text-[clamp(40px,7.2vw,108px)]">
          El café es solo
          <br />
          el principio.
        </h2>
      </Reveal>
    </section>
  )
}
