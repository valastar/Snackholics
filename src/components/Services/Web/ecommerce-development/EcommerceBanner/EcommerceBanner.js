import React, { useEffect } from 'react'
import './EcommerceBanner.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

function EcommerceBanner() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="ecommerceBanner">
            <div className="container">
            <img data-aos="fade-up" data-aos-duration="1000" src="/images/services/EcommerceBanner.svg" alt="EcommerceBanner" />
            </div>
        </div>
        <div className="breadCrumbs">
            <div className="container">
                <p data-aos="fade-left" data-aos-duration="1000">
                <Link to="/" className='home'>Home</Link>
                <span>/</span>
                <Link to="/services/web/ecommerce-development" className='page'>E-Commerce Development</Link>
                </p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default EcommerceBanner
