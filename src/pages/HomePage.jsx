import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'

export default function HomePage() {
  const featuresRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Sayfa yüklendiğinde animasyon için
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  // Özellik kartları için animasyon
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
    
    const featureElements = document.querySelectorAll('.feature-card')
    featureElements.forEach((el) => {
      observer.observe(el)
    })
    
    return () => {
      featureElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])
  
  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-blue-500/10 to-blue-600/20">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sol taraf - İçerik */}
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
                SUDO <br />
                <span className="text-blue-500">C Vitaminli İçecek Otomat Makineleri</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                Her Zaman Taze, C Vitaminli, Mineralli, Sağlıklı
                Su Bazlı İçecek
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/hizmetlerimiz" className="btn-primary text-center">
                  Hizmetlerimiz
                </Link>
                <Link to="/iletisim" className="btn-accent text-center">
                  Bizimle İletişime Geçin
                </Link>
              </div>
            </div>
            
            {/* Sağ taraf - Resim */}
            <div className={`relative ${isLoaded ? 'animate-slide-in-right' : 'translate-x-full opacity-0'} transition-all duration-1000`}>
              <img 
                src="/images/1-removebg-preview.png" 
                alt="SUDO Su Satma Makinesi" 
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            </div>
          </div>
        </div>
        
        {/* Arka plan dekoratif wave efektleri */}
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-64 bg-blue-300 transform -rotate-3 scale-150"></div>
          <div className="absolute top-1/3 left-0 w-full h-32 bg-blue-400 transform rotate-3 scale-150"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-48 bg-blue-200 transform -rotate-2 scale-150"></div>
        </div>
        
        {/* Scroll Down İndikatörü */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-primary cursor-pointer animate-bounce"
          onClick={() => featuresRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Ürünler Bölümü */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Ürünlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, kaliteli ve kullanıcı dostu su satma makinelerimiz ile tanışın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-64 overflow-hidden">
                <img src="/images/1.png" alt="SUDO Su Makinesi 1" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">SUDO C Vitaminli Su</h3>
                <p className="text-gray-600 mb-4">Her zaman taze, C Vitaminli, mineralli, sağlıklı su bazlı içecek</p>
                <Link to="/hizmetlerimiz" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  <span>Detaylar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-64 overflow-hidden">
                <img src="/images/2.png" alt="SUDO Su Makinesi 2" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">SUDO 7/24 Hizmet</h3>
                <p className="text-gray-600 mb-4">Çevre dostu 7/24 su satma makinelerimiz işletmenizde fark yaratır</p>
                <Link to="/hizmetlerimiz" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  <span>Detaylar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-64 overflow-hidden">
                <img src="/images/3.png" alt="SUDO Su Makinesi 3" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">SUDO Premium</h3>
                <p className="text-gray-600 mb-4">Dokunmatik kontrol, akıllı ödeme sistemleri ve uzaktan izleme özellikleri</p>
                <Link to="/hizmetlerimiz" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  <span>Detaylar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Özellikler Bölümü */}
      <section ref={featuresRef} className="py-20 bg-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Su Satma Makinelerimizin Avantajları</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, güvenilir ve kullanımı kolay su satma makinelerimiz ile işletmeniz için doğru çözümü sunuyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Özellik Kartları */}
            <div className="feature-card bg-blue-50 rounded-xl p-8 shadow-lg opacity-0 transition-all duration-700 transform translate-y-10">
              <div className="bg-blue-500 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Yüksek Verimlilik</h3>
              <p className="text-gray-600">
                Enerji tasarruflu makinelerimiz, düşük elektrik tüketimi ile yüksek performans sağlar.
              </p>
            </div>
            
            <div className="feature-card bg-blue-50 rounded-xl p-8 shadow-lg opacity-0 transition-all duration-700 transform translate-y-10">
              <div className="bg-blue-500 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sağlıklı ve Güvenli</h3>
              <p className="text-gray-600">
                Gelişmiş arıtma sistemlerimiz, sağlıklı ve temiz su tüketimi garantisi sağlar.
              </p>
            </div>
            
            <div className="feature-card bg-blue-50 rounded-xl p-8 shadow-lg opacity-0 transition-all duration-700 transform translate-y-10">
              <div className="bg-blue-500 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Kolay Kullanım</h3>
              <p className="text-gray-600">
                Kullanıcı dostu arayüzü ve dokunmatik ekranı ile herkes için kolayca kullanılabilir.
              </p>
            </div>
            
            <div className="feature-card bg-blue-50 rounded-xl p-8 shadow-lg opacity-0 transition-all duration-700 transform translate-y-10">
              <div className="bg-blue-500 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Akıllı Ödeme Sistemleri</h3>
              <p className="text-gray-600">
                Nakit, kredi kartı veya mobil ödeme seçenekleri ile müşterilerinize esneklik sunun.
              </p>
            </div>
            
            <div className="feature-card bg-blue-50 rounded-xl p-8 shadow-lg opacity-0 transition-all duration-700 transform translate-y-10">
              <div className="bg-blue-500 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Uzaktan İzleme</h3>
              <p className="text-gray-600">
                Makinelerinizin durumunu ve satış verilerini uzaktan izleyebilme imkanı.
              </p>
            </div>
            
            <div className="feature-card bg-blue-50 rounded-xl p-8 shadow-lg opacity-0 transition-all duration-700 transform translate-y-10">
              <div className="bg-blue-500 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Çevre Dostu</h3>
              <p className="text-gray-600">
                Plastik şişe kullanımını azaltan, çevre dostu ve sürdürülebilir bir çözüm.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* İstatistikler Bölümü */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <p className="text-blue-200">Kurulu Makine</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">81</div>
              <p className="text-blue-200">Hizmet Verilen İl</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-blue-200">Deneyim Yılı</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <p className="text-blue-200">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Çağrı Bölümü */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 md:p-12 shadow-xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Su Satma Makinesi Tedarik Etmeye Hazır Mısınız?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              SUDO su makinelerimiz, modern teknoloji ile güvenilir hizmeti bir araya getirerek, işletmenize değer katar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/iletisim" className="btn bg-white text-primary hover:bg-blue-100 transition-colors">
                Hemen İletişime Geçin
              </Link>
              <Link to="/hizmetlerimiz" className="btn border-2 border-white hover:bg-white hover:text-primary transition-colors">
                Hizmetlerimizi İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}