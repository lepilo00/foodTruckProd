import { useState, useEffect } from 'react';
import { Menu, X, Truck } from 'lucide-react';
import './Header.css';

const navLinks = [
  { href: '#storitev', label: 'O storitvi' },
  { href: '#cenik', label: 'Cenik' },
  { href: '#prednosti', label: 'Prednosti' },
  { href: '#galerija', label: 'Galerija' },
  { href: '#postopek', label: 'Postopek' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="header__nav container" aria-label="Glavna navigacija">
        <a href="/" className="header__logo" aria-label="Food Truck Najem - Domov">
          <Truck className="header__logo-icon" aria-hidden="true" />
          <span className="header__logo-text">
            Food Truck <span className="text-primary">Najem</span>
          </span>
        </a>

        <ul className={`header__links ${isMenuOpen ? 'header__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="header__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="header__cta-mobile">
            <a
              href="#kontakt"
              className="btn btn-primary"
              onClick={(e) => handleNavClick(e, '#kontakt')}
            >
              Povpraševanje
            </a>
          </li>
        </ul>

        <a
          href="#kontakt"
          className="btn btn-primary header__cta-desktop"
          onClick={(e) => handleNavClick(e, '#kontakt')}
        >
          Povpraševanje
        </a>

        <button
          className="header__menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Zapri meni' : 'Odpri meni'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
