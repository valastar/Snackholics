import React, { useEffect } from 'react';
import './BrandingServices.scss';
import AOS from 'aos';
import { Link } from 'react-router-dom';

function BrandingServices(props) {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <React.Fragment>
      <div className="brandingServices">
        <div className="container">
          <div className="row">
            <div className="title" data-aos="fade-up" data-aos-duration="1000">
              <h2>{props.title}</h2>
              <p>{props.description}</p>
            </div>
            {props.dataList.map((service, index) => (
              <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000" key={index}>
                <div className="block">
                  <img src={service.img} alt={`serviceImg ${index + 1}`} />
                  <h3>{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
            <Link to="/" className="btn-custom">View All</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BrandingServices;
