import { LegalPage, LegalSection, Placeholder } from '../components/LegalPage'

export function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso Legal">
      <LegalSection title="1. Datos identificativos">
        <p className="m-0">
          En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico
          (LSSI-CE), se informa de los siguientes datos: el titular de este sitio web es{' '}
          <Placeholder>razón social / nombre y apellidos del titular</Placeholder>, con NIF/CIF{' '}
          <Placeholder>NIF o CIF</Placeholder> y domicilio en Av. Alcalde Alfonso de Rojas, 6, 03004 Alicante.
          Datos de contacto: hola@qaphi.com · +34 687 28 81 76.
        </p>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p className="m-0">
          Este sitio web tiene como finalidad informar sobre la actividad, productos y locales de Qaphi. El acceso y
          uso del sitio atribuye la condición de usuario e implica la aceptación de las condiciones recogidas en este
          Aviso Legal.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de uso">
        <p className="m-0">
          El usuario se compromete a hacer un uso adecuado de los contenidos y servicios del sitio web, y a no
          emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe, al orden público, o que de
          cualquier forma puedan dañar, inutilizar o deteriorar el sitio o impedir su normal uso.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p className="m-0">
          Los contenidos de este sitio web (textos, imágenes, marca, logotipo y diseño) son propiedad de{' '}
          <Placeholder>razón social / nombre del titular</Placeholder> o de terceros que han autorizado su uso, y
          están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción,
          distribución o transformación sin autorización expresa.
        </p>
      </LegalSection>

      <LegalSection title="5. Exclusión de responsabilidad">
        <p className="m-0">
          Qaphi no se hace responsable de los daños derivados de un uso inadecuado de este sitio web ni de la
          información contenida en páginas de terceros a las que pueda enlazarse desde el mismo.
        </p>
      </LegalSection>

      <LegalSection title="6. Legislación aplicable">
        <p className="m-0">
          Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada del
          uso de este sitio web, las partes se someten a los juzgados y tribunales que correspondan conforme a
          derecho.
        </p>
      </LegalSection>

      <p className="m-0 text-[13px] text-ink/45">Última actualización: <Placeholder>fecha</Placeholder>.</p>
    </LegalPage>
  )
}
