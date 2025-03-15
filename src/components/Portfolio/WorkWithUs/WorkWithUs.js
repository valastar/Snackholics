import React, { useEffect } from 'react'
import './WorkWithUs.scss' // Keep the original SCSS for reference
import AOS from 'aos';

function WorkWithUs() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <section className="py-24">
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-[1000px] p-4 md:p-8 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Left - Image */}
            <div className="w-32 h-32 md:w-64 md:h-64 flex-shrink-0">
              <img 
                src="/images/portfolio/workWithUs.svg" 
                alt="Work With Us" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right - Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-black mb-3">
                Work With Us
              </h3>
              <p className="text-lg md:text-2xl text-black/80 max-w-xl">
                We're excited to delve deeper into your project!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkWithUs