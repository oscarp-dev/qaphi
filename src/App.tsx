import { Routes, Route } from 'react-router-dom'
import { Loader } from './components/Loader'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { CookieBanner } from './components/CookieBanner'
import { CookieConsentProvider } from './context/CookieConsent'
import { Home } from './pages/Home'
import { CartaPage } from './pages/CartaPage'
import { AvisoLegalPage } from './pages/AvisoLegal'
import { PoliticaPrivacidadPage } from './pages/PoliticaPrivacidad'
import { PoliticaCookiesPage } from './pages/PoliticaCookies'

function App() {
  return (
    <CookieConsentProvider>
      <div className="bg-cream text-ink">
        <ScrollToTop />
        <Loader />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carta" element={<CartaPage />} />
            <Route path="/aviso-legal" element={<AvisoLegalPage />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
            <Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </CookieConsentProvider>
  )
}

export default App
