import React, { useEffect } from 'react'
import './EcommerceDevices.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

function EcommerceDevices() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="ecommerceDevices">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000">
                        <h2>E-Commerce for <span>Mobile, Tablet, and Desktop</span></h2>
                        <p>Quick Growth Marketing stands as an established eCommerce design and development company in Canada, boasting a wealth of experience with hundreds of successfully completed projects. Our team of Quick Growth eCommerce experts specializes in crafting feature-rich shopping cart solutions that blend excellent design with powerful functionalities.</p>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                        <Link to="/" className="btn-custom">Talk to Experts</Link>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000">
                        <img src="/images/services/device.svg" alt="serviceImg" />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default EcommerceDevices
