import React, { useEffect } from 'react'
import './CoreValues.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';


function CoreValues() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
      <div className="coreValues">
        <div className='container'>
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>Our Core <span>Values</span></h2>
          </div>
         <div className="row">
          <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/core1.svg" alt="coreImg" />
              <h3>Authenticity</h3>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-down" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/core2.svg" alt="coreImg" />
              <h3>Transparency</h3>
            </div>
            </div>
          <div className="col-md-4" data-aos="fade-left" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/core3.svg" alt="coreImg" />
              <h3>Commitment</h3>
            </div>
            </div>
            <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/core4.svg" alt="coreImg" />
              <h3>Self Improvement</h3>
              </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/core5.svg" alt="coreImg" />
              <h3>Team Spirit</h3>
              </div>
              </div>
              <div className="col-md-4" data-aos="fade-left" data-aos-duration="1000">
            <div className="block">
              <img src="/images/aboutUs/core6.svg" alt="coreImg" />
              <h3>Positive Results</h3>
              </div>
              </div>
         </div>
         <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
               <Link to="/contact-us" className="btn-custom">Get Started</Link>
               </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CoreValues
