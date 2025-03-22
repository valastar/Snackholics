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
    {
      name: "Alison Jordon",
      position: "Manager",
      content: "QuickGrowth transformed our business with their marketing expertise. The results exceeded our expectations!",
      rating: 5
    },
    {
      name: "Robert Stevens",
      position: "CEO",
      content: "A highly professional team that delivers on time. Our engagement and conversions skyrocketed!",
      rating: 5
    },
    {
      name: "Lisa Wong",
      position: "Founder",
      content: "Their AI solutions gave us a competitive edge in our industry. Highly recommended!",
      rating: 5
    }
    // You can add more testimonials here
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-neutral-600'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-12 lg:px-20">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neutral-900 opacity-60 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <div data-aos="fade-up" className="inline-block text-yellow-500 text-sm uppercase tracking-wider mb-4">
            TESTIMONIALS
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-bold mb-6">
            WHAT OUR CLIENTS ARE SAYING!
          </h2>
        </div> */}

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