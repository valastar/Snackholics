import React, { useEffect } from 'react'
import './DesignedAndDeveloped.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

function DesignedAndDeveloped() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="designedAndDeveloped">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>Websites We've Designed
                    <span> and Developed</span></h2>
                </div>
                <img data-aos="fade-up" data-aos-duration="1000" src="/images/services/designedAndDeveloped.svg" alt="designedAndDeveloped" />
                <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                    <Link to="/" className="btn-custom">Let's Talk Designs</Link>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default DesignedAndDeveloped
