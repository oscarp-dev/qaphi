import { useCallback, useEffect, useState, type ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function Carousel({ children, className = '' }: { children: ReactNode[]; className?: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center', dragFree: false })
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={className}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-4 pl-[6vw] pr-[6vw]">
          {children.map((child, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-[84%]">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {children.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a la imagen ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === selected ? 'w-6 bg-accent' : 'w-1.5 bg-ink/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
