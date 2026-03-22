import { useState } from 'react';
import { X } from 'lucide-react';
import foodTruckImg from '../assets/unnamed.jpg';
import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    src: foodTruckImg,
    alt: 'Food truck'
  }
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
  };

  const image = galleryImages[0];

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

        <div className="gallery__single">
          <button
            className="gallery__item gallery__item--single"
            onClick={openLightbox}
            aria-label={`Odpri sliko: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} className="gallery__img" />
            <div className="gallery__overlay">
              <span>Poglej</span>
            </div>
          </button>
        </div>
      </div>

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

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={image.src} alt={image.alt} className="lightbox__img" />
          </div>
        </div>
      )}
    </section>
  );
}
