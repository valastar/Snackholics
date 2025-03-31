import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

function OurTeams() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      name: 'CODY LEGGE',
      title: 'CO-FOUNDER',
      image: '/images/our-team-1.jpeg',
      description: "Marketing & Business Development Specialist with expertise in guiding startups through their growth journey. Cody specializes in digital marketing, sales strategies, and operational planning."
    },
    {
      name: 'KERI',
      title: 'MARKETING EXPERT',
      image: '/images/our-team-2.jpeg',
      description: "Bringing a unique blend of strategic thinking and client-focused innovation, Keri has extensive experience in customer engagement and business development."
    },
    {
      name: 'JESSE PAUL',
      title: 'SOFTWARE ENGINEER & INNOVATOR',
      image: '/images/our-team-5.jpeg',
      description: "Jesse Paul is a software engineer with a passion for technical innovation, game design, and problem-solving. He has worked on statistical calculators for online casinos, node server design, and Windows/Linux server management, excelling in cutting-edge technologies and dynamic web solutions."
    }
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

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-0">
      {/* Background texture/gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black opacity-80 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            data-aos="fade-up"
            className="inline-block text-yellow-500 text-sm uppercase tracking-wider mb-4"
          >
            OUR TEAM
          </div>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold text-white"
          >
            MEET OUR PROFESSIONALS
          </h2>
        </div>

        {/* Team Member Slider */}
        <div 
          className="relative"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            onSlideChange={handleSlideChange}
            className="team-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-20 px-4 md:px-16">
                  {/* Team Member Image */}
                  <div className="text-center">
                    <div className="relative w-40 h-40 mx-auto">
                      <div className="absolute inset-0 rounded-full border-4 border-yellow-500 opacity-70"></div>
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-yellow-500"
                      />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-yellow-500 text-sm font-medium mt-1">{member.title}</p>
                  </div>
                  
                  {/* Team Member Description */}
                  <div className="mt-6 md:mt-0 max-w-xl text-neutral-200 text-sm md:text-base leading-relaxed">
                    <p>{member.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-1 md:left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black z-10 hover:bg-yellow-600 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-1 md:right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black z-10 hover:bg-yellow-600 transition-colors duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Team Member Indicator Dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-yellow-500 w-6' : 'bg-neutral-600'
                }`}
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.swiper.slideToLoop(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeams;