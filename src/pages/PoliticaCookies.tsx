import { useCookieConsent } from '../context/CookieConsent'
import { LegalPage, LegalSection, Placeholder } from '../components/LegalPage'
import { PillButton } from '../components/PillButton'

export function PoliticaCookiesPage() {
  const { status, openPreferences } = useCookieConsent()

  return (
    <LegalPage title="Política de Cookies">
      <LegalSection title="¿Qué son las cookies?">
        <p className="m-0">
          Las cookies son pequeños archivos que se almacenan en tu navegador al visitar una web. Se usan para
          recordar tus preferencias, medir el uso del sitio o permitir la carga de contenido de terceros, como
          mapas.
        </p>
      </LegalSection>

      <LegalSection title="Cookies que utilizamos">
        <div className="overflow-x-auto rounded-2xl border border-ink/10">
          <table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-ink/10 bg-bone">
                <th className="px-4 py-3 font-medium text-ink">Tipo</th>
                <th className="px-4 py-3 font-medium text-ink">Finalidad</th>
                <th className="px-4 py-3 font-medium text-ink">Titular</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-ink/10">
                <td className="px-4 py-3 align-top text-ink/70">Técnicas / necesarias</td>
                <td className="px-4 py-3 align-top text-ink/70">
                  Recordar tu elección de cookies para no volver a mostrarte este aviso en cada visita.
                </td>
                <td className="px-4 py-3 align-top text-ink/70">Qaphi (propia)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top text-ink/70">De terceros</td>
                <td className="px-4 py-3 align-top text-ink/70">
                  Mostrar el mapa de ubicación de nuestros locales (solo se cargan si aceptás las cookies).
                </td>
                <td className="px-4 py-3 align-top text-ink/70">Google LLC</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="m-0">
          <Placeholder>
            Si en el futuro se añaden herramientas de analítica (Google Analytics, Meta Pixel, etc.), hay que sumar
            una fila por cada una a esta tabla.
          </Placeholder>
        </p>
      </LegalSection>

      <LegalSection title="¿Cómo gestionar tus cookies?">
        <p className="m-0">
          Podés cambiar tu elección en cualquier momento desde este mismo sitio, o eliminar las cookies ya guardadas
          desde la configuración de tu navegador.
        </p>
        <PillButton variant="outline" className="self-start" onClick={openPreferences}>
          {status === null ? 'Elegir preferencias de cookies' : 'Cambiar mis preferencias de cookies'}
        </PillButton>
      </LegalSection>

      <p className="m-0 text-[13px] text-ink/45">Última actualización: <Placeholder>fecha</Placeholder>.</p>
    </LegalPage>
  )
}
