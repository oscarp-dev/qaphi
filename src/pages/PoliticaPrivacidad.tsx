import { LegalPage, LegalSection, Placeholder } from '../components/LegalPage'

export function PoliticaPrivacidadPage() {
  return (
    <LegalPage title="Política de Privacidad">
      <LegalSection title="1. Responsable del tratamiento">
        <p className="m-0">
          <Placeholder>razón social / nombre del titular</Placeholder>, con NIF/CIF{' '}
          <Placeholder>NIF o CIF</Placeholder>, domicilio en Av. Alcalde Alfonso de Rojas, 6, 03004 Alicante y email
          de contacto hola@qaphi.com, es la responsable del tratamiento de los datos personales que nos facilites a
          través de este sitio web.
        </p>
      </LegalSection>

      <LegalSection title="2. ¿Con qué finalidad tratamos tus datos?">
        <p className="m-0">
          En Qaphi tratamos la información que nos facilitas para atender tus consultas o solicitudes de contacto, y
          para gestionar la navegación y funcionamiento del sitio web.
        </p>
        <p className="m-0">
          <Placeholder>
            Añadir aquí cualquier otra finalidad real: newsletter, reservas online, programa de fidelización, etc.
          </Placeholder>
        </p>
      </LegalSection>

      <LegalSection title="3. ¿Cuál es la legitimación para el tratamiento de tus datos?">
        <p className="m-0">
          La base legal para el tratamiento de tus datos es el consentimiento que nos otorgas al contactarnos o al
          aceptar las cookies no esenciales de este sitio web.
        </p>
      </LegalSection>

      <LegalSection title="4. ¿A qué destinatarios se comunicarán tus datos?">
        <p className="m-0">
          No se cederán datos a terceros, salvo obligación legal. Este sitio utiliza servicios de Google (Google Maps)
          que pueden implicar el tratamiento de datos por parte de Google LLC conforme a su propia política de
          privacidad.
        </p>
      </LegalSection>

      <LegalSection title="5. ¿Cuáles son tus derechos?">
        <p className="m-0">
          Cualquier persona tiene derecho a obtener confirmación sobre si en Qaphi estamos tratando datos personales
          que le conciernan, y a ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del
          tratamiento y portabilidad, escribiendo a hola@qaphi.com. Asimismo, tenés derecho a presentar una
          reclamación ante la Agencia Española de Protección de Datos (AEPD) si considerás que el tratamiento no se
          ajusta a la normativa vigente.
        </p>
      </LegalSection>

      <LegalSection title="6. ¿Por cuánto tiempo conservaremos tus datos?">
        <p className="m-0">
          Los datos se conservarán mientras exista un interés mutuo para mantener la finalidad del tratamiento, y
          cuando ya no sea necesario se suprimirán con medidas de seguridad adecuadas.
        </p>
      </LegalSection>

      <p className="m-0 text-[13px] text-ink/45">Última actualización: <Placeholder>fecha</Placeholder>.</p>
    </LegalPage>
  )
}
