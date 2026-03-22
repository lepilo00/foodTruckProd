import { Check, Star, ArrowRight } from 'lucide-react';
import './Pricing.css';

const pricingPlans = [
  {
    id: 'daily',
    name: 'Dnevni najem',
    price: 150,
    period: 'na dan',
    description: 'Idealno za manjše dogodke in testne prireditve',
    features: [
      'Popolnoma opremljen food truck',
      'Osnovna tehnična podpora',
      'Dostava v okolici',
      'Navodila za uporabo',
      'Čiščenje po dogodku'
    ],
    popular: false,
    ctaText: 'Povpraševanje'
  },
  {
    id: 'weekend',
    name: 'Vikend najem',
    price: 400,
    period: 'za vikend',
    description: 'Najboljša izbira za vikend dogodke in festivale',
    features: [
      'Vse iz dnevnega najema',
      'Petek, sobota in nedelja',
      'Prednostna podpora',
      'Brezplačna dostava do 50 km',
      'Svetovanje pri organizaciji',
      'Dodatna oprema po potrebi'
    ],
    popular: true,
    ctaText: 'Izberi vikend paket'
  },
  {
    id: 'weekly',
    name: 'Tedenski najem',
    price: 950,
    period: 'na teden',
    description: 'Za daljše prireditve in sezonske najeme',
    features: [
      'Vse iz vikend najema',
      '7 dni najema',
      '24/7 tehnična podpora',
      'Brezplačna dostava do 100 km',
      'Personalizacija vozila',
      'Prioritetna rezervacija',
      'Popust za podaljšanje'
    ],
    popular: false,
    ctaText: 'Povpraševanje'
  }
];

export default function Pricing() {
  const handleCtaClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pricing section bg-light" id="cenik">
      <div className="container">
        <div className="section-header">
          <span className="pricing__label">Cenik</span>
          <h2>Transparentne cene za vsak dogodek</h2>
          <p>
            Izberite paket, ki ustreza vašim potrebam. Vse cene so brez DDV.
            Za posebne zahteve nas kontaktirajte.
          </p>
        </div>

        <div className="pricing__grid">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing__card ${plan.popular ? 'pricing__card--popular' : ''}`}
            >
              {plan.popular && (
                <div className="pricing__badge">
                  <Star size={14} />
                  Najbolj popularno
                </div>
              )}

              <div className="pricing__header">
                <h3 className="pricing__name">{plan.name}</h3>
                <p className="pricing__description">{plan.description}</p>
              </div>

              <div className="pricing__price">
                <span className="pricing__amount">{plan.price}</span>
                <span className="pricing__currency">EUR</span>
                <span className="pricing__period">{plan.period}</span>
              </div>

              <ul className="pricing__features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="pricing__feature">
                    <Check className="pricing__feature-icon" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing__cta`}
                onClick={handleCtaClick}
              >
                {plan.ctaText}
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        <p className="pricing__note">
          * Vse cene so informativne in se lahko prilagodijo glede na
          specifične zahteve vašega dogodka. Kontaktirajte nas za natančno ponudbo.
        </p>
      </div>
    </section>
  );
}
