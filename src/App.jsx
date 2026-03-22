import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Features />
        <Gallery />
        <HowItWorks />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
