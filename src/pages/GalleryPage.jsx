import ImageGallery from '../components/ImageGallery'
import { useEffect } from 'react'

export default function GalleryPage() {
  // Sayfa başlığını güncelle
  useEffect(() => {
    document.title = 'Galeri | SUDO'
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 pt-28 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Ürün Galerimiz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SUDO modern içecek satma makinelerimizin fotoğraflarını ve kurulum örneklerini keşfedin.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-secondary">Makinelerimiz</h2>
            
            {/* Galeri bileşeni */}
            <ImageGallery folder="images" className="mb-8" />
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700">
                <strong>SUDO C Vitaminli İçecek:</strong> Her zaman taze, C Vitaminli, mineralli, sağlıklı içecek. 
                İçecek otomatlarımız çevre dostu ve 7/24 hizmet vermektedir.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 md:p-12 shadow-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Özel Teklifler İçin Bize Ulaşın</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            İşletmeniz için en uygun SUDO içecek satma makinesi modellerini seçmek ve özel fiyat teklifleri almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn bg-white text-primary hover:bg-blue-100 transition-colors">
              Hemen İletişime Geçin
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 