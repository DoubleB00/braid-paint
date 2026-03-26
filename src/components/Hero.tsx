import { Sparkles, Calendar, PartyPopper } from 'lucide-react';

export default function Hero() {
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

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Serving Staten Island, NY & NJ
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Braids, Face Paint & Glam for{' '}
              <span className="text-pink-600">Parties, Events</span> and Special Moments
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Serving Staten Island, NY and NJ with beautiful braid styles, face paint, glam services, and unforgettable party experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Book Now
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-pink-50 transition-all font-semibold text-lg border-2 border-pink-600"
              >
                View Services
              </button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-gray-700">
              <div className="flex items-center gap-2">
                <PartyPopper className="w-5 h-5 text-pink-600" />
                <span className="font-medium">Parties</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-600" />
                <span className="font-medium">Events</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-600" />
                <span className="font-medium">Solo Appointments</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy child with beautiful braids and face paint at a party"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-pink-600" fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">100+ Happy Parties</p>
                  <p className="text-sm text-gray-600">Making memories since day one</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
