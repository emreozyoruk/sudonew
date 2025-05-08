import { useEffect } from 'react'
import CertificateGallery from '../components/CertificateGallery'

export default function CertificatesPage() {
  // Sayfa başlığını güncelle
  useEffect(() => {
    document.title = 'Sertifikalarımız | SUDO'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-16">
      {/* Başlık */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-6 text-white">Sertifikalarımız</h1>
          <p className="text-xl max-w-3xl">
            Ürün ve hizmet kalitemizi belgelemek adına edindiğimiz ulusal ve uluslararası sertifikalarımız. 
            SUDO olarak en yüksek standartlarda üretim ve hizmet sunmayı taahhüt ediyoruz.
          </p>
        </div>
      </section>

      {/* Sertifikalar */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold mb-8 text-primary border-b pb-4">Kalite ve Güvenlik Sertifikalarımız</h2>
            <p className="text-lg text-gray-600 mb-8">
              EMC ELEKTRİK & OTOMASYON olarak, ürettiğimiz içecek dolum makinelerinin en yüksek kalite ve güvenlik standartlarına 
              uygunluğunu belgeleyen sertifikalarımızı inceleyebilirsiniz. Bu sertifikalar, ürünlerimizin ulusal ve 
              uluslararası standartlara uygunluğunu kanıtlamaktadır.
            </p>
            
            {/* Sertifikalar galerisi */}
            <CertificateGallery className="mb-8" />
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">Sertifikalarımız Hakkında</h3>
              <p className="text-gray-700">
                Yukarıda gösterilen sertifikalar, EMC ELEKTRİK & OTOMASYON'un üretim tesislerinin ve içecek dolum makinelerinin 
                aşağıdaki standartlara uygunluğunu belgelemektedir:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li><strong>ISO 9001:2015:</strong> Kalite Yönetim Sistemi</li>
                <li><strong>ISO 22000:2018:</strong> Gıda Güvenliği Yönetim Sistemi</li>
                <li><strong>CE Uygunluk:</strong> Avrupa Birliği ürün güvenliği standartlarına uygunluk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Taahhüt Bölümü */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Kalite Taahhüdümüz</h2>
            <p className="text-xl text-gray-600 mb-8">
              SUDO olarak, müşterilerimize sunduğumuz ürün ve hizmetlerin en yüksek kalite standartlarına 
              uygunluğunu sağlamak için sürekli olarak kendimizi geliştiriyoruz. Kalite ve güvenlik, 
              şirketimizin temel değerlerini oluşturmaktadır.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Kalite Kontrol</h3>
                <p className="text-gray-600">
                  Tüm ürünlerimiz ve hizmetlerimiz, titiz kalite kontrol süreçlerinden geçmektedir.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Düzenli Test</h3>
                <p className="text-gray-600">
                  İçecek kalitemiz, düzenli olarak bağımsız laboratuvarlar tarafından test edilmektedir.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Sürekli İyileştirme</h3>
                <p className="text-gray-600">
                  Ürün ve hizmetlerimizi sürekli olarak geliştirerek kalite standartlarımızı yükseltiyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}