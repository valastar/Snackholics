import React, { useState, useEffect } from 'react';
import './LatestProject.scss'; // Keep the original SCSS for reference
import { Link } from 'react-router-dom';
import AOS from 'aos';

function LatestProject() {
  const [activeTab, setActiveTab] = useState('All');
  
  useEffect(() => {
    AOS.init();
  }, []);

  // Define the projects array
  const projects = [
    {
      title: 'Charism',
      image: '/images/portfolio/Charism.jpeg',
      category: 'Artificial Intelligence',
    },
    
    {
      title: 'Nexus',
      image: '/images/portfolio/nexus.jpeg',
      category: 'Web',
    },
    {
      title: 'Pilsia',
      image: '/images/portfolio/pulsia.jpeg',
      category: 'Software',
    },
    {
      title: 'Regalbot',
      image: '/images/portfolio/regalbot.jpeg',
      category: 'Digital Marketing',
    },
    {
      title: 'Prospective Solutions',
      image: '/images/portfolio/prospectivesols.jpeg',
      category: 'Branding',
    },
    {
      title: 'Intelliaire',
      image: '/images/portfolio/Intelliaire.jpeg',
      category: 'Hosting',
    },
    {
      title: 'RoboFRND',
      image: '/images/portfolio/roboFRND.jpeg',
      category: 'Software',
    },
    {
      title: 'Facility Trax',
      image: '/images/portfolio/facilitytrax.jpeg',
      category: 'Digital Marketing',
    },
    {
      title: 'VI Cross',
      image: '/images/portfolio/vicross.jpeg',
      category: 'Branding',
    },
    {
      title: 'Follow me',
      image: '/images/portfolio/followmeportals.jpeg',
      category: 'Hosting',
    },
    {
      title: 'Mega Pro Events',
      image: '/images/portfolio/megaproevents.jpeg',
      category: 'Digital Marketing',
    },
    {
      title: 'Smart CFO',
      image: '/images/portfolio/smartcfo.jpeg',
      category: 'Software',
    },
    {
      title: 'Uni Travel',
      image: '/images/portfolio/unitravel.jpeg',
      category: 'Branding',
    },
    {
      title: 'VR-VSS',
      image: '/images/portfolio/vr-vss.jpeg',
      category: 'Software',
    },
    {
      title: 'Yunshun',
      image: '/images/portfolio/yunshun.jpeg',
      category: 'Web',
    },
    
  ];

  // Filter categories for the tabs
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter the projects based on the active tab
  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Latest Projects
          </h2>
        </div>

        {/* Filterable tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16" data-aos="fade-up" data-aos-duration="1000">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                activeTab === category 
                  ? 'bg-yellow-500 text-black font-bold' 
                  : 'bg-neutral-800 text-white hover:bg-neutral-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`${
                index % 3 === 0 ? 'row-span-2 col-span-1 md:col-span-2 lg:row-span-2 lg:col-span-1' : 'col-span-1'
              }`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 50}
            >
              <div className="group relative overflow-hidden rounded-3xl h-full shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-yellow-500 text-lg font-medium">{project.title}</p>
                  <p className="text-white/70 text-sm mt-1">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
          <Link 
            to="/contact-us" 
            className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold rounded-full transition-all duration-300 hover:bg-yellow-600 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LatestProject;