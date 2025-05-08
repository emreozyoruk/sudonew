import { useState, useEffect } from 'react';

export default function ImageGallery({ folder = 'images', className = '' }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  // Simüle edilmiş görüntü yükleme
  useEffect(() => {
    // Gerçek resimlerimizi kullanıyoruz
    const productImages = [
      { id: 1, name: '1.png', alt: 'SUDO Su Satma Makinesi 1' },
      { id: 2, name: '2.png', alt: 'SUDO Su Satma Makinesi 2' },
      { id: 3, name: '3.png', alt: 'SUDO Su Satma Makinesi 3' },
      { id: 4, name: '1-removebg-preview.png', alt: 'SUDO C Vitaminli Su' },
    ];
    
    setImages(productImages);
    setLoading(false);
  }, [folder]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => openModal(image)}
          >
            <div className="aspect-w-4 aspect-h-3 relative">
              <img 
                src={`/images/${image.name}`} 
                alt={image.alt}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
              
              {/* Resimler yüklenmeden önce gösterilecek yer tutucu */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-primary font-medium opacity-0">
                Resim yükleniyor...
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">{image.alt}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Resim Modalı */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75" onClick={closeModal}>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={`/images/${selectedImage.name}`} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-primary"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 