import { DollarSign, Heart, PartyPopper, MapPin, Calendar, CheckCircle } from 'lucide-react';

export default function WhyBookWithUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: 'Gorgeous Work at a Great Price',
      description: 'Professional quality services that fit your budget. We believe every child deserves to feel special without breaking the bank.'
    },
    {
      icon: Heart,
      title: 'Kid-Friendly and Party-Focused',
      description: 'We specialize in working with children and creating fun, positive experiences. Your little ones are in caring, experienced hands.'
    },
    {
      icon: PartyPopper,
      title: 'Great for Events and Birthdays',
      description: 'From intimate gatherings to large celebrations, we bring energy, professionalism, and stunning results to every event.'
    },
    {
      icon: MapPin,
      title: 'Serving Staten Island, NY & NJ',
      description: 'Convenient service throughout Staten Island and New Jersey. We come to you, making party planning even easier.'
    },
    {
      icon: Calendar,
      title: 'Easy Booking Process',
      description: 'Simple, straightforward scheduling. Just reach out and we\'ll handle the rest so you can focus on celebrating.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. You\'ll know exactly what to expect, with packages designed to fit various needs and budgets.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Book With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a beauty service—we're your partner in creating unforgettable celebrations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-100">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Make Your Event Special?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of happy families who've trusted us to make their celebrations truly memorable
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
