import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SimplifiedWaterWave } from '../three/WaterEffect'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('filtrasyon')
  
  // Sayfa başlığını güncelle ve sayfanın en üstüne git
  useEffect(() => {
    document.title = 'Hizmetlerimiz | SUDO'
    window.scrollTo(0, 0)
  }, [])
  
  // Animasyon için
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )
    
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => {
      observer.observe(el)
    })
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [activeTab])
  
  return (
    <div className="pt-24 pb-16">
      {/* Başlık */}
      <section className="py-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <SimplifiedWaterWave className="h-full" />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-white">Hizmetlerimiz</h1>
          <p className="text-xl max-w-3xl">
            SUDO olarak, işletmeler ve toplu yaşam alanları için
            en kaliteli C vitaminli içecek satma makinelerini ve arıtma çözümlerini sunuyoruz.
            Tüm ihtiyaçlarınız için özel çözümlerimiz mevcut.
          </p>
        </div>
      </section>
      
      {/* Hizmetler Menüsü */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center mb-12 space-x-2">
            <button 
              onClick={() => setActiveTab('filtrasyon')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'filtrasyon' 
                  ? 'bg-primary text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              Filtrasyon Sistemleri
            </button>
            <button 
              onClick={() => setActiveTab('ozellikler')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'ozellikler' 
                  ? 'bg-primary text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              Özelliklerimiz
            </button>
            <button 
              onClick={() => setActiveTab('misyon')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'misyon' 
                  ? 'bg-primary text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              Misyonumuz
            </button>
          </div>
          
          {/* Filtrasyon Sistemleri */}
          {activeTab === 'filtrasyon' && (
            <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-700">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-primary">Filtrasyon Sistemlerimiz</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  SUDO, filtrelenmiş su bazlı C vitaminli aromalı gazsız içecek dolum otomatıdır. 
                  5 aşamalı filtrasyon sistemimiz, en sağlıklı içeceği sizlere sunmak için titizlikle tasarlanmıştır.
                </p>
              </div>
              
              <div className="mb-8 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Makine Özellikleri</h3>
                <p className="text-gray-700 mb-4">
                  Makinemizin ölçüleri 100cm x 100cm olup 200cm yüksekliği bulunmaktadır. İçerisinde 700 litrelik 
                  paslanmaz çelikten üretilen bir hazne bulunmaktadır. 3. aşamadaki filtreleme sonrası, 
                  su bu haznede depolanır ve dozajlama pompası sayesinde uygun ölçüde C vitamini otomatik olarak 
                  ilave edilir. Böylece aromalı içecek insan eli değmeden satışa hazır hale gelir.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Filtre 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">1. Aşama: Karbon Filtre (Aktif Karbon)</h3>
                    <p className="text-gray-600 mb-4">
                      Klor, kötü tat ve kokuları, organik bileşikleri ve bazı gazları giderir. Suyu ön arıtmadan 
                      geçirerek membranı korumaya yardımcı olur.
                    </p>
                  </div>
                </div>
                
                {/* Filtre 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">2. Aşama: Sediment Önfiltre</h3>
                    <p className="text-gray-600 mb-4">
                      5 mikron boyutuna kadar çamur, pas, kum gibi fiziksel partikülleri tutar. 
                      Sistemdeki diğer filtrelerin tıkanmasını engeller.
                    </p>
                  </div>
                </div>
                
                {/* Filtre 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">3. Aşama: Membran Filtre</h3>
                    <p className="text-gray-600 mb-4">
                      Ters osmoz membranı genellikle 0.0001 mikron gözeneklidir. Suda bulunan bakteri, virüs, 
                      ağır metal, nitrat gibi zararlı maddeleri ayrıştırır. Asıl içme suyu kalitesini sağlayan filtredir.
                    </p>
                  </div>
                </div>
                
                {/* Filtre 4 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">4. Aşama: Karbon Filtre (Tatlandırıcı)</h3>
                    <p className="text-gray-600 mb-4">
                      Suyun tadını düzeltir, suya doğal bir tat kazandırır. Hindistan cevizi kabuğundan 
                      elde edilen granül karbon kullanılır.
                    </p>
                  </div>
                </div>
                
                {/* Filtre 5 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">5. Aşama: UV Cihazı</h3>
                    <p className="text-gray-600 mb-4">
                      Son aşamada sudan kaçmış olabilecek mikroorganizmaları öldürür. Bakteri ve 
                      virüslere karşı ekstra güvenlik sağlar.
                    </p>
                  </div>
                </div>
                
                {/* Filtre 6 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">C Vitamini Dozajlama</h3>
                    <p className="text-gray-600 mb-4">
                      Filtrelenmiş su, makine içerisindeki 700 litrelik paslanmaz çelik haznede depolanır. 
                      Bu aşamada dozajlama pompası sayesinde uygun ölçüde C vitamini ilave edilir ve aromalı 
                      içecek olarak insan eli değmeden satışa hazır hale gelir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Özelliklerimiz */}
          {activeTab === 'ozellikler' && (
            <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-700">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-primary">SUDO Özelliklerimiz</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  SUDO içecek otomatları, en yüksek kalite standartlarında üretilmiş olup her damla içecekte 
                  sağlığınız ve memnuniyetiniz için özenle tasarlanmıştır.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Özellik 1 */}
                <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Maksimum Saflık</h3>
                  <p className="text-gray-600">
                    En ileri filtrasyon teknolojisi ile içeceğin maksimum saflıkta olmasını sağlıyoruz.
                  </p>
                </div>
                
                {/* Özellik 2 */}
                <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Sağlık Sertifikaları</h3>
                  <p className="text-gray-600">
                    Tüm ürünlerimiz ulusal ve uluslararası sağlık standartlarına uygun sertifikalara sahiptir.
                  </p>
                </div>
                
                {/* Özellik 3 */}
                <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Kaliteli İçecek Standardı</h3>
                  <p className="text-gray-600">
                    Her damla içeceğin kalitesini düzenli testlerle kontrol ederek en yüksek standartları sağlıyoruz.
                  </p>
                </div>
                
                {/* Özellik 4 */}
                <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Derin İçecek Filtrasyonu</h3>
                  <p className="text-gray-600">
                    Çok aşamalı filtrasyon sistemi ile içeceği moleküler düzeyde arındırarak en saf hale getiriyoruz.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Misyonumuz */}
          {activeTab === 'misyon' && (
            <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-700">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-primary">Değerlerimiz</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  SUDO olarak misyonumuz, kaliteli C vitaminli içecek ile her bireyin sağlığına katkıda bulunmaktır.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Değer 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-50">
                    <img src="/public/images/blog4.png" alt="Misyonumuz" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">Misyonumuz</h3>
                    <p className="text-gray-600">
                      Misyonumuz, en yüksek kalite standartlarına sahip içecek arıtım cihazları sunarak her ailenin temiz ve sağlıklı içeceğe erişimini sağlamaktır.
                    </p>
                  </div>
                </div>
                
                {/* Değer 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-50">
                    <img src="/public/images/blog5.png" alt="Kolay Ulaşım" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">Kolay Ulaşım</h3>
                    <p className="text-gray-600">
                      Kolay ulaşım, şehir içi hayatı hızlandırır, zamandan tasarruf sağlar ve yaşam kalitesini artırır. Herkes için erişilebilir olmalıdır.
                    </p>
                  </div>
                </div>
                
                {/* Değer 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-50">
                    <img src="/public/images/blog6.png" alt="Kaliteli İçecek" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">Kaliteli İçecek</h3>
                    <p className="text-gray-600">
                      Kaliteli içecek, sağlıklı bir yaşam için gereklidir. Temiz, güvenli ve taze içecek, hastalıklardan korunmayı sağlar ve vücut fonksiyonlarını destekler.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Çağrı Bölümü */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-10 shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">C Vitaminli İçeceğimiz İçin Bizimle İletişime Geçin</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              İşletmeniz veya yaşam alanınız için kaliteli, sağlıklı ve ekonomik 
              C vitaminli içecek çözümleri için SUDO ekibi sizlere yardımcı olmak için hazır.
            </p>
            <Link to="/iletisim" className="btn-primary text-center">Hemen İletişime Geçin</Link>
          </div>
        </div>
      </section>
    </div>
  )
}