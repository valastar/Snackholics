import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
      className="relative overflow-hidden bg-[#0B0B0B] pt-32 md:pt-40 lg:pt-52"
      style={{
        backgroundImage: "url('/images/home/homeBannerBack.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Abstract shape overlays */}
      <div className="absolute top-20 right-20 w-96 h-96 opacity-60">
        <div className="absolute w-72 h-72 border-4 border-yellow-500 rounded-full blur-sm"></div>
      </div>
      
      <div className="absolute bottom-40 right-40 w-48 h-48 opacity-60">
        <div className="absolute w-48 h-48 border-4 border-yellow-500 rounded-full blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start max-w-5xl">
          {/* Subtitle */}
          <div data-aos="fade-up" data-aos-duration="800">
            <span className="text-yellow-500 font-medium tracking-wider text-sm md:text-base uppercase">
              WELCOME TO OUR PLATFORM
            </span>
          </div>

          {/* Main Heading */}
          <div className="mt-4 md:mt-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              EXPERTLY NAVIGATING COMPLEX<br />
              SOFTWARE <span className="relative inline-block px-4">
                <span className="relative z-10 text-yellow-500">CHALLENGES</span>
                <span className="absolute -inset-1 border border-yellow-500 rounded-full opacity-70 z-0"></span>
              </span> WITH<br />
              INNOVATIVE SOLUTIONS.
            </h1>
          </div>

          {/* Description text */}
          <div className="mt-6 md:mt-8 max-w-2xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <p className="text-gray-300 text-base md:text-lg">
              Discover the tools, resources, and insights you need to turn your ideas into tangible results.
              We're here to support your journey every step of the way.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 md:mt-12 flex flex-wrap gap-4 md:gap-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              GET STARTED
            </button>
            <button className="px-8 py-4 bg-transparent hover:bg-black/30 text-white border border-yellow-500/50 hover:border-yellow-500 font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1">
              EXPLORE MORE
            </button>
          </div>
        </div>

        {/* Add your image if needed */}
        {/* <div className="mt-12 md:mt-20" data-aos="fade-up" data-aos-duration="1000">
          <img src="/images/home/homeBanner.svg" alt="Hero Banner" className="w-full h-auto" />
        </div> */}
      </div>
    </div>
  );
}

export default Banner;