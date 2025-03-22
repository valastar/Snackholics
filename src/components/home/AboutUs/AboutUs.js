import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#0B0B0B] py-24 px-6 md:px-12 lg:px-20 text-white text-center">
      <div className="container mx-auto max-w-4xl">
        {/* Subtitle */}
        <div data-aos="fade-up" data-aos-duration="800">
          <span className="text-yellow-500 font-medium tracking-wider text-sm md:text-base uppercase">
            About Us
          </span>
        </div>

        {/* Main Heading */}
        <div className="mt-4 md:mt-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Driven by Innovation, <br /> Focused on <span className="text-yellow-500">Result </span>
          </h2>
        </div>

        {/* Description text */}
        <div className="mt-6 md:mt-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <p className="text-gray-300 text-base md:text-lg">
          At QuickGrowth, we are committed to delivering impactful marketing and technology solutions tailored to your business needs. From startups to established enterprises, we harness the power of AI, digital marketing, branding, and software development to turn your challenges into opportunities.
          </p>
          <p2 className="text-gray-300 text-base md:text-lg">
          With a dynamic team of experts, we go beyond conventional marketing strategies to deliver data-driven solutions that enhance customer engagement, drive conversions, and fuel business growth.
          </p2>
        </div>

        {/* CTA Button */}
        <div className="mt-10 md:mt-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <Link 
            to="services" 
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
