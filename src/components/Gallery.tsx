export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beautiful braided hairstyle',
      tall: true
    },
    {
      url: 'https://images.pexels.com/photos/6624890/pexels-photo-6624890.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Elegant cornrow braids',
      tall: false
    },
    {
      url: 'https://images.pexels.com/photos/5624983/pexels-photo-5624983.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Face painting at party',
      tall: false
    },
    {
      url: 'https://images.pexels.com/photos/8088507/pexels-photo-8088507.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Glam makeup for kids',
      tall: true
    },
    {
      url: 'https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Happy party celebration',
      tall: false
    },
    {
      url: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Kids enjoying party activities',
      tall: true
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the smiles, styles, and magical moments we create at every event
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                image.tall ? 'row-span-2' : 'row-span-1'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Follow us on Instagram for more photos and updates
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
            @braidandpaint
          </a>
        </div>
      </div>
    </section>
  );
}
