import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

// TODO: Zamenjajte s pravimi slikami food trucka
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    alt: 'Food truck na festivalu',
    category: 'festival'
  },
  {
    id: 2,
    src: '/images/gallery-2.jpg',
    alt: 'Food truck na poroki',
    category: 'poroka'
  },
  {
    id: 3,
    src: '/images/gallery-3.jpg',
    alt: 'Food truck notranjost',
    category: 'oprema'
  },
  {
    id: 4,
    src: '/images/gallery-4.jpg',
    alt: 'Food truck na poslovnem dogodku',
    category: 'poslovni'
  },
  {
    id: 5,
    src: '/images/gallery-5.jpg',
    alt: 'Food truck zunanjost',
    category: 'oprema'
  },
  {
    id: 6,
    src: '/images/gallery-6.jpg',
    alt: 'Priprava hrane v food trucku',
    category: 'hrana'
  }
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section className="gallery section bg-light" id="galerija">
      <div className="container">
        <div className="section-header">
          <span className="gallery__label">Galerija</span>
          <h2>Poglejte naš food truck v akciji</h2>
          <p>
            Navdihnite se z našimi preteklimi dogodki in si oglejte,
            kako bo food truck izgledal na vašem dogodku.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              className={`gallery__item ${index === 0 ? 'gallery__item--large' : ''}`}
              onClick={() => openLightbox(index)}
              aria-label={`Odpri sliko: ${image.alt}`}
            >
              {/* TODO: Zamenjajte placeholder z dejansko sliko */}
              <div className="gallery__placeholder">
                <span className="gallery__placeholder-text">
                  {image.alt}
                </span>
                <span className="gallery__placeholder-hint">
                  Slika {index + 1}
                </span>
              </div>
              <div className="gallery__overlay">
                <span>Poglej</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Galerija slik"
        >
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Zapri galerijo"
          >
            <X size={24} />
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Prejšnja slika"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            {/* TODO: Zamenjajte z dejansko sliko */}
            <div className="lightbox__placeholder">
              <span>{galleryImages[currentImage].alt}</span>
            </div>
            <p className="lightbox__caption">
              {galleryImages[currentImage].alt} ({currentImage + 1}/{galleryImages.length})
            </p>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Naslednja slika"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
