import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What areas do you serve?',
      answer: 'We proudly serve all of Staten Island, New York, and various locations throughout New Jersey. If you\'re unsure whether we service your area, just reach out and we\'ll let you know!'
    },
    {
      question: 'Do you travel for events?',
      answer: 'Yes! We come directly to your venue, whether it\'s your home, a party venue, community center, school, or any other location. We bring everything we need to make your event a success.'
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer braids (all styles), face painting, glam services, complete birthday party packages, event services for large gatherings, and solo appointments for special occasions. Each service can be customized to fit your needs.'
    },
    {
      question: 'How do I book?',
      answer: 'Booking is easy! Just fill out the contact form below with your event details, or DM us on Instagram. We\'ll get back to you quickly to confirm availability and discuss your specific needs.'
    },
    {
      question: 'Do you do both parties and solo appointments?',
      answer: 'Absolutely! We handle everything from large birthday parties and events with dozens of kids to intimate one-on-one appointments. Whether you need us for a big celebration or a special solo experience, we\'ve got you covered.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 2-3 weeks in advance, especially for parties and events during busy seasons (spring and summer). However, we sometimes have last-minute availability, so don\'t hesitate to reach out even if your event is coming up soon!'
    },
    {
      question: 'Are your products safe for kids?',
      answer: 'Yes! We use only high-quality, child-safe, hypoallergenic products for all our services. The health and safety of the children we work with is our top priority.'
    },
    {
      question: 'How long do the braids last?',
      answer: 'Depending on the style and hair type, our braids typically last 2-4 weeks with proper care. We\'ll provide you with care instructions to help maintain the style for as long as possible.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-pink-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-pink-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
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
            className="text-pink-600 hover:text-pink-700 font-semibold text-lg transition-colors"
          >
            Get in touch and we'll be happy to help →
          </button>
        </div>
      </div>
    </section>
  );
}
