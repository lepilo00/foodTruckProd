import { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import './Contact.css';

const eventTypes = [
  'Festival',
  'Poroka',
  'Rojstni dan',
  'Poslovni dogodek',
  'Team building',
  'Zasebna zabava',
  'Drugo'
];

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: '',
  message: ''
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ime je obvezno';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email je obvezen';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Vnesite veljaven email naslov';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonska številka je obvezna';
    } else if (!/^[+]?[\d\s-]{8,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Vnesite veljavno telefonsko številko';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Datum dogodka je obvezen';
    } else {
      const selectedDate = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.eventDate = 'Datum ne more biti v preteklosti';
      }
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Izberite tip dogodka';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // TODO: Tukaj povežite z backendom ali email storitvijo
    // Primer: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

    // Simulacija oddaje
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormState);

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="contact section bg-light" id="kontakt">
      <div className="container">
        <div className="section-header">
          <span className="contact__label">Kontakt</span>
          <h2>Oddajte povpraševanje</h2>
          <p>
            Izpolnite obrazec in se vam bomo oglasili v najkrajšem možnem času.
            Lahko nas tudi kontaktirate neposredno.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__info-title">Kontaktni podatki</h3>
            <p className="contact__info-text">
              Za hitra vprašanja nas lahko kontaktirate tudi po telefonu
              ali elektronski pošti.
            </p>

            <ul className="contact__details">
              <li className="contact__detail">
                <div className="contact__detail-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong>Naslov</strong>
                  {/* TODO: Vnesite pravi naslov */}
                  <p>Ulica 123, 1000 Ljubljana, Slovenija</p>
                </div>
              </li>
              <li className="contact__detail">
                <div className="contact__detail-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Telefon</strong>
                  {/* TODO: Vnesite pravo telefonsko številko */}
                  <p>
                    <a href="tel:+38640123456">+386 40 123 456</a>
                  </p>
                </div>
              </li>
              <li className="contact__detail">
                <div className="contact__detail-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <strong>Email</strong>
                  {/* TODO: Vnesite pravi email */}
                  <p>
                    <a href="mailto:info@foodtruck-najem.si">info@foodtruck-najem.si</a>
                  </p>
                </div>
              </li>
            </ul>

            <div className="contact__hours">
              <strong>Delovni čas</strong>
              <p>Ponedeljek - Petek: 9:00 - 17:00</p>
              <p>Sobota: 9:00 - 13:00</p>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            {isSubmitted ? (
              <div className="contact__success">
                <CheckCircle size={48} className="contact__success-icon" />
                <h3>Hvala za povpraševanje!</h3>
                <p>Vaše sporočilo smo prejeli in se vam bomo oglasili v najkrajšem možnem času.</p>
              </div>
            ) : (
              <>
                <div className="contact__form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Ime in priimek *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Janez Novak"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email naslov *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="janez@email.si"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="form-error" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+386 40 123 456"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="form-error" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="eventDate" className="form-label">
                      Datum dogodka *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      className={`form-input ${errors.eventDate ? 'form-input--error' : ''}`}
                      value={formData.eventDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      aria-describedby={errors.eventDate ? 'eventDate-error' : undefined}
                    />
                    {errors.eventDate && (
                      <span id="eventDate-error" className="form-error" role="alert">
                        {errors.eventDate}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="eventType" className="form-label">
                    Tip dogodka *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    className={`form-select ${errors.eventType ? 'form-input--error' : ''}`}
                    value={formData.eventType}
                    onChange={handleChange}
                    aria-describedby={errors.eventType ? 'eventType-error' : undefined}
                  >
                    <option value="">Izberite tip dogodka</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <span id="eventType-error" className="form-error" role="alert">
                      {errors.eventType}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Dodatne informacije
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Opišite vaš dogodek, lokacijo, pričakovano število gostov..."
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg contact__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact__spinner" aria-hidden="true"></span>
                      Pošiljanje...
                    </>
                  ) : (
                    <>
                      Pošlji povpraševanje
                      <Send size={18} />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
