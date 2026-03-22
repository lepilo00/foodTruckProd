import { ArrowRight, Star } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const handleCtaClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#kontakt');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__background" aria-hidden="true">
        {/* TODO: Zamenjajte s pravo sliko food trucka */}
        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <Star className="hero__badge-icon" size={16} />
            <span>Zaupanja vredna storitev</span>
          </div>

          <h1 className="hero__title">
            Profesionalen najem
            <span className="hero__title-highlight"> Food Trucka</span>
            <br />za vaš dogodek
          </h1>

          <p className="hero__subtitle">
            Naj bo vaš festival, poroka, poslovna prireditev ali zasebna zabava
            nepozabna. Nudimo fleksibilen najem food trucka s profesionalno
            opremo in podporo.
          </p>

          <div className="hero__cta-group">
            <a
              href="#kontakt"
              className="btn btn-primary btn-lg"
              onClick={handleCtaClick}
            >
              Oddaj povpraševanje
              <ArrowRight size={20} />
            </a>
            <a
              href="#cenik"
              className="btn btn-secondary btn-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#cenik')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Poglej cenik
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">100+</span>
              <span className="hero__stat-label">Izvedenih dogodkov</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">98%</span>
              <span className="hero__stat-label">Zadovoljnih strank</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">7+</span>
              <span className="hero__stat-label">Let izkušenj</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
}
