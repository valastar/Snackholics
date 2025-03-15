import React, { useState } from 'react';
import './LatestProject.scss';
import { Link } from 'react-router-dom';
function LatestProject() {
  const [activeTab, setActiveTab] = useState('All');

  // Define the projects array
  const projects = [
    {
      title: 'Charism',
      image: '/images/portfolio/charism.jpeg',
      category: 'Artificial Intelligence',
    },
    {
      title: 'Web Portfolio Mockup',
      image: '/images/portfolio/port-2.svg',
      category: 'Web',
    },
    {
      title: 'Pilsia',
      image: '/images/portfolio/pulsia.jpeg',
      category: 'Artificial Intelligence',
    },
    {
      title: 'Regalbot',
      image: '/images/portfolio/regalbot.jpeg',
      category: 'Digital Marketing',
    },
    {
      title: 'Prospective Solutions',
      image: '/images/portfolio/prospectivesol.jpeg',
      category: 'Branding',
    },
    {
      title: 'Intelliaire',
      image: '/images/portfolio/intelliare.jpeg',
      category: 'Hosting',
    },
    {
      title: 'Sprouce Cloud',
      image: '/images/portfolio/port-7.svg',
      category: 'Software',
    },
    {
      title: 'Facility Trax',
      image: '/images/portfolio/facilitytrax.jpeg',
      category: 'Digital Marketing',
    },
    {
      title: 'VI Cross',
      image: '/images/portfolio/vicross.svg',
      category: 'Branding',
    },
    {
      title: 'Follow me',
      image: '/images/portfolio/followmeportals.svg',
      category: 'Hosting',
    }
  ];

  // Filter the projects based on the active tab
  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <React.Fragment>
      <div className="latestProject">
        <div className="container">
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>Latest Project</h2>
          </div>

          {/* Tabs for filtering projects */}
          <div className="tabs">
            {['All', 'Artificial Intelligence', 'Web', 'Software', 'Digital Marketing', 'Branding', 'Hosting'].map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid layout for project items */}
          <div className="parent">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={index % 3 === 0 ? 'div5' : index % 2 === 0 ? 'div6' : 'div7'}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="block">
                  <img src={project.image} alt={project.title} />
                  <p className="heading">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
            <Link to="/contact-us" className="btn-custom">Let's Talk</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LatestProject;
