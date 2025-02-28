import React, { useEffect } from 'react'
import AOS from 'aos';
import './WebDesignBanner.scss'
import { Link } from 'react-router-dom';

function WebDesignBanner() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="webDesignBanner">
            <div className="container">
            <img data-aos="fade-up" data-aos-duration="1000" src="/images/services/webDesign.svg" alt="webDesignBanner" />
            </div>
        </div>
        <div className="breadCrumbs">
            <div className="container">
                <p data-aos="fade-left" data-aos-duration="1000">
                <Link to="/" className='home'>Home</Link>
                <span>/</span>
                <Link to="/services/web/website-design-development" className='page'>Website Design & Development</Link>
                </p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default WebDesignBanner
