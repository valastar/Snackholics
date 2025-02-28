import React, { useEffect } from 'react'
import './Services.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

function Services() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="services">
            <div className="container">
                <div className="row">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Services</h2>
                        <p>Transform your business with our impact</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/home/service1.svg" alt="serviceImg" />
                            <h3>Branding</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/home/service2.svg" alt="serviceImg" />
                            <h3>Design</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/home/service3.svg" alt="serviceImg" />
                            <h3>Software Development</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/home/service4.svg" alt="serviceImg" />
                            <h3>Digital Marketing</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/home/service5.svg" alt="serviceImg" />
                            <h3>Artificial Intelligence</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/home/service6.svg" alt="serviceImg" />
                            <h3>Immigration Consulting</h3>
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

export default Services
