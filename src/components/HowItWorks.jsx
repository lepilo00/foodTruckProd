import { Send, Calendar, Truck, PartyPopper } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: Send,
    number: '01',
    title: 'Oddaja povpraševanja',
    description: 'Izpolnite obrazec s podrobnostmi o vašem dogodku. Povejte nam datum, lokacijo in vrsto prireditve.'
  },
  {
    icon: Calendar,
    number: '02',
    title: 'Uskladitev termina',
    description: 'Pregledamo vašo zahtevo, preverimo razpoložljivost in vam pošljemo ponudbo s podrobnostmi.'
  },
  {
    icon: Truck,
    number: '03',
    title: 'Prevzem ali dostava',
    description: 'Food truck dostavimo na dogovorjeno lokacijo ali ga prevzamete pri nas. Poskrbimo za vse nastavitve.'
  },
  {
    icon: PartyPopper,
    number: '04',
    title: 'Uspešen dogodek',
    description: 'Uživajte v vašem dogodku! V primeru težav smo dosegljivi za podporo skozi celoten najem.'
  }
];

export default function HowItWorks() {
  return (
    <section className="how-it-works section" id="postopek">
      <div className="container">
        <div className="section-header">
          <span className="how-it-works__label">Postopek</span>
          <h2>Kako poteka najem?</h2>
          <p>
            V le nekaj preprostih korakih lahko najamete food truck
            za vaš dogodek. Poskrbimo za enostaven in pregleden proces.
          </p>
        </div>

        <div className="how-it-works__grid">
          {steps.map((step, index) => (
            <div
              key={index}
              className="how-it-works__step"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="how-it-works__icon-wrapper">
                <div className="how-it-works__icon">
                  <step.icon size={28} />
                </div>
                <span className="how-it-works__number">{step.number}</span>
              </div>

              <div className="how-it-works__content">
                <h3 className="how-it-works__title">{step.title}</h3>
                <p className="how-it-works__description">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="how-it-works__connector" aria-hidden="true"></div>
              )}
            </div>
          ))}
        </div>

        <div className="how-it-works__cta">
          <a href="#kontakt" className="btn btn-primary btn-lg">
            Začnite s povpraševanjem
          </a>
        </div>
      </div>
    </section>
  );
}
