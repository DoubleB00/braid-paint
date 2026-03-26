import { Sparkles, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Sparkles className="w-7 h-7 text-pink-400" fill="currentColor" />
              <span>Braid & Paint</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Making parties, events, and special moments unforgettable with beautiful braids, face paint, and glam services.
            </p>
            <div className="flex items-start gap-2 text-pink-400">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p>
                Serving Staten Island, NY<br />
                and New Jersey
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('parties')}
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Parties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Braids</li>
              <li>Face Paint</li>
              <li>Glam Services</li>
              <li>Birthday Parties</li>
              <li>Event Services</li>
              <li>Solo Appointments</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors font-semibold mb-6 inline-block"
            >
              Book Now
            </button>
            <div className="space-y-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow us on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              © {currentYear} Braid & Paint. All rights reserved.
            </p>
            <p>
              Making memories one party at a time
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
