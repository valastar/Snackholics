import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const servicesData = [
  { 
    title: 'Expert Tools', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 018.198 2.424.75.75 0 01-.182 1.463h-8.016v7.884a.75.75 0 01-1.5 0v-7.884H2.184a.75.75 0 01-.182-1.463 49.155 49.155 0 018.198-2.424V3a.75.75 0 01.75-.75zm0 15a.75.75 0 01.75.75v.006a.75.75 0 01-1.5 0v-.006a.75.75 0 01.75-.75zm-2.035-4.64a3 3 0 011.409-1.725 6.98 6.98 0 00-1.274-.247.75.75 0 01.659-1.32 8.464 8.464 0 012.378.406.75.75 0 01.525.701c0 .326-.15.621-.396.835a3 3 0 01-.64 3.646.75.75 0 01-1.058-1.062 1.5 1.5 0 00.325-1.843z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: 'Software Development', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.88.522l1.456 5.823a.75.75 0 001.454-.361L16.98 3.902a.75.75 0 01.538-.929l3.57-.713a.75.75 0 01.529 1.406l-2.538 1.115a.75.75 0 00-.016 1.39l3.055 1.344a.75.75 0 01-.47 1.424L15.848 7.261a.75.75 0 01-.525-.714V5.517a.75.75 0 00-.852-.522l-5.831 1.466a.75.75 0 00-.525.714v3.893c0 .346-.223.666-.555.78l-2.852 1.009a.75.75 0 11-.461-1.425l2.593-.916V6.474a2.25 2.25 0 011.576-2.142l5.965-1.498a2.25 2.25 0 012.629 2.007l.791 3.363a2.25 2.25 0 01-1.477 2.577l-3.055 1.344a.75.75 0 00.47 1.424l3.884-1.165a.75.75 0 01.525.714V19.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-7.5a2.25 2.25 0 012.25-2.25h7.5a.75.75 0 00.75-.75v-.036a.75.75 0 00-.54-.695l-3.626-1.384a.75.75 0 11.461-1.425l4.171 1.602a2.25 2.25 0 011.51 2.135v.987a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-7.5a2.25 2.25 0 012.25-2.25h7.5z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: 'Branding', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: 'Digital Marketing', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
        <path fillRule="evenodd" d="M8.25 3.75H15a6.75 6.75 0 016.75 6.75v6.75a3.75 3.75 0 01-3.75 3.75H6a3.75 3.75 0 01-3.75-3.75V10.5A6.75 6.75 0 018.25 3.75zM15 2.25H8.25A8.25 8.25 0 000 10.5v6.75a5.25 5.25 0 005.25 5.25h12.75A5.25 5.25 0 0023.25 17.25V10.5A8.25 8.25 0 0015 2.25z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: 'Artificial Intelligence', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M16.5 7.5h-9v9h9v-9z" />
        <path fillRule="evenodd" d="M8.25 6a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-1.5-1.5h-9zM6 8.25a2.25 2.25 0 012.25-2.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 016 17.25v-9z" clipRule="evenodd" />
        <path d="M12 9.75a.75.75 0 01.75.75V12h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5V10.5a.75.75 0 01.75-.75z" />
      </svg>
    )
  },
  { 
    title: 'Immigration Consulting', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
      </svg>
    )
  },
];

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-12 lg:px-20">
      {/* Background Gradient Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black opacity-90 pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            data-aos="fade-up"
            className="inline-block text-yellow-500 text-sm uppercase tracking-wider mb-4"
          >
            SERVICES
          </div>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500"
          >
            Transform Challenges into Opportunities with Technology
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-neutral-400 max-w-3xl mx-auto mt-4 text-lg"
          >
            We offer a comprehensive range of services designed to help businesses thrive in a competitive digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          className="grid md:grid-cols-3 gap-8"
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4 group hover:bg-neutral-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center text-black">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-semibold text-white group-hover:text-yellow-500 transition-colors">
                {service.title}
              </h3>
              
              {/* Updated Description */}
              <p className="text-neutral-400 text-sm">
                {index === 0 && "We equip businesses with advanced analytics, automation, and AI-powered tools to optimize marketing campaigns and maximize efficiency."}
                {index === 1 && "Custom web and mobile app development, automation solutions, and enterprise software tailored to your business needs."}
                {index === 2 && "We craft unique brand identities that set you apart from the competition, including logo design, brand strategy, and storytelling."}
                {index === 3 && "SEO, PPC, social media management, and content marketing strategies designed to increase visibility, engagement, and conversions."}
                {index === 4 && "Leverage AI-driven chatbots, data analytics, and machine learning solutions to enhance customer experience and business intelligence."}
                {index === 5 && "We offer expert guidance to individuals and businesses navigating the complexities of immigration processes."}
              </p>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-16">
          <Link 
            to="/services"
            className="inline-block px-10 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Explore More Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
