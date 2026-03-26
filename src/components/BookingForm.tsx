import { useState } from 'react';
import { Calendar, Mail, MessageSquare, Phone, Sparkles, User, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    eventDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('booking_inquiries').insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service_type: formData.serviceType,
          event_date: formData.eventDate || null,
          message: formData.message
        }
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        eventDate: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Make Your Event Special
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Fill out the form below and we'll get back to you shortly to discuss your event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600">
            <p className="font-semibold">Serving SI, NY & NJ</p>
            <span className="hidden sm:block">•</span>
            <p>DM to book / contact for availability</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-xl">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You!
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We've received your booking inquiry and will get back to you within 24 hours. We can't wait to make your event special!
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="text-pink-600 hover:text-pink-700 font-semibold transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Type of Service *
                  </label>
                  <div className="relative">
                    <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors appearance-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Braids">Braids</option>
                      <option value="Face Paint">Face Paint</option>
                      <option value="Glam">Glam</option>
                      <option value="Birthday Party">Birthday Party Package</option>
                      <option value="Event Services">Event Services</option>
                      <option value="Solo Appointment">Solo Appointment</option>
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Event Date (Optional)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your event, number of guests, any special requests, etc."
                    />
                  </div>
                </div>
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-red-700">
                  <p className="font-semibold">Oops! Something went wrong.</p>
                  <p className="text-sm">Please try again or contact us directly via Instagram.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pink-600 text-white px-8 py-4 rounded-xl hover:bg-pink-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>

              <p className="text-center text-sm text-gray-500">
                By submitting this form, you agree to be contacted about your inquiry
              </p>
            </form>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Prefer to reach out directly?
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold text-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Message us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
