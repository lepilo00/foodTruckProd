import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqData = [
  {
    question: 'Kako poteka najem food trucka?',
    answer: 'Postopek je preprost: najprej oddajte povpraševanje preko našega obrazca ali nas pokličite. Preverili bomo razpoložljivost in vam poslali ponudbo. Po potrditvi rezervacije dogovorimo podrobnosti o dostavi ali prevzemu. Na dan dogodka poskrbimo za vse nastavitve, vi pa uživate v dogodku.'
  },
  {
    question: 'Ali je možen vikend najem?',
    answer: 'Seveda! Vikend najem je naša najbolj priljubljena možnost. Vključuje najem od petka do nedelje (3 dni) po ugodni ceni 400 EUR. Ta paket je idealen za festivale, poroke in večdnevne dogodke.'
  },
  {
    question: 'Kako rezerviram termin?',
    answer: 'Termin lahko rezervirate preko spletnega obrazca, po telefonu ali elektronski pošti. Priporočamo, da nas kontaktirate vsaj 2-4 tedne pred želenim datumom, še posebej za vikende in poletne mesece, ko je povpraševanje največje.'
  },
  {
    question: 'Ali je možna prilagoditev ponudbe?',
    answer: 'Absolutno. Vsak dogodek je edinstven, zato prilagajamo ponudbo vašim potrebam. Možna je prilagoditev trajanja najema, dodatne opreme, dostavnih razdalj in drugih storitev. Kontaktirajte nas s podrobnostmi vašega dogodka za individualno ponudbo.'
  },
  {
    question: 'Kakšna oprema je vključena v najem?',
    answer: 'Food truck je popolnoma opremljen s profesionalno kuhinjsko opremo: delovna površina, hladilnik, zamrzovalnik, električni priključki, osvetlitev in osnovna kuhinjska orodja. Za specifične potrebe lahko zagotovimo dodatno opremo.'
  },
  {
    question: 'Ali nudite dostavo food trucka?',
    answer: 'Da, ponujamo dostavo na lokacijo vašega dogodka. Pri vikend paketu je dostava do 50 km brezplačna, pri tedenskem paketu pa do 100 km. Za daljše razdalje zaračunamo kilometrino po dogovoru.'
  },
  {
    question: 'Kaj potrebujem za delovanje food trucka?',
    answer: 'Za osnovno delovanje potrebujete električni priključek (230V). Če na lokaciji ni možnosti priklopa, lahko zagotovimo agregat za doplačilo. Priporočamo tudi raven teren in zadosten prostor za manevriranje vozila.'
  },
  {
    question: 'Kakšni so plačilni pogoji?',
    answer: 'Ob potrditvi rezervacije zahtevamo 30% predplačilo, preostali znesek pa poravnate najkasneje na dan prevzema oz. dostave. Sprejemamo plačilo z bančnim nakazilom ali gotovino.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="faq__label">FAQ</span>
          <h2>Pogosta vprašanja</h2>
          <p>
            Tukaj najdete odgovore na najpogostejša vprašanja.
            Če imate dodatna vprašanja, nas kontaktirajte.
          </p>
        </div>

        <div className="faq__list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className="faq__icon"
                  size={20}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq__answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq__cta">
          <p>Niste našli odgovora na vaše vprašanje?</p>
          <a href="#kontakt" className="btn btn-primary">
            Kontaktirajte nas
          </a>
        </div>
      </div>
    </section>
  );
}
