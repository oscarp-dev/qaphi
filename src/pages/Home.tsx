import { Hero } from '../components/Hero'
import { QuienesSomos } from '../components/QuienesSomos'
import { NuestroCafe } from '../components/NuestroCafe'
import { PhotoStrip } from '../components/PhotoStrip'
import { Declaracion } from '../components/Declaracion'
import { Destacados } from '../components/Destacados'
import { Pausa } from '../components/Pausa'
import { Ubicaciones } from '../components/Ubicaciones'
import { Resenas } from '../components/Resenas'
import { useSeo } from '../hooks/useSeo'

export function Home() {
  useSeo({
    title: 'Qaphi — Cafetería y Brunch en Alicante',
    description:
      'Cafetería en Alicante con brunch de temporada, café de tueste propio y repostería casera. Dos locales: Plaza de Toros y San Blas.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <QuienesSomos />
      <NuestroCafe />
      <PhotoStrip />
      <Declaracion />
      <Destacados />
      <Pausa />
      <Resenas />
      <Ubicaciones />
    </>
  )
}
