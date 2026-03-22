import { Utensils, Users, Calendar, Award } from 'lucide-react';
import './About.css';

const features = [
  {
    icon: Utensils,
    title: 'Popolna oprema',
    description: 'Profesionalno opremljen food truck z vsem potrebnim za pripravo hrane'
  },
  {
    icon: Users,
    title: 'Vsi tipi dogodkov',
    description: 'Od intimnih zabav do velikih festivalov - prilagodimo se vašim potrebam'
  },
  {
    icon: Calendar,
    title: 'Fleksibilni termini',
    description: 'Rezervirajte za en dan, vikend ali daljše obdobje'
  },
  {
    icon: Award,
    title: 'Profesionalna podpora',
    description: 'Svetovanje in pomoč pri organizaciji vašega dogodka'
  }
];

export default function About() {
  return (
    <section className="about section" id="storitev">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="about__label">O storitvi</span>
            <h2 className="about__title">
              Vaš partner za nepozabne
              <span className="text-primary"> kulinarične dogodke</span>
            </h2>
            <p className="about__text">
              Naš food truck je idealna izbira za vse, ki želite svojemu dogodku
              dodati poseben pečat. Naj gre za <strong>poročno slavje</strong>,
              <strong> poslovni dogodek</strong>, <strong>festival</strong> ali
              <strong> zasebno zabavo</strong> - z nami bo vaš dogodek
              nepozaben.
            </p>
            <p className="about__text">
              Ponujamo popolnoma opremljen food truck, ki ga lahko najamete za
              krajše ali daljše obdobje. Naša oprema omogoča pripravo širokega
              spektra jedi, od klasične ulične hrane do gurmanskih specialitet.
            </p>
            <p className="about__text">
              S profesionalnim pristopom in večletnimi izkušnjami zagotavljamo,
              da bo vaš dogodek potekal brezhibno. Poskrbimo za vse - od
              svetovanja pri načrtovanju do tehnične podpore med dogodkom.
            </p>
          </div>

          <div className="about__features">
            {features.map((feature, index) => (
              <div
                key={index}
                className="about__feature"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="about__feature-icon">
                  <feature.icon size={24} />
                </div>
                <div className="about__feature-content">
                  <h3 className="about__feature-title">{feature.title}</h3>
                  <p className="about__feature-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
