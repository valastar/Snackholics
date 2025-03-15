import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';

function CoreValues() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  const coreValues = [
    { name: "Authenticity", image: "/images/aboutUs/core1.svg" },
    { name: "Transparency", image: "/images/aboutUs/core2.svg" },
    { name: "Commitment", image: "/images/aboutUs/core3.svg" },
    { name: "Self Improvement", image: "/images/aboutUs/core4.svg" },
    { name: "Team Spirit", image: "/images/aboutUs/core5.svg" },
    { name: "Positive Results", image: "/images/aboutUs/core6.svg" }
  ];

  return (
    <section className="py-20">
      <div>
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core <span className="text-yellow-500">Values</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <div 
              className="col-span-1" 
              data-aos={index % 3 === 0 ? "fade-right" : index % 3 === 1 ? "fade-up" : "fade-left"}
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              key={index}
            >
              <div className="bg-yellow-500 rounded-2xl p-14 text-center transition-all duration-300 transform hover:-translate-y-3 hover:shadow-lg">
                <img 
                  src={value.image} 
                  alt={`Core Value: ${value.name}`} 
                  className="w-32 h-32 mx-auto mb-6"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-black">{value.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-14" data-aos="fade-up" data-aos-duration="1000">
          <Link 
            to="/contact-us" 
            className="inline-block py-4 px-10 border-2 border-white hover:border-yellow-500 rounded-full text-white hover:text-yellow-500 transition duration-300 transform hover:-translate-y-1"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoreValues