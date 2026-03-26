import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PartySection from './components/PartySection';
import Gallery from './components/Gallery';
import WhyBookWithUs from './components/WhyBookWithUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <PartySection />
        <Gallery />
        <WhyBookWithUs />
        <Testimonials />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
