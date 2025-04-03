import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

function OurTeam() {
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
      name: "Cody Legge",
      role: "Co-Founder",
      bio: "As the business owner of Nexus Division Entertainment Inc. & QuickGrowth.ai, Cody is a seasoned Marketing and Business Development Specialist with a passion for helping entrepreneurs bring their visions to life. With years of experience crafting tailored marketing strategies, managing multiple clients, and optimizing business operations, Cody excels in digital marketing, sales strategies, and market research. His ability to create scalable, results-driven solutions ensures businesses achieve long-term success. Outside of work, Cody enjoys exploring innovative technologies and collaborating with ambitious entrepreneurs.",
      image: "/images/our-team-1.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/codyleggebba/?"
      }
    },
    {
      name: "Kri Hynes",
      role: "SVP of VR & Online Learning",
      bio: "With a diverse background spanning social services, customer engagement, and business development, Keri brings a unique blend of empathy, strategic thinking, and innovation to every project. Her experience in community work and corporate marketing allows her to connect with audiences on a deeper level, crafting impactful and human-centered marketing strategies. Passionate about helping businesses grow, Keri excels in brand messaging, client acquisition, and digital engagement. When not working, she enjoys community outreach and exploring creative storytelling in marketing.",
      image: "/images/our-team-2.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/keri-hynes-37875b101/"
      }
    },
    {
      name: "JESSE PAUL",
      role: "Software Engineer & Innovator",
      bio: "Jesse Paul is a software engineer with a passion for technical innovation, game design, and problem-solving. He has worked on statistical calculators for online casinos, node server design, and Windows/Linux server management, excelling in cutting-edge technologies and dynamic web solutions.",
      image: "/images/our-team-5.jpeg",
      social: {
        linkedin: "#"
      }
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
    <section className="relative bg-black text-white py-24">
      {/* Background texture/gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black opacity-80 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-yellow-500">Team</span>
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
                <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl mx-4 group transform transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Team Member Image */}
                    <div className="md:w-1/2 relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-80 md:h-96 object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      
                      {/* Social Media Icons Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex justify-center gap-4">
                          <Link to={member.social.linkedin} className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-500 hover:scale-110">
                            <img src="/images/aboutUs/social5.svg" alt="LinkedIn" className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Team Member Info */}
                    <div className="md:w-1/2 p-8 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <span className="text-yellow-500 text-lg block mb-4">{member.role}</span>
                      
                      {/* Bio information */}
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">{member.bio}</p>
                      
                      {/* Social Media Icons */}
                      <div className="flex justify-center md:justify-start gap-4 mt-4">
                        <Link to={member.social.linkedin} className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-500 hover:scale-110" aria-label="LinkedIn">
                          <img src="/images/aboutUs/social5.svg" alt="LinkedIn" className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black z-10 hover:bg-yellow-600 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black z-10 hover:bg-yellow-600 transition-colors duration-300"
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

export default OurTeam;