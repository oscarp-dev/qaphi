import { locations } from '../data/locations'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-bone text-ink px-[6vw] pt-24 pb-10 flex flex-col gap-16 border-t border-ink/15">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] items-center gap-10">
        <div className="flex flex-col gap-3.5">
          <Logo className="h-9 w-auto" />
          <span className="text-[14px] font-light text-ink/60 leading-relaxed">
            Plaza de Toros — {locations[0].address}
            <br />
            San Blas — {locations[1].address}
          </span>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">CONTACTO</span>
          <a href="mailto:hola@qaphi.com" className="text-[16px] text-ink hover:text-accent transition-colors">
            hola@qaphi.com
          </a>
          <a href="tel:+34900000000" className="text-[16px] text-ink hover:text-accent transition-colors">
            +34 900 000 000
          </a>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">HORARIO</span>
          <span className="text-[16px] text-ink">Lun–Vie 8:00–19:00</span>
          <span className="text-[16px] text-ink">Sáb–Dom 9:00–20:00</span>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">REDES</span>
          <a href="#" className="text-[16px] text-ink hover:text-accent transition-colors">
            Instagram — @qaphi
          </a>
          <a href="#" className="text-[16px] text-ink hover:text-accent transition-colors">
            Facebook
          </a>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="font-medium text-[12px] text-ink/60 tracking-[.12em]">ENLACES</span>
          <a href="#carta" className="text-[16px] text-ink hover:text-accent transition-colors">
            La carta
          </a>
          <a href="#ubicaciones" className="text-[16px] text-ink hover:text-accent transition-colors">
            Ubicaciones
          </a>
        </div>
      </div>
      <span className="text-[12px] font-light text-ink/50">© {new Date().getFullYear()} Qaphi. Todos los derechos reservados.</span>
    </footer>
  )
}
