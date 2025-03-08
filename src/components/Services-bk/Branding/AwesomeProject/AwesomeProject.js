import React, { useState } from 'react';
import './AwesomeProject.scss';
import { Link } from 'react-router-dom';
function AwesomeProject() {
  const [activeTab, setActiveTab] = useState('All');

  const projects = [
    {
      title: 'Captivating Graphic Design that Tells Your Story',
      tag: 'Graphic Design',
      image: '/images/services/awesome1.svg',
      category: 'Social Media',
    },
    {
      title: 'Captivating Graphic Design that Tells Your Story',
      tag: 'Web Design',
      image: '/images/services/awesome2.svg',
      category: 'Social Media',
    },
    {
      title: 'Captivating Graphic Design that Tells Your Story',
      tag: 'App Design',
      image: '/images/services/awesome3.svg',
      category: 'Social Media',
    },
    
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <React.Fragment>
      <div className="awesomeProject">
        <div className="container">
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>Latest Project</h2>
          </div>

          <div className="tabs">
            {['All', 'Brand Identity', 'Logo Design', 'Printing Materials', 'Brand Launch', 'Social Media', 'Digital Marketing'].map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="row">
            {filteredProjects.map((project, index) => (
              <div className="col-md-4" key={index}>
              <div
                className="blockCards"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="block">
                  <img src={project.image} alt={project.title} />
                  <p className="heading">{project.title}</p>
                  <p className='tag'>{project.tag}</p>
                </div>
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

export default AwesomeProject;
