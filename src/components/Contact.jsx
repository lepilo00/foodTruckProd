import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact section bg-light" id="kontakt">
      <div className="container">
        <div className="section-header">
          <span className="contact__label">Kontakt</span>
          <h2>Stopite v stik z nami</h2>
          <p>
            Za povpraševanje nas pokličite ali pišite na spodnji email naslov.
            Odgovorimo hitro in vam pomagamo pri organizaciji vašega dogodka.
          </p>
        </div>

        <div className="contact__cta-banner">
          <p className="contact__cta-text">
            Za rezervacijo ali povpraševanje nas <strong>pokličite</strong> ali pošljite <strong>email</strong>
          </p>
        </div>

        <div className="contact__cards">
          <a href="tel:+38640811360" className="contact__card contact__card--phone">
            <div className="contact__card-icon">
              <Phone size={36} />
            </div>
            <div className="contact__card-body">
              <strong>Pokličite nas</strong>
              <span className="contact__card-value">+386 40 811 360</span>
              <span className="contact__card-note">Najhitrejši način za rezervacijo</span>
            </div>
          </a>

          <a href="mailto:info@foodtrucknajem.com" className="contact__card contact__card--email">
            <div className="contact__card-icon">
              <Mail size={36} />
            </div>
            <div className="contact__card-body">
              <strong>Pišite nam</strong>
              <span className="contact__card-value">info@foodtrucknajem.com</span>
              <span className="contact__card-note">Odgovorimo v 24 urah</span>
            </div>
          </a>
        </div>

        <div className="contact__info-row">
          <div className="contact__info-item">
            <Clock size={18} />
            <div>
              <strong>Delovni čas</strong>
              <p>Pon–Pet: 9:00–17:00 &nbsp;|&nbsp; Sob: 9:00–13:00</p>
            </div>
          </div>
          <div className="contact__info-item">
            <MapPin size={18} />
            <div>
              <strong>Lokacija</strong>
              <p>Ljubljana, Slovenija</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
