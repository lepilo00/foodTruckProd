import {
  Clock,
  Sparkles,
  Shield,
  ThumbsUp,
  Wrench,
  Heart
} from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: Clock,
    title: 'Fleksibilen najem',
    description: 'Prilagodljivi termini najema - od enega dne do več tednov. Najem prilagodimo vašim potrebam in terminskemu načrtu.'
  },
  {
    icon: Sparkles,
    title: 'Primeren za vse dogodke',
    description: 'Festivali, poroke, rojstni dnevi, poslovne prireditve, team buildingi - naš food truck je primeren za vse priložnosti.'
  },
  {
    icon: Shield,
    title: 'Profesionalen videz',
    description: 'Moderno oblikovan food truck, ki doda vizualni pečat vašemu dogodku in pritegne pozornost obiskovalcev.'
  },
  {
    icon: ThumbsUp,
    title: 'Enostavno naročilo',
    description: 'Preprost proces povpraševanja in rezervacije. Hitro potrdimo razpoložljivost in vam pripravimo ponudbo.'
  },
  {
    icon: Wrench,
    title: 'Popolna oprema',
    description: 'Profesionalna kuhinjska oprema, hladilni sistemi, električni priključki - vse potrebno za uspešno izvedbo.'
  },
  {
    icon: Heart,
    title: 'Podpora strankam',
    description: 'Od prvega povpraševanja do zaključka dogodka smo vam na voljo za vsa vprašanja in pomoč.'
  }
];

export default function Features() {
  return (
    <section className="features section" id="prednosti">
      <div className="container">
        <div className="section-header">
          <span className="features__label">Prednosti</span>
          <h2>Zakaj izbrati naš food truck?</h2>
          <p>
            Z nami dobite več kot le najem vozila - dobite partnerja,
            ki skrbi za uspeh vašega dogodka.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="features__card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="features__icon">
                <feature.icon size={28} />
              </div>
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
