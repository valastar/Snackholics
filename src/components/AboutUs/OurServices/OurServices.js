import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';

function OurServices() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  const services = [
    { name: "Branding", image: "/images/aboutUs/service1.svg" },
    { name: "Web Design", image: "/images/aboutUs/service2.svg" },
    { name: "Online Marketing", image: "/images/aboutUs/service3.svg" },
    { name: "Hosting", image: "/images/aboutUs/service4.svg" },
    { name: "Software Development", image: "/images/aboutUs/service5.svg" },
    { name: "Immigration Consulting", image: "/images/aboutUs/service6.svg" },
    { name: "Artificial Intelligence", image: "/images/aboutUs/service7.svg" },
    { name: "Digital Marketing", image: "/images/aboutUs/service8.svg" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-yellow-500 my-20">
      {/* Background overlay pattern */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-50" 
        style={{ backgroundImage: "url('/images/aboutUs/serviceBack.svg')" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl font-bold text-[#521212] mb-4">
            Our Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              className="col-span-1" 
              data-aos={
                index % 4 === 0 ? "fade-right" : 
                index % 4 === 1 || index % 4 === 2 ? "fade-up" : "fade-left"
              }
              data-aos-duration="1000"
              data-aos-delay={index * 50}
              key={index}
            >
              <div className="bg-white/40 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                <img 
                  src={service.image} 
                  alt={`Service: ${service.name}`} 
                  className="w-16 h-16"
                />
                <h3 className="text-lg font-bold text-black">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16" data-aos="fade-up" data-aos-duration="1000">
          <Link 
            to="/" 
            className="inline-block py-4 px-10 border-2 border-[#521212] hover:bg-[#521212] rounded-full text-[#521212] hover:text-white transition duration-300 transform hover:-translate-y-1"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurServices