import { useEffect, useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function FAQPage() {
  // Sayfa başlığını güncelle
  useEffect(() => {
    document.title = 'Sık Sorulan Sorular | SUDO'
    window.scrollTo(0, 0)
  }, [])

  // Kategoriye göre filtreleme
  const [activeCategory, setActiveCategory] = useState('tumu')
  
  // FAQ verileri
  const faqData = [
    {
      category: 'genel',
      question: 'SUDO nedir?',
      answer: 'Halkımızın hızlı, uygun fiyatlı ve hijyenik şekilde C vitamini içeren kaliteli içeceğe erişimini sağlayan bir içecek otomatıdır.'
    },
    {
      category: 'teknik',
      question: 'Cihazın çalışma sistemi nasıldır?',
      answer: 'SUDO, şehir şebekesinden aldığı suyu NSF sertifikalı endüstriyel filtrelerle zararlı maddelerden arındırır, ardından gelişmiş membran teknolojisiyle derinlemesine temizler. Ardından özel bir filtre aracılığıyla içeceğe, insan sağlığı için gerekli olan faydalı mineralleri geri kazandırır. Son aşamada, dozajlama sistemi ile gıda kodeksine uygun şekilde C vitamini eklenerek zenginleştirilmiş sağlıklı bir içecek sunar.'
    },
    {
      category: 'ticari',
      question: 'SUDO vitaminli içeceğinizin fiyatı nedir?',
      answer: 'Fiyatlamamız; 5 lt içecekte 5 TL, 19 lt içecekte 20 TL\'dir. Bu fiyat SUDO firması tarafından belirlenir her otomat makinesinde aynı fiyatlandırma uygulanır. Fiyatlandırma bölge il ve ilçelerde farklılık gösterebilir.'
    },
    {
      category: 'yasal',
      question: 'SUDO otomatına sahip olmak için resmi belge gerekiyor mu?',
      answer: 'Vergi levhanızda OTOMATİK SATIŞ MAKİNELERİYLE PERAKENDE TİCARET (NACE Kodu: 479910) ne GIDA faaliyet alanlarının yer alması gerekmektedir. Size en yakın Tarım ve Orman İl/İlçe Müdürlüğü\'ne, firmamıza ait sertifika ve izin belgeleriyle başvurarak, işletmenize özel bir "işletme kaydı" oluşturmanız gerekmektedir.'
    },
    {
      category: 'ticari',
      question: 'Kazancımı nasıl hesaplayabilirim?',
      answer: 'Cihazımızın üzerindeki ekran aracılığıyla size özel şifreli oturumdan cihaz kazancını görüntüleyebilirsiniz. Adet satışını kasasında bulunan madeni para ve kâğıt para vb. bilgileri panel üzerinden görüntüleyebilirsiniz.'
    },
    {
      category: 'teknik',
      question: 'Cihaz tesliminden önce hangi işlemleri tamamlamam gerekiyor?',
      answer: 'Cihazın kurulacağı alana elektrik, temiz su girişi ve atık su çıkışı için gerekli altyapıyı hazırlatmanız gerekmektedir. SUDO tarafından talep edilen belgeler eksiksiz şekilde tamamlandığında, cihazın teslimi ve kurulumu sonrası anında satışa başlayabilirsiniz.'
    },
    {
      category: 'ticari',
      question: 'Elektrik ve su faturaları kârlılığımı ne ölçüde etkiler?',
      answer: 'SUDO, sahip olduğu ileri seviye endüstriyel arıtma teknolojisi sayesinde yalnızca 1 litre atık suya karşılık 1 litre içilebilir içecek üretir. Bu verimlilik oranı, enerji ve su tüketimini minimum seviyede tutarak işletme maliyetlerinizi ciddi oranda düşürür. Tüm sabit ve değişken giderler hesaba katıldığında, sistemin genel işletme yapısı size ortalama %85 net kâr sunar. Yani her 100 TL\'lik satıştan yalnızca 15 TL\'si gider olarak yansırken, geri kalan 85 TL doğrudan cebinize kalır. Düşük sarfiyat – yüksek verim prensibiyle çalışan SUDO, sürdürülebilir bir gelir modeli sunarken, enerji ve su tüketiminde tasarrufun gücünü size kazanca dönüştürme imkânı verir.'
    },
    {
      category: 'teknik',
      question: 'Arıza Durumunda Teknik Destek Süreci',
      answer: 'Cihazınızda meydana gelebilecek herhangi bir arıza veya teknik aksaklık durumunda, yetkili teknik servisimizle iletişime geçerek servis kaydı oluşturmanız gerekmektedir. Tarafımıza ulaşan arıza bildirimi, teknik birimimiz tarafından en kısa sürede değerlendirilir. Yerinde müdahale gerektiren durumlarda, teknik ekiplerimiz arıza kaydının alınmasını takiben genellikle 24 ila 48 saat içerisinde müdahale etmek üzere adresinize yönlendirilir. SUDO, garanti kapsamındaki ürünlerde hızlı ve etkin servis desteği sağlayarak cihazınızın en kısa sürede yeniden faaliyete geçmesini hedefler.'
    },
    {
      category: 'ticari',
      question: 'Makinenin aylık ortalama filtre maliyeti nedir?',
      answer: 'Arıtma cihazlarının aylık ortalama filtre maliyeti 500-600 TL bandındadır. Bu değer kullanım miktarına göre değişiklik gösterebilir.'
    }
  ]
  
  // Aktif kategoriye göre filtrelenmiş sorular
  const filteredQuestions = activeCategory === 'tumu' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory)
  
  return (
    <div className="pt-24 pb-16">
      {/* Başlık */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-6 text-white">Sık Sorulan Sorular</h1>
          <p className="text-xl max-w-3xl">
            C Vitaminli içecek otomatlarımız ve hizmetlerimiz hakkında sık sorulan soruların cevaplarını 
            burada bulabilirsiniz. Aradığınız cevabı bulamadıysanız lütfen bizimle iletişime geçin.
          </p>
        </div>
      </section>
      
      {/* Kategori Filtreleme */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center mb-12 space-x-2">
            <button 
              onClick={() => setActiveCategory('tumu')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === 'tumu' 
                  ? 'bg-primary text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              Tüm Sorular
            </button>
            <button 
              onClick={() => setActiveCategory('genel')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === 'genel' 
                  ? 'bg-primary text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              Genel Sorular
            </button>
            <button 
              onClick={() => setActiveCategory('teknik')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === 'teknik' 
                  ? 'bg-primary text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              Teknik Sorular
            </button>
            <button 
              onClick={() => setActiveCategory('ticari')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === 'ticari' 
                  ? 'bg-primary text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              Ticari Sorular
            </button>
            <button 
              onClick={() => setActiveCategory('yasal')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === 'yasal' 
                  ? 'bg-primary text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              Yasal Sorular
            </button>
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredQuestions.map((faq, index) => (
              <Disclosure as="div" key={index} className="border border-blue-100 rounded-lg bg-white overflow-hidden">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-lg font-medium text-primary focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-primary`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 py-4 text-base text-gray-600 bg-blue-50 border-t border-blue-100">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
          
          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-xl text-gray-600">Bu kategoride henüz soru bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Hala sorunuz mu var? */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">Aradığınız Cevabı Bulamadınız mı?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Merak ettiğiniz bir konuda cevap bulamadıysanız, bizimle iletişime geçebilirsiniz. 
              Uzman ekibimiz sorularınızı cevaplamaktan memnuniyet duyacaktır.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/iletisim" className="btn-primary">Bize Ulaşın</a>
              <a href="tel:+905454045122" className="btn-accent flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0545 404 51 22
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}