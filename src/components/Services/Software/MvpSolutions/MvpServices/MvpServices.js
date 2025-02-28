import React, { useEffect } from 'react';
import './MvpServices.scss';
import AOS from 'aos';
import DataList from '../../../Branding/BrandingServices/MvpServicesList.json'
function MvpServices() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <React.Fragment>
      <div className="MvpServices">
        <div className="container">
          <div className="row">
            <div className="title" data-aos="fade-up" data-aos-duration="1000">
              <h2>
                 <br /> <span> </span>
              </h2>
            </div>
            {DataList.map((service, index) => (
              <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000" key={index}>
                <div className="block">
                  <img src={service.img} alt={`serviceImg ${index + 1}`} />
                  <h3>{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MvpServices;
