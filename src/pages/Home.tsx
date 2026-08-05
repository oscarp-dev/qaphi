import { Hero } from '../components/Hero'
import { QuienesSomos } from '../components/QuienesSomos'
import { NuestroCafe } from '../components/NuestroCafe'
import { PhotoStrip } from '../components/PhotoStrip'
import { Declaracion } from '../components/Declaracion'
import { Destacados } from '../components/Destacados'
import { Pausa } from '../components/Pausa'
import { Ubicaciones } from '../components/Ubicaciones'

export function Home() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <NuestroCafe />
      <PhotoStrip />
      <Declaracion />
      <Destacados />
      <Pausa />
      <Ubicaciones />
    </>
  )
}
