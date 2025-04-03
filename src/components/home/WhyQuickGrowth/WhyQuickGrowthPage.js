import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

function WhyQuickGrowth() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const infoSlides = [
    {
      title: '🚀 Expertise & Experience You Can Rely On',
      content: [
        'Proven Track Record – Successfully delivered 30+ projects and worked with 80+ satisfied clients',
        'Industry Knowledge – Expertise across tech, retail, entertainment, and service-based industries',
        'Cutting-Edge Strategies – We stay ahead of market trends, digital innovations, and AI-powered marketing'
      ]
    },
    {
      title: '🎯 A Client-Centric Approach',
      content: [
        'We Listen & Collaborate – We dont believe in one-size-fits-all solutions. Every strategy is customized to meet your needs.',
        'Clear Communication – We keep you informed at every step, ensuring transparency and alignment.',
        'Long-Term Partnerships – Your success is our success. We invest in relationships, not just transactions.'
      ]
    },
    {
      title: '🛠️ Full-Service Solutions Under One Roof',
      content: [
        'Marketing & Growth – Digital marketing, SEO, content marketing, and customer acquisition strategies',
        'Branding & Design – Logo creation, visual identity, brand storytelling, and UI/UX design',
        'Software Development – Custom web and mobile applications, automation tools, and eCommerce solutions',
        'AI & Automation – AI-powered chatbots, analytics, and workflow automation to enhance efficiency',
        'Business Consulting – Market research, business strategy, and operational planning for long-term success'
      ]
    },
    {
      title: '🔎 Data-Driven & Results-Focused',
      content: [
        'Data-Driven Marketing – We use real insights, not guesswork, to guide your marketing strategies.',
        'Performance Tracking – We monitor key metrics and make data-driven adjustments for continuous growth.',
        'Transparent Reporting – Regular reports keep you informed on progress, results, and areas for improvement.'
      ]
    },
    {
      title: '⚡ Innovation Meets Affordability',
      content: [
        'Custom Pricing Plans – Flexible options to match your budget and goals.',
        'High-Value Deliverables – Quality work at competitive rates, ensuring cost-effectiveness.',
        'Technology & Automation – AI-powered tools to streamline operations and maximize efficiency.'
      ]
    },
    {
      title: '🌟 A Team That Truly Cares',
      content: ['Passionate, Experienced, and Committed to Your Success. At QuickGrowth, we are not just service providers—we are your growth partners.']
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

  return (
    <>
      {/* Hero Banner Section */}
      <div className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-7/12 mb-10 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why <span className="text-yellow-500">QuickGrowth</span></h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Partner in Growth, Innovation, and Success</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    At QuickGrowth, we don't just provide services—we build long-term partnerships that drive sustainable business success. Whether you're launching a startup, scaling an existing business, or looking to refine your marketing and digital strategies, we are dedicated to helping you achieve real, measurable results.
                  </p>
                  <p className="text-gray-300">
                    Here's why businesses trust QuickGrowth to take them to the next level:
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-5/12" data-aos="fade-left" data-aos-duration="1000">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img src="/images/aboutUs/story.svg" alt="Our Story" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Slider Section */}
      <section className="relative text-white py-10 px-4 md:px-0 bg-neutral-900/80 rounded-2xl mx-auto max-w-5xl mb-16 shadow-xl">
        <div className="mx-auto max-w-3xl relative z-10">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={false}
            modules={[Navigation, Autoplay]}
            className="info-swiper"
          >
            {infoSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 rounded-2xl px-12">
                  <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center" data-aos="fade-up">{slide.title}</h2>
                  <div className="flex flex-col items-center justify-center" data-aos="fade-up" data-aos-delay="100">
                    {slide.content.map((point, idx) => (
                      <div key={idx} className="flex items-center mb-6 max-w-3xl">
                        <div className="flex-shrink-0 mr-3">
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-300 text-lg">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-yellow-500 w-10 h-10 rounded-full shadow-lg hover:scale-110 transition z-10 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <span className="text-black font-bold text-xl">&lt;</span>
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-yellow-500 w-10 h-10 rounded-full shadow-lg hover:scale-110 transition z-10 flex items-center justify-center"
            aria-label="Next slide"
          >
            <span className="text-black font-bold text-xl">&gt;</span>
          </button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 shadow-2xl text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business? <span className="text-yellow-500">Let's Talk!</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need a full-scale marketing strategy, brand transformation, or cutting-edge software solutions, we're here to help you reach new heights!
            </p>
            <Link to="/contact-us" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyQuickGrowth;