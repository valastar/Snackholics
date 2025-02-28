import React, { useEffect } from 'react'
import './OurServices.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';


function OurServices() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
      <div className="ourServices">
        <div className='container'>
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>Our Services</h2>
          </div>
         <div className="row">
          <div className="col-md-4 col-lg-3" data-aos="fade-right" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/service1.svg" alt="coreImg" />
              <h3>Branding</h3>
            </div>
          </div>
          <div className="col-md-4 col-lg-3" data-aos="fade-down" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/service2.svg" alt="coreImg" />
              <h3>Web Design</h3>
            </div>
            </div>
          <div className="col-md-4 col-lg-3" data-aos="fade-down" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/service3.svg" alt="coreImg" />
              <h3>Online
              Marketing</h3>
            </div>
            </div>
            <div className="col-md-4 col-lg-3" data-aos="fade-left" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/service4.svg" alt="coreImg" />
              <h3>Hosting</h3>
              </div>
              </div>
              <div className="col-md-4 col-lg-3" data-aos="fade-right" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/service5.svg" alt="coreImg" />
              <h3>Software
              Development</h3>
              </div>
              </div>
              <div className="col-md-4 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/service6.svg" alt="coreImg" />
              <h3>Immigration
              Consulting</h3>
              </div>
              </div>
              <div className="col-md-4 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/service7.svg" alt="coreImg" />
              <h3>Artificial
              Intelligence</h3>
              </div>
              </div>
              <div className="col-md-4 col-lg-3" data-aos="fade-left" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/service8.svg" alt="coreImg" />
              <h3>Digital
              Marketing</h3>
              </div>
              </div>
         </div>
         <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
               <Link to="/" className="btn-custom">View All</Link>
               </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OurServices
