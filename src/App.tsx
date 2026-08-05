import { Routes, Route } from 'react-router-dom'
import { Loader } from './components/Loader'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { CartaPage } from './pages/CartaPage'

function App() {
  return (
    <div className="bg-cream text-ink">
      <ScrollToTop />
      <Loader />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<CartaPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
