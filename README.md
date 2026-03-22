# Food Truck Najem - Spletna stran

Profesionalna, moderna in produkcijsko pripravljena spletna stran za najem food trucka.

## Tehnologije

- **React 18** - Moderna JavaScript knjižnica za gradnjo uporabniških vmesnikov
- **Vite** - Hitro razvojno okolje in build orodje
- **Lucide React** - Moderni SVG ikone
- **CSS** - Čist CSS z CSS Custom Properties za tematizacijo

## Struktura projekta

```
src/
├── components/          # React komponente
│   ├── Header.jsx      # Navigacija
│   ├── Header.css
│   ├── Hero.jsx        # Hero sekcija
│   ├── Hero.css
│   ├── About.jsx       # O storitvi
│   ├── About.css
│   ├── Pricing.jsx     # Cenik
│   ├── Pricing.css
│   ├── Features.jsx    # Prednosti
│   ├── Features.css
│   ├── Gallery.jsx     # Galerija
│   ├── Gallery.css
│   ├── HowItWorks.jsx  # Kako poteka najem
│   ├── HowItWorks.css
│   ├── Contact.jsx     # Kontaktni obrazec
│   ├── Contact.css
│   ├── FAQ.jsx         # Pogosta vprašanja
│   ├── FAQ.css
│   ├── Footer.jsx      # Noga strani
│   └── Footer.css
├── hooks/               # React hooks
│   └── useScrollAnimation.js
├── App.jsx              # Glavna aplikacija
├── App.css
├── index.css            # Globalni stili
└── main.jsx             # Vstopna točka
```

## Zagon projekta

### Predpogoji

- Node.js 18+ (priporočeno 20+)
- npm ali yarn

### Namestitev

```bash
# Klonirajte repozitorij ali odprite mapo projekta
cd foodTruckProd

# Namestite odvisnosti
npm install

# Zaženite razvojni strežnik
npm run dev
```

Aplikacija bo dostopna na `http://localhost:5173`

### Build za produkcijo

```bash
# Ustvarite produkcijski build
npm run build

# Predogled produkcijskega builda
npm run preview
```

## Prilagajanje vsebine

### Kontaktni podatki

Zamenjajte placeholder kontaktne podatke v naslednjih datotekah:
- `src/components/Contact.jsx` - naslov, telefon, email
- `src/components/Footer.jsx` - kontaktni podatki in socialna omrežja

Iščite komentarje `TODO:` za mesta, ki jih je potrebno prilagoditi.

### Slike

1. **Hero ozadje**: Zamenjajte CSS background v `src/components/Hero.css`
2. **Galerija**: Dodajte slike v `public/images/` in posodobite `src/components/Gallery.jsx`
3. **OG slika**: Dodajte `public/images/og-image.jpg` za deljenje na socialnih omrežjih

### Cenik

Cene lahko prilagodite v `src/components/Pricing.jsx`:
- Dnevni najem: 150 EUR
- Vikend najem: 400 EUR (najbolj popularno)
- Tedenski najem: 950 EUR

### Barvna shema

Barvna shema je definirana v `src/index.css` z CSS Custom Properties:

```css
:root {
  --color-primary: #D97706;      /* Glavna barva */
  --color-primary-light: #F59E0B;
  --color-primary-dark: #B45309;
  /* ... */
}
```

## Funkcionalnosti

- **Responsiven dizajn** - Optimizirano za mobilne naprave, tablice in namizne računalnike
- **Smooth scroll** - Gladko pomikanje do sekcij
- **Kontaktni obrazec** - Validacija na strani odjemalca
- **FAQ accordion** - Interaktivno prikazovanje odgovorov
- **Galerija z lightbox** - Lightbox za ogled slik
- **SEO optimizacija** - Meta tagi, strukturirani naslovi, semantičen HTML
- **Accessibility** - ARIA atributi, fokusni stili, tipkovnična navigacija

## Povezava z backendom

Kontaktni obrazec je pripravljen za povezavo z backendom. V `src/components/Contact.jsx` najdite komentar `TODO:` in zamenjajte simulacijo z dejanskim API klicem:

```javascript
// Primer povezave z API
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## SEO

- Nastavite pravilne URL-je v `index.html`:
  - `og:url`
  - `canonical`
- Dodajte `robots.txt` in `sitemap.xml` za produkcijo
- Zamenjajte OG sliko z dejansko sliko

## Licenca

Ta projekt je last lastnika in ni namenjen javni distribuciji brez dovoljenja.

---

Izdelano z React + Vite
