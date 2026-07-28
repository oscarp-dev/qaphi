import { useEffect, useState } from 'react'
import { locations } from '../data/locations'
import { Eyebrow } from './Eyebrow'
import { useInView } from '../hooks/useInView'

export function Ubicaciones() {
  const [selected, setSelected] = useState(0)
  const [mapLoaded, setMapLoaded] = useState(false)
  const { ref: mapRef, inView: mapInView } = useInView<HTMLDivElement>(0.1)
  const active = locations[selected]
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${active.address}, Alicante`)}&output=embed`

  useEffect(() => {
    setMapLoaded(false)
  }, [selected])

  return (
    <section id="ubicaciones" className="scroll-mt-24 bg-cream border-t border-ink/15 px-[6vw] py-24 md:py-[100px] flex flex-wrap gap-14">
      <div className="flex-1 basis-[380px]">
        <Eyebrow className="block mb-14">UBICACIONES</Eyebrow>
        <div className="border-t border-ink/15">
          {locations.map((loc, i) => {
            const isActive = i === selected
            return (
              <button
                key={loc.name}
                type="button"
                onClick={() => setSelected(i)}
                aria-current={isActive}
                className={`w-full grid grid-cols-[8px_44px_1fr] items-start gap-5 px-5 py-8 border-b border-ink/10 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                  isActive ? 'bg-accent/[0.06]' : 'bg-transparent hover:bg-ink/[0.03]'
                }`}
              >
                <span className={`w-2 h-2 mt-2.5 rounded-full transition-colors ${isActive ? 'bg-accent' : 'bg-ink/25'}`} />
                <span className="text-[14px] font-light text-ink/45">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex flex-col gap-1.5">
                  <span className={`font-serif text-[28px] font-medium transition-colors ${isActive ? 'text-accent' : 'text-ink'}`}>
                    {loc.name}
                  </span>
                  <span className="text-[16px] text-ink/65">{loc.address}</span>
                  <span className="text-[16px] text-ink/65">{loc.hours}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
      <div className="flex-1 basis-[380px] min-w-[280px]">
        <div ref={mapRef} className="relative w-full border border-ink/15 overflow-hidden aspect-[4/3] min-h-[340px]">
          <div
            className={`absolute inset-0 flex items-center justify-center bg-bone transition-opacity duration-500 ${
              mapLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <span className="text-[12px] font-medium uppercase tracking-[.15em] text-ink/40">Cargando mapa…</span>
          </div>
          {mapInView && (
            <iframe
              src={mapSrc}
              className="w-full h-full border-0 [filter:sepia(.12)_saturate(1.05)]"
              loading="lazy"
              onLoad={() => setMapLoaded(true)}
              title="Mapa de la ubicación seleccionada"
            />
          )}
        </div>
      </div>
    </section>
  )
}
