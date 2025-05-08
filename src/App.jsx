import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import CertificatesPage from './pages/CertificatesPage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/hizmetlerimiz" element={<ServicesPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/sss" element={<FAQPage />} />
            <Route path="/sertifikalarimiz" element={<CertificatesPage />} />
            <Route path="/galeri" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
