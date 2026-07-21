import { useState } from 'react'
import { locations } from '../data/locations'
import { Eyebrow } from './Eyebrow'

export function Ubicaciones() {
  const [selected, setSelected] = useState(0)
  const active = locations[selected]
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${active.address}, Alicante`)}&output=embed`

  return (
    <section id="ubicaciones" className="scroll-mt-24 bg-tan px-[6vw] py-24 md:py-[100px] flex flex-wrap gap-14">
      <div className="flex-1 basis-[380px]">
        <Eyebrow className="block mb-14">UBICACIONES</Eyebrow>
        <div className="border-t border-umber">
          {locations.map((loc, i) => {
            const isActive = i === selected
            return (
              <button
                key={loc.name}
                type="button"
                onClick={() => setSelected(i)}
                aria-current={isActive}
                className={`w-full grid grid-cols-[8px_44px_1fr] items-start gap-5 px-5 py-8 border-b border-umber text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                  isActive ? 'bg-accent/[0.06]' : 'bg-transparent hover:bg-ink/[0.03]'
                }`}
              >
                <span className={`w-2 h-2 mt-2.5 rounded-full transition-colors ${isActive ? 'bg-accent' : 'bg-umber'}`} />
                <span className="text-[14px] font-light text-umber">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex flex-col gap-1.5">
                  <span className={`font-serif text-[28px] font-medium transition-colors ${isActive ? 'text-accent' : 'text-ink'}`}>
                    {loc.name}
                  </span>
                  <span className="text-[16px] text-umber">{loc.address}</span>
                  <span className="text-[16px] text-umber">{loc.hours}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
      <div className="flex-1 basis-[380px] min-w-[280px]">
        <div className="border border-umber overflow-hidden aspect-[4/3] min-h-[340px]">
          <iframe
            src={mapSrc}
            className="w-full h-full border-0 [filter:sepia(.12)_saturate(1.05)]"
            loading="lazy"
            title="Mapa de la ubicación seleccionada"
          />
        </div>
      </div>
    </section>
  )
}
