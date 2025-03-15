import React, { useEffect } from 'react'
import './Technologies.scss' // Keep the original SCSS for reference
import AOS from 'aos';

function Technologies() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  const technologies = [
    { name: "React", image: "/images/portfolio/tech1.svg" },
    { name: "Angular", image: "/images/portfolio/tech2.svg" },
    { name: "Vue", image: "/images/portfolio/tech3.svg" },
    { name: "Node.js", image: "/images/portfolio/tech4.svg" },
    { name: "Python", image: "/images/portfolio/tech5.svg" },
    { name: "PHP", image: "/images/portfolio/tech6.svg" },
    { name: "MongoDB", image: "/images/portfolio/tech7.svg" },
    { name: "MySQL", image: "/images/portfolio/tech8.svg" },
    { name: "Firebase", image: "/images/portfolio/tech9.svg" },
    { name: "AWS", image: "/images/portfolio/tech10.svg" },
    { name: "Docker", image: "/images/portfolio/tech11.svg" },
    { name: "Kubernetes", image: "/images/portfolio/tech12.svg" }
  ];

  return (
    <section className="py-24 bg-black border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technologies
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-16 relative">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center"
              data-aos="fade-up" 
              data-aos-duration="1000"
              data-aos-delay={index * 50}
            >
              <div className="w-24 h-24 flex items-center justify-center mb-4 transition-all duration-300 transform hover:scale-110">
                <img 
                  src={tech.image} 
                  alt={tech.name} 
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              {/* Decorative borders for grid effect */}
              {index % 6 !== 5 && (
                <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-neutral-700"></div>
              )}
              {index < technologies.length - 6 && (
                <div className="absolute left-1/4 right-1/4 bottom-[-2rem] h-px bg-neutral-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies