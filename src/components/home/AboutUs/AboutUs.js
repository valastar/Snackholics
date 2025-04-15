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
            Sobre nosotros
          </span>
        </div>


        {/* Description text */}
        <div className="mt-6 md:mt-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <p className="text-gray-300 text-base md:text-lg">
          En Snackholics, combinamos sabor, comodidad y propósito. Somos más que una tienda de snacks: ofrecemos un espacio pensado para estudiantes, con salas ideales para estudiar, reunirse o simplemente relajarse entre clases. Desde snacks dulces y salados hasta bebidas refrescantes, todo está diseñado para ser accesible, delicioso y rápido. Además, integramos herramientas como pizarras inteligentes y materiales escolares que impulsan la productividad.          </p>
          <p2 className="text-gray-300 text-base md:text-lg">
          Nuestro compromiso también es social: organizamos campañas de donación para comunidades y animales en situación vulnerable. Con Snackholics, cada visita es una experiencia que nutre el cuerpo, la mente y el alma.          </p2>
        </div>

        {/* CTA Button */}
        <div className="mt-10 md:mt-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          {/* <Link 
            to="services" 
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            Explore Services
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
