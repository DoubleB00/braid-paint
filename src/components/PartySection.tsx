import { PartyPopper, Gift, Heart, Star } from 'lucide-react';

export default function PartySection() {
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

  const features = [
    {
      icon: PartyPopper,
      title: 'Complete Party Packages',
      description: 'All-in-one services including braids, face paint, and glam for all your party guests'
    },
    {
      icon: Gift,
      title: 'Customizable Options',
      description: 'Tailor the experience to match your party theme and budget'
    },
    {
      icon: Heart,
      title: 'Kid-Friendly Professionals',
      description: 'Experienced with children of all ages, ensuring a fun and comfortable experience'
    },
    {
      icon: Star,
      title: 'Memorable Experiences',
      description: 'Create lasting memories with beautiful styles that wow both kids and parents'
    }
  ];

  return (
    <section id="parties" className="py-20 md:py-32 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/5624983/pexels-photo-5624983.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Kids enjoying face painting at party"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/6624890/pexels-photo-6624890.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Beautiful braided hairstyle on child"
                className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/8088507/pexels-photo-8088507.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Child with glam makeup at birthday party"
                className="rounded-2xl w-full h-64 object-cover shadow-lg -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Happy kids at party celebration"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <PartyPopper className="w-4 h-4" />
              Party & Event Services
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Make Your Next Party Stand Out
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Braid & Paint brings fun, stylish, and kid-friendly beauty and entertainment services right to your event. From birthday parties to community gatherings, we handle everything so you can enjoy the celebration stress-free.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={scrollToContact}
              className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Request Party Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
