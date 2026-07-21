import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { QuienesSomos } from './components/QuienesSomos'
import { NuestroCafe } from './components/NuestroCafe'
import { PhotoStrip } from './components/PhotoStrip'
import { Declaracion } from './components/Declaracion'
import { Destacados } from './components/Destacados'
import { Pausa } from './components/Pausa'
import { Ubicaciones } from './components/Ubicaciones'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <QuienesSomos />
        <NuestroCafe />
        <PhotoStrip />
        <Declaracion />
        <Destacados />
        <Pausa />
        <Ubicaciones />
      </main>
      <Footer />
    </div>
  )
}

export default App
