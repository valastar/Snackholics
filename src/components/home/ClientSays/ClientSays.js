import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Grid } from 'swiper/modules';

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
      name: 'Sarah Johnson',
      position: 'Marketing Manager',
      content: 'This service exceeded my expectations. The quality and attention to detail were fantastic. Highly recommended!',
      avatar: '/images/home/client1.svg',
      rating: 5
    },
    {
      name: 'Alex Thompson',
      position: 'CTO',
      content: 'Absolutely wonderful experience. Professional team and outstanding results. I would definitely come back again.',
      avatar: '/images/home/client2.svg',
      rating: 4
    },
    {
      name: 'Michelle Davis',
      position: 'Project Manager',
      content: 'The project was completed on time and met all my requirements. The communication was smooth and clear.',
      avatar: '/images/home/client3.svg',
      rating: 5
    },
    {
      name: 'Robert Chen',
      position: 'Product Owner',
      content: 'A brilliant team to work with! The quality of the output and their creative ideas were beyond expectations.',
      avatar: '/images/home/client1.svg',
      rating: 4
    },
    {
      name: 'Emily Wilson',
      position: 'Operations Director',
      content: 'Great service and top-notch professionalism. The user experience delivered was seamless and impressive.',
      avatar: '/images/home/client2.svg',
      rating: 5
    },
    {
      name: 'James Robertson',
      position: 'CEO',
      content: 'Highly professional and very efficient team. They understood our needs and delivered results on time.',
      avatar: '/images/home/client3.svg',
      rating: 4
    },
  ];

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill={i <= rating ? "#FFB800" : "#4A4A4A"} 
          className="w-5 h-5"
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-12 lg:px-20">
      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neutral-900 opacity-60 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            data-aos="fade-up"
            className="inline-block text-yellow-500 text-sm uppercase tracking-wider mb-4"
          >
            TESTIMONIALS
          </div>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            WHAT OUR CLIENTS ARE SAYING!
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div 
          className="relative"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <Swiper
            ref={swiperRef}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            grid={{
              rows: 2,
              fill: 'row'
            }}
            spaceBetween={20}
            slidesPerView={3}
            modules={[Navigation, Autoplay, Grid]}
            className="w-full h-full"
            breakpoints={{
              1024: { slidesPerView: 3, grid: { rows: 2 } },
              768: { slidesPerView: 2, grid: { rows: 2 } },
              640: { slidesPerView: 2, grid: { rows: 1 } },
              0: { slidesPerView: 1, grid: { rows: 1 } },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 h-full flex flex-col hover:bg-neutral-800 transition-all duration-300 ease-in-out group">
                  <div className="flex items-center mb-4">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                      {testimonial.avatar ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={handlePrev}
              className="px-6 py-3 bg-neutral-800 hover:bg-yellow-500 text-white hover:text-black rounded-full transition-colors duration-300 flex items-center"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Previous
            </button>
            <button 
              onClick={handleNext}
              className="px-6 py-3 bg-neutral-800 hover:bg-yellow-500 text-white hover:text-black rounded-full transition-colors duration-300 flex items-center"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonials;