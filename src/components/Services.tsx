import { Sparkles, Palette, Crown, PartyPopper, Calendar, User } from 'lucide-react';

export default function Services() {
  const scrollToContact = () => {
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
  };

  const services = [
    {
      icon: Sparkles,
      title: 'Braids',
      description: 'Beautiful, long-lasting braid styles perfect for any occasion. From cornrows to box braids, we create stunning looks kids love.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Palette,
      title: 'Face Paint',
      description: 'Safe, high-quality face painting that brings imagination to life. Perfect for parties, events, and turning kids into their favorite characters.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Crown,
      title: 'Glam',
      description: 'Age-appropriate glam services that make every child feel special. From sparkle and shine to mini makeovers for birthday girls.',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      icon: PartyPopper,
      title: 'Birthday Parties',
      description: 'Complete party packages with braids, face paint, and glam services. We bring the fun and make sure every guest feels like a star.',
      gradient: 'from-pink-500 to-fuchsia-500'
    },
    {
      icon: Calendar,
      title: 'Event Services',
      description: 'Professional beauty services for school events, community gatherings, festivals, and more. We handle groups of all sizes with ease.',
      gradient: 'from-fuchsia-500 to-pink-500'
    },
    {
      icon: User,
      title: 'Solo Appointments',
      description: 'One-on-one appointments for special occasions or just because. Give your child the full attention they deserve with personalized service.',
      gradient: 'from-rose-500 to-red-400'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From braids to face paint to full party packages, we offer everything you need to make your event unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="text-pink-600 font-semibold hover:text-pink-700 transition-colors inline-flex items-center gap-2 group"
                >
                  Book This Service
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
