import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

function ClientTestimonials() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const testimonials = [
    // Your testimonials array remains the same
  ];

  const renderStars = (rating) => {
    // Your star rendering function remains the same
  };

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-12 lg:px-20">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neutral-900 opacity-60 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="inline-block text-yellow-500 text-sm uppercase tracking-wider mb-4">
            TESTIMONIALS
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-bold mb-6">
            WHAT OUR CLIENTS ARE SAYING!
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 h-full flex flex-col hover:bg-neutral-800 transition-all duration-300 ease-in-out group">
                <div className="flex items-center mb-4">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    ) : (
                      testimonial.name.charAt(0)
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-yellow-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                
                <p className="text-neutral-400 flex-grow mb-4">
                  {testimonial.content}
                </p>
                
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default ClientTestimonials;