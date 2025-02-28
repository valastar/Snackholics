import React from 'react';
import './AppRecentProjects.scss';
import { Link } from 'react-router-dom';

const AppRecentProjects = (props) => {

    
  
  
    return (
      <React.Fragment>
        <div className={`AppRecentProjects ${props.classProps}`}>
          <div className="container">
            <div className="title" data-aos="fade-up" data-aos-duration="1000">
              <h2>Our Recent <span>Projects</span></h2>
            </div>
            <div className="row">
              {props.dataList.map((project, index) => (
                <div className="col-md-4" key={index}>
                <div
                  className="blockCards"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="block">
                    <img src={project.image} alt={project.title} />
                    <p className="heading">{project.title}</p>
                    <p className='tag'>{project.para}</p>
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

export default AppRecentProjects