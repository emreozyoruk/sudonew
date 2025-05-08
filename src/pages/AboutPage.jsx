import { useEffect } from 'react'

export default function AboutPage() {
  // Sayfa başlığını güncelle
  useEffect(() => {
    document.title = 'Hakkımızda | SUDO'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-16">
      {/* Ana Başlık */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-6 text-white">Hakkımızda</h1>
          <p className="text-xl max-w-3xl">
            SUDO olarak, Türkiye'nin her noktasına modern içecek dolum makineleri 
            ve arıtma çözümleri sunuyoruz. Güvenilir, sağlıklı ve yenilikçi hizmet anlayışımızla
            sektörün lider kuruluşu olmaktan gurur duyuyoruz.
          </p>
        </div>
      </section>

      {/* Tarihçe */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary">Hikayemiz</h2>
              <p className="text-gray-700 mb-4">
                2023 yılında Manisa'da kurulan SUDO, içecek arıtma ve dolum makineleri sektöründe yenilikçi bir vizyon ile yola çıktı. 
                Türkiye'nin artan kaliteli içecek ihtiyacını kaliteli ve ekonomik bir şekilde karşılamak amacıyla kurulan firmamız, 
                kısa sürede alanında öncü kuruluşlardan biri haline geldi.
              </p>
              <p className="text-gray-700 mb-4">
                Kuruluşundan itibaren Manisa ve çevre illerde hizmet veren şirketimiz, 
                artan talep ve genişleyen vizyonu sayesinde hızla büyüyerek daha geniş bir alana hizmet vermeye başladı. 
                Bugün birçok ilde SUDO içecek dolum makineleri aktif olarak hizmet vermektedir.
              </p>
              <p className="text-gray-700">
                Müşteri memnuniyeti ve kaliteli hizmet anlayışımız, bizi sektörün güvenilir markası haline getirdi. 
                Teknolojik gelişmeleri yakından takip ederek, sürekli yenilenen ve geliştirilen ürünlerimizle 
                her zaman en iyiyi sunmayı hedefliyoruz.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <img src="/images/1.png" alt="SUDO İçecek Dolum Makinesi" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Misyonumuz</h3>
              <p className="text-gray-700 mb-4">
                Toplumun temiz ve sağlıklı içecek ihtiyacını en ekonomik ve kaliteli şekilde karşılamak, 
                doğal kaynakların korunmasına katkıda bulunmak ve çevre dostu çözümler sunmak.
              </p>
              <p className="text-gray-700">
                Teknolojik yenilikleri takip ederek, müşterilerimize en iyi hizmeti sunmak ve 
                sektördeki standartları yükseltmek temel misyonumuzdur.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Vizyonumuz</h3>
              <p className="text-gray-700 mb-4">
                İçecek arıtma ve dolum teknolojilerinde Türkiye'nin lider markası olmak ve global pazarda 
                tanınan bir marka haline gelmek.
              </p>
              <p className="text-gray-700">
                Sürdürülebilir ve yenilikçi çözümlerle, herkesin kaliteli içeceğe ekonomik şekilde 
                erişebilmesini sağlamak ve toplum sağlığına katkıda bulunmak için çalışıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ürünlerimiz */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Ürünlerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-64 overflow-hidden">
                <img src="/images/1.png" alt="SUDO İçecek Dolum Makinesi 1" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">SUDO C Vitaminli İçecek</h3>
                <p className="text-gray-600 mb-4">Her zaman taze, C Vitaminli, mineralli, sağlıklı içecek</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-64 overflow-hidden">
                <img src="/images/2.png" alt="SUDO İçecek Dolum Makinesi 2" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">SUDO 7/24 Hizmet</h3>
                <p className="text-gray-600 mb-4">Çevre dostu 7/24 içecek dolum makinelerimiz işletmenizde fark yaratır</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-64 overflow-hidden">
                <img src="/images/3.png" alt="SUDO İçecek Dolum Makinesi 3" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">SUDO Premium</h3>
                <p className="text-gray-600 mb-4">Dokunmatik kontrol, akıllı ödeme sistemleri ve uzaktan izleme özellikleri</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Değerlerimiz</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 hover:shadow-lg transition-all duration-300 rounded-xl border border-blue-100 bg-white">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Güvenilirlik</h3>
              <p className="text-gray-600">
                Müşterilerimize her zaman güvenilir ve şeffaf hizmet sunarak, verdiklerimiz sözleri tutmak temel prensibimizdir.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-all duration-300 rounded-xl border border-blue-100 bg-white">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Sürdürülebilirlik</h3>
              <p className="text-gray-600">
                Çevreye duyarlı çözümlerle, doğal kaynakların korunmasına katkıda bulunarak gelecek nesillere yaşanabilir bir dünya bırakmak.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-all duration-300 rounded-xl border border-blue-100 bg-white">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Kalite</h3>
              <p className="text-gray-600">
                Her aşamada en yüksek kalite standartlarını uygulayarak, müşterilerimize en iyi ürün ve hizmeti sunmayı hedefliyoruz.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-all duration-300 rounded-xl border border-blue-100 bg-white">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Yenilikçilik</h3>
              <p className="text-gray-600">
                Teknolojik gelişmeleri takip ederek, sürekli kendimizi yenileyerek sektörde öncü olmaya devam etmeyi amaçlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}