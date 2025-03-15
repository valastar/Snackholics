import React, { useState } from 'react';
import './LatestProject.scss';
import { Link } from 'react-router-dom';
function LatestProject() {
  const [activeTab, setActiveTab] = useState('All');

  // Define the projects array
  const projects = [
    {
      title: 'Charism',
      image: '/images/portfolio/Charism.jpeg',
      category: 'Branding',
    },
    {
      title: 'Nexus',
      image: '/images/portfolio/nexus.jpeg',
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
      image: '/images/portfolio/prospectivesols.jpeg',
      category: 'Branding',
    },
    {
      title: 'Intelliaire',
      image: '/images/portfolio/intelliaire.jpeg',
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
  

  // Filter the projects based on checthe active tab
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
