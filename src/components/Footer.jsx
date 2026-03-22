import { Truck, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const footerLinks = [
  {
    title: 'Navigacija',
    links: [
      { label: 'O storitvi', href: '#storitev' },
      { label: 'Cenik', href: '#cenik' },
      { label: 'Prednosti', href: '#prednosti' },
      { label: 'Galerija', href: '#galerija' },
      { label: 'Postopek', href: '#postopek' },
      { label: 'FAQ', href: '#faq' }
    ]
  },
  {
    title: 'Storitve',
    links: [
      { label: 'Dnevni najem', href: '#cenik' },
      { label: 'Vikend najem', href: '#cenik' },
      { label: 'Tedenski najem', href: '#cenik' },
      { label: 'Festivali', href: '#storitev' },
      { label: 'Poroke', href: '#storitev' },
      { label: 'Poslovni dogodki', href: '#storitev' }
    ]
  }
];

const socialLinks = [
  {
    icon: Facebook,
    href: '#', // TODO: Dodajte pravo povezavo
    label: 'Facebook'
  },
  {
    icon: Instagram,
    href: '#', // TODO: Dodajte pravo povezavo
    label: 'Instagram'
  },
  {
    icon: Linkedin,
    href: '#', // TODO: Dodajte pravo povezavo
    label: 'LinkedIn'
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <Truck className="footer__logo-icon" aria-hidden="true" />
              <span className="footer__logo-text">
                Food Truck <span className="text-primary">Najem</span>
              </span>
            </a>
            <p className="footer__description">
              Profesionalen najem food trucka za vaše dogodke.
              Festivali, poroke, poslovni dogodki in več.
            </p>

            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="footer__column">
              <h4 className="footer__column-title">{column.title}</h4>
              <ul className="footer__links">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="footer__link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="footer__column">
            <h4 className="footer__column-title">Kontakt</h4>
            <ul className="footer__contact">
              <li>
                <MapPin size={16} />
                {/* TODO: Vnesite pravi naslov */}
                <span>Ulica 123, 1000 Ljubljana</span>
              </li>
              <li>
                <Phone size={16} />
                {/* TODO: Vnesite pravo telefonsko številko */}
                <a href="tel:+38640811360">+386 40 811 360</a>
              </li>
              <li>
                <Mail size={16} />
                {/* TODO: Vnesite pravi email */}
                <a href="mailto:info@foodtrucknajem.com">info@foodtrucknajem.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Food Truck Najem. Vse pravice pridržane.
          </p>
          <div className="footer__legal">
            {/* TODO: Dodajte povezave do pravnih dokumentov */}
            <a href="#" className="footer__legal-link">Pogoji uporabe</a>
            <a href="#" className="footer__legal-link">Politika zasebnosti</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
