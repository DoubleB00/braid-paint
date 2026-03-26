import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jessica M.',
      role: 'Birthday Party Host',
      rating: 5,
      text: 'Braid & Paint made my daughter\'s 8th birthday absolutely magical! Every girl left with beautiful braids and the face painting was incredible. The team was so patient and professional with all the kids. Highly recommend!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Maria S.',
      role: 'Event Organizer',
      rating: 5,
      text: 'We hired them for our community festival and they were outstanding! They handled over 50 kids throughout the day and each one looked amazing. Professional, reliable, and such beautiful work.',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Tanya R.',
      role: 'Mom of Two',
      rating: 5,
      text: 'My girls absolutely loved their braids! The styles lasted for weeks and looked gorgeous. The pricing was very reasonable and the service was top-notch. We\'ll definitely be booking again!',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Keisha W.',
      role: 'Birthday Party Host',
      rating: 5,
      text: 'Best party decision I made! The kids had so much fun and the face painting was spot on. My son wanted to be Spider-Man and it looked just like the movie. Thank you for making his day special!',
      avatar: 'https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Lisa P.',
      role: 'School Event Coordinator',
      rating: 5,
      text: 'We book them every year for our school carnival and they never disappoint. Always on time, always professional, and the kids line up to get their services. Parents love them too!',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Amanda K.',
      role: 'Mom',
      rating: 5,
      text: 'Took my daughter for a solo glam appointment before her dance recital. She felt like a princess! The attention to detail and care they showed was beyond my expectations. Worth every penny!',
      avatar: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—here's what our happy clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-pink-200" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-pink-200"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Growing List of Happy Clients
          </h3>
          <p className="text-lg mb-6 text-pink-100">
            Hundreds of satisfied families across Staten Island, NY and NJ
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
            className="bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-pink-50 transition-all font-semibold text-lg shadow-xl hover:scale-105 transform"
          >
            Book Your Event Now
          </button>
        </div>
      </div>
    </section>
  );
}
