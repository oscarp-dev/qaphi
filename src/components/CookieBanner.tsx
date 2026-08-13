import { Link } from 'react-router-dom'
import { useCookieConsent } from '../context/CookieConsent'
import { PillButton } from './PillButton'

export function CookieBanner() {
  const { status, accept, reject } = useCookieConsent()

  if (status !== null) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-ink/15 bg-cream/97 px-[6vw] py-6 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-6">
        <p className="m-0 max-w-[560px] text-[14px] leading-relaxed text-ink/70">
          Usamos cookies propias y de terceros (como el mapa de Google) para que la web funcione y para entender cómo
          la usás. Podés aceptarlas, rechazarlas o leer más en nuestra{' '}
          <Link to="/politica-cookies" className="underline decoration-ink/30 underline-offset-2 hover:text-accent">
            Política de Cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <PillButton variant="outline" className="!px-6 !py-2.5 text-[12px]" onClick={reject}>
            Rechazar
          </PillButton>
          <PillButton className="!px-6 !py-2.5 text-[12px]" onClick={accept}>
            Aceptar
          </PillButton>
        </div>
      </div>
    </div>
  )
}
