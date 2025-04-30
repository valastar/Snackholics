import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20 text-white text-center">
{/* Base background gradient */}
<div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(to bottom right, #0f172a, #1a3a5f)",
      }}></div>
      
      {/* Light blue glowing accents */}
      <div className="absolute top-0 right-0 w-full h-full z-0 opacity-60">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full" 
          style={{
            background: "radial-gradient(circle, hsla(203, 92.00%, 75.50%, 0.30) 0%, rgba(135,206,250,0.1) 40%, rgba(135,206,250,0) 70%)",
            filter: "blur(40px)"
          }}>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full" 
          style={{
            background: "radial-gradient(circle, rgba(173,216,230,0.25) 0%, rgba(173,216,230,0.05) 50%, rgba(173,216,230,0) 70%)",
            filter: "blur(35px)"
          }}>
        </div>
      </div>
      
      {/* Yellow accent particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-yellow-400"
            style={{
              width: Math.floor(Math.random() * 6) + 2 + 'px',
              height: Math.floor(Math.random() * 6) + 2 + 'px',
              top: Math.floor(Math.random() * 100) + '%',
              left: Math.floor(Math.random() * 100) + '%',
              opacity: Math.random() * 0.15 + 0.05,
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Subtitle */}
        <div data-aos="fade-up" data-aos-duration="800">
          <span className="text-yellow-400 font-medium tracking-wider text-sm md:text-base uppercase">
            Sobre nosotros
          </span>
        </div>

        {/* Description text */}
        <div className="mt-6 md:mt-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <p className="text-blue-100 text-base md:text-lg mb-4">
            En Snackholics mezclamos sabor, comodidad y propósito. No somos solo una tienda de snacks: somos un espacio para estudiar, reunirse o desconectar. Ofrecemos snacks, bebidas y útiles escolares pensados para estudiantes, todo rápido y accesible.
          </p>
          <p className="text-blue-100 text-base md:text-lg">
          También apoyamos causas sociales con campañas de donación. En Snackholics, cada visita alimenta tu cuerpo, mente y corazón.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
        
        <div className="absolute top-10 left-10 w-10 h-10 md:w-16 md:h-16" style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0) 70%)",
        }}></div>
        
        <div className="absolute bottom-10 right-10 w-14 h-14 md:w-20 md:h-20" style={{
          background: "radial-gradient(circle, rgba(135,206,250,0.15) 0%, rgba(135,206,250,0) 70%)",
        }}></div>
      </div>
    </div>
  );
}

export default AboutUs;