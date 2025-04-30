import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const servicesData = [
  { 
    title: 'Venta de Snacks Variados', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 018.198 2.424.75.75 0 01-.182 1.463h-8.016v7.884a.75.75 0 01-1.5 0v-7.884H2.184a.75.75 0 01-.182-1.463 49.155 49.155 0 018.198-2.424V3a.75.75 0 01.75-.75zm0 15a.75.75 0 01.75.75v.006a.75.75 0 01-1.5 0v-.006a.75.75 0 01.75-.75zm-2.035-4.64a3 3 0 011.409-1.725 6.98 6.98 0 00-1.274-.247.75.75 0 01.659-1.32 8.464 8.464 0 012.378.406.75.75 0 01.525.701c0 .326-.15.621-.396.835a3 3 0 01-.64 3.646.75.75 0 01-1.058-1.062 1.5 1.5 0 00.325-1.843z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: 'Espacios de Estudio y Reunión', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.88.522l1.456 5.823a.75.75 0 001.454-.361L16.98 3.902a.75.75 0 01.538-.929l3.57-.713a.75.75 0 01.529 1.406l-2.538 1.115a.75.75 0 00-.016 1.39l3.055 1.344a.75.75 0 01-.47 1.424L15.848 7.261a.75.75 0 01-.525-.714V5.517a.75.75 0 00-.852-.522l-5.831 1.466a.75.75 0 00-.525.714v3.893c0 .346-.223.666-.555.78l-2.852 1.009a.75.75 0 11-.461-1.425l2.593-.916V6.474a2.25 2.25 0 011.576-2.142l5.965-1.498a2.25 2.25 0 012.629 2.007l.791 3.363a2.25 2.25 0 01-1.477 2.577l-3.055 1.344a.75.75 0 00.47 1.424l3.884-1.165a.75.75 0 01.525.714V19.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-7.5a2.25 2.25 0 012.25-2.25h7.5a.75.75 0 00.75-.75v-.036a.75.75 0 00-.54-.695l-3.626-1.384a.75.75 0 11.461-1.425l4.171 1.602a2.25 2.25 0 011.51 2.135v.987a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-7.5a2.25 2.25 0 012.25-2.25h7.5z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: 'Pedidos en Línea y en Local', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: 'Acceso a Material Escolar', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
        <path fillRule="evenodd" d="M8.25 3.75H15a6.75 6.75 0 016.75 6.75v6.75a3.75 3.75 0 01-3.75 3.75H6a3.75 3.75 0 01-3.75-3.75V10.5A6.75 6.75 0 018.25 3.75zM15 2.25H8.25A8.25 8.25 0 000 10.5v6.75a5.25 5.25 0 005.25 5.25h12.75A5.25 5.25 0 0023.25 17.25V10.5A8.25 8.25 0 0015 2.25z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: 'Eventos Temáticos y Promociones', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M16.5 7.5h-9v9h9v-9z" />
        <path fillRule="evenodd" d="M8.25 6a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-1.5-1.5h-9zM6 8.25a2.25 2.25 0 012.25-2.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 016 17.25v-9z" clipRule="evenodd" />
        <path d="M12 9.75a.75.75 0 01.75.75V12h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5V10.5a.75.75 0 01.75-.75z" />
      </svg>
    )
  },
  { 
    title: 'Proyectos Sociales', 
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
    <section className="relative py-24 px-4 md:px-12 lg:px-20 text-white overflow-hidden">
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
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            data-aos="fade-up"
            className="inline-block text-yellow-400 text-sm uppercase tracking-wider mb-4"
          >
            SERVICIOS
          </div>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Ofrecemos espacios cómodos y seguros con tecnología y snacks
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-blue-100 max-w-3xl mx-auto mt-4 text-lg"
          >
            Damos un espacio a los estudiantes para cubrir sus necesidades escolares y disfrutar de snacks para que puedan estar a gusto
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
              className="bg-blue-900/20 backdrop-blur-sm border border-blue-400/10 rounded-2xl p-6 space-y-4 group hover:bg-blue-800/30 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/5"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center text-black shadow-lg shadow-yellow-400/20">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              
              {/* Updated Description */}
              <p className="text-blue-100 text-sm">
                {index === 0 && "Gran selección de snacks dulces y salados, con opciones frescas, económicas y de calidad."}
                {index === 1 && "Zonas cómodas y tranquilas ideales para tareas, proyectos y reuniones sociales entre estudiantes."}
                {index === 2 && "Puedes consumir en el local o pedir desde una app/plataforma digital."}
                {index === 3 && "Disponibilidad de papelería y pizarrones inteligentes para uso de los clientes."}
                {index === 4 && "Viernes con temáticas especiales, concursos, y promociones como combos o limonadas gratis con credencial estudiantil."}
                {index === 5 && "Recolectas mensuales de ropa, comida, croquetas y donaciones para personas necesitadas y animales sin hogar."}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>
      </div>
    </section>
  );
}

export default Services;