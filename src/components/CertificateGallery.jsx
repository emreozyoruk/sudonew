import { useState } from 'react';

export default function CertificateGallery({ className = '' }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Sertifika bilgileri
  const certificates = [
    {
      id: 1,
      name: 'emcelek-9-1.png',
      title: 'ISO 9001:2015',
      description: 'Kalite Yönetim Sistemi Sertifikası',
      image: '/images/certificates/EMC ELEKTRİK 9-1.png',
    },
    {
      id: 2,
      name: 'emcelek-22-1.png',
      title: 'ISO 22000:2018',
      description: 'Gıda Güvenliği Yönetim Sistemi Sertifikası',
      image: '/images/certificates/EMC ELEKTRİK 22 -1.png',
    },
    {
      id: 3,
      name: 'uygunluk-onayi.png',
      title: 'CE Uygunluk Onayı',
      description: 'C Vitaminli İçecek Otomatı - Avrupa Standartlarına Uygunluk',
      image: '/images/certificates/UYGUNLUK ONAYI-C Vitaminli İçecek Otomatı-1.png',
    }
  ];

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate) => (
          <div 
            key={certificate.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => openCertificate(certificate)}
          >
            <div className="aspect-w-3 aspect-h-4 relative">
              <img 
                src={certificate.image} 
                alt={certificate.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/placeholder.jpg';
                  console.error("Failed to load image:", certificate.image);
                }}
              />
              
              {/* Resim yükleme göstergesi */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-primary font-medium opacity-0">
                Yükleniyor...
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">{certificate.title}</h3>
              <p className="text-gray-600">{certificate.description}</p>
              <div className="mt-4">
                <button className="text-blue-500 font-medium hover:text-blue-700 flex items-center">
                  <span>Sertifikayı Görüntüle</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sertifika Modalı */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80" onClick={closeCertificate}>
          <div className="max-w-5xl w-full bg-white rounded-lg shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-bold text-gray-800">{selectedCertificate.title}</h3>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={closeCertificate}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <img 
                src={selectedCertificate.image} 
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
            <div className="p-4 border-t">
              <p className="text-gray-600">{selectedCertificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 